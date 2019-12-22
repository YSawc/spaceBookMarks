const initNodeNum = "1"
const RECENTGETNUM = 1
let redoArr = Array(RECENTGETNUM)

const ZERO = 0
recentID = chrome.bookmarks.getRecent(RECENTGETNUM, function(r){r[ZERO].id});

$(document).on("keypress", "input", function(e){
	// detect ENTER_input
	if(e.which == 13){
		let inputVal = $(this).val();
		if (inputVal === 'undo') {
			undo();
		} else if (inputVal === 'redo') {
			redo()
		} else if (inputVal.includes('::')) {
			parseToDir(inputVal);
		}
	};
	// TODO:
	// clearText();
});

// TODO:
// now support only oneDir of nesting bookMark
function parseToDir(str) {
	let splitStr = str.split('::');
	let dirBookMark = splitStr.pop();
	let dirParent = splitStr;

	// TODO:
	// rewite to recursive_func
	chrome.bookmarks.search(
		String(dirParent),
		function(r) {
			for (let i=0; i < r.length; i++ ) {
				if (r[i.toString()].title === String(dirParent)) {
					const dirParentID = r[i.toString()].id;
					createBookMark(dirParentID, String(dirBookMark), Data.URL);
					return true;
				};
			};
		}
	);
}

function createBookMark(parentId, title, url) {
	chrome.bookmarks.create({
		'parentId': parentId,
		'title': title,
		'url': url
	});
}

function undo() {
	chrome.bookmarks.getRecent(
		RECENTGETNUM,
		function(res){
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

/*
 * DEBUG
 * */

// chrome.bookmarks.getTree(function(r){console.log(r);});
// chrome.bookmarks.getChildren(initNodeNum, function(r){console.log(r);});
// chrome.bookmarks.getRecent(RECENTGETNUM, function(r){console.log(r);});
