import nProgress from "nprogress";
import { route, handleRoute } from "./libraries/client.router";
import { getSetting } from "./libraries/server.function";
import { $setting } from "./stores/setting";

import "./assets/style.css";
import "./assets/nprogress.css";
import "./assets/notify.css";

const setting = await getSetting();
$setting.set(setting);

nProgress.configure({
  showSpinner: false,
  speed: 250,
  trickle: true,
  trickleSpeed: 500,
});

/** @ts-ignore */
window.route = route;
window.onpopstate = handleRoute;

handleRoute();
