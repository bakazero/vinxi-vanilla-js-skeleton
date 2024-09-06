import { html } from "lit-html";

export const MetaTitle = "Dashboard";

export default function Page() {
  return html`
    <div>
      <h1 class="text-lg font-bold">Dashboard</h1>
    </div>
  `;
}

export const Script = () => {
  console.log("ini script page Dashboard");
};
