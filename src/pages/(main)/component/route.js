import { html } from "lit-html";
import "@/components/ui/ui-button";
import "@/components/ui/ui-dialog";
import "@/components/ui/ui-popover";
import "@/components/form/fo-editor";

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

    <h2 class="mt-4 mb-1 font-bold">Editor</h2>
    <fo-editor></fo-editor>
    <div class="mt-2 flex justify-end">
      <ui-button data-editor-save>Save</ui-button>
    </div>
  `;
}

export const Script = async () => {
  console.log(`ini script page ${MetaTitle}`);
};
