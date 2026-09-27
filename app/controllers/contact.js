import render from "../render.js";
import { contactView } from "../views/contact.js";

export function contactController({ request }) {
    return render(contactView);
}