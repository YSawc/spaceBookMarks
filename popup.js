// Tip:
// input blog::hoge (PARENT_DIT/blog/hoge)
// blog: parent_node
// hoge: children_file

// blog .. parent_dir
// hoge: children_node (id: .., parent_node: .., name: ..)

// TIP:
// func ..
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



