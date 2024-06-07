const box = document.querySelector(".box");

const render = (data) => {
  box.innerHTML = data
    .map(
      (item) => `<div>
    <img src = '${item.url}' alt = 'img'>
    <h1>${item.title}</h1>
    <button data-delete = '${item.id}'>delete</button>
  </div>`
    )
    .join("");
};
const getData = () => {
  fetch("http://localhost:3600/photos")
    .then((res) => res.json())
    .then((data) => {
      render(data);
    });
};

getData();

box.addEventListener("click", (e) => {
  if (e.target.dataset.delete) {
    fetch(`http://localhost:3600/photos/${e.target.dataset.delete}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        getData();
      });
  }
});
