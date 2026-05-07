import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
let headers = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET" };

const port = Number(Deno.env.get("PORT")) || 3000;
const hostname = Deno.env.get("IP") || "::";

serve(async request => {
    const path = new URL(request.url).pathname;

    if (path === "/") {
        return Response.redirect("https://escfent.com/api", 307);
    } else if (path === "/favicon.ico") {
        return new Response(null, { status: 200, headers });
    } else if (path.split("/").length >= 3) {
        let service = path.split("/")[1];
        let id = decodeURIComponent(path.split("/").slice(2).join("/")).replace(".m3u8", "").replace(".mpd", "");
        let url;
        
        switch (service) {
            case "youtv":
                url = await fetch("https://youtv.ua/core/ajax/controller.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0"
                    },
                    body: new URLSearchParams({do: "website", action: "channel", lang: "en", id: id})
                })
                    .then(response => response.json())
                    .then(json => json.source);
                break;

            case "amazertv":
                url = await fetch("https://www.amazertv.com/api/stream/url", {
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                        "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjo3MTU1OSwic2lkIjoiTz3vv71T77-977-9f--_vX3vv70iLCJpYXQiOjE3NzgxNDIxMTksImV4cCI6MTc4MDczNDExOX0.MVc5LV2ApPtQXjUrasUYf1d0eF8x3ARA_KUDfwMdYvY",
                    },
                    body: JSON.stringify({ channelId: "etv", quality: "high", dvr: false, viewKey: null }),
                    method: "POST"
                })
                    .then(response => response.json())
                    .then(json => json.url.replace("etvhd.stream", id));
                break;

            case "tvkaista":
                url = `https://legacy.tvkaista.net/${id}/live.m3u8?src=legacy&timestamp=${new Date().toLocaleString("en-US", {
                    hour: "2-digit",
                    hour12: false,
                    minute: "2-digit",
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                    timeZone: "Europe/Helsinki"
                }).replaceAll("/", "-").replaceAll(":", "-").replace(", ", "-")}`;
                break;

            default:
                return new Response("Invalid service", { status: 400, headers });
        };
        
        return new Response(null, { status: 307, headers: { ...headers, Location: url } });
    };
}, { port, hostname });