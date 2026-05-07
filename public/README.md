This folder contains M3U8 lists with the stream URLs from the website, to allow easier viewing via IPTV clients on Smart TVs and such. Some channels' URLs are fetched using [the API](/api/). The lists are automatically generated with the script contained inside the custom Vite plugin in [vite.config.js](/vite.config.js).

You can add it to your IPTV client with this URL: `https://escfent.com/index.m3u8`.

Some IPTV clients (e.g. Kodi) might have issues with DRM-protected streams. In that case, you can try the alternative list at `https://escfent.com/alt.m3u8`.