const submitBtn = document.querySelector("button[type=submit]");

submitBtn.addEventListener("click", ev => {
  ev.preventDefault();

  const img = document.createElement("img");
  img.setAttribute("src", document.querySelector("input[name=imgUrl]").value)

  const imgPlace = document.createElement("div");
  imgPlace.className = "img-place";
  imgPlace.appendChild(img);

  const h3 = document.createElement("h3");
  h3.innerText = document.querySelector("input[name=titulo]").value;

  const p = document.createElement("p");
  p.innerText = document.querySelector("input[name=descricao]").value;

  const newCard = document.createElement("div");
  newCard.className = "card";

  newCard.appendChild(imgPlace);
  newCard.appendChild(h3);
  newCard.appendChild(p);
  
  const main = document.querySelector("main");
  main.appendChild(newCard);

})