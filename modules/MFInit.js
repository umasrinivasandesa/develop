//Type your code here

mfConfigParams = {
  "APPKEY":"d379e80c7e57216a89f4c4b67dffcf92",
  "APP_SECRET":"6dd3a62f4eef0c996bb90c8c10a22bd7",
  "SERVICE_URL":"https://100016619.auth.konycloud.com/appconfig",
  "API_KEY":"e2235ef4ff7378774a0c29bf1cb864ea2c632e3c",
  "INTEGRATION_SERVICE_NAME" : "ArcInfraService"
  
};
integrationClient = null;
isMFInitSuceess = false;
function mfInit(){
  	isMFInitSuceess = false;
  	KNYMobileFabricClient = new kony.sdk();
    KNYMobileFabricClient.init(mfConfigParams.APPKEY,mfConfigParams.APP_SECRET,mfConfigParams.SERVICE_URL,initSuccessCallback, initErrorCallback);
    function initSuccessCallback(response){
      //code for success call back
      kony.print("initSuccessCallback.");
      kony.print("response:-- "+JSON.stringify(response));
      alert("mfInit success...");
      isMFInitSuceess = true;
      invokeGetDashboardMenuItems();
    }
    function initErrorCallback(response){
      //code for failure call back
      kony.print("initErrorCallback");
      kony.print("response:-- "+JSON.stringify(response));
      isMFInitSuceess = false;
    }
}