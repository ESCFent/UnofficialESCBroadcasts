import allCountries from "./list";
import "shaka-player/dist/controls.css";
const shaka = (await import("shaka-player/dist/shaka-player.ui.js")).default;

const countries = allCountries.filter(country => country.channels.filter(channel => channel.streams.filter(stream => !stream.m3u8List).length > 0).length > 0);
document.querySelector("#countries-count").innerText = countries.length;

window.player = new shaka.Player();
const ui = new shaka.ui.Overlay(player, document.querySelector("#player"), document.querySelector("video"));
await player.attach(document.querySelector("video"));
await ui.getControls();
const eventManager = new shaka.util.EventManager();

const getFlagEmoji = countryCode => String.fromCodePoint(...[...countryCode.toUpperCase()].map(x => 0x1f1a5 + x.charCodeAt()));
const loadStream = async (streams) => {
    document.querySelector("#player").classList.remove("hidden");
    document.querySelector("iframe").classList.add("hidden");
    document.querySelector("#vlc-instructions").classList.add("hidden");
    document.querySelector("#mixed-content-instructions").classList.add("hidden");
    document.querySelector("iframe").src = "about:blank";
    
    const startStream = async (currentStream) => {
        eventManager.removeAll();
        player.configure({
            streaming: {
                retryParameters: {
                    maxAttempts: 2
                }
            },
            manifest: {
                retryParameters: {
                    maxAttempts: 2
                }
            }
        });
        if (currentStream <= streams.length - 1 && streams[currentStream].m3u8List != true) {
            if (!streams[currentStream].originalAudio) document.querySelector("#original-audio").classList.add("hidden");
            if (streams[currentStream].type != "iframe") {
                if (streams[currentStream].http) {
                    player.unload();
                    document.querySelector("#player").classList.add("hidden");
                    document.querySelector("iframe").classList.add("hidden");
                    document.querySelector("#vlc-instructions").classList.add("hidden");
                    if (streams[currentStream].type === "direct") document.querySelector("#mixed-content-instructions a").href = streams[currentStream].url;
                    else document.querySelector("#mixed-content-instructions a").href = `http://http-player.escfent.com/?url=${encodeURIComponent(streams[currentStream].url)}`;
                    document.querySelector("#mixed-content-instructions").classList.remove("hidden");
                } else if (streams[currentStream].external) {
                    player.unload();
                    document.querySelector("#player").classList.add("hidden");
                    document.querySelector("iframe").classList.add("hidden");
                    document.querySelector("#mixed-content-instructions").classList.add("hidden");
                    document.querySelector("#vlc-instructions code").innerText = streams[currentStream].url;
                    document.querySelector("#vlc-instructions").classList.remove("hidden");
                } else {
                    let url = streams[currentStream].url;

                    if (url.startsWith("special://")) {
                        const param = url.split("/").slice(3)[0];
                        switch (url.split("/")[2]) {
                            case "youtv":
                                url = await fetch("https://youtv.ua/core/ajax/controller.php", {
                                    method: "POST",
                                    headers: {"content-type": "application/x-www-form-urlencoded"},
                                    body: new URLSearchParams({do: "website", action: "channel", lang: "en", id: param})
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
                                    .then(json => json.url.replace("etvhd.stream", param));
                                break;

                            case "giniko":
                                url = await fetch(`https://www.giniko.com/watch.php?id=${param}`)
                                    .then(response => response.text())
                                    .then(html => html.split("\n").filter(el => el.includes(".m3u8"))[0].replace(/.*source: "/g, "").replaceAll("\"", ""));
                                break;

                            case "tvkaista":
                                url = `https://legacy.tvkaista.net/${param}/live.m3u8?src=legacy&timestamp=${new Date().toLocaleString("en-US", {
                                    hour: "2-digit",
                                    hour12: false,
                                    minute: "2-digit",
                                    month: "2-digit",
                                    day: "2-digit",
                                    year: "numeric",
                                    timeZone: "Europe/Helsinki"
                                }).replaceAll("/", "-").replaceAll(":", "-").replace(", ", "-")}`;
                                break;
                        };
                    };

                    if (streams[currentStream].clearkeys) {
                        player.configure({
                            drm: {
                                clearKeys: streams[currentStream].clearkeys
                            }
                        });
                    };
                    document.querySelector("video").play();
                    eventManager.listen(player, "buffering", event => {
                        if (streams[currentStream].originalAudio && event.buffering === false) {
                            document.querySelector("#original-audio").style.width = `${document.querySelector(".shaka-overflow-menu-button").getBoundingClientRect().width}px`;
                            document.querySelector("#original-audio").style.right = `${document.querySelector("#player").getBoundingClientRect().right - document.querySelector(".shaka-overflow-menu-button").getBoundingClientRect().right}px`;
                            document.querySelector("#original-audio-track-name").innerText = streams[currentStream].originalAudio;
                            document.querySelector("#original-audio").classList.remove("hidden");
                        };
                    });

                    if (streams[currentStream].type != "direct") await player.load(url).catch(() => startStream(currentStream + 1));
                    else {
                        player.configure({
                            streaming: {
                                retryParameters: {
                                    maxAttempts: 0
                                }
                            },
                            manifest: {
                                retryParameters: {
                                    maxAttempts: 0
                                }
                            }
                        });
                        await player.load(url).catch(() => {});
                        document.querySelector("video").src = url;
                        document.querySelector("video").play();
                    };
                };
            } else {
                player.unload();
                document.querySelector("#player").classList.add("hidden");
                document.querySelector("iframe").classList.remove("hidden");
                document.querySelector("iframe").src = streams[currentStream].url;
            };
        } else {
            alert("There are currently no working livestreams available for this channel.")
        };
    };
    await startStream(0);
};

countries.forEach(country => {
    const countryElement = document.createElement("optgroup");
    countryElement.label = `${getFlagEmoji(country.isoCode)} ${country.name}`;
    country.channels = country.channels.filter(channel => channel.streams.filter(stream => !stream.m3u8List).length > 0);
    country.channels.forEach((channel, index) => {
        channel.streams = channel.streams.filter(stream => !stream.m3u8List);
        const channelElement = document.createElement("option");
        channelElement.innerText = `${channel.name} (${[...new Set(channel.streams.map(stream => stream.quality))].sort((a, b) => parseInt(b) - parseInt(a)).join(" / ")})${channel.streams.filter(stream => !stream.external).length === 0 || channel.streams.filter(stream => !stream.http).length === 0 || channel.streams.filter(stream => stream.originalAudio).length > 0 ? " " : ""}${channel.streams.filter(stream => !stream.external).length === 0 ? "↗️" : ""}${channel.streams.filter(stream => stream.originalAudio).length > 0 ? "🔉" : ""}${channel.streams.filter(stream => !stream.http).length === 0 ? "⬜" : ""}${channel.warning ? ` - ${channel.warning}` : ""}`;
        channelElement.value = `${country.isoCode} | ${channel.name} | ${index}`;

        countryElement.insertAdjacentElement("beforeend", channelElement);
    });

    document.querySelector("#channels").insertAdjacentElement("beforeend", countryElement);
});

document.querySelector("#channels").addEventListener("change", () => {
    const selectedOption = document.querySelector("#channels").selectedOptions[0];
    if (selectedOption.id != "selected-channel") {
        const channelValue = selectedOption.value.split(" | ");
        const countryCode = channelValue[0];
        const channelName = channelValue[1];
        const channelIndex = parseInt(channelValue[2]);

        const channel = countries.filter(country => country.isoCode === countryCode)[0].channels[channelIndex];
        loadStream(channel.streams);
    
        document.querySelector("#selected-channel").innerText = `${selectedOption.parentElement.label} | ${selectedOption.innerText}`;
        document.querySelector("#selected-channel").selected = true;
    };
});
document.querySelector("#channels").addEventListener("keydown", e => {
    e.preventDefault();
});