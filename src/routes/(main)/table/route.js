import { html, render } from "lit-html";
import "@/components/ui/ui-pagination";
import "@/components/ui/ui-table";
import { dummyPokemon } from "@/libraries/server.function";
import { timeout } from "@/libraries/utilities";
import "iconify-icon";

export const MetaTitle = "Table";

export default async function Page() {
  return html`
    <div>
      <h1 class="text-lg font-bold">${MetaTitle}</h1>

      <div class="mt-4 max-w-5xl">
        <ui-table>
          <table>
            <thead>
              <tr>
                <th width="1">Id</th>
                <th width="1">Image</th>
                <th class="text-left">Name</th>
                <th class="text-left">Abilities</th>
                <th width="1">Pokedex</th>
              </tr>
            </thead>
            <tbody id="tableData">
              <tr>
                <td colspan="9999">
                  <div class="animate-pulse w-full h-4 bg-gray-200 rounded-full"></div>
                </td>
              </tr>
            </tbody>
          </table>
        </ui-table>
      </div>
    </div>
  `;
}

export const Script = async () => {
  const tableData = document.getElementById("tableData");
  if (tableData instanceof HTMLElement) {
    await timeout(1000);
    const { data } = await dummyPokemon();

    tableData.innerHTML = "";

    render(
      data.map(
        (item) => html`
          <tr>
            <td class="text-center font-medium">${item.id}</td>
            <td>
              <div class="h-24 w-24 rounded-sm overflow-hidden mx-auto">
                <img src=${item.image} class="h-full w-full object-cover" />
              </div>
            </td>
            <td class="capitalize">${item.name}</td>
            <td>${item.abilities.map((ability) => ability.ability.name).join(", ")}</td>
            <td class="text-center hover:animate-pulse">
              <iconify-icon icon="mdi:pokeball" height="24" class="text-blue-600"></iconify-icon>
            </td>
          </tr>
        `
      ),
      tableData
    );
  }
};
