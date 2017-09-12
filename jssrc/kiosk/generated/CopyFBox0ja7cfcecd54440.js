function initializeCopyFBox0ja7cfcecd54440() {
    CopyFBox0ja7cfcecd54440 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": false,
        "height": "60dp",
        "id": "CopyFBox0ja7cfcecd54440",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    CopyFBox0ja7cfcecd54440.setDefaultUnit(kony.flex.DP);
    var flxSubMenu = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxSubMenu",
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
    flxSubMenu.setDefaultUnit(kony.flex.DP);
    var lblMenuItemDesc = new kony.ui.Label({
        "centerX": "50%",
        "height": "99%",
        "id": "lblMenuItemDesc",
        "isVisible": true,
        "skin": "CopyslLabel0e4ed42af93954f",
        "text": "Label",
        "top": "0%",
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
        "skin": "CopyslLabel0cca8f918c39c44",
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
    flxSubMenu.add(lblMenuItemDesc, lblSeparatorLine);
    CopyFBox0ja7cfcecd54440.add(flxSubMenu);
}