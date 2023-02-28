const btnelement = document.querySelector(".create");
const articleId = btnelement.getAttribute("data-linkid");

console.log("doneeeeeeeeeeeeeeeeeee");

/*    WHAT is data?
      - {mylink: "/all-articles"}      */

btnelement.addEventListener("click", (eo) => {
  fetch(`/articles/${articleId}`, { method: "DELETE" })
    .then((response) => response.json())
    .then((data) => (window.location.href = data.mylink))
    .catch((err) => {
      console.log(err);
    });
});
