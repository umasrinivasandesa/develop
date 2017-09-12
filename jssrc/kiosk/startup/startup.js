//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "ArcInfra",
    appName: "ArcInfra",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.20.17.78",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "ArcInfra",
    isMFApp: false,
    url: "https://arc-infrastructure-qa.konycloud.com/ArcInfra/MWServlet",
    secureurl: "https://arc-infrastructure-qa.konycloud.com/ArcInfra/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeUserWidgets();
    initializeCopyFBox0f25c242c1dc24b();
    initializeCopyFBox0ga6f1fee82e84e();
    initializeCopyFBox0ja7cfcecd54440();
    initializeFBox0fdc75444896c43();
    frmDashboardGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        APILevel: 7300
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        postappinit: AS_AppEvents_c832c3006817484a96ea10af74fbfdc2,
        showstartupform: function() {
            frmDashboard.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();