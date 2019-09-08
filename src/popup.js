/*
 * INIT:
 * */

// initNodeNum:: default: "1"
var initNodeNum = "1"
// RECENTGETNUM:: const: 1
const RECENTGETNUM = 1
var redoArr = Array(RECENTGETNUM)

/*
 * NUM:
 * */

const ZERO = 0
// int: recentID .. for func__UNDO
recentID = chrome.bookmarks.getRecent(RECENTGETNUM, function(r){r[ZERO].id});

/*
 * MAIN:
 * */

// key input trigger
$(document).on("keypress", "input", function(e){
	// TODO: ctrl+[ work same to ESC
	// if(event.ctrlKey) {
	//   if(e.whitch === 219) {
	//     console.log('ctrl+219 input');
	//   };
	// };

	// detect ENTER_input
	if(e.which == 13){
		var inputVal = $(this).val();
		if (inputVal === 'undo') {
			undo();
		} else if (inputVal === 'redo') {
			redo()
		} else {
			parseToDir(inputVal);
		}
	};
	// TODO:
	// clearText();
});

// TODO:
// now support only oneDir of nesting bookMark
function parseToDir(str) {
	var splitStr = str.split('::');

  // dirBookMark: bookmark
	var dirBookMark = splitStr.pop();
	// console.log(dirBookMark);

  // dirParent: for search create Dir of bookMark
	var dirParent = splitStr;
	// console.log(dirParent);
	// console.log(splitStr);

	// TODO:
	// rewite to recursive_func
	chrome.bookmarks.search(
		String(dirParent),

		function(r) {createBookMark(r[r.length-1]['parentId'], String(dirBookMark), Data.URL);}
	);
}

// TODO: Refactoring
function createBookMark(parentId, title, url) {
	chrome.bookmarks.create({
		'parentId': parentId,
		'title': title,
		'url': url
	});
}

function parseToParendDir() {
	// TODO
}

function parseToLastChildDir() {
	// TODO
}

function parseInputText(str) {
	// TODO:
	// return (list_of_parsedTEXT)
}

$('#save').click(function() {
	// TODO:
	// create bookmark
});

function undo() {
	chrome.bookmarks.getRecent(
		RECENTGETNUM,
		function(res){
			// for func__redo
			redoArr[ZERO] = {'parentId': res[ZERO].parentId, 'title': res[ZERO].title, 'url': res[ZERO].url};

			chrome.bookmarks.remove(String(res[ZERO].id))
		}
	);
};

function redo() {
	chrome.bookmarks.create(
		{ 'parentId': redoArr[ZERO]['parentId'], 'title': redoArr[ZERO]['title'], 'url': redoArr[ZERO]['url'] },
	);
};

function clearText() {
	// TODO:
	// crera TextBox
}

/*
 * DEBUG
 * */

// chrome.bookmarks.getTree(function(r){console.log(r);});
// chrome.bookmarks.getChildren(initNodeNum, function(r){console.log(r);});
// chrome.bookmarks.getRecent(RECENTGETNUM, function(r){console.log(r);});

/*
 * IDEA
 * */

// Tip:
// input blog::hoge (PARENT_DIT/blog/hoge)
// blog: parent_node
// hoge: children_file

// blog .. parent_dir
// hoge: children_node (id: .., parent_node: .., name: ..)

/*
 * TIP:
 * */

// func ..

// create
//  parse ..
//    to parentFileDir
//    to bookmarkFileDir
// undo :: undo recent_createBookMark

// NODE:
// parent_dir

// if (enter_input) {
//   chrome.bookmarks.create();
//   if ( func__parse_inputText(TEXT) = parent ) {
//     call:func__parse_to_parent_dir;
//   } else if (func__parse_inputText(TEXT) = lastChild) {
//     call:func__parse_to_dir;
//   }
// }

// func__parse_to_parent_dir() {
// }

// func__parse_to_dir() {
// }

// func__parse_inputText(string s) {
//   return parsed_dir
// }
