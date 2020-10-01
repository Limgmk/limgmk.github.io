function jundgeDrawerStatus() {
    var sideNavWidth = document.getElementById("drawer").offsetWidth;
    return sideNavWidth === 0 ? false : true;
}

function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function sideNavHighlight(itemName) {
    var a = getElementByXpath("//div[@id='drawer']/ul//a[contains(text(), '" + itemName + "')]");
    var li = a.parentNode;
    li.style.background = "rgba(0, 0, 0, 0.05)";
    a.style.color = "var(--theme-color)";
}

window.onscroll = function () {
    var headerWidgetBar = document.getElementById("header-bar");
    var smalltitle = document.getElementById("smalltitle");
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    headerWidgetBar.style.boxShadow = (t > 30) ? "0 1px 5px rgba(56, 56, 56, 0.6)" : "";
    smalltitle.style.color = (t > 40) ? "#ffffff" : "var(--theme-color)";
}

function changeDrawer() {

    var drawerToggleIcon = document.getElementById("drawer-toggle-icon");
    var sideNavWidth = document.getElementById("drawer").offsetWidth;

    if (sideNavWidth === 0) {
        document.documentElement.style.setProperty('--right-transtion', '0.3s');
        document.documentElement.style.setProperty('--drawer-width', '240px');
        drawerToggleIcon.className = "fa fa-close fa-inverse fa-lg";
        openMask();
    } else {
        document.documentElement.style.setProperty('--right-transtion', '0.1s');
        document.documentElement.style.setProperty('--drawer-width', '0px');
        drawerToggleIcon.className = "fa fa-bars fa-inverse fa-lg"
        closeMask();
    }
}

function openMask() {
    var mainMask = document.getElementById("main-mask");
    $(mainMask).addClass("in");
}

function closeMask() {
    var mainMask = document.getElementById("main-mask");
    $(mainMask).removeClass("in");
}