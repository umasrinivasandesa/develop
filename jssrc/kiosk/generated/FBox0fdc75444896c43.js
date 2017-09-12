function initializeFBox0fdc75444896c43() {
    FBox0fdc75444896c43 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": false,
        "height": "60dp",
        "id": "FBox0fdc75444896c43",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    FBox0fdc75444896c43.setDefaultUnit(kony.flex.DP);
    var flxGeneralMenu = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxGeneralMenu",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerWeight": 100
    }, {});
    flxGeneralMenu.setDefaultUnit(kony.flex.DP);
    var lblMenuItemDesc = new kony.ui.Label({
        "centerX": "50%",
        "height": "99%",
        "id": "lblMenuItemDesc",
        "isVisible": true,
        "skin": "CopyslLabel0iafef78930414e",
        "text": "Label",
        "top": "0dp",
        "width": "92%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblSeparatorLine = new kony.ui.Label({
        "centerX": "50%",
        "height": "1dp",
        "id": "lblSeparatorLine",
        "isVisible": true,
        "skin": "CopyslLabel0a47c722bbd7b4b",
        "text": "Label",
        "top": "59dp",
        "width": "92%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    flxGeneralMenu.add(lblMenuItemDesc, lblSeparatorLine);
    FBox0fdc75444896c43.add(flxGeneralMenu);
}