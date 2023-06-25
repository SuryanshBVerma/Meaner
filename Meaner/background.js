console.log("Running in background");

chrome.browserAction.onClicked.addListener(function(tab)
{
    let msg = "change";
    chrome.tabs.sendMessage(tab.id,msg);
});
 