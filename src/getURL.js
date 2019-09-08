let Data = {"URL": ""}

chrome.tabs.getSelected(tab=>{
		Data.URL = tab.url;
		console.log(`URL: ${Data.URL}`);
});
