// Tip:
// input blog::hoge (PARENT_DIT/blog/hoge)
// blog: parent_node
// hoge: children_file

// blog .. parent_dir
// hoge: children_node (id: .., parent_node: .., name: ..)

$(function() {
  $('#search').change(function() {
     $('#create_bookmark').empty();
     dumpBookmarks($('#search').val());
  });
});

function dumpBookmarks(query) {
  var bookmarkTreeNodes = chrome.bookmarks.getTree(
	  // officialy
    function(bookmarkTreeNodes) {
      $('#bookmarks').append(dumpTreeNodes(bookmarkTreeNodes, query));
    });
}
