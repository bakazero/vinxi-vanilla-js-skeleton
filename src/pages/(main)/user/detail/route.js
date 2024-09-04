import html from "./route.html?raw";

export const MetaTitle = "User Detail";

export default function Page() {
  return html;
}

export const Script = () => {
  console.log("id", new URLSearchParams(window.location.search).get("id"));
  console.log("ini script page User Detail");
};
