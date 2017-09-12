//Type your code here
function invokeIntegrationService() {
    if (isMFInitSuceess) {
        if (isEmpty(integrationClient)) {
            integrationClient = KNYMobileFabricClient.getIntegrationService(mfConfigParams.INTEGRATION_SERVICE_NAME);
        }
    }
}

function loadGeneralSegment() {
    setFormHeader("Dashboard", "");
    mfInit();
    var segData = getGenaralMenuData();
    frmDashboard.segGeneral.setData(segData);
    var ncdData = getNetworkControlDeskData();
    frmDashboard.segControlDesk.setData(ncdData);
}

function invokeGetDashboardMenuItems() {
    invokeIntegrationService();
    var getMenuSuccessCallback = function(response) {
        kony.print("getMenuSuccessCallback.");
        kony.print("response: " + JSON.stringify(response));
        var dashboardData = buildDashboardList(response);
        kony.print("dashboardData: " + JSON.stringify(dashboardData));
        if (dashboardData != null) {
            buildGeneralSegData(dashboardData);
            buildControlDeskSegData(dashboardData);
            frmDashboard.flxCDSubMenu.setVisibility(false);
        }
    };
    var getMenuErrorCallback = function(response) {
        kony.print("getMenuErrorCallback.");
        kony.print("response: " + JSON.stringify(response));
    };
    var headers = {
        "apikey": mfConfigParams.API_KEY
    };
    var reqParams = {};
    if (!isEmpty(integrationClient)) {
        integrationClient.invokeOperation("MenuConfigurationGet", headers, reqParams, getMenuSuccessCallback, getMenuErrorCallback);
    }
}

function buildDashboardList(response) {
    var menuHeaderTab = [];
    if (response && (response.opstatus == "0" || response.opstatus == 0)) {
        menuHeaderTab = response.MenuHeader;
        var MenuItemsTab = response.MenuItems;
        var hdrTabLen = menuHeaderTab.length;
        for (var i = 0; i < hdrTabLen; i++) {
            var itemTabLen = MenuItemsTab.length;
            var hdrMenuId = menuHeaderTab[i].MenuId;
            var subMenuTab = [];
            for (var j = 0; j < itemTabLen; j++) {
                var itemMenuId = MenuItemsTab[j].MenuId;
                if (hdrMenuId == itemMenuId) {
                    subMenuTab.push(MenuItemsTab[j]);
                }
            }
            menuHeaderTab[i]["subMenu"] = subMenuTab;
        }
    }
    return menuHeaderTab;
}

function buildGeneralSegData(menuTab) {
    kony.print("inside buildGeneralSegData");
    var genDataObj = null;
    if (menuTab != null && menuTab.length > 0) {
        kony.print("inside buildGeneralSegData--------------------");
        var dataLen = menuTab.length;
        kony.print("inside buildGeneralSegData--------------------" + dataLen);
        for (var i = 0; i < dataLen; i++) {
            var menuId = kony.os.toNumber(menuTab[i].MenuId);
            var menuDesc = menuTab[i].Description;
            var tabOrder = kony.os.toNumber(menuTab[i].TabOrder);
            kony.print("inside buildGeneralSegData--------------------" + menuId + menuDesc + tabOrder);
            if (menuId == 1 && menuDesc == "General" && tabOrder == 1) {
                kony.print("inside buildGeneralSegData--------------------inside if");
                genDataObj = menuTab[i];
                break;
            }
        }
    }
    if (genDataObj != null) {
        var subMenu = genDataObj.subMenu;
        var hdrName = genDataObj.Description;
        frmDashboard.lblGeneralHdr.text = hdrName;
        frmDashboard.segGeneral.widgetDataMap = {
            "MenuId": "MenuId",
            "lblMenuItemDesc": "Description",
            "lblSeparatorLine": "lblSeparatorLine",
            "flxGeneralMenu": "flxGeneralMenu",
            "ButtonOrder": "ButtonOrder",
            "MenuItemId": "MenuItemId",
            "Url": "Url"
        };
        frmDashboard.segGeneral2.widgetDataMap = {
            "MenuId": "MenuId",
            "lblMenuItemDesc": "Description",
            "lblSeparatorLine": "lblSeparatorLine",
            "flxGeneralMenu": "flxGeneralMenu",
            "ButtonOrder": "ButtonOrder",
            "MenuItemId": "MenuItemId",
            "Url": "Url"
        };
        var subMenulen = subMenu.length;
        for (var j = 0; j < subMenulen; j++) {
            subMenu[j].lblSeparatorLine = " ";
            subMenu[j].flxGeneralMenu = {
                visible: true
            };
        }
        subMenu = subMenu.sort(sortByButtonOrder);
        var splitLen = subMenulen / 2;
        kony.print("subMenulen: " + subMenulen);
        kony.print("splitLen: " + splitLen);
        var segData1 = subMenu.splice(0, splitLen);
        var segData2 = subMenu;
        frmDashboard.segGeneral.setData(segData1);
        frmDashboard.segGeneral2.setData(segData2);
    }
}

function sortByButtonOrder(objA, objB) {
    kony.print("objA: " + objA.ButtonOrder);
    kony.print("objB: " + objB.ButtonOrder);
    var retVal = 0;
    if (objA.ButtonOrder > objB.ButtonOrder) {
        retVal = 1;
    } else if (objA.ButtonOrder < objB.ButtonOrder) {
        retVal = -1;
    } else {
        retVal = 0
    }
    return retVal;
}

function buildControlDeskSegData(menuTab) {
    kony.print("inside buildControlDeskSegData");
    var genDataObj = [];
    if (menuTab != null && menuTab.length > 0) {
        kony.print("inside buildControlDeskSegData--------------------");
        var dataLen = menuTab.length;
        kony.print("inside buildControlDeskSegData--------------------" + dataLen);
        for (var i = 0; i < dataLen; i++) {
            var menuId = kony.os.toNumber(menuTab[i].MenuId);
            var menuDesc = menuTab[i].Description;
            var tabOrder = kony.os.toNumber(menuTab[i].TabOrder);
            kony.print("inside buildControlDeskSegData--------------------" + menuId + menuDesc + tabOrder);
            if (menuId == 1 && menuDesc == "General" && tabOrder == 1) {
                kony.print("inside buildControlDeskSegData--------------------inside if");
                continue;
            }
            menuTab[i].imgArrow = {
                src: "right_arrow.png",
                visible: true
            };
            menuTab[i].lblSeparatorLine = " ";
            genDataObj.push(menuTab[i]);
        }
    }
    if (genDataObj.length > 0) {
        frmDashboard.segControlDesk.widgetDataMap = {
            "TabOrder": "TabOrder",
            "MenuId": "MenuId",
            "lblMenuItemDesc": "Description",
            "lblSeparatorLine": "lblSeparatorLine",
            "subMenu": "subMenu",
            "imgArrow": "imgArrow"
        };
        genDataObj = genDataObj.sort(sortByTabOrder);
        frmDashboard.segControlDesk.setData(genDataObj);
    }
}

function sortByTabOrder(objA, objB) {
    kony.print("objA: " + objA.TabOrder);
    kony.print("objB: " + objB.TabOrder);
    var retVal = 0;
    if (objA.TabOrder > objB.TabOrder) {
        retVal = 1;
    } else if (objA.TabOrder < objB.TabOrder) {
        retVal = -1;
    } else {
        retVal = 0
    }
    return retVal;
}

function onClickGeneralSeg(segmentObj) {
    kony.print("segmentObj: " + segmentObj);
    //Sample URL
    var url = "https://konyone.sharepoint.com/sites/Training/DigitalChalkHostedTrainingMirror/SitePages/Home.aspx";
    var selectedItem = segmentObj.selectedRowItems;
    var selectedIndex = segmentObj.selectedRowIndex[1];
    var segData = segmentObj.data;
    kony.print("selectedItem: " + JSON.stringify(selectedItem));
    //alert("selectedItem: "+JSON.stringify(selectedItem));
    //alert("segData: "+JSON.stringify(segData));
    //alert("selectedIndex: "+selectedIndex);
    var selectedName = segData[selectedIndex].Description;
    kony.print("selectedName: " + selectedName);
    kony.print("selectedIndex: " + selectedIndex);
    var urlInfo = segData[selectedIndex].Url;
    if (selectedName == "AMS") {
        frmAMS.show();
        setFormHeader("AMS", selectedName);
    } else {
        if (isEmpty(urlInfo)) {
            urlInfo = url;
        }
        var urlConfig = {
            URL: urlInfo,
            requestMethod: constants.BROWSER_REQUEST_METHOD_GET
        };
        kony.print("urlConfig: " + JSON.stringify(urlConfig));
        frmBrowser.browser1.requestURLConfig = urlConfig;
        frmBrowser.show();
        setFormHeader("Browser", selectedName);
    }
}

function onClickControlSeg() {
    kony.print("onClickControlSeg: ");
    var selectedItem = frmDashboard.segControlDesk.selectedRowItems;
    var selectedIndex = frmDashboard.segControlDesk.selectedRowIndex[1];
    var segData = frmDashboard.segControlDesk.data;
    kony.print("selectedItem: " + JSON.stringify(selectedItem));
    //alert("selectedItem: "+JSON.stringify(selectedItem));
    //alert("segData: "+JSON.stringify(segData));
    //alert("selectedIndex: "+selectedIndex);
    var selectedName = segData[selectedIndex].Description;
    var subMenu = segData[selectedIndex].subMenu;
    kony.print("selectedName: " + selectedName);
    kony.print("selectedIndex: " + JSON.stringify(subMenu));
    buildCDSubMenuList(subMenu);
    //frmBrowser.show();
}

function buildCDSubMenuList(subMenu) {
    if (subMenu != null && subMenu.length > 0) {
        var subMenulen = subMenu.length;
        for (var j = 0; j < subMenulen; j++) {
            subMenu[j].lblSeparatorLine = " ";
            subMenu[j].flxSubMenu = {
                visible: true
            };
            subMenu[j].imgArrow = {
                src: "right_arrow.png",
                visible: true
            };
        }
        frmDashboard.segSubMenu.widgetDataMap = {
            "MenuId": "MenuId",
            "lblMenuItemDesc": "Description",
            "lblSeparatorLine": "lblSeparatorLine",
            "flxSubMenu": "flxSubMenu",
            "ButtonOrder": "ButtonOrder",
            "MenuItemId": "MenuItemId",
            "Url": "Url",
            "imgArrow": "imgArrow"
        };
        subMenu = subMenu.sort(sortByButtonOrder);
        frmDashboard.segSubMenu.setData(subMenu);
        frmDashboard.flxCDSubMenu.setVisibility(true);
    }
}