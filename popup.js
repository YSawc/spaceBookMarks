// Tip:
// input blog::hoge (PARENT_DIT/blog/hoge)
// blog: parent_node
// hoge: children_file

// blog .. parent_dir
// hoge: children_node (id: .., parent_node: .., name: ..)

$(function() {
  $('#create_bookmark').change(function() {
		var str_splited = $('#create_bookmark').val().split("::");

     dumpBookmarks($('#create_bookmark').val());
  });
});

function dumpBookmarks(query) {
  var bookmarkTreeNodes = chrome.bookmarks.getTree(
	  // officialy
    function(bookmarkTreeNodes) {
      $('#bookmarks').append(dumpTreeNodes(bookmarkTreeNodes, query));
    });
}
