import { aboutController } from "./controllers/about.js";
import { bookController } from "./controllers/book.js";
import { contactController } from "./controllers/contact.js";
import { homeController } from './controllers/home.js';
import { itemsController } from "./controllers/items.js";
import { notFoundController } from './controllers/notFound.js';
import { packageController } from "./controllers/package.js";
import { staticController } from './controllers/static.js';
import { loginController } from "./controllers/login.js";

export default function server(request) {

        const url = new URL(request.url);
        console.log(`\n${request.method} ${url.pathname}${url.search}`);

        if(url.pathname.startsWith("/assets")) {
                return staticController({ request });
        }
        
    if (url.pathname == "/") {
        return homeController({ request });
    }

    if (url.pathname == "/items") {
        return itemsController({ request });
    }

    if (url.pathname == "/about") {
        return aboutController({ request });
    }

    if (url.pathname == "/package") {
        return packageController({ request });
    }

    if (url.pathname == "/contact") {
        return contactController({ request });
    }

    if (url.pathname == "/book") {
        return bookController({ request });
    }

    if (url.pathname == "/login") {
    return loginController({ request });
}

    return notFoundController({ request });
}