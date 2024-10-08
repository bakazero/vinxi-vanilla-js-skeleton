import { html } from "uhtml";

export const MetaTitle = "Landing Page";
export const MetaDescription = "Description of this page";

export default async function Page() {
  return html`
    <div>
      <h1 class="text-lg font-bold">${MetaTitle}</h1>
    </div>
  `;
}

export const Script = async () => {
  console.log(`ini script page ${MetaTitle}`);
};
