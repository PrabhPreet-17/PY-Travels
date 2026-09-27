import render from "../render.js";
import { packageView } from "../views/package.js";

export function packageController({ request }) {
    return render(packageView);
}