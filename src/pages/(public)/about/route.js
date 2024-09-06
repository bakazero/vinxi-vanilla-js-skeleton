import { html } from "lit-html";

export const MetaTitle = "About";

export default function Page() {
  const about = "About";

  return html`
    <div>
      <mui-component></mui-component>
      <h1 class="text-lg font-bold">${about}</h1>
      <button @click=${() => bla(about, "dua")}>change</button>
    </div>
  `;
}

const bla = (satu, dua) => {
  console.log(satu, dua);
};

export const Script = () => {
  console.log("ini script page About");
};
