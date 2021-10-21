
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  if (message.txt === "hello") {
    console.log("im in")
    var textInput = document.querySelectorAll('[aria-label="Message Body"]')[1];
    // console.log(textInput.textContent);
    console.log(textInput.innerHTML);
    // console.log(textInput.childNodes)
    // console.log(textInput.children)
    // textInput.content
    highlight(textInput);
  }
}

function highlight(element) {
  correctedText = 'xin vĩnh biệt cụ tạm biệt cuộc đời alo';
  // elementText = element.textContent;
  const span = new RegExp("<span.*?>", 'g')
  const span_end = new RegExp("</span>", 'g')
  const div = new RegExp("<div.*?>", 'g')
  const div_end = new RegExp("</div>", 'g')

  tmp = element.innerHTML.replaceAll(span, ' ');
  tmp = tmp.replaceAll(span_end, ' ');
  tmp = tmp.replaceAll(div, ' ');
  tmp = tmp.replaceAll(div_end, ' ');
  tmp = tmp.replace(/\s+/g,' ').trim();
  console.log(tmp);
  inner = element.innerHTML

  correctedTextLst = correctedText.split(' ')
  elementTextLst = tmp.split(' ')

  for (index = 0; index < correctedText.length; index++) {
    if (correctedTextLst[index] !== elementTextLst[index]) {
      console.log(elementTextLst[index]);
      text = elementTextLst[index];
      idx = inner.indexOf(text);
      console.log(idx);
      if (idx >= 0) {
        inner = inner.substring(0, idx) + "<span style='text-decoration: underline;text-decoration-color: red;'>" + inner.substring(idx, idx + text.length) + "</span>" + inner.substring(idx + text.length);
        element.innerHTML = inner;//this line was incorrect
      }
    }
  }
} 