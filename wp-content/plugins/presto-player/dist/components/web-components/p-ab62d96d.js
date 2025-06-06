function n({
    current: n,
    duration: t,
    showAfter: i = null
}) {
    if (0 === i) return !0;
    if (null === i || !t) return !1;
    if (n === i) return !0;
    let e = n / t * 100;
    return 99.9 < e && (e = 100), e >= i
}

function i(n) {
    if (!n) return;
    let t, i, e, r;
    if (n.match(/^rgb/)) {
        const r = n.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
        t = r[1], i = r[2], e = r[3]
    } else {
        const r = +("0x" + n.slice(1).replace(n.length < 5 && /./g, "$&$&"));
        t = r >> 16, i = r >> 8 & 255, e = 255 & r
    }
    return r = Math.sqrt(t * t * .299 + i * i * .587 + e * e * .114), r > 127.5 ? "light" : "dark"
}

function r(n) {
    let t, i = n.split(":");
    return i.length > 1 && (t = 60 * parseInt(i[0])), parseInt(i[1]) + parseInt(t)
}

function t() {
    var n = navigator.userAgent || navigator.vendor;
    return /windows phone/i.test(n) ? "Windows Phone" : /android/i.test(n) ? "Android" : "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || /(iPad|iPhone|iPod)/gi.test(navigator.platform) ? "iOS" : "unknown"
}

function e() {
    return "iOS" === t()
}

function o() {
    return "unknown" !== t()
}

function u() {
    var n = window.navigator.standalone,
        t = window.navigator.userAgent.toLowerCase(),
        i = /safari/.test(t);
    return /iphone|ipod|ipad/.test(t) ? !(!n && i) && (!n && !i || void 0) : !!t.includes("wv")
}

function d() {
    return !("Android" !== t() || !u())
}

function s(n) {
    var t = n.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
    return t ? [t[1], t[2], t[3], "1"] : (t = n.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*((0.)?\d+)\s*\)$/i)) ? [t[1], t[2], t[3], t[4]] : void 0
}

function l(n) {
    var t, i, e, r, u;
    if (o() && !(null === (i = null === (t = null == n ? void 0 : n.config) || void 0 === t ? void 0 : t.blockAttributes) || void 0 === i ? void 0 : i.playsInline) && ("function" == typeof(null === (e = null == n ? void 0 : n.media) || void 0 === e ? void 0 : e.webkitExitFullScreen) && (null == n || n.media.webkitExitFullScreen()), "function" == typeof(null === (r = null == n ? void 0 : n.embed) || void 0 === r ? void 0 : r.exitFullscreen) && (null === (u = null == n ? void 0 : n.embed) || void 0 === u || u.exitFullscreen()), "youtube" === n.provider)) {
        const t = n.currentTime;
        n.currentTime = n.duration, n.once("playing", (() => {
            n.currentTime = t
        }))
    }
}
export {
    r as a, d as b, l as e, e as i, i as l, s as p, n as t
};