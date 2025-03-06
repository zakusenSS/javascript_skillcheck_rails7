function post (){
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    console.log(document.getElementById("form"));
    e.preventDefault();
  });
};

window.addEventListener('turbo:load', post);
