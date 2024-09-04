import "./assets/style.css";
import { route, handleRoute } from "./libraries/client.router";

window.route = route;
window.onpopstate = handleRoute;

handleRoute();
