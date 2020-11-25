"use strict";

// CKEDITOR.replace("editor1");
var textEditor = document.querySelector('#text-editor');

function toggleTextEditor() {
  if (!textEditor.classList.contains('show')) {
    textEditor.classList.add('show');
  } else {
    textEditor.classList.remove('show');
  }
}
//# sourceMappingURL=all.js.map
