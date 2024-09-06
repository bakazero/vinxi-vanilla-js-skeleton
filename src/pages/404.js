import { html } from "lit-html";

export const MetaTitle = "Page Not Found";

export default function Page() {
  return html`
    <h1>Page Not Found</h1>
    <a href="/" class="spa text-blue-600 hover:text-blue-400">Home</a>
  `;
}
