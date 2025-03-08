function count (){
  const articleText = document.getElementById("article_text");
  articleText.addEventListener("keyup", () => {
    const countVal = articleText.value.length;
    const charNum =document.getElementById("char_num");
    charNum.innerHTML = `${countVal}文字`;
  });
};

window.addEventListener('turbo:load', count);
