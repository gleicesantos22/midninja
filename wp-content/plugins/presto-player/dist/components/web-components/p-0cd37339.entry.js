import {
    r as t,
    h as i,
    g as e,
    c as r,
    H as o
} from "./p-43f79dfb.js";
import {
    t as s,
    l as n,
    p as a,
    a as l,
    b as p,
    i as d
} from "./p-ab62d96d.js";
import {
    f as h
} from "./p-dfe6b15e.js";
import {
    r as u,
    s as c,
    a as _
} from "./p-b9156af0.js";
const v = ":host{display:block}",
    y = v,
    f = class {
        constructor(e) {
            t(this, e), this.player = void 0, this.config = void 0, this.direction = void 0, this.youtube = void 0, this.currentTime = void 0, this.duration = void 0, this.ended = void 0
        }
        componentWillLoad() {
            this.player && (this.player.on("ended", (() => this.setEnded())), this.player.on("timeupdate", (e => this.setCurrentTime(e))))
        }
        handlePlayerChange() {
            this.player && (this.player.on("ended", (() => this.setEnded())), this.player.on("timeupdate", (e => this.setCurrentTime(e))))
        }
        setEnded() {
            this.ended = !0
        }
        setCurrentTime(e) {
            var t, r;
            this.currentTime = null === (t = null == e ? void 0 : e.detail) || void 0 === t ? void 0 : t.plyr.currentTime, this.duration = null === (r = null == e ? void 0 : e.detail) || void 0 === r ? void 0 : r.plyr.duration
        }
        disconnectedCallback() {
            this.player && (this.player.off("ended", this.setEnded), this.player.off("timeupdate", this.setCurrentTime))
        }
        render() {
            return i("presto-action-bar-controller", {
                key: "b3e5ee805698aa3db15cd161ead5687cdc8dd527",
                ended: this.ended,
                config: this.config,
                currentTime: this.currentTime,
                duration: this.duration,
                direction: this.direction,
                youtube: this.youtube
            })
        }
        get el() {
            return e(this)
        }
        static get watchers() {
            return {
                player: ["handlePlayerChange"]
            }
        }
    };
f.style = y;
const b = ":host{display:block}",
    g = b,
    m = class {
        constructor(e) {
            t(this, e), this.actionBarStateChange = r(this, "actionBarStateChange", 7), this.ended = void 0, this.config = void 0, this.currentTime = void 0, this.duration = void 0, this.direction = void 0, this.youtube = void 0, this.show = !1, this.youtubeRenderKey = 1, this.percentagePassed = 0
        }
        componentWillLoad() {
            this.handleDuration()
        }
        handleDuration() {
            this.handleTime()
        }
        handleEnded(e) {
            var t;
            if (e) {
                if (100 !== (null === (t = null == this ? void 0 : this.config) || void 0 === t ? void 0 : t.percentage_start)) return;
                this.show = !0
            }
        }
        handlePercentagePassed() {
            this.percentagePassed = this.currentTime / this.duration * 100
        }
        handleTime() {
            this.checkTime()
        }
        checkTime() {
            var e, t;
            (null === (e = null === window || void 0 === window ? void 0 : window.wp) || void 0 === e ? void 0 : e.blocks) ? this.show = !0: this.show = s({
                current: this.currentTime,
                duration: this.duration,
                showAfter: null === (t = this.config) || void 0 === t ? void 0 : t.percentage_start
            })
        }
        handleButtonCountChange(e, t) {
            (null == e ? void 0 : e.button_count) !== (null == t ? void 0 : t.button_count) && this.youtubeRenderKey++, (null == e ? void 0 : e.enabled) && this.handleDuration()
        }
        youtubeButton() {
            var e, t, r, o;
            if ("youtube" === (null === (e = this.config) || void 0 === e ? void 0 : e.button_type) && (null === (t = this.youtube) || void 0 === t ? void 0 : t.channelId)) return i("presto-youtube-subscribe-button", {
                key: this.youtubeRenderKey,
                channel: null === (r = this.youtube) || void 0 === r ? void 0 : r.channelId,
                showCount: null === (o = this.config) || void 0 === o ? void 0 : o.button_count
            })
        }
        customButton() {
            var e, t, r, o, s, a, l, n, p, d, h;
            if ("custom" === (null === (e = this.config) || void 0 === e ? void 0 : e.button_type)) return i("presto-player-button", {
                type: "primary",
                size: "small",
                href: null === (r = null === (t = this.config) || void 0 === t ? void 0 : t.button_link) || void 0 === r ? void 0 : r.url,
                target: (null === (s = null === (o = this.config) || void 0 === o ? void 0 : o.button_link) || void 0 === s ? void 0 : s.opensInNewTab) ? "_blank" : "_self",
                style: Object.assign(Object.assign({
                    "--presto-player-button-border-radius": `${null===(a=this.config)||void 0===a?void 0:a.button_radius}px`
                }, (null === (l = this.config) || void 0 === l ? void 0 : l.button_color) ? {
                    "--presto-player-button-color": `${null===(n=this.config)||void 0===n?void 0:n.button_color}`
                } : {}), (null === (p = this.config) || void 0 === p ? void 0 : p.button_text_color) ? {
                    "--presto-player-button-text": `${null===(d=this.config)||void 0===d?void 0:d.button_text_color}`
                } : {})
            }, null === (h = this.config) || void 0 === h ? void 0 : h.button_text)
        }
        handleCtaStateChange(e) {
            this.actionBarStateChange.emit(e)
        }
        render() {
            var e, t;
            return i("presto-action-bar-ui", {
                key: "843046d7ae74eb23df6f6bafa018987c12f61df7",
                open: this.show,
                style: {
                    "--presto-action-bar-background": (null === (e = this.config) || void 0 === e ? void 0 : e.background_color) || "#1d1d1d"
                }
            }, null === (t = this.config) || void 0 === t ? void 0 : t.text, i("div", {
                key: "3dd88ff01aeb1df74303758c5b640d29e48fe1a2",
                slot: "button"
            }, this.youtubeButton(), this.customButton()))
        }
        get el() {
            return e(this)
        }
        static get watchers() {
            return {
                duration: ["handleDuration", "handlePercentagePassed"],
                ended: ["handleEnded"],
                currentTime: ["handlePercentagePassed", "handleTime"],
                config: ["handleButtonCountChange"],
                show: ["handleCtaStateChange"]
            }
        }
    };
m.style = g;
const k = ":host{display:block}.presto-audio__wrapper{border-radius:var(--presto-player-border-radius, 0px)}.presto-audio__wrapper .plyr--audio .plyr__controls{padding:0}.presto-audio__wrapper .plyr--audio .plyr__control.plyr__tab-focus,.presto-audio__wrapper .plyr--audio .plyr__control:hover,.presto-audio__wrapper .plyr--audio .plyr__control[aria-expanded=true]{background:var(--plyr-audio-controls-background);color:var(--plyr-audio-control-color)}.presto-audio__wrapper{display:flex;background:var(--plyr-audio-controls-background, #fff)}.presto-audio__controls-wrapper{padding:calc(var(--plyr-control-spacing, 10px) * 2);flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.has-poster .presto-audio__controls-wrapper{padding:calc(var(--plyr-control-spacing, 10px) * 3)}.has-play-large:not(.has-poster) .presto-audio__controls-wrapper{padding-left:0}.presto-audio__title,.presto-audio__mobile-title{font-size:18px;font-weight:500;line-height:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--plyr-audio-control-color)}.presto-audio__title{margin:calc(var(--plyr-control-spacing, 10px) / 2);margin-top:0;text-wrap:wrap}.presto-audio__poster-wrapper{position:relative;width:100px;min-height:100px;flex:0 0 100px}.presto-audio__poster-wrapper img{border-radius:var(--presto-player-border-radius, 0px) 0 0 var(--presto-player-border-radius, 0px);width:100%;height:100%;object-fit:cover;aspect-ratio:1;display:block}.has-poster .presto-audio__poster-wrapper{width:140px;height:140px;flex:0 0 140px}.presto-audio__poster{width:100%;height:100%}.presto-audio__large-play-button{user-select:none;cursor:pointer;position:absolute;display:flex;align-items:center;justify-content:center;top:50%;left:50%;transform:translate(-50%, -50%);width:50px;height:50px;color:white;border-radius:100%;background:var(--plyr-audio-control-color);color:var(--plyr-audio-controls-background)}.presto-audio__large-play-button.is-relative{position:relative;top:auto;left:auto;transform:none}.has-light-background.has-poster .presto-audio__large-play-button{background:var(--plyr-audio-controls-background);color:var(--plyr-audio-control-color)}.has-dark-background.has-poster .presto-audio__large-play-button{background:var(--plyr-audio-control-color);color:var(--plyr-audio-controls-background)}.presto-audio__icon-play,.presto-audio__icon-pause{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);fill:currentColor;display:block;transition:opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;margin:0 auto;text-align:center}.presto-audio__icon-pause{opacity:0;visibility:hidden}.presto-audio__wrapper.is-playing .presto-audio__icon-pause{opacity:1;visibility:visible}.presto-audio__icon-play{margin-left:2px;opacity:1;visibility:visible}.presto-audio__wrapper.is-playing .presto-audio__icon-play{opacity:0;visibility:hidden}.presto-audio__poster-wrapper-mobile{display:none;min-width:0}.presto-audio__poster-wrapper-mobile .presto-audio__large-play-button{flex:0 0 50px}.presto-audio__wrapper.breakpoint-small{flex-direction:column}.presto-audio__wrapper.breakpoint-small .presto-audio__controls-wrapper{padding:calc(var(--plyr-control-spacing, 10px) * 2)}.presto-audio__wrapper.breakpoint-small.has-poster .presto-audio__title{text-align:center;margin:calc(var(--plyr-control-spacing, 10px) * 1.5)}.presto-audio__wrapper.breakpoint-small.has-poster .presto-audio__poster-wrapper{margin:30px auto auto auto;overflow:hidden;border-radius:var(--presto-player-border-radius, 0px);width:225px;height:225px;flex:0 0 225px}.presto-audio__wrapper.breakpoint-small.has-play-large:not(.has-poster) .presto-audio__poster-wrapper,.presto-audio__wrapper.breakpoint-small.has-play-large:not(.has-poster) .presto-audio__title{display:none}.presto-audio__wrapper.breakpoint-small.has-play-large:not(.has-poster) .presto-audio__poster-wrapper-mobile{display:flex;align-items:center;gap:1em;margin-bottom:calc(var(--plyr-control-spacing, 10px) * -1);padding:calc(var(--plyr-control-spacing, 10px) * 2) calc(var(--plyr-control-spacing, 10px) * 2) 0 calc(var(--plyr-control-spacing, 10px) * 2)}.skin-stacked.presto-sticky-audio .presto-audio__wrapper{height:115px}.skin-stacked.presto-sticky-audio .has-poster .presto-audio__controls-wrapper{padding:20px}.skin-stacked.presto-sticky-audio .has-poster .presto-audio__poster-wrapper{width:115px;height:115px;flex:0 0 115px}.presto-sticky-audio .presto-audio__wrapper{height:100px}.presto-sticky-audio .has-poster .presto-audio__controls-wrapper{padding:20px}.presto-sticky-audio .has-poster .presto-audio__poster-wrapper{width:100px;height:100px;flex:0 0 100px}.action-bar-active .presto-audio__wrapper{border-radius:var(--presto-player-border-radius) var(--presto-player-border-radius) 0px 0px}@media screen and (max-width: 782px){.presto-sticky-audio .presto-audio__poster-wrapper-mobile{display:flex;align-items:center;gap:1em;margin-bottom:calc(var(--plyr-control-spacing, 10px) * -1);padding:calc(var(--plyr-control-spacing, 10px) * 2) calc(var(--plyr-control-spacing, 10px) * 2) 0 calc(var(--plyr-control-spacing, 10px) * 2)}.presto-sticky-audio .presto-audio__poster-wrapper,.presto-sticky-audio .presto-audio__title{display:none}.presto-sticky-audio .presto-audio__wrapper{height:140px}.presto-sticky-audio .has-poster .presto-audio__controls-wrapper{padding:0px}.presto-sticky-audio .presto-audio__poster-wrapper-mobile .presto-audio__large-play-button{flex:0 0 40px;height:40px}}",
    w = k,
    x = class {
        constructor(e) {
            t(this, e), this.playVideo = r(this, "playVideo", 7), this.pauseVideo = r(this, "pauseVideo", 7), this.getRef = void 0, this.autoplay = void 0, this.src = void 0, this.preload = void 0, this.poster = void 0, this.player = void 0, this.preset = void 0, this.tracks = void 0, this.provider = void 0, this.mediaTitle = void 0, this.audioAttributes = void 0, this.width = void 0
        }
        renderPosterImage() {
            if (this.poster) return i("div", {
                class: "presto-audio__poster"
            }, i("img", {
                src: this.poster
            }))
        }
        hasPosterArea() {
            var e;
            return !!this.poster || !!(null === (e = this.preset) || void 0 === e ? void 0 : e["play-large"])
        }
        renderMobilePoster() {
            var e;
            return i("div", {
                class: "presto-audio__poster-wrapper-mobile"
            }, !!(null === (e = this.preset) || void 0 === e ? void 0 : e["play-large"]) && this.renderLargePlay("presto-audio__large-play-button is-relative"), i("div", {
                class: "presto-audio__mobile-title"
            }, this.mediaTitle))
        }
        renderLargePlay(e = "presto-audio__large-play-button") {
            return i("div", {
                class: e,
                onClick: () => {
                    this.player.playing ? this.pauseVideo.emit() : this.playVideo.emit()
                }
            }, i("svg", {
                class: "presto-audio__icon-play",
                width: "16",
                height: "18",
                viewBox: "0 0 16 18",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, i("path", {
                d: "M15.5588 9.00005L0.117662 17.915L0.117662 0.0850823L15.5588 9.00005Z"
            })), i("svg", {
                class: "presto-audio__icon-pause",
                width: "17",
                height: "17",
                viewBox: "0 0 17 17",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, i("rect", {
                width: "5",
                height: "17"
            }), i("rect", {
                x: "12",
                width: "5",
                height: "17"
            })))
        }
        componentDidLoad() {
            "ResizeObserver" in window && new ResizeObserver((e => {
                e.forEach((e => this.width = e.contentRect.width))
            })).observe(this.el)
        }
        render() {
            var e, t, r, o, s;
            return i("div", {
                key: "b9d4dc94569cc875faa3ca027f261435c5f16176",
                ref: e => this.el = e,
                class: {
                    "presto-audio__wrapper": !0, "has-poster": !!this.poster, "has-play-large": !!(null === (e = this.preset) || void 0 === e ? void 0 : e["play-large"]), "is-playing": null === (t = this.player) || void 0 === t ? void 0 : t.playing, "has-light-background": "light" === n(null === (r = this.preset) || void 0 === r ? void 0 : r.background_color), "has-dark-background": "dark" === n(null === (o = this.preset) || void 0 === o ? void 0 : o.background_color), "breakpoint-small": this.width < 520, "skin-stacked": this.width < 520, "breakpoint-large": this.width >= 520
                }
            }, this.hasPosterArea() && i("div", {
                key: "c44d629e4005fefe173117449ca46fd38d668f37",
                class: "presto-audio__poster-wrapper"
            }, !!(null === (s = this.preset) || void 0 === s ? void 0 : s["play-large"]) && i("div", {
                key: "d5e7bcf6adaf2d1682a637a51a7e5927dfdfeba5",
                class: "presto-audio__large-play-wrapper"
            }, this.renderLargePlay()), this.renderPosterImage()), this.hasPosterArea() && this.renderMobilePoster(), i("div", {
                key: "8cd1d93e0847b492b9bd4bfbcc6f79489531f64a",
                class: "presto-audio__controls-wrapper"
            }, i("div", {
                key: "c20d37014383c5a7897d504168697043a5e52385",
                class: "presto-audio__title"
            }, this.mediaTitle), i("audio", Object.assign({
                key: "c17bc3d36bcda183e46e8a0a1c44a4c5ce35a4df",
                part: "audio-player",
                ref: this.getRef,
                autoplay: this.autoplay,
                preload: this.preload,
                "data-poster": this.poster
            }, this.audioAttributes), i("source", {
                key: "9d69389fe7894d6f6823d55ce0a433c9d0d39952",
                src: this.src
            }), !!this.tracks && !!this.tracks.length && this.tracks.map((e => i("track", {
                kind: "captions",
                label: (null == e ? void 0 : e.label) ? e.label : "Captions",
                src: null == e ? void 0 : e.src,
                srclang: (null == e ? void 0 : e.srcLang) ? null == e ? void 0 : e.srcLang : "en"
            }))))))
        }
    };
x.style = w;
const C = class {
        constructor(e) {
            t(this, e), this.getRef = void 0, this.autoplay = void 0, this.src = void 0, this.preload = void 0, this.poster = void 0, this.player = void 0, this.tracks = void 0, this.playsinline = void 0, this.provider = void 0, this.thumbnail = void 0, this.previewUrl = void 0, this.videoAttributes = void 0
        }
        componentWillLoad() {
            this.poster = this.poster || this.thumbnail
        }
        render() {
            return i("presto-video", {
                key: "082574ecb3f6ba1e4de1adfa13483c49acb20aff",
                getRef: this.getRef,
                player: this.player,
                autoplay: this.autoplay,
                preload: this.preload,
                poster: this.poster,
                playsinline: this.playsinline,
                src: this.src,
                tracks: this.tracks,
                videoAttributes: this.videoAttributes
            })
        }
    },
    S = '.skin-business.presto-player__wrapper.rewind-inactive .plyr__controls .plyr__controls__item:nth-child(2)::before{border-radius:var(--plyr-control-radius, 3px) 0px 0px var(--plyr-control-radius, 3px)}.skin-business.presto-player__wrapper.caption-style-full .plyr:not(.plyr--hide-controls):not(.is-muted-overlay) .plyr__controls:not(:empty)~.plyr__captions{transform:translateY(calc(var(--plyr-control-spacing, 16px) * -4))}.skin-business.presto-player__wrapper .presto-player-progress__marker{border-radius:0;width:15px;height:15px;border-width:1px}.skin-business.presto-player__wrapper .plyr__control[data-plyr]:hover:not([role*=menuitem]):not(.plyr__control--back),.skin-business.presto-player__wrapper .plyr__control[data-plyr]:focus:not([role*=menuitem]):not(.plyr__control--back),.skin-business.presto-player__wrapper .plyr__control[data-plyr]:active:not([role*=menuitem]):not(.plyr__control--back){background-color:transparent;color:var(--plyr-color-main)}.skin-business.presto-player__wrapper .plyr__control[data-plyr]:hover:not([role*=menuitem]):not(.plyr__control--back)[data-plyr=play],.skin-business.presto-player__wrapper .plyr__control[data-plyr]:focus:not([role*=menuitem]):not(.plyr__control--back)[data-plyr=play],.skin-business.presto-player__wrapper .plyr__control[data-plyr]:active:not([role*=menuitem]):not(.plyr__control--back)[data-plyr=play]{background-color:var(--plyr-color-main);color:white}.skin-business.presto-player__wrapper .plyr__control--overlaid[data-plyr=play]{border-radius:4px;background:#000000;opacity:75%}.skin-business.presto-player__wrapper .plyr__control--overlaid[data-plyr=play]:hover{background-color:var(--plyr-color-main);color:white;opacity:100%}.skin-business.presto-player__wrapper .plyr__volume input[type=range]{cursor:pointer}.skin-business.presto-player__wrapper .plyr__controls .plyr__controls__item[data-plyr=fast-forward]{border-radius:0px}.skin-business.presto-player__wrapper .plyr__progress{margin:0px 20px 0 5px}.skin-business.presto-player__wrapper .plyr__progress input[type=range]{height:32px;border-radius:0px;cursor:pointer}.skin-business.presto-player__wrapper .plyr__controls .plyr__controls__item:not(.presto-player-progress__marker):first-child::before{border-radius:var(--plyr-control-radius, 3px) 0px 0px var(--plyr-control-radius, 3px)}.skin-business.presto-player__wrapper .plyr__controls .plyr__controls__item:not(.presto-player-progress__marker):last-child::before{border-radius:0px var(--plyr-control-radius, 3px) var(--plyr-control-radius, 3px) 0px}.skin-business.presto-player__wrapper .plyr__controls .plyr__controls__item.plyr__control[data-plyr=play]{order:-1;margin-right:5px;padding:11px 20px 11px 20px;top:-4px}.skin-business.presto-player__wrapper .plyr__controls .plyr__controls__item.plyr__control[data-plyr=play]::before{border-radius:4px}.skin-business.presto-player__wrapper .plyr__controls .plyr__controls__item[data-plyr=rewind]::before{border-radius:var(--plyr-control-radius, 3px) 0px 0px var(--plyr-control-radius, 3px)}.skin-business.presto-player__wrapper .plyr__controls .plyr__controls__item:not([data-plyr=play]){margin:0}.skin-business.presto-player__wrapper .plyr__controls .plyr__controls__item[data-plyr=fullscreen]{padding:4px}.skin-business.presto-player__wrapper .plyr__controls .plyr__controls__item[data-plyr=fullscreen] svg{height:24px;width:24px}.skin-business.presto-player__wrapper .plyr__controls .plyr__controls__item:not(.presto-player-progress__marker){position:relative}.skin-business.presto-player__wrapper .plyr__controls .plyr__controls__item:not(.presto-player-progress__marker).plyr__time{height:32px;padding-top:4.5px}.skin-business.presto-player__wrapper .plyr__controls .plyr__controls__item:not(.presto-player-progress__marker)::before{content:"";background:#000000;position:absolute;top:0px;left:0;right:0;bottom:0px;opacity:0.76;z-index:-1}.skin-business.presto-player__wrapper .plyr--full-ui input[type=range]::-webkit-slider-runnable-track{box-shadow:none;color:var(--plyr-color-main);height:9px;outline:1px solid rgba(135, 135, 135, 0.6509803922);outline-offset:2px;border-radius:0px}.skin-business.presto-player__wrapper .plyr--full-ui input[type=range]::-webkit-slider-thumb{visibility:hidden}.skin-business.presto-player__wrapper .plyr__progress__buffer::-webkit-progress-value{position:relative;border-radius:0px;height:9px;top:-2px}.skin-business.presto-player__wrapper .plyr--full-ui input[type=range]::-webkit-slider-runnable-track{background-color:transparent}@media screen and (max-width: 480px){.skin-business.presto-player__wrapper .plyr__controls .plyr__controls__item.plyr__time{padding:1.5%}.skin-business.presto-player__wrapper .plyr__controls .plyr__controls__item[data-plyr=play]{padding:8px;top:0px}.skin-business.presto-player__wrapper .plyr__controls .plyr__controls__item[data-plyr=fullscreen] svg{width:22px}}',
    P = S,
    T = class {
        constructor(e) {
            t(this, e)
        }
        render() {
            return i(o, {
                key: "43b7781a757d117be4457ee9fec35756fe48d025"
            }, i("slot", {
                key: "39cd2e2e479e5959ba8980ba74c72faa006ed867"
            }))
        }
    };
T.style = P;
const L = ":host{display:block}",
    j = L,
    z = class {
        constructor(e) {
            t(this, e), this.player = void 0, this.direction = void 0, this.preset = void 0, this.i18n = void 0, this.provider = void 0, this.currentTime = void 0, this.duration = void 0, this.ended = void 0
        }
        componentWillLoad() {
            this.player && (this.player.on("ended", (() => this.setEnded())), this.player.on("timeupdate", (e => this.setCurrentTime(e))))
        }
        setEnded() {
            this.ended = !0
        }
        setCurrentTime(e) {
            var t, r;
            this.currentTime = null === (t = null == e ? void 0 : e.detail) || void 0 === t ? void 0 : t.plyr.currentTime, this.duration = null === (r = null == e ? void 0 : e.detail) || void 0 === r ? void 0 : r.plyr.duration
        }
        disconnectedCallback() {
            this.player && (this.player.off("ended", this.setEnded), this.player.off("timeupdate", this.setCurrentTime))
        }
        render() {
            var e;
            return i("presto-cta-overlay-controller", {
                key: "8ee64dc818a0256e6674c9c2b0f33916374c89fa",
                ended: this.ended,
                currentTime: this.currentTime,
                duration: this.duration,
                direction: this.direction,
                cta: null === (e = this.preset) || void 0 === e ? void 0 : e.cta,
                i18n: this.i18n,
                provider: this.provider
            })
        }
    };
z.style = j;
const $ = ":host{display:block}",
    O = $,
    E = class {
        constructor(e) {
            t(this, e), this.playVideo = r(this, "playVideo", 7), this.pauseVideo = r(this, "pauseVideo", 7), this.restartVideo = r(this, "restartVideo", 7), this.ctaStateChange = r(this, "ctaStateChange", 7), this.ended = void 0, this.currentTime = void 0, this.duration = void 0, this.direction = void 0, this.cta = void 0, this.i18n = void 0, this.provider = void 0, this.enabled = void 0, this.show = void 0, this.loading = void 0, this.error = void 0, this.skipped = void 0, this.percentagePassed = 0
        }
        componentWillLoad() {
            this.handleDuration()
        }
        handleEnded(e) {
            var t;
            if (e) {
                if (100 !== (null === (t = null == this ? void 0 : this.cta) || void 0 === t ? void 0 : t.percentage)) return;
                this.show = !0
            }
        }
        handleDuration() {
            var e;
            this.enabled = !this.skipped && (null === (e = null == this ? void 0 : this.cta) || void 0 === e ? void 0 : e.enabled), this.handleTime()
        }
        handlePercentagePassed() {
            this.percentagePassed = this.currentTime / this.duration * 100
        }
        handleEnabled() {
            this.show && (this.skipped || this.pauseVideo.emit(!0))
        }
        handleTime() {
            var e;
            this.enabled && (this.skipped || 100 !== (null === (e = null == this ? void 0 : this.cta) || void 0 === e ? void 0 : e.percentage) && this.checkTime())
        }
        checkTime() {
            var e;
            this.show = s({
                current: this.currentTime,
                duration: this.duration,
                showAfter: (null === (e = null == this ? void 0 : this.cta) || void 0 === e ? void 0 : e.percentage) || 0
            })
        }
        skip() {
            this.skipped = !0, this.show = !1, this.playVideo.emit()
        }
        rewatch() {
            this.ended = !1, this.show = !1, this.restartVideo.emit()
        }
        handleCtaStateChange(e) {
            this.ctaStateChange.emit(e)
        }
        render() {
            var e, t, r, o, s, a, l, n, p, d, h, c, u, y;
            if (this.show) return i("presto-cta-overlay-ui", {
                style: Object.assign(Object.assign(Object.assign({
                    "--presto-player-button-border-radius": `${null===(e=null==this?void 0:this.cta)||void 0===e?void 0:e.button_radius}px`
                }, (null === (t = null == this ? void 0 : this.cta) || void 0 === t ? void 0 : t.background_opacity) ? {
                    "--presto-player-cta-background-opacity": "" + (null === (r = null == this ? void 0 : this.cta) || void 0 === r ? void 0 : r.background_opacity) / 100
                } : {}), (null === (o = null == this ? void 0 : this.cta) || void 0 === o ? void 0 : o.button_color) ? {
                    "--presto-player-button-color": `${null===(s=null==this?void 0:this.cta)||void 0===s?void 0:s.button_color}`
                } : {}), (null === (a = null == this ? void 0 : this.cta) || void 0 === a ? void 0 : a.button_text_color) ? {
                    "--presto-player-button-text": `${null===(l=null==this?void 0:this.cta)||void 0===l?void 0:l.button_text_color}`
                } : {}),
                direction: this.direction,
                class: "cta-overlay",
                i18n: this.i18n,
                headline: null === (n = null == this ? void 0 : this.cta) || void 0 === n ? void 0 : n.headline,
                "bottom-text": null === (p = null == this ? void 0 : this.cta) || void 0 === p ? void 0 : p.bottom_text,
                "show-button": null === (d = null == this ? void 0 : this.cta) || void 0 === d ? void 0 : d.show_button,
                buttonLink: null === (h = null == this ? void 0 : this.cta) || void 0 === h ? void 0 : h.button_link,
                allowSkip: !this.ended && (null === (c = null == this ? void 0 : this.cta) || void 0 === c ? void 0 : c.show_skip),
                allowRewatch: this.ended && (null === (u = null == this ? void 0 : this.cta) || void 0 === u ? void 0 : u.show_rewatch),
                "button-text": null === (y = null == this ? void 0 : this.cta) || void 0 === y ? void 0 : y.button_text,
                onSkip: () => this.skip(),
                onRewatch: () => this.rewatch(),
                provider: this.provider
            })
        }
        static get watchers() {
            return {
                ended: ["handleEnded"],
                duration: ["handleDuration", "handlePercentagePassed"],
                currentTime: ["handlePercentagePassed", "handleEnabled", "handleTime"],
                show: ["handleCtaStateChange"]
            }
        }
    };
E.style = O;
const V = ":host{display:block}.overlay-text{text-decoration:none;display:inline-block;user-select:none;line-height:1;opacity:var(--presto-dynamic-overlay-opacity, 1);font-size:var(--presto-dynamic-overlay-font-size, 18px);padding:var(--presto-dynamic-overlay-padding, 0.65em 0.85em);font-weight:var(--presto-dynamic-overlay-font-weight, 500);border-radius:var(--presto-dynamic-overlay-radius, 0.25em);background:var(--presto-dynamic-overlay-background, rgba(0, 0, 0, 0.8));color:var(--presto-dynamic-overlay-color, #fff);opacity:var(--presto-dynamic-overlay-opacity, 1);word-break:break-word}a.overlay-text{cursor:pointer}",
    D = V,
    W = class {
        constructor(e) {
            t(this, e), this.href = void 0, this.target = void 0, this.position = "top-right"
        }
        closestElement(e, t) {
            return t && t != document && t != window && t.closest(e) || t && this.closestElement(e, t.getRootNode().host)
        }
        componentDidLoad() {
            let e = this.closestElement("presto-player", this.el);
            h(this.text, 3, {
                maxFontSize: 16,
                minFontSize: 10,
                container: e
            })
        }
        render() {
            const e = this.href ? "a" : "span";
            return i(e, {
                key: "aba93930fd5449cfccd632ecd9983841c5333d9f",
                class: {
                    "overlay-text": !0, "overlay--top-left": "top-left" === this.position, "overlay--top-right": "top-right" === this.position
                },
                href: this.href,
                target: this.target,
                part: "overlay-text",
                ref: e => this.text = e
            }, i("slot", {
                key: "be2b2aa9b5c71e613ccef9e62f828451964649fe"
            }))
        }
        get el() {
            return e(this)
        }
    };
W.style = D;
const N = ".top-left,.top-right{position:absolute;display:block;padding:20px;max-width:45%;z-index:20;display:flex;flex-direction:column;flex-wrap:wrap}.top-left{top:0;left:0}.top-right{top:0;right:0;align-items:flex-end}presto-dynamic-overlay-ui{overflow:hidden;height:0;opacity:0;transition:height 0ms 400ms, opacity 400ms 0ms}presto-dynamic-overlay-ui.visible{margin-bottom:10px;height:auto;opacity:1;transition:height 0ms 0ms, opacity 500ms 0ms}",
    B = N,
    I = class {
        constructor(e) {
            t(this, e), this.reloadComponent = r(this, "reloadComponent", 7), this.watermarkRef = {
                left: null,
                right: null
            }, this.refs = {}, this.overlays = void 0, this.player = void 0, this.preset = void 0, this.enabled = void 0, this.currentTime = void 0, this.destroy = !1
        }
        componentDidLoad() {
            this.player && this.player.on("timeupdate", (e => {
                this.currentTime = e.detail.plyr.currentTime, this.checkValidity()
            }))
        }
        checkValidity() {
            var e, t, r, i, o, s, a, l, n, p;
            this.player.playing && ((null === (e = null == this ? void 0 : this.overlays) || void 0 === e ? void 0 : e.length) || (null === (r = null === (t = this.preset) || void 0 === t ? void 0 : t.watermark) || void 0 === r ? void 0 : r.enabled)) && ((null === (i = this.container) || void 0 === i ? void 0 : i.offsetParent) && (null === (o = this.topLeft) || void 0 === o ? void 0 : o.offsetParent) && (null === (s = this.topRight) || void 0 === s ? void 0 : s.offsetParent) || this.reloadComponent.emit(), Object.keys(this.refs || {}).forEach((e => {
                const {
                    overlay: t,
                    component: r
                } = this.refs[e];
                this.checkComponent(r, t.text, (() => this.reloadComponent.emit()))
            })), this.shouldShowWatermark("top-left") && this.watermarkRef.left && this.checkComponent(this.watermarkRef.left, null === (l = null === (a = this.preset) || void 0 === a ? void 0 : a.watermark) || void 0 === l ? void 0 : l.text, (() => this.reloadComponent.emit())), this.shouldShowWatermark("top-right") && this.watermarkRef.right && this.checkComponent(this.watermarkRef.right, null === (p = null === (n = this.preset) || void 0 === n ? void 0 : n.watermark) || void 0 === p ? void 0 : p.text, (() => this.reloadComponent.emit())))
        }
        checkComponent(e, t, r) {
            if (!(null == e ? void 0 : e.offsetParent)) return r();
            if (!e.shadowRoot.querySelector("slot")) return r();
            if (this.player && this.player.playing) {
                const i = e.shadowRoot.querySelector("slot").assignedNodes()[0];
                if (i) {
                    if (i.parentElement.innerHTML != t) return r();
                    const e = getComputedStyle(i.parentElement.shadowRoot.querySelector(".overlay-text"));
                    if (parseInt(e.fontSize, 10) < 10) return r();
                    const o = a(e.color);
                    if ("1" !== (null == o ? void 0 : o[3])) return r()
                }
            }
        }
        shouldShowOverlay(e) {
            if (void 0 !== this.currentTime) return !(this.currentTime < l(null == e ? void 0 : e.startTime) || this.currentTime > l(null == e ? void 0 : e.endTime))
        }
        renderOverlay(e) {
            var t, r;
            return i("presto-dynamic-overlay-ui", {
                class: {
                    visible: this.shouldShowOverlay(e)
                },
                ref: t => this.refs[e.id] = {
                    overlay: e,
                    component: t
                },
                key: e.id,
                position: e.position,
                href: null === (t = null == e ? void 0 : e.link) || void 0 === t ? void 0 : t.url,
                target: (null === (r = null == e ? void 0 : e.link) || void 0 === r ? void 0 : r.opensInNewTab) ? "_blank" : "_self",
                innerHTML: this.shouldShowOverlay(e) ? e.text : "",
                style: {
                    "--presto-dynamic-overlay-color": (null == e ? void 0 : e.color) || "#fff",
                    "--presto-dynamic-overlay-background": (null == e ? void 0 : e.backgroundColor) || "#333",
                    "--presto-dynamic-overlay-opacity": (null == e ? void 0 : e.opacity) ? (e.opacity / 100).toString() : "1"
                }
            })
        }
        shouldShowWatermark(e) {
            var t, r, i;
            if (!(null === (r = null === (t = this.preset) || void 0 === t ? void 0 : t.watermark) || void 0 === r ? void 0 : r.enabled)) return !1;
            const o = null === (i = this.preset) || void 0 === i ? void 0 : i.watermark;
            return "randomize" === o.position ? Math.floor((this.player.currentTime || 0) / 10) % 2 == 0 ? "top-left" === e : "top-right" === e : o.position === e || !o.position && "top-right" === e
        }
        render() {
            var e, t, r, o, s, a, l, n, p, d, h;
            if (this.enabled && ((null === (e = null == this ? void 0 : this.overlays) || void 0 === e ? void 0 : e.length) || (null === (r = null === (t = this.preset) || void 0 === t ? void 0 : t.watermark) || void 0 === r ? void 0 : r.enabled))) return i("div", {
                class: "overlays",
                ref: e => this.container = e
            }, i("div", {
                class: "top-left",
                ref: e => this.topLeft = e
            }, !!this.shouldShowWatermark("top-left") && i("presto-dynamic-overlay-ui", {
                ref: e => this.watermarkRef.left = e,
                style: {
                    "--presto-dynamic-overlay-color": (null === (o = this.preset.watermark) || void 0 === o ? void 0 : o.color) || "#fff",
                    "--presto-dynamic-overlay-background": (null === (s = this.preset.watermark) || void 0 === s ? void 0 : s.backgroundColor) || "#333",
                    "--presto-dynamic-overlay-opacity": (null === (a = this.preset.watermark) || void 0 === a ? void 0 : a.opacity) ? (this.preset.watermark.opacity / 100).toString() : "1"
                },
                class: "visible",
                position: "top-left",
                innerHTML: this.preset.watermark.text
            }), !!(null === (l = null == this ? void 0 : this.overlays) || void 0 === l ? void 0 : l.length) && this.overlays.map((e => "top-left" !== e.position ? "" : this.renderOverlay(e)))), i("div", {
                class: "top-right",
                ref: e => this.topRight = e
            }, !!this.shouldShowWatermark("top-right") && i("presto-dynamic-overlay-ui", {
                ref: e => this.watermarkRef.right = e,
                style: {
                    "--presto-dynamic-overlay-color": (null === (n = this.preset.watermark) || void 0 === n ? void 0 : n.color) || "#fff",
                    "--presto-dynamic-overlay-background": (null === (p = this.preset.watermark) || void 0 === p ? void 0 : p.backgroundColor) || "#333",
                    "--presto-dynamic-overlay-opacity": (null === (d = this.preset.watermark) || void 0 === d ? void 0 : d.opacity) ? (this.preset.watermark.opacity / 100).toString() : "1"
                },
                class: "visible",
                position: "top-right",
                innerHTML: this.preset.watermark.text
            }), !!(null === (h = null == this ? void 0 : this.overlays) || void 0 === h ? void 0 : h.length) && this.overlays.map((e => "top-right" !== e.position ? "" : this.renderOverlay(e)))))
        }
        get el() {
            return e(this)
        }
    };
I.style = B;
const M = ":host{display:block}",
    R = M,
    A = class {
        constructor(e) {
            t(this, e), this.player = void 0, this.direction = void 0, this.preset = void 0, this.videoId = void 0, this.i18n = void 0, this.provider = void 0, this.currentTime = void 0, this.duration = void 0, this.ended = void 0
        }
        componentWillLoad() {
            this.player && (this.player.on("ended", (() => this.setEnded())), this.player.on("timeupdate", (e => this.setCurrentTime(e))))
        }
        setEnded() {
            this.ended = !0
        }
        setCurrentTime(e) {
            var t, r;
            this.currentTime = null === (t = null == e ? void 0 : e.detail) || void 0 === t ? void 0 : t.plyr.currentTime, this.duration = null === (r = null == e ? void 0 : e.detail) || void 0 === r ? void 0 : r.plyr.duration
        }
        disconnectedCallback() {
            this.player && (this.player.off("ended", this.setEnded), this.player.off("timeupdate", this.setCurrentTime))
        }
        render() {
            var e, t;
            return i("presto-email-overlay-controller", {
                key: "ccdb3335179aced53bfe8ba1c0f4594e5aa6051c",
                ended: this.ended,
                currentTime: this.currentTime,
                videoId: this.videoId,
                duration: this.duration,
                direction: this.direction,
                presetId: null === (e = this.preset) || void 0 === e ? void 0 : e.id,
                emailCollection: null === (t = this.preset) || void 0 === t ? void 0 : t.email_collection,
                i18n: this.i18n,
                provider: this.provider
            })
        }
    };
A.style = R;
const F = ":host{display:block}",
    H = F,
    Y = class {
        constructor(e) {
            t(this, e), this.playVideo = r(this, "playVideo", 7), this.pauseVideo = r(this, "pauseVideo", 7), this.restartVideo = r(this, "restartVideo", 7), this.emailStateChange = r(this, "emailStateChange", 7), this.ended = void 0, this.currentTime = void 0, this.duration = void 0, this.direction = void 0, this.emailCollection = void 0, this.i18n = void 0, this.videoId = void 0, this.presetId = void 0, this.provider = void 0, this.enabled = void 0, this.show = void 0, this.loading = void 0, this.error = void 0, this.percentagePassed = 0
        }
        setStorage(e) {
            window.localStorage.setItem("presto.videos.email_collection", JSON.stringify({
                [this.videoId]: e
            }))
        }
        getStorage() {
            return window.localStorage.getItem("presto.videos.email_collection")
        }
        componentWillLoad() {
            this.handleDuration()
        }
        handleDuration() {
            var e;
            this.enabled = !this.getStorage() && (null === (e = null == this ? void 0 : this.emailCollection) || void 0 === e ? void 0 : e.enabled), this.handleTimeCheck()
        }
        handleTimeCheck() {
            this.enabled && (this.getStorage() || this.checkTime())
        }
        handleShowChange() {
            this.show && this.pauseVideo.emit(!0)
        }
        checkTime() {
            var e;
            this.show = s({
                current: this.currentTime,
                duration: this.duration,
                showAfter: (null === (e = null == this ? void 0 : this.emailCollection) || void 0 === e ? void 0 : e.percentage) || 0
            })
        }
        async getNonce() {
            var e;
            return fetch(`${null===(e=null===window||void 0===window?void 0:window.prestoPlayer)||void 0===e?void 0:e.ajaxurl}?action=presto_refresh_progress_nonce`)
        }
        async submit(e) {
            var t;
            this.loading = !0, this.error = "";
            const r = await this.getNonce(),
                {
                    data: i
                } = await r.json();
            try {
                let r = await fetch(null === (t = null === window || void 0 === window ? void 0 : window.prestoPlayer) || void 0 === t ? void 0 : t.ajaxurl, {
                    method: "post",
                    body: new URLSearchParams(Object.assign({
                        action: "presto_player_email_submit",
                        nonce: i,
                        preset_id: this.presetId,
                        video_id: this.videoId,
                        provider: this.provider
                    }, (null == e ? void 0 : e.detail) || {}))
                });
                const {
                    success: o,
                    data: s
                } = await r.json();
                if (!o) throw s;
                this.setStorage("collected"), this.show = !1, this.playVideo.emit()
            } catch (e) {
                const t = null == e ? void 0 : e[0];
                t && "string" == typeof t && (this.error = t)
            } finally {
                this.loading = !1
            }
        }
        skip() {
            this.setStorage("skipped"), this.show = !1, this.playVideo.emit()
        }
        handleEmailStateChange(e) {
            this.emailStateChange.emit(e)
        }
        render() {
            var e, t, r, o, s, a, l, n;
            if (this.show) return i("presto-email-overlay-ui", {
                style: Object.assign(Object.assign({}, (null === (e = null == this ? void 0 : this.emailCollection) || void 0 === e ? void 0 : e.button_color) ? {
                    "--presto-player-button-color": `${null===(t=null==this?void 0:this.emailCollection)||void 0===t?void 0:t.button_color}`
                } : {}), (null === (r = null == this ? void 0 : this.emailCollection) || void 0 === r ? void 0 : r.button_text_color) ? {
                    "--presto-player-button-text": `${null===(o=null==this?void 0:this.emailCollection)||void 0===o?void 0:o.button_text_color}`
                } : {}),
                direction: this.direction,
                class: "email-overlay",
                headline: null === (s = null == this ? void 0 : this.emailCollection) || void 0 === s ? void 0 : s.headline,
                bottomText: null === (a = null == this ? void 0 : this.emailCollection) || void 0 === a ? void 0 : a.bottom_text,
                allowSkip: null === (l = null == this ? void 0 : this.emailCollection) || void 0 === l ? void 0 : l.allow_skip,
                buttonText: null === (n = null == this ? void 0 : this.emailCollection) || void 0 === n ? void 0 : n.button_text,
                isLoading: this.loading,
                errorMessage: this.error,
                onSubmitForm: e => this.submit(e),
                onSkip: () => this.skip(),
                i18n: this.i18n,
                provider: this.provider
            })
        }
        static get watchers() {
            return {
                duration: ["handleDuration"],
                currentTime: ["handleTimeCheck", "handleShowChange"],
                show: ["handleEmailStateChange"]
            }
        }
    };
Y.style = H;
const q = '.skin-modern.presto-player__wrapper button.plyr__control.plyr__control--overlaid{border-radius:2px;padding:3% 5%;max-width:135px;max-height:90px;box-sizing:content-box;position:absolute !important;top:50% !important;opacity:100%}.skin-modern.presto-player__wrapper button.plyr__control.plyr__control--overlaid svg{height:31px;width:37px}.skin-modern.presto-player__wrapper button.plyr__control.plyr__control--overlaid:hover,.skin-modern.presto-player__wrapper button.plyr__control.plyr__control--overlaid:focus{opacity:0.8;background:var(--plyr-color-main)}.skin-modern.presto-player__wrapper.caption-style-full .plyr:not(.plyr--hide-controls):not(.is-muted-overlay) .plyr__controls:not(:empty)~.plyr__captions{transform:translateY(calc(var(--plyr-control-spacing, 9px) * -4))}.skin-modern.presto-player__wrapper .plyr--video .plyr__controls{padding:0px}.skin-modern.presto-player__wrapper .plyr--video .plyr__controls::before{content:"";background:var(--plyr-color-main);position:absolute;top:0;left:0;right:0;bottom:0;opacity:0.75}.skin-modern.presto-player__wrapper .plyr__controls__item{z-index:1}.skin-modern.presto-player__wrapper .plyr__controls__item.plyr__control:not(.presto-player-progress__marker):not([role*=menuitem]):not(.plyr__control--back){height:36px;border-radius:0px}.skin-modern.presto-player__wrapper .plyr__controls__item.plyr__control:not(.presto-player-progress__marker):not([role*=menuitem]):not(.plyr__control--back):focus{background-color:transparent;color:white}.skin-modern.presto-player__wrapper .plyr__controls__item.presto-player-progress__marker{z-index:2}.skin-modern.presto-player__wrapper .plyr__controls__item.plyr__menu{height:36px}.skin-modern.presto-player__wrapper .plyr--full-ui.plyr--video input[type=range]::-webkit-slider-runnable-track{height:2px;color:white}.skin-modern.presto-player__wrapper .presto-player__wrapper .plyr--full-ui.plyr--video input[type=range]::-webkit-slider-runnable-track{height:2px}.skin-modern.presto-player__wrapper .plyr--video .plyr__progress__buffer{height:2px;top:11px}.skin-modern.presto-player__wrapper .plyr__progress input[type=range]{cursor:pointer}.skin-modern.presto-player__wrapper .plyr--full-ui input[type=range]::-webkit-slider-thumb{top:1px;height:var(--plyr-range-thumb-height, 8px);width:var(--plyr-range-thumb-height, 8px);box-shadow:0px 0px 5px white}.skin-modern.presto-player__wrapper .plyr--full-ui input[type=range]::-webkit-slider-thumb:hover{transform:scale(1.5)}.skin-modern.presto-player__wrapper .plyr__controls .plyr__controls__item{margin:0px}.skin-modern.presto-player__wrapper .plyr__volume{width:auto}.skin-modern.presto-player__wrapper .plyr__volume input[type=range]{width:55px}.skin-modern.presto-player__wrapper .plyr__volume input[type=range]{cursor:pointer}.skin-modern.presto-player__wrapper .presto-player__muted-overlay .plyr__control.plyr__control--overlaid{border-radius:2px}.skin-modern.presto-player__wrapper .presto-player__muted-overlay .plyr__control.plyr__control--overlaid svg{height:40px;width:50px}.skin-modern.presto-player__wrapper .plyr__controls .plyr__controls__item[data-plyr=rewind] svg,.skin-modern.presto-player__wrapper .plyr__controls .plyr__controls__item[data-plyr=fast-forward] svg,.skin-modern.presto-player__wrapper .plyr__controls .plyr__controls__item[data-plyr=fullscreen] svg{width:22px;height:22px}@media screen and (max-width: 480px){.skin-modern.presto-player__wrapper .plyr__control--overlaid svg{height:18px;width:16px}}',
    J = q,
    U = class {
        constructor(e) {
            t(this, e)
        }
        render() {
            return i(o, {
                key: "b14a9f10f17e2032587add142c35e83a09362b9b"
            }, i("slot", {
                key: "190b1db447aede7bf8822a363c90d2ed0e98e0f1"
            }))
        }
    };
U.style = J;
const X = ":host{display:block}",
    Z = X,
    G = class {
        constructor(e) {
            t(this, e), this.playVideo = r(this, "playVideo", 7), this.mutedPreview = void 0, this.mutedOverlay = void 0, this.preset = void 0
        }
        render() {
            var e, t, r, o, s, a, l, n, p;
            return i("div", {
                key: "d65899750134c7f2e369720c2d035c27825e1ce4",
                class: "presto-player__muted-overlay",
                onClick: () => {
                    this.mutedPreview = !1, this.playVideo.emit()
                }
            }, (null === (e = this.preset) || void 0 === e ? void 0 : e["play-large"]) && i("div", {
                key: "231db6abba50bbe06312e3c6a162c651cb1408a8",
                class: "plyr__control plyr__control--overlaid",
                "data-plyr": "play",
                "aria-label": "Play",
                part: "muted-overlay-play"
            }, i("svg", {
                key: "4bd21f713381abfafbcab0e26e7af9fefd3c10de",
                id: "plyr-play",
                viewBox: "0 0 18 18"
            }, i("path", {
                key: "6ffa3046759503f5a46a7f6fcaef328494868811",
                d: "M15.562 8.1L3.87.225c-.818-.562-1.87 0-1.87.9v15.75c0 .9 1.052 1.462 1.87.9L15.563 9.9c.584-.45.584-1.35 0-1.8z"
            })), i("span", {
                key: "c00867bba01ae310176b7609bcb3cfb4218ef125",
                class: "plyr__sr-only"
            }, "Play")), (null === (t = this.mutedOverlay) || void 0 === t ? void 0 : t.enabled) && (null === (r = this.mutedOverlay) || void 0 === r ? void 0 : r.src) ? i("div", {
                class: "presto-player__overlay is-image",
                part: "muted-overlay-image",
                style: {
                    width: `${(null===(o=this.mutedOverlay)||void 0===o?void 0:o.width)||50}%`,
                    left: 100 * ((null === (a = null === (s = this.mutedOverlay) || void 0 === s ? void 0 : s.focalPoint) || void 0 === a ? void 0 : a.x) || .5) + "%",
                    top: 100 * ((null === (n = null === (l = this.mutedOverlay) || void 0 === l ? void 0 : l.focalPoint) || void 0 === n ? void 0 : n.y) || .5) + "%"
                }
            }, i("img", {
                src: null === (p = this.mutedOverlay) || void 0 === p ? void 0 : p.src,
                style: {
                    transform: "translateX(-50%) translateY(-50%)"
                }
            })) : "")
        }
    };
G.style = Z;
const K = class {
        constructor(e) {
            t(this, e), this.value = void 0, this.player = void 0, this.markers = void 0, this.currentMarkerLocation = -1
        }
        onSearch(e) {
            if (this.value = e.detail, "" === this.value) u(this.player), this.markers = [];
            else {
                const e = c(this.player, this.value);
                this.player.config.markers = {
                    enabled: !0,
                    points: e
                }, this.markers = e, _(this.player, e)
            }
        }
        onPreviousNav() {
            this.currentMarkerLocation - 1 < 0 ? this.currentMarkerLocation = this.markers.length - 1 : this.currentMarkerLocation--, this.player.currentTime = this.markers[this.currentMarkerLocation].time
        }
        onFocusChange(e) {
            var t, r;
            !0 === (null == e ? void 0 : e.detail) ? this.player.config.hideControls = !1 : this.player.config.hideControls = (null === (r = null === (t = this.player.config) || void 0 === t ? void 0 : t.preset) || void 0 === r ? void 0 : r.auto_hide) || !1
        }
        onNextNav() {
            this.currentMarkerLocation + 1 > this.markers.length - 1 ? this.currentMarkerLocation = 0 : this.currentMarkerLocation++, this.player.currentTime = this.markers[this.currentMarkerLocation].time
        }
        render() {
            var e, t, r, o, s, a, l, n;
            if (!this.player) return "";
            if (!(null === (r = null === (t = null === (e = this.player) || void 0 === e ? void 0 : e.media) || void 0 === t ? void 0 : t.textTracks) || void 0 === r ? void 0 : r.length) || 0 === (null === (a = null === (s = null === (o = this.player) || void 0 === o ? void 0 : o.media) || void 0 === s ? void 0 : s.textTracks) || void 0 === a ? void 0 : a.length)) return "";
            const p = null === (l = this.player.config.preset.search) || void 0 === l ? void 0 : l.placeholder;
            return i("presto-search-bar-ui", {
                value: this.value,
                hasNavigation: (null === (n = this.markers) || void 0 === n ? void 0 : n.length) > 1,
                placeholder: p,
                onNextNav: () => this.onNextNav(),
                onPreviousNav: () => this.onPreviousNav(),
                onSearch: e => this.onSearch(e),
                onFocusChange: e => this.onFocusChange(e)
            })
        }
    },
    Q = ".skin-stacked .plyr__controls{flex-wrap:wrap}.skin-stacked .presto-player-progress__marker{transform:scale(0.75)}.skin-stacked .plyr__controls{justify-content:flex-start}.skin-stacked .plyr__controls__item.plyr__progress__container{order:-1;flex:1 0 100%}.skin-stacked .plyr__controls__item.plyr__progress__container+:not(.plyr__time),.skin-stacked .plyr__controls__item.plyr__progress__container+.plyr__time+*{margin-left:auto}.skin-stacked .plyr__controls .plyr__controls__item:first-child{margin:0}.skin-stacked .plyr__progress{height:19px;display:flex;align-items:center}.skin-stacked .plyr__progress .plyr__progress__buffer{height:3px;transition:all 0.25s ease;position:absolute;top:calc(50% + 1px)}.skin-stacked .plyr__progress input[type=range]::-moz-range-track{height:3px;transition:all 0.25s ease}.skin-stacked .plyr__progress input[type=range]::-webkit-slider-runnable-track{height:3px;transition:all 0.25s ease}.skin-stacked .plyr__progress input[type=range]::-ms-track{height:3px;transition:all 0.25s ease}.skin-stacked .plyr__progress input[type=range]::-ms-fill-upper{height:3px;transition:all 0.25s ease}.skin-stacked .plyr__progress input[type=range]::-ms-fill-lower{height:3px;transition:height 0.25s ease}.skin-stacked .plyr__progress input[type=range]::-webkit-slider-thumb{visibility:hidden;opacity:0;transition:opacity 0.25s ease}.skin-stacked .plyr__progress input[type=range]::-moz-range-thumb{visibility:hidden;opacity:0;transition:opacity 0.25s ease}.skin-stacked .plyr__progress input[type=range]::-ms-thumb{visibility:hidden;opacity:0;transition:opacity 0.25s ease}.skin-stacked .plyr__progress__container:hover .presto-player-progress__marker{transform:scale(1)}.skin-stacked .plyr__progress__container:hover .plyr__progress .plyr__progress__buffer{height:5px;top:50%}.skin-stacked .plyr__progress__container:hover .plyr__progress input[type=range]{overflow:visible}.skin-stacked .plyr__progress__container:hover .plyr__progress input[type=range]::-moz-range-track{height:5px}.skin-stacked .plyr__progress__container:hover .plyr__progress input[type=range]::-webkit-slider-runnable-track{height:5px}.skin-stacked .plyr__progress__container:hover .plyr__progress input[type=range]::-ms-track{height:5px}.skin-stacked .plyr__progress__container:hover .plyr__progress input[type=range]::-ms-fill-upper{height:5px}.skin-stacked .plyr__progress__container:hover .plyr__progress input[type=range]::-ms-fill-lower{height:5px}.skin-stacked .plyr__progress__container:hover .plyr__progress input[type=range]::-webkit-slider-thumb{visibility:visible;opacity:1}.skin-stacked .plyr__progress__container:hover .plyr__progress input[type=range]::-moz-range-thumb{visibility:visible;opacity:1}.skin-stacked .plyr__progress__container:hover .plyr__progress input[type=range]::-ms-thumb{visibility:visible;opacity:1}",
    tt = Q,
    it = class {
        constructor(e) {
            t(this, e)
        }
        render() {
            return i(o, {
                key: "1f879dbd91a7b1b49bcdc94b3299000023a9f914"
            }, i("slot", {
                key: "69281f1405ff6ffdad92b63969811c0a6ac8be1f"
            }))
        }
    };
it.style = tt;
const et = ":host{display:block}",
    rt = et,
    ot = class {
        constructor(e) {
            t(this, e), this.src = void 0, this.poster = void 0, this.player = void 0, this.getRef = void 0
        }
        getId(e) {
            const t = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/.exec(e || "");
            return (null == t ? void 0 : t[5]) || ""
        }
        parseHash(e) {
            const t = e.match(/^.*(?:vimeo.com\/|video\/)(?:\d+)(?:\?.*\&*h=|\/)+(?<hash>[\d,a-f]+)/);
            return t ? t.groups.hash : null
        }
        render() {
            if (this.src) return p() ? i("div", {
                class: "presto-iframe-fallback-container"
            }, i("iframe", {
                src: `https://player.vimeo.com/video/${this.getId(this.src)}?h=${this.parseHash(this.src)}&amp;loop=false&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=0&amp;gesture=media`,
                allowFullScreen: !0,
                allowTransparency: !0,
                allow: "autoplay",
                style: {
                    width: "100%"
                },
                class: "presto-fallback-iframe"
            })) : i("div", {
                class: "plyr__video-embed",
                part: "embed",
                ref: this.getRef,
                "data-plyr-provider": "vimeo",
                "data-plyr-embed-id": this.getId(this.src),
                "data-plyr-embed-hash": this.parseHash(this.src)
            })
        }
    };
ot.style = rt;
const st = ":host{display:block}.fallback-container{position:relative;padding-bottom:56.25%;padding-top:30px;height:0;overflow:hidden}.fallback-container iframe,.fallback-container object,.fallback-container embed{position:absolute;top:0;left:0;width:100%;height:100%}@supports not (aspect-ratio: 16/9){.plyr__video-embed,.plyr__video-wrapper--fixed-ratio{height:0 !important;padding-bottom:calc(100% / (var(--presto-player-aspect-ratio, 16/9)));position:relative}}.plyr--youtube{aspect-ratio:var(--presto-player-aspect-ratio, auto)}",
    nt = st,
    at = class {
        constructor(e) {
            t(this, e), this.reload = r(this, "reload", 7), this.src = void 0, this.poster = void 0, this.lazyLoad = void 0, this.player = void 0, this.getRef = void 0, this.reloadPlayer = void 0, this.isWebView = void 0
        }
        handlePlayerChange() {
            this.player && (this.fixes(), this.setPoster())
        }
        fixes() {
            this.player.once("statechange", (e => {
                var t, r, i, o, s;
                1 === e.detail.code && ((null === (s = null === (o = null === (i = null === (r = null === (t = null == e ? void 0 : e.detail) || void 0 === t ? void 0 : t.plyr) || void 0 === r ? void 0 : r.config) || void 0 === i ? void 0 : i.blockAttributes) || void 0 === o ? void 0 : o.mutedPreview) || void 0 === s ? void 0 : s.enabled) || (this.player.muted = !1))
            }))
        }
        getId(e) {
            var t;
            const r = (e || "").match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/);
            return r && 11 === (null === (t = null == r ? void 0 : r[2]) || void 0 === t ? void 0 : t.length) ? r[2] : null
        }
        loadPlayer() {
            this.lazyLoad = !1, this.reloadPlayer = !0
        }
        componentDidRender() {
            this.reloadPlayer && (this.reloadPlayer = !1, this.reload.emit("play"))
        }
        setWebView() {
            var e;
            let t = null === (e = window.navigator) || void 0 === e ? void 0 : e.standalone,
                r = window.navigator.userAgent.toLowerCase(),
                i = /safari/.test(r),
                o = /iphone|ipod|ipad/.test(r);
            this.isWebView = o ? !t && !i : r.includes("wv")
        }
        loadImage(e, t = 1) {
            return new Promise(((r, i) => {
                const o = new Image,
                    s = () => {
                        delete o.onload, delete o.onerror, (o.naturalWidth >= t ? r : i)(e)
                    };
                Object.assign(o, {
                    onload: s,
                    onerror: s,
                    src: e
                })
            }))
        }
        setPoster() {
            if (!this.player.poster) {
                let e = e => `https://i.ytimg.com/vi/${this.getId(this.src)}/${e}default.jpg`;
                this.loadImage(e("maxres"), 121).catch((() => this.loadImage(e("sd"), 121))).catch((() => this.loadImage(e("hq"), 121))).then((e => this.player.poster = e)).catch((() => {}))
            }
        }
        componentWillLoad() {
            this.setWebView(), this.lazyLoad && d() && (this.lazyLoad = !1)
        }
        render() {
            return this.isWebView ? i("div", {
                class: "fallback-container"
            }, i("iframe", {
                src: this.src,
                allowFullScreen: !0,
                allowtransparency: !0,
                allow: "autoplay"
            })) : this.lazyLoad ? i("div", null, i("presto-video", {
                part: "video",
                getRef: this.getRef,
                src: "",
                provider: "youtube"
            }), i("div", {
                class: "presto-player__play-cover",
                onClick: () => this.loadPlayer()
            })) : i("div", {
                class: "plyr__video-embed",
                part: "embed",
                ref: this.getRef,
                "data-plyr-provider": "youtube",
                "data-plyr-embed-id": this.getId(this.src)
            })
        }
        static get watchers() {
            return {
                player: ["handlePlayerChange"]
            }
        }
    };
at.style = nt;
export {
    f as presto_action_bar, m as presto_action_bar_controller, x as presto_audio, C as presto_bunny, T as presto_business_skin, z as presto_cta_overlay, E as presto_cta_overlay_controller, W as presto_dynamic_overlay_ui, I as presto_dynamic_overlays, A as presto_email_overlay, Y as presto_email_overlay_controller, U as presto_modern_skin, G as presto_muted_overlay, K as presto_search_bar, it as presto_stacked_skin, ot as presto_vimeo, at as presto_youtube
};