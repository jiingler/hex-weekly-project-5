// CKEDITOR.replace("editor1");

const textEditor = document.querySelector('#text-editor');

function toggleTextEditor() {
  if (!textEditor.classList.contains('show')) {
    textEditor.classList.add('show');
  } else {
    textEditor.classList.remove('show');
  }
}




