import { html } from "lit-html";
import "@/components/ui/ui-button";
import "@/components/ui/ui-dialog";
import "@/components/ui/ui-popover";

export const MetaTitle = "Component";

export default async function Page() {
  return html`
    <h1 class="text-lg font-bold">${MetaTitle}</h1>

    <div class="mt-4 flex items-center gap-2">
      <div>
        <ui-button data-dialog-trigger="dialog-test">Dialog</ui-button>
        <ui-dialog name="dialog-test">
          <div>Ini Content Modal</div>
        </ui-dialog>
      </div>
      <div>
        <ui-button data-popover-trigger="popover-test">Popover</ui-button>
        <ui-popover name="popover-test" trigger="click" placement="bottom" class="mt-2">
          <div>Ini Content Popover</div>
        </ui-popover>
      </div>
    </div>
  `;
}

export const Script = async () => {
  console.log(`ini script page ${MetaTitle}`);
};
