function initializeCopyFBox0f25c242c1dc24b() {
    CopyFBox0f25c242c1dc24b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": false,
        "height": "60dp",
        "id": "CopyFBox0f25c242c1dc24b",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    CopyFBox0f25c242c1dc24b.setDefaultUnit(kony.flex.DP);
    var flxControlDeskRow = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxControlDeskRow",
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
    flxControlDeskRow.setDefaultUnit(kony.flex.DP);
    var lblMenuItemDesc = new kony.ui.Label({
        "centerX": "50%",
        "height": "99%",
        "id": "lblMenuItemDesc",
        "isVisible": true,
        "skin": "CopyslLabel0f0de95aebec04d",
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
        "skin": "CopyslLabel0c6874f92752645",
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
    flxControlDeskRow.add(lblMenuItemDesc, lblSeparatorLine);
    CopyFBox0f25c242c1dc24b.add(flxControlDeskRow);
}