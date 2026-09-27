import { loginView } from "../views/login.js";

export function loginController() {
  return new Response(loginView(), {
    headers: { "Content-Type": "text/html" }
  });
}