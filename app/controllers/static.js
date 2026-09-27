export async function staticController({ request }) {
    const url = new URL(request.url);

    const filePath = "." + url.pathname;

    try {
        const file = await Deno.readFile(filePath);

        const extension = url.pathname.split(".").pop();

        const contentTypes = {
            css: "text/css",
            js: "application/javascript",
            html: "text/html",
            png: "image/png",
            jpg: "image/jpeg",
            jpeg: "image/jpeg",
            svg: "image/svg+xml",
            webp: "image/webp"
        };

        const contentType =
            contentTypes[extension] || "application/octet-stream";

        return new Response(file, {
            headers: {
                "content-type": contentType
            }
        });
    } catch {
        return new Response("File not found", {
            status: 404
        });
    }
}