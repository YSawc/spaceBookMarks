// Tip:
// input blog::hoge
// blog: parent_node
// hoge: children_file

function dumpBookmarks(query) {
  var bookmarkTreeNodes = chrome.bookmarks.getTree(
	  // officialy
    function(bookmarkTreeNodes) {
      $('#bookmarks').append(dumpTreeNodes(bookmarkTreeNodes, query));
    });
}
