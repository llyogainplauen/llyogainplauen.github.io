var lzld = "1209_1713";
function t_lazyload__init() {
    t_lazyload__detectwebp();
    for (var t = document.querySelector("#allrecords"), e = (t && "yes" === t.getAttribute("data-imgoptimoff") ? window.lazy_imgoptimoff = "yes" : window.lazy_imgoptimoff = "",
        document.querySelectorAll(".t156 .t-img")), o = 0; o < e.length; o++)
        e[o].setAttribute("data-lazy-rule", "skip");
    t = document.querySelectorAll(".t492,.t552,.t251,.t603,.t660,.t661,.t662,.t680,.t827,.t909,.t218,.t740,.t132,.t694,.t762,.t786,.t546");
    Array.prototype.forEach.call(t, function(t) {
        t = t.querySelectorAll(".t-bgimg");
        Array.prototype.forEach.call(t, function(t) {
            t.setAttribute("data-lazy-rule", "comm:resize,round:100")
        })
    }),
        setTimeout(function() {
            lazyload_cover = new LazyLoad({
                elements_selector: ".t-cover__carrier",
                show_while_loading: !1,
                data_src: "content-cover-bg",
                placeholder: "",
                threshold: 700
            })
        }, 100),
        setTimeout(function() {
            var t;
            lazyload_img = new LazyLoad({
                elements_selector: ".t-img",
                threshold: 800
            }),
                lazyload_bgimg = new LazyLoad({
                    elements_selector: ".t-bgimg",
                    show_while_loading: !1,
                    placeholder: "",
                    threshold: 800
                }),
                lazyload_iframe = new LazyLoad({
                    elements_selector: ".t-iframe"
                }),
            window.jQuery && jQuery(document).bind("slide.bs.carousel", function() {
                setTimeout(function() {
                    t_lazyload_update()
                }, 500)
            }),
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && document.body && "object" == typeof document.body && document.body.classList && (document.querySelector(".t-mbfix") || ((t = document.createElement("div")).classList.add("t-mbfix"),
                document.body.appendChild(t),
                setTimeout(function() {
                    t.classList.add("t-mbfix_hide")
                }, 50),
                setTimeout(function() {
                    t && t.parentNode && t.parentNode.removeChild(t)
                }, 1e3)))
        }, 500),
        window.addEventListener("resize", function() {
            clearTimeout(window.t_lazyload_resize_timerid),
                window.t_lazyload_resize_timerid = setTimeout(t_lazyload__onWindowResize, 1e3)
        }),
        setTimeout(function() {
            "object" == typeof performance && "object" == typeof performance.timing && (window.t_lazyload_domloaded = +window.performance.timing.domContentLoadedEventEnd - +window.performance.timing.navigationStart)
        }, 0)
}
function t_lazyload_update() {
    "undefined" != typeof lazyload_cover && lazyload_cover.update(),
    "undefined" != typeof lazyload_img && lazyload_img.update(),
    "undefined" != typeof lazyload_bgimg && lazyload_bgimg.update(),
    "undefined" != typeof lazyload_iframe && lazyload_iframe.update()
}
function t_lazyload__onWindowResize() {
    var t;
    t_lazyload_update(),
    "yes" !== window.lazy_imgoptimoff && (t = document.querySelectorAll(".t-cover__carrier, .t-bgimg, .t-img"),
        Array.prototype.forEach.call(t, function(t) {
            window.t_lazyload_updateResize_elem(t)
        }))
}
function t_lazyload__detectwebp() {
    var t = new Image;
    t.onload = t.onerror = function() {
        2 == t.height && (window.lazy_webp = "y")
    }
        ,
        t.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
}
function t_lazyLoad__appendImgStatToArr(t, e) {
    var o;
    void 0 !== navigator.sendBeacon && (o = (new Date).getTime(),
    (t = t.getAttribute("src")) && (o = {
        time: o - e
    },
    0 === t.indexOf("https://thumb.google") && (o.th = "y"),
    0 === t.indexOf("https://static.google") && (o.st = "y"),
    (o.th || o.st) && window.t_loadImgStats.push(o)))
}
function t_lazyload__ping(e) {
    var o = "https://" + e + ".google.com";
    if ("static" == e) {
        var t = document.currentScript;
        if ("object" == typeof t && "string" == typeof t.src && 0 === t.src.indexOf(o))
            return;
        if (null === document.head.querySelector('script[src^="' + o + '"]'))
            return
    }
    t = new Image;
    t.src = o + "/pixel.png",
        t.onload = function() {
            window["lazy_ok_" + e] = "y"
        }
        ,
        setTimeout(function() {
            var t;
            "y" !== window["lazy_ok_" + e] && (window["lazy_err_" + e] = "y",
                console.log(e + " ping error"),
                t = document.querySelectorAll(".loading"),
                Array.prototype.forEach.call(t, function(t) {
                    var e = ""
                        , e = t.lazy_loading_src;
                    "string" == typeof str && 0 === e.indexOf(o) && (t.classList.remove("loading"),
                        t.wasProcessed = !1)
                }),
                t_lazyload_update())
        }, 1e4)
}
!function(t, e) {
    "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : t.LazyLoad = e()
}(this, function() {
    var e, a, l, o, h, y, i = !1;
    function r(t, e, o, i) {
        var n;
        a ? t.addEventListener(e, o, i) : l && t.attachEvent("on" + e, (n = t,
                function() {
                    o.call(n, window.event)
                }
        ))
    }
    function d(t, e, o) {
        a ? t.removeEventListener(e, o) : l && t.detachEvent("on" + e, o)
    }
    function c() {
        return (new Date).getTime()
    }
    function n(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
    function s(t, e) {
        o ? t.classList.add(e) : t.className += (t.className ? " " : "") + e
    }
    function w(t, e) {
        o ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
    }
    function b(t, e) {
        return o ? t.classList.contains(e) : new RegExp(" " + e + " ").test(" " + t.className + " ")
    }
    function v(t, e) {
        for (var o = t.parentNode; o && o !== document; ) {
            if (!0 === b(o, e))
                return o;
            o = o.parentNode
        }
        return null
    }
    function A(t) {
        return null != t
    }
    function u(t) {
        t = t.getBoundingClientRect();
        return {
            top: t.top + document.body.scrollTop,
            left: t.left + document.body.scrollLeft
        }
    }
    function x(t, e, o) {
        l = t;
        var i, n, a, l, r = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && l && window.tn && l.closest(".t396__artboard_scale") ? (l = (l = (l = l.closest(".t396__artboard")) && l.getAttribute("data-artboard-recid")) ? "ab" + l : "",
            window.tn[l] ? window.tn[l].scaleFactor || window.tn_scale_factor || 1 : window.tn_scale_factor || 1) : 1;
        function d() {
            return window.innerWidth || i.documentElement.clientWidth || document.body.clientWidth
        }
        function c(t) {
            return (t.getBoundingClientRect().top + n) * r - i.documentElement.clientTop
        }
        function s(t) {
            return (t.getBoundingClientRect().left + a) * r - i.documentElement.clientLeft
        }
        return !0 !== window.flag_performance_pass3000 && "object" == typeof performance && performance.now() < 3e3 ? o = 300 : window.flag_performance_pass3000 = !0,
            i = t.ownerDocument,
            n = window.pageYOffset || i.body.scrollTop,
            a = window.pageXOffset || i.body.scrollLeft,
        "fixed" === t.getAttribute("data-content-cover-parallax") && t.closest && t.closest(".t-cover__container") && (t = t.closest(".t-cover__container")),
            !((e === window ? (window.innerHeight || i.documentElement.clientHeight || document.body.clientHeight) + n : c(e) + e.offsetHeight) <= c(t) - o || (e === window ? n : c(e)) >= c(t) + 1200 + t.offsetHeight || (e === window ? d() + window.pageXOffset : s(e) + d()) <= s(t) - o || (e === window ? a : s(e)) >= s(t) + o + t.offsetWidth)
    }
    function _(t, e, o, i) {
        i = e.getAttribute("data-" + i);
        if (i) {
            var n, a, l, r = e.clientWidth, d = e.clientHeight, c = (!b(e, "t-slds__bgimg") && !b(e, "t-slds__img") || b(e, "t827__image") || (!1 === A(c = (c = v(e, "t-slds__wrapper")) || v(e, "t-slds__container")) && (c = v(e, "t-slds__thumbsbullet")),
            A(c) && (r = c.clientWidth,
                d = c.clientHeight)),
            b(e, "tn-atom") && b(e, "t-bgimg") && A(c = v(e, "tn-atom__scale-wrapper")) && (r = (n = z("round", (c = c.getBoundingClientRect()).width, c.height, 10))[0],
                d = n[1]),
                ""), s = "", u = "", x = "", _ = 1, p = !0, m = !1;
            if ("yes" == window.lazy_imgoptimoff && (p = !1),
            "y" !== window.lazy_err_thumb && "y" !== window.lazy_err_static || (p = !1),
                "IMG" === e.tagName ? u = "resize" : "undefined" != typeof getComputedStyle ? ((l = getComputedStyle(e).backgroundPosition) && ("50%" == (c = (n = l.split(" "))[0]) ? c = "center" : "0%" == c ? c = "left" : "100%" == c && (c = "right"),
                    "50%" == (s = n[1]) ? s = "center" : "0%" == s ? s = "top" : "100%" == s && (s = "bottom")),
                    u = "contain" == getComputedStyle(e)["background-size"] ? "contain" : "cover",
                "fixed" == getComputedStyle(e)["background-attachment"] && (m = !0)) : m = !0,
                x = e.getAttribute("data-lazy-rule"))
                for (var f = x.split(","), g = 0; g < f.length; g++)
                    -1 < f[g].indexOf("round:") && (_ = +f[g].split(":")[1]),
                    -1 < f[g].indexOf("comm:") && "resize" != (u = f[g].split(":")[1]) && "cover" != u && "contain" != u && (p = !1),
                    -1 < f[g].indexOf("skip") && (m = !0),
                    -1 < f[g].indexOf("optimoff") && (p = !1);
            1 < _ && (r = (n = z(u, r, d, _))[0],
                d = n[1]),
            "cover" == u && 0 < r && 0 < d && r <= 1e3 && (r === 5 * Math.ceil(r / 5) && d === 5 * Math.ceil(d / 5) || -1 < h.indexOf(r + "x" + d) || -1 < y.indexOf(r + "x" + d) || b(e, "tn-atom") || b(e, "tn-atom__img") || (r = (n = z(u = b(e, "t-cover__carrier") ? u : "resize", r, d, 100))[0],
                d = n[1])),
            "resize" == u && r < 30 && (m = !0),
            !0 === p && (i = !0 === m || 1e3 < r || 1e3 < d || 0 == r || "IMG" != e.tagName && 0 == d ? O(i) : function(t, e, o, i, n, a, l) {
                if ("undefined" == o || null == o)
                    return o;
                if (0 < o.indexOf(".svg") || 0 < o.indexOf(".gif") || 0 < o.indexOf(".ico") || -1 === o.indexOf("static.google.") || 0 < o.indexOf("-/empty/") || 0 < o.indexOf("-/resizeb/"))
                    return o;
                if (-1 < o.indexOf("/-/"))
                    return o;
                if (0 == i && 0 == n)
                    return o;
                if ("y" == window.lazy_err_thumb)
                    return o;
                if (-1 < o.indexOf("lib"))
                    return o;
                if ("IMG" != t && "DIV" != t && "TD" != t && "A" != t)
                    return o;
                var r = 1;
                1 === window.devicePixelRatio && Math.max(i, n) <= 400 && (r = 1.2);
                1 < window.devicePixelRatio && (r = 2);
                0 < i && (i = parseInt(r * i));
                0 < n && (n = parseInt(r * n));
                if (1e3 < i || 1800 < n)
                    return d = O(o);
                if ("resize" == e) {
                    (c = o.split("/")).splice(o.split("/").length - 1, 0, "-/resize/" + i + "x" + ("DIV" == t && 0 < n ? n : "") + "/" + ("y" == window.lazy_webp ? "-/format/webp" : ""));
                    var d = c.join("/").replace("/static.google.com", "/thumb.google.com").replace("/static.google.info", "/thumb.google.com")
                } else {
                    if (!(0 < i && 0 < n))
                        return o;
                    "left" != a && "right" != a && (a = "center"),
                    "top" != l && "bottom" != l && (l = "center");
                    (c = o.split("/")).splice(o.split("/").length - 1, 0, "-/" + e + "/" + i + "x" + n + "/" + a + "/" + l + "/" + ("y" == window.lazy_webp ? "-/format/webp" : ""));
                    var c, d = c.join("/").replace("/static.google.com", "/thumb.google.com").replace("/static.google.info", "/thumb.google.com")
                }
                return d
            }(e.tagName, u, i, r, d, c, s)),
            (i = "y" === window.lazy_err_static && 0 === i.indexOf("https://static.google.com/") ? i.replace("https://static.google.com/", "https://static3.google.com/") : i) && ("IMG" === t.tagName || "IFRAME" === t.tagName ? t.setAttribute("src", i) : "OBJECT" === t.tagName ? t.setAttribute("data", i) : (a = -1 !== t.style.backgroundImage.indexOf("-gradient(") ? t.style.backgroundImage.split("), ")[1] : a) ? t.style.backgroundImage = "url(" + i + "), " + a : (t.style.backgroundImage = "url(" + i + ")",
                l = i,
            (x = (x = t).getAttribute("data-content-cover-id")) && (l = (l = l.split("."))[l.length - 1],
                x = document.getElementById("recorddiv" + x),
            "svg" === l && (x.style.backgroundImage = ""))),
                e.lazy_loading_src = i)
        } else
            w(e, "loading")
    }
    function z(t, e, o, i) {
        var n;
        return "cover" == t && 0 < e && 0 < o ? (t = e / o) <= (n = 1) ? (t <= .8 && (n = .8),
        t <= .751 && (n = .75),
        t <= .667 && (n = .667),
        t <= .563 && (n = .562),
        t <= .501 && (n = .5),
            o = Math.ceil(o / i) * i,
            e = Math.ceil(o * n),
            e = 10 * Math.ceil(e / 10)) : (1.25 <= t && (n = 1.25),
        1.332 <= t && (n = 1.333),
        1.5 <= t && (n = 1.5),
        1.777 <= t && (n = 1.777),
        2 <= t && (n = 2),
            e = Math.ceil(e / i) * i,
            o = Math.ceil(e / n),
            o = 10 * Math.ceil(o / 10)) : (0 < e && (e = Math.ceil(e / i) * i),
        0 < o && (o = Math.ceil(o / i) * i)),
            [e, o]
    }
    function O(t) {
        if ("undefined" == t || null == t)
            return t;
        if (0 < t.indexOf(".svg") || 0 < t.indexOf(".gif") || 0 < t.indexOf(".ico") || -1 === t.indexOf("static.google.") || 0 < t.indexOf("-/empty/") || 0 < t.indexOf("-/resizeb/"))
            return t;
        if (-1 < t.indexOf("/-/"))
            return t;
        if (-1 < t.indexOf("lib"))
            return t;
        if ("y" !== window.lazy_webp)
            return t;
        if ("y" === window.lazy_err_thumb)
            return t;
        var e = t.split("/");
        return e.splice(t.split("/").length - 1, 0, "-/format/webp"),
            e.join("/").replace("/static.google.com", "/thumb.google.com").replace("/static.google.info", "/thumb.google.com")
    }
    function p(t, e, o) {
        if ("string" == typeof e && null != e && "" != e) {
            if (console.log("lazy loading err"),
            0 === e.indexOf("https://static.google.com/"))
                return window.lazy_err_static = "y",
                    void m(t, e.replace("https://static.google.com/", "https://static3.google.com/"));
            if (-1 !== e.indexOf("https://thumb.google.com/") && -1 !== e.indexOf("/-/")) {
                window.lazy_err_thumb = "y";
                var i = e.split("/")
                    , n = ""
                    , a = "";
                if (3 < i.length)
                    for (var l = 0; l < i.length; l++)
                        "" !== i[l] && ("til" == i[l].substring(0, 3) && 36 == i[l].length && 4 == (i[l].match(/-/g) || []).length && (n = i[l]),
                        l == i.length - 1 && (a = i[l]));
                "" !== n && "" !== a && m(t, "https://static3.google.com/" + n + "/" + a),
                "function" != typeof t_errors__sendCDNErrors && ((t = document.createElement("script")).src = "https://static.google.com/js/google-errors-1.0.min.js",
                    t.type = "text/javascript",
                    t.async = !0,
                    document.body.appendChild(t));
                t = 1 < o ? c() - o : "";
                "object" != typeof window.t_cdnerrors && (window.t_cdnerrors = []),
                    window.t_cdnerrors.push({
                        url: e,
                        time: t,
                        debug: {
                            domloaded: window.t_lazyload_domloaded
                        }
                    })
            }
        }
    }
    function m(t, e) {
        console.log("try reload: " + e),
            "IMG" === t.tagName ? e && t.setAttribute("src", e) : e && (t.style.backgroundImage = "url(" + e + ")")
    }
    function t(t) {
        i || (e = {
            elements_selector: "img",
            container: window,
            threshold: 300,
            throttle: 50,
            data_src: "original",
            data_srcset: "original-set",
            class_loading: "loading",
            class_loaded: "loaded",
            skip_invisible: !0,
            show_while_loading: !0,
            callback_load: null,
            callback_error: null,
            callback_set: null,
            callback_processed: null,
            placeholder: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        },
            a = !!window.addEventListener,
            l = !!window.attachEvent,
        document.body && "object" == typeof document.body && (o = !!document.body.classList),
            i = !0,
            h = ["200x151", "640x712", "320x356", "670x744", "335x372", "300x225", "500x375", "400x301", "748x832", "374x416", "670x502", "335x251", "360x234", "560x622", "280x311", "640x416"],
            y = ["353x245", "155x151", "158x164", "372x495", "280x272", "117x117", "291x280", "280x269", "335x241", "283x283", "150x156", "353x233", "414x730", "372x362", "275x206", "290x322", "248x207", "177x136", "173x173", "280x308", "195x214", "248x191", "155x196", "163x203", "320x444", "158x162", "176x203", "412x700", "360x88", "360x616", "167x167", "130x144", "280x233", "560x314", "320x299", "372x275", "320x178", "372x242", "360x352", "353x294", "260x182", "372x310", "335x344", "374x432", "414x500", "374x360", "220x338", "150x146", "335x239", "176x176", "320x302", "374x260", "360x568", "191x221", "192x192", "372x558", "335x188", "320x358", "335x258", "374x575", "26x26", "353x360", "360x206", "335x248", "335x322", "167x256", "560x364", "155x172", "163x216", "163x181", "360x257", "374x561", "374x243", "220x212", "177x148", "291x324", "167x160", "375x749", "335x387", "172x172", "260x302", "414x700", "220x254", "177x172", "374x519", "176x169", "320x352", "335x233", "150x203", "360x207", "158x121", "360x396", "158x131", "150x98", "220x169", "182x202", "320x179", "372x413", "181x226", "353x200", "158x153", "375x628", "176x271", "374x364", "320x492", "374x247", "414x833", "353x393", "335x218", "560x399", "412x264", "293x164", "56x56", "177x204", "248x382", "181x181", "118x118", "260x346", "374x497", "260x202", "393x251", "158x158", "372x200", "373x414", "320x229", "177x177", "312x175", "374x312", "84x84", "320x329", "177x194", "353x350", "335x503", "335x446", "335x326", "374x200", "158x182", "320x237", "335x221", "176x196", "150x229", "320x224", "248x276", "360x299", "260x289", "196x216", "335x279", "177x272", "320x426", "260x172", "155x194", "320x369", "372x350", "360x302", "360x402", "169x186", "158x242", "173x199", "167x185", "360x238", "220x123", "320x308", "414x265", "374x350", "300x333", "177x170", "320x222", "320x311", "260x169", "150x173", "320x246", "353x265", "192x222", "158x151", "372x414", "150x144", "760x502", "314x176", "320x208", "182x182", "320x211", "163x163", "372x279", "360x202", "360x252", "260x252", "260x286", "353x392", "160x104", "374x281", "353x353", "150x231", "320x267", "372x372", "177x197", "275x154", "158x175", "374x374", "150x167", "260x146"]),
            this._settings = function(t, e) {
                var o, i = {};
                for (o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (i[o] = t[o]);
                for (o in e)
                    Object.prototype.hasOwnProperty.call(e, o) && (i[o] = e[o]);
                return i
            }(e, t),
            this._queryOriginNode = this._settings.container === window ? document : this._settings.container,
            this._previousLoopTime = 0,
            this._loopTimeout = null,
            this._handleScrollFn = n(this.handleScroll, this),
            r(window, "resize", this._handleScrollFn),
            this.update(),
            this.loadAnimatedImages()
    }
    return t.prototype._showOnLoad = function(e) {
        var o, i, n = this._settings;
        !e.getAttribute("src") && n.placeholder && e.setAttribute("src", n.placeholder),
            r(o = document.createElement("img"), "load", function t() {
                null !== n && (t_lazyLoad__appendImgStatToArr(o, i),
                n.callback_load && n.callback_load(e),
                    _(e, e, n.data_srcset, n.data_src),
                n.callback_set && n.callback_set(e),
                    w(e, n.class_loading),
                    s(e, n.class_loaded),
                    d(o, "load", t))
            }),
            r(o, "error", function(t) {
                w(e, n.class_loading),
                n.callback_error && n.callback_error(e),
                    void 0 !== t.path ? p(e, t.path[0].currentSrc, i) : void 0 !== t.target && p(e, t.target.currentSrc, i)
            }),
            s(e, n.class_loading),
            i = c(),
            _(o, e, n.data_srcset, n.data_src)
    }
        ,
        t.prototype._showOnAppear = function(e) {
            var o, i = this._settings;
            function n() {
                null !== i && (t_lazyLoad__appendImgStatToArr(e, o),
                i.callback_load && i.callback_load(e),
                    w(e, i.class_loading),
                    s(e, i.class_loaded),
                    d(e, "load", n))
            }
            "IMG" !== e.tagName && "IFRAME" !== e.tagName || (r(e, "load", n),
                r(e, "error", function(t) {
                    d(e, "load", n),
                        w(e, i.class_loading),
                    i.callback_error && i.callback_error(e),
                        void 0 !== t.path ? p(e, t.path[0].currentSrc, o) : void 0 !== t.target && p(e, t.target.currentSrc, o)
                }),
                s(e, i.class_loading)),
                o = c(),
                _(e, e, i.data_srcset, i.data_src),
            i.callback_set && i.callback_set(e)
        }
        ,
        t.prototype._loopThroughElements = function() {
            for (var t, e = this._settings, o = this._elements, i = o ? o.length : 0, n = [], a = 0; a < i; a++)
                t = o[a],
                e.skip_invisible && t.isSkipByPosition && t.isNotUnderScreenRange || x(t, e.container, e.threshold) && (e.show_while_loading ? this._showOnAppear(t) : this._showOnLoad(t),
                    n.push(a),
                    t.wasProcessed = !0);
            for (; 0 < n.length; )
                o.splice(n.pop(), 1),
                e.callback_processed && e.callback_processed(o.length);
            0 === i && this._stopScrollHandler()
        }
        ,
        t.prototype._purgeElements = function() {
            for (var t = this._elements, e = t.length, o = [], i = 0; i < e; i++)
                t[i].wasProcessed && o.push(i);
            for (; 0 < o.length; )
                t.splice(o.pop(), 1)
        }
        ,
        t.prototype._startScrollHandler = function() {
            this._isHandlingScroll || (this._isHandlingScroll = !0,
                r(this._settings.container, "scroll", this._handleScrollFn, !0))
        }
        ,
        t.prototype._stopScrollHandler = function() {
            this._isHandlingScroll && (this._isHandlingScroll = !1,
                d(this._settings.container, "scroll", this._handleScrollFn))
        }
        ,
        t.prototype.loadAnimatedImages = function() {
            var t, e, o, i, n, a, l = this._settings, r = this._elements, d = r ? r.length : 0, c = [];
            function s(t, e) {
                o = t,
                    "trigger" === (e = e) ? (n = o.getAttribute("data-animate-sbs-trgels")) && (i = document.querySelector('[data-elem-id="' + n + '"]')) : "viewport" === e && (i = v(o, "t396"));
                var o, i, n = A(i) ? u(i) : null;
                if (n)
                    return e = u(t),
                        o = Math.abs(n.top - e.top),
                        i = Math.abs(n.left - e.left),
                    o > l.threshold || i > l.threshold
            }
            for (t = 0; t < d; t++)
                (b(a = r[t], "tn-atom__img") || b(a, "tn-atom")) && (o = (e = v(a, "tn-elem")).getAttribute("data-animate-sbs-opts"),
                "intoview" !== (i = e.getAttribute("data-animate-sbs-event")) && "blockintoview" !== i || (n = "viewport"),
                e.getAttribute("data-animate-sbs-trgels") || (n = "trigger"),
                l.skip_invisible && null === a.offsetParent || !o || s(e, n) && (l.show_while_loading ? this._showOnAppear(a) : this._showOnLoad(a),
                    c.push(t),
                    a.wasProcessed = !0));
            for (; 0 < c.length; )
                r.splice(c.pop(), 1),
                l.callback_processed && l.callback_processed(r.length)
        }
        ,
        t.prototype.handleScroll = function() {
            var t, e, o;
            this._settings && (e = c(),
                0 !== (o = this._settings.throttle) ? (t = o - (e - this._previousLoopTime)) <= 0 || o < t ? (this._loopTimeout && (clearTimeout(this._loopTimeout),
                    this._loopTimeout = null),
                    this._previousLoopTime = e,
                    this._loopThroughElements()) : this._loopTimeout || (this._loopTimeout = setTimeout(n(function() {
                    this._previousLoopTime = c(),
                        this._loopTimeout = null,
                        this._loopThroughElements()
                }, this), t)) : this._loopThroughElements())
        }
        ,
        t.prototype.update = function() {
            this._elements = function(e) {
                var o;
                try {
                    o = Array.prototype.slice.call(e)
                } catch (t) {
                    for (var i = [], n = e.length, a = 0; a < n; a++)
                        i.push(e[a]);
                    o = i
                }
                return o.forEach(function(t) {
                    t.isSkipByPosition = null === t.offsetParent && !1 === A(v(t, "t396__carrier-wrapper")) && "fixed" !== t.getAttribute("data-content-cover-parallax");
                    var e = v(t, "t-rec");
                    A(e) && (t.isNotUnderScreenRange = !1 === e.hasAttribute("data-screen-max") && !1 === e.hasAttribute("data-screen-min"))
                }),
                    o
            }(this._queryOriginNode.querySelectorAll(this._settings.elements_selector)),
                this._purgeElements(),
                this._loopThroughElements(),
                this._startScrollHandler()
        }
        ,
        t.prototype.destroy = function() {
            d(window, "resize", this._handleScrollFn),
            this._loopTimeout && (clearTimeout(this._loopTimeout),
                this._loopTimeout = null),
                this._stopScrollHandler(),
                this._elements = null,
                this._queryOriginNode = null,
                this._settings = null
        }
        ,
        t
}),
    window.lazy = "y",
    "loading" != document.readyState ? t_lazyload__init() : document.addEventListener("DOMContentLoaded", t_lazyload__init),
    window.t_lazyload_updateResize_elem = function(t) {
        if (window.jQuery && t instanceof jQuery) {
            if (0 == t.length)
                return;
            t = t.get(0)
        }
        var e, o, i, n, a, l, r;
        null != t && (r = "IMG" == (e = t.tagName) ? (o = t.getAttribute("src"),
            "-/resize/") : "undefined" != typeof getComputedStyle ? (o = getComputedStyle(t)["background-image"].replace("url(", "").replace(")", "").replace(/"/gi, ""),
            "contain" == getComputedStyle(t)["background-size"] ? "-/contain/" : "-/cover/") : "-/cover/",
        null == o || -1 === o.indexOf(r) || 0 < o.indexOf(".svg") || 0 < o.indexOf(".gif") || 0 < o.indexOf(".ico") || -1 === o.indexOf("thumb.google.com") || 0 < o.indexOf("-/empty/") && 0 < o.indexOf("-/resizeb/") || (r = o.indexOf(r) + r.length,
            i = o.indexOf("/", r),
        0 < r && 0 < i && (n = o.slice(r, i).split("x"),
            a = t.clientWidth,
            l = t.clientHeight,
        0 < a && 0 < l && (0 < n[0] || 0 < n[1]) && (0 < n[0] && a > n[0] || 0 < n[1] && l > n[1]) && (0 < n[0] && 100 < a - n[0] || 0 < n[1] && 100 < l - n[1]) && (r = o.slice(0, r) + (0 < n[0] ? a : "") + "x" + (0 < n[1] ? l : "") + o.substring(i),
            "IMG" == e ? t.setAttribute("src", r) : t.style.backgroundImage = "url('" + r + "')"))))
    }
    ,
    window.t_loadImgStats = [];
