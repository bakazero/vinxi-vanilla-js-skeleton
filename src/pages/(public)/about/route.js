import { html } from "lit-html";

export const MetaTitle = "About";

export default function Page() {
  const about = "About";
  return html`
    <div>
      <h1 class="text-lg font-bold">${about}</h1>
    </div>
  `;
}

export const Script = () => {
  console.log("ini script page About");
};
