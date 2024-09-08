import { world } from "@/libraries/server.function";
import { toast } from "@/libraries/utilities";
import { html } from "lit-html";

export const MetaTitle = "Dashboard";

export default async function Page() {
  return html`
    <div>
      <h1 class="text-lg font-bold">Dashboard</h1>
    </div>
  `;
}

export const Script = async () => {
  toast.success("ini script page Dashboard");
  const hworld = await world();
  console.log(hworld);
  console.log("ini script page Dashboard");
};
