import { html } from "lit-html";

export const MetaTitle = "User Detail";

export default function Page() {
  const id = new URLSearchParams(window.location.search).get("id");

  return html`
    <div>
      <h1 class="text-lg font-bold">User Detail ${id}</h1>
    </div>
  `;
}

export const Script = () => {
  console.log("ini script page User Detail");
};
