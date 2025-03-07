function post (){
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    const formData = new FormData(document.getElementById("form"));
    const XHR = new XHLHttpRequest();
    XHR.open("post", "/articles", true);
    XHR.responseType = "json";
    XHR.send(formData);
    e.preventDefault();
  });
};

window.addEventListener('turbo:load', post);
