import nProgress from "nprogress";
import { route, handleRoute } from "./libraries/client.router";
import { getAuth, getSetting } from "./libraries/server.function";
import { $setting } from "./stores/setting";
import { $auth } from "./stores/auth";

import "./assets/style.css";
import "./assets/nprogress.css";
import "./assets/notify.css";

import "iconify-icon";

const [setting, auth] = await Promise.all([getSetting(), getAuth()]);
$setting.set(setting);
$auth.set(auth);

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
