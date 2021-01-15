$(document).ready(function() {
  let name = window.location.href.split("echo-url.github.io/")[1];

  if (name === undefined || name == "") {
    $("#maintext").text(decodeURI(window.location.href));
  } else {
    $("#maintext").text(decodeURI(name));
    document.title = decodeURI(name);
  }
});