window.isMobile = !1;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    window.isMobile = !0
}
function t_throttle(fn, threshhold, scope) {
    var last;
    var deferTimer;
    threshhold || (threshhold = 250);
    return function() {
        var context = scope || this;
        var now = +new Date();
        var args = arguments;
        if (last && now < last + threshhold) {
            clearTimeout(deferTimer);
            deferTimer = setTimeout(function() {
                last = now;
                fn.apply(context, args)
            }, threshhold)
        } else {
            last = now;
            fn.apply(context, args)
        }
    }
}
function t228__init(recid) {
    var rec = document.getElementById('rec' + recid);
    if (!rec)
        return;
    var menuBlock = rec.querySelector('.t228');
    var mobileMenu = rec.querySelector('.t228__mobile');
    var menuSubLinkItems = rec.querySelectorAll('.t-menusub__link-item');
    var rightBtn = rec.querySelector('.t228__right_buttons_but .t-btn');
    var mobileMenuPosition = mobileMenu ? mobileMenu.style.position || window.getComputedStyle(mobileMenu).position : '';
    var mobileMenuDisplay = mobileMenu ? mobileMenu.style.display || window.getComputedStyle(mobileMenu).display : '';
    var isFixedMobileMenu = mobileMenuPosition === 'fixed' && mobileMenuDisplay === 'block';
    var overflowEvent = document.createEvent('Event');
    var noOverflowEvent = document.createEvent('Event');
    overflowEvent.initEvent('t228_overflow', !0, !0);
    noOverflowEvent.initEvent('t228_nooverflow', !0, !0);
    if (menuBlock) {
        menuBlock.addEventListener('t228_overflow', function() {
            t228_checkOverflow(recid)
        });
        menuBlock.addEventListener('t228_nooverflow', function() {
            t228_checkNoOverflow(recid)
        })
    }
    rec.addEventListener('click', function(e) {
        var targetLink = e.target.closest('.t-menusub__target-link');
        if (targetLink && window.isMobile) {
            if (targetLink.classList.contains('t-menusub__target-link_active')) {
                if (menuBlock)
                    menuBlock.dispatchEvent(overflowEvent)
            } else {
                if (menuBlock)
                    menuBlock.dispatchEvent(noOverflowEvent)
            }
        }
        var currentLink = e.target.closest('.t-menu__link-item:not(.tooltipstered):not(.t-menusub__target-link):not(.t794__tm-link):not(.t966__tm-link):not(.t978__tm-link):not(.t978__menu-link)');
        if (currentLink && mobileMenu && isFixedMobileMenu)
            mobileMenu.click()
    });
    Array.prototype.forEach.call(menuSubLinkItems, function(linkItem) {
        linkItem.addEventListener('click', function() {
            if (mobileMenu && isFixedMobileMenu)
                mobileMenu.click()
        })
    });
    if (rightBtn) {
        rightBtn.addEventListener('click', function() {
            if (mobileMenu && isFixedMobileMenu)
                mobileMenu.click()
        })
    }
    if (menuBlock) {
        menuBlock.addEventListener('showME601a', function() {
            var menuLinks = rec.querySelectorAll('.t966__menu-link');
            Array.prototype.forEach.call(menuLinks, function(menuLink) {
                menuLink.addEventListener('click', function() {
                    if (mobileMenu && isFixedMobileMenu)
                        mobileMenu.click()
                })
            })
        })
    }
}
function t228_checkOverflow(recid) {
    var rec = document.getElementById('rec' + recid);
    var menu = rec ? rec.querySelector('.t228') : null;
    if (!menu)
        return;
    var mobileContainer = document.querySelector('.t228__mobile_container');
    var mobileContainerHeight = t228_getFullHeight(mobileContainer);
    var windowHeight = document.documentElement.clientHeight;
    var menuPosition = menu.style.position || window.getComputedStyle(menu).position;
    if (menuPosition === 'fixed') {
        menu.classList.add('t228__overflow');
        menu.style.setProperty('height', (windowHeight - mobileContainerHeight) + 'px', 'important')
    }
}
function t228_checkNoOverflow(recid) {
    var rec = document.getElementById('rec' + recid);
    if (!rec)
        return !1;
    var menu = rec.querySelector('.t228');
    var menuPosition = menu ? menu.style.position || window.getComputedStyle(menu).position : '';
    if (menuPosition === 'fixed') {
        if (menu)
            menu.classList.remove('t228__overflow');
        if (menu)
            menu.style.height = 'auto'
    }
}
function t228_setWidth(recid) {
    var rec = document.getElementById('rec' + recid);
    if (!rec)
        return;
    var menuCenterSideList = rec.querySelectorAll('.t228__centerside');
    Array.prototype.forEach.call(menuCenterSideList, function(menuCenterSide) {
        menuCenterSide.classList.remove('t228__centerside_hidden')
    });
    if (window.innerWidth <= 980)
        return;
    var menuBlocks = rec.querySelectorAll('.t228');
    Array.prototype.forEach.call(menuBlocks, function(menu) {
        var maxWidth;
        var centerWidth = 0;
        var paddingWidth = 40;
        var leftSide = menu.querySelector('.t228__leftside');
        var rightSide = menu.querySelector('.t228__rightside');
        var menuList = menu.querySelector('.t228__list');
        var mainContainer = menu.querySelector('.t228__maincontainer');
        var leftContainer = menu.querySelector('.t228__leftcontainer');
        var rightContainer = menu.querySelector('.t228__rightcontainer');
        var centerContainer = menu.querySelector('.t228__centercontainer');
        var centerContainerLi = centerContainer ? centerContainer.querySelectorAll('li') : [];
        var leftContainerWidth = t228_getFullWidth(leftContainer);
        var rightContainerWidth = t228_getFullWidth(rightContainer);
        var mainContainerWidth = mainContainer ? mainContainer.offsetWidth : 0;
        var dataAlign = menu.getAttribute('data-menu-items-align');
        var isDataAlignCenter = dataAlign === 'center' || dataAlign === null;
        maxWidth = leftContainerWidth >= rightContainerWidth ? leftContainerWidth : rightContainerWidth;
        maxWidth = Math.ceil(maxWidth);
        Array.prototype.forEach.call(centerContainerLi, function(li) {
            centerWidth += t228_getFullWidth(li)
        });
        if (mainContainerWidth - (maxWidth * 2 + paddingWidth * 2) > centerWidth + 20) {
            if (isDataAlignCenter) {
                if (leftSide)
                    leftSide.style.minWidth = maxWidth + 'px';
                if (rightSide)
                    rightSide.style.minWidth = maxWidth + 'px'
            }
        } else {
            if (leftSide)
                leftSide.style.minWidth = maxWidth + '';
            if (rightSide)
                rightSide.style.minWidth = maxWidth + ''
        }
        if (menuList && menuList.classList.contains('t228__list_hidden'))
            menuList.classList.remove('t228__list_hidden')
    })
}
function t228_getFullWidth(el) {
    if (!el)
        return 0;
    var marginLeft = el.style.marginLeft || window.getComputedStyle(el).marginLeft;
    var marginRight = el.style.marginRight || window.getComputedStyle(el).marginRight;
    marginLeft = parseInt(marginLeft, 10) || 0;
    marginRight = parseInt(marginRight, 10) || 0;
    return el.offsetWidth + marginLeft + marginRight
}
function t228_getFullHeight(el) {
    if (!el)
        return 0;
    var marginTop = el.style.marginTop || window.getComputedStyle(el).marginTop;
    var marginBottom = el.style.marginBottom || window.getComputedStyle(el).marginBottom;
    marginTop = parseInt(marginTop, 10) || 0;
    marginBottom = parseInt(marginBottom, 10) || 0;
    return el.offsetHeight + marginTop + marginBottom
}
function t772_init(recId) {
    var rec = document.getElementById('rec' + recId);
    if (!rec)
        return;
    t_onFuncLoad('t_card__moveClickOnCard', function() {
        t_card__moveClickOnCard(recId)
    });
    t_onFuncLoad('t_card__addFocusOnTab', function() {
        t_card__addFocusOnTab(recId)
    });
    var container = rec.querySelector('.t772__container_mobile-flex');
    if (!container)
        return;
    var allRecords = document.getElementById('allrecords');
    if (!allRecords.getAttribute('data-mode') && (window.lazy === 'y' || allRecords.getAttribute('data-lazy') === 'yes')) {
        t_onFuncLoad('t_lazyload_update', function() {
            container.addEventListener('scroll', t_throttle(function() {
                t_lazyload_update()
            }))
        })
    }
}
function t142_checkSize(recId) {
    var rec = document.getElementById('rec' + recId);
    if (!rec)
        return;
    var button = rec.querySelector('.t142__submit');
    if (!button)
        return;
    var buttonStyle = getComputedStyle(button, null);
    var buttonPaddingTop = parseInt(buttonStyle.paddingTop) || 0;
    var buttonPaddingBottom = parseInt(buttonStyle.paddingBottom) || 0;
    var buttonHeight = button.clientHeight - (buttonPaddingTop + buttonPaddingBottom) + 5;
    var textHeight = button.scrollHeight;
    if (buttonHeight < textHeight) {
        button.classList.add('t142__submit-overflowed')
    }
}
function t1069_init(recId) {
    var rec = document.getElementById('rec' + recId);
    if (!rec)
        return;
    var container = rec.querySelector('.t1069');
    if (!container)
        return;
    t_onFuncLoad('t_card__addFocusOnTab', function() {
        t_card__addFocusOnTab(recId)
    });
    var rows = rec.querySelectorAll('.t1069__row');
    Array.prototype.forEach.call(rows, function(row) {
        var titles = row.querySelectorAll('.t-card__title');
        var descriptions = row.querySelectorAll('.t-card__descr');
        var prices = row.querySelectorAll('.t1069__price');
        var subtitles = row.querySelectorAll('.t-card__uptitle');
        if (titles.length > 0)
            t1069_equalHeight(titles);
        if (descriptions.length > 0)
            t1069_equalHeight(descriptions);
        if (prices.length > 0)
            t1069_equalHeight(prices);
        if (subtitles.length > 0)
            t1069_equalHeight(subtitles)
    })
}
function t1069_equalHeight(elements) {
    var maxHeight = 0;
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.height = ''
    }
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var elementStyle = getComputedStyle(element, null);
        var elementPaddingTop = parseInt(elementStyle.paddingTop) || 0;
        var elementPaddingBottom = parseInt(elementStyle.paddingBottom) || 0;
        var elementHeight = element.clientHeight - (elementPaddingTop + elementPaddingBottom);
        if (elementHeight > maxHeight)
            maxHeight = elementHeight
    }
    if (window.innerWidth >= 960) {
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.height = maxHeight + 'px'
        }
    } else {
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.height = ''
        }
    }
}
function t554__init(recid) {
    var rec = document.querySelector('#rec' + recid);
    if (!rec)
        return;
    var wrapperBlock = rec.querySelector('.t554');
    var mapElement = rec.querySelector('.t554_map');
    var card = rec.querySelector('.t554__card');
    var generalWrapper = rec.querySelector('.t554__general-wrapper');
    if (!wrapperBlock || !mapElement || !card || !generalWrapper)
        return;
    t554__calcHeight(mapElement, card, generalWrapper);
    wrapperBlock.addEventListener('displayChanged', function() {
        t554__calcHeight(mapElement, card, generalWrapper)
    })
}
function t554__calcHeight(mapElement, card, generalWrapper) {
    generalWrapper.style.paddingBottom = null;
    var paddingTop = parseInt(mapElement.style.paddingTop, 10) || 0;
    var paddingBottom = parseInt(mapElement.style.paddingBottom, 10) || 0;
    var mapHeight = mapElement.clientHeight - (paddingTop + paddingBottom);
    var cardHeight = parseInt(card.offsetHeight, 10);
    var cardTop = parseInt((card.style.top || '').replace('px', ''), 10);
    if (generalWrapper && mapHeight < cardHeight + cardTop && window.innerWidth > 960 && generalWrapper.classList.contains('t554__general-wrapper_padding')) {
        var mapPaddingBottom = cardHeight + cardTop - mapHeight;
        generalWrapper.style.paddingBottom = mapPaddingBottom + 'px'
    }
}
