import { html } from "lit-html";

export const MetaTitle = "User";

export default function Page() {
  return html`
    <h1>User</h1>
    <a href="/user/detail" class="spa detail text-blue-600 hover:text-blue-400">User Detail</a>
  `;
}

export const Script = () => {
  for (const linkDetail of document.getElementsByClassName("detail")) {
    const id = Math.floor(Math.random() * 100000);
    linkDetail.setAttribute("data-id", id);
    linkDetail.href = `${linkDetail.href}?id=${id}`;
  }

  console.log("ini script page User");
};
