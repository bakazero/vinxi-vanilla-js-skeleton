import { html } from "lit-html";
import "@/components/ui/ui-link";

export const MetaTitle = "Page Not Found";

export default async function Page() {
  return html`
    <h1>${MetaTitle}</h1>
    <ui-link href="/" type="spa">Home</ui-link>
  `;
}
