//Type your code here
function isEmpty(strInput) {
    var flag = false;
    if (strInput == undefined || strInput == null || strInput == "" || strInput.length <= 0) {
        flag = true;
    }
    return flag;
}