import { db } from "../db.js";

export function getAbout() {
    return db.prepare('SELECT * FROM about').all();
}``