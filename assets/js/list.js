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
                        quality: "1080p50",
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
                        quality: "1080p50"
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
                        quality: "720p50"
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
                        quality: "1080p50",
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
                        quality: "1080p50"
                    }
                ]
            },
            {
                name: "RTBF Tipik",
                streams: [
                    {
                        url: "http://109.89.79.6:55555/Tipik",
                        external: true,
                        quality: "1080p50"
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
                        url: "https://restreamer.qzz.io/memfs/76cc2980-fce0-4aa2-99fd-8b153b846628.m3u8",
                        quality: "720p"
                    },
                    {
                        url: "http://94.236.200.185:55555/RIK%20Sat",
                        external: true,
                        quality: "576p50"
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
                        quality: "720p50"
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
        name: "Finland",
        isoCode: "FI",
        channels: [
            {
                name: "Yle TV1",
                warning: "might fail on first load, you might need to select it twice",
                streams: [
                    {
                        url: "special://tvkaista/yle-tv1",
                        quality: "720p"
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
                        quality: "720p50",
                        originalAudio: "Original version"
                    }
                ]
            },
            {
                name: "France 4",
                streams: [
                    {
                        url: "https://netplus.zappr.stream/france4hd.m3u8",
                        quality: "720p50",
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
                        quality: "720p50"
                    }
                ]
            },
            {
                name: "One",
                streams: [
                    {
                        url: "https://netplus.zappr.stream/onehd.m3u8",
                        quality: "720p50"
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
                        url: "https://restreamer.qzz.io/memfs/cc562359-cb97-47f1-b310-675902286e83.m3u8",
                        quality: "1080p"
                    },
                    {
                        url: "http://94.67.8.121:55555/ERT%201%20HD",
                        external: true,
                        quality: "1080p50"
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
                        quality: "1080p50",
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
                        quality: "720p50"
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
                        quality: "720p50"
                    }
                ]
            }
        ]
    },
    {
        name: "Latvia",
        isoCode: "LV",
        channels: [
            {
                name: "LTV1",
                streams: [
                    {
                        url: "https://restreamer.qzz.io/memfs/ee8c7848-8e55-4cd1-b599-36fdd248f1f1.m3u8",
                        quality: "1080p"
                    }
                ]
            },
            {
                name: "LTV7",
                streams: [
                    {
                        url: "https://restreamer.qzz.io/memfs/b0db6e5c-8354-4686-b6f1-fbf495444540.m3u8",
                        quality: "1080p"
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
                        url: "https://restreamer.qzz.io/memfs/96d84d8e-62fc-4d6b-9576-8962235ff522.m3u8",
                        quality: "1080p"
                    },
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
        name: "Moldova",
        isoCode: "MD",
        channels: [
            {
                name: "Moldova 1",
                streams: [
                    {
                        url: "https://restreamer.qzz.io/memfs/76e69efe-e58b-43a1-81cd-bcda6bc40aa3.m3u8",
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
                warning: "occasionally airs TVCG 2",
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
                        quality: "1080p50"
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
                        quality: "1080p50"
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
                        quality: "720p50",
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
                        quality: "576p50"
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
                warning: "has popup ads, please watch with an adblocker",
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
                        quality: "576p50"
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
                        quality: "720p50"
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
        name: "Switzerland",
        isoCode: "CH",
        channels: [
            {
                name: "RTS 1",
                streams: [
                    {
                        url: "https://netplus.zappr.stream/rts1hd.m3u8",
                        quality: "1080p50",
                        originalAudio: "English"
                    }
                ]
            },
            {
                name: "RTS 2",
                streams: [
                    {
                        url: "https://netplus.zappr.stream/rts2hd.m3u8",
                        quality: "1080p50",
                        originalAudio: "English"
                    }
                ]
            },
            {
                name: "SRF 1",
                streams: [
                    {
                        url: "https://netplus.zappr.stream/srf1hd.m3u8",
                        quality: "1080p50",
                        originalAudio: "English"
                    }
                ]
            },
            {
                name: "SRF Zwei",
                streams: [
                    {
                        url: "https://netplus.zappr.stream/srf2hd.m3u8",
                        quality: "1080p50",
                        originalAudio: "English"
                    }
                ]
            },
            {
                name: "RSI La 1",
                streams: [
                    {
                        url: "https://netplus.zappr.stream/rsila1hd.m3u8",
                        quality: "1080p50",
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
                        url: "https://restreamer.qzz.io/memfs/5bfc30f7-2f8b-4031-9761-20088bb916ed.m3u8",
                        quality: "1080p"
                    }
                ]
            }
        ]
    }
]