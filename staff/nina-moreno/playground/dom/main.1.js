console.log("Hello, DOM!");

function printDOMTree() {
  // TODO extract and print dom tree from current document html (HINT use recursion)

  for (var i = 0; i < document.childNodes.length; i++) {
    var child = document.childNodes[i];

    if (child instanceof DocumentType) continue;

    console.log(child.nodeName);

    for (var j = 0; j < child.childNodes.length; j++) {
      var child2 = child.childNodes[j];

      if (child2 instanceof Text) continue;

      console.log(" ", child2.nodeName);

      for (var k = 0; k < child2.childNodes.length; k++) {
        var child3 = child2.childNodes[k];

        if (child3 instanceof Text) continue;

        console.log("  ", child3.nodeName);

        for (var l = 0; l < child3.childNodes.length; l++) {
          var child4 = child3.childNodes[l];

          if (child4 instanceof Text) continue;

          console.log("   ", child4.nodeName);

          for (var m = 0; m < child4.childNodes.length; m++) {
            var child5 = child4.childNodes[m];

            if (child5 instanceof Text) continue;

            console.log("    ", child5.nodeName);

            for (var n = 0; n < child5.childNodes.length; n++) {
              var child6 = child5.childNodes[n];

              if (child6 instanceof Text) continue;

              console.log("     ", child6.nodeName);
            }
          }
        }
      }
    }
  }
}

printDOMTree();

/*
html
    head
        meta
        meta
        title
    body
        h1
        p
        h2
        ul
            li
            li
            li
        h2
        table
            tbody
                tr
                    th
                    th
                    th
                tr
                    td
                    td
                    td
                tr
                    td
                    td
                    td
                tr
                    td
                    td
                    td
        script
*/
