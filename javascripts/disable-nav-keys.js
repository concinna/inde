document.addEventListener("keydown", function (e) {
  if (
    ["h", "j", "k", "l", "n", "p"].includes(e.key) &&
    !["INPUT", "TEXTAREA"].includes(e.target.tagName)
  ) {
    e.stopPropagation();
  }
}, true);