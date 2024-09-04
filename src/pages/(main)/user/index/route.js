import html from "./route.html?raw";

export const MetaTitle = "User";

export default function Page() {
  return html;
}

export const Script = () => {
  for (const linkDetail of document.getElementsByClassName("detail")) {
    const id = Math.floor(Math.random() * 100000);
    linkDetail.setAttribute("data-id", id);
    linkDetail.href = `${linkDetail.href}?id=${id}`;
  }

  console.log("ini script page User");
};
