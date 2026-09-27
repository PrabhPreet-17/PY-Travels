import render from "../render.js";
import { homeView } from "../views/homeView.js";

export function homeController({ request }) {
    return render(homeView);
}