const e = "web-components",
    t = {
        allRenderFn: !0,
        appendChildSlotFix: !1,
        asyncLoading: !0,
        asyncQueue: !1,
        attachStyles: !0,
        cloneNodeFix: !1,
        cmpDidLoad: !0,
        cmpDidRender: !0,
        cmpDidUnload: !1,
        cmpDidUpdate: !1,
        cmpShouldUpdate: !1,
        cmpWillLoad: !0,
        cmpWillRender: !1,
        cmpWillUpdate: !1,
        connectedCallback: !1,
        constructableCSS: !0,
        cssAnnotations: !0,
        devTools: !1,
        disconnectedCallback: !0,
        element: !1,
        event: !0,
        experimentalScopedSlotChanges: !1,
        experimentalSlotFixes: !1,
        formAssociated: !1,
        hasRenderFn: !0,
        hostListener: !0,
        hostListenerTarget: !0,
        hostListenerTargetBody: !1,
        hostListenerTargetDocument: !1,
        hostListenerTargetParent: !1,
        hostListenerTargetWindow: !0,
        hotModuleReplacement: !1,
        hydrateClientSide: !1,
        hydrateServerSide: !1,
        hydratedAttribute: !1,
        hydratedClass: !0,
        initializeNextTick: !1,
        invisiblePrehydration: !0,
        isDebug: !1,
        isDev: !1,
        isTesting: !1,
        lazyLoad: !0,
        lifecycle: !0,
        lifecycleDOMEvents: !1,
        member: !0,
        method: !0,
        mode: !1,
        observeAttribute: !0,
        profile: !1,
        prop: !0,
        propBoolean: !0,
        propMutable: !0,
        propNumber: !0,
        propString: !0,
        reflect: !0,
        scoped: !1,
        scopedSlotTextContentFix: !1,
        scriptDataOpts: !1,
        shadowDelegatesFocus: !1,
        shadowDom: !0,
        slot: !0,
        slotChildNodesFix: !1,
        slotRelocation: !0,
        state: !0,
        style: !0,
        svg: !0,
        taskQueue: !0,
        transformTagName: !1,
        updatable: !0,
        vdomAttribute: !0,
        vdomClass: !0,
        vdomFunctional: !0,
        vdomKey: !0,
        vdomListener: !0,
        vdomPropOrAttr: !0,
        vdomRef: !0,
        vdomRender: !0,
        vdomStyle: !0,
        vdomText: !0,
        vdomXlink: !0,
        watchCallback: !0
    };
let n, s, l, o = !1,
    i = !1,
    f = !1,
    c = !1,
    r = !1;
const u = (e, t = "") => () => {},
    a = (e, t) => () => {},
    d = "{visibility:hidden}.hydrated{visibility:inherit}",
    v = "slot-fb{display:contents}slot-fb[hidden]{display:none}",
    p = "http://www.w3.org/1999/xlink",
    m = {},
    h = "http://www.w3.org/2000/svg",
    y = "http://www.w3.org/1999/xhtml",
    b = e => null != e,
    w = e => "object" == (e = typeof e) || "function" === e;

function g(e) {
    var t, n, s;
    return null !== (s = null === (n = null === (t = e.head) || void 0 === t ? void 0 : t.querySelector('meta[name="csp-nonce"]')) || void 0 === n ? void 0 : n.getAttribute("content")) && void 0 !== s ? s : void 0
}
const $ = (e, t, ...n) => {
        let s = null,
            o = null,
            l = null,
            r = !1,
            i = !1;
        const a = [],
            c = t => {
                for (let n = 0; n < t.length; n++) s = t[n], Array.isArray(s) ? c(s) : null != s && "boolean" != typeof s && ((r = "function" != typeof e && !w(s)) && (s = String(s)), r && i ? a[a.length - 1].t += s : a.push(r ? S(null, s) : s), i = r)
            };
        if (c(n), t) {
            t.key && (o = t.key), t.name && (l = t.name); {
                const e = t.className || t.class;
                e && (t.class = "object" != typeof e ? e : Object.keys(e).filter((t => e[t])).join(" "))
            }
        }
        if ("function" == typeof e) return e(null === t ? {} : t, a, j);
        const d = S(e, null);
        return d.l = t, a.length > 0 && (d.o = a), d.i = o, d.u = l, d
    },
    S = (e, t) => ({
        v: 0,
        p: e,
        t: t,
        m: null,
        o: null,
        l: null,
        i: null,
        u: null
    }),
    k = {},
    C = e => e && e.p === k,
    j = {
        forEach: (e, t) => e.map(O).forEach(t),
        map: (e, t) => e.map(O).map(t).map(x)
    },
    O = e => ({
        vattrs: e.l,
        vchildren: e.o,
        vkey: e.i,
        vname: e.u,
        vtag: e.p,
        vtext: e.t
    }),
    x = e => {
        if ("function" == typeof e.vtag) {
            const t = Object.assign({}, e.vattrs);
            return e.vkey && (t.key = e.vkey), e.vname && (t.name = e.vname), $(e.vtag, t, ...e.vchildren || [])
        }
        const t = S(e.vtag, e.vtext);
        return t.l = e.vattrs, t.o = e.vchildren, t.i = e.vkey, t.u = e.vname, t
    },
    T = (e, t) => null == e || w(e) ? e : 4 & t ? "false" !== e && ("" === e || !!e) : 2 & t ? parseFloat(e) : 1 & t ? String(e) : e,
    L = e => Fe(e).$hostElement$,
    R = (e, t, n) => {
        const s = L(e);
        return {
            emit: e => D(s, t, {
                bubbles: !!(4 & n),
                composed: !!(2 & n),
                cancelable: !!(1 & n),
                detail: e
            })
        }
    },
    D = (e, t, n) => {
        const s = He.ce(t, n);
        return e.dispatchEvent(s), s
    },
    F = new WeakMap,
    M = (e, t, n) => {
        let s = We.get(e);
        Ie && n ? (s = s || new CSSStyleSheet, "string" == typeof s ? s = t : s.replaceSync(t)) : s = t, We.set(e, s)
    },
    A = (e, t, n) => {
        var s;
        const o = P(t),
            l = We.get(o);
        if (e = 11 === e.nodeType ? e : Be, l)
            if ("string" == typeof l) {
                e = e.head || e;
                let n, r = F.get(e);
                if (r || F.set(e, r = new Set), !r.has(o)) {
                    {
                        n = Be.createElement("style"), n.innerHTML = l;
                        const t = null !== (s = He.h) && void 0 !== s ? s : g(Be);
                        null != t && n.setAttribute("nonce", t), e.insertBefore(n, e.querySelector("link"))
                    }
                    4 & t.v && (n.innerHTML += v), r && r.add(o)
                }
            } else e.adoptedStyleSheets.includes(l) || (e.adoptedStyleSheets = [...e.adoptedStyleSheets, l]);
        return o
    },
    N = e => {
        const t = e.$,
            n = e.$hostElement$,
            s = t.v,
            o = (t.S, () => {}),
            l = A(n.shadowRoot ? n.shadowRoot : n.getRootNode(), t);
        10 & s && (n["s-sc"] = l, n.classList.add(l + "-h")), o()
    },
    P = (e, t) => "sc-" + e.S,
    U = (e, t, n, s, o, l) => {
        if (n !== s) {
            let r = Ne(e, t),
                i = t.toLowerCase();
            if ("class" === t) {
                const t = e.classList,
                    o = W(n),
                    l = W(s);
                t.remove(...o.filter((e => e && !l.includes(e)))), t.add(...l.filter((e => e && !o.includes(e))))
            } else if ("style" === t) {
                for (const t in n) s && null != s[t] || (t.includes("-") ? e.style.removeProperty(t) : e.style[t] = "");
                for (const t in s) n && s[t] === n[t] || (t.includes("-") ? e.style.setProperty(t, s[t]) : e.style[t] = s[t])
            } else if ("key" === t);
            else if ("ref" === t) s && s(e);
            else if (r || "o" !== t[0] || "n" !== t[1]) {
                const a = w(s);
                if ((r || a && null !== s) && !o) try {
                    if (e.tagName.includes("-")) e[t] = s;
                    else {
                        const o = null == s ? "" : s;
                        "list" === t ? r = !1 : null != n && e[t] == o || (e[t] = o)
                    }
                } catch (e) {}
                let c = !1;
                i !== (i = i.replace(/^xlink\:?/, "")) && (t = i, c = !0), null == s || !1 === s ? !1 === s && "" !== e.getAttribute(t) || (c ? e.removeAttributeNS(p, t) : e.removeAttribute(t)) : (!r || 4 & l || o) && !a && (s = !0 === s ? "" : s, c ? e.setAttributeNS(p, t, s) : e.setAttribute(t, s))
            } else if (t = "-" === t[2] ? t.slice(3) : Ne(ze, i) ? i.slice(2) : i[2] + t.slice(3), n || s) {
                const o = t.endsWith(z);
                t = t.replace(B, ""), n && He.rel(e, t, n, o), s && He.ael(e, t, s, o)
            }
        }
    },
    E = /\s/,
    W = e => e ? e.split(E) : [],
    z = "Capture",
    B = new RegExp(z + "$"),
    H = (e, t, n, s) => {
        const o = 11 === t.m.nodeType && t.m.host ? t.m.host : t.m,
            l = e && e.l || m,
            r = t.l || m;
        for (s of Q(Object.keys(l))) s in r || U(o, s, l[s], void 0, n, t.v);
        for (s of Q(Object.keys(r))) U(o, s, l[s], r[s], n, t.v)
    };

function Q(e) {
    return e.includes("ref") ? [...e.filter((e => "ref" !== e)), "ref"] : e
}
const q = (e, t, r, i) => {
        var a;
        const d = t.o[r];
        let u, p, v, m = 0;
        if (o || (f = !0, "slot" === d.p && (n && i.classList.add(n + "-s"), d.v |= d.o ? 2 : 1)), null !== d.t) u = d.m = Be.createTextNode(d.t);
        else if (1 & d.v) u = d.m = Be.createTextNode("");
        else {
            if (c || (c = "svg" === d.p), u = d.m = Be.createElementNS(c ? h : y, 2 & d.v ? "slot-fb" : d.p), c && "foreignObject" === d.p && (c = !1), H(null, d, c), b(n) && u["s-si"] !== n && u.classList.add(u["s-si"] = n), d.o)
                for (m = 0; m < d.o.length; ++m) p = q(e, d, m, u), p && u.appendChild(p);
            "svg" === d.p ? c = !1 : "foreignObject" === u.tagName && (c = !0)
        }
        return u["s-hn"] = l, 3 & d.v && (u["s-sr"] = !0, u["s-cr"] = s, u["s-sn"] = d.u || "", u["s-rf"] = null === (a = d.l) || void 0 === a ? void 0 : a.ref, v = e && e.o && e.o[r], v && v.p === d.p && e.m && I(e.m, !1)), u
    },
    I = (e, n) => {
        He.v |= 1;
        const s = Array.from(e.childNodes);
        if (e["s-sr"] && t.experimentalSlotFixes) {
            let t = e;
            for (; t = t.nextSibling;) t && t["s-sn"] === e["s-sn"] && t["s-sh"] === l && s.push(t)
        }
        for (let e = s.length - 1; e >= 0; e--) {
            const t = s[e];
            t["s-hn"] !== l && t["s-ol"] && (J(t).insertBefore(t, G(t)), t["s-ol"].remove(), t["s-ol"] = void 0, t["s-sh"] = void 0, f = !0), n && I(t, n)
        }
        He.v &= -2
    },
    K = (e, t, n, s, o, r) => {
        let i, a = e["s-cr"] && e["s-cr"].parentNode || e;
        for (a.shadowRoot && a.tagName === l && (a = a.shadowRoot); o <= r; ++o) s[o] && (i = q(null, n, o, e), i && (s[o].m = i, a.insertBefore(i, G(t))))
    },
    V = (e, t, n) => {
        for (let s = t; s <= n; ++s) {
            const t = e[s];
            if (t) {
                const e = t.m;
                se(t), e && (i = !0, e["s-ol"] ? e["s-ol"].remove() : I(e, !0), e.remove())
            }
        }
    },
    X = (e, t, n, s, o = !1) => {
        let l, r, i = 0,
            a = 0,
            c = 0,
            d = 0,
            u = t.length - 1,
            p = t[0],
            f = t[u],
            h = s.length - 1,
            v = s[0],
            m = s[h];
        for (; i <= u && a <= h;)
            if (null == p) p = t[++i];
            else if (null == f) f = t[--u];
        else if (null == v) v = s[++a];
        else if (null == m) m = s[--h];
        else if (_(p, v, o)) Y(p, v, o), p = t[++i], v = s[++a];
        else if (_(f, m, o)) Y(f, m, o), f = t[--u], m = s[--h];
        else if (_(p, m, o)) "slot" !== p.p && "slot" !== m.p || I(p.m.parentNode, !1), Y(p, m, o), e.insertBefore(p.m, f.m.nextSibling), p = t[++i], m = s[--h];
        else if (_(f, v, o)) "slot" !== p.p && "slot" !== m.p || I(f.m.parentNode, !1), Y(f, v, o), e.insertBefore(f.m, p.m), f = t[--u], v = s[++a];
        else {
            for (c = -1, d = i; d <= u; ++d)
                if (t[d] && null !== t[d].i && t[d].i === v.i) {
                    c = d;
                    break
                }
            c >= 0 ? (r = t[c], r.p !== v.p ? l = q(t && t[a], n, c, e) : (Y(r, v, o), t[c] = void 0, l = r.m), v = s[++a]) : (l = q(t && t[a], n, a, e), v = s[++a]), l && J(p.m).insertBefore(l, G(p.m))
        }
        i > u ? K(e, null == s[h + 1] ? null : s[h + 1].m, n, s, a, h) : a > h && V(t, i, u)
    },
    _ = (e, t, n = !1) => e.p === t.p && ("slot" === e.p ? e.u === t.u : !!n || e.i === t.i),
    G = e => e && e["s-ol"] || e,
    J = e => (e["s-ol"] ? e["s-ol"] : e).parentNode,
    Y = (e, t, n = !1) => {
        const s = t.m = e.m,
            l = e.o,
            r = t.o,
            i = t.p,
            a = t.t;
        let d;
        null === a ? (c = "svg" === i || "foreignObject" !== i && c, ("slot" !== i || o) && H(e, t, c), null !== l && null !== r ? X(s, l, t, r, n) : null !== r ? (null !== e.t && (s.textContent = ""), K(s, null, t, r, 0, r.length - 1)) : null !== l && V(l, 0, l.length - 1), c && "svg" === i && (c = !1)) : (d = s["s-cr"]) ? d.parentNode.textContent = a : e.t !== a && (s.data = a)
    },
    Z = e => {
        const t = e.childNodes;
        for (const e of t)
            if (1 === e.nodeType) {
                if (e["s-sr"]) {
                    const n = e["s-sn"];
                    e.hidden = !1;
                    for (const s of t)
                        if (s !== e)
                            if (s["s-hn"] !== e["s-hn"] || "" !== n) {
                                if (1 === s.nodeType && (n === s.getAttribute("slot") || n === s["s-sn"])) {
                                    e.hidden = !0;
                                    break
                                }
                            } else if (1 === s.nodeType || 3 === s.nodeType && "" !== s.textContent.trim()) {
                        e.hidden = !0;
                        break
                    }
                }
                Z(e)
            }
    },
    ee = [],
    te = e => {
        let n, s, o;
        for (const l of e.childNodes) {
            if (l["s-sr"] && (n = l["s-cr"]) && n.parentNode) {
                s = n.parentNode.childNodes;
                const e = l["s-sn"];
                for (o = s.length - 1; o >= 0; o--)
                    if (n = s[o], !n["s-cn"] && !n["s-nr"] && n["s-hn"] !== l["s-hn"] && !t.experimentalSlotFixes)
                        if (ne(n, e)) {
                            let t = ee.find((e => e.k === n));
                            i = !0, n["s-sn"] = n["s-sn"] || e, t ? (t.k["s-sh"] = l["s-hn"], t.C = l) : (n["s-sh"] = l["s-hn"], ee.push({
                                C: l,
                                k: n
                            })), n["s-sr"] && ee.map((e => {
                                ne(e.k, n["s-sn"]) && (t = ee.find((e => e.k === n)), t && !e.C && (e.C = t.C))
                            }))
                        } else ee.some((e => e.k === n)) || ee.push({
                            k: n
                        })
            }
            1 === l.nodeType && te(l)
        }
    },
    ne = (e, t) => 1 === e.nodeType ? null === e.getAttribute("slot") && "" === t || e.getAttribute("slot") === t : e["s-sn"] === t || "" === t,
    se = e => {
        e.l && e.l.ref && e.l.ref(null), e.o && e.o.map(se)
    },
    le = (e, t, r = !1) => {
        var a, c, d, u;
        const p = e.$hostElement$,
            h = e.$,
            v = e.j || S(null, null),
            m = C(t) ? t : $(null, null, t);
        if (l = p.tagName, h.O && (m.l = m.l || {}, h.O.map((([e, t]) => m.l[t] = p[e]))), r && m.l)
            for (const e of Object.keys(m.l)) p.hasAttribute(e) && !["key", "ref", "style", "class"].includes(e) && (m.l[e] = p[e]);
        if (m.p = null, m.v |= 4, e.j = m, m.m = v.m = p.shadowRoot || p, n = p["s-sc"], o = 0 != (1 & h.v), s = p["s-cr"], i = !1, Y(v, m, r), He.v |= 1, f) {
            te(m.m);
            for (const e of ee) {
                const t = e.k;
                if (!t["s-ol"]) {
                    const e = Be.createTextNode("");
                    e["s-nr"] = t, t.parentNode.insertBefore(t["s-ol"] = e, t)
                }
            }
            for (const e of ee) {
                const t = e.k,
                    n = e.C;
                if (n) {
                    const e = n.parentNode;
                    let s = n.nextSibling; {
                        let n = null === (a = t["s-ol"]) || void 0 === a ? void 0 : a.previousSibling;
                        for (; n;) {
                            let o = null !== (c = n["s-nr"]) && void 0 !== c ? c : null;
                            if (o && o["s-sn"] === t["s-sn"] && e === o.parentNode) {
                                for (o = o.nextSibling; o === t || (null == o ? void 0 : o["s-sr"]);) o = null == o ? void 0 : o.nextSibling;
                                if (!o || !o["s-nr"]) {
                                    s = o;
                                    break
                                }
                            }
                            n = n.previousSibling
                        }
                    }(!s && e !== t.parentNode || t.nextSibling !== s) && t !== s && (!t["s-hn"] && t["s-ol"] && (t["s-hn"] = t["s-ol"].parentNode.nodeName), e.insertBefore(t, s), 1 === t.nodeType && (t.hidden = null !== (d = t["s-ih"]) && void 0 !== d && d)), t && "function" == typeof n["s-rf"] && n["s-rf"](t)
                } else 1 === t.nodeType && (r && (t["s-ih"] = null !== (u = t.hidden) && void 0 !== u && u), t.hidden = !0)
            }
        }
        i && Z(m.m), He.v &= -2, ee.length = 0, s = void 0
    },
    oe = (e, t) => {
        t && !e.T && t["s-p"] && t["s-p"].push(new Promise((t => e.T = t)))
    },
    ie = (e, t) => {
        if (e.v |= 16, !(4 & e.v)) return oe(e, e.L), Ye((() => fe(e, t)));
        e.v |= 512
    },
    fe = (e, t) => {
        const n = (e.$.S, () => {}),
            s = e.R;
        let o;
        return t && (e.v |= 256, e.D && (e.D.map((([e, t]) => pe(s, e, t))), e.D = void 0), o = pe(s, "componentWillLoad")), n(), ce(o, (() => ue(e, s, t)))
    },
    ce = (e, t) => re(e) ? e.then(t) : t(),
    re = e => e instanceof Promise || e && e.then && "function" == typeof e.then,
    ue = async (e, t, n) => {
        var s;
        const o = e.$hostElement$,
            l = (e.$.S, () => {}),
            r = o["s-rc"];
        n && N(e);
        const i = (e.$.S, () => {});
        ae(e, t, o, n), r && (r.map((e => e())), o["s-rc"] = void 0), i(), l(); {
            const t = null !== (s = o["s-p"]) && void 0 !== s ? s : [],
                n = () => de(e);
            0 === t.length ? n() : (Promise.all(t).then(n), e.v |= 4, t.length = 0)
        }
    },
    ae = (e, t, n, s) => {
        try {
            t = t.render(), e.v &= -17, e.v |= 2, le(e, t, s)
        } catch (t) {
            Pe(t, e.$hostElement$)
        }
        return null
    },
    de = e => {
        e.$.S;
        const t = e.$hostElement$,
            n = e.R,
            s = e.L;
        pe(n, "componentDidRender"), 64 & e.v || (e.v |= 64, me(t), pe(n, "componentDidLoad"), e.F(t), s || ve()), e.M(t), e.T && (e.T(), e.T = void 0), 512 & e.v && Je((() => ie(e, !1))), e.v &= -517
    },
    ve = t => {
        me(Be.documentElement), Je((() => D(ze, "appload", {
            detail: {
                namespace: e
            }
        })))
    },
    pe = (e, t, n) => {
        if (e && e[t]) try {
            return e[t](n)
        } catch (e) {
            Pe(e)
        }
    },
    me = e => e.classList.add("hydrated"),
    he = (e, t) => Fe(e).A.get(t),
    ye = (e, t, n, s) => {
        const o = Fe(e),
            l = o.$hostElement$,
            r = o.A.get(t),
            i = o.v,
            a = o.R;
        n = T(n, s.N[t][0]);
        const c = Number.isNaN(r) && Number.isNaN(n);
        if ((!(8 & i) || void 0 === r) && n !== r && !c && (o.A.set(t, n), a)) {
            if (s.P && 128 & i) {
                const e = s.P[t];
                e && e.map((e => {
                    try {
                        a[e](n, r, t)
                    } catch (e) {
                        Pe(e, l)
                    }
                }))
            }
            2 == (18 & i) && ie(o, !1)
        }
    },
    be = (e, t, n) => {
        var s;
        const o = e.prototype;
        if (t.N) {
            e.watchers && (t.P = e.watchers);
            const l = Object.entries(t.N);
            if (l.map((([e, [s]]) => {
                    31 & s || 2 & n && 32 & s ? Object.defineProperty(o, e, {
                        get() {
                            return he(this, e)
                        },
                        set(n) {
                            ye(this, e, n, t)
                        },
                        configurable: !0,
                        enumerable: !0
                    }) : 1 & n && 64 & s && Object.defineProperty(o, e, {
                        value(...t) {
                            var n;
                            const s = Fe(this);
                            return null === (n = null == s ? void 0 : s.U) || void 0 === n ? void 0 : n.then((() => {
                                var n;
                                return null === (n = s.R) || void 0 === n ? void 0 : n[e](...t)
                            }))
                        }
                    })
                })), 1 & n) {
                const n = new Map;
                o.attributeChangedCallback = function(e, s, l) {
                    He.jmp((() => {
                        var r;
                        const i = n.get(e);
                        if (this.hasOwnProperty(i)) l = this[i], delete this[i];
                        else {
                            if (o.hasOwnProperty(i) && "number" == typeof this[i] && this[i] == l) return;
                            if (null == i) {
                                const n = Fe(this),
                                    o = null == n ? void 0 : n.v;
                                if (o && !(8 & o) && 128 & o && l !== s) {
                                    const o = n.R,
                                        i = null === (r = t.P) || void 0 === r ? void 0 : r[e];
                                    null == i || i.forEach((t => {
                                        null != o[t] && o[t].call(o, l, s, e)
                                    }))
                                }
                                return
                            }
                        }
                        this[i] = (null !== l || "boolean" != typeof this[i]) && l
                    }))
                }, e.observedAttributes = Array.from(new Set([...Object.keys(null !== (s = t.P) && void 0 !== s ? s : {}), ...l.filter((([e, t]) => 15 & t[0])).map((([e, s]) => {
                    var o;
                    const l = s[1] || e;
                    return n.set(l, e), 512 & s[0] && (null === (o = t.O) || void 0 === o || o.push([e, l])), l
                }))]))
            }
        }
        return e
    },
    we = async (e, t, n, s) => {
        let o;
        if (0 == (32 & t.v)) {
            if (t.v |= 32, n.W) {
                if (o = Ee(n), o.then) {
                    const e = () => {};
                    o = await o, e()
                }
                o.isProxied || (n.P = o.watchers, be(o, n, 2), o.isProxied = !0);
                const s = (n.S, () => {});
                t.v |= 8;
                try {
                    new o(t)
                } catch (e) {
                    Pe(e)
                }
                t.v &= -9, t.v |= 128, s()
            } else o = e.constructor, customElements.whenDefined(n.S).then((() => t.v |= 128));
            if (o.style) {
                let e = o.style;
                const t = P(n);
                if (!We.has(t)) {
                    const s = (n.S, () => {});
                    M(t, e, !!(1 & n.v)), s()
                }
            }
        }
        const l = t.L,
            r = () => ie(t, !0);
        l && l["s-rc"] ? l["s-rc"].push(r) : r()
    },
    ge = e => {},
    $e = e => {
        if (0 == (1 & He.v)) {
            const t = Fe(e),
                n = t.$,
                s = (n.S, () => {});
            if (1 & t.v) Oe(e, t, n.B), (null == t ? void 0 : t.R) || (null == t ? void 0 : t.H) && t.H.then((() => {}));
            else {
                t.v |= 1, 12 & n.v && Se(e); {
                    let n = e;
                    for (; n = n.parentNode || n.host;)
                        if (n["s-p"]) {
                            oe(t, t.L = n);
                            break
                        }
                }
                n.N && Object.entries(n.N).map((([t, [n]]) => {
                    if (31 & n && e.hasOwnProperty(t)) {
                        const n = e[t];
                        delete e[t], e[t] = n
                    }
                })), we(e, t, n)
            }
            s()
        }
    },
    Se = e => {
        const t = e["s-cr"] = Be.createComment("");
        t["s-cn"] = !0, e.insertBefore(t, e.firstChild)
    },
    ke = e => {
        pe(e, "disconnectedCallback")
    },
    Ce = async e => {
        if (0 == (1 & He.v)) {
            const t = Fe(e);
            t.q && (t.q.map((e => e())), t.q = void 0), (null == t ? void 0 : t.R) ? ke(t.R) : (null == t ? void 0 : t.H) && t.H.then((() => ke(t.R)))
        }
    },
    je = (e, t = {}) => {
        var n;
        const s = [],
            o = t.exclude || [],
            l = ze.customElements,
            r = Be.head,
            i = r.querySelector("meta[charset]"),
            a = Be.createElement("style"),
            c = [];
        let u, p = !0;
        Object.assign(He, t), He.I = new URL(t.resourcesUrl || "./", Be.baseURI).href;
        let f = !1;
        if (e.map((e => {
                e[1].map((t => {
                    var n;
                    const r = {
                        v: t[0],
                        S: t[1],
                        N: t[2],
                        B: t[3]
                    };
                    4 & r.v && (f = !0), r.N = t[2], r.B = t[3], r.O = [], r.P = null !== (n = t[4]) && void 0 !== n ? n : {};
                    const i = r.S,
                        a = class extends HTMLElement {
                            constructor(e) {
                                super(e), Ae(e = this, r), 1 & r.v && e.attachShadow({
                                    mode: "open"
                                })
                            }
                            connectedCallback() {
                                u && (clearTimeout(u), u = null), p ? c.push(this) : He.jmp((() => $e(this)))
                            }
                            disconnectedCallback() {
                                He.jmp((() => Ce(this)))
                            }
                            componentOnReady() {
                                return Fe(this).H
                            }
                        };
                    r.W = e[0], o.includes(i) || l.get(i) || (s.push(i), l.define(i, be(a, r, 1)))
                }))
            })), s.length > 0 && (f && (a.textContent += v), a.textContent += s + d, a.innerHTML.length)) {
            a.setAttribute("data-styles", "");
            const e = null !== (n = He.h) && void 0 !== n ? n : g(Be);
            null != e && a.setAttribute("nonce", e), r.insertBefore(a, i ? i.nextSibling : r.firstChild)
        }
        p = !1, c.length ? c.map((e => e.connectedCallback())) : He.jmp((() => u = setTimeout(ve, 30)))
    },
    Oe = (e, t, n, s) => {
        n && n.map((([n, s, o]) => {
            const l = Te(e, n),
                r = xe(t, o),
                i = Le(n);
            He.ael(l, s, r, i), (t.q = t.q || []).push((() => He.rel(l, s, r, i)))
        }))
    },
    xe = (e, t) => n => {
        try {
            256 & e.v ? e.R[t](n) : (e.D = e.D || []).push([t, n])
        } catch (e) {
            Pe(e)
        }
    },
    Te = (e, t) => 8 & t ? ze : e,
    Le = e => Qe ? {
        passive: 0 != (1 & e),
        capture: 0 != (2 & e)
    } : 0 != (2 & e),
    Re = e => He.h = e,
    De = new WeakMap,
    Fe = e => De.get(e),
    Me = (e, t) => De.set(t.R = e, t),
    Ae = (e, t) => {
        const n = {
            v: 0,
            $hostElement$: e,
            $: t,
            A: new Map
        };
        return n.U = new Promise((e => n.M = e)), n.H = new Promise((e => n.F = e)), e["s-p"] = [], e["s-rc"] = [], Oe(e, n, t.B), De.set(e, n)
    },
    Ne = (e, t) => t in e,
    Pe = (e, t) => (0, console.error)(e, t),
    Ue = new Map,
    Ee = (e, t, n) => {
        const s = e.S.replace(/-/g, "_"),
            o = e.W,
            l = Ue.get(o);
        return l ? l[s] : import (`./${o}.entry.js`).then((e => (Ue.set(o, e), e[s])), Pe)
    },
    We = new Map,
    ze = "undefined" != typeof window ? window : {},
    Be = ze.document || {
        head: {}
    },
    He = {
        v: 0,
        I: "",
        jmp: e => e(),
        raf: e => requestAnimationFrame(e),
        ael: (e, t, n, s) => e.addEventListener(t, n, s),
        rel: (e, t, n, s) => e.removeEventListener(t, n, s),
        ce: (e, t) => new CustomEvent(e, t)
    },
    Qe = (() => {
        let e = !1;
        try {
            Be.addEventListener("e", null, Object.defineProperty({}, "passive", {
                get() {
                    e = !0
                }
            }))
        } catch (e) {}
        return e
    })(),
    qe = e => Promise.resolve(e),
    Ie = (() => {
        try {
            return new CSSStyleSheet, "function" == typeof(new CSSStyleSheet).replaceSync
        } catch (e) {}
        return !1
    })(),
    Ke = [],
    Ve = [],
    Xe = (e, t) => n => {
        e.push(n), r || (r = !0, t && 4 & He.v ? Je(Ge) : He.raf(Ge))
    },
    _e = e => {
        for (let t = 0; t < e.length; t++) try {
            e[t](performance.now())
        } catch (e) {
            Pe(e)
        }
        e.length = 0
    },
    Ge = () => {
        _e(Ke), _e(Ve), (r = Ke.length > 0) && He.raf(Ge)
    },
    Je = e => qe().then(e),
    Ye = Xe(Ve, !0);
export {
    k as H, je as b, R as c, L as g, $ as h, qe as p, Me as r, Re as s
};