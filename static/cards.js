function t_cards__moveClickOnCard(t) {
    t_card__moveClickOnCard(t)
}
function t_cards__addFocusOnTab(t) {
    t_card__addFocusOnTab(t)
}
function t_card__moveClickOnCard(t) {
    t = document.getElementById("rec" + t);
    !t || (t = t.querySelectorAll(".t-card__col")) && Array.prototype.forEach.call(t, function(t) {
        var c, e, a = t.querySelector(".t-card__link");
        a && (t.style.cursor = "pointer",
            t.addEventListener("mousedown", function() {
                c = Date.now()
            }),
            t.addEventListener("mouseup", function(t) {
                e = Date.now(),
                !t.target.closest(".t-card__link") && !t.target.closest(".t-card__link_second") && 1 === t.which && e - c < 200 && a.click()
            }))
    })
}
function t_card__addFocusOnTab(t) {
    var n;
    window.isMobile || (t = document.getElementById("rec" + t)) && (!t.querySelector(".t-card__container") || (t = document.querySelectorAll(".t-card__link, .t-card__link_second")) && (n = null,
        document.addEventListener("keydown", function() {
            n = "keyboard"
        }),
        document.addEventListener("mousedown", function() {
            n = "mouse"
        }),
        Array.prototype.forEach.call(t, function(c) {
            var e = c.closest(".t-card__col_withoutbtn")
                , a = c.closest(".t-card__col");
            c.addEventListener("focus", function() {
                var t;
                "keyboard" === n && (e && !c.classList.contains("t-card__link_second") ? e.classList.add("t-focusable") : a && !c.classList.contains("t-card__link_second") ? (t = a.querySelector(".t-card__btn") || a.querySelector(".t-card__btn-text"),
                    a.classList.add("t-card__col_btnfocusable"),
                t && t.classList.add("t-focusable")) : (c.classList.add("t-focusable"),
                a && a.classList.add("t-card__col_btnfocusable")),
                    n = null)
            }),
                c.addEventListener("blur", function() {
                    var t;
                    e && !c.classList.contains("t-card__link_second") ? e.classList.remove("t-focusable") : a && !c.classList.contains("t-card__link_second") ? (t = a.querySelector(".t-card__btn") || a.querySelector(".t-card__btn-text"),
                        a.classList.remove("t-card__col_btnfocusable"),
                    t && t.classList.remove("t-focusable")) : (c.classList.remove("t-focusable"),
                    a && a.classList.remove("t-card__col_btnfocusable"))
                })
        })))
}
