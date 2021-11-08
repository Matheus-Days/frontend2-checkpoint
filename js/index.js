// Feather-icons code
feather.replace();

// Checkpoint code
const submitBtn = document.querySelector("button[type=submit]");

submitBtn.addEventListener("click", ev => {
  ev.preventDefault();

  const imgPlace = document.createElement("div");
  imgPlace.className = "img-place";
  
  const watched = document.querySelector("[name=assistiu]").checked;
  
  if(watched) {
    const i = document.createElement("i");
    i.setAttribute("data-feather", "check-square");
    i.className = "watched-icon";
    imgPlace.appendChild(i);
  }

  const img = document.createElement("img");
  img.setAttribute("src", document.querySelector("input[name=imgUrl]").value)

  imgPlace.appendChild(img);

  const h3 = document.createElement("h3");
  h3.innerText = document.querySelector("input[name=titulo]").value;

  const radioValues = {
    original: "Original",
    ln: "Light Novel",
    manga: "Mangá"
  };
  const radios = document.querySelectorAll("[name=origem]");
  let selectedRadio = null;
  radios.forEach(el => {
    if(el.checked) selectedRadio = el;
  });
  const span = document.createElement("span");
  span.innerText = `Material de origem: ${radioValues[selectedRadio.value]}`;

  const p = document.createElement("p");
  p.innerText = document.querySelector("input[name=descricao]").value;

  const newCard = document.createElement("div");
  newCard.className = "card";

  newCard.appendChild(imgPlace);
  newCard.appendChild(h3);
  newCard.appendChild(span);
  newCard.appendChild(p);
  
  const main = document.querySelector("main");
  main.appendChild(newCard);
  feather.replace();

})