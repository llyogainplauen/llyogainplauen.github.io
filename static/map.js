function t_appendGoogleMap(recid, key) {
    var runfunc, langPreferences, mapLang, mapElement, mapElLang, script, mapKey;
    "object" == typeof google && "object" == typeof google.maps ? t_handleGoogleApiReady(recid) : window.googleapiiscalled ? setTimeout(function() {
        t_appendGoogleMap(recid, key)
    }, 1e3) : (runfunc = "window.t_handleGoogleApiReady_" + recid + ' = function () { t_handleGoogleApiReady("' + recid + '") }',
        eval(runfunc),
        langPreferences = "",
        mapLang = "",
        mapElement = document.querySelector("#rec" + recid + " .t-map"),
        mapElLang = mapElement.getAttribute("data-map-language"),
    mapElement && (mapLang = mapElLang || ""),
    mapLang && 2 === mapLang.length && (langPreferences = "&language=" + mapLang),
        script = document.createElement("script"),
        script.type = "text/javascript",
        mapKey = key ? key.trim() : "",
        script.src = "https://maps.google.com/maps/api/js?key=" + mapKey + "&callback=t_handleGoogleApiReady_" + recid + langPreferences,
        document.body.appendChild(script),
        window.googleapiiscalled = !0)
}
function t_handleGoogleApiReady(d) {
    var e = document.querySelectorAll("#rec" + d + " .t-map");
    if (!e.length)
        return !1;
    Array.prototype.forEach.call(e, function(e) {
        var a = window["arMapMarkers" + d];
        window.isDragMap = !window.isMobile;
        var t = e.getAttribute("data-map-style")
            , o = e.getAttribute("data-map-color")
            , n = e.getAttribute("data-map-mode")
            , i = e.getAttribute("data-map-zoom")
            , r = 0 < a.length && new google.maps.LatLng(parseFloat(a[0].lat),parseFloat(a[0].lng))
            , n = {
            zoom: parseInt(i, 10),
            center: r,
            scrollwheel: !1,
            gestureHandling: "cooperative",
            zoomControl: !0,
            styles: function(e, t, a) {
                if (e && !a)
                    return t ? JSON.parse(t) : [];
                if (e && a) {
                    var o = t_map_hexToHsl(a)
                        , t = 2 * o[1] - 100
                        , o = 2 * o[2] - 100
                        , e = "bw_dark" === e;
                    return [{
                        featureType: "all",
                        elementType: "all",
                        stylers: [{
                            visibility: "simplified"
                        }, {
                            hue: a
                        }, {
                            saturation: t
                        }, {
                            lightness: e ? -o : o
                        }, {
                            invert_lightness: e
                        }]
                    }]
                }
            }(n, t, o)
        };
        var l = new google.maps.Map(e,n)
            , p = new google.maps.LatLngBounds;
        Array.prototype.forEach.call(a, function(e) {
            var t = new google.maps.LatLng(parseFloat(e.lat),parseFloat(e.lng))
                , a = {
                url: e.url,
                size: new google.maps.Size(48,48),
                anchor: function(e) {
                    if (e.offset) {
                        var t = e.offset.replace(/\s/g, "").split(",")
                            , e = -1 * +t[0]
                            , t = -1 * +t[1];
                        return new google.maps.Point(e,t)
                    }
                    return new google.maps.Point(0,48)
                }(e)
            }
                , a = new google.maps.Marker({
                position: t,
                visible: !e.isHidden,
                map: l,
                title: e.title,
                icon: e.url ? a : {
                    path: "M182.9,551.7c0,0.1,0.2,0.3,0.2,0.3S358.3,283,358.3,194.6c0-130.1-88.8-186.7-175.4-186.9   C96.3,7.9,7.5,64.5,7.5,194.6c0,88.4,175.3,357.4,175.3,357.4S182.9,551.7,182.9,551.7z M122.2,187.2c0-33.6,27.2-60.8,60.8-60.8   c33.6,0,60.8,27.2,60.8,60.8S216.5,248,182.9,248C149.4,248,122.2,220.8,122.2,187.2z",
                    fillColor: e.color || "#ea4335",
                    fillOpacity: 1,
                    strokeColor: "#5e5e5e",
                    strokeOpacity: .5,
                    strokeWeight: 1,
                    rotation: 0,
                    scale: .075,
                    anchor: new google.maps.Point(180,555)
                }
            });
            p.extend(t),
            (e.descr || e.title) && function(e, t, a, o) {
                var n = document.createElement("textarea");
                n.innerHTML = t;
                var a = a ? "<b>" + a + "</b>" : ""
                    , n = n.textContent
                    , n = [a, n].filter(Boolean).join("<br>")
                    , i = new google.maps.InfoWindow({
                    content: n
                });
                o && i.open(e.get("map"), e);
                e.addListener("click", function() {
                    i.open(e.get("map"), e)
                })
            }(a, e.descr, e.title, e.isOpen)
        });
        var s, t = e.getAttribute("data-map-path"), o = e.getAttribute("data-map-path-color"), n = e.getAttribute("data-map-path-weight");
        null !== t && 1 < a.length && new google.maps.Polyline({
            path: a.map(function(e) {
                return new google.maps.LatLng(parseFloat(e.lat),parseFloat(e.lng))
            }),
            geodesic: !0,
            strokeColor: o || "#ff6d61",
            strokeWeight: parseInt(n) || 2
        }).setMap(l),
        1 < a.length && (l.fitBounds(p),
            s = google.maps.event.addListener(l, "idle", function() {
                (l.getZoom() > parseInt(i, 10) || 0 === l.getZoom()) && l.setZoom(parseInt(i, 10)),
                16 < l.getZoom() && l.setZoom(16),
                    google.maps.event.removeListener(s)
            })),
            google.maps.event.addDomListener(window, "resize", function() {
                var e = l.getCenter()
                    , t = parseInt(i, 10);
                google.maps.event.trigger(l, "resize"),
                    l.setCenter(e),
                0 < a.length && (l.fitBounds(p),
                0 < t && (l.getZoom() > t || 0 == l.getZoom()) && l.setZoom(t))
            }),
            e.addEventListener("displayChanged", function() {
                google.maps.event.trigger(l, "resize")
            }),
            e.addEventListener("sizechange", function() {
                google.maps.event.trigger(l, "resize")
            })
    })
}
function t_appendYandexMap(recid, key) {
    var runfunc, mapLang, mapElement, mapElAttr, script;
    "object" == typeof ymaps && "function" == typeof ymaps.Map ? t_handleYandexApiReady(recid) : window.yandexmapsapiiscalled ? setTimeout(function() {
        t_appendYandexMap(recid, key)
    }, 1e3) : (runfunc = "window.t_handleYandexApiReady_" + recid + ' = function () { return t_handleYandexApiReady("' + recid + '") }',
        eval(runfunc),
        mapLang = "",
        apElement = document.querySelector("#rec" + recid + " .t-map"),
        mapElAttr = mapElement.getAttribute("data-map-language"),
    mapElement && (mapLang = "EN" === mapElAttr ? "en_US" : "ru_RU"),
        script = document.createElement("script"),
        script.type = "text/javascript",
        script.src = "https://api-maps.yandex.ru/2.1/?lang=" + mapLang + "&coordorder=latlong&onload=t_handleYandexApiReady_" + recid,
    key && (script.src += "&apikey=" + key),
        document.body.appendChild(script),
        window.yandexmapsapiiscalled = !0)
}
function t_handleYandexApiReady(m) {
    var e = document.querySelectorAll("#rec" + m + " .t-map");
    if (!e.length)
        return !1;
    Array.prototype.forEach.call(e, function(e) {
        var a = window["arMapMarkers" + m]
            , t = e.getAttribute("data-map-zoom");
        window.isDragMap = !window.isMobile;
        var o = 0 < a.length && [parseFloat(a[0].lat), parseFloat(a[0].lng)]
            , n = {
            zoom: parseInt(t, 10),
            center: o,
            scrollZoom: !1,
            controls: ["typeSelector", "zoomControl"],
            drag: window.isDragMap
        }
            , i = new ymaps.Map(e,n)
            , r = i.panes.get("events").getElement()
            , l = {
            EN: "Use two fingers to move the map",
            RU: "Чтобы переместить карту проведите по ней двумя пальцами",
            FR: "Utilisez deux doigts pour déplacer la carte",
            DE: "Verschieben der Karte mit zwei Fingern",
            ES: "Para mover el mapa, utiliza dos dedos",
            PT: "Use dois dedos para mover o mapa",
            UK: "Переміщуйте карту двома пальцями",
            JA: "地図を移動させるには指 2 本で操作します",
            ZH: "使用双指移动地图",
            PL: "Przesuń mapę dwoma palcami",
            KK: "Картаны екі саусақпен жылжытыңыз",
            IT: "Utilizza due dita per spostare la mappa",
            LV: "Lai pārvietotu karti, bīdiet to ar diviem pirkstiem"
        }
            , p = {
            alignItems: "center",
            boxSizing: "border-box",
            color: "white",
            display: "flex",
            justifyContent: "center",
            fontSize: "22px",
            fontFamily: "Arial,sans-serif",
            opacity: "0.0",
            padding: "25px",
            textAlign: "center",
            transition: "opacity .3s",
            touchAction: "auto"
        };
        Array.prototype.forEach.call(Object.keys(p), function(e) {
            r.style[e] = p[e]
        }),
            i.behaviors.disable("scrollZoom"),
        window.isMobile && (i.behaviors.disable("drag"),
            ymaps.domEvent.manager.add(r, "touchmove", function(e) {
                1 === e.get("touches").length && (r.style.transition = "opacity .3s",
                    r.style.background = "rgba(0, 0, 0, .45)",
                    r.textContent = l[window.browserLang] || l.EN,
                    r.style.opacity = "1")
            }),
            ymaps.domEvent.manager.add(r, "touchend", function() {
                r.style.transition = "opacity .8s",
                    r.style.opacity = "0"
            }));
        var s = a.map(function(e) {
            var t = [parseFloat(e.lat), parseFloat(e.lng)]
                , a = document.createElement("textarea");
            a.innerHTML = e.descr;
            a = [e.title ? "<b>" + e.title + "</b>" : "", a.textContent].filter(Boolean).join("<br>");
            return new ymaps.Placemark(t,{
                hintContent: e.title,
                balloonContent: a
            },{
                iconColor: e.color || void 0,
                iconLayout: e.url ? "default#imageWithContent" : void 0,
                iconImageHref: e.url || void 0,
                iconImageSize: e.url ? [48, 48] : void 0,
                iconImageOffset: (a = e).url && a.offset ? a.offset.replace(/\s/g, "").split(",") : a.url ? [0, -48] : void 0,
                visible: !e.isHidden
            })
        })
            , d = new ymaps.GeoObjectCollection({});
        s.forEach(function(e) {
            d.add(e)
        }),
            i.geoObjects.add(d),
            s.forEach(function(e, t) {
                a[t].isOpen && e.balloon.open()
            });
        o = e.getAttribute("data-map-path"),
            n = e.getAttribute("data-map-path-color"),
            s = e.getAttribute("data-map-path-weight");
        1 < a.length && null !== o && (c = new ymaps.Polyline(a.map(function(e) {
            return [parseFloat(e.lat), parseFloat(e.lng)]
        }),{},{
            strokeColor: n || "#06f",
            strokeWidth: parseInt(s, 10) || 1,
            strokeOpacity: .85
        }),
            i.geoObjects.add(c));
        var c, n = e.getAttribute("data-map-color"), s = e.getAttribute("data-map-mode");
        s && ((c = e.querySelector('ymaps[class$="ground-pane" i] > ymaps')) && (c.style.filter = "bw_light" === s ? "grayscale(1)" : "grayscale(1) invert(1)"),
        n && (c = e.querySelector('ymaps[class$="ground-pane" i]'),
            (e = document.createElement("div")).style.opacity = ".15",
            e.style.backgroundColor = n,
            e.style.position = "absolute",
            e.style.top = "-2500px",
            e.style.left = "-2500px",
            e.style.width = "5000px",
            e.style.height = "5000px",
            e.style.zIndex = "9999",
        "bw_light" === s && ((n = e.cloneNode()).style.mixBlendMode = "color",
            n.style.zIndex = "9998",
            n.style.opacity = ".5",
        c && c.appendChild(n)),
        "bw_dark" === s && ((s = e.cloneNode()).style.mixBlendMode = "soft-light",
            s.style.zIndex = "9998",
            s.style.opacity = ".85",
        c && c.appendChild(s)),
        c && c.appendChild(e)));
        var g = parseInt(t, 10);
        1 < a.length && i.setBounds(d.getBounds(), {
            checkZoomRange: !0
        }).then(function() {
            0 < g && (0 == i.getZoom() || i.getZoom() > g) && i.setZoom(g)
        }),
        0 < g && (0 == i.getZoom() || i.getZoom() > g) && i.setZoom(g),
            i.events.add("sizechange", function() {
                i.container.fitToViewport(),
                    1 < a.length ? i.setBounds(d.getBounds(), {
                        checkZoomRange: !0
                    }).then(function() {
                        0 < g && (0 == i.getZoom() || i.getZoom() > g) && i.setZoom(g)
                    }) : 0 < g && (0 == i.getZoom() || i.getZoom() > g) && i.setZoom(g)
            })
    })
}
function t_map_hexToHsl(e) {
    var t = 0
        , a = 0
        , o = 0;
    4 === e.length ? (t = "0x" + e[1] + e[1],
        a = "0x" + e[2] + e[2],
        o = "0x" + e[3] + e[3]) : 7 === e.length && (t = "0x" + e[1] + e[2],
        a = "0x" + e[3] + e[4],
        o = "0x" + e[5] + e[6]),
        t /= 255,
        a /= 255,
        o /= 255;
    var n = Math.min(t, a, o)
        , i = Math.max(t, a, o)
        , r = i - n
        , l = 0
        , e = 0
        , l = 0 == r ? 0 : i === t ? (a - o) / r % 6 : i === a ? (o - t) / r + 2 : (t - a) / r + 4;
    return (l = Math.round(60 * l)) < 0 && (l += 360),
        e = (i + n) / 2,
        [l, +(100 * (0 == r ? 0 : r / (1 - Math.abs(2 * e - 1)))).toFixed(1), e = +(100 * e).toFixed(1)]
}
