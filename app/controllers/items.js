import { createItem, getItems } from "../models/items.js"; 
import render from "../render.js"; 
import { itemsView } from "../views/items.js"; 
 
 
// GET /items 
export function itemsController({ request }) { 
  const items = getItems(); 
  return render(itemsView, { items }, request); 
} 
 
// POST /items 
export async function addItemController({ request }) { 
  const formData = await request.formData(); 
 
  const { isValid, errors } = validateSchema(formData, newItemSchema); 
  const newItem = formData.get("new-item")?.toString().trim(); 
 
  // If validation fails 
  if (!isValid) { 
    const items = getItems(); 
    return render(itemsView, { items, errors }, request, 400); 
  } 
 
  // Save to DB 
  createItem(newItem); 
 
  // Redirect 
  const headers = new Headers(); 
  return redirect(headers, "/items", `Added '${newItem}'`); 
}