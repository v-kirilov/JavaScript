import { towns } from "./towns.js";
import { html, render } from "../../../node_modules/lit-html/lit-html.js";

const townElement = document.getElementById("towns");
const townsTemplate = (data) => html`
  <ul>
    ${data.forEach((town) => html` <li>${town}</li> `)}
  </ul>
`;
load();

function load() {
  let result = townsTemplate(towns);
  console.log(towns);
  render(result, townElement);
  //towns.forEach((t) => console.log(t));
}
townElement.onload = function () {};
