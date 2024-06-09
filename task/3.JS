function applyTextFormatting() {
  var fontFamily = document.getElementById("font_family").value;
  var fontSize = document.getElementById("font_size").value;
  var isItalic = document.getElementById("font_italic").checked;
  var isBold = document.getElementById("font_bold").checked;
  var isUnderline = document.getElementById("font_underline").checked;

  var textElement = document.getElementById("text");
  textElement.style.fontFamily = fontFamily;
  textElement.style.fontSize = fontSize;
  textElement.style.fontStyle = isItalic ? "italic" : "normal";
  textElement.style.fontWeight = isBold ? "bold" : "normal";
  textElement.style.textDecoration = isUnderline ? "underline" : "none";
}

// إضافة مستمع لحدث 'change' على النموذج
document.forms["form"].addEventListener("change", applyTextFormatting);

applyTextFormatting();
