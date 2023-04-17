import { html, render } from "../../../node_modules/lit-html/lit-html.js";

let btnLoad = document.getElementById("btnLoadTowns");

const listTemplate = (data) => html`
  <ul>
    ${data.map((town) => html`<li>${town}</li>`)}
  </ul>
`;

btnLoad.addEventListener("click", getTowns);

function getTowns(e) {
  e.preventDefault();

  if (document.getElementById("towns").value != "") {
    const rootElement = document.getElementById("root");
    const towns = document.getElementById("towns").value.split(", ");

    const ul = document.createElement("ul");

    const result = listTemplate(towns);

    render(result, rootElement);
    //   towns.map((el) => {
    //     let li = document.createElement("li");
    //     li.textContent = el;
    //     ul.appendChild(li);
    //   });
    rootElement.appendChild(ul);

    document.getElementById("towns").value = "";
  }
}
