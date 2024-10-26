console.log("Hello, DOM!");

function printDOMTree(node, level) {
  if (node === undefined) node = document;
  if (level === undefined) level = 0;

  for (var i = 0; i < node.childNodes.length; i++) {
    var child = node.childNodes[i];

    if (child instanceof DocumentType || child instanceof Text) continue;

    var ident = " ";

    for (var j = 0; j < level; j++) ident = ident + " ";

    console.log(level, ident + child.nodeName);

    printDOMTree(child, level + 1);
  }
}

printDOMTree();

/*
0 html
1    head
2        meta
2        meta
2        title
1    body
2        h1
2        p
2        h2
2        ul
3            li
3            li
3            li
2        h2
2        table
3            tbody
4                tr
5                    th
5                    th
5                    th
4                tr
5                    td
5                    td
5                    td
4                tr
5                    td
5                    td
5                    td
4                tr
5                    td
5                    td
5                    td
2        script
*/
