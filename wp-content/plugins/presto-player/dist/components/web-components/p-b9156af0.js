const t = t => null != t ? t.constructor : null,
    e = (t, e) => Boolean(t && e && t instanceof e),
    n = t => null == t,
    i = e => t(e) === Object,
    s = e => t(e) === String,
    r = t => Array.isArray(t),
    o = t => e(t, NodeList),
    c = t => null !== t && "object" == typeof t && 1 === t.nodeType && "object" == typeof t.style && "object" == typeof t.ownerDocument,
    l = t => n(t) || (s(t) || r(t) || o(t)) && !t.length || i(t) && !Object.keys(t).length,
    u = {
        nullOrUndefined: n,
        object: i,
        string: s,
        nodeList: o,
        element: c,
        empty: l,
        array: r
    };

function a(t) {
    return Array.isArray ? Array.isArray(t) : "[object Array]" === L(t)
}
const h = 1 / 0;

function f(t) {
    if ("string" == typeof t) return t;
    let e = t + "";
    return "0" == e && 1 / t == -h ? "-0" : e
}

function d(t) {
    return null == t ? "" : f(t)
}

function g(t) {
    return "string" == typeof t
}

function v(t) {
    return "number" == typeof t
}

function M(t) {
    return !0 === t || !1 === t || p(t) && "[object Boolean]" == L(t)
}

function m(t) {
    return "object" == typeof t
}

function p(t) {
    return m(t) && null !== t
}

function x(t) {
    return null != t
}

function y(t) {
    return !t.trim().length
}

function L(t) {
    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t)
}
const w = "Extended search is not available",
    b = "Incorrect 'index' type",
    $ = t => `Invalid value for key ${t}`,
    S = t => `Pattern length exceeds max of ${t}.`,
    A = t => `Missing ${t} property in key`,
    k = t => `Property 'weight' in key '${t}' must be a positive integer`,
    j = Object.prototype.hasOwnProperty;
class N {
    constructor(t) {
        this._keys = [], this._keyMap = {};
        let e = 0;
        t.forEach((t => {
            let n = C(t);
            e += n.weight, this._keys.push(n), this._keyMap[n.id] = n, e += n.weight
        })), this._keys.forEach((t => {
            t.weight /= e
        }))
    }
    get(t) {
        return this._keyMap[t]
    }
    keys() {
        return this._keys
    }
    toJSON() {
        return JSON.stringify(this._keys)
    }
}

function C(t) {
    let e = null,
        n = null,
        r = null,
        s = 1,
        i = null;
    if (g(t) || a(t)) r = t, e = O(t), n = R(t);
    else {
        if (!j.call(t, "name")) throw new Error(A("name"));
        const o = t.name;
        if (r = o, j.call(t, "weight") && (s = t.weight, s <= 0)) throw new Error(k(o));
        e = O(o), n = R(o), i = t.getFn
    }
    return {
        path: e,
        id: n,
        weight: s,
        src: r,
        getFn: i
    }
}

function O(t) {
    return a(t) ? t : t.split(".")
}

function R(t) {
    return a(t) ? t.join(".") : t
}

function I(t, e) {
    let n = [],
        r = !1;
    const s = (t, e, i) => {
        if (x(t))
            if (e[i]) {
                const o = t[e[i]];
                if (!x(o)) return;
                if (i === e.length - 1 && (g(o) || v(o) || M(o))) n.push(d(o));
                else if (a(o)) {
                    r = !0;
                    for (let t = 0, n = o.length; t < n; t += 1) s(o[t], e, i + 1)
                } else e.length && s(o, e, i + 1)
            } else n.push(t)
    };
    return s(t, g(e) ? e.split(".") : e, 0), r ? n : n[0]
}
const F = {
        includeMatches: !1,
        findAllMatches: !1,
        minMatchCharLength: 1
    },
    _ = {
        isCaseSensitive: !1,
        includeScore: !1,
        keys: [],
        shouldSort: !0,
        sortFn: (t, e) => t.score === e.score ? t.idx < e.idx ? -1 : 1 : t.score < e.score ? -1 : 1
    },
    E = {
        location: 0,
        threshold: .6,
        distance: 100
    },
    T = {
        useExtendedSearch: !1,
        getFn: I,
        ignoreLocation: !1,
        ignoreFieldNorm: !1,
        fieldNormWeight: 1
    };
var W = { ..._,
    ...F,
    ...E,
    ...T
};
const J = /[^ ]+/g;

function P(t = 1, e = 3) {
    const n = new Map,
        r = Math.pow(10, e);
    return {
        get(e) {
            const s = e.match(J).length;
            if (n.has(s)) return n.get(s);
            const i = 1 / Math.pow(s, .5 * t),
                o = parseFloat(Math.round(i * r) / r);
            return n.set(s, o), o
        },
        clear() {
            n.clear()
        }
    }
}
class z {
    constructor({
        getFn: t = W.getFn,
        fieldNormWeight: e = W.fieldNormWeight
    } = {}) {
        this.norm = P(e, 3), this.getFn = t, this.isCreated = !1, this.setIndexRecords()
    }
    setSources(t = []) {
        this.docs = t
    }
    setIndexRecords(t = []) {
        this.records = t
    }
    setKeys(t = []) {
        this.keys = t, this._keysMap = {}, t.forEach(((t, e) => {
            this._keysMap[t.id] = e
        }))
    }
    create() {
        !this.isCreated && this.docs.length && (this.isCreated = !0, g(this.docs[0]) ? this.docs.forEach(((t, e) => {
            this._addString(t, e)
        })) : this.docs.forEach(((t, e) => {
            this._addObject(t, e)
        })), this.norm.clear())
    }
    add(t) {
        const e = this.size();
        g(t) ? this._addString(t, e) : this._addObject(t, e)
    }
    removeAt(t) {
        this.records.splice(t, 1);
        for (let e = t, n = this.size(); e < n; e += 1) this.records[e].i -= 1
    }
    getValueForItemAtKeyId(t, e) {
        return t[this._keysMap[e]]
    }
    size() {
        return this.records.length
    }
    _addString(t, e) {
        if (!x(t) || y(t)) return;
        let n = {
            v: t,
            i: e,
            n: this.norm.get(t)
        };
        this.records.push(n)
    }
    _addObject(t, e) {
        let n = {
            i: e,
            $: {}
        };
        this.keys.forEach(((e, r) => {
            let s = e.getFn ? e.getFn(t) : this.getFn(t, e.path);
            if (x(s))
                if (a(s)) {
                    let t = [];
                    const e = [{
                        nestedArrIndex: -1,
                        value: s
                    }];
                    for (; e.length;) {
                        const {
                            nestedArrIndex: n,
                            value: r
                        } = e.pop();
                        if (x(r))
                            if (g(r) && !y(r)) {
                                let e = {
                                    v: r,
                                    i: n,
                                    n: this.norm.get(r)
                                };
                                t.push(e)
                            } else a(r) && r.forEach(((t, n) => {
                                e.push({
                                    nestedArrIndex: n,
                                    value: t
                                })
                            }))
                    }
                    n.$[r] = t
                } else if (g(s) && !y(s)) {
                let t = {
                    v: s,
                    n: this.norm.get(s)
                };
                n.$[r] = t
            }
        })), this.records.push(n)
    }
    toJSON() {
        return {
            keys: this.keys,
            records: this.records
        }
    }
}

function B(t, e, {
    getFn: n = W.getFn,
    fieldNormWeight: r = W.fieldNormWeight
} = {}) {
    const s = new z({
        getFn: n,
        fieldNormWeight: r
    });
    return s.setKeys(t.map(C)), s.setSources(e), s.create(), s
}

function D(t, {
    getFn: e = W.getFn,
    fieldNormWeight: n = W.fieldNormWeight
} = {}) {
    const {
        keys: r,
        records: s
    } = t, i = new z({
        getFn: e,
        fieldNormWeight: n
    });
    return i.setKeys(r), i.setIndexRecords(s), i
}

function K(t, {
    errors: e = 0,
    currentLocation: n = 0,
    expectedLocation: r = 0,
    distance: s = W.distance,
    ignoreLocation: i = W.ignoreLocation
} = {}) {
    const o = e / t.length;
    if (i) return o;
    const c = Math.abs(r - n);
    return s ? o + c / s : c ? 1 : o
}

function U(t = [], e = W.minMatchCharLength) {
    let n = [],
        r = -1,
        s = -1,
        i = 0;
    for (let o = t.length; i < o; i += 1) {
        let o = t[i];
        o && -1 === r ? r = i : o || -1 === r || (s = i - 1, s - r + 1 >= e && n.push([r, s]), r = -1)
    }
    return t[i - 1] && i - r >= e && n.push([r, i - 1]), n
}
const H = 32;

function V(t, e, n, {
    location: r = W.location,
    distance: s = W.distance,
    threshold: i = W.threshold,
    findAllMatches: o = W.findAllMatches,
    minMatchCharLength: c = W.minMatchCharLength,
    includeMatches: a = W.includeMatches,
    ignoreLocation: h = W.ignoreLocation
} = {}) {
    if (e.length > H) throw new Error(S(H));
    const l = e.length,
        u = t.length,
        d = Math.max(0, Math.min(r, u));
    let g = i,
        f = d;
    const p = c > 1 || a,
        m = p ? Array(u) : [];
    let y;
    for (;
        (y = t.indexOf(e, f)) > -1;) {
        let t = K(e, {
            currentLocation: y,
            expectedLocation: d,
            distance: s,
            ignoreLocation: h
        });
        if (g = Math.min(t, g), f = y + l, p) {
            let t = 0;
            for (; t < l;) m[y + t] = 1, t += 1
        }
    }
    f = -1;
    let x = [],
        v = 1,
        M = l + u;
    const k = 1 << l - 1;
    for (let r = 0; r < l; r += 1) {
        let i = 0,
            c = M;
        for (; i < c;) K(e, {
            errors: r,
            currentLocation: d + c,
            expectedLocation: d,
            distance: s,
            ignoreLocation: h
        }) <= g ? i = c : M = c, c = Math.floor((M - i) / 2 + i);
        M = c;
        let a = Math.max(1, d - c + 1),
            y = o ? u : Math.min(d + c, u) + l,
            L = Array(y + 2);
        L[y + 1] = (1 << r) - 1;
        for (let i = y; i >= a; i -= 1) {
            let o = i - 1,
                c = n[t.charAt(o)];
            if (p && (m[o] = +!!c), L[i] = (L[i + 1] << 1 | 1) & c, r && (L[i] |= (x[i + 1] | x[i]) << 1 | 1 | x[i + 1]), L[i] & k && (v = K(e, {
                    errors: r,
                    currentLocation: o,
                    expectedLocation: d,
                    distance: s,
                    ignoreLocation: h
                }), v <= g)) {
                if (g = v, f = o, f <= d) break;
                a = Math.max(1, 2 * d - f)
            }
        }
        if (K(e, {
                errors: r + 1,
                currentLocation: d,
                expectedLocation: d,
                distance: s,
                ignoreLocation: h
            }) > g) break;
        x = L
    }
    const L = {
        isMatch: f >= 0,
        score: Math.max(.001, v)
    };
    if (p) {
        const t = U(m, c);
        t.length ? a && (L.indices = t) : L.isMatch = !1
    }
    return L
}

function q(t) {
    let e = {};
    for (let n = 0, r = t.length; n < r; n += 1) {
        const s = t.charAt(n);
        e[s] = (e[s] || 0) | 1 << r - n - 1
    }
    return e
}
class G {
    constructor(t, {
        location: e = W.location,
        threshold: n = W.threshold,
        distance: r = W.distance,
        includeMatches: s = W.includeMatches,
        findAllMatches: i = W.findAllMatches,
        minMatchCharLength: o = W.minMatchCharLength,
        isCaseSensitive: c = W.isCaseSensitive,
        ignoreLocation: a = W.ignoreLocation
    } = {}) {
        if (this.options = {
                location: e,
                threshold: n,
                distance: r,
                includeMatches: s,
                findAllMatches: i,
                minMatchCharLength: o,
                isCaseSensitive: c,
                ignoreLocation: a
            }, this.pattern = c ? t : t.toLowerCase(), this.chunks = [], !this.pattern.length) return;
        const h = (t, e) => {
                this.chunks.push({
                    pattern: t,
                    alphabet: q(t),
                    startIndex: e
                })
            },
            l = this.pattern.length;
        if (l > H) {
            let t = 0;
            const e = l % H,
                n = l - e;
            for (; t < n;) h(this.pattern.substr(t, H), t), t += H;
            if (e) {
                const t = l - H;
                h(this.pattern.substr(t), t)
            }
        } else h(this.pattern, 0)
    }
    searchIn(t) {
        const {
            isCaseSensitive: e,
            includeMatches: n
        } = this.options;
        if (e || (t = t.toLowerCase()), this.pattern === t) {
            let e = {
                isMatch: !0,
                score: 0
            };
            return n && (e.indices = [
                [0, t.length - 1]
            ]), e
        }
        const {
            location: r,
            distance: s,
            threshold: i,
            findAllMatches: o,
            minMatchCharLength: c,
            ignoreLocation: a
        } = this.options;
        let h = [],
            l = 0,
            u = !1;
        this.chunks.forEach((({
            pattern: e,
            alphabet: d,
            startIndex: g
        }) => {
            const {
                isMatch: f,
                score: p,
                indices: m
            } = V(t, e, d, {
                location: r + g,
                distance: s,
                threshold: i,
                findAllMatches: o,
                minMatchCharLength: c,
                includeMatches: n,
                ignoreLocation: a
            });
            f && (u = !0), l += p, f && m && (h = [...h, ...m])
        }));
        let d = {
            isMatch: u,
            score: u ? l / this.chunks.length : 1
        };
        return u && n && (d.indices = h), d
    }
}
class Q {
    constructor(t) {
        this.pattern = t
    }
    static isMultiMatch(t) {
        return X(t, this.multiRegex)
    }
    static isSingleMatch(t) {
        return X(t, this.singleRegex)
    }
    search() {}
}

function X(t, e) {
    const n = t.match(e);
    return n ? n[1] : null
}
class Y extends Q {
    constructor(t) {
        super(t)
    }
    static get type() {
        return "exact"
    }
    static get multiRegex() {
        return /^="(.*)"$/
    }
    static get singleRegex() {
        return /^=(.*)$/
    }
    search(t) {
        const e = t === this.pattern;
        return {
            isMatch: e,
            score: e ? 0 : 1,
            indices: [0, this.pattern.length - 1]
        }
    }
}
class Z extends Q {
    constructor(t) {
        super(t)
    }
    static get type() {
        return "inverse-exact"
    }
    static get multiRegex() {
        return /^!"(.*)"$/
    }
    static get singleRegex() {
        return /^!(.*)$/
    }
    search(t) {
        const e = -1 === t.indexOf(this.pattern);
        return {
            isMatch: e,
            score: e ? 0 : 1,
            indices: [0, t.length - 1]
        }
    }
}
class tt extends Q {
    constructor(t) {
        super(t)
    }
    static get type() {
        return "prefix-exact"
    }
    static get multiRegex() {
        return /^\^"(.*)"$/
    }
    static get singleRegex() {
        return /^\^(.*)$/
    }
    search(t) {
        const e = t.startsWith(this.pattern);
        return {
            isMatch: e,
            score: e ? 0 : 1,
            indices: [0, this.pattern.length - 1]
        }
    }
}
class et extends Q {
    constructor(t) {
        super(t)
    }
    static get type() {
        return "inverse-prefix-exact"
    }
    static get multiRegex() {
        return /^!\^"(.*)"$/
    }
    static get singleRegex() {
        return /^!\^(.*)$/
    }
    search(t) {
        const e = !t.startsWith(this.pattern);
        return {
            isMatch: e,
            score: e ? 0 : 1,
            indices: [0, t.length - 1]
        }
    }
}
class nt extends Q {
    constructor(t) {
        super(t)
    }
    static get type() {
        return "suffix-exact"
    }
    static get multiRegex() {
        return /^"(.*)"\$$/
    }
    static get singleRegex() {
        return /^(.*)\$$/
    }
    search(t) {
        const e = t.endsWith(this.pattern);
        return {
            isMatch: e,
            score: e ? 0 : 1,
            indices: [t.length - this.pattern.length, t.length - 1]
        }
    }
}
class it extends Q {
    constructor(t) {
        super(t)
    }
    static get type() {
        return "inverse-suffix-exact"
    }
    static get multiRegex() {
        return /^!"(.*)"\$$/
    }
    static get singleRegex() {
        return /^!(.*)\$$/
    }
    search(t) {
        const e = !t.endsWith(this.pattern);
        return {
            isMatch: e,
            score: e ? 0 : 1,
            indices: [0, t.length - 1]
        }
    }
}
class st extends Q {
    constructor(t, {
        location: e = W.location,
        threshold: n = W.threshold,
        distance: r = W.distance,
        includeMatches: s = W.includeMatches,
        findAllMatches: i = W.findAllMatches,
        minMatchCharLength: o = W.minMatchCharLength,
        isCaseSensitive: c = W.isCaseSensitive,
        ignoreLocation: a = W.ignoreLocation
    } = {}) {
        super(t), this._bitapSearch = new G(t, {
            location: e,
            threshold: n,
            distance: r,
            includeMatches: s,
            findAllMatches: i,
            minMatchCharLength: o,
            isCaseSensitive: c,
            ignoreLocation: a
        })
    }
    static get type() {
        return "fuzzy"
    }
    static get multiRegex() {
        return /^"(.*)"$/
    }
    static get singleRegex() {
        return /^(.*)$/
    }
    search(t) {
        return this._bitapSearch.searchIn(t)
    }
}
class rt extends Q {
    constructor(t) {
        super(t)
    }
    static get type() {
        return "include"
    }
    static get multiRegex() {
        return /^'"(.*)"$/
    }
    static get singleRegex() {
        return /^'(.*)$/
    }
    search(t) {
        let e, n = 0;
        const r = [],
            s = this.pattern.length;
        for (;
            (e = t.indexOf(this.pattern, n)) > -1;) n = e + s, r.push([e, n - 1]);
        const i = !!r.length;
        return {
            isMatch: i,
            score: i ? 0 : 1,
            indices: r
        }
    }
}
const ot = [Y, rt, tt, et, it, nt, Z, st],
    ct = ot.length,
    lt = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,
    ut = "|";

function at(t, e = {}) {
    return t.split(ut).map((t => {
        let n = t.trim().split(lt).filter((t => t && !!t.trim())),
            r = [];
        for (let t = 0, s = n.length; t < s; t += 1) {
            const s = n[t];
            let i = !1,
                o = -1;
            for (; !i && ++o < ct;) {
                const t = ot[o];
                let n = t.isMultiMatch(s);
                n && (r.push(new t(n, e)), i = !0)
            }
            if (!i)
                for (o = -1; ++o < ct;) {
                    const t = ot[o];
                    let n = t.isSingleMatch(s);
                    if (n) {
                        r.push(new t(n, e));
                        break
                    }
                }
        }
        return r
    }))
}
const ht = new Set([st.type, rt.type]);
class ft {
    constructor(t, {
        isCaseSensitive: e = W.isCaseSensitive,
        includeMatches: n = W.includeMatches,
        minMatchCharLength: r = W.minMatchCharLength,
        ignoreLocation: s = W.ignoreLocation,
        findAllMatches: i = W.findAllMatches,
        location: o = W.location,
        threshold: c = W.threshold,
        distance: a = W.distance
    } = {}) {
        this.query = null, this.options = {
            isCaseSensitive: e,
            includeMatches: n,
            minMatchCharLength: r,
            findAllMatches: i,
            ignoreLocation: s,
            location: o,
            threshold: c,
            distance: a
        }, this.pattern = e ? t : t.toLowerCase(), this.query = at(this.pattern, this.options)
    }
    static condition(t, e) {
        return e.useExtendedSearch
    }
    searchIn(t) {
        const e = this.query;
        if (!e) return {
            isMatch: !1,
            score: 1
        };
        const {
            includeMatches: n,
            isCaseSensitive: r
        } = this.options;
        t = r ? t : t.toLowerCase();
        let s = 0,
            i = [],
            o = 0;
        for (let r = 0, c = e.length; r < c; r += 1) {
            const c = e[r];
            i.length = 0, s = 0;
            for (let e = 0, r = c.length; e < r; e += 1) {
                const r = c[e],
                    {
                        isMatch: a,
                        indices: h,
                        score: l
                    } = r.search(t);
                if (!a) {
                    o = 0, s = 0, i.length = 0;
                    break
                }
                if (s += 1, o += l, n) {
                    const t = r.constructor.type;
                    ht.has(t) ? i = [...i, ...h] : i.push(h)
                }
            }
            if (s) {
                let t = {
                    isMatch: !0,
                    score: o / s
                };
                return n && (t.indices = i), t
            }
        }
        return {
            isMatch: !1,
            score: 1
        }
    }
}
const dt = [];

function gt(...t) {
    dt.push(...t)
}

function vt(t, e) {
    for (let n = 0, r = dt.length; n < r; n += 1) {
        let r = dt[n];
        if (r.condition(t, e)) return new r(t, e)
    }
    return new G(t, e)
}
const Mt = {
        AND: "$and",
        OR: "$or"
    },
    mt = {
        PATH: "$path",
        PATTERN: "$val"
    },
    pt = t => !(!t[Mt.AND] && !t[Mt.OR]),
    xt = t => !!t[mt.PATH],
    yt = t => !a(t) && m(t) && !pt(t),
    Lt = t => ({
        [Mt.AND]: Object.keys(t).map((e => ({
            [e]: t[e]
        })))
    });

function wt(t, e, {
    auto: n = !0
} = {}) {
    const r = t => {
        let s = Object.keys(t);
        const i = xt(t);
        if (!i && s.length > 1 && !pt(t)) return r(Lt(t));
        if (yt(t)) {
            const r = i ? t[mt.PATH] : s[0],
                o = i ? t[mt.PATTERN] : t[r];
            if (!g(o)) throw new Error($(r));
            const c = {
                keyId: R(r),
                pattern: o
            };
            return n && (c.searcher = vt(o, e)), c
        }
        let o = {
            children: [],
            operator: s[0]
        };
        return s.forEach((e => {
            const n = t[e];
            a(n) && n.forEach((t => {
                o.children.push(r(t))
            }))
        })), o
    };
    return pt(t) || (t = Lt(t)), r(t)
}

function bt(t, {
    ignoreFieldNorm: e = W.ignoreFieldNorm
}) {
    t.forEach((t => {
        let n = 1;
        t.matches.forEach((({
            key: t,
            norm: r,
            score: s
        }) => {
            const i = t ? t.weight : null;
            n *= Math.pow(0 === s && i ? Number.EPSILON : s, (i || 1) * (e ? 1 : r))
        })), t.score = n
    }))
}

function $t(t, e) {
    const n = t.matches;
    e.matches = [], x(n) && n.forEach((t => {
        if (!x(t.indices) || !t.indices.length) return;
        const {
            indices: n,
            value: r
        } = t;
        let s = {
            indices: n,
            value: r
        };
        t.key && (s.key = t.key.src), t.idx > -1 && (s.refIndex = t.idx), e.matches.push(s)
    }))
}

function St(t, e) {
    e.score = t.score
}

function At(t, e, {
    includeMatches: n = W.includeMatches,
    includeScore: r = W.includeScore
} = {}) {
    const s = [];
    return n && s.push($t), r && s.push(St), t.map((t => {
        const {
            idx: n
        } = t, r = {
            item: e[n],
            refIndex: n
        };
        return s.length && s.forEach((e => {
            e(t, r)
        })), r
    }))
}
class kt {
    constructor(t, e = {}, n) {
        this.options = { ...W,
            ...e
        }, this.options.useExtendedSearch, this._keyStore = new N(this.options.keys), this.setCollection(t, n)
    }
    setCollection(t, e) {
        if (this._docs = t, e && !(e instanceof z)) throw new Error(b);
        this._myIndex = e || B(this.options.keys, this._docs, {
            getFn: this.options.getFn,
            fieldNormWeight: this.options.fieldNormWeight
        })
    }
    add(t) {
        x(t) && (this._docs.push(t), this._myIndex.add(t))
    }
    remove(t = (() => !1)) {
        const e = [];
        for (let n = 0, r = this._docs.length; n < r; n += 1) {
            const s = this._docs[n];
            t(s, n) && (this.removeAt(n), n -= 1, r -= 1, e.push(s))
        }
        return e
    }
    removeAt(t) {
        this._docs.splice(t, 1), this._myIndex.removeAt(t)
    }
    getIndex() {
        return this._myIndex
    }
    search(t, {
        limit: e = -1
    } = {}) {
        const {
            includeMatches: n,
            includeScore: r,
            shouldSort: s,
            sortFn: i,
            ignoreFieldNorm: o
        } = this.options;
        let c = g(t) ? g(this._docs[0]) ? this._searchStringList(t) : this._searchObjectList(t) : this._searchLogical(t);
        return bt(c, {
            ignoreFieldNorm: o
        }), s && c.sort(i), v(e) && e > -1 && (c = c.slice(0, e)), At(c, this._docs, {
            includeMatches: n,
            includeScore: r
        })
    }
    _searchStringList(t) {
        const e = vt(t, this.options),
            {
                records: n
            } = this._myIndex,
            r = [];
        return n.forEach((({
            v: t,
            i: n,
            n: s
        }) => {
            if (!x(t)) return;
            const {
                isMatch: i,
                score: o,
                indices: c
            } = e.searchIn(t);
            i && r.push({
                item: t,
                idx: n,
                matches: [{
                    score: o,
                    value: t,
                    norm: s,
                    indices: c
                }]
            })
        })), r
    }
    _searchLogical(t) {
        const e = wt(t, this.options),
            n = (t, e, r) => {
                if (!t.children) {
                    const {
                        keyId: n,
                        searcher: s
                    } = t, i = this._findMatches({
                        key: this._keyStore.get(n),
                        value: this._myIndex.getValueForItemAtKeyId(e, n),
                        searcher: s
                    });
                    return i && i.length ? [{
                        idx: r,
                        item: e,
                        matches: i
                    }] : []
                }
                const s = [];
                for (let i = 0, o = t.children.length; i < o; i += 1) {
                    const o = t.children[i],
                        c = n(o, e, r);
                    if (c.length) s.push(...c);
                    else if (t.operator === Mt.AND) return []
                }
                return s
            },
            r = this._myIndex.records,
            s = {},
            i = [];
        return r.forEach((({
            $: t,
            i: r
        }) => {
            if (x(t)) {
                let o = n(e, t, r);
                o.length && (s[r] || (s[r] = {
                    idx: r,
                    item: t,
                    matches: []
                }, i.push(s[r])), o.forEach((({
                    matches: t
                }) => {
                    s[r].matches.push(...t)
                })))
            }
        })), i
    }
    _searchObjectList(t) {
        const e = vt(t, this.options),
            {
                keys: n,
                records: r
            } = this._myIndex,
            s = [];
        return r.forEach((({
            $: t,
            i: r
        }) => {
            if (!x(t)) return;
            let i = [];
            n.forEach(((n, r) => {
                i.push(...this._findMatches({
                    key: n,
                    value: t[r],
                    searcher: e
                }))
            })), i.length && s.push({
                idx: r,
                item: t,
                matches: i
            })
        })), s
    }
    _findMatches({
        key: t,
        value: e,
        searcher: n
    }) {
        if (!x(e)) return [];
        let r = [];
        if (a(e)) e.forEach((({
            v: e,
            i: s,
            n: i
        }) => {
            if (!x(e)) return;
            const {
                isMatch: o,
                score: c,
                indices: a
            } = n.searchIn(e);
            o && r.push({
                score: c,
                key: t,
                value: e,
                idx: s,
                norm: i,
                indices: a
            })
        }));
        else {
            const {
                v: s,
                n: i
            } = e, {
                isMatch: o,
                score: c,
                indices: a
            } = n.searchIn(s);
            o && r.push({
                score: c,
                key: t,
                value: s,
                norm: i,
                indices: a
            })
        }
        return r
    }
}

function jt(t) {
    return "string" == typeof t && t.includes(".m3u8")
}

function Nt(t) {
    for (var e = []; t.parentNode && "body" != t.parentNode.nodeName.toLowerCase();) t = t.parentNode, e.push(t);
    return e
}

function Ct(t, e) {
    u.element(t) && !u.empty(e) && Object.entries(e).filter((([, t]) => !u.nullOrUndefined(t))).forEach((([e, n]) => t.setAttribute(e, n)))
}

function Ot(t, e, n) {
    const r = document.createElement(t);
    return u.object(e) && Ct(r, e), u.string(n) && (r.innerText = n), r
}
kt.version = "6.6.2", kt.createIndex = B, kt.parseIndex = D, kt.config = W, kt.parseQuery = wt, gt(ft);
const Rt = t => {
        if (!t) return null;
        const e = ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce(((e, n) => (t[n] && (e[n] = t[n]), e)), {
            cues: t.cues && Array.prototype.map.call(t.cues, (function(t) {
                return {
                    startTime: t.startTime,
                    endTime: t.endTime,
                    text: t.text,
                    id: t.id
                }
            }))
        });
        return e
    },
    It = (t, e, n) => {
        if (u.empty(e)) return [];
        if (u.empty(n)) return [];
        if (!u.string(t)) return [];
        const r = Object.assign(Object.assign(Object.assign({}, null == n ? void 0 : n.minMatchCharLength), null == n ? void 0 : n.threshold), {
            shouldSort: !1,
            includeMatches: !0,
            threshold: .3,
            keys: ["text"]
        });
        return null !== e && e && 0 !== e.length ? new kt(e, r).search(t) : []
    },
    Ft = (t, e, n) => {
        if (!u.string(t)) return [];
        if (u.empty(e)) return [];
        if (u.empty(n)) return [];
        const r = It(t, e, n);
        return r && Array.prototype.map.call(r, (function(t) {
            return {
                time: Math.ceil(t.item.startTime),
                label: ""
            }
        }))
    };

function _t(t, e) {
    var n, r, s, i;
    if (!t) return;
    if (!(null === (n = null == t ? void 0 : t.media) || void 0 === n ? void 0 : n.textTracks) || 0 === (null === (s = null === (r = null == t ? void 0 : t.media) || void 0 === r ? void 0 : r.textTracks) || void 0 === s ? void 0 : s.length)) return;
    const o = t.media.textTracks,
        c = (null === (i = t.config.preset) || void 0 === i ? void 0 : i.search) || "";
    let a = "";
    if (a = -1 === t.captions.currentTrack ? Jt(t) : o[t.captions.currentTrack], u.empty(a)) return [];
    const h = Rt(a);
    return u.empty(h) ? [] : Ft(e, null == h ? void 0 : h.cues, c)
}

function Et(t) {
    var e;
    if (!t) return;
    if (!(null == t ? void 0 : t.elements) || !(null === (e = null == t ? void 0 : t.elements) || void 0 === e ? void 0 : e.progress)) return;
    let n = t.elements.progress.querySelectorAll(".plyr__progress__marker");
    if (!u.empty(n))
        for (var r = 0; r < n.length; r++) n[r].remove()
}

function Tt(t, e) {
    if (!t) return;
    if (Et(t), !(null == e ? void 0 : e.length)) return;
    const n = document.createDocumentFragment(),
        r = document.createDocumentFragment();
    e.forEach((e => {
        const n = Ot("span", {
                class: "plyr__progress__marker"
            }, ""),
            s = e.time / t.duration * 100 + "%";
        n.addEventListener("click", (() => {
            t.currentTime = e.time
        })), n.style.left = s, r.appendChild(n)
    })), n.appendChild(r), t.elements.markers = {
        points: r,
        tip: null
    }, t.elements.progress.appendChild(n)
}

function Wt(t) {
    var e, n, r, s, i, o;
    if (!(null === (n = null === (e = null == t ? void 0 : t.config.preset) || void 0 === e ? void 0 : e.search) || void 0 === n ? void 0 : n.enabled)) return;
    if (!(null === (s = null === (r = null == t ? void 0 : t.media) || void 0 === r ? void 0 : r.textTracks) || void 0 === s ? void 0 : s.length) || 0 === (null === (o = null === (i = null == t ? void 0 : t.media) || void 0 === i ? void 0 : i.textTracks) || void 0 === o ? void 0 : o.length)) return;
    if (-1 !== (null == t ? void 0 : t.currentTrack)) return;
    t.toggleCaptions(!0);
    let c = setInterval((() => {
        var e;
        const n = null === (e = t.media.textTracks[0]) || void 0 === e ? void 0 : e.cues;
        (null == n ? void 0 : n.length) > 0 && (Pt(t), t.toggleCaptions(!1), clearInterval(c))
    }), 200)
}

function Jt(t) {
    if (!t) return;
    const e = localStorage.getItem("presto-player-" + t.id + "-cues");
    return u.empty(e) ? "" : JSON.parse(e)
}

function Pt(t) {
    var e, n, r, s, i;
    if (!t || !(null === (e = null == t ? void 0 : t.media) || void 0 === e ? void 0 : e.textTracks) || 0 === (null === (r = null === (n = null == t ? void 0 : t.media) || void 0 === n ? void 0 : n.textTracks) || void 0 === r ? void 0 : r.length)) return;
    const o = (null === (i = null === (s = null == t ? void 0 : t.media) || void 0 === s ? void 0 : s.textTracks) || void 0 === i ? void 0 : i[0]) ? Rt(t.media.textTracks[0]) : {};
    u.empty(o) || localStorage.setItem("presto-player-" + t.id + "-cues", JSON.stringify(o))
}
export {
    Tt as a, Wt as c, Nt as g, jt as i, Et as r, _t as s
};