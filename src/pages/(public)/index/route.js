import { html } from "lit-html";

export const MetaTitle = "Landing Page";

export default function Page() {
  return html`
    <div>
      <h1 class="text-lg font-bold">Landing Page</h1>
    </div>
  `;
}

export const Script = () => {
  console.log("ini script page Landing Page");
};
