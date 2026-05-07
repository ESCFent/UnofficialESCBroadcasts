export default [
    {
        name: "Albania",
        isoCode: "AL",
        channels: [
            {
                name: "RTSH 1",
                streams: [
                    {
                        url: "http://217.73.139.200:5443/play/a00f",
                        quality: "1080p",
                        external: true
                    }
                ]
            }
        ]
    },
    {
        name: "Armenia",
        isoCode: "AM",
        channels: [
            {
                name: "Armenia 1",
                streams: [
                    {
                        url: "https://dash2.antik.sk/live/test_armenia/playlist.m3u8",
                        quality: "576p"
                    }
                ]
            }
        ]
    },
    {
        name: "Australia",
        isoCode: "AU",
        channels: [
            {
                name: "SBS",
                streams: [
                    {
                        url: "http://203.39.27.34:55555/SBS%20ONE%20HD",
                        external: true,
                        quality: "1080p"
                    }
                ]
            }
        ]
    },
    {
        name: "Austria",
        isoCode: "AT",
        channels: [
            {
                name: "ORF 1",
                streams: [
                    {
                        url: "https://netplus.zappr.stream/orf1.m3u8",
                        quality: "720p"
                    }
                ]
            }
        ]
    },
    {
        name: "Belgium",
        isoCode: "BE",
        channels: [
            {
                name: "VRT 1",
                streams: [
                    {
                        url: "http://185.207.34.31:8000/play/21025",
                        quality: "1080p",
                        external: true
                    }
                ]
            },
            {
                name: "RTBF La Une",
                streams: [
                    {
                        url: "http://109.89.79.6:55555/la%20une",
                        external: true,
                        quality: "1080p"
                    }
                ]
            },
            {
                name: "RTBF Tipik",
                streams: [
                    {
                        url: "http://109.89.79.6:55555/Tipik",
                        external: true,
                        quality: "1080p"
                    }
                ]
            }
        ]
    },
    {
        name: "Bulgaria",
        isoCode: "BG",
        channels: [
            {
                name: "BNT 1",
                streams: [
                    {
                        url: "https://193-235-65-225-9983-proxy.escfent.com/stream/channel/8bd986925812eb01257cc713bc7bd9f5?profile=webtv-h264-aac-matroska",
                        type: "direct",
                        quality: "384p",
                        m3u8List: false
                    },
                    {
                        url: "https://193-235-65-225-9983-proxy.escfent.com/stream/channel/8bd986925812eb01257cc713bc7bd9f5?profile=webtv-h264-aac-matroska",
                        type: "iframe",
                        quality: "384p",
                        m3u8List: false
                    }
                ]
            },
            {
                name: "BNT 1",
                streams: [
                    {
                        url: "https://193-235-65-225-9983-proxy.escfent.com/stream/channel/8bd986925812eb01257cc713bc7bd9f5?profile=matroska",
                        external: true,
                        quality: "1080p"
                    }
                ]
            }
        ]
    },
    {
        name: "Croatia",
        isoCode: "HR",
        channels: [
            {
                name: "HRT 1",
                streams: [
                    {
                        url: "https://bpcdnmanprod.nexttv.ht.hr/bpk-tv/HRT1/default/index.m3u8",
                        quality: "1080p"
                    }
                ]
            }
        ]
    },
    {
        name: "Cyprus",
        isoCode: "CY",
        channels: [
            {
                name: "RIK Sat",
                streams: [
                    {
                        url: "http://94.236.200.185:55555/RIK%20Sat",
                        external: true,
                        quality: "576p"
                    }
                ]
            }
        ]
    },
    {
        name: "Czechia",
        isoCode: "CZ",
        channels: [
            {
                name: "ČT1",
                streams: [
                    {
                        url: "https://dash2.antik.sk/stream/nvidia_ct1/playlist_cbcs.mpd",
                        originalAudio: "Original version",
                        quality: "1080p",
                        clearkeys: {
                            "11223344556677889900112233445566": "4b80724d0ef86bcb2c21f7999d67739d"
                        }
                    }
                ]
            },
            {
                name: "ČT2",
                streams: [
                    {
                        url: "https://dash2.antik.sk/stream/hisi_ct_2/playlist_cbcs.mpd",
                        quality: "1080p",
                        clearkeys: {
                            "11223344556677889900112233445566": "4b80724d0ef86bcb2c21f7999d67739d"
                        }
                    }
                ]
            }
        ]
    },
    {
        name: "Denmark",
        isoCode: "DK",
        channels: [
            {
                name: "DR1",
                streams: [
                    {
                        url: "http://90.236.77.208:55555/DR1",
                        external: true,
                        quality: "720p"
                    }
                ]
            }
        ]
    },
    {
        name: "Estonia",
        isoCode: "EE",
        channels: [
            {
                name: "ETV",
                streams: [
                    {
                        url: "special://amazertv/etvhd.stream",
                        quality: "1080p"
                    }
                ]
            },
            {
                name: "ETV2",
                streams: [
                    {
                        url: "special://amazertv/etv2hd.stream",
                        quality: "1080p"
                    }
                ]
            },
            {
                name: "ETV+",
                streams: [
                    {
                        url: "special://amazertv/etvplusshd.stream",
                        quality: "1080p"
                    }
                ]
            }
        ]
    },
    {
        name: "France",
        isoCode: "FR",
        channels: [
            {
                name: "France 2",
                streams: [
                    {
                        url: "https://netplus.zappr.stream/france2hd.m3u8",
                        quality: "720p",
                        originalAudio: "Original version"
                    }
                ]
            },
            {
                name: "France 4",
                streams: [
                    {
                        url: "https://netplus.zappr.stream/france4hd.m3u8",
                        quality: "720p",
                        originalAudio: "Original version"
                    }
                ]
            }
        ]
    },
    {
        name: "Georgia",
        isoCode: "GE",
        channels: [
            {
                name: "1TV",
                streams: [
                    {
                        url: "special://giniko/87",
                        quality: "720p",
                        m3u8List: false
                    }
                ]
            }
        ]
    },
    {
        name: "Germany",
        isoCode: "DE",
        channels: [
            {
                name: "Das Erste",
                streams: [
                    {
                        url: "https://netplus.zappr.stream/daserstehd.m3u8",
                        quality: "720p"
                    }
                ]
            },
            {
                name: "One",
                streams: [
                    {
                        url: "https://netplus.zappr.stream/onehd.m3u8",
                        quality: "720p"
                    }
                ]
            }
        ]
    },
    {
        name: "Greece",
        isoCode: "GR",
        channels: [
            {
                name: "ERT 1",
                streams: [
                    {
                        url: "http://94.67.8.121:55555/ERT%201%20HD",
                        external: true,
                        quality: "1080p"
                    }
                ]
            }
        ]
    },
    {
        name: "Italy",
        isoCode: "IT",
        channels: [
            {
                name: "Rai 1",
                streams: [
                    {
                        url: "https://wp8-s-anp31323132-live-ch-prod.prod.cdn.dmdsdp.com/live/disk1/SV09101/stb-dash-fhd-avc/SV09101.mpd",
                        quality: "1080p",
                        originalAudio: "English",
                        clearkeys: {
                            "7f9f6e3c78b2486f9fe13e06bdb768d2": "b341c1136a3738f3a6ea197d31fab35c"
                        }
                    },
                    {
                        url: "https://ilglobotv-live.akamaized.net/channels/RAI1/Live.m3u8",
                        quality: "1080p"
                    },
                    {
                        url: "https://rai.zappr.stream/rai1.m3u8",
                        quality: "720p"
                    },
                    {
                        url: "https://dash2.antik.sk/live/test_rai_uno_tizen/playlist.m3u8",
                        quality: "720p"
                    }
                ]
            },
            {
                name: "Rai 2",
                streams: [
                    {
                        url: "https://ilglobotv-live.akamaized.net/channels/RAI2/Live.m3u8",
                        quality: "1080p"
                    },
                    {
                        url: "https://rai.zappr.stream/rai2.m3u8",
                        quality: "720p"
                    }
                ]
            }
        ]
    },
    {
        name: "Lithuania",
        isoCode: "LT",
        channels: [
            {
                name: "LRT TV",
                streams: [
                    {
                        url: "http://78.56.214.4:55555/LRT%20TELEVIZIJA%20HD",
                        external: true,
                        quality: "1080p"
                    }
                ]
            }
        ]
    },
    {
        name: "Montenegro",
        isoCode: "ME",
        channels: [
            {
                name: "TVCG 1",
                streams: [
                    {
                        url: "https://169-150-255-53-proxy.escfent.com/RTCG1/index.m3u8",
                        quality: "1080p"
                    }
                ]
            }
        ]
    },
    {
        name: "Netherlands",
        isoCode: "NL",
        channels: [
            {
                name: "NPO 1",
                streams: [
                    {
                        url: "https://www.livehdtv.com/yayin/?kanal=547",
                        type: "iframe",
                        quality: "720p",
                        m3u8List: false
                    },
                    {
                        url: "http://185.207.34.31:8000/play/21029",
                        quality: "1080p",
                        m3u8List: true
                    }
                ]
            },
            {
                name: "BVN",
                streams: [
                    {
                        url: "https://netplus.zappr.stream/bvn.m3u8",
                        quality: "576p"
                    }
                ]
            }
        ]
    },
    {
        name: "North Macedonia",
        isoCode: "MK",
        channels: [
            {
                name: "MRT 1",
                streams: [
                    {
                        url: "https://169-150-255-53-proxy.escfent.com/MRT1/index.m3u8",
                        quality: "720p"
                    }
                ]
            }
        ]
    },
    {
        name: "Norway",
        isoCode: "NO",
        channels: [
            {
                name: "NRK1",
                streams: [
                    {
                        url: "http://85.27.185.90:55555/NRK%201%20HD",
                        external: true,
                        quality: "720p"
                    }
                ]
            }
        ]
    },
    {
        name: "Poland",
        isoCode: "PL",
        channels: [
            {
                name: "TVP1",
                streams: [
                    {
                        url: "https://redir.cache.orange.pl/dai4/org1/vb/104/tvp1hd/index.m3u8",
                        quality: "1080p"
                    },
                    {
                        url: "https://estreams.tv.nej.cz/dash/CH_TVP1_Portable.ism/playlist.mpd",
                        quality: "720p"
                    }
                ]
            },
            {
                name: "TVP Polonia",
                streams: [
                    {
                        url: "https://netplus.zappr.stream/tvpolonia.m3u8",
                        quality: "1080p"
                    },
                    {
                        url: "https://dash2.antik.sk/live/test_tvp_polonia/playlist.m3u8",
                        quality: "1080p"
                    }
                ]
            }
        ]
    },
    {
        name: "Portugal",
        isoCode: "PT",
        channels: [
            {
                name: "RTP1",
                streams: [
                    {
                        url: "https://rr.cdn.vodafone.pt/LIVE/sdash/LIVE$110/index.mpd/Manifest?start=LIVE&end=END&device=DASH_AVC_FULLHD",
                        quality: "720p",
                        clearkeys: {
                            "7c2c25e40d8e4f70a3c343e97d9d52ed": "07faa6904c06f9bbf8860691c9c3629d"
                        }
                    }
                ]
            },
            {
                name: "RTP Mundo",
                streams: [
                    {
                        url: "https://netplus.zappr.stream/rtpi.m3u8",
                        quality: "576p"
                    }
                ]
            }
        ]
    },
    {
        name: "Romania",
        isoCode: "RO",
        channels: [
            {
                name: "TVR 1",
                streams: [
                    {
                        url: "https://canale-tv.com/channel/tvr1.html",
                        type: "iframe",
                        quality: "720p",
                        m3u8List: false
                    }
                ]
            },
            {
                name: "TVR International",
                streams: [
                    {
                        url: "https://netplus.zappr.stream/tvrinternational.m3u8",
                        quality: "576p"
                    }
                ]
            }
        ]
    },
    {
        name: "San Marino",
        isoCode: "SM",
        channels: [
            {
                name: "San Marino RTV",
                streams: [
                    {
                        url: "http://77.39.161.42:55555/RTV%20San%20Marino",
                        external: true,
                        quality: "576p"
                    }
                ]
            }
        ]
    },
    {
        name: "Serbia",
        isoCode: "RS",
        channels: [
            {
                name: "RTS 1",
                streams: [
                    {
                        url: "https://169-150-255-53-proxy.escfent.com/RTS1HD/index.m3u8",
                        quality: "1080p"
                    }
                ]
            },
            {
                name: "RTS Svet",
                streams: [
                    {
                        url: "https://netplus.zappr.stream/rtssat.m3u8",
                        quality: "720p"
                    },
                    {
                        url: "https://webtvstream.bhtelecom.ba/rts_svet.m3u8",
                        quality: "720p"
                    }
                ]
            }
        ]
    },
    {
        name: "Sweden",
        isoCode: "SE",
        channels: [
            {
                name: "SVT1",
                streams: [
                    {
                        url: "https://193-235-65-225-9983-proxy.escfent.com/stream/channel/98c9090585857e9021d116d178fbd1b9?profile=matroska",
                        type: "direct",
                        quality: "720p"
                    },
                    {
                        url: "https://193-235-65-225-9983-proxy.escfent.com/stream/channel/98c9090585857e9021d116d178fbd1b9?profile=matroska",
                        type: "iframe",
                        quality: "720p",
                        m3u8List: false
                    }
                ]
            }
        ]
    },
    {
        name: "Switzerland",
        isoCode: "CH",
        channels: [
            {
                name: "RTS 1",
                streams: [
                    {
                        url: "https://netplus.zappr.stream/rts1hd.m3u8",
                        quality: "1080p",
                        originalAudio: "English"
                    }
                ]
            },
            {
                name: "RTS 2",
                streams: [
                    {
                        url: "https://netplus.zappr.stream/rts2hd.m3u8",
                        quality: "1080p",
                        originalAudio: "English"
                    }
                ]
            },
            {
                name: "SRF 1",
                streams: [
                    {
                        url: "https://netplus.zappr.stream/srf1hd.m3u8",
                        quality: "1080p",
                        originalAudio: "English"
                    }
                ]
            },
            {
                name: "SRF Zwei",
                streams: [
                    {
                        url: "https://netplus.zappr.stream/srf2hd.m3u8",
                        quality: "1080p",
                        originalAudio: "English"
                    }
                ]
            },
            {
                name: "RSI La 1",
                streams: [
                    {
                        url: "https://netplus.zappr.stream/rsila1hd.m3u8",
                        quality: "1080p",
                        originalAudio: "English"
                    }
                ]
            }
        ]
    },
    {
        name: "Ukraine",
        isoCode: "UA",
        channels: [
            {
                name: "Suspilne Kultura",
                streams: [
                    {
                        url: "https://ext.cdn.nashnet.tv/228.0.0.141/index.m3u8",
                        quality: "1080p",
                        m3u8List: true,
                        m3u8AdditionalLines: [
                            "#EXTVLCOPT:http-user-agent=curl/8.18.0"
                        ]
                    },
                    {
                        url: "special://youtv/359",
                        quality: "1080p"
                    },
                ]
            }
        ]
    },
    {
        name: "United Kingdom",
        isoCode: "GB",
        channels: [
            {
                name: "BBC One",
                streams: [
                    {
                        url: "https://tvheadend.brookfield.xyz/stream/channel/8f5df721ff0a70c859f779c0c8ee5ffa?profile=matroska",
                        type: "direct",
                        quality: "1080p"
                    },
                    {
                        url: "https://tvheadend.brookfield.xyz/stream/channel/8f5df721ff0a70c859f779c0c8ee5ffa?profile=matroska",
                        type: "iframe",
                        quality: "1080p",
                        m3u8List: false
                    }
                ]
            }
        ]
    }
]