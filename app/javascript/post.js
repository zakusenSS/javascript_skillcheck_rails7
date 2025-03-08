function post (){
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    const formData = new FormData(document.getElementById("form"));
    const XHR = new XMLHttpRequest();
    XHR.open("post", "/articles", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error $(XHR.status): ${XHR.statusText}`);
        return null;
      };
      const item = XHR.response.article;
      const contentsArea = document.getElementById("contents_area");
      const articleText = document.getElementById("article_text");
      const HTML = `
        <div class="article">
          ${item.text }
        </div>`;
      contentsArea.insertAdjacentHTML("afterbegin", HTML);
      articleText.value = "";
    };
    e.preventDefault();
  });
};

window.addEventListener('turbo:load', post);
