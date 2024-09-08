import { world } from "@/libraries/server.function";
import { toast } from "@/libraries/utilities";
import { html } from "lit-html";

export const MetaTitle = "Dashboard";

export default async function Page() {
  return html`
    <div>
      <h1 class="text-lg font-bold">Dashboard</h1>
      <div>
        <fo-input id="awal" class="w-fit border-blue-400" value="awal"></fo-input>
        <fo-input id="akhir" value="akhir"></fo-input>
      </div>
      <div>
        <button id="button" @click=${setError}>change</button>
      </div>
    </div>
  `;
}

export const Script = async () => {
  toast.success("ini script page Dashboard");
  const hworld = await world();
  console.log(hworld);
  console.log("ini script page Dashboard");
};

const setError = () => {
  document.getElementById("awal").setAttribute("error", "");
};
