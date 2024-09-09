import { html } from "lit-html";
import "@/components/ui/ui-dialog";
import "@/components/ui/ui-button";

export const MetaTitle = "User";

export default async function Page() {
  return html`
    <h1>${MetaTitle}</h1>
    <a href="/user/detail" class="spa detail text-blue-600 hover:text-blue-400">User Detail</a>

    <div class="mt-4">
      <ui-button data-micromodal-trigger="dialog-test">Dialog</ui-button>
      <ui-dialog name="dialog-test">
        <div>Ini Content Modal</div>
      </ui-dialog>
    </div>
  `;
}

export const Script = async () => {
  for (const linkDetail of document.getElementsByClassName("detail")) {
    if (linkDetail instanceof HTMLAnchorElement) {
      const id = Math.floor(Math.random() * 100000).toString();
      linkDetail.setAttribute("data-id", id);
      linkDetail.href = `${linkDetail.href}?id=${id}`;
    }
  }

  console.log(`ini script page ${MetaTitle}`);
};
