import { toast } from "@/libraries/utilities";
import { $setting } from "@/stores/setting";
import { html } from "lit-html";

export const MetaTitle = "Dashboard";

export default async function Page() {
  return html`
    <div>
      <h1 class="text-lg font-bold">${MetaTitle}</h1>
    </div>
  `;
}

export const Script = async () => {
  console.log($setting.value);
  toast.success(`ini script page ${MetaTitle}`);
  console.log(`ini script page ${MetaTitle}`);
};
