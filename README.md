# [spaceBookMarks](https://chrome.google.com/webstore/detail/spacebookmarks/ecahpfejocepicljldbdohmakckkojje) (beta)

![spaceBookMarks](https://github.com/YSawc/spaceBookMarks/blob/master/screenshot/spaceBookMarks.jpg)

### blowserExtention

Features:
 - startup with autoFocus in TextArea
 - inputTextFunc ..
   - div parentFile with `::` and create BookMark
   - ex.. input `DIR::HOGE` -> yourDefaultBookMarkdir/DIR/HOGE
	 - `undo` work undo via recent active to create bookMark
	 - `redo` work redo via recent undo

## License
MIT


## 日本人向けのヘルプはここから

# [spaceBookMarks](https://chrome.google.com/webstore/detail/spacebookmarks/ecahpfejocepicljldbdohmakckkojje)(chrome拡張)

![スクリーンショット 2019-09-09 6.03.59.jpg](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/287566/2e45a07e-0cc4-031d-c6d5-714953dc846d.jpeg)

### これは何

- 「ブックマーク作成に一々マウス使いたくねぇ」
そんな方のために作成中の、キーボードのみでブックマークが作成できるブラウザプラグインです。

## 特徴

- `blog::YSawc`と入力して `Enter` を押下すると、blogファイルを検索して、直下にブックマーク登録できます。
    - 詳細: 名前空間でテキストを入力すると、`::`を元にしてファイルディレクトリして指定でき、そのファイル直下にブックマークが作成されます。
- `undo`
  - 直前に作成したブックマーク、やっぱ要らないから削除したい、ってなることありませんか?ありますよね?!?で、どこにディレクトリ作ったのかマウスでディレクトリを辿っていくのですが、フォルダが少し深くなると段々イライラしてきます。そんなに気に`undo`です。直前の作成したブックマークを削除出来ます。

- テキスト部分にコマンドを打ち込むことでブックマークの作成、間違った時用に`undo`、undoを取り消す`redo`の機能も備えました。

..以上(現在進行系)

## 不親切な仕様です (TODO: 実装)

 - UIはかなり見辛いかもです。タイトルとテキストボックスしかなく、コマンドを打ち込んでenterを押下しても、見た目が変わることがないのですが仕様です。コマンドを連打しないように気をつけてください。
 - 例として、blog1のフォルダの中のafterReadのフォルダの中にhogeというブックマークを作りたいとして、`blog1::afterRead::hoge` という使い方は現在実装出来ていません。
   - 対策というか仕様
       - ブックマークしたい直上のディレクトリ名を`::`の前に指定して使用してください。(blog直下に作りたいならblog::hogeみたいなイメージです。更に例を上げると、 `DIR1/DIR2/DIR3/.../DIR99/[ここにブックマークファイル作りたい]` 、であれば `DIR99::HOGE` といった使い方です。)
       - オプションでディレクトリを辿れる実装をする予定です。
 - あとは現時点の仕様で、同名のディレクトリがあると思ったような挙動にならないです。
 - `undo`は連打すると大変なことになっていきます。その場合`redo`を適当回数連打してください。
 - `redo`は連打すると大変なことになっていきます。その場合`undo`を適当回数連打してください。

## まだ未実装 (思いつき次第追記します。)

- 後で足していきます。


## 仕様周り軽く解説

- `blog::YSawc`

blogという名前のディレクトリを検索して、直下にYSawcというタイトル、現在開いているタブのURLでブックマークを保存します。

- ディレクトリの親ノード

デフォルトだとブラウザ標準の[ブックマーク]というディレクトリが親ノードになります。
なので、ユーザー任意でディレクトリを指定できるように実装予定です。

## 私事

機能拡大はそこまでしないと思います。実装するとしたら、ミニマムに実装していきたいです。
