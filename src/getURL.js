// get URL of tab User can see
let Data = {"URL": ""}

chrome.tabs.getSelected(tab=>{
		Data.URL = tab.url;
});
