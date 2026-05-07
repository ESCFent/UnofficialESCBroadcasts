// this is supposed to be the Vite config but it also acts as the script that generates the M3U8 lists in the public/ folder

import { defineConfig } from "vite";
import countries from "./assets/js/list.js";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ command }) => {
    return {
        build: {
            cssCodeSplit: false,
            rollupOptions: {
                input: {
                    index: path.join(__dirname, "index.html"),
                    streamCheck: path.join(__dirname, "stream-check.html"),
                },
            },
        },
        plugins: [
            {
                name: "generate-m3u8-list",
                async buildStart(options) {
                    if (command === "build") {
                        console.log("Generating M3U8 list...");
                        let playlistArray = ["#EXTM3U"];
                        
                        for (const country of countries.filter(country => country.channels.filter(channel => channel.streams.filter(stream => stream.m3u8List != false).length > 0).length > 0)) {
                            let countryEmojiUnicode = Array.from(String.fromCodePoint(...[...country.isoCode.toUpperCase()].map(x => 0x1f1a5 + x.charCodeAt()))).map(char => {
                                var _a;
                                if (char !== "\u200D" && !char.match(/[\uFE0F\u20E3]/)) {
                                    return (_a = char.codePointAt(0)) === null || _a === void 0 ? void 0 : _a.toString(16);
                                };
                                return "";
                            }).join("-").replace(/-+/g, "-").replace(/^-|-$/g, "");
                            const flagURL = await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=File:Twemoji2_${countryEmojiUnicode}.svg&prop=imageinfo&iiprop=url&format=json&iiurlwidth=500`, {
                                headers: {
                                    "User-Agent": "UnofficialESCBroadcastsFlagBot/1.0 (https://github.com/ESCFent/UnofficialESCBroadcasts; flagbot@escfent.com)"
                                }
                            })
                                .then(response => response.json())
                                .then(json => json.query.pages["-1"].imageinfo[0].thumburl);
                            
                            for (const channel of country.channels) {
                                for (const streamIndex in channel.streams.filter(stream => stream.m3u8List != false)) {
                                    const stream = channel.streams.filter(stream => stream.m3u8List != false)[streamIndex];
                        
                                    playlistArray.push(`#EXTINF:-1 group-title="${country.name}" tvg-logo="${flagURL}",${country.name} | ${channel.name} (${stream.quality})${channel.streams.filter(stream => stream.m3u8List != false).length > 1 ? ` [${parseInt(streamIndex) + 1}]` : ""}${stream.originalAudio ? " [w/ original audio track]" : ""}`);
                                    if (stream.m3u8AdditionalLines) playlistArray.push(stream.m3u8AdditionalLines.join("\n"));
                                    if (stream.clearkeys) playlistArray.push(`clearkeys=${Object.keys(stream.clearkeys).map(kid => `${kid}:${stream.clearkeys[kid]}`).join(",")}`);
                                    if (stream.url.startsWith("special://")) stream.url = stream.url.replace("special://", "https://api.escfent.com/") + ".m3u8";
                                    playlistArray.push(stream.url);
                                };
                            };

                            console.log(`✅ Added channels for ${country.name}`);
                        };
                        
                        let mainPlaylist = playlistArray.map(line => { if (line.startsWith("clearkeys=")) { return `#KODIPROP:inputstream=inputstream.adaptive\n#KODIPROP:inputstream.adaptive.manifest_type=mpd\n#KODIPROP:mimetype=application/dash+xml\n#KODIPROP:inputstream.adaptive.license_type=org.w3.clearkey\n#KODIPROP:inputstream.adaptive.license_key=` + line.replace("clearkeys=", ""); } else return line; }).join("\n");
                        let altPlaylist = playlistArray.map(line => { if (line.startsWith("clearkeys=")) { return `#KODIPROP:inputstream=inputstream.adaptive\n#KODIPROP:inputstream.adaptive.drm_legacy=org.w3.clearkey|` + line.replace("clearkeys=", ""); } else return line; }).join("\n");
                        
                        await fs.writeFile(path.join(__dirname, "public/index.m3u8"), mainPlaylist);
                        await fs.writeFile(path.join(__dirname, "public/alt.m3u8"), altPlaylist);
                    };
                },
                async writeBundle(output, input) {
                    await fs.rm(path.resolve(output.dir, "README.md"));
                },
            },
        ],
    }
});