import { db } from "../db.js"; 
 
// Get all items 
export function getItems() { 
  return db.prepare("SELECT * FROM items").all(); 
} 
 
export function createItem({ title, label, rating, image }) { 
  const stmt = db.prepare(` 
    INSERT INTO items (title, label, rating, image) 
    VALUES (?, ?, ?, ?) 
  `); 
 
  stmt.run(title, label, rating, image); 
}