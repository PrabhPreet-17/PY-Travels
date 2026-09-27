import render from "../render.js";
import { bookView } from "../views/book.js";

export function bookController({ request }) {
    return render(bookView);
}