function addWidgetsfrmDashboard() {
    frmDashboard.setDefaultUnit(kony.flex.DP);
    var flxMain = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "flxMain",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMain.setDefaultUnit(kony.flex.DP);
    var flxHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "9%",
        "id": "flxHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0f49e9119ae7e45",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxHeader.setDefaultUnit(kony.flex.DP);
    var Image0d869466123794a = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "Image0d869466123794a",
        "isVisible": true,
        "skin": "slImage",
        "src": "logo.png",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxHeader.add(Image0d869466123794a);
    var flxBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "91%",
        "id": "flxBody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxBody.setDefaultUnit(kony.flex.DP);
    var imgFormBG = new kony.ui.Image2({
        "id": "imgFormBG",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "bg.png",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxGenral = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "550dp",
        "id": "flxGenral",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "50dp",
        "skin": "slFbox",
        "width": "48%",
        "zIndex": 1
    }, {}, {});
    flxGenral.setDefaultUnit(kony.flex.DP);
    var flxGeneralHdr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "60dp",
        "id": "flxGeneralHdr",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0e864e211438b4d",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxGeneralHdr.setDefaultUnit(kony.flex.DP);
    var lblGeneralHdr = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblGeneralHdr",
        "isVisible": true,
        "left": 0,
        "skin": "CopyslLabel0f4502622ceb747",
        "text": "General",
        "top": 0,
        "width": "94%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxGeneralHdr.add(lblGeneralHdr);
    var segGeneral = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "lblMenuItemDesc": "General Operation Instructions",
            "lblSeparatorLine": ""
        }, {
            "lblMenuItemDesc": "Network Safeworking Rules and Procedures",
            "lblSeparatorLine": ""
        }, {
            "lblMenuItemDesc": "Corporate Procedures",
            "lblSeparatorLine": ""
        }, {
            "lblMenuItemDesc": "Control System Manual",
            "lblSeparatorLine": ""
        }, {
            "lblMenuItemDesc": "Station Sketches",
            "lblSeparatorLine": ""
        }, {
            "lblMenuItemDesc": "Internal Maps",
            "lblSeparatorLine": ""
        }, {
            "lblMenuItemDesc": "Emergency Management Procedure",
            "lblSeparatorLine": ""
        }, {
            "lblMenuItemDesc": "Escalation Plan",
            "lblSeparatorLine": ""
        }],
        "groupCells": true,
        "id": "segGeneral",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg0ic10d9fb09c544",
        "rowTemplate": FBox0fdc75444896c43,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "separatorThickness": 0,
        "showScrollbars": false,
        "top": "70dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flxGeneralMenu": "flxGeneralMenu",
            "lblMenuItemDesc": "lblMenuItemDesc",
            "lblSeparatorLine": "lblSeparatorLine"
        },
        "widgetSkin": "Copyseg0a4f8d3e79b2b46",
        "width": "49%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var segGeneral2 = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "lblMenuItemDesc": "Network Controllers Roster",
            "lblSeparatorLine": ""
        }, {
            "lblMenuItemDesc": "Corporate Safety Alerts",
            "lblSeparatorLine": ""
        }, {
            "lblMenuItemDesc": "Corporate Safety Directives",
            "lblSeparatorLine": ""
        }, {
            "lblMenuItemDesc": "Operational Safety Directives",
            "lblSeparatorLine": ""
        }, {
            "lblMenuItemDesc": "AMS",
            "lblSeparatorLine": ""
        }, {
            "lblMenuItemDesc": "Internal Contacts",
            "lblSeparatorLine": ""
        }, {
            "lblMenuItemDesc": "General Work Instructions",
            "lblSeparatorLine": ""
        }, {
            "lblMenuItemDesc": "General Work Directives",
            "lblSeparatorLine": ""
        }],
        "groupCells": true,
        "id": "segGeneral2",
        "isVisible": true,
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "right": "0dp",
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg0ic10d9fb09c544",
        "rowTemplate": CopyFBox0ga6f1fee82e84e,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "separatorThickness": 0,
        "showScrollbars": false,
        "top": "70dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flxGeneralMenu": "flxGeneralMenu",
            "lblMenuItemDesc": "lblMenuItemDesc",
            "lblSeparatorLine": "lblSeparatorLine"
        },
        "widgetSkin": "Copyseg0a4f8d3e79b2b46",
        "width": "49%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxGenral.add(flxGeneralHdr, segGeneral, segGeneral2);
    var flxControlDesk = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "550dp",
        "id": "flxControlDesk",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "750dp",
        "skin": "slFbox",
        "width": "22%",
        "zIndex": 1
    }, {}, {});
    flxControlDesk.setDefaultUnit(kony.flex.DP);
    var flxControlDeskHdr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "60dp",
        "id": "flxControlDeskHdr",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0e864e211438b4d",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxControlDeskHdr.setDefaultUnit(kony.flex.DP);
    var lblControlDeskHdr = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblControlDeskHdr",
        "isVisible": true,
        "left": 0,
        "skin": "CopyslLabel0f4502622ceb747",
        "text": "Control Desk",
        "top": 0,
        "width": "94%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxControlDeskHdr.add(lblControlDeskHdr);
    var segControlDesk = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "lblMenuItemDesc": "Eastern",
            "lblSeparatorLine": ""
        }, {
            "lblMenuItemDesc": "Northen",
            "lblSeparatorLine": ""
        }, {
            "lblMenuItemDesc": "South",
            "lblSeparatorLine": ""
        }, {
            "lblMenuItemDesc": "Mid-West",
            "lblSeparatorLine": ""
        }, {
            "lblMenuItemDesc": "EGR",
            "lblSeparatorLine": ""
        }, {
            "lblMenuItemDesc": "Central",
            "lblSeparatorLine": ""
        }, {
            "lblMenuItemDesc": "Picton",
            "lblSeparatorLine": ""
        }, {
            "lblMenuItemDesc": "South-West, Escalation Plan",
            "lblSeparatorLine": ""
        }],
        "groupCells": true,
        "id": "segControlDesk",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_h762d1550fba48359fd082d104a4eb90,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg0h8f5f095713c4c",
        "rowTemplate": CopyFBox0f25c242c1dc24b,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "separatorThickness": 0,
        "showScrollbars": false,
        "top": "70dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flxControlDeskRow": "flxControlDeskRow",
            "lblMenuItemDesc": "lblMenuItemDesc",
            "lblSeparatorLine": "lblSeparatorLine"
        },
        "widgetSkin": "Copyseg0a4f8d3e79b2b46",
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxControlDesk.add(flxControlDeskHdr, segControlDesk);
    var flxCDSubMenu = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "35%",
        "clipBounds": true,
        "height": "180dp",
        "id": "flxCDSubMenu",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1074dp",
        "skin": "slFbox",
        "width": "22%",
        "zIndex": 1
    }, {}, {});
    flxCDSubMenu.setDefaultUnit(kony.flex.DP);
    var segSubMenu = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "lblMenuItemDesc": "External Contact Numbers",
            "lblSeparatorLine": " "
        }, {
            "lblMenuItemDesc": "Midwest Control Work Instructions",
            "lblSeparatorLine": " "
        }, {
            "lblMenuItemDesc": "Midwest Control Work Directives",
            "lblSeparatorLine": " "
        }],
        "groupCells": true,
        "id": "segSubMenu",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg0j617e6357ee34c",
        "rowTemplate": CopyFBox0ja7cfcecd54440,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "separatorThickness": 0,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flxSubMenu": "flxSubMenu",
            "lblMenuItemDesc": "lblMenuItemDesc",
            "lblSeparatorLine": "lblSeparatorLine"
        },
        "widgetSkin": "Copyseg0a4f8d3e79b2b46",
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxCDSubMenu.add(segSubMenu);
    flxBody.add(imgFormBG, flxGenral, flxControlDesk, flxCDSubMenu);
    flxMain.add(flxHeader, flxBody);
    frmDashboard.add(flxMain);
};

function frmDashboardGlobals() {
    frmDashboard = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDashboard,
        "enabledForIdleTimeout": false,
        "id": "frmDashboard",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": false,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["flxBody", "flxCDSubMenu", "flxControlDesk", "flxControlDeskHdr", "flxGeneralHdr", "flxGenral", "flxHeader", "flxMain", "Image0d869466123794a", "imgFormBG", "lblControlDeskHdr", "lblGeneralHdr", "segControlDesk", "segGeneral", "segGeneral2", "segSubMenu"],
        "retainScrollPosition": false
    });
};