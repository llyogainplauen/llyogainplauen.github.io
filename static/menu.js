function t_menu__highlightActiveLinks(e) {
    var o, r = window.location.href, i = window.location.pathname, e = ("/" === r[r.length - 1] && (o = r.slice(0, -1)),
    "" === (i = "/" === (i = "/" === i[i.length - 1] ? i.slice(0, -1) : i)[0] ? i.slice(1) : i) && (i = "/"),
        document.querySelectorAll(e));
    Array.prototype.forEach.call(e, function(e) {
        var t, n = e.getAttribute("href");
        !n || (t = e.href) !== r && t !== i && n !== r && n !== i && o !== r && o !== i || e.classList.add("t-active")
    })
}
function t_menu__findAnchorLinks(e, t) {
    var e = document.getElementById("rec" + e);
    e && t_menu__isBlockVisible(e) && (e = e ? e.querySelectorAll(t + '[href*="#"]:not(.tooltipstered)') : []).length && t_menu__updateActiveLinks(e, t)
}
function t_menu__updateActiveLinks(o, e) {
    var e = e.slice(2)
        , r = (e = ".t" + parseInt(e, 10),
        o = Array.prototype.slice.call(o),
        null)
        , n = []
        , i = {}
        , e = ((o = o.reverse()).forEach(function(e) {
        var t = t_menu__getSectionByHref(e);
        t && t.id && (n.push(t),
            i[t.id] = e)
    }),
        t_menu__updateSectionsOffsets(n),
        n.sort(function(e, t) {
            e = parseInt(e.getAttribute("data-offset-top"), 10) || 0;
            return (parseInt(t.getAttribute("data-offset-top"), 10) || 0) - e
        }),
        window.addEventListener("resize", t_throttle(function() {
            t_menu__updateSectionsOffsets(n)
        }, 200)),
        document.querySelectorAll(e));
    Array.prototype.forEach.call(e, function(e) {
        e.addEventListener("displayChanged", function() {
            t_menu__updateSectionsOffsets(n)
        })
    }),
        t_menu__highlightNavLinks(o, n, i, r),
        o.forEach(function(t, n) {
            t.addEventListener("click", function() {
                var e = t_menu__getSectionByHref(t);
                !t.classList.contains("tooltipstered") && e && e.id && (o.forEach(function(e, t) {
                    t === n ? e.classList.add("t-active") : e.classList.remove("t-active")
                }),
                    r = e.id)
            })
        }),
        window.addEventListener("scroll", t_throttle(function() {
            r = t_menu__highlightNavLinks(o, n, i, r)
        }, 100)),
    "ResizeObserver"in window && setTimeout(function() {
        new ResizeObserver(function() {
                t_menu__updateSectionsOffsets(n)
            }
        ).observe(document.body)
    }, 500)
}
function t_menu__updateSectionsOffsets(e) {
    e.forEach(function(e) {
        var t = e.getBoundingClientRect().top + window.pageYOffset;
        e.getAttribute("data-offset-top") !== t.toString() && e.setAttribute("data-offset-top", t)
    })
}
function t_menu__getSectionByHref(e) {
    var t, n;
    if (e)
        return t = e.getAttribute("href"),
            n = t ? t.replace(/\s+/g, "") : "",
        0 === n.indexOf("/") && (n = n.slice(1)),
            t && e.matches('[href*="#rec"]') ? (n = n.replace(/.*#/, ""),
                document.getElementById(n)) : (t = '.r[data-record-type="215"] a[name="' + (e = "number" == typeof (n = -1 !== (e = t ? t.trim() : "").indexOf("#") && e.indexOf("#")) || "number" == typeof (n = -1 !== e.indexOf("/") && e.indexOf("/")) ? e.slice(n + 1) : e) + '"]',
                (n = document.querySelector(t)) ? n.closest(".r") : null)
}
function t_menu__highlightNavLinks(e, t, n, o) {
    if (document.documentElement.classList.contains("t-body_scroll-locked"))
        return null;
    var r = window.pageYOffset
        , i = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
        , a = o
        , l = t.length ? t[t.length - 1] : null
        , l = l && parseInt(l.getAttribute("data-offset-top"), 10) || 0;
    if (t.length && null === o && r + 300 < l)
        return e.forEach(function(e) {
            e.classList.remove("t-active")
        }),
            null;
    for (var s = 0; s < t.length; s++) {
        var u = parseInt(t[s].getAttribute("data-offset-top"), 10)
            , c = t[s].id ? n[t[s].id] : null;
        if (u <= r + 300 || 0 === s && r >= i - window.innerHeight) {
            null === o && c && !c.classList.contains("t-active") ? (e.forEach(function(e) {
                e.classList.remove("t-active")
            }),
            c && c.classList.add("t-active"),
                a = null) : null !== o && t[s].id && o === t[s].id && (a = null);
            break
        }
    }
    return a
}
function t_menu__setBGcolor(e, t) {
    t = document.querySelectorAll(t);
    Array.prototype.forEach.call(t, function(e) {
        980 < window.innerWidth ? "yes" === e.getAttribute("data-bgcolor-setbyscript") && (e.style.backgroundColor = e.getAttribute("data-bgcolor-rgba")) : (e.style.backgroundColor = e.getAttribute("data-bgcolor-hex"),
            e.setAttribute("data-bgcolor-setbyscript", "yes"),
        e.style.transform && (e.style.transform = ""),
        e.style.opacity && (e.style.opacity = ""))
    })
}
function t_menu__showFixedMenu(e, t) {
    var n = [".t280", ".t282", ".t450", ".t451", ".t466", ".t453"].some(function(e) {
        return e === t
    });
    if (!(window.innerWidth <= 980) || n) {
        n = document.getElementById("rec" + e);
        if (!n)
            return !1;
        e = n.querySelectorAll(t);
        Array.prototype.forEach.call(e, function(e) {
            var t, n = e.getAttribute("data-appearoffset");
            n && (-1 !== n.indexOf("vh") && (n = Math.floor(window.innerHeight * (parseInt(n) / 100))),
                n = parseInt(n, 10),
                t = e.clientHeight,
                "number" == typeof n && window.pageYOffset >= n ? e.style.transform === "translateY(-" + t + "px)" && t_menu__slideElement(e, t, "toBottom") : "translateY(0px)" === e.style.transform ? t_menu__slideElement(e, t, "toTop") : (e.style.transform = "translateY(-" + t + "px)",
                    e.style.opacity = "0"))
        })
    }
}
function t_menu__changeBgOpacity(e, t) {
    var n = ["t280", "t282", "t451", "t466"].some(function(e) {
        return -1 !== t.indexOf(e)
    });
    if (!(window.innerWidth <= 980) || n) {
        n = document.getElementById("rec" + e);
        if (!n)
            return !1;
        e = n.querySelectorAll(t);
        Array.prototype.forEach.call(e, function(e) {
            var t = e.getAttribute("data-bgcolor-rgba")
                , n = e.getAttribute("data-bgcolor-rgba-afterscroll")
                , o = e.getAttribute("data-bgopacity")
                , r = e.getAttribute("data-bgopacity-two")
                , i = e.getAttribute("data-menushadow") || "0"
                , a = "100" === i ? i : "0." + i;
            e.style.backgroundColor = 20 < window.pageYOffset ? n : t,
                20 < window.pageYOffset && "0" === r || window.pageYOffset <= 20 && ("0.0" === o || "0" === o) || " " === i ? e.style.boxShadow = "none" : e.style.boxShadow = "0px 1px 3px rgba(0,0,0," + a + ")"
        })
    }
}
function t_menu__createMobileMenu(n, o) {
    var r, e, i, a, l, t, s, u, c = document.getElementById("rec" + n);
    c && (e = (r = c.querySelector(o)) ? r.getAttribute("data-mobile-burgerhook") : "",
        t = c.querySelector(o + "__mobile"),
        i = t || c.querySelector(".tmenu-mobile"),
        a = t ? o.slice(1) + "_opened" : "tmenu-mobile_opened",
        l = "t-menuburger-opened",
    i && (r && r.classList.contains(o.slice(1) + "__mobile_burgerhook") && e ? (i.querySelector(".tmenu-mobile__burger") ? u = i.querySelector(".tmenu-mobile__burger") : i.querySelector(".t-menuburger") && (u = i.querySelector(".t-menuburger")),
    u && (t = u.parentElement,
        (s = document.createElement("a")).href = e,
    t && (s.appendChild(u),
        t.appendChild(s)))) : (u = i.querySelector(".t-menuburger"),
        i.addEventListener("click", function(e) {
            e.target.closest("a") || (i.classList.contains(a) ? (t_menu__FadeOut(r, 300),
                i.classList.remove(a),
                u.classList.remove(l),
                u.setAttribute("aria-expanded", "false")) : (t_menu__fadeIn(r, 300, function() {
                r.style.transform && (r.style.transform = ""),
                r.style.opacity && (r.style.opacity = "")
            }),
                i.classList.add(a),
                u.classList.add(l),
                u.setAttribute("aria-expanded", "true"),
            r.classList.contains("tmenu-mobile__menucontent_fixed") && (e = getComputedStyle(i).height,
                r.style.top = e)),
                t_menu_checkOverflow(n, o))
        }))),
    screen.width < 980 && c.addEventListener("click", function(e) {
        var t;
        r && r.classList.contains("tmenu-mobile__menucontent_fixed") && ((t = e.target.closest(".t-menu__link-item, .t978__submenu-link, .t978__innermenu-link, .t966__menu-link, .t-menusub__link-item, .t-btn")) && (["t978__menu-link_hook", "t978__tm-link", "t966__tm-link", "t794__tm-link", "t-menusub__target-link"].some(function(e) {
            return t.classList.contains(e)
        }) ? r.addEventListener("menuOverflow", function() {
            t_menu_checkOverflow(n, o)
        }) : (t_menu__FadeOut(r, 300),
        i && i.classList.remove(a),
        i && u.classList.remove(l))))
    }),
        window.addEventListener("resize", t_throttle(function() {
            980 < window.innerWidth && (r && (r.style.opacity = ""),
            r && (r.style.display = ""),
            r && (r.style.top = ""),
            i && i.classList.remove(a)),
                t_menu_checkOverflow(n, o)
        }, 200)))
}
function t_menu_checkOverflow(e, t) {
    var n, o, e = document.getElementById("rec" + e), r = e ? e.querySelector(t) : null;
    !r || (t = e.querySelector(t + "__mobile") || e.querySelector(".tmenu-mobile")) && (e = t.offsetHeight,
        t = document.documentElement.clientHeight,
        n = r.style.position || window.getComputedStyle(r).position,
        o = r.offsetHeight,
    "fixed" === n && t - e < o && (r.style.overflow = "auto",
        r.style.maxHeight = "calc(100% - " + e + "px)"))
}
function t_menu__FadeOut(e, t, n) {
    if (!e)
        return !1;
    var o = 1
        , t = 0 < (t = parseInt(t, 10)) ? t / 10 : 40
        , r = setInterval(function() {
        e.style.opacity = o,
        (o -= .1) <= .1 && (e.style.opacity = "0",
            e.style.display = "none",
        "function" == typeof n && n(),
            clearInterval(r))
    }, t)
}
function t_menu__fadeIn(e, t, n) {
    if (!e)
        return !1;
    if (("1" === getComputedStyle(e).opacity || "" === getComputedStyle(e).opacity) && "none" !== getComputedStyle(e).display)
        return !1;
    var o = 0
        , t = 0 < (t = parseInt(t, 10)) ? t / 10 : 40
        , r = (e.style.opacity = o,
        e.style.display = "block",
        setInterval(function() {
            e.style.opacity = o,
            1 <= (o += .1) && (e.style.opacity = "1",
            "function" == typeof n && n(),
                clearInterval(r))
        }, t))
}
function t_menu__slideElement(e, t, n) {
    var o = "toTop" === n ? 0 : t
        , r = "toTop" === n ? 1 : 0
        , i = setInterval(function() {
        e.style.transform = "translateY(-" + o + "px)",
            e.style.opacity = r.toString(),
            r = "toTop" === n ? r - .1 : r + .1,
            o = "toTop" === n ? o + t / 20 : o - t / 20,
        "toTop" === n && t <= o && (e.style.transform = "translateY(-" + t + "px)",
            e.style.opacity = "0",
            clearInterval(i)),
        "toBottom" === n && o <= 0 && (e.style.transform = "translateY(0px)",
            e.style.opacity = "1",
            clearInterval(i))
    }, 10)
}
function t_menu__interactFromKeyboard(e) {
    var i, a, l, s, u, c, d, f, m, e = document.getElementById("rec" + e);
    e && (i = e.querySelectorAll(".t-menu__list > li > a"),
        e = e.querySelectorAll(".t-menu__list > li li"),
        a = 9,
        l = 13,
        s = 27,
        u = 32,
        c = 0,
        f = function(e) {
            e === i.length ? e = 0 : e < 0 && (e = i.length - 1),
                i[e].focus(),
                c = e
        }
        ,
        m = function(e, t) {
            e = e.querySelectorAll("a");
            t == e.length ? t = 0 : t < 0 && (t = e.length - 1),
                e[t].focus(),
                d = t
        }
        ,
        Array.prototype.forEach.call(i, function(e) {
            var n, o;
            e.addEventListener("focus", function() {
                d = 0
            }),
                e.addEventListener("keydown", function(e) {
                    var t = this.parentNode.querySelector(".t-menusub__list");
                    switch (e.keyCode) {
                        case a:
                            if (!e.shiftKey && c <= i.length - 2)
                                f(c + 1);
                            else {
                                if (!(e.shiftKey && 0 < c))
                                    return;
                                f(c - 1)
                            }
                            break;
                        case l:
                        case u:
                            if (!t)
                                return;
                            this.click(),
                                m(t, d = 0)
                    }
                    e.preventDefault()
                }),
            !e.parentNode.querySelector(".t-menusub__menu") || window.isMobile || "ontouchend"in document || (o = (n = e).parentNode.querySelector(".t-menusub__menu"),
                n.addEventListener("click", function(e) {
                    var t;
                    return "false" == this.getAttribute("aria-expanded") || null == this.getAttribute("aria-expanded") ? (this.setAttribute("aria-expanded", "true"),
                        t = (t = n.nextElementSibling) ? t.getAttribute("data-submenu-margin") : 0,
                        t_menusub__showSubmenu(n, o, t)) : this.setAttribute("aria-expanded", "false"),
                        e.preventDefault(),
                        !1
                }))
        }),
        Array.prototype.forEach.call(e, function(e) {
            var o, r;
            o = (e = e).closest(".t-menusub__menu"),
                r = !1,
                e.addEventListener("keydown", function(e) {
                    var t = this.parentNode;
                    switch (e.keyCode) {
                        case a:
                            r = !0;
                            var n = t.querySelectorAll(".t-menusub__link-item").length;
                            if (e.shiftKey)
                                0 === d ? (f(c),
                                    t_menusub__hideSubmenu(o)) : m(t, d - 1);
                            else if (d === n - 1) {
                                if (t_menusub__hideSubmenu(o),
                                c === i.length - 1)
                                    return;
                                f(c + 1)
                            } else
                                m(t, d + 1);
                            break;
                        case l:
                        case u:
                            r = !1,
                                t_menusub__hideSubmenu(o);
                            break;
                        case s:
                            r = !0,
                                f(c),
                                t_menusub__hideSubmenu(o)
                    }
                    r && (e.preventDefault(),
                        e.stopPropagation())
                })
        }))
}
function t_menu__isBlockVisible(e) {
    var t = window.innerWidth
        , n = e.getAttribute("data-screen-min")
        , e = e.getAttribute("data-screen-max");
    return !(n && t < parseInt(n, 10)) && !(e && t > parseInt(e, 10))
}
