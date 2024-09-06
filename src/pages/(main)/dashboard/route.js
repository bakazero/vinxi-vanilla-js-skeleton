import { world } from "@/libraries/server.function";
import { timeout } from "@/libraries/utilities";
import { html } from "lit-html";

export const MetaTitle = "Dashboard";

export default function Page() {
  return html`
    <div>
      <h1 class="text-lg font-bold">Dashboard</h1>
    </div>
  `;
}

export const Script = async () => {
  const hworld = await world();
  await timeout(1000);
  console.log(hworld);
  console.log("ini script page Dashboard");
};
