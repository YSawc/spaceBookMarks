// Tip:
// input blog::hoge (PARENT_DIT/blog/hoge)
// blog: parent_node
// hoge: children_file

// blog .. parent_dir
// hoge: children_node (id: .., parent_node: .., name: ..)

// TIP:
// func ..
//
// create
// parse ..
//		to parentFileDir
//		to bookmarkFileDir

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

function createBookMark() {
	// TODO:
	// call:parser(TEXT)
	chrome.bookmarks.create({
			parentId: bookmarkNode.id,
			title: // call:parser(TEXT:returned_LastChildDir)
	});
}

function parser(enter_input) {
	chrome.bookmarks.create();
	if ( func__parse_inputText(TEXT) = parent ) {
		// TODO:
		// call:func__parse_to_parent_dir;
	} else if (func__parse_inputText(TEXT) = lastChild) {
		// TODO:
		// call:func__parse_to_dir;
	} else if (func__parse_inputText(TEXT) = doubleCollon) {
		// TODO:
		// call:func__divDir;
	}
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
