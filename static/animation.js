function t_animate__init() {
    t_animate__checkAnimationAvailability() && (t_animate__generateStyles(),
        t_animate__wrapTextWithOpacity(),
        t_animate__addNoHoverClassToBtns(),
        t_animate__preventHorizontalScroll(),
    window.innerWidth >= 1200 && t_animate__parseNumberText(),
        setTimeout((function() {
                t_animate__startAnimation()
            }
        ), 1500))
}
function t_animate__checkMobile(elems) {
    return Array.prototype.filter.call(elems, (function(elem) {
            var ZBParent = elem.closest(".t396__elem")
                , ZBAnimateMobile = ZBParent ? ZBParent.getAttribute("data-animate-mobile") : null;
            if (elem.classList.contains("r")) {
                var elems = elem.querySelectorAll(".t-animate");
                return Array.prototype.forEach.call(elems, (function(el) {
                        el.classList.remove("t-animate")
                    }
                )),
                    !1
            }
            return !!ZBAnimateMobile || (elem.classList.remove("t-animate"),
                !1)
        }
    ))
}
function t_animate__preventHorizontalScroll() {
    var allRec = document.querySelector(".t-records")
        , fadeInLeftEls = document.querySelectorAll("[data-animate-style=fadeinleft]");
    fadeInLeftEls = Array.prototype.filter.call(fadeInLeftEls, (function(el) {
            return !el.classList.contains("t396__elem")
        }
    )),
    allRec && fadeInLeftEls.length && (allRec.style.overflowX = "hidden")
}
function t_animate__checkAnimationAvailability() {
    var allRec = document.querySelector(".t-records")
        , animationOff = allRec ? allRec.getAttribute("data-blocks-animationoff") : null
        , editMode = allRec ? allRec.getAttribute("data-mode") : null;
    if (/Bot/i.test(navigator.userAgent) || "yes" === animationOff || t_animate__checkIE() || "edit" === editMode) {
        var animationList = document.querySelectorAll(".t-animate");
        return Array.prototype.forEach.call(animationList, (function(animation) {
                animation.classList.remove("t-animate")
            }
        )),
            !1
    }
    return !0
}
function t_animate__generateStyles() {
    var isZeroOnPage;
    if (!!document.querySelector(".t396")) {
        for (var breakpoints = t_animate__getBreakpointsArr(), styleStr = '.t396 .t-animate[data-animate-style="fadein"],.t396 .t-animate[data-animate-style="fadeinup"],.t396 .t-animate[data-animate-style="fadeindown"],.t396 .t-animate[data-animate-style="fadeinleft"],.t396 .t-animate[data-animate-style="fadeinright"],.t396 .t-animate[data-animate-style="zoomin"],.t396 .t-animate[data-animate-style="zoomout"] {opacity: 0;-webkit-transition-property: opacity, transform;transition-property: opacity, transform;-webkit-transition-duration: 1s;transition-duration: 1s;-webkit-transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);-webkit-backface-visibility: hidden;backface-visibility: hidden;}', index = 0; index < breakpoints.length; index++) {
            var mediaQuery;
            (mediaQuery = t_animate__getMediaQuery(breakpoints, index)).isContinue || (styleStr += mediaQuery.text + ".t396 .t-animate[data-animate-style-res-" + mediaQuery.minRes + '="fadein"],.t396 .t-animate[data-animate-style-res-' + mediaQuery.minRes + '="fadeinup"],.t396 .t-animate[data-animate-style-res-' + mediaQuery.minRes + '="fadeindown"],.t396 .t-animate[data-animate-style-res-' + mediaQuery.minRes + '="fadeinleft"],.t396 .t-animate[data-animate-style-res-' + mediaQuery.minRes + '="fadeinright"],.t396 .t-animate[data-animate-style-res-' + mediaQuery.minRes + '="zoomin"],.t396 .t-animate[data-animate-style-res-' + mediaQuery.minRes + '="zoomout"] {opacity: 0;-webkit-transition-property: opacity, transform;transition-property: opacity, transform;-webkit-transition-duration: 1s;transition-duration: 1s;-webkit-transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);-webkit-backface-visibility: hidden;backface-visibility: hidden;}}')
        }
        styleStr += '.t396 .t-title.t-animate {-webkit-transition-duration: 1.2s;transition-duration: 1.2s;}.t396 .t-descr.t-animate,.t396 .t-uptitle.t-animate,.t396 .t-subtitle.t-animate,.t396 .t-text.t-animate {-webkit-transition-duration: 0.7s;transition-duration: 0.7s;}.t396 .t-item.t-animate {-webkit-transition-duration: 0.5s;transition-duration: 0.5s;}.t396 .t-animate[data-animate-style="fadein"] {opacity: 0;transform: none;}';
        for (var index = 0; index < breakpoints.length; index++) {
            var mediaQuery;
            (mediaQuery = t_animate__getMediaQuery(breakpoints, index)).isContinue || (styleStr += mediaQuery.text + "#allrecords .t396 .t-animate[data-animate-style-res-" + mediaQuery.minRes + '="fadein"] {opacity: 0;transform: none;}}')
        }
        styleStr += '.t396 .t-animate_started[data-animate-style="fadein"] {opacity: 1;}';
        for (var index = 0; index < breakpoints.length; index++) {
            var mediaQuery;
            (mediaQuery = t_animate__getMediaQuery(breakpoints, index)).isContinue || (styleStr += mediaQuery.text + "#allrecords .t396 .t-animate_started[data-animate-style-res-" + mediaQuery.minRes + '="fadein"] {opacity: 1;}}')
        }
        styleStr += '.t396 .t-animate[data-animate-style="fadeinup"] {-webkit-transform: translate(0, 100px);transform: translate(0, 100px);}';
        for (var index = 0; index < breakpoints.length; index++) {
            var mediaQuery;
            (mediaQuery = t_animate__getMediaQuery(breakpoints, index)).isContinue || (styleStr += mediaQuery.text + "#allrecords .t396 .t-animate[data-animate-style-res-" + mediaQuery.minRes + '="fadeinup"] {-webkit-transform: translate(0, 100px);transform: translate(0, 100px);}}')
        }
        styleStr += '.t396 .t-animate_started[data-animate-style="fadeinup"] {opacity: 1;-webkit-transform: none;transform: none;}';
        for (var index = 0; index < breakpoints.length; index++) {
            var mediaQuery;
            (mediaQuery = t_animate__getMediaQuery(breakpoints, index)).isContinue || (styleStr += mediaQuery.text + "#allrecords .t396 .t-animate_started[data-animate-style-res-" + mediaQuery.minRes + '="fadeinup"] {opacity: 1;-webkit-transform: none;transform: none;}}')
        }
        styleStr += '.t396 .t-animate[data-animate-style="fadeindown"] {-webkit-transform: translate(0, -100px);transform: translate(0, -100px);}';
        for (var index = 0; index < breakpoints.length; index++) {
            var mediaQuery;
            (mediaQuery = t_animate__getMediaQuery(breakpoints, index)).isContinue || (styleStr += mediaQuery.text + "#allrecords .t396 .t-animate[data-animate-style-res-" + mediaQuery.minRes + '="fadeindown"] {-webkit-transform: translate(0, -100px);transform: translate(0, -100px);}}')
        }
        styleStr += '.t396 .t-animate_started[data-animate-style="fadeindown"] {opacity: 1;-webkit-transform: none;transform: none;}';
        for (var index = 0; index < breakpoints.length; index++) {
            var mediaQuery;
            (mediaQuery = t_animate__getMediaQuery(breakpoints, index)).isContinue || (styleStr += mediaQuery.text + "#allrecords .t396 .t-animate_started[data-animate-style-res-" + mediaQuery.minRes + '="fadeindown"] {opacity: 1;-webkit-transform: none;transform: none;}}')
        }
        styleStr += '.t396 .t-animate[data-animate-style="fadeinleft"] {-webkit-transform: translate(100px, 0);transform: translate(100px, 0);}';
        for (var index = 0; index < breakpoints.length; index++) {
            var mediaQuery;
            (mediaQuery = t_animate__getMediaQuery(breakpoints, index)).isContinue || (styleStr += mediaQuery.text + "#allrecords .t396 .t-animate[data-animate-style-res-" + mediaQuery.minRes + '="fadeinleft"] {-webkit-transform: translate(100px, 0);transform: translate(100px, 0);}}')
        }
        styleStr += '.t396 .t-animate_started[data-animate-style="fadeinleft"] {opacity: 1;-webkit-transform: none;transform: none;}';
        for (var index = 0; index < breakpoints.length; index++) {
            var mediaQuery;
            (mediaQuery = t_animate__getMediaQuery(breakpoints, index)).isContinue || (styleStr += mediaQuery.text + "#allrecords .t396 .t-animate_started[data-animate-style-res-" + mediaQuery.minRes + '="fadeinleft"] {opacity: 1;-webkit-transform: none;transform: none;}}')
        }
        styleStr += '.t396 .t-animate[data-animate-style="fadeinright"] {-webkit-transform: translate(-100px, 0);transform: translate(-100px, 0);}';
        for (var index = 0; index < breakpoints.length; index++) {
            var mediaQuery;
            (mediaQuery = t_animate__getMediaQuery(breakpoints, index)).isContinue || (styleStr += mediaQuery.text + "#allrecords .t396 .t-animate[data-animate-style-res-" + mediaQuery.minRes + '="fadeinright"] {-webkit-transform: translate(-100px, 0);transform: translate(-100px, 0);}}')
        }
        styleStr += '.t396 .t-animate_started[data-animate-style="fadeinright"] {opacity: 1;-webkit-transform: none;transform: none;}';
        for (var index = 0; index < breakpoints.length; index++) {
            var mediaQuery;
            (mediaQuery = t_animate__getMediaQuery(breakpoints, index)).isContinue || (styleStr += mediaQuery.text + "#allrecords .t396 .t-animate_started[data-animate-style-res-" + mediaQuery.minRes + '="fadeinright"] {opacity: 1;-webkit-transform: none;transform: none;}}')
        }
        styleStr += '.t396 .t-animate[data-animate-style="zoomin"] {-webkit-transform: scale(0.9);transform: scale(0.9);}';
        for (var index = 0; index < breakpoints.length; index++) {
            var mediaQuery;
            (mediaQuery = t_animate__getMediaQuery(breakpoints, index)).isContinue || (styleStr += mediaQuery.text + "#allrecords .t396 .t-animate[data-animate-style-res-" + mediaQuery.minRes + '="zoomin"] {-webkit-transform: scale(0.9);transform: scale(0.9);}}')
        }
        styleStr += '.t396 .t-animate_started[data-animate-style="zoomin"] {opacity: 1;-webkit-transform: scale(1);transform: scale(1);}';
        for (var index = 0; index < breakpoints.length; index++) {
            var mediaQuery;
            (mediaQuery = t_animate__getMediaQuery(breakpoints, index)).isContinue || (styleStr += mediaQuery.text + "#allrecords .t396 .t-animate_started[data-animate-style-res-" + mediaQuery.minRes + '="zoomin"] {opacity: 1;-webkit-transform: scale(1);transform: scale(1);}}')
        }
        styleStr += '.t396 .t-animate[data-animate-style="zoomout"] {-webkit-transform: scale(1.2);transform: scale(1.2);}';
        for (var index = 0; index < breakpoints.length; index++) {
            var mediaQuery;
            (mediaQuery = t_animate__getMediaQuery(breakpoints, index)).isContinue || (styleStr += mediaQuery.text + "#allrecords .t396 .t-animate[data-animate-style-res-" + mediaQuery.minRes + '="zoomout"] {-webkit-transform: scale(1.2);transform: scale(1.2);}}')
        }
        styleStr += '.t396 .t-animate_started[data-animate-style="zoomout"] {opacity: 1;-webkit-transform: scale(1);transform: scale(1);}';
        for (var index = 0; index < breakpoints.length; index++) {
            var mediaQuery;
            (mediaQuery = t_animate__getMediaQuery(breakpoints, index)).isContinue || (styleStr += mediaQuery.text + "#allrecords .t396 .t-animate_started[data-animate-style-res-" + mediaQuery.minRes + '="zoomout"] {opacity: 1;-webkit-transform: scale(1);transform: scale(1);}}')
        }
        styleStr += ".t396 .t-animate_started[data-animate-distance],.t396 .t-animate_started[data-animate-scale]{-webkit-transform: none !important;transform: none !important;}";
        for (var index = 0; index < breakpoints.length; index++) {
            var mediaQuery;
            (mediaQuery = t_animate__getMediaQuery(breakpoints, index)).isContinue || (styleStr += mediaQuery.text + "#allrecords .t396 .t-animate_started[data-animate-distance-res-" + mediaQuery.minRes + "],#allrecords .t396 .t-animate_started[data-animate-style-res-" + mediaQuery.minRes + '="zoomout"] {-webkit-transform: none !important;transform: none !important;}}')
        }
        var style = document.createElement("style")
            , head = document.head || document.querySelector("head");
        style.textContent = styleStr,
            head.appendChild(style)
    }
}
function t_animate__getBreakpointsArr() {
    var breakpoints = []
        , artBoards = Array.prototype.slice.call(document.querySelectorAll('.r[data-record-type="396"]:not(.t397__off):not(.t395__off):not(.t400__off) .t396__artboard'));
    return Array.prototype.forEach.call(artBoards, (function(artBoard) {
            if (artBoard.classList.contains("t396__artboard")) {
                var screens = artBoard.getAttribute("data-artboard-screens")
                    , difference = (screens = (screens = screens ? screens.split(",") : [1200, 960, 640, 480, 320]).map((function(screen) {
                        return parseInt(screen, 10)
                    }
                ))).filter((function(screen) {
                        return -1 === breakpoints.indexOf(screen)
                    }
                ));
                breakpoints = breakpoints.concat(difference)
            }
        }
    )),
        breakpoints = t_animate__sortArr(breakpoints)
}
function t_animate__getMediaQuery(breakpoints, index) {
    var text = ""
        , isContinue = !1
        , minRes = breakpoints[index + 1]
        , maxRes = breakpoints[index] - 1
        , lastBreakpoint = index === breakpoints.length - 1
        , preLastBreakpoint = index === breakpoints.length - 2;
    return lastBreakpoint ? isContinue = !0 : text += preLastBreakpoint ? "@media screen and (max-width: " + maxRes + "px) {" : "@media screen and (min-width: " + minRes + "px) and (max-width: " + maxRes + "px) {",
        {
            text: text,
            isContinue: isContinue,
            minRes: minRes
        }
}
function t_animate__sortArr(breakpoints) {
    return breakpoints.sort((function(a, b) {
            return b - a
        }
    ))
}
function t_animate__startAnimation() {
    var records = document.querySelectorAll(".r")
        , animGroupsBlocks = Array.prototype.filter.call(records, (function(record) {
            return record.querySelector(".t-animate[data-animate-group=yes]")
        }
    ))
        , animChainsBlocks = Array.prototype.filter.call(records, (function(record) {
            return record.querySelector('.t-animate[data-animate-chain="yes"]')
        }
    ))
        , animElems = document.querySelectorAll(".t-animate");
    if (animElems = Array.prototype.filter.call(animElems, (function(animEl) {
            return !("yes" === animEl.getAttribute("data-animate-group") || "yes" === animEl.getAttribute("data-animate-chain") || animEl.getAttribute("observer-ready"))
        }
    )),
    window.innerWidth < 1200 && (animGroupsBlocks = t_animate__checkMobile(animGroupsBlocks),
        animChainsBlocks = t_animate__checkMobile(animChainsBlocks),
        animElems = t_animate__checkMobile(animElems)),
    animGroupsBlocks.length || animElems.length || animChainsBlocks.length) {
        t_animate__setAnimationState(animGroupsBlocks, animChainsBlocks, animElems),
            animGroupsBlocks = t_animate__hasWaitAnimation(animGroupsBlocks),
            animElems = t_animate__hasWaitAnimation(animElems),
            animChainsBlocks = t_animate__hasWaitAnimation(animChainsBlocks);
        var isWebKit154 = "undefined" != typeof navigator && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)[4-9]/i.test(navigator.userAgent);
        if ("IntersectionObserver"in window && !isWebKit154) {
            if (animGroupsBlocks.length) {
                var firstElemInGroup = [];
                animGroupsBlocks.forEach((function(animGroup) {
                        var firstElem = animGroup.querySelector(".t-animate"), firstElemAttr, firstElemParent;
                        if ("fadeindown" === firstElem.getAttribute("data-animate-style") && firstElem.closest(".t-cover")) {
                            var nextElem = animGroup.querySelector(".t-animate:not(:first-child)");
                            nextElem && (firstElem = nextElem)
                        }
                        firstElemInGroup.push(firstElem)
                    }
                )),
                    firstElemInGroup.forEach((function(animElem) {
                            var options = {
                                rootMargin: animElem.offsetHeight / 5 * -1 + "px 0px"
                            }, animGroupsObserver;
                            new IntersectionObserver((function(entries, animGroupsObserver) {
                                    entries.forEach((function(entry) {
                                            if (entry.isIntersecting) {
                                                var target = entry.target;
                                                animGroupsObserver.unobserve(target);
                                                var currentBlockEls = target.closest(".r").querySelectorAll(".t-animate");
                                                currentBlockEls = Array.prototype.filter.call(currentBlockEls, (function(el) {
                                                        return !(el.classList.contains("t-animate__btn-wait-chain") || "yes" === el.getAttribute("data-animate-chain"))
                                                    }
                                                )),
                                                    t_animate__makeSectionButtonWait(target),
                                                    t_animate__saveSectionHeaderStartTime(target),
                                                    Array.prototype.forEach.call(currentBlockEls, (function(el) {
                                                            el.classList.remove("t-animate_wait"),
                                                                t_animate__removeNoHoverClassFromBtns(el),
                                                                el.classList.add("t-animate_started")
                                                        }
                                                    ))
                                            }
                                        }
                                    ))
                                }
                            ),options).observe(animElem)
                        }
                    ))
            }
            var getOffsets;
            if (animElems.length && animElems.forEach((function(animElem) {
                    var options = {}
                        , curElemTriggerOffset = t_animate__getAttrByResBase(animElem, "trigger-offset");
                    curElemTriggerOffset && (options.rootMargin = "0px 0px " + -1 * curElemTriggerOffset.replace("px", "") + "px 0px");
                    var animElemsObserver = new IntersectionObserver((function(entries, animElemsObserver) {
                            entries.forEach((function(entry) {
                                    var target = entry.target;
                                    if (!target.demandTransform && target.style.transform)
                                        target.demandTransform = target.style.transform,
                                            target.style.transform = "unset";
                                    else {
                                        var computedTransform = window.getComputedStyle(target).transform;
                                        target.style.transform || "none" === computedTransform || (target.demandTransform = computedTransform,
                                            target.style.transform = "unset")
                                    }
                                    if (entry.isIntersecting) {
                                        target.closest(".t1093") || animElemsObserver.unobserve(target);
                                        var delay = target.style.transitionDelay || "0ms";
                                        delay = -1 !== delay.indexOf("ms") ? parseInt(delay) + 250 : 1e3 * parseFloat(delay) + 250;
                                        var animateElems = function() {
                                            target.classList.remove("t-animate_wait"),
                                                t_animate__removeNoHoverClassFromBtns(target),
                                                target.classList.add("t-animate_started"),
                                            "animatednumber" === t_animate__getAttrByResBase(target, "style") && t_animate__animateNumbers(target)
                                        };
                                        target.demandTransform && -1 !== target.demandTransform.indexOf("matrix") && (target.style.transform = ""),
                                        target.demandTransform && "unset" === target.style.transform && (target.style.transform = target.demandTransform,
                                            delete target.demandTransform),
                                            setTimeout((function() {
                                                    animateElems()
                                                }
                                            ), delay)
                                    }
                                }
                            ))
                        }
                    ),options);
                    animElem.dataset.observerReady = !0,
                        animElemsObserver.observe(animElem)
                }
            )),
                animChainsBlocks.length)
                (getOffsets = function() {
                        t_animate__getChainOffsets(animChainsBlocks)
                    }
                )(),
                    window.addEventListener("resize", t_throttle((function() {
                            getOffsets()
                        }
                    ))),
                    setInterval(getOffsets, 5e3),
                    window.addEventListener("scroll", t_throttle((function() {
                            var viewTop, viewBottom = window.pageYOffset + window.innerHeight;
                            t_animate__animateChainsBlocks(animChainsBlocks, viewBottom)
                        }
                    )))
        } else {
            var getOffsets;
            (getOffsets = function() {
                    t_animate__getGroupsOffsets(animGroupsBlocks),
                        t_animate__getChainOffsets(animChainsBlocks),
                        t_animate__getElemsOffsets(animElems)
                }
            )(),
                window.addEventListener("resize", t_throttle(getOffsets)),
                setInterval(getOffsets, 5e3),
                window.addEventListener("scroll", t_throttle((function() {
                        var refreshedBlocks = t_animate__deleteAnimatedEls(animGroupsBlocks, animElems);
                        animElems = refreshedBlocks[0];
                        var animBlocks = t_animate__animateOnScroll(animGroupsBlocks = refreshedBlocks[1], animChainsBlocks, animElems);
                        animBlocks && animBlocks.length && (animGroupsBlocks = animBlocks[0],
                            animChainsBlocks = animBlocks[1],
                            animElems = animBlocks[2])
                    }
                )))
        }
        Array.prototype.forEach.call(records, (function(record) {
                var recordPopup = record.querySelector(".t-popup");
                recordPopup && recordPopup.addEventListener("scroll", t_throttle((function() {
                        var viewBottom = window.pageYOffset + window.innerHeight;
                        if (recordPopup.classList.contains("t-animate") && "yes" === recordPopup.getAttribute("data-animate-chain") || recordPopup.querySelector(".t-animate[data-animate-chain=yes]")) {
                            var popupAnimChainsBlocks = [recordPopup];
                            t_animate__setAnimationStateChains(popupAnimChainsBlocks),
                                t_animate__getChainOffsets(popupAnimChainsBlocks = Array.prototype.filter.call(popupAnimChainsBlocks, (function(el) {
                                        return el.querySelector(".t-animate_wait")
                                    }
                                ))),
                                t_animate__animateChainsBlocks(popupAnimChainsBlocks, viewBottom)
                        }
                    }
                )))
            }
        ))
    }
}
function t_animate__animateOnScroll(animGroupsBlocks, animChainsBlocks, animElems) {
    if (animGroupsBlocks.length || animChainsBlocks.length || animElems.length) {
        var viewTop = window.pageYOffset, viewBottom = viewTop + window.innerHeight, newAnimGroupsBlocks, newAnimChainsBlocks, newAnimElems;
        return [t_animate__animateGroups(animGroupsBlocks, viewBottom, viewTop), t_animate__animateChainsBlocks(animChainsBlocks, viewBottom, viewTop), t_animate__animateElems(animElems, viewBottom, viewTop)]
    }
}
function t_animate__animateGroups(animGroupsBlocks, viewBottom) {
    return animGroupsBlocks.forEach((function(currentBlock) {
            if (currentBlock.curTopOffset < viewBottom) {
                var currentBlockEls = currentBlock.querySelectorAll(".t-animate");
                currentBlockEls = Array.prototype.filter.call(currentBlockEls, (function(el) {
                        return !(el.classList.contains("t-animate__btn-wait-chain") || "yes" === el.getAttribute("data-animate-chain"))
                    }
                )),
                    t_animate__makeSectionButtonWait(currentBlock),
                    t_animate__saveSectionHeaderStartTime(currentBlock),
                    Array.prototype.forEach.call(currentBlockEls, (function(currentBlockEl) {
                            currentBlockEl.classList.remove("t-animate_wait"),
                                t_animate__removeNoHoverClassFromBtns(currentBlockEl),
                                currentBlockEl.classList.add("t-animate_started")
                        }
                    ))
            }
        }
    )),
        animGroupsBlocks
}
function t_animate__animateChainsBlocks(animChainsBlocks, viewBottom) {
    return animChainsBlocks.forEach((function(curBlock) {
            curBlock.itemsOffsets[0] < viewBottom && curBlock.querySelectorAll(".t-animate_wait").length && (t_animate__animateChainItemsOnScroll(curBlock, viewBottom),
            curBlock.itemsOffsets.length && t_animate__checkSectionButtonAnimation__outOfTurn(curBlock))
        }
    )),
        animChainsBlocks
}
function t_animate__animateElems(animElems, viewBottom, viewTop) {
    return Array.prototype.filter.call(animElems, (function(el) {
            var curElemTrigger = t_animate__detectElemTriggerOffset(el, viewBottom);
            return el.curTopOffset < curElemTrigger ? (el.classList.remove("t-animate_wait"),
                t_animate__removeNoHoverClassFromBtns(el),
                el.classList.add("t-animate_started"),
            "animatednumber" === t_animate__getAttrByResBase(el, "style") && t_animate__animateNumbers(el),
                !0) : !(el.curTopOffset < viewTop) && void 0
        }
    )),
        animElems
}
function t_animate__deleteAnimatedEls(animGroupsBlocks, animElems) {
    var viewTop = window.pageYOffset
        , newAnimGroupsBlocks = []
        , newAnimElems = [];
    return animGroupsBlocks.forEach((function(animGroupsBlock) {
            if (animGroupsBlock.curTopOffset <= viewTop) {
                var animateElList = animGroupsBlock.querySelectorAll(".t-animate");
                Array.prototype.forEach.call(animateElList, (function(animateEl) {
                        animateEl.classList.remove("t-animate"),
                            animateEl.classList.remove("t-animate_wait"),
                            animateEl.classList.remove("t-animate_no-hover")
                    }
                ))
            } else
                newAnimGroupsBlocks.push(animGroupsBlock)
        }
    )),
        animElems.forEach((function(animElem) {
                animElem.curTopOffset <= viewTop ? (animElem.classList.remove("t-animate"),
                    animElem.classList.remove("t-animate_no-hover"),
                    animElem.classList.add("t-animate_started"),
                    animElem.classList.remove("t-animate_wait")) : newAnimElems.push(animElem)
            }
        )),
        [newAnimElems, newAnimGroupsBlocks]
}
function t_animate__animateChainItemsOnScroll(curBlock, viewBottom) {
    var waitingChainItems = curBlock.querySelectorAll(".t-animate_wait[data-animate-chain=yes]");
    waitingChainItems = Array.prototype.slice.call(waitingChainItems);
    var itemOrder = 0
        , rowOrder = 0
        , rowOffset = curBlock.itemsOffsets[0]
        , chainDelay = .16
        , delayFromPrevScroll = t_animate__getDelayFromPreviousScrollEvent(curBlock, .16)
        , sectionHeadDelay = t_animate__getSectionHeadDealy(curBlock);
    waitingChainItems.length && waitingChainItems[0].classList.add("t-animate__chain_first-in-row");
    for (var s = 0; s < waitingChainItems.length; s++) {
        var item = waitingChainItems[s]
            , itemTopOffset = curBlock.itemsOffsets[s];
        if (!(itemTopOffset < viewBottom))
            break;
        itemTopOffset !== rowOffset && (item.classList.add("t-animate__chain_first-in-row"),
            itemOrder = ++rowOrder,
            rowOffset = itemTopOffset);
        var curItemDelay = .16 * itemOrder + delayFromPrevScroll + sectionHeadDelay;
        item.style.transitionDelay = curItemDelay + "s",
            item.classList.remove("t-animate_wait"),
            item.classList.add("t-animate_started"),
            item.setAttribute("data-animate-start-time", Date.now() + 1e3 * curItemDelay),
        item[0] === waitingChainItems[waitingChainItems.length - 1] && t_animate__checkSectionButtonAnimation(curBlock, curItemDelay),
        +itemTopOffset == +rowOffset && itemOrder++,
            waitingChainItems.splice(s, 1),
            curBlock.itemsOffsets.splice(s, 1),
            s--
    }
    t_animate__catchTransitionEndEvent(curBlock)
}
function t_animate__getSectionHeadDealy(curBlock) {
    var sectionTitle = curBlock.querySelector(".t-section__title.t-animate")
        , sectionDescr = curBlock.querySelector(".t-section__descr.t-animate")
        , sectionHeadDelay = 0;
    if (sectionTitle) {
        var titleStartTime = sectionTitle.getAttribute("data-animate-start-time") || 0;
        if (Date.now() - titleStartTime <= 160)
            return sectionHeadDelay = .16
    }
    if (sectionDescr) {
        var descrStartTime = sectionDescr.getAttribute("data-animate-start-time") || 0;
        if (Date.now() - descrStartTime <= 160)
            return sectionHeadDelay = .16
    }
    return sectionHeadDelay
}
function t_animate__getDelayFromPreviousScrollEvent(curBlock, chainDelay) {
    var isFirstRow = !curBlock.querySelectorAll(".t-animate_started").length
        , notAnimated = curBlock.querySelectorAll(".t-animate__chain_first-in-row.t-animate_started");
    if (notAnimated = Array.prototype.filter.call(notAnimated, (function(notAnim) {
            return !notAnim.classList.contains("t-animate__chain_showed")
        }
    )),
    isFirstRow || !notAnimated.length)
        return 0;
    if (notAnimated.length) {
        var lastNotAnimated, lastNotAnimatedStart, timeGap = (notAnimated[notAnimated.length - 1].getAttribute("data-animate-start-time") || 0) - Date.now();
        return timeGap <= 0 ? chainDelay : timeGap / 1e3 + chainDelay
    }
}
function t_animate__catchTransitionEndEvent(curBlock) {
    var animateChainList = curBlock.querySelectorAll(".t-animate__chain_first-in-row.t-animate_started");
    animateChainList = Array.prototype.filter.call(animateChainList, (function(animChain) {
            return !animChain.classList.contains("t-animate__chain_showed")
        }
    )),
        Array.prototype.forEach.call(animateChainList, (function(animateChain) {
                var events;
                ["transitionend", "webkitTransitionEnd", "oTransitionEnd", "otransitionend", "MSTransitionEnd"].forEach((function(event) {
                        animateChain.addEventListener(event, (function() {
                                t_animate__addEventOnAnimateChain(animateChain)
                            }
                        )),
                            animateChain.removeEventListener(event, (function() {
                                    t_animate__addEventOnAnimateChain(animateChain)
                                }
                            ))
                    }
                ))
            }
        ))
}
function t_animate__parseNumberText() {
    var viewTop = window.pageYOffset
        , animElemsNumber = document.querySelectorAll(".t-animate[data-animate-style='animatednumber']");
    Array.prototype.forEach.call(animElemsNumber, (function(curElem) {
            var text, style = "", spanList = curElem.querySelectorAll("span");
            if (Array.prototype.forEach.call(spanList, (function(span) {
                    style += span.getAttribute("style") || "",
                        span.removeAttribute("style"),
                        span.removeAttribute("data-redactor-style")
                }
            )),
                curElem.querySelectorAll('div[data-customstyle="yes"]').length) {
                var customStyleYes = curElem.querySelector('div[data-customstyle="yes"]');
                text = customStyleYes ? customStyleYes.innerHTML : "";
                var newStyle = curElem.getAttribute("style") || ""
                    , customStyleEl = curElem.querySelector("div[data-customstyle]")
                    , customStyleElStyle = customStyleEl ? customStyleEl.getAttribute("style") : "";
                customStyleElStyle && (newStyle += customStyleElStyle),
                    curElem.setAttribute("style", newStyle)
            } else
                text = curElem.innerHTML;
            if (style = style.split(";").filter((function(element, index) {
                    return style.split(";").indexOf(element) === index
                }
            )).join(";"),
            !(curElem.getBoundingClientRect().top + window.pageYOffset < viewTop - 500) && text.length) {
                var number = text.replace(/<br>/g, " ").replace(/[^\d., ]+/g, "").replace(/ (\.|,)/g, "").replace(/(\d)(?=\d) /g, "$1").trim()
                    , removeNumberSpace = number;
                if (-1 === text.indexOf(number) && (removeNumberSpace = number = number.split(" ")[0]),
                "" !== number) {
                    curElem.setAttribute("data-animate-number-count", text),
                        t_animate__changeNumberOnZero(curElem, text.replace(removeNumberSpace, "num"));
                    var notAnimatedNumbers = curElem.querySelectorAll("span");
                    notAnimatedNumbers = Array.prototype.filter.call(notAnimatedNumbers, (function(notAnimNumber) {
                            return !notAnimNumber.classList.contains(".t-animate__number")
                        }
                    )),
                        Array.prototype.forEach.call(notAnimatedNumbers, (function(notAnimatedNumber) {
                                notAnimatedNumber.setAttribute("style", style)
                            }
                        ))
                }
            }
        }
    ))
}
function t_animate__changeNumberOnZero(el, removeNumberSpace) {
    el.innerHTML = removeNumberSpace.replace(/num/g, '<span class="t-animate__number">0</span>')
}
function t_animate__animateNumbers(curElem) {
    if (!curElem)
        return !1;
    var text = curElem.getAttribute("data-animate-number-count")
        , style = []
        , notAnimatedNumbers = curElem.querySelectorAll("span");
    (notAnimatedNumbers = Array.prototype.filter.call(notAnimatedNumbers, (function(notAnimNumber) {
            return !notAnimNumber.classList.contains(".t-animate__number")
        }
    ))).length && (style = notAnimatedNumbers[0].getAttribute("style") || "");
    var number = []
        , numberDotOrComma = null;
    if (text) {
        numberDotOrComma = text.match(/\d+\.\d+|\d+,\d+/g);
        var numberWithSpace = text.match(/\d+/g), removeNumberSpace, numberWithoutLetter;
        text.replace(/(\d)(?= \d) /g, "$1").split(" ").forEach((function(item) {
                isNaN(parseInt(item.replace(/[^\d., ]+/g, ""), 10)) || number.push(item.replace(/[^\d., ]+/g, ""))
            }
        ))
    }
    var decimalLength = 0
        , isFloat = !1
        , isComma = !1;
    curElem.removeAttribute("data-animate-number-count"),
    null !== numberDotOrComma && (isComma = -1 !== numberDotOrComma[0].indexOf(",")),
        number.forEach((function(item, i) {
                var itemSplitArr;
                null !== numberDotOrComma && (-1 !== item.indexOf(",") && (itemSplitArr = item.split(",")),
                -1 !== item.indexOf(".") && (itemSplitArr = item.split(".")),
                -1 === item.indexOf(",") && -1 === item.indexOf(".") || (decimalLength = itemSplitArr[1].length,
                    number[i] = +itemSplitArr.join("."),
                    isFloat = !0))
            }
        ));
    var animatedNumber = curElem.querySelector(".t-animate__number");
    if (number[0]) {
        var maxNum = Number(number[0]) || 0
            , startNum = 0
            , round = Math.pow(10, decimalLength);
        isFloat && (maxNum *= round,
            startNum *= round);
        var timer = 12
            , animationStep = 0
            , interval = setInterval((function() {
                if (startNum += maxNum / 108,
                    animationStep = isFloat ? (Math.round(startNum) / round).toFixed(decimalLength) + "" : Math.floor(startNum) + "",
                numberWithSpace.length > 1 && (animationStep = animationStep.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ")),
                isComma && (animationStep = animationStep.replace(/\./g, ",")),
                animatedNumber && (animatedNumber.textContent = animationStep),
                startNum >= maxNum) {
                    clearInterval(interval),
                        curElem.innerHTML = text;
                    var curElSpan = curElem.querySelectorAll("span");
                    Array.prototype.forEach.call(curElSpan, (function(span) {
                            span.setAttribute("style", style)
                        }
                    ))
                }
            }
        ), 12)
    }
}
function t_animate__setAnimationState(animGroupsBlocks, animChainsBlocks, animElems) {
    var viewTop = window.pageYOffset
        , viewBottom = viewTop + window.innerHeight;
    t_animate__setGroupsBlocksState(animGroupsBlocks, viewTop, viewBottom),
        animChainsBlocks.forEach((function(curBlock) {
                t_animate__assignChainDelay(curBlock, viewBottom, viewTop),
                    t_animate__checkSectionButtonAnimation__outOfTurn(curBlock)
            }
        )),
        t_animate__setAnimELemsState(animElems, viewTop, viewBottom),
        window.addEventListener("resize", t_throttle(t_animate__removeInlineAnimStyles))
}
function t_animate__setAnimELemsState(animElems, viewTop, viewBottom) {
    animElems.forEach((function(curElem) {
            var curElemOffsetTop = curElem.getBoundingClientRect().top + window.pageYOffset;
            if (curElemOffsetTop < viewTop - 500)
                return curElem.classList.remove("t-animate"),
                    curElem.classList.remove("t-animate_no-hover"),
                "animatednumber" === t_animate__getAttrByResBase(curElem, "style") && t_animate__animateNumbers(curElem),
                    !0;
            var curElemTrigger = t_animate__detectElemTriggerOffset(curElem, viewBottom);
            t_animate__setCustomAnimSettings(curElem, curElemOffsetTop, viewBottom),
            curElemOffsetTop < curElemTrigger && !curElem.closest(".t1093") && (t_animate__removeNoHoverClassFromBtns(curElem),
                curElem.classList.add("t-animate_started"),
            "animatednumber" === t_animate__getAttrByResBase(curElem, "style") && t_animate__animateNumbers(curElem)),
            (curElemOffsetTop >= curElemTrigger || curElem.closest(".t1093")) && curElem.classList.add("t-animate_wait")
        }
    ))
}
function t_animate__setGroupsBlocksState(animGroupsBlocks, viewTop, viewBottom) {
    animGroupsBlocks.forEach((function(curBlock) {
            var curBlockAnimElems = curBlock.querySelectorAll(".t-animate");
            curBlockAnimElems = Array.prototype.filter.call(curBlockAnimElems, (function(animEl) {
                    return !("yes" === animEl.getAttribute("data-animate-chain"))
                }
            ));
            var curBlockOffset = curBlock.getBoundingClientRect().top + window.pageYOffset;
            t_animate__removeAnimFromHiddenSlides(curBlock);
            var sectionHeadDelay = t_animate__assignSectionDelay(curBlock);
            t_animate__assignGroupDelay(curBlock, sectionHeadDelay),
                Array.prototype.forEach.call(curBlockAnimElems, (function(el) {
                        var parentIsHidden = el.closest(".t397__off") || el.closest(".t395__off") || el.closest(".t400__off");
                        if (el.classList.contains("t-animate_no-hover") && parentIsHidden && el.classList.remove("t-animate_no-hover"),
                        curBlockOffset <= viewTop - 100)
                            return t_animate__saveSectionHeaderStartTime(curBlock),
                                el.classList.remove("t-animate"),
                                el.classList.remove("t-animate_no-hover"),
                                el.style.transitionDelay = "",
                                !0;
                        curBlockOffset < viewBottom && curBlockOffset > viewTop - 100 && (t_animate__makeSectionButtonWait(curBlock),
                        el.classList.contains(".t-animate__btn-wait-chain") || (t_animate__removeNoHoverClassFromBtns(el),
                            parentIsHidden ? el.classList.add("t-animate_wait") : el.classList.add("t-animate_started"))),
                        curBlockOffset >= viewBottom && el.classList.add("t-animate_wait")
                    }
                ))
        }
    ))
}
function t_animate__setAnimationStateChains(animChainsBlocks) {
    if (!animChainsBlocks || !animChainsBlocks.length)
        return !1;
    var viewTop = window.pageYOffset
        , viewBottom = viewTop + window.innerHeight;
    Array.prototype.forEach.call(animChainsBlocks, (function(curBlock) {
            t_animate__assignChainDelay(curBlock, viewBottom, viewTop),
                t_animate__checkSectionButtonAnimation__outOfTurn(curBlock)
        }
    ))
}
function t_animate__assignSectionDelay(curBlock) {
    var sectionHeadDelay = 0
        , sectionTitle = curBlock.querySelectorAll(".t-section__title.t-animate")
        , sectionDescr = curBlock.querySelectorAll(".t-section__descr.t-animate");
    return sectionTitle.length && (sectionHeadDelay = .16),
    sectionDescr.length && (Array.prototype.forEach.call(sectionDescr, (function(descr) {
            descr.style.transitionDelay = sectionHeadDelay + "s"
        }
    )),
        sectionHeadDelay += .16),
        sectionHeadDelay
}
function t_animate__assignGroupDelay(curBlock, sectionHeadDelay) {
    var animDelay = 0;
    if (curBlock.querySelectorAll("[data-animate-order]").length)
        t_animate__assignOrderedElemsDelay(curBlock, sectionHeadDelay);
    else {
        var elemImg = curBlock.querySelectorAll(".t-img.t-animate")
            , elemSubtitle = curBlock.querySelectorAll(".t-uptitle.t-animate")
            , elemTitle = curBlock.querySelectorAll(".t-title.t-animate");
        elemTitle = Array.prototype.filter.call(elemTitle, (function(title) {
                return !title.classList.contains("t-section__title")
            }
        ));
        var elemDescr = curBlock.querySelectorAll(".t-descr.t-animate");
        elemDescr = Array.prototype.filter.call(elemDescr, (function(descr) {
                return !descr.classList.contains("t-section__descr")
            }
        ));
        var elemBtn = curBlock.querySelectorAll(".t-btn.t-animate, .t-btnwrapper.t-animate");
        elemBtn = Array.prototype.filter.call(elemBtn, (function(descr) {
                return !descr.closest(".t-section__bottomwrapper")
            }
        ));
        var elemTimer = curBlock.querySelectorAll(".t-timer.t-animate")
            , elemForm = curBlock.querySelectorAll("form.t-animate");
        elemImg.length && (animDelay = .5),
        elemTitle.length && Array.prototype.forEach.call(elemTitle, (function(title) {
                title.style.transitionDelay = animDelay + "s"
            }
        )),
        elemTitle.length && (animDelay += .3),
        elemDescr.length && Array.prototype.forEach.call(elemDescr, (function(descr) {
                descr.style.transitionDelay = animDelay + "s"
            }
        )),
        elemDescr.length && (animDelay += .3),
        elemSubtitle.length && Array.prototype.forEach.call(elemSubtitle, (function(subTitle) {
                subTitle.style.transitionDelay = animDelay + "s"
            }
        )),
        elemSubtitle.length && (animDelay += .3),
        (elemSubtitle.length || elemTitle.length || elemDescr.length) && (animDelay += .2),
        elemTimer.length && Array.prototype.forEach.call(elemTimer, (function(timer) {
                timer.style.transitionDelay = animDelay + "s"
            }
        )),
        elemTimer.length && (animDelay += .5),
        elemBtn.length && (elemBtn[0].style.transitionDelay = animDelay + "s"),
        2 === elemBtn.length && (animDelay += .4),
        2 === elemBtn.length && (elemBtn[1].style.transitionDelay = animDelay + "s"),
        0 !== elemForm.length && Array.prototype.forEach.call(elemForm, (function(form) {
                form.style.transitionDelay = animDelay + "s"
            }
        ))
    }
}
function t_animate__assignOrderedElemsDelay(curBlock, sectionHeadDelay) {
    var animDelay = 0;
    sectionHeadDelay && (animDelay = sectionHeadDelay);
    var elem1 = curBlock.querySelectorAll('.t-animate[data-animate-order="1"]')
        , elem2 = curBlock.querySelectorAll('.t-animate[data-animate-order="2"]')
        , elem3 = curBlock.querySelectorAll('.t-animate[data-animate-order="3"]')
        , elem4 = curBlock.querySelectorAll('.t-animate[data-animate-order="4"]')
        , elem5 = curBlock.querySelectorAll('.t-animate[data-animate-order="5"]')
        , elem6 = curBlock.querySelectorAll('.t-animate[data-animate-order="6"]')
        , elem7 = curBlock.querySelectorAll('.t-animate[data-animate-order="7"]')
        , elem8 = curBlock.querySelectorAll('.t-animate[data-animate-order="8"]')
        , elem9 = curBlock.querySelectorAll('.t-animate[data-animate-order="9"]');
    elem1.length && Array.prototype.forEach.call(elem1, (function(el) {
            el.style.transitionDelay = animDelay + "s"
        }
    )),
    elem1.length && elem2.length && (animDelay += 1 * t_animate__getAttrByResBase(elem2[0], "delay"),
        Array.prototype.forEach.call(elem2, (function(el) {
                el.style.transitionDelay = animDelay + "s"
            }
        ))),
    (elem1.length || elem2.length) && elem3.length && (animDelay += 1 * t_animate__getAttrByResBase(elem3[0], "delay"),
        Array.prototype.forEach.call(elem3, (function(el) {
                el.style.transitionDelay = animDelay + "s"
            }
        ))),
    (elem1.length || elem2.length || elem3.length) && elem4.length && (animDelay += 1 * t_animate__getAttrByResBase(elem4[0], "delay"),
        Array.prototype.forEach.call(elem4, (function(el) {
                el.style.transitionDelay = animDelay + "s"
            }
        ))),
    (elem1.length || elem2.length || elem3.length || elem4.length) && elem5.length && (animDelay += 1 * t_animate__getAttrByResBase(elem5[0], "delay"),
        Array.prototype.forEach.call(elem5, (function(el) {
                el.style.transitionDelay = animDelay + "s"
            }
        ))),
    (elem1.length || elem2.length || elem3.length || elem4.length || elem5.length) && elem6.length && (animDelay += 1 * t_animate__getAttrByResBase(elem6[0], "delay"),
        Array.prototype.forEach.call(elem6, (function(el) {
                el.style.transitionDelay = animDelay + "s"
            }
        ))),
    (elem1.length || elem2.length || elem3.length || elem4.length || elem5.length || elem6.length) && elem7.length && (animDelay += 1 * t_animate__getAttrByResBase(elem7[0], "delay"),
        Array.prototype.forEach.call(elem7, (function(el) {
                el.style.transitionDelay = animDelay + "s"
            }
        ))),
    (elem1.length || elem2.length || elem3.length || elem4.length || elem5.length || elem6.length || elem7.length) && elem8.length && (animDelay += 1 * t_animate__getAttrByResBase(elem8[0], "delay"),
        Array.prototype.forEach.call(elem8, (function(el) {
                el.style.transitionDelay = animDelay + "s"
            }
        ))),
    (elem1.length || elem2.length || elem3.length || elem4.length || elem5.length || elem6.length || elem7.length || elem8.length) && elem9.length && (animDelay += 1 * t_animate__getAttrByResBase(elem9[0], "delay"),
        Array.prototype.forEach.call(elem9, (function(el) {
                el.style.transitionDelay = animDelay + "s"
            }
        )))
}
function t_animate__assignChainDelay(curBlock, viewBottom, viewTop) {
    var chain = curBlock.querySelectorAll(".t-animate[data-animate-chain=yes]")
        , itemOrder = 0;
    if (chain.length) {
        var chainEl = chain[0]
            , rowOffset = chainEl.getBoundingClientRect().top + window.pageYOffset;
        chainEl.classList.add("t-animate__chain_first-in-row");
        var sectionHeadDelay = t_animate__getCurBlockSectionHeadDelay(curBlock);
        Array.prototype.forEach.call(chain, (function(curItem) {
                var curItemOffset = curItem.getBoundingClientRect().top + window.pageYOffset;
                if (curItemOffset < viewTop)
                    return curItem.classList.remove("t-animate"),
                        !0;
                if (curItemOffset < viewBottom) {
                    curItemOffset !== rowOffset && (curItem.classList.add("t-animate__chain_first-in-row"),
                        rowOffset = curItemOffset);
                    var curItemDelay = .16 * itemOrder + sectionHeadDelay, events;
                    curItem.style.transitionDelay = curItemDelay + "s",
                        curItem.classList.add("t-animate_started"),
                        curItem.setAttribute("data-animate-start-time", Date.now() + 1e3 * curItemDelay),
                    chainEl === chain[chain.length - 1] && t_animate__checkSectionButtonAnimation(curBlock, curItemDelay),
                        itemOrder++,
                        ["transitionend", "webkitTransitionEnd", "oTransitionEnd", "otransitionend", "MSTransitionEnd"].forEach((function(event) {
                                curItem.addEventListener(event, (function() {
                                        t_animate__addEventOnAnimateChain(curItem)
                                    }
                                )),
                                    curItem.removeEventListener(event, (function() {
                                            t_animate__addEventOnAnimateChain(curItem)
                                        }
                                    ))
                            }
                        ))
                } else
                    curItem.classList.add("t-animate_wait")
            }
        ))
    }
}
function t_animate__getAttrByResBase(el, prop) {
    var dataField, artBoard = el.closest(".t396__artboard");
    if (!artBoard)
        return el.getAttribute("data-animate-" + prop);
    var recid, artBoardId = "ab" + artBoard.getAttribute("data-artboard-recid"), curRes, curResMax, breakpoints;
    void 0 !== window.tn[artBoardId] ? (curRes = window.tn[artBoardId].curResolution,
        curResMax = window.tn[artBoardId].curResolution_max,
        breakpoints = window.tn[artBoardId].screens.slice()) : (curRes = window.tn.curResolution,
        curResMax = 1200,
        breakpoints = [320, 480, 640, 960, 1200]);
    var elemParent = el.closest(".t396__elem")
        , animateMob = elemParent ? elemParent.getAttribute("data-animate-mobile") : null;
    if (curRes === curResMax)
        dataField = el.getAttribute("data-animate-" + prop);
    else {
        if ("y" !== animateMob && curRes < 1200)
            return el.style.transition = "none",
                null;
        dataField = el.getAttribute("data-animate-" + prop + "-res-" + curRes)
    }
    if (!dataField && "" !== dataField)
        for (var i = 0; i < breakpoints.length; i++) {
            var breakpoint = breakpoints[i];
            if (!(breakpoint <= curRes) && (dataField = breakpoint === curResMax ? el.getAttribute("data-animate-" + prop) : el.getAttribute("data-animate-" + prop + "-res-" + breakpoint)))
                break
        }
    return dataField
}
function t_animate__hasWaitAnimation(elementsArray) {
    return elementsArray.filter((function(el) {
            return el.classList.contains("t-animate_wait") || el.querySelector(".t-animate_wait")
        }
    ))
}
function t_animate__addEventOnAnimateChain(el) {
    el.classList.add("t-animate__chain_showed")
}
function t_animate__setCustomAnimSettings(curElem, curElemOffsetTop, viewBottom) {
    var curElemStyle = t_animate__getAttrByResBase(curElem, "style")
        , curElemDistance = t_animate__getAttrByResBase(curElem, "distance");
    if (curElemDistance && "" !== curElemDistance) {
        switch (curElemDistance = curElemDistance.replace("px", ""),
            curElem.style.transitionDuration = "0s",
            curElem.style.transitionDelay = "0s",
            curElemStyle) {
            case "fadeinup":
                curElem.style.transform = "translate3d(0," + curElemDistance + "px,0)";
                break;
            case "fadeindown":
                curElem.style.transform = "translate3d(0,-" + curElemDistance + "px,0)";
                break;
            case "fadeinleft":
                curElem.style.transform = "translate3d(" + curElemDistance + "px,0,0)";
                break;
            case "fadeinright":
                curElem.style.transform = "translate3d(-" + curElemDistance + "px,0,0)"
        }
        t_animate__forceElemInViewPortRepaint(curElem, curElemOffsetTop, viewBottom),
            curElem.style.transitionDuration = "",
            curElem.style.transitionDelay = ""
    }
    var curElemScale = t_animate__getAttrByResBase(curElem, "scale");
    curElemScale && (curElem.style.transitionDuration = "0s",
        curElem.style.transitionDelay = "0s",
        curElem.style.transform = "scale(" + curElemScale + ")",
        t_animate__forceElemInViewPortRepaint(curElem, curElemOffsetTop, viewBottom),
        curElem.style.transitionDuration = "",
        curElem.style.transitionDelay = "");
    var curElemDelay = t_animate__getAttrByResBase(curElem, "delay");
    curElemDelay && (curElem.style.transitionDelay = curElemDelay + "s");
    var curElemDuration = t_animate__getAttrByResBase(curElem, "duration");
    curElemDuration && (curElem.style.transitionDuration = curElemDuration + "s")
}
function t_animate__removeInlineAnimStyles() {
    if (window.innerWidth < 980) {
        var animatedElements = document.querySelectorAll(".t396__elem.t-animate:not(.t-animate_wait)");
        Array.prototype.forEach.call(animatedElements, (function(animatedElement) {
                animatedElement.style.transform = "",
                    animatedElement.style.transitionDuration = "",
                    animatedElement.style.transitionDelay = ""
            }
        ))
    }
}
function t_animate__forceElemInViewPortRepaint(curElem, curElemOffsetTop, viewBottom) {
    curElem && curElemOffsetTop < viewBottom + 500 && curElem.offsetHeight
}
function t_animate__detectElemTriggerOffset(curElem, viewBottom) {
    var curElemTriggerOffset = t_animate__getAttrByResBase(curElem, "trigger-offset")
        , curElemTrigger = viewBottom;
    return curElemTriggerOffset && (curElemTrigger = viewBottom - 1 * (curElemTriggerOffset = curElemTriggerOffset.replace("px", ""))),
        curElemTrigger
}
function t_animate__saveSectionHeaderStartTime(curBlock) {
    var sectionTitle = curBlock.querySelectorAll(".t-section__title.t-animate")
        , sectionDescr = curBlock.querySelectorAll(".t-section__descr.t-animate");
    sectionTitle.length && Array.prototype.forEach.call(sectionTitle, (function(title) {
            title.setAttribute("data-animate-start-time", Date.now())
        }
    )),
    sectionDescr.length && Array.prototype.forEach.call(sectionDescr, (function(descr) {
            descr.setAttribute("data-animate-start-time", Date.now() + 160)
        }
    ))
}
function t_animate__getCurBlockSectionHeadDelay(curBlock) {
    var sectionHeadDelay = 0;
    return curBlock.querySelectorAll(".t-section__title.t-animate").length && (sectionHeadDelay += .16),
    curBlock.querySelectorAll(".t-section__descr.t-animate").length && (sectionHeadDelay += .16),
        sectionHeadDelay
}
function t_animate__makeSectionButtonWait(curBlock) {
    var chainLength = curBlock.querySelectorAll(".t-animate[data-animate-chain=yes]").length
        , sectionBtn = curBlock.querySelectorAll(".t-section__bottomwrapper .t-btn.t-animate");
    chainLength.length && sectionBtn.length && Array.prototype.forEach.call(sectionBtn, (function(btn) {
            btn.classList.add("t-animate__btn-wait-chain")
        }
    ))
}
function t_animate__checkSectionButtonAnimation(curBlock, curItemDelay) {
    var chainBtn = curBlock.querySelectorAll(".t-animate__btn-wait-chain");
    chainBtn.length && Array.prototype.forEach.call(chainBtn, (function(btn) {
            btn.style.transitionDelay = curItemDelay + .16 + "s",
                t_animate__removeNoHoverClassFromBtns(btn),
                btn.classList.remove("t-animate__btn-wait-chain"),
                btn.classList.add("t-animate_started")
        }
    ))
}
function t_animate__checkSectionButtonAnimation__outOfTurn(curBlock) {
    var waitingChainItems = curBlock.querySelectorAll(".t-animate[data-animate-chain=yes]");
    if (!(waitingChainItems = Array.prototype.filter.call(waitingChainItems, (function(chain) {
            return !chain.classList.contains("t-animate_started")
        }
    ))).length) {
        var chainDelay = .16;
        t_animate__checkSectionButtonAnimation(curBlock, .16)
    }
}
function t_animate__addNoHoverClassToBtns() {
    var animatedBtns = document.querySelectorAll(".t-btn.t-animate");
    Array.prototype.forEach.call(animatedBtns, (function(btn) {
            btn.classList.add("t-animate_no-hover")
        }
    ))
}
function t_animate__removeNoHoverClassFromBtns(curBlockAnimElem) {
    if (!curBlockAnimElem)
        return !1;
    var currentBtn = curBlockAnimElem.classList.contains("t-btn") ? curBlockAnimElem : null;
    currentBtn && (currentBtn.ontransitionend = function(e) {
            "opacity" !== e.propertyName && "transform" !== e.propertyName || (currentBtn.classList.remove("t-animate_no-hover"),
                currentBtn.style.transitionDelay = "",
                currentBtn.style.transitionDuration = "",
                this.ontransitionend = null)
        }
    )
}
function t_animate__getGroupsOffsets(animGroupsBlocks) {
    animGroupsBlocks.forEach((function(animGroupsBlock) {
            var animatedChild = animGroupsBlock.querySelector(".t-animate");
            if (animatedChild) {
                animGroupsBlock.curTopOffset = animatedChild.getBoundingClientRect().top + window.pageYOffset;
                var zoom = t_animation__getZoom(animGroupsBlock);
                window.t_animation__isOnlyScalable || (animGroupsBlock.curTopOffset *= zoom)
            }
        }
    ))
}
function t_animation__getZoom(el) {
    var artboard = el.closest(".t396__artboard");
    if (!artboard)
        return 1;
    var isOldPage = document.querySelector('script[src*="blocks-2.7"]');
    return artboard.classList.contains("t396__artboard_scale") || !isOldPage && "undefined" != typeof t396_ab__getFieldValue && "window" === t396_ab__getFieldValue(artboard, "upscale") ? window.tn_scale_factor : 1
}
function t_animate__getChainOffsets(animChainsBlocks) {
    animChainsBlocks.forEach((function(animChainsBlock) {
            var currentChain = animChainsBlock.querySelectorAll(".t-animate_wait[data-animate-chain=yes]");
            animChainsBlock.itemsOffsets = [],
                Array.prototype.forEach.call(currentChain, (function(curChain, index) {
                        animChainsBlock.itemsOffsets[index] = curChain.getBoundingClientRect().top + window.pageYOffset
                    }
                ))
        }
    ))
}
function t_animate__getElemsOffsets(animElems) {
    animElems.forEach((function(animElem) {
            animElem.curTopOffset = window.pageYOffset + animElem.getBoundingClientRect().top;
            var zoom = t_animation__getZoom(animElem);
            window.t_animation__isOnlyScalable || (animElem.curTopOffset *= zoom)
        }
    ))
}
function t_animate__removeAnimFromHiddenSlides(curBlock) {
    var slides;
    if (curBlock.querySelectorAll(".t-slides").length) {
        var slidesItems = curBlock.querySelectorAll(".t-slides__item");
        slidesItems = Array.prototype.filter.call(slidesItems, (function(slide) {
                return !slide.classList.contains("t-slides__item_active")
            }
        ));
        var hiddenSlides = [];
        slidesItems.forEach((function(slide) {
                var animateEl = slide.querySelector(".t-animate");
                animateEl && hiddenSlides.push(animateEl)
            }
        )),
            hiddenSlides.forEach((function(hiddenSlide) {
                    hiddenSlide.classList.remove("t-animate"),
                        hiddenSlide.classList.remove("t-animate_no-hover")
                }
            ))
    }
}
function t_animate__wrapTextWithOpacity() {
    var textElements = document.querySelectorAll(".t-title.t-animate, .t-descr.t-animate, .t-uptitle.t-animate, .t-text.t-animate");
    Array.prototype.forEach.call(textElements, (function(el) {
            var style = el.getAttribute("style");
            if (style && -1 !== style.indexOf("opacity")) {
                var opacity = el.style.opacity;
                if (opacity && opacity > 0) {
                    el.style.opacity = "";
                    var div = document.createElement("div");
                    div.style.opacity = opacity;
                    var children = el.childNodes;
                    Array.prototype.forEach.call(children, (function(child) {
                            var clonedChild = child.cloneNode(!0);
                            div.appendChild(clonedChild)
                        }
                    )),
                        el.innerHTML = "",
                        el.appendChild(div)
                }
            }
        }
    ))
}
function t_animate__checkIE() {
    var sAgent = window.navigator.userAgent
        , Idx = sAgent.indexOf("MSIE")
        , ieVersion = ""
        , oldIE = !1;
    return Idx > 0 && (8 !== (ieVersion = parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)))) && 9 !== ieVersion || (oldIE = !0)),
        oldIE
}
window.t_animation__isOnlyScalable = Boolean(-1 !== navigator.userAgent.search("Firefox") || Boolean(window.opr && window.opr.addons || window.opera || -1 !== navigator.userAgent.indexOf(" OPR/"))),
    "loading" !== document.readyState ? t_animate__init() : document.addEventListener("DOMContentLoaded", t_animate__init);
