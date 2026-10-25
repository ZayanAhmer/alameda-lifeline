(function () { const i = document.createElement("link").relList; if (i && i.supports && i.supports("modulepreload"))
    return; for (const c of document.querySelectorAll('link[rel="modulepreload"]'))
    o(c); new MutationObserver(c => { for (const f of c)
    if (f.type === "childList")
        for (const h of f.addedNodes)
            h.tagName === "LINK" && h.rel === "modulepreload" && o(h); }).observe(document, { childList: !0, subtree: !0 }); function s(c) { const f = {}; return c.integrity && (f.integrity = c.integrity), c.referrerPolicy && (f.referrerPolicy = c.referrerPolicy), c.crossOrigin === "use-credentials" ? f.credentials = "include" : c.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin", f; } function o(c) { if (c.ep)
    return; c.ep = !0; const f = s(c); fetch(c.href, f); } })();
var tc = { exports: {} }, yl = {};
var Yp;
function Gx() { if (Yp)
    return yl; Yp = 1; var a = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment"); function s(o, c, f) { var h = null; if (f !== void 0 && (h = "" + f), c.key !== void 0 && (h = "" + c.key), "key" in c) {
    f = {};
    for (var m in c)
        m !== "key" && (f[m] = c[m]);
}
else
    f = c; return c = f.ref, { $$typeof: a, type: o, key: h, ref: c !== void 0 ? c : null, props: f }; } return yl.Fragment = i, yl.jsx = s, yl.jsxs = s, yl; }
var Gp;
function Xx() { return Gp || (Gp = 1, tc.exports = Gx()), tc.exports; }
var b = Xx(), ec = { exports: {} }, mt = {};
var Xp;
function kx() { if (Xp)
    return mt; Xp = 1; var a = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), h = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), x = Symbol.for("react.activity"), S = Symbol.iterator; function R(A) { return A === null || typeof A != "object" ? null : (A = S && A[S] || A["@@iterator"], typeof A == "function" ? A : null); } var D = { isMounted: function () { return !1; }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, B = Object.assign, _ = {}; function K(A, N, F) { this.props = A, this.context = N, this.refs = _, this.updater = F || D; } K.prototype.isReactComponent = {}, K.prototype.setState = function (A, N) { if (typeof A != "object" && typeof A != "function" && A != null)
    throw Error("takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, A, N, "setState"); }, K.prototype.forceUpdate = function (A) { this.updater.enqueueForceUpdate(this, A, "forceUpdate"); }; function k() { } k.prototype = K.prototype; function G(A, N, F) { this.props = A, this.context = N, this.refs = _, this.updater = F || D; } var J = G.prototype = new k; J.constructor = G, B(J, K.prototype), J.isPureReactComponent = !0; var rt = Array.isArray; function ft() { } var V = { H: null, A: null, T: null, S: null }, X = Object.prototype.hasOwnProperty; function pt(A, N, F) { var nt = F.ref; return { $$typeof: a, type: A, key: N, ref: nt !== void 0 ? nt : null, props: F }; } function dt(A, N) { return pt(A.type, N, A.props); } function P(A) { return typeof A == "object" && A !== null && A.$$typeof === a; } function Z(A) { var N = { "=": "=0", ":": "=2" }; return "$" + A.replace(/[=:]/g, function (F) { return N[F]; }); } var tt = /\/+/g; function $(A, N) { return typeof A == "object" && A !== null && A.key != null ? Z("" + A.key) : N.toString(36); } function at(A) { switch (A.status) {
    case "fulfilled": return A.value;
    case "rejected": throw A.reason;
    default: switch (typeof A.status == "string" ? A.then(ft, ft) : (A.status = "pending", A.then(function (N) { A.status === "pending" && (A.status = "fulfilled", A.value = N); }, function (N) { A.status === "pending" && (A.status = "rejected", A.reason = N); })), A.status) {
        case "fulfilled": return A.value;
        case "rejected": throw A.reason;
    }
} throw A; } function C(A, N, F, nt, ht) { var gt = typeof A; (gt === "undefined" || gt === "boolean") && (A = null); var vt = !1; if (A === null)
    vt = !0;
else
    switch (gt) {
        case "bigint":
        case "string":
        case "number":
            vt = !0;
            break;
        case "object": switch (A.$$typeof) {
            case a:
            case i:
                vt = !0;
                break;
            case v: return vt = A._init, C(vt(A._payload), N, F, nt, ht);
        }
    } if (vt)
    return ht = ht(A), vt = nt === "" ? "." + $(A, 0) : nt, rt(ht) ? (F = "", vt != null && (F = vt.replace(tt, "$&/") + "/"), C(ht, N, F, "", function (Ai) { return Ai; })) : ht != null && (P(ht) && (ht = dt(ht, F + (ht.key == null || A && A.key === ht.key ? "" : ("" + ht.key).replace(tt, "$&/") + "/") + vt)), N.push(ht)), 1; vt = 0; var ee = nt === "" ? "." : nt + ":"; if (rt(A))
    for (var Gt = 0; Gt < A.length; Gt++)
        nt = A[Gt], gt = ee + $(nt, Gt), vt += C(nt, N, F, gt, ht);
else if (Gt = R(A), typeof Gt == "function")
    for (A = Gt.call(A), Gt = 0; !(nt = A.next()).done;)
        nt = nt.value, gt = ee + $(nt, Gt++), vt += C(nt, N, F, gt, ht);
else if (gt === "object") {
    if (typeof A.then == "function")
        return C(at(A), N, F, nt, ht);
    throw N = String(A), Error("Objects are not valid as a React child (found: " + (N === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : N) + "). If you meant to render a collection of children, use an array instead.");
} return vt; } function H(A, N, F) { if (A == null)
    return A; var nt = [], ht = 0; return C(A, nt, "", "", function (gt) { return N.call(F, gt, ht++); }), nt; } function W(A) { if (A._status === -1) {
    var N = A._result;
    N = N(), N.then(function (F) { (A._status === 0 || A._status === -1) && (A._status = 1, A._result = F); }, function (F) { (A._status === 0 || A._status === -1) && (A._status = 2, A._result = F); }), A._status === -1 && (A._status = 0, A._result = N);
} if (A._status === 1)
    return A._result.default; throw A._result; } var I = typeof reportError == "function" ? reportError : function (A) { if (typeof window == "object" && typeof window.ErrorEvent == "function") {
    var N = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: typeof A == "object" && A !== null && typeof A.message == "string" ? String(A.message) : String(A), error: A });
    if (!window.dispatchEvent(N))
        return;
}
else if (typeof process == "object" && typeof process.emit == "function") {
    process.emit("uncaughtException", A);
    return;
} console.error(A); }, et = { map: H, forEach: function (A, N, F) { H(A, function () { N.apply(this, arguments); }, F); }, count: function (A) { var N = 0; return H(A, function () { N++; }), N; }, toArray: function (A) { return H(A, function (N) { return N; }) || []; }, only: function (A) { if (!P(A))
        throw Error("React.Children.only expected to receive a single React element child."); return A; } }; return mt.Activity = x, mt.Children = et, mt.Component = K, mt.Fragment = s, mt.Profiler = c, mt.PureComponent = G, mt.StrictMode = o, mt.Suspense = y, mt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = V, mt.__COMPILER_RUNTIME = { __proto__: null, c: function (A) { return V.H.useMemoCache(A); } }, mt.cache = function (A) { return function () { return A.apply(null, arguments); }; }, mt.cacheSignal = function () { return null; }, mt.cloneElement = function (A, N, F) { if (A == null)
    throw Error("The argument must be a React element, but you passed " + A + "."); var nt = B({}, A.props), ht = A.key; if (N != null)
    for (gt in N.key !== void 0 && (ht = "" + N.key), N)
        !X.call(N, gt) || gt === "key" || gt === "__self" || gt === "__source" || gt === "ref" && N.ref === void 0 || (nt[gt] = N[gt]); var gt = arguments.length - 2; if (gt === 1)
    nt.children = F;
else if (1 < gt) {
    for (var vt = Array(gt), ee = 0; ee < gt; ee++)
        vt[ee] = arguments[ee + 2];
    nt.children = vt;
} return pt(A.type, ht, nt); }, mt.createContext = function (A) { return A = { $$typeof: h, _currentValue: A, _currentValue2: A, _threadCount: 0, Provider: null, Consumer: null }, A.Provider = A, A.Consumer = { $$typeof: f, _context: A }, A; }, mt.createElement = function (A, N, F) { var nt, ht = {}, gt = null; if (N != null)
    for (nt in N.key !== void 0 && (gt = "" + N.key), N)
        X.call(N, nt) && nt !== "key" && nt !== "__self" && nt !== "__source" && (ht[nt] = N[nt]); var vt = arguments.length - 2; if (vt === 1)
    ht.children = F;
else if (1 < vt) {
    for (var ee = Array(vt), Gt = 0; Gt < vt; Gt++)
        ee[Gt] = arguments[Gt + 2];
    ht.children = ee;
} if (A && A.defaultProps)
    for (nt in vt = A.defaultProps, vt)
        ht[nt] === void 0 && (ht[nt] = vt[nt]); return pt(A, gt, ht); }, mt.createRef = function () { return { current: null }; }, mt.forwardRef = function (A) { return { $$typeof: m, render: A }; }, mt.isValidElement = P, mt.lazy = function (A) { return { $$typeof: v, _payload: { _status: -1, _result: A }, _init: W }; }, mt.memo = function (A, N) { return { $$typeof: p, type: A, compare: N === void 0 ? null : N }; }, mt.startTransition = function (A) { var N = V.T, F = {}; V.T = F; try {
    var nt = A(), ht = V.S;
    ht !== null && ht(F, nt), typeof nt == "object" && nt !== null && typeof nt.then == "function" && nt.then(ft, I);
}
catch (gt) {
    I(gt);
}
finally {
    N !== null && F.types !== null && (N.types = F.types), V.T = N;
} }, mt.unstable_useCacheRefresh = function () { return V.H.useCacheRefresh(); }, mt.use = function (A) { return V.H.use(A); }, mt.useActionState = function (A, N, F) { return V.H.useActionState(A, N, F); }, mt.useCallback = function (A, N) { return V.H.useCallback(A, N); }, mt.useContext = function (A) { return V.H.useContext(A); }, mt.useDebugValue = function () { }, mt.useDeferredValue = function (A, N) { return V.H.useDeferredValue(A, N); }, mt.useEffect = function (A, N) { return V.H.useEffect(A, N); }, mt.useEffectEvent = function (A) { return V.H.useEffectEvent(A); }, mt.useId = function () { return V.H.useId(); }, mt.useImperativeHandle = function (A, N, F) { return V.H.useImperativeHandle(A, N, F); }, mt.useInsertionEffect = function (A, N) { return V.H.useInsertionEffect(A, N); }, mt.useLayoutEffect = function (A, N) { return V.H.useLayoutEffect(A, N); }, mt.useMemo = function (A, N) { return V.H.useMemo(A, N); }, mt.useOptimistic = function (A, N) { return V.H.useOptimistic(A, N); }, mt.useReducer = function (A, N, F) { return V.H.useReducer(A, N, F); }, mt.useRef = function (A) { return V.H.useRef(A); }, mt.useState = function (A) { return V.H.useState(A); }, mt.useSyncExternalStore = function (A, N, F) { return V.H.useSyncExternalStore(A, N, F); }, mt.useTransition = function () { return V.H.useTransition(); }, mt.version = "19.2.6", mt; }
var kp;
function lf() { return kp || (kp = 1, ec.exports = kx()), ec.exports; }
var Q = lf(), nc = { exports: {} }, gl = {}, ac = { exports: {} }, ic = {};
var Zp;
function Zx() { return Zp || (Zp = 1, (function (a) { function i(C, H) { var W = C.length; C.push(H); t: for (; 0 < W;) {
    var I = W - 1 >>> 1, et = C[I];
    if (0 < c(et, H))
        C[I] = H, C[W] = et, W = I;
    else
        break t;
} } function s(C) { return C.length === 0 ? null : C[0]; } function o(C) { if (C.length === 0)
    return null; var H = C[0], W = C.pop(); if (W !== H) {
    C[0] = W;
    t: for (var I = 0, et = C.length, A = et >>> 1; I < A;) {
        var N = 2 * (I + 1) - 1, F = C[N], nt = N + 1, ht = C[nt];
        if (0 > c(F, W))
            nt < et && 0 > c(ht, F) ? (C[I] = ht, C[nt] = W, I = nt) : (C[I] = F, C[N] = W, I = N);
        else if (nt < et && 0 > c(ht, W))
            C[I] = ht, C[nt] = W, I = nt;
        else
            break t;
    }
} return H; } function c(C, H) { var W = C.sortIndex - H.sortIndex; return W !== 0 ? W : C.id - H.id; } if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
    var f = performance;
    a.unstable_now = function () { return f.now(); };
}
else {
    var h = Date, m = h.now();
    a.unstable_now = function () { return h.now() - m; };
} var y = [], p = [], v = 1, x = null, S = 3, R = !1, D = !1, B = !1, _ = !1, K = typeof setTimeout == "function" ? setTimeout : null, k = typeof clearTimeout == "function" ? clearTimeout : null, G = typeof setImmediate < "u" ? setImmediate : null; function J(C) { for (var H = s(p); H !== null;) {
    if (H.callback === null)
        o(p);
    else if (H.startTime <= C)
        o(p), H.sortIndex = H.expirationTime, i(y, H);
    else
        break;
    H = s(p);
} } function rt(C) { if (B = !1, J(C), !D)
    if (s(y) !== null)
        D = !0, ft || (ft = !0, Z());
    else {
        var H = s(p);
        H !== null && at(rt, H.startTime - C);
    } } var ft = !1, V = -1, X = 5, pt = -1; function dt() { return _ ? !0 : !(a.unstable_now() - pt < X); } function P() { if (_ = !1, ft) {
    var C = a.unstable_now();
    pt = C;
    var H = !0;
    try {
        t: {
            D = !1, B && (B = !1, k(V), V = -1), R = !0;
            var W = S;
            try {
                e: {
                    for (J(C), x = s(y); x !== null && !(x.expirationTime > C && dt());) {
                        var I = x.callback;
                        if (typeof I == "function") {
                            x.callback = null, S = x.priorityLevel;
                            var et = I(x.expirationTime <= C);
                            if (C = a.unstable_now(), typeof et == "function") {
                                x.callback = et, J(C), H = !0;
                                break e;
                            }
                            x === s(y) && o(y), J(C);
                        }
                        else
                            o(y);
                        x = s(y);
                    }
                    if (x !== null)
                        H = !0;
                    else {
                        var A = s(p);
                        A !== null && at(rt, A.startTime - C), H = !1;
                    }
                }
                break t;
            }
            finally {
                x = null, S = W, R = !1;
            }
            H = void 0;
        }
    }
    finally {
        H ? Z() : ft = !1;
    }
} } var Z; if (typeof G == "function")
    Z = function () { G(P); };
else if (typeof MessageChannel < "u") {
    var tt = new MessageChannel, $ = tt.port2;
    tt.port1.onmessage = P, Z = function () { $.postMessage(null); };
}
else
    Z = function () { K(P, 0); }; function at(C, H) { V = K(function () { C(a.unstable_now()); }, H); } a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function (C) { C.callback = null; }, a.unstable_forceFrameRate = function (C) { 0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : X = 0 < C ? Math.floor(1e3 / C) : 5; }, a.unstable_getCurrentPriorityLevel = function () { return S; }, a.unstable_next = function (C) { switch (S) {
    case 1:
    case 2:
    case 3:
        var H = 3;
        break;
    default: H = S;
} var W = S; S = H; try {
    return C();
}
finally {
    S = W;
} }, a.unstable_requestPaint = function () { _ = !0; }, a.unstable_runWithPriority = function (C, H) { switch (C) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: break;
    default: C = 3;
} var W = S; S = C; try {
    return H();
}
finally {
    S = W;
} }, a.unstable_scheduleCallback = function (C, H, W) { var I = a.unstable_now(); switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? I + W : I) : W = I, C) {
    case 1:
        var et = -1;
        break;
    case 2:
        et = 250;
        break;
    case 5:
        et = 1073741823;
        break;
    case 4:
        et = 1e4;
        break;
    default: et = 5e3;
} return et = W + et, C = { id: v++, callback: H, priorityLevel: C, startTime: W, expirationTime: et, sortIndex: -1 }, W > I ? (C.sortIndex = W, i(p, C), s(y) === null && C === s(p) && (B ? (k(V), V = -1) : B = !0, at(rt, W - I))) : (C.sortIndex = et, i(y, C), D || R || (D = !0, ft || (ft = !0, Z()))), C; }, a.unstable_shouldYield = dt, a.unstable_wrapCallback = function (C) { var H = S; return function () { var W = S; S = H; try {
    return C.apply(this, arguments);
}
finally {
    S = W;
} }; }; })(ic)), ic; }
var Qp;
function Qx() { return Qp || (Qp = 1, ac.exports = Zx()), ac.exports; }
var lc = { exports: {} }, re = {};
var Kp;
function Kx() { if (Kp)
    return re; Kp = 1; var a = lf(); function i(y) { var p = "https://react.dev/errors/" + y; if (1 < arguments.length) {
    p += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var v = 2; v < arguments.length; v++)
        p += "&args[]=" + encodeURIComponent(arguments[v]);
} return "Minified React error #" + y + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; } function s() { } var o = { d: { f: s, r: function () { throw Error(i(522)); }, D: s, C: s, L: s, m: s, X: s, S: s, M: s }, p: 0, findDOMNode: null }, c = Symbol.for("react.portal"); function f(y, p, v) { var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: c, key: x == null ? null : "" + x, children: y, containerInfo: p, implementation: v }; } var h = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE; function m(y, p) { if (y === "font")
    return ""; if (typeof p == "string")
    return p === "use-credentials" ? p : ""; } return re.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, re.createPortal = function (y, p) { var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null; if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
    throw Error(i(299)); return f(y, p, null, v); }, re.flushSync = function (y) { var p = h.T, v = o.p; try {
    if (h.T = null, o.p = 2, y)
        return y();
}
finally {
    h.T = p, o.p = v, o.d.f();
} }, re.preconnect = function (y, p) { typeof y == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, o.d.C(y, p)); }, re.prefetchDNS = function (y) { typeof y == "string" && o.d.D(y); }, re.preinit = function (y, p) { if (typeof y == "string" && p && typeof p.as == "string") {
    var v = p.as, x = m(v, p.crossOrigin), S = typeof p.integrity == "string" ? p.integrity : void 0, R = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
    v === "style" ? o.d.S(y, typeof p.precedence == "string" ? p.precedence : void 0, { crossOrigin: x, integrity: S, fetchPriority: R }) : v === "script" && o.d.X(y, { crossOrigin: x, integrity: S, fetchPriority: R, nonce: typeof p.nonce == "string" ? p.nonce : void 0 });
} }, re.preinitModule = function (y, p) { if (typeof y == "string")
    if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
            var v = m(p.as, p.crossOrigin);
            o.d.M(y, { crossOrigin: v, integrity: typeof p.integrity == "string" ? p.integrity : void 0, nonce: typeof p.nonce == "string" ? p.nonce : void 0 });
        }
    }
    else
        p == null && o.d.M(y); }, re.preload = function (y, p) { if (typeof y == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
    var v = p.as, x = m(v, p.crossOrigin);
    o.d.L(y, v, { crossOrigin: x, integrity: typeof p.integrity == "string" ? p.integrity : void 0, nonce: typeof p.nonce == "string" ? p.nonce : void 0, type: typeof p.type == "string" ? p.type : void 0, fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0, referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0, imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0, imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0, media: typeof p.media == "string" ? p.media : void 0 });
} }, re.preloadModule = function (y, p) { if (typeof y == "string")
    if (p) {
        var v = m(p.as, p.crossOrigin);
        o.d.m(y, { as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0, crossOrigin: v, integrity: typeof p.integrity == "string" ? p.integrity : void 0 });
    }
    else
        o.d.m(y); }, re.requestFormReset = function (y) { o.d.r(y); }, re.unstable_batchedUpdates = function (y, p) { return y(p); }, re.useFormState = function (y, p, v) { return h.H.useFormState(y, p, v); }, re.useFormStatus = function () { return h.H.useHostTransitionStatus(); }, re.version = "19.2.6", re; }
var Jp;
function Jx() { if (Jp)
    return lc.exports; Jp = 1; function a() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
    }
    catch (i) {
        console.error(i);
    } } return a(), lc.exports = Kx(), lc.exports; }
var Fp;
function Fx() {
    if (Fp)
        return gl;
    Fp = 1;
    var a = Qx(), i = lf(), s = Jx();
    function o(t) { var e = "https://react.dev/errors/" + t; if (1 < arguments.length) {
        e += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
            e += "&args[]=" + encodeURIComponent(arguments[n]);
    } return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; }
    function c(t) { return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11); }
    function f(t) { var e = t, n = t; if (t.alternate)
        for (; e.return;)
            e = e.return;
    else {
        t = e;
        do
            e = t, (e.flags & 4098) !== 0 && (n = e.return), t = e.return;
        while (t);
    } return e.tag === 3 ? n : null; }
    function h(t) { if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null)
            return e.dehydrated;
    } return null; }
    function m(t) { if (t.tag === 31) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null)
            return e.dehydrated;
    } return null; }
    function y(t) { if (f(t) !== t)
        throw Error(o(188)); }
    function p(t) { var e = t.alternate; if (!e) {
        if (e = f(t), e === null)
            throw Error(o(188));
        return e !== t ? null : t;
    } for (var n = t, l = e;;) {
        var u = n.return;
        if (u === null)
            break;
        var r = u.alternate;
        if (r === null) {
            if (l = u.return, l !== null) {
                n = l;
                continue;
            }
            break;
        }
        if (u.child === r.child) {
            for (r = u.child; r;) {
                if (r === n)
                    return y(u), t;
                if (r === l)
                    return y(u), e;
                r = r.sibling;
            }
            throw Error(o(188));
        }
        if (n.return !== l.return)
            n = u, l = r;
        else {
            for (var d = !1, g = u.child; g;) {
                if (g === n) {
                    d = !0, n = u, l = r;
                    break;
                }
                if (g === l) {
                    d = !0, l = u, n = r;
                    break;
                }
                g = g.sibling;
            }
            if (!d) {
                for (g = r.child; g;) {
                    if (g === n) {
                        d = !0, n = r, l = u;
                        break;
                    }
                    if (g === l) {
                        d = !0, l = r, n = u;
                        break;
                    }
                    g = g.sibling;
                }
                if (!d)
                    throw Error(o(189));
            }
        }
        if (n.alternate !== l)
            throw Error(o(190));
    } if (n.tag !== 3)
        throw Error(o(188)); return n.stateNode.current === n ? t : e; }
    function v(t) { var e = t.tag; if (e === 5 || e === 26 || e === 27 || e === 6)
        return t; for (t = t.child; t !== null;) {
        if (e = v(t), e !== null)
            return e;
        t = t.sibling;
    } return null; }
    var x = Object.assign, S = Symbol.for("react.element"), R = Symbol.for("react.transitional.element"), D = Symbol.for("react.portal"), B = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), K = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), G = Symbol.for("react.context"), J = Symbol.for("react.forward_ref"), rt = Symbol.for("react.suspense"), ft = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), X = Symbol.for("react.lazy"), pt = Symbol.for("react.activity"), dt = Symbol.for("react.memo_cache_sentinel"), P = Symbol.iterator;
    function Z(t) { return t === null || typeof t != "object" ? null : (t = P && t[P] || t["@@iterator"], typeof t == "function" ? t : null); }
    var tt = Symbol.for("react.client.reference");
    function $(t) { if (t == null)
        return null; if (typeof t == "function")
        return t.$$typeof === tt ? null : t.displayName || t.name || null; if (typeof t == "string")
        return t; switch (t) {
        case B: return "Fragment";
        case K: return "Profiler";
        case _: return "StrictMode";
        case rt: return "Suspense";
        case ft: return "SuspenseList";
        case pt: return "Activity";
    } if (typeof t == "object")
        switch (t.$$typeof) {
            case D: return "Portal";
            case G: return t.displayName || "Context";
            case k: return (t._context.displayName || "Context") + ".Consumer";
            case J:
                var e = t.render;
                return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
            case V: return e = t.displayName || null, e !== null ? e : $(t.type) || "Memo";
            case X:
                e = t._payload, t = t._init;
                try {
                    return $(t(e));
                }
                catch { }
        } return null; }
    var at = Array.isArray, C = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = { pending: !1, data: null, method: null, action: null }, I = [], et = -1;
    function A(t) { return { current: t }; }
    function N(t) { 0 > et || (t.current = I[et], I[et] = null, et--); }
    function F(t, e) { et++, I[et] = t.current, t.current = e; }
    var nt = A(null), ht = A(null), gt = A(null), vt = A(null);
    function ee(t, e) { switch (F(gt, e), F(ht, t), F(nt, null), e.nodeType) {
        case 9:
        case 11:
            t = (t = e.documentElement) && (t = t.namespaceURI) ? cp(t) : 0;
            break;
        default: if (t = e.tagName, e = e.namespaceURI)
            e = cp(e), t = fp(e, t);
        else
            switch (t) {
                case "svg":
                    t = 1;
                    break;
                case "math":
                    t = 2;
                    break;
                default: t = 0;
            }
    } N(nt), F(nt, t); }
    function Gt() { N(nt), N(ht), N(gt); }
    function Ai(t) { t.memoizedState !== null && F(vt, t); var e = nt.current, n = fp(e, t.type); e !== n && (F(ht, t), F(nt, n)); }
    function Bl(t) { ht.current === t && (N(nt), N(ht)), vt.current === t && (N(vt), hl._currentValue = W); }
    var Bo, qf;
    function na(t) {
        if (Bo === void 0)
            try {
                throw Error();
            }
            catch (n) {
                var e = n.stack.trim().match(/\n( *(at )?)/);
                Bo = e && e[1] || "", qf = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
        return `
` + Bo + t + qf;
    }
    var Uo = !1;
    function Lo(t, e) {
        if (!t || Uo)
            return "";
        Uo = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var l = { DetermineComponentFrameRoot: function () { try {
                    if (e) {
                        var q = function () { throw Error(); };
                        if (Object.defineProperty(q.prototype, "props", { set: function () { throw Error(); } }), typeof Reflect == "object" && Reflect.construct) {
                            try {
                                Reflect.construct(q, []);
                            }
                            catch (O) {
                                var w = O;
                            }
                            Reflect.construct(t, [], q);
                        }
                        else {
                            try {
                                q.call();
                            }
                            catch (O) {
                                w = O;
                            }
                            t.call(q.prototype);
                        }
                    }
                    else {
                        try {
                            throw Error();
                        }
                        catch (O) {
                            w = O;
                        }
                        (q = t()) && typeof q.catch == "function" && q.catch(function () { });
                    }
                }
                catch (O) {
                    if (O && w && typeof O.stack == "string")
                        return [O.stack, w.stack];
                } return [null, null]; } };
            l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var u = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
            u && u.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
            var r = l.DetermineComponentFrameRoot(), d = r[0], g = r[1];
            if (d && g) {
                var T = d.split(`
`), z = g.split(`
`);
                for (u = l = 0; l < T.length && !T[l].includes("DetermineComponentFrameRoot");)
                    l++;
                for (; u < z.length && !z[u].includes("DetermineComponentFrameRoot");)
                    u++;
                if (l === T.length || u === z.length)
                    for (l = T.length - 1, u = z.length - 1; 1 <= l && 0 <= u && T[l] !== z[u];)
                        u--;
                for (; 1 <= l && 0 <= u; l--, u--)
                    if (T[l] !== z[u]) {
                        if (l !== 1 || u !== 1)
                            do
                                if (l--, u--, 0 > u || T[l] !== z[u]) {
                                    var U = `
` + T[l].replace(" at new ", " at ");
                                    return t.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", t.displayName)), U;
                                }
                            while (1 <= l && 0 <= u);
                        break;
                    }
            }
        }
        finally {
            Uo = !1, Error.prepareStackTrace = n;
        }
        return (n = t ? t.displayName || t.name : "") ? na(n) : "";
    }
    function x1(t, e) { switch (t.tag) {
        case 26:
        case 27:
        case 5: return na(t.type);
        case 16: return na("Lazy");
        case 13: return t.child !== e && e !== null ? na("Suspense Fallback") : na("Suspense");
        case 19: return na("SuspenseList");
        case 0:
        case 15: return Lo(t.type, !1);
        case 11: return Lo(t.type.render, !1);
        case 1: return Lo(t.type, !0);
        case 31: return na("Activity");
        default: return "";
    } }
    function Yf(t) {
        try {
            var e = "", n = null;
            do
                e += x1(t, n), n = t, t = t.return;
            while (t);
            return e;
        }
        catch (l) {
            return `
Error generating stack: ` + l.message + `
` + l.stack;
        }
    }
    var Ho = Object.prototype.hasOwnProperty, qo = a.unstable_scheduleCallback, Yo = a.unstable_cancelCallback, b1 = a.unstable_shouldYield, S1 = a.unstable_requestPaint, be = a.unstable_now, T1 = a.unstable_getCurrentPriorityLevel, Gf = a.unstable_ImmediatePriority, Xf = a.unstable_UserBlockingPriority, Ul = a.unstable_NormalPriority, A1 = a.unstable_LowPriority, kf = a.unstable_IdlePriority, E1 = a.log, M1 = a.unstable_setDisableYieldValue, Ei = null, Se = null;
    function Mn(t) { if (typeof E1 == "function" && M1(t), Se && typeof Se.setStrictMode == "function")
        try {
            Se.setStrictMode(Ei, t);
        }
        catch { } }
    var Te = Math.clz32 ? Math.clz32 : j1, D1 = Math.log, C1 = Math.LN2;
    function j1(t) { return t >>>= 0, t === 0 ? 32 : 31 - (D1(t) / C1 | 0) | 0; }
    var Ll = 256, Hl = 262144, ql = 4194304;
    function aa(t) { var e = t & 42; if (e !== 0)
        return e; switch (t & -t) {
        case 1: return 1;
        case 2: return 2;
        case 4: return 4;
        case 8: return 8;
        case 16: return 16;
        case 32: return 32;
        case 64: return 64;
        case 128: return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072: return t & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152: return t & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432: return t & 62914560;
        case 67108864: return 67108864;
        case 134217728: return 134217728;
        case 268435456: return 268435456;
        case 536870912: return 536870912;
        case 1073741824: return 0;
        default: return t;
    } }
    function Yl(t, e, n) { var l = t.pendingLanes; if (l === 0)
        return 0; var u = 0, r = t.suspendedLanes, d = t.pingedLanes; t = t.warmLanes; var g = l & 134217727; return g !== 0 ? (l = g & ~r, l !== 0 ? u = aa(l) : (d &= g, d !== 0 ? u = aa(d) : n || (n = g & ~t, n !== 0 && (u = aa(n))))) : (g = l & ~r, g !== 0 ? u = aa(g) : d !== 0 ? u = aa(d) : n || (n = l & ~t, n !== 0 && (u = aa(n)))), u === 0 ? 0 : e !== 0 && e !== u && (e & r) === 0 && (r = u & -u, n = e & -e, r >= n || r === 32 && (n & 4194048) !== 0) ? e : u; }
    function Mi(t, e) { return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0; }
    function z1(t, e) { switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64: return e + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152: return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432: return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824: return -1;
        default: return -1;
    } }
    function Zf() { var t = ql; return ql <<= 1, (ql & 62914560) === 0 && (ql = 4194304), t; }
    function Go(t) { for (var e = [], n = 0; 31 > n; n++)
        e.push(t); return e; }
    function Di(t, e) { t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0); }
    function R1(t, e, n, l, u, r) { var d = t.pendingLanes; t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0; var g = t.entanglements, T = t.expirationTimes, z = t.hiddenUpdates; for (n = d & ~n; 0 < n;) {
        var U = 31 - Te(n), q = 1 << U;
        g[U] = 0, T[U] = -1;
        var w = z[U];
        if (w !== null)
            for (z[U] = null, U = 0; U < w.length; U++) {
                var O = w[U];
                O !== null && (O.lane &= -536870913);
            }
        n &= ~q;
    } l !== 0 && Qf(t, l, 0), r !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= r & ~(d & ~e)); }
    function Qf(t, e, n) { t.pendingLanes |= e, t.suspendedLanes &= ~e; var l = 31 - Te(e); t.entangledLanes |= e, t.entanglements[l] = t.entanglements[l] | 1073741824 | n & 261930; }
    function Kf(t, e) { var n = t.entangledLanes |= e; for (t = t.entanglements; n;) {
        var l = 31 - Te(n), u = 1 << l;
        u & e | t[l] & e && (t[l] |= e), n &= ~u;
    } }
    function Jf(t, e) { var n = e & -e; return n = (n & 42) !== 0 ? 1 : Xo(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n; }
    function Xo(t) { switch (t) {
        case 2:
            t = 1;
            break;
        case 8:
            t = 4;
            break;
        case 32:
            t = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            t = 128;
            break;
        case 268435456:
            t = 134217728;
            break;
        default: t = 0;
    } return t; }
    function ko(t) { return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2; }
    function Ff() { var t = H.p; return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Vp(t.type)); }
    function Pf(t, e) { var n = H.p; try {
        return H.p = t, e();
    }
    finally {
        H.p = n;
    } }
    var Dn = Math.random().toString(36).slice(2), ne = "__reactFiber$" + Dn, de = "__reactProps$" + Dn, za = "__reactContainer$" + Dn, Zo = "__reactEvents$" + Dn, w1 = "__reactListeners$" + Dn, N1 = "__reactHandles$" + Dn, Wf = "__reactResources$" + Dn, Ci = "__reactMarker$" + Dn;
    function Qo(t) { delete t[ne], delete t[de], delete t[Zo], delete t[w1], delete t[N1]; }
    function Ra(t) { var e = t[ne]; if (e)
        return e; for (var n = t.parentNode; n;) {
        if (e = n[za] || n[ne]) {
            if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
                for (t = vp(t); t !== null;) {
                    if (n = t[ne])
                        return n;
                    t = vp(t);
                }
            return e;
        }
        t = n, n = t.parentNode;
    } return null; }
    function wa(t) { if (t = t[ne] || t[za]) {
        var e = t.tag;
        if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
            return t;
    } return null; }
    function ji(t) { var e = t.tag; if (e === 5 || e === 26 || e === 27 || e === 6)
        return t.stateNode; throw Error(o(33)); }
    function Na(t) { var e = t[Wf]; return e || (e = t[Wf] = { hoistableStyles: new Map, hoistableScripts: new Map }), e; }
    function It(t) { t[Ci] = !0; }
    var $f = new Set, If = {};
    function ia(t, e) { Oa(t, e), Oa(t + "Capture", e); }
    function Oa(t, e) { for (If[t] = e, t = 0; t < e.length; t++)
        $f.add(e[t]); }
    var O1 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), th = {}, eh = {};
    function V1(t) { return Ho.call(eh, t) ? !0 : Ho.call(th, t) ? !1 : O1.test(t) ? eh[t] = !0 : (th[t] = !0, !1); }
    function Gl(t, e, n) { if (V1(e))
        if (n === null)
            t.removeAttribute(e);
        else {
            switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                    t.removeAttribute(e);
                    return;
                case "boolean":
                    var l = e.toLowerCase().slice(0, 5);
                    if (l !== "data-" && l !== "aria-") {
                        t.removeAttribute(e);
                        return;
                    }
            }
            t.setAttribute(e, "" + n);
        } }
    function Xl(t, e, n) { if (n === null)
        t.removeAttribute(e);
    else {
        switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(e);
                return;
        }
        t.setAttribute(e, "" + n);
    } }
    function ln(t, e, n, l) { if (l === null)
        t.removeAttribute(n);
    else {
        switch (typeof l) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(n);
                return;
        }
        t.setAttributeNS(e, n, "" + l);
    } }
    function Ne(t) { switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined": return t;
        case "object": return t;
        default: return "";
    } }
    function nh(t) { var e = t.type; return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio"); }
    function _1(t, e, n) { var l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e); if (!t.hasOwnProperty(e) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
        var u = l.get, r = l.set;
        return Object.defineProperty(t, e, { configurable: !0, get: function () { return u.call(this); }, set: function (d) { n = "" + d, r.call(this, d); } }), Object.defineProperty(t, e, { enumerable: l.enumerable }), { getValue: function () { return n; }, setValue: function (d) { n = "" + d; }, stopTracking: function () { t._valueTracker = null, delete t[e]; } };
    } }
    function Ko(t) { if (!t._valueTracker) {
        var e = nh(t) ? "checked" : "value";
        t._valueTracker = _1(t, e, "" + t[e]);
    } }
    function ah(t) { if (!t)
        return !1; var e = t._valueTracker; if (!e)
        return !0; var n = e.getValue(), l = ""; return t && (l = nh(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== n ? (e.setValue(t), !0) : !1; }
    function kl(t) { if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u")
        return null; try {
        return t.activeElement || t.body;
    }
    catch {
        return t.body;
    } }
    var B1 = /[\n"\\]/g;
    function Oe(t) { return t.replace(B1, function (e) { return "\\" + e.charCodeAt(0).toString(16) + " "; }); }
    function Jo(t, e, n, l, u, r, d, g) { t.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? t.type = d : t.removeAttribute("type"), e != null ? d === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Ne(e)) : t.value !== "" + Ne(e) && (t.value = "" + Ne(e)) : d !== "submit" && d !== "reset" || t.removeAttribute("value"), e != null ? Fo(t, d, Ne(e)) : n != null ? Fo(t, d, Ne(n)) : l != null && t.removeAttribute("value"), u == null && r != null && (t.defaultChecked = !!r), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? t.name = "" + Ne(g) : t.removeAttribute("name"); }
    function ih(t, e, n, l, u, r, d, g) { if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (t.type = r), e != null || n != null) {
        if (!(r !== "submit" && r !== "reset" || e != null)) {
            Ko(t);
            return;
        }
        n = n != null ? "" + Ne(n) : "", e = e != null ? "" + Ne(e) : n, g || e === t.value || (t.value = e), t.defaultValue = e;
    } l = l ?? u, l = typeof l != "function" && typeof l != "symbol" && !!l, t.checked = g ? t.checked : !!l, t.defaultChecked = !!l, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (t.name = d), Ko(t); }
    function Fo(t, e, n) { e === "number" && kl(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n); }
    function Va(t, e, n, l) { if (t = t.options, e) {
        e = {};
        for (var u = 0; u < n.length; u++)
            e["$" + n[u]] = !0;
        for (n = 0; n < t.length; n++)
            u = e.hasOwnProperty("$" + t[n].value), t[n].selected !== u && (t[n].selected = u), u && l && (t[n].defaultSelected = !0);
    }
    else {
        for (n = "" + Ne(n), e = null, u = 0; u < t.length; u++) {
            if (t[u].value === n) {
                t[u].selected = !0, l && (t[u].defaultSelected = !0);
                return;
            }
            e !== null || t[u].disabled || (e = t[u]);
        }
        e !== null && (e.selected = !0);
    } }
    function lh(t, e, n) { if (e != null && (e = "" + Ne(e), e !== t.value && (t.value = e), n == null)) {
        t.defaultValue !== e && (t.defaultValue = e);
        return;
    } t.defaultValue = n != null ? "" + Ne(n) : ""; }
    function sh(t, e, n, l) { if (e == null) {
        if (l != null) {
            if (n != null)
                throw Error(o(92));
            if (at(l)) {
                if (1 < l.length)
                    throw Error(o(93));
                l = l[0];
            }
            n = l;
        }
        n == null && (n = ""), e = n;
    } n = Ne(e), t.defaultValue = n, l = t.textContent, l === n && l !== "" && l !== null && (t.value = l), Ko(t); }
    function _a(t, e) { if (e) {
        var n = t.firstChild;
        if (n && n === t.lastChild && n.nodeType === 3) {
            n.nodeValue = e;
            return;
        }
    } t.textContent = e; }
    var U1 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function oh(t, e, n) { var l = e.indexOf("--") === 0; n == null || typeof n == "boolean" || n === "" ? l ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : l ? t.setProperty(e, n) : typeof n != "number" || n === 0 || U1.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px"; }
    function uh(t, e, n) { if (e != null && typeof e != "object")
        throw Error(o(62)); if (t = t.style, n != null) {
        for (var l in n)
            !n.hasOwnProperty(l) || e != null && e.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
        for (var u in e)
            l = e[u], e.hasOwnProperty(u) && n[u] !== l && oh(t, u, l);
    }
    else
        for (var r in e)
            e.hasOwnProperty(r) && oh(t, r, e[r]); }
    function Po(t) { if (t.indexOf("-") === -1)
        return !1; switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph": return !1;
        default: return !0;
    } }
    var L1 = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), H1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Zl(t) { return H1.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t; }
    function sn() { }
    var Wo = null;
    function $o(t) { return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t; }
    var Ba = null, Ua = null;
    function rh(t) { var e = wa(t); if (e && (t = e.stateNode)) {
        var n = t[de] || null;
        t: switch (t = e.stateNode, e.type) {
            case "input":
                if (Jo(t, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), e = n.name, n.type === "radio" && e != null) {
                    for (n = t; n.parentNode;)
                        n = n.parentNode;
                    for (n = n.querySelectorAll('input[name="' + Oe("" + e) + '"][type="radio"]'), e = 0; e < n.length; e++) {
                        var l = n[e];
                        if (l !== t && l.form === t.form) {
                            var u = l[de] || null;
                            if (!u)
                                throw Error(o(90));
                            Jo(l, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name);
                        }
                    }
                    for (e = 0; e < n.length; e++)
                        l = n[e], l.form === t.form && ah(l);
                }
                break t;
            case "textarea":
                lh(t, n.value, n.defaultValue);
                break t;
            case "select": e = n.value, e != null && Va(t, !!n.multiple, e, !1);
        }
    } }
    var Io = !1;
    function ch(t, e, n) { if (Io)
        return t(e, n); Io = !0; try {
        var l = t(e);
        return l;
    }
    finally {
        if (Io = !1, (Ba !== null || Ua !== null) && (Ns(), Ba && (e = Ba, t = Ua, Ua = Ba = null, rh(e), t)))
            for (e = 0; e < t.length; e++)
                rh(t[e]);
    } }
    function zi(t, e) { var n = t.stateNode; if (n === null)
        return null; var l = n[de] || null; if (l === null)
        return null; n = l[e]; t: switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (l = !l.disabled) || (t = t.type, l = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !l;
            break t;
        default: t = !1;
    } if (t)
        return null; if (n && typeof n != "function")
        throw Error(o(231, e, typeof n)); return n; }
    var on = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), tu = !1;
    if (on)
        try {
            var Ri = {};
            Object.defineProperty(Ri, "passive", { get: function () { tu = !0; } }), window.addEventListener("test", Ri, Ri), window.removeEventListener("test", Ri, Ri);
        }
        catch {
            tu = !1;
        }
    var Cn = null, eu = null, Ql = null;
    function fh() { if (Ql)
        return Ql; var t, e = eu, n = e.length, l, u = "value" in Cn ? Cn.value : Cn.textContent, r = u.length; for (t = 0; t < n && e[t] === u[t]; t++)
        ; var d = n - t; for (l = 1; l <= d && e[n - l] === u[r - l]; l++)
        ; return Ql = u.slice(t, 1 < l ? 1 - l : void 0); }
    function Kl(t) { var e = t.keyCode; return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0; }
    function Jl() { return !0; }
    function hh() { return !1; }
    function me(t) { function e(n, l, u, r, d) { this._reactName = n, this._targetInst = u, this.type = l, this.nativeEvent = r, this.target = d, this.currentTarget = null; for (var g in t)
        t.hasOwnProperty(g) && (n = t[g], this[g] = n ? n(r) : r[g]); return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? Jl : hh, this.isPropagationStopped = hh, this; } return x(e.prototype, { preventDefault: function () { this.defaultPrevented = !0; var n = this.nativeEvent; n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Jl); }, stopPropagation: function () { var n = this.nativeEvent; n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Jl); }, persist: function () { }, isPersistent: Jl }), e; }
    var la = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (t) { return t.timeStamp || Date.now(); }, defaultPrevented: 0, isTrusted: 0 }, Fl = me(la), wi = x({}, la, { view: 0, detail: 0 }), q1 = me(wi), nu, au, Ni, Pl = x({}, wi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: lu, button: 0, buttons: 0, relatedTarget: function (t) { return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget; }, movementX: function (t) { return "movementX" in t ? t.movementX : (t !== Ni && (Ni && t.type === "mousemove" ? (nu = t.screenX - Ni.screenX, au = t.screenY - Ni.screenY) : au = nu = 0, Ni = t), nu); }, movementY: function (t) { return "movementY" in t ? t.movementY : au; } }), dh = me(Pl), Y1 = x({}, Pl, { dataTransfer: 0 }), G1 = me(Y1), X1 = x({}, wi, { relatedTarget: 0 }), iu = me(X1), k1 = x({}, la, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Z1 = me(k1), Q1 = x({}, la, { clipboardData: function (t) { return "clipboardData" in t ? t.clipboardData : window.clipboardData; } }), K1 = me(Q1), J1 = x({}, la, { data: 0 }), mh = me(J1), F1 = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, P1 = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, W1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function $1(t) { var e = this.nativeEvent; return e.getModifierState ? e.getModifierState(t) : (t = W1[t]) ? !!e[t] : !1; }
    function lu() { return $1; }
    var I1 = x({}, wi, { key: function (t) { if (t.key) {
            var e = F1[t.key] || t.key;
            if (e !== "Unidentified")
                return e;
        } return t.type === "keypress" ? (t = Kl(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? P1[t.keyCode] || "Unidentified" : ""; }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: lu, charCode: function (t) { return t.type === "keypress" ? Kl(t) : 0; }, keyCode: function (t) { return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0; }, which: function (t) { return t.type === "keypress" ? Kl(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0; } }), tv = me(I1), ev = x({}, Pl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ph = me(ev), nv = x({}, wi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: lu }), av = me(nv), iv = x({}, la, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), lv = me(iv), sv = x({}, Pl, { deltaX: function (t) { return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0; }, deltaY: function (t) { return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0; }, deltaZ: 0, deltaMode: 0 }), ov = me(sv), uv = x({}, la, { newState: 0, oldState: 0 }), rv = me(uv), cv = [9, 13, 27, 32], su = on && "CompositionEvent" in window, Oi = null;
    on && "documentMode" in document && (Oi = document.documentMode);
    var fv = on && "TextEvent" in window && !Oi, yh = on && (!su || Oi && 8 < Oi && 11 >= Oi), gh = " ", vh = !1;
    function xh(t, e) { switch (t) {
        case "keyup": return cv.indexOf(e.keyCode) !== -1;
        case "keydown": return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout": return !0;
        default: return !1;
    } }
    function bh(t) { return t = t.detail, typeof t == "object" && "data" in t ? t.data : null; }
    var La = !1;
    function hv(t, e) { switch (t) {
        case "compositionend": return bh(e);
        case "keypress": return e.which !== 32 ? null : (vh = !0, gh);
        case "textInput": return t = e.data, t === gh && vh ? null : t;
        default: return null;
    } }
    function dv(t, e) { if (La)
        return t === "compositionend" || !su && xh(t, e) ? (t = fh(), Ql = eu = Cn = null, La = !1, t) : null; switch (t) {
        case "paste": return null;
        case "keypress":
            if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                if (e.char && 1 < e.char.length)
                    return e.char;
                if (e.which)
                    return String.fromCharCode(e.which);
            }
            return null;
        case "compositionend": return yh && e.locale !== "ko" ? null : e.data;
        default: return null;
    } }
    var mv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
    function Sh(t) { var e = t && t.nodeName && t.nodeName.toLowerCase(); return e === "input" ? !!mv[t.type] : e === "textarea"; }
    function Th(t, e, n, l) { Ba ? Ua ? Ua.push(l) : Ua = [l] : Ba = l, e = Hs(e, "onChange"), 0 < e.length && (n = new Fl("onChange", "change", null, n, l), t.push({ event: n, listeners: e })); }
    var Vi = null, _i = null;
    function pv(t) { ip(t, 0); }
    function Wl(t) { var e = ji(t); if (ah(e))
        return t; }
    function Ah(t, e) { if (t === "change")
        return e; }
    var Eh = !1;
    if (on) {
        var ou;
        if (on) {
            var uu = "oninput" in document;
            if (!uu) {
                var Mh = document.createElement("div");
                Mh.setAttribute("oninput", "return;"), uu = typeof Mh.oninput == "function";
            }
            ou = uu;
        }
        else
            ou = !1;
        Eh = ou && (!document.documentMode || 9 < document.documentMode);
    }
    function Dh() { Vi && (Vi.detachEvent("onpropertychange", Ch), _i = Vi = null); }
    function Ch(t) { if (t.propertyName === "value" && Wl(_i)) {
        var e = [];
        Th(e, _i, t, $o(t)), ch(pv, e);
    } }
    function yv(t, e, n) { t === "focusin" ? (Dh(), Vi = e, _i = n, Vi.attachEvent("onpropertychange", Ch)) : t === "focusout" && Dh(); }
    function gv(t) { if (t === "selectionchange" || t === "keyup" || t === "keydown")
        return Wl(_i); }
    function vv(t, e) { if (t === "click")
        return Wl(e); }
    function xv(t, e) { if (t === "input" || t === "change")
        return Wl(e); }
    function bv(t, e) { return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e; }
    var Ae = typeof Object.is == "function" ? Object.is : bv;
    function Bi(t, e) { if (Ae(t, e))
        return !0; if (typeof t != "object" || t === null || typeof e != "object" || e === null)
        return !1; var n = Object.keys(t), l = Object.keys(e); if (n.length !== l.length)
        return !1; for (l = 0; l < n.length; l++) {
        var u = n[l];
        if (!Ho.call(e, u) || !Ae(t[u], e[u]))
            return !1;
    } return !0; }
    function jh(t) { for (; t && t.firstChild;)
        t = t.firstChild; return t; }
    function zh(t, e) { var n = jh(t); t = 0; for (var l; n;) {
        if (n.nodeType === 3) {
            if (l = t + n.textContent.length, t <= e && l >= e)
                return { node: n, offset: e - t };
            t = l;
        }
        t: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break t;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = jh(n);
    } }
    function Rh(t, e) { return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Rh(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1; }
    function wh(t) { t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window; for (var e = kl(t.document); e instanceof t.HTMLIFrameElement;) {
        try {
            var n = typeof e.contentWindow.location.href == "string";
        }
        catch {
            n = !1;
        }
        if (n)
            t = e.contentWindow;
        else
            break;
        e = kl(t.document);
    } return e; }
    function ru(t) { var e = t && t.nodeName && t.nodeName.toLowerCase(); return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true"); }
    var Sv = on && "documentMode" in document && 11 >= document.documentMode, Ha = null, cu = null, Ui = null, fu = !1;
    function Nh(t, e, n) { var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument; fu || Ha == null || Ha !== kl(l) || (l = Ha, "selectionStart" in l && ru(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset }), Ui && Bi(Ui, l) || (Ui = l, l = Hs(cu, "onSelect"), 0 < l.length && (e = new Fl("onSelect", "select", null, e, n), t.push({ event: e, listeners: l }), e.target = Ha))); }
    function sa(t, e) { var n = {}; return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n; }
    var qa = { animationend: sa("Animation", "AnimationEnd"), animationiteration: sa("Animation", "AnimationIteration"), animationstart: sa("Animation", "AnimationStart"), transitionrun: sa("Transition", "TransitionRun"), transitionstart: sa("Transition", "TransitionStart"), transitioncancel: sa("Transition", "TransitionCancel"), transitionend: sa("Transition", "TransitionEnd") }, hu = {}, Oh = {};
    on && (Oh = document.createElement("div").style, "AnimationEvent" in window || (delete qa.animationend.animation, delete qa.animationiteration.animation, delete qa.animationstart.animation), "TransitionEvent" in window || delete qa.transitionend.transition);
    function oa(t) { if (hu[t])
        return hu[t]; if (!qa[t])
        return t; var e = qa[t], n; for (n in e)
        if (e.hasOwnProperty(n) && n in Oh)
            return hu[t] = e[n]; return t; }
    var Vh = oa("animationend"), _h = oa("animationiteration"), Bh = oa("animationstart"), Tv = oa("transitionrun"), Av = oa("transitionstart"), Ev = oa("transitioncancel"), Uh = oa("transitionend"), Lh = new Map, du = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    du.push("scrollEnd");
    function Xe(t, e) { Lh.set(t, e), ia(e, [t]); }
    var $l = typeof reportError == "function" ? reportError : function (t) { if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var e = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t), error: t });
        if (!window.dispatchEvent(e))
            return;
    }
    else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", t);
        return;
    } console.error(t); }, Ve = [], Ya = 0, mu = 0;
    function Il() { for (var t = Ya, e = mu = Ya = 0; e < t;) {
        var n = Ve[e];
        Ve[e++] = null;
        var l = Ve[e];
        Ve[e++] = null;
        var u = Ve[e];
        Ve[e++] = null;
        var r = Ve[e];
        if (Ve[e++] = null, l !== null && u !== null) {
            var d = l.pending;
            d === null ? u.next = u : (u.next = d.next, d.next = u), l.pending = u;
        }
        r !== 0 && Hh(n, u, r);
    } }
    function ts(t, e, n, l) { Ve[Ya++] = t, Ve[Ya++] = e, Ve[Ya++] = n, Ve[Ya++] = l, mu |= l, t.lanes |= l, t = t.alternate, t !== null && (t.lanes |= l); }
    function pu(t, e, n, l) { return ts(t, e, n, l), es(t); }
    function ua(t, e) { return ts(t, null, null, e), es(t); }
    function Hh(t, e, n) { t.lanes |= n; var l = t.alternate; l !== null && (l.lanes |= n); for (var u = !1, r = t.return; r !== null;)
        r.childLanes |= n, l = r.alternate, l !== null && (l.childLanes |= n), r.tag === 22 && (t = r.stateNode, t === null || t._visibility & 1 || (u = !0)), t = r, r = r.return; return t.tag === 3 ? (r = t.stateNode, u && e !== null && (u = 31 - Te(n), t = r.hiddenUpdates, l = t[u], l === null ? t[u] = [e] : l.push(e), e.lane = n | 536870912), r) : null; }
    function es(t) { if (50 < ll)
        throw ll = 0, Er = null, Error(o(185)); for (var e = t.return; e !== null;)
        t = e, e = t.return; return t.tag === 3 ? t.stateNode : null; }
    var Ga = {};
    function Mv(t, e, n, l) { this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null; }
    function Ee(t, e, n, l) { return new Mv(t, e, n, l); }
    function yu(t) { return t = t.prototype, !(!t || !t.isReactComponent); }
    function un(t, e) { var n = t.alternate; return n === null ? (n = Ee(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 65011712, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n; }
    function qh(t, e) { t.flags &= 65011714; var n = t.alternate; return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t; }
    function ns(t, e, n, l, u, r) { var d = 0; if (l = t, typeof t == "function")
        yu(t) && (d = 1);
    else if (typeof t == "string")
        d = Rx(t, n, nt.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
        t: switch (t) {
            case pt: return t = Ee(31, n, e, u), t.elementType = pt, t.lanes = r, t;
            case B: return ra(n.children, u, r, e);
            case _:
                d = 8, u |= 24;
                break;
            case K: return t = Ee(12, n, e, u | 2), t.elementType = K, t.lanes = r, t;
            case rt: return t = Ee(13, n, e, u), t.elementType = rt, t.lanes = r, t;
            case ft: return t = Ee(19, n, e, u), t.elementType = ft, t.lanes = r, t;
            default:
                if (typeof t == "object" && t !== null)
                    switch (t.$$typeof) {
                        case G:
                            d = 10;
                            break t;
                        case k:
                            d = 9;
                            break t;
                        case J:
                            d = 11;
                            break t;
                        case V:
                            d = 14;
                            break t;
                        case X:
                            d = 16, l = null;
                            break t;
                    }
                d = 29, n = Error(o(130, t === null ? "null" : typeof t, "")), l = null;
        } return e = Ee(d, n, e, u), e.elementType = t, e.type = l, e.lanes = r, e; }
    function ra(t, e, n, l) { return t = Ee(7, t, l, e), t.lanes = n, t; }
    function gu(t, e, n) { return t = Ee(6, t, null, e), t.lanes = n, t; }
    function Yh(t) { var e = Ee(18, null, null, 0); return e.stateNode = t, e; }
    function vu(t, e, n) { return e = Ee(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, e; }
    var Gh = new WeakMap;
    function _e(t, e) { if (typeof t == "object" && t !== null) {
        var n = Gh.get(t);
        return n !== void 0 ? n : (e = { value: t, source: e, stack: Yf(e) }, Gh.set(t, e), e);
    } return { value: t, source: e, stack: Yf(e) }; }
    var Xa = [], ka = 0, as = null, Li = 0, Be = [], Ue = 0, jn = null, We = 1, $e = "";
    function rn(t, e) { Xa[ka++] = Li, Xa[ka++] = as, as = t, Li = e; }
    function Xh(t, e, n) { Be[Ue++] = We, Be[Ue++] = $e, Be[Ue++] = jn, jn = t; var l = We; t = $e; var u = 32 - Te(l) - 1; l &= ~(1 << u), n += 1; var r = 32 - Te(e) + u; if (30 < r) {
        var d = u - u % 5;
        r = (l & (1 << d) - 1).toString(32), l >>= d, u -= d, We = 1 << 32 - Te(e) + u | n << u | l, $e = r + t;
    }
    else
        We = 1 << r | n << u | l, $e = t; }
    function xu(t) { t.return !== null && (rn(t, 1), Xh(t, 1, 0)); }
    function bu(t) { for (; t === as;)
        as = Xa[--ka], Xa[ka] = null, Li = Xa[--ka], Xa[ka] = null; for (; t === jn;)
        jn = Be[--Ue], Be[Ue] = null, $e = Be[--Ue], Be[Ue] = null, We = Be[--Ue], Be[Ue] = null; }
    function kh(t, e) { Be[Ue++] = We, Be[Ue++] = $e, Be[Ue++] = jn, We = e.id, $e = e.overflow, jn = t; }
    var ae = null, Bt = null, Et = !1, zn = null, Le = !1, Su = Error(o(519));
    function Rn(t) { var e = Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")); throw Hi(_e(e, t)), Su; }
    function Zh(t) { var e = t.stateNode, n = t.type, l = t.memoizedProps; switch (e[ne] = t, e[de] = l, n) {
        case "dialog":
            St("cancel", e), St("close", e);
            break;
        case "iframe":
        case "object":
        case "embed":
            St("load", e);
            break;
        case "video":
        case "audio":
            for (n = 0; n < ol.length; n++)
                St(ol[n], e);
            break;
        case "source":
            St("error", e);
            break;
        case "img":
        case "image":
        case "link":
            St("error", e), St("load", e);
            break;
        case "details":
            St("toggle", e);
            break;
        case "input":
            St("invalid", e), ih(e, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0);
            break;
        case "select":
            St("invalid", e);
            break;
        case "textarea": St("invalid", e), sh(e, l.value, l.defaultValue, l.children);
    } n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || l.suppressHydrationWarning === !0 || up(e.textContent, n) ? (l.popover != null && (St("beforetoggle", e), St("toggle", e)), l.onScroll != null && St("scroll", e), l.onScrollEnd != null && St("scrollend", e), l.onClick != null && (e.onclick = sn), e = !0) : e = !1, e || Rn(t, !0); }
    function Qh(t) { for (ae = t.return; ae;)
        switch (ae.tag) {
            case 5:
            case 31:
            case 13:
                Le = !1;
                return;
            case 27:
            case 3:
                Le = !0;
                return;
            default: ae = ae.return;
        } }
    function Za(t) { if (t !== ae)
        return !1; if (!Et)
        return Qh(t), Et = !0, !1; var e = t.tag, n; if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || Hr(t.type, t.memoizedProps)), n = !n), n && Bt && Rn(t), Qh(t), e === 13) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t)
            throw Error(o(317));
        Bt = gp(t);
    }
    else if (e === 31) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t)
            throw Error(o(317));
        Bt = gp(t);
    }
    else
        e === 27 ? (e = Bt, kn(t.type) ? (t = kr, kr = null, Bt = t) : Bt = e) : Bt = ae ? qe(t.stateNode.nextSibling) : null; return !0; }
    function ca() { Bt = ae = null, Et = !1; }
    function Tu() { var t = zn; return t !== null && (ve === null ? ve = t : ve.push.apply(ve, t), zn = null), t; }
    function Hi(t) { zn === null ? zn = [t] : zn.push(t); }
    var Au = A(null), fa = null, cn = null;
    function wn(t, e, n) { F(Au, e._currentValue), e._currentValue = n; }
    function fn(t) { t._currentValue = Au.current, N(Au); }
    function Eu(t, e, n) { for (; t !== null;) {
        var l = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e, l !== null && (l.childLanes |= e)) : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e), t === n)
            break;
        t = t.return;
    } }
    function Mu(t, e, n, l) { var u = t.child; for (u !== null && (u.return = t); u !== null;) {
        var r = u.dependencies;
        if (r !== null) {
            var d = u.child;
            r = r.firstContext;
            t: for (; r !== null;) {
                var g = r;
                r = u;
                for (var T = 0; T < e.length; T++)
                    if (g.context === e[T]) {
                        r.lanes |= n, g = r.alternate, g !== null && (g.lanes |= n), Eu(r.return, n, t), l || (d = null);
                        break t;
                    }
                r = g.next;
            }
        }
        else if (u.tag === 18) {
            if (d = u.return, d === null)
                throw Error(o(341));
            d.lanes |= n, r = d.alternate, r !== null && (r.lanes |= n), Eu(d, n, t), d = null;
        }
        else
            d = u.child;
        if (d !== null)
            d.return = u;
        else
            for (d = u; d !== null;) {
                if (d === t) {
                    d = null;
                    break;
                }
                if (u = d.sibling, u !== null) {
                    u.return = d.return, d = u;
                    break;
                }
                d = d.return;
            }
        u = d;
    } }
    function Qa(t, e, n, l) { t = null; for (var u = e, r = !1; u !== null;) {
        if (!r) {
            if ((u.flags & 524288) !== 0)
                r = !0;
            else if ((u.flags & 262144) !== 0)
                break;
        }
        if (u.tag === 10) {
            var d = u.alternate;
            if (d === null)
                throw Error(o(387));
            if (d = d.memoizedProps, d !== null) {
                var g = u.type;
                Ae(u.pendingProps.value, d.value) || (t !== null ? t.push(g) : t = [g]);
            }
        }
        else if (u === vt.current) {
            if (d = u.alternate, d === null)
                throw Error(o(387));
            d.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(hl) : t = [hl]);
        }
        u = u.return;
    } t !== null && Mu(e, t, n, l), e.flags |= 262144; }
    function is(t) { for (t = t.firstContext; t !== null;) {
        if (!Ae(t.context._currentValue, t.memoizedValue))
            return !0;
        t = t.next;
    } return !1; }
    function ha(t) { fa = t, cn = null, t = t.dependencies, t !== null && (t.firstContext = null); }
    function ie(t) { return Kh(fa, t); }
    function ls(t, e) { return fa === null && ha(t), Kh(t, e); }
    function Kh(t, e) { var n = e._currentValue; if (e = { context: e, memoizedValue: n, next: null }, cn === null) {
        if (t === null)
            throw Error(o(308));
        cn = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    }
    else
        cn = cn.next = e; return n; }
    var Dv = typeof AbortController < "u" ? AbortController : function () { var t = [], e = this.signal = { aborted: !1, addEventListener: function (n, l) { t.push(l); } }; this.abort = function () { e.aborted = !0, t.forEach(function (n) { return n(); }); }; }, Cv = a.unstable_scheduleCallback, jv = a.unstable_NormalPriority, Zt = { $$typeof: G, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
    function Du() { return { controller: new Dv, data: new Map, refCount: 0 }; }
    function qi(t) { t.refCount--, t.refCount === 0 && Cv(jv, function () { t.controller.abort(); }); }
    var Yi = null, Cu = 0, Ka = 0, Ja = null;
    function zv(t, e) { if (Yi === null) {
        var n = Yi = [];
        Cu = 0, Ka = Rr(), Ja = { status: "pending", value: void 0, then: function (l) { n.push(l); } };
    } return Cu++, e.then(Jh, Jh), e; }
    function Jh() { if (--Cu === 0 && Yi !== null) {
        Ja !== null && (Ja.status = "fulfilled");
        var t = Yi;
        Yi = null, Ka = 0, Ja = null;
        for (var e = 0; e < t.length; e++)
            (0, t[e])();
    } }
    function Rv(t, e) { var n = [], l = { status: "pending", value: null, reason: null, then: function (u) { n.push(u); } }; return t.then(function () { l.status = "fulfilled", l.value = e; for (var u = 0; u < n.length; u++)
        (0, n[u])(e); }, function (u) { for (l.status = "rejected", l.reason = u, u = 0; u < n.length; u++)
        (0, n[u])(void 0); }), l; }
    var Fh = C.S;
    C.S = function (t, e) { Nm = be(), typeof e == "object" && e !== null && typeof e.then == "function" && zv(t, e), Fh !== null && Fh(t, e); };
    var da = A(null);
    function ju() { var t = da.current; return t !== null ? t : _t.pooledCache; }
    function ss(t, e) { e === null ? F(da, da.current) : F(da, e.pool); }
    function Ph() { var t = ju(); return t === null ? null : { parent: Zt._currentValue, pool: t }; }
    var Fa = Error(o(460)), zu = Error(o(474)), os = Error(o(542)), us = { then: function () { } };
    function Wh(t) { return t = t.status, t === "fulfilled" || t === "rejected"; }
    function $h(t, e, n) { switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(sn, sn), e = n), e.status) {
        case "fulfilled": return e.value;
        case "rejected": throw t = e.reason, td(t), t;
        default:
            if (typeof e.status == "string")
                e.then(sn, sn);
            else {
                if (t = _t, t !== null && 100 < t.shellSuspendCounter)
                    throw Error(o(482));
                t = e, t.status = "pending", t.then(function (l) { if (e.status === "pending") {
                    var u = e;
                    u.status = "fulfilled", u.value = l;
                } }, function (l) { if (e.status === "pending") {
                    var u = e;
                    u.status = "rejected", u.reason = l;
                } });
            }
            switch (e.status) {
                case "fulfilled": return e.value;
                case "rejected": throw t = e.reason, td(t), t;
            }
            throw pa = e, Fa;
    } }
    function ma(t) { try {
        var e = t._init;
        return e(t._payload);
    }
    catch (n) {
        throw n !== null && typeof n == "object" && typeof n.then == "function" ? (pa = n, Fa) : n;
    } }
    var pa = null;
    function Ih() { if (pa === null)
        throw Error(o(459)); var t = pa; return pa = null, t; }
    function td(t) { if (t === Fa || t === os)
        throw Error(o(483)); }
    var Pa = null, Gi = 0;
    function rs(t) { var e = Gi; return Gi += 1, Pa === null && (Pa = []), $h(Pa, t, e); }
    function Xi(t, e) { e = e.props.ref, t.ref = e !== void 0 ? e : null; }
    function cs(t, e) { throw e.$$typeof === S ? Error(o(525)) : (t = Object.prototype.toString.call(e), Error(o(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t))); }
    function ed(t) { function e(M, E) { if (t) {
        var j = M.deletions;
        j === null ? (M.deletions = [E], M.flags |= 16) : j.push(E);
    } } function n(M, E) { if (!t)
        return null; for (; E !== null;)
        e(M, E), E = E.sibling; return null; } function l(M) { for (var E = new Map; M !== null;)
        M.key !== null ? E.set(M.key, M) : E.set(M.index, M), M = M.sibling; return E; } function u(M, E) { return M = un(M, E), M.index = 0, M.sibling = null, M; } function r(M, E, j) { return M.index = j, t ? (j = M.alternate, j !== null ? (j = j.index, j < E ? (M.flags |= 67108866, E) : j) : (M.flags |= 67108866, E)) : (M.flags |= 1048576, E); } function d(M) { return t && M.alternate === null && (M.flags |= 67108866), M; } function g(M, E, j, L) { return E === null || E.tag !== 6 ? (E = gu(j, M.mode, L), E.return = M, E) : (E = u(E, j), E.return = M, E); } function T(M, E, j, L) { var ut = j.type; return ut === B ? U(M, E, j.props.children, L, j.key) : E !== null && (E.elementType === ut || typeof ut == "object" && ut !== null && ut.$$typeof === X && ma(ut) === E.type) ? (E = u(E, j.props), Xi(E, j), E.return = M, E) : (E = ns(j.type, j.key, j.props, null, M.mode, L), Xi(E, j), E.return = M, E); } function z(M, E, j, L) { return E === null || E.tag !== 4 || E.stateNode.containerInfo !== j.containerInfo || E.stateNode.implementation !== j.implementation ? (E = vu(j, M.mode, L), E.return = M, E) : (E = u(E, j.children || []), E.return = M, E); } function U(M, E, j, L, ut) { return E === null || E.tag !== 7 ? (E = ra(j, M.mode, L, ut), E.return = M, E) : (E = u(E, j), E.return = M, E); } function q(M, E, j) { if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = gu("" + E, M.mode, j), E.return = M, E; if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
            case R: return j = ns(E.type, E.key, E.props, null, M.mode, j), Xi(j, E), j.return = M, j;
            case D: return E = vu(E, M.mode, j), E.return = M, E;
            case X: return E = ma(E), q(M, E, j);
        }
        if (at(E) || Z(E))
            return E = ra(E, M.mode, j, null), E.return = M, E;
        if (typeof E.then == "function")
            return q(M, rs(E), j);
        if (E.$$typeof === G)
            return q(M, ls(M, E), j);
        cs(M, E);
    } return null; } function w(M, E, j, L) { var ut = E !== null ? E.key : null; if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
        return ut !== null ? null : g(M, E, "" + j, L); if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
            case R: return j.key === ut ? T(M, E, j, L) : null;
            case D: return j.key === ut ? z(M, E, j, L) : null;
            case X: return j = ma(j), w(M, E, j, L);
        }
        if (at(j) || Z(j))
            return ut !== null ? null : U(M, E, j, L, null);
        if (typeof j.then == "function")
            return w(M, E, rs(j), L);
        if (j.$$typeof === G)
            return w(M, E, ls(M, j), L);
        cs(M, j);
    } return null; } function O(M, E, j, L, ut) { if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
        return M = M.get(j) || null, g(E, M, "" + L, ut); if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
            case R: return M = M.get(L.key === null ? j : L.key) || null, T(E, M, L, ut);
            case D: return M = M.get(L.key === null ? j : L.key) || null, z(E, M, L, ut);
            case X: return L = ma(L), O(M, E, j, L, ut);
        }
        if (at(L) || Z(L))
            return M = M.get(j) || null, U(E, M, L, ut, null);
        if (typeof L.then == "function")
            return O(M, E, j, rs(L), ut);
        if (L.$$typeof === G)
            return O(M, E, j, ls(E, L), ut);
        cs(E, L);
    } return null; } function it(M, E, j, L) { for (var ut = null, Mt = null, st = E, xt = E = 0, At = null; st !== null && xt < j.length; xt++) {
        st.index > xt ? (At = st, st = null) : At = st.sibling;
        var Dt = w(M, st, j[xt], L);
        if (Dt === null) {
            st === null && (st = At);
            break;
        }
        t && st && Dt.alternate === null && e(M, st), E = r(Dt, E, xt), Mt === null ? ut = Dt : Mt.sibling = Dt, Mt = Dt, st = At;
    } if (xt === j.length)
        return n(M, st), Et && rn(M, xt), ut; if (st === null) {
        for (; xt < j.length; xt++)
            st = q(M, j[xt], L), st !== null && (E = r(st, E, xt), Mt === null ? ut = st : Mt.sibling = st, Mt = st);
        return Et && rn(M, xt), ut;
    } for (st = l(st); xt < j.length; xt++)
        At = O(st, M, xt, j[xt], L), At !== null && (t && At.alternate !== null && st.delete(At.key === null ? xt : At.key), E = r(At, E, xt), Mt === null ? ut = At : Mt.sibling = At, Mt = At); return t && st.forEach(function (Fn) { return e(M, Fn); }), Et && rn(M, xt), ut; } function ct(M, E, j, L) { if (j == null)
        throw Error(o(151)); for (var ut = null, Mt = null, st = E, xt = E = 0, At = null, Dt = j.next(); st !== null && !Dt.done; xt++, Dt = j.next()) {
        st.index > xt ? (At = st, st = null) : At = st.sibling;
        var Fn = w(M, st, Dt.value, L);
        if (Fn === null) {
            st === null && (st = At);
            break;
        }
        t && st && Fn.alternate === null && e(M, st), E = r(Fn, E, xt), Mt === null ? ut = Fn : Mt.sibling = Fn, Mt = Fn, st = At;
    } if (Dt.done)
        return n(M, st), Et && rn(M, xt), ut; if (st === null) {
        for (; !Dt.done; xt++, Dt = j.next())
            Dt = q(M, Dt.value, L), Dt !== null && (E = r(Dt, E, xt), Mt === null ? ut = Dt : Mt.sibling = Dt, Mt = Dt);
        return Et && rn(M, xt), ut;
    } for (st = l(st); !Dt.done; xt++, Dt = j.next())
        Dt = O(st, M, xt, Dt.value, L), Dt !== null && (t && Dt.alternate !== null && st.delete(Dt.key === null ? xt : Dt.key), E = r(Dt, E, xt), Mt === null ? ut = Dt : Mt.sibling = Dt, Mt = Dt); return t && st.forEach(function (Yx) { return e(M, Yx); }), Et && rn(M, xt), ut; } function Ot(M, E, j, L) { if (typeof j == "object" && j !== null && j.type === B && j.key === null && (j = j.props.children), typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
            case R:
                t: {
                    for (var ut = j.key; E !== null;) {
                        if (E.key === ut) {
                            if (ut = j.type, ut === B) {
                                if (E.tag === 7) {
                                    n(M, E.sibling), L = u(E, j.props.children), L.return = M, M = L;
                                    break t;
                                }
                            }
                            else if (E.elementType === ut || typeof ut == "object" && ut !== null && ut.$$typeof === X && ma(ut) === E.type) {
                                n(M, E.sibling), L = u(E, j.props), Xi(L, j), L.return = M, M = L;
                                break t;
                            }
                            n(M, E);
                            break;
                        }
                        else
                            e(M, E);
                        E = E.sibling;
                    }
                    j.type === B ? (L = ra(j.props.children, M.mode, L, j.key), L.return = M, M = L) : (L = ns(j.type, j.key, j.props, null, M.mode, L), Xi(L, j), L.return = M, M = L);
                }
                return d(M);
            case D:
                t: {
                    for (ut = j.key; E !== null;) {
                        if (E.key === ut)
                            if (E.tag === 4 && E.stateNode.containerInfo === j.containerInfo && E.stateNode.implementation === j.implementation) {
                                n(M, E.sibling), L = u(E, j.children || []), L.return = M, M = L;
                                break t;
                            }
                            else {
                                n(M, E);
                                break;
                            }
                        else
                            e(M, E);
                        E = E.sibling;
                    }
                    L = vu(j, M.mode, L), L.return = M, M = L;
                }
                return d(M);
            case X: return j = ma(j), Ot(M, E, j, L);
        }
        if (at(j))
            return it(M, E, j, L);
        if (Z(j)) {
            if (ut = Z(j), typeof ut != "function")
                throw Error(o(150));
            return j = ut.call(j), ct(M, E, j, L);
        }
        if (typeof j.then == "function")
            return Ot(M, E, rs(j), L);
        if (j.$$typeof === G)
            return Ot(M, E, ls(M, j), L);
        cs(M, j);
    } return typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint" ? (j = "" + j, E !== null && E.tag === 6 ? (n(M, E.sibling), L = u(E, j), L.return = M, M = L) : (n(M, E), L = gu(j, M.mode, L), L.return = M, M = L), d(M)) : n(M, E); } return function (M, E, j, L) { try {
        Gi = 0;
        var ut = Ot(M, E, j, L);
        return Pa = null, ut;
    }
    catch (st) {
        if (st === Fa || st === os)
            throw st;
        var Mt = Ee(29, st, null, M.mode);
        return Mt.lanes = L, Mt.return = M, Mt;
    } }; }
    var ya = ed(!0), nd = ed(!1), Nn = !1;
    function Ru(t) { t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null }; }
    function wu(t, e) { t = t.updateQueue, e.updateQueue === t && (e.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, callbacks: null }); }
    function On(t) { return { lane: t, tag: 0, payload: null, callback: null, next: null }; }
    function Vn(t, e, n) { var l = t.updateQueue; if (l === null)
        return null; if (l = l.shared, (Ct & 2) !== 0) {
        var u = l.pending;
        return u === null ? e.next = e : (e.next = u.next, u.next = e), l.pending = e, e = es(t), Hh(t, null, n), e;
    } return ts(t, l, e, n), es(t); }
    function ki(t, e, n) { if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
        var l = e.lanes;
        l &= t.pendingLanes, n |= l, e.lanes = n, Kf(t, n);
    } }
    function Nu(t, e) { var n = t.updateQueue, l = t.alternate; if (l !== null && (l = l.updateQueue, n === l)) {
        var u = null, r = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var d = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
                r === null ? u = r = d : r = r.next = d, n = n.next;
            } while (n !== null);
            r === null ? u = r = e : r = r.next = e;
        }
        else
            u = r = e;
        n = { baseState: l.baseState, firstBaseUpdate: u, lastBaseUpdate: r, shared: l.shared, callbacks: l.callbacks }, t.updateQueue = n;
        return;
    } t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e; }
    var Ou = !1;
    function Zi() { if (Ou) {
        var t = Ja;
        if (t !== null)
            throw t;
    } }
    function Qi(t, e, n, l) { Ou = !1; var u = t.updateQueue; Nn = !1; var r = u.firstBaseUpdate, d = u.lastBaseUpdate, g = u.shared.pending; if (g !== null) {
        u.shared.pending = null;
        var T = g, z = T.next;
        T.next = null, d === null ? r = z : d.next = z, d = T;
        var U = t.alternate;
        U !== null && (U = U.updateQueue, g = U.lastBaseUpdate, g !== d && (g === null ? U.firstBaseUpdate = z : g.next = z, U.lastBaseUpdate = T));
    } if (r !== null) {
        var q = u.baseState;
        d = 0, U = z = T = null, g = r;
        do {
            var w = g.lane & -536870913, O = w !== g.lane;
            if (O ? (Tt & w) === w : (l & w) === w) {
                w !== 0 && w === Ka && (Ou = !0), U !== null && (U = U.next = { lane: 0, tag: g.tag, payload: g.payload, callback: null, next: null });
                t: {
                    var it = t, ct = g;
                    w = e;
                    var Ot = n;
                    switch (ct.tag) {
                        case 1:
                            if (it = ct.payload, typeof it == "function") {
                                q = it.call(Ot, q, w);
                                break t;
                            }
                            q = it;
                            break t;
                        case 3: it.flags = it.flags & -65537 | 128;
                        case 0:
                            if (it = ct.payload, w = typeof it == "function" ? it.call(Ot, q, w) : it, w == null)
                                break t;
                            q = x({}, q, w);
                            break t;
                        case 2: Nn = !0;
                    }
                }
                w = g.callback, w !== null && (t.flags |= 64, O && (t.flags |= 8192), O = u.callbacks, O === null ? u.callbacks = [w] : O.push(w));
            }
            else
                O = { lane: w, tag: g.tag, payload: g.payload, callback: g.callback, next: null }, U === null ? (z = U = O, T = q) : U = U.next = O, d |= w;
            if (g = g.next, g === null) {
                if (g = u.shared.pending, g === null)
                    break;
                O = g, g = O.next, O.next = null, u.lastBaseUpdate = O, u.shared.pending = null;
            }
        } while (!0);
        U === null && (T = q), u.baseState = T, u.firstBaseUpdate = z, u.lastBaseUpdate = U, r === null && (u.shared.lanes = 0), Hn |= d, t.lanes = d, t.memoizedState = q;
    } }
    function ad(t, e) { if (typeof t != "function")
        throw Error(o(191, t)); t.call(e); }
    function id(t, e) { var n = t.callbacks; if (n !== null)
        for (t.callbacks = null, t = 0; t < n.length; t++)
            ad(n[t], e); }
    var Wa = A(null), fs = A(0);
    function ld(t, e) { t = bn, F(fs, t), F(Wa, e), bn = t | e.baseLanes; }
    function Vu() { F(fs, bn), F(Wa, Wa.current); }
    function _u() { bn = fs.current, N(Wa), N(fs); }
    var Me = A(null), He = null;
    function _n(t) { var e = t.alternate; F(Xt, Xt.current & 1), F(Me, t), He === null && (e === null || Wa.current !== null || e.memoizedState !== null) && (He = t); }
    function Bu(t) { F(Xt, Xt.current), F(Me, t), He === null && (He = t); }
    function sd(t) { t.tag === 22 ? (F(Xt, Xt.current), F(Me, t), He === null && (He = t)) : Bn(); }
    function Bn() { F(Xt, Xt.current), F(Me, Me.current); }
    function De(t) { N(Me), He === t && (He = null), N(Xt); }
    var Xt = A(0);
    function hs(t) { for (var e = t; e !== null;) {
        if (e.tag === 13) {
            var n = e.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || Gr(n) || Xr(n)))
                return e;
        }
        else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
            if ((e.flags & 128) !== 0)
                return e;
        }
        else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
        }
        if (e === t)
            break;
        for (; e.sibling === null;) {
            if (e.return === null || e.return === t)
                return null;
            e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
    } return null; }
    var hn = 0, yt = null, wt = null, Qt = null, ds = !1, $a = !1, ga = !1, ms = 0, Ki = 0, Ia = null, wv = 0;
    function qt() { throw Error(o(321)); }
    function Uu(t, e) { if (e === null)
        return !1; for (var n = 0; n < e.length && n < t.length; n++)
        if (!Ae(t[n], e[n]))
            return !1; return !0; }
    function Lu(t, e, n, l, u, r) { return hn = r, yt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, C.H = t === null || t.memoizedState === null ? Xd : Iu, ga = !1, r = n(l, u), ga = !1, $a && (r = ud(e, n, l, u)), od(t), r; }
    function od(t) { C.H = Pi; var e = wt !== null && wt.next !== null; if (hn = 0, Qt = wt = yt = null, ds = !1, Ki = 0, Ia = null, e)
        throw Error(o(300)); t === null || Kt || (t = t.dependencies, t !== null && is(t) && (Kt = !0)); }
    function ud(t, e, n, l) { yt = t; var u = 0; do {
        if ($a && (Ia = null), Ki = 0, $a = !1, 25 <= u)
            throw Error(o(301));
        if (u += 1, Qt = wt = null, t.updateQueue != null) {
            var r = t.updateQueue;
            r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
        }
        C.H = kd, r = e(n, l);
    } while ($a); return r; }
    function Nv() { var t = C.H, e = t.useState()[0]; return e = typeof e.then == "function" ? Ji(e) : e, t = t.useState()[0], (wt !== null ? wt.memoizedState : null) !== t && (yt.flags |= 1024), e; }
    function Hu() { var t = ms !== 0; return ms = 0, t; }
    function qu(t, e, n) { e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n; }
    function Yu(t) { if (ds) {
        for (t = t.memoizedState; t !== null;) {
            var e = t.queue;
            e !== null && (e.pending = null), t = t.next;
        }
        ds = !1;
    } hn = 0, Qt = wt = yt = null, $a = !1, Ki = ms = 0, Ia = null; }
    function ce() { var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return Qt === null ? yt.memoizedState = Qt = t : Qt = Qt.next = t, Qt; }
    function kt() { if (wt === null) {
        var t = yt.alternate;
        t = t !== null ? t.memoizedState : null;
    }
    else
        t = wt.next; var e = Qt === null ? yt.memoizedState : Qt.next; if (e !== null)
        Qt = e, wt = t;
    else {
        if (t === null)
            throw yt.alternate === null ? Error(o(467)) : Error(o(310));
        wt = t, t = { memoizedState: wt.memoizedState, baseState: wt.baseState, baseQueue: wt.baseQueue, queue: wt.queue, next: null }, Qt === null ? yt.memoizedState = Qt = t : Qt = Qt.next = t;
    } return Qt; }
    function ps() { return { lastEffect: null, events: null, stores: null, memoCache: null }; }
    function Ji(t) { var e = Ki; return Ki += 1, Ia === null && (Ia = []), t = $h(Ia, t, e), e = yt, (Qt === null ? e.memoizedState : Qt.next) === null && (e = e.alternate, C.H = e === null || e.memoizedState === null ? Xd : Iu), t; }
    function ys(t) { if (t !== null && typeof t == "object") {
        if (typeof t.then == "function")
            return Ji(t);
        if (t.$$typeof === G)
            return ie(t);
    } throw Error(o(438, String(t))); }
    function Gu(t) { var e = null, n = yt.updateQueue; if (n !== null && (e = n.memoCache), e == null) {
        var l = yt.alternate;
        l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (e = { data: l.data.map(function (u) { return u.slice(); }), index: 0 })));
    } if (e == null && (e = { data: [], index: 0 }), n === null && (n = ps(), yt.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
        for (n = e.data[e.index] = Array(t), l = 0; l < t; l++)
            n[l] = dt; return e.index++, n; }
    function dn(t, e) { return typeof e == "function" ? e(t) : e; }
    function gs(t) { var e = kt(); return Xu(e, wt, t); }
    function Xu(t, e, n) { var l = t.queue; if (l === null)
        throw Error(o(311)); l.lastRenderedReducer = n; var u = t.baseQueue, r = l.pending; if (r !== null) {
        if (u !== null) {
            var d = u.next;
            u.next = r.next, r.next = d;
        }
        e.baseQueue = u = r, l.pending = null;
    } if (r = t.baseState, u === null)
        t.memoizedState = r;
    else {
        e = u.next;
        var g = d = null, T = null, z = e, U = !1;
        do {
            var q = z.lane & -536870913;
            if (q !== z.lane ? (Tt & q) === q : (hn & q) === q) {
                var w = z.revertLane;
                if (w === 0)
                    T !== null && (T = T.next = { lane: 0, revertLane: 0, gesture: null, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), q === Ka && (U = !0);
                else if ((hn & w) === w) {
                    z = z.next, w === Ka && (U = !0);
                    continue;
                }
                else
                    q = { lane: 0, revertLane: z.revertLane, gesture: null, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }, T === null ? (g = T = q, d = r) : T = T.next = q, yt.lanes |= w, Hn |= w;
                q = z.action, ga && n(r, q), r = z.hasEagerState ? z.eagerState : n(r, q);
            }
            else
                w = { lane: q, revertLane: z.revertLane, gesture: z.gesture, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }, T === null ? (g = T = w, d = r) : T = T.next = w, yt.lanes |= q, Hn |= q;
            z = z.next;
        } while (z !== null && z !== e);
        if (T === null ? d = r : T.next = g, !Ae(r, t.memoizedState) && (Kt = !0, U && (n = Ja, n !== null)))
            throw n;
        t.memoizedState = r, t.baseState = d, t.baseQueue = T, l.lastRenderedState = r;
    } return u === null && (l.lanes = 0), [t.memoizedState, l.dispatch]; }
    function ku(t) { var e = kt(), n = e.queue; if (n === null)
        throw Error(o(311)); n.lastRenderedReducer = t; var l = n.dispatch, u = n.pending, r = e.memoizedState; if (u !== null) {
        n.pending = null;
        var d = u = u.next;
        do
            r = t(r, d.action), d = d.next;
        while (d !== u);
        Ae(r, e.memoizedState) || (Kt = !0), e.memoizedState = r, e.baseQueue === null && (e.baseState = r), n.lastRenderedState = r;
    } return [r, l]; }
    function rd(t, e, n) { var l = yt, u = kt(), r = Et; if (r) {
        if (n === void 0)
            throw Error(o(407));
        n = n();
    }
    else
        n = e(); var d = !Ae((wt || u).memoizedState, n); if (d && (u.memoizedState = n, Kt = !0), u = u.queue, Ku(hd.bind(null, l, u, t), [t]), u.getSnapshot !== e || d || Qt !== null && Qt.memoizedState.tag & 1) {
        if (l.flags |= 2048, ti(9, { destroy: void 0 }, fd.bind(null, l, u, n, e), null), _t === null)
            throw Error(o(349));
        r || (hn & 127) !== 0 || cd(l, e, n);
    } return n; }
    function cd(t, e, n) { t.flags |= 16384, t = { getSnapshot: e, value: n }, e = yt.updateQueue, e === null ? (e = ps(), yt.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t)); }
    function fd(t, e, n, l) { e.value = n, e.getSnapshot = l, dd(e) && md(t); }
    function hd(t, e, n) { return n(function () { dd(e) && md(t); }); }
    function dd(t) { var e = t.getSnapshot; t = t.value; try {
        var n = e();
        return !Ae(t, n);
    }
    catch {
        return !0;
    } }
    function md(t) { var e = ua(t, 2); e !== null && xe(e, t, 2); }
    function Zu(t) { var e = ce(); if (typeof t == "function") {
        var n = t;
        if (t = n(), ga) {
            Mn(!0);
            try {
                n();
            }
            finally {
                Mn(!1);
            }
        }
    } return e.memoizedState = e.baseState = t, e.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: dn, lastRenderedState: t }, e; }
    function pd(t, e, n, l) { return t.baseState = n, Xu(t, wt, typeof l == "function" ? l : dn); }
    function Ov(t, e, n, l, u) { if (bs(t))
        throw Error(o(485)); if (t = e.action, t !== null) {
        var r = { payload: u, action: t, next: null, isTransition: !0, status: "pending", value: null, reason: null, listeners: [], then: function (d) { r.listeners.push(d); } };
        C.T !== null ? n(!0) : r.isTransition = !1, l(r), n = e.pending, n === null ? (r.next = e.pending = r, yd(e, r)) : (r.next = n.next, e.pending = n.next = r);
    } }
    function yd(t, e) { var n = e.action, l = e.payload, u = t.state; if (e.isTransition) {
        var r = C.T, d = {};
        C.T = d;
        try {
            var g = n(u, l), T = C.S;
            T !== null && T(d, g), gd(t, e, g);
        }
        catch (z) {
            Qu(t, e, z);
        }
        finally {
            r !== null && d.types !== null && (r.types = d.types), C.T = r;
        }
    }
    else
        try {
            r = n(u, l), gd(t, e, r);
        }
        catch (z) {
            Qu(t, e, z);
        } }
    function gd(t, e, n) { n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function (l) { vd(t, e, l); }, function (l) { return Qu(t, e, l); }) : vd(t, e, n); }
    function vd(t, e, n) { e.status = "fulfilled", e.value = n, xd(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, yd(t, n))); }
    function Qu(t, e, n) { var l = t.pending; if (t.pending = null, l !== null) {
        l = l.next;
        do
            e.status = "rejected", e.reason = n, xd(e), e = e.next;
        while (e !== l);
    } t.action = null; }
    function xd(t) { t = t.listeners; for (var e = 0; e < t.length; e++)
        (0, t[e])(); }
    function bd(t, e) { return e; }
    function Sd(t, e) { if (Et) {
        var n = _t.formState;
        if (n !== null) {
            t: {
                var l = yt;
                if (Et) {
                    if (Bt) {
                        e: {
                            for (var u = Bt, r = Le; u.nodeType !== 8;) {
                                if (!r) {
                                    u = null;
                                    break e;
                                }
                                if (u = qe(u.nextSibling), u === null) {
                                    u = null;
                                    break e;
                                }
                            }
                            r = u.data, u = r === "F!" || r === "F" ? u : null;
                        }
                        if (u) {
                            Bt = qe(u.nextSibling), l = u.data === "F!";
                            break t;
                        }
                    }
                    Rn(l);
                }
                l = !1;
            }
            l && (e = n[0]);
        }
    } return n = ce(), n.memoizedState = n.baseState = e, l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: bd, lastRenderedState: e }, n.queue = l, n = qd.bind(null, yt, l), l.dispatch = n, l = Zu(!1), r = $u.bind(null, yt, !1, l.queue), l = ce(), u = { state: e, dispatch: null, action: t, pending: null }, l.queue = u, n = Ov.bind(null, yt, u, r, n), u.dispatch = n, l.memoizedState = t, [e, n, !1]; }
    function Td(t) { var e = kt(); return Ad(e, wt, t); }
    function Ad(t, e, n) { if (e = Xu(t, e, bd)[0], t = gs(dn)[0], typeof e == "object" && e !== null && typeof e.then == "function")
        try {
            var l = Ji(e);
        }
        catch (d) {
            throw d === Fa ? os : d;
        }
    else
        l = e; e = kt(); var u = e.queue, r = u.dispatch; return n !== e.memoizedState && (yt.flags |= 2048, ti(9, { destroy: void 0 }, Vv.bind(null, u, n), null)), [l, r, t]; }
    function Vv(t, e) { t.action = e; }
    function Ed(t) { var e = kt(), n = wt; if (n !== null)
        return Ad(e, n, t); kt(), e = e.memoizedState, n = kt(); var l = n.queue.dispatch; return n.memoizedState = t, [e, l, !1]; }
    function ti(t, e, n, l) { return t = { tag: t, create: n, deps: l, inst: e, next: null }, e = yt.updateQueue, e === null && (e = ps(), yt.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (l = n.next, n.next = t, t.next = l, e.lastEffect = t), t; }
    function Md() { return kt().memoizedState; }
    function vs(t, e, n, l) { var u = ce(); yt.flags |= t, u.memoizedState = ti(1 | e, { destroy: void 0 }, n, l === void 0 ? null : l); }
    function xs(t, e, n, l) { var u = kt(); l = l === void 0 ? null : l; var r = u.memoizedState.inst; wt !== null && l !== null && Uu(l, wt.memoizedState.deps) ? u.memoizedState = ti(e, r, n, l) : (yt.flags |= t, u.memoizedState = ti(1 | e, r, n, l)); }
    function Dd(t, e) { vs(8390656, 8, t, e); }
    function Ku(t, e) { xs(2048, 8, t, e); }
    function _v(t) { yt.flags |= 4; var e = yt.updateQueue; if (e === null)
        e = ps(), yt.updateQueue = e, e.events = [t];
    else {
        var n = e.events;
        n === null ? e.events = [t] : n.push(t);
    } }
    function Cd(t) { var e = kt().memoizedState; return _v({ ref: e, nextImpl: t }), function () { if ((Ct & 2) !== 0)
        throw Error(o(440)); return e.impl.apply(void 0, arguments); }; }
    function jd(t, e) { return xs(4, 2, t, e); }
    function zd(t, e) { return xs(4, 4, t, e); }
    function Rd(t, e) { if (typeof e == "function") {
        t = t();
        var n = e(t);
        return function () { typeof n == "function" ? n() : e(null); };
    } if (e != null)
        return t = t(), e.current = t, function () { e.current = null; }; }
    function wd(t, e, n) { n = n != null ? n.concat([t]) : null, xs(4, 4, Rd.bind(null, e, t), n); }
    function Ju() { }
    function Nd(t, e) { var n = kt(); e = e === void 0 ? null : e; var l = n.memoizedState; return e !== null && Uu(e, l[1]) ? l[0] : (n.memoizedState = [t, e], t); }
    function Od(t, e) { var n = kt(); e = e === void 0 ? null : e; var l = n.memoizedState; if (e !== null && Uu(e, l[1]))
        return l[0]; if (l = t(), ga) {
        Mn(!0);
        try {
            t();
        }
        finally {
            Mn(!1);
        }
    } return n.memoizedState = [l, e], l; }
    function Fu(t, e, n) { return n === void 0 || (hn & 1073741824) !== 0 && (Tt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = Vm(), yt.lanes |= t, Hn |= t, n); }
    function Vd(t, e, n, l) { return Ae(n, e) ? n : Wa.current !== null ? (t = Fu(t, n, l), Ae(t, e) || (Kt = !0), t) : (hn & 42) === 0 || (hn & 1073741824) !== 0 && (Tt & 261930) === 0 ? (Kt = !0, t.memoizedState = n) : (t = Vm(), yt.lanes |= t, Hn |= t, e); }
    function _d(t, e, n, l, u) { var r = H.p; H.p = r !== 0 && 8 > r ? r : 8; var d = C.T, g = {}; C.T = g, $u(t, !1, e, n); try {
        var T = u(), z = C.S;
        if (z !== null && z(g, T), T !== null && typeof T == "object" && typeof T.then == "function") {
            var U = Rv(T, l);
            Fi(t, e, U, ze(t));
        }
        else
            Fi(t, e, l, ze(t));
    }
    catch (q) {
        Fi(t, e, { then: function () { }, status: "rejected", reason: q }, ze());
    }
    finally {
        H.p = r, d !== null && g.types !== null && (d.types = g.types), C.T = d;
    } }
    function Bv() { }
    function Pu(t, e, n, l) { if (t.tag !== 5)
        throw Error(o(476)); var u = Bd(t).queue; _d(t, u, e, W, n === null ? Bv : function () { return Ud(t), n(l); }); }
    function Bd(t) { var e = t.memoizedState; if (e !== null)
        return e; e = { memoizedState: W, baseState: W, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: dn, lastRenderedState: W }, next: null }; var n = {}; return e.next = { memoizedState: n, baseState: n, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: dn, lastRenderedState: n }, next: null }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e; }
    function Ud(t) { var e = Bd(t); e.next === null && (e = t.alternate.memoizedState), Fi(t, e.next.queue, {}, ze()); }
    function Wu() { return ie(hl); }
    function Ld() { return kt().memoizedState; }
    function Hd() { return kt().memoizedState; }
    function Uv(t) { for (var e = t.return; e !== null;) {
        switch (e.tag) {
            case 24:
            case 3:
                var n = ze();
                t = On(n);
                var l = Vn(e, t, n);
                l !== null && (xe(l, e, n), ki(l, e, n)), e = { cache: Du() }, t.payload = e;
                return;
        }
        e = e.return;
    } }
    function Lv(t, e, n) { var l = ze(); n = { lane: l, revertLane: 0, gesture: null, action: n, hasEagerState: !1, eagerState: null, next: null }, bs(t) ? Yd(e, n) : (n = pu(t, e, n, l), n !== null && (xe(n, t, l), Gd(n, e, l))); }
    function qd(t, e, n) { var l = ze(); Fi(t, e, n, l); }
    function Fi(t, e, n, l) { var u = { lane: l, revertLane: 0, gesture: null, action: n, hasEagerState: !1, eagerState: null, next: null }; if (bs(t))
        Yd(e, u);
    else {
        var r = t.alternate;
        if (t.lanes === 0 && (r === null || r.lanes === 0) && (r = e.lastRenderedReducer, r !== null))
            try {
                var d = e.lastRenderedState, g = r(d, n);
                if (u.hasEagerState = !0, u.eagerState = g, Ae(g, d))
                    return ts(t, e, u, 0), _t === null && Il(), !1;
            }
            catch { }
        if (n = pu(t, e, u, l), n !== null)
            return xe(n, t, l), Gd(n, e, l), !0;
    } return !1; }
    function $u(t, e, n, l) { if (l = { lane: 2, revertLane: Rr(), gesture: null, action: l, hasEagerState: !1, eagerState: null, next: null }, bs(t)) {
        if (e)
            throw Error(o(479));
    }
    else
        e = pu(t, n, l, 2), e !== null && xe(e, t, 2); }
    function bs(t) { var e = t.alternate; return t === yt || e !== null && e === yt; }
    function Yd(t, e) { $a = ds = !0; var n = t.pending; n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e; }
    function Gd(t, e, n) { if ((n & 4194048) !== 0) {
        var l = e.lanes;
        l &= t.pendingLanes, n |= l, e.lanes = n, Kf(t, n);
    } }
    var Pi = { readContext: ie, use: ys, useCallback: qt, useContext: qt, useEffect: qt, useImperativeHandle: qt, useLayoutEffect: qt, useInsertionEffect: qt, useMemo: qt, useReducer: qt, useRef: qt, useState: qt, useDebugValue: qt, useDeferredValue: qt, useTransition: qt, useSyncExternalStore: qt, useId: qt, useHostTransitionStatus: qt, useFormState: qt, useActionState: qt, useOptimistic: qt, useMemoCache: qt, useCacheRefresh: qt };
    Pi.useEffectEvent = qt;
    var Xd = { readContext: ie, use: ys, useCallback: function (t, e) { return ce().memoizedState = [t, e === void 0 ? null : e], t; }, useContext: ie, useEffect: Dd, useImperativeHandle: function (t, e, n) { n = n != null ? n.concat([t]) : null, vs(4194308, 4, Rd.bind(null, e, t), n); }, useLayoutEffect: function (t, e) { return vs(4194308, 4, t, e); }, useInsertionEffect: function (t, e) { vs(4, 2, t, e); }, useMemo: function (t, e) { var n = ce(); e = e === void 0 ? null : e; var l = t(); if (ga) {
            Mn(!0);
            try {
                t();
            }
            finally {
                Mn(!1);
            }
        } return n.memoizedState = [l, e], l; }, useReducer: function (t, e, n) { var l = ce(); if (n !== void 0) {
            var u = n(e);
            if (ga) {
                Mn(!0);
                try {
                    n(e);
                }
                finally {
                    Mn(!1);
                }
            }
        }
        else
            u = e; return l.memoizedState = l.baseState = u, t = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: u }, l.queue = t, t = t.dispatch = Lv.bind(null, yt, t), [l.memoizedState, t]; }, useRef: function (t) { var e = ce(); return t = { current: t }, e.memoizedState = t; }, useState: function (t) { t = Zu(t); var e = t.queue, n = qd.bind(null, yt, e); return e.dispatch = n, [t.memoizedState, n]; }, useDebugValue: Ju, useDeferredValue: function (t, e) { var n = ce(); return Fu(n, t, e); }, useTransition: function () { var t = Zu(!1); return t = _d.bind(null, yt, t.queue, !0, !1), ce().memoizedState = t, [!1, t]; }, useSyncExternalStore: function (t, e, n) { var l = yt, u = ce(); if (Et) {
            if (n === void 0)
                throw Error(o(407));
            n = n();
        }
        else {
            if (n = e(), _t === null)
                throw Error(o(349));
            (Tt & 127) !== 0 || cd(l, e, n);
        } u.memoizedState = n; var r = { value: n, getSnapshot: e }; return u.queue = r, Dd(hd.bind(null, l, r, t), [t]), l.flags |= 2048, ti(9, { destroy: void 0 }, fd.bind(null, l, r, n, e), null), n; }, useId: function () { var t = ce(), e = _t.identifierPrefix; if (Et) {
            var n = $e, l = We;
            n = (l & ~(1 << 32 - Te(l) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = ms++, 0 < n && (e += "H" + n.toString(32)), e += "_";
        }
        else
            n = wv++, e = "_" + e + "r_" + n.toString(32) + "_"; return t.memoizedState = e; }, useHostTransitionStatus: Wu, useFormState: Sd, useActionState: Sd, useOptimistic: function (t) { var e = ce(); e.memoizedState = e.baseState = t; var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null }; return e.queue = n, e = $u.bind(null, yt, !0, n), n.dispatch = e, [t, e]; }, useMemoCache: Gu, useCacheRefresh: function () { return ce().memoizedState = Uv.bind(null, yt); }, useEffectEvent: function (t) { var e = ce(), n = { impl: t }; return e.memoizedState = n, function () { if ((Ct & 2) !== 0)
            throw Error(o(440)); return n.impl.apply(void 0, arguments); }; } }, Iu = { readContext: ie, use: ys, useCallback: Nd, useContext: ie, useEffect: Ku, useImperativeHandle: wd, useInsertionEffect: jd, useLayoutEffect: zd, useMemo: Od, useReducer: gs, useRef: Md, useState: function () { return gs(dn); }, useDebugValue: Ju, useDeferredValue: function (t, e) { var n = kt(); return Vd(n, wt.memoizedState, t, e); }, useTransition: function () { var t = gs(dn)[0], e = kt().memoizedState; return [typeof t == "boolean" ? t : Ji(t), e]; }, useSyncExternalStore: rd, useId: Ld, useHostTransitionStatus: Wu, useFormState: Td, useActionState: Td, useOptimistic: function (t, e) { var n = kt(); return pd(n, wt, t, e); }, useMemoCache: Gu, useCacheRefresh: Hd };
    Iu.useEffectEvent = Cd;
    var kd = { readContext: ie, use: ys, useCallback: Nd, useContext: ie, useEffect: Ku, useImperativeHandle: wd, useInsertionEffect: jd, useLayoutEffect: zd, useMemo: Od, useReducer: ku, useRef: Md, useState: function () { return ku(dn); }, useDebugValue: Ju, useDeferredValue: function (t, e) { var n = kt(); return wt === null ? Fu(n, t, e) : Vd(n, wt.memoizedState, t, e); }, useTransition: function () { var t = ku(dn)[0], e = kt().memoizedState; return [typeof t == "boolean" ? t : Ji(t), e]; }, useSyncExternalStore: rd, useId: Ld, useHostTransitionStatus: Wu, useFormState: Ed, useActionState: Ed, useOptimistic: function (t, e) { var n = kt(); return wt !== null ? pd(n, wt, t, e) : (n.baseState = t, [t, n.queue.dispatch]); }, useMemoCache: Gu, useCacheRefresh: Hd };
    kd.useEffectEvent = Cd;
    function tr(t, e, n, l) { e = t.memoizedState, n = n(l, e), n = n == null ? e : x({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n); }
    var er = { enqueueSetState: function (t, e, n) { t = t._reactInternals; var l = ze(), u = On(l); u.payload = e, n != null && (u.callback = n), e = Vn(t, u, l), e !== null && (xe(e, t, l), ki(e, t, l)); }, enqueueReplaceState: function (t, e, n) { t = t._reactInternals; var l = ze(), u = On(l); u.tag = 1, u.payload = e, n != null && (u.callback = n), e = Vn(t, u, l), e !== null && (xe(e, t, l), ki(e, t, l)); }, enqueueForceUpdate: function (t, e) { t = t._reactInternals; var n = ze(), l = On(n); l.tag = 2, e != null && (l.callback = e), e = Vn(t, l, n), e !== null && (xe(e, t, n), ki(e, t, n)); } };
    function Zd(t, e, n, l, u, r, d) { return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, r, d) : e.prototype && e.prototype.isPureReactComponent ? !Bi(n, l) || !Bi(u, r) : !0; }
    function Qd(t, e, n, l) { t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, l), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, l), e.state !== t && er.enqueueReplaceState(e, e.state, null); }
    function va(t, e) { var n = e; if ("ref" in e) {
        n = {};
        for (var l in e)
            l !== "ref" && (n[l] = e[l]);
    } if (t = t.defaultProps) {
        n === e && (n = x({}, n));
        for (var u in t)
            n[u] === void 0 && (n[u] = t[u]);
    } return n; }
    function Kd(t) { $l(t); }
    function Jd(t) { console.error(t); }
    function Fd(t) { $l(t); }
    function Ss(t, e) { try {
        var n = t.onUncaughtError;
        n(e.value, { componentStack: e.stack });
    }
    catch (l) {
        setTimeout(function () { throw l; });
    } }
    function Pd(t, e, n) { try {
        var l = t.onCaughtError;
        l(n.value, { componentStack: n.stack, errorBoundary: e.tag === 1 ? e.stateNode : null });
    }
    catch (u) {
        setTimeout(function () { throw u; });
    } }
    function nr(t, e, n) { return n = On(n), n.tag = 3, n.payload = { element: null }, n.callback = function () { Ss(t, e); }, n; }
    function Wd(t) { return t = On(t), t.tag = 3, t; }
    function $d(t, e, n, l) { var u = n.type.getDerivedStateFromError; if (typeof u == "function") {
        var r = l.value;
        t.payload = function () { return u(r); }, t.callback = function () { Pd(e, n, l); };
    } var d = n.stateNode; d !== null && typeof d.componentDidCatch == "function" && (t.callback = function () { Pd(e, n, l), typeof u != "function" && (qn === null ? qn = new Set([this]) : qn.add(this)); var g = l.stack; this.componentDidCatch(l.value, { componentStack: g !== null ? g : "" }); }); }
    function Hv(t, e, n, l, u) { if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
        if (e = n.alternate, e !== null && Qa(e, n, u, !0), n = Me.current, n !== null) {
            switch (n.tag) {
                case 31:
                case 13: return He === null ? Os() : n.alternate === null && Yt === 0 && (Yt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = u, l === us ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = new Set([l]) : e.add(l), Cr(t, l, u)), !1;
                case 22: return n.flags |= 65536, l === us ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = { transitions: null, markerInstances: null, retryQueue: new Set([l]) }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = new Set([l]) : n.add(l)), Cr(t, l, u)), !1;
            }
            throw Error(o(435, n.tag));
        }
        return Cr(t, l, u), Os(), !1;
    } if (Et)
        return e = Me.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = u, l !== Su && (t = Error(o(422), { cause: l }), Hi(_e(t, n)))) : (l !== Su && (e = Error(o(423), { cause: l }), Hi(_e(e, n))), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, l = _e(l, n), u = nr(t.stateNode, l, u), Nu(t, u), Yt !== 4 && (Yt = 2)), !1; var r = Error(o(520), { cause: l }); if (r = _e(r, n), il === null ? il = [r] : il.push(r), Yt !== 4 && (Yt = 2), e === null)
        return !0; l = _e(l, n), n = e; do {
        switch (n.tag) {
            case 3: return n.flags |= 65536, t = u & -u, n.lanes |= t, t = nr(n.stateNode, l, t), Nu(n, t), !1;
            case 1: if (e = n.type, r = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (qn === null || !qn.has(r))))
                return n.flags |= 65536, u &= -u, n.lanes |= u, u = Wd(u), $d(u, t, n, l), Nu(n, u), !1;
        }
        n = n.return;
    } while (n !== null); return !1; }
    var ar = Error(o(461)), Kt = !1;
    function le(t, e, n, l) { e.child = t === null ? nd(e, null, n, l) : ya(e, t.child, n, l); }
    function Id(t, e, n, l, u) { n = n.render; var r = e.ref; if ("ref" in l) {
        var d = {};
        for (var g in l)
            g !== "ref" && (d[g] = l[g]);
    }
    else
        d = l; return ha(e), l = Lu(t, e, n, d, r, u), g = Hu(), t !== null && !Kt ? (qu(t, e, u), mn(t, e, u)) : (Et && g && xu(e), e.flags |= 1, le(t, e, l, u), e.child); }
    function tm(t, e, n, l, u) { if (t === null) {
        var r = n.type;
        return typeof r == "function" && !yu(r) && r.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = r, em(t, e, r, l, u)) : (t = ns(n.type, null, l, e, e.mode, u), t.ref = e.ref, t.return = e, e.child = t);
    } if (r = t.child, !fr(t, u)) {
        var d = r.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Bi, n(d, l) && t.ref === e.ref)
            return mn(t, e, u);
    } return e.flags |= 1, t = un(r, l), t.ref = e.ref, t.return = e, e.child = t; }
    function em(t, e, n, l, u) { if (t !== null) {
        var r = t.memoizedProps;
        if (Bi(r, l) && t.ref === e.ref)
            if (Kt = !1, e.pendingProps = l = r, fr(t, u))
                (t.flags & 131072) !== 0 && (Kt = !0);
            else
                return e.lanes = t.lanes, mn(t, e, u);
    } return ir(t, e, n, l, u); }
    function nm(t, e, n, l) { var u = l.children, r = t !== null ? t.memoizedState : null; if (t === null && e.stateNode === null && (e.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), l.mode === "hidden") {
        if ((e.flags & 128) !== 0) {
            if (r = r !== null ? r.baseLanes | n : n, t !== null) {
                for (l = e.child = t.child, u = 0; l !== null;)
                    u = u | l.lanes | l.childLanes, l = l.sibling;
                l = u & ~r;
            }
            else
                l = 0, e.child = null;
            return am(t, e, r, n, l);
        }
        if ((n & 536870912) !== 0)
            e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && ss(e, r !== null ? r.cachePool : null), r !== null ? ld(e, r) : Vu(), sd(e);
        else
            return l = e.lanes = 536870912, am(t, e, r !== null ? r.baseLanes | n : n, n, l);
    }
    else
        r !== null ? (ss(e, r.cachePool), ld(e, r), Bn(), e.memoizedState = null) : (t !== null && ss(e, null), Vu(), Bn()); return le(t, e, u, n), e.child; }
    function Wi(t, e) { return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), e.sibling; }
    function am(t, e, n, l, u) { var r = ju(); return r = r === null ? null : { parent: Zt._currentValue, pool: r }, e.memoizedState = { baseLanes: n, cachePool: r }, t !== null && ss(e, null), Vu(), sd(e), t !== null && Qa(t, e, l, !0), e.childLanes = u, null; }
    function Ts(t, e) { return e = Es({ mode: e.mode, children: e.children }, t.mode), e.ref = t.ref, t.child = e, e.return = t, e; }
    function im(t, e, n) { return ya(e, t.child, null, n), t = Ts(e, e.pendingProps), t.flags |= 2, De(e), e.memoizedState = null, t; }
    function qv(t, e, n) { var l = e.pendingProps, u = (e.flags & 128) !== 0; if (e.flags &= -129, t === null) {
        if (Et) {
            if (l.mode === "hidden")
                return t = Ts(e, l), e.lanes = 536870912, Wi(null, t);
            if (Bu(e), (t = Bt) ? (t = yp(t, Le), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = { dehydrated: t, treeContext: jn !== null ? { id: We, overflow: $e } : null, retryLane: 536870912, hydrationErrors: null }, n = Yh(t), n.return = e, e.child = n, ae = e, Bt = null)) : t = null, t === null)
                throw Rn(e);
            return e.lanes = 536870912, null;
        }
        return Ts(e, l);
    } var r = t.memoizedState; if (r !== null) {
        var d = r.dehydrated;
        if (Bu(e), u)
            if (e.flags & 256)
                e.flags &= -257, e = im(t, e, n);
            else if (e.memoizedState !== null)
                e.child = t.child, e.flags |= 128, e = null;
            else
                throw Error(o(558));
        else if (Kt || Qa(t, e, n, !1), u = (n & t.childLanes) !== 0, Kt || u) {
            if (l = _t, l !== null && (d = Jf(l, n), d !== 0 && d !== r.retryLane))
                throw r.retryLane = d, ua(t, d), xe(l, t, d), ar;
            Os(), e = im(t, e, n);
        }
        else
            t = r.treeContext, Bt = qe(d.nextSibling), ae = e, Et = !0, zn = null, Le = !1, t !== null && kh(e, t), e = Ts(e, l), e.flags |= 4096;
        return e;
    } return t = un(t.child, { mode: l.mode, children: l.children }), t.ref = e.ref, e.child = t, t.return = e, t; }
    function As(t, e) { var n = e.ref; if (n === null)
        t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
        if (typeof n != "function" && typeof n != "object")
            throw Error(o(284));
        (t === null || t.ref !== n) && (e.flags |= 4194816);
    } }
    function ir(t, e, n, l, u) { return ha(e), n = Lu(t, e, n, l, void 0, u), l = Hu(), t !== null && !Kt ? (qu(t, e, u), mn(t, e, u)) : (Et && l && xu(e), e.flags |= 1, le(t, e, n, u), e.child); }
    function lm(t, e, n, l, u, r) { return ha(e), e.updateQueue = null, n = ud(e, l, n, u), od(t), l = Hu(), t !== null && !Kt ? (qu(t, e, r), mn(t, e, r)) : (Et && l && xu(e), e.flags |= 1, le(t, e, n, r), e.child); }
    function sm(t, e, n, l, u) { if (ha(e), e.stateNode === null) {
        var r = Ga, d = n.contextType;
        typeof d == "object" && d !== null && (r = ie(d)), r = new n(l, r), e.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = er, e.stateNode = r, r._reactInternals = e, r = e.stateNode, r.props = l, r.state = e.memoizedState, r.refs = {}, Ru(e), d = n.contextType, r.context = typeof d == "object" && d !== null ? ie(d) : Ga, r.state = e.memoizedState, d = n.getDerivedStateFromProps, typeof d == "function" && (tr(e, n, d, l), r.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (d = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), d !== r.state && er.enqueueReplaceState(r, r.state, null), Qi(e, l, r, u), Zi(), r.state = e.memoizedState), typeof r.componentDidMount == "function" && (e.flags |= 4194308), l = !0;
    }
    else if (t === null) {
        r = e.stateNode;
        var g = e.memoizedProps, T = va(n, g);
        r.props = T;
        var z = r.context, U = n.contextType;
        d = Ga, typeof U == "object" && U !== null && (d = ie(U));
        var q = n.getDerivedStateFromProps;
        U = typeof q == "function" || typeof r.getSnapshotBeforeUpdate == "function", g = e.pendingProps !== g, U || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (g || z !== d) && Qd(e, r, l, d), Nn = !1;
        var w = e.memoizedState;
        r.state = w, Qi(e, l, r, u), Zi(), z = e.memoizedState, g || w !== z || Nn ? (typeof q == "function" && (tr(e, n, q, l), z = e.memoizedState), (T = Nn || Zd(e, n, T, l, w, z, d)) ? (U || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = l, e.memoizedState = z), r.props = l, r.state = z, r.context = d, l = T) : (typeof r.componentDidMount == "function" && (e.flags |= 4194308), l = !1);
    }
    else {
        r = e.stateNode, wu(t, e), d = e.memoizedProps, U = va(n, d), r.props = U, q = e.pendingProps, w = r.context, z = n.contextType, T = Ga, typeof z == "object" && z !== null && (T = ie(z)), g = n.getDerivedStateFromProps, (z = typeof g == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (d !== q || w !== T) && Qd(e, r, l, T), Nn = !1, w = e.memoizedState, r.state = w, Qi(e, l, r, u), Zi();
        var O = e.memoizedState;
        d !== q || w !== O || Nn || t !== null && t.dependencies !== null && is(t.dependencies) ? (typeof g == "function" && (tr(e, n, g, l), O = e.memoizedState), (U = Nn || Zd(e, n, U, l, w, O, T) || t !== null && t.dependencies !== null && is(t.dependencies)) ? (z || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(l, O, T), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(l, O, T)), typeof r.componentDidUpdate == "function" && (e.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || d === t.memoizedProps && w === t.memoizedState || (e.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && w === t.memoizedState || (e.flags |= 1024), e.memoizedProps = l, e.memoizedState = O), r.props = l, r.state = O, r.context = T, l = U) : (typeof r.componentDidUpdate != "function" || d === t.memoizedProps && w === t.memoizedState || (e.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && w === t.memoizedState || (e.flags |= 1024), l = !1);
    } return r = l, As(t, e), l = (e.flags & 128) !== 0, r || l ? (r = e.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : r.render(), e.flags |= 1, t !== null && l ? (e.child = ya(e, t.child, null, u), e.child = ya(e, null, n, u)) : le(t, e, n, u), e.memoizedState = r.state, t = e.child) : t = mn(t, e, u), t; }
    function om(t, e, n, l) { return ca(), e.flags |= 256, le(t, e, n, l), e.child; }
    var lr = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function sr(t) { return { baseLanes: t, cachePool: Ph() }; }
    function or(t, e, n) { return t = t !== null ? t.childLanes & ~n : 0, e && (t |= je), t; }
    function um(t, e, n) { var l = e.pendingProps, u = !1, r = (e.flags & 128) !== 0, d; if ((d = r) || (d = t !== null && t.memoizedState === null ? !1 : (Xt.current & 2) !== 0), d && (u = !0, e.flags &= -129), d = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
        if (Et) {
            if (u ? _n(e) : Bn(), (t = Bt) ? (t = yp(t, Le), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = { dehydrated: t, treeContext: jn !== null ? { id: We, overflow: $e } : null, retryLane: 536870912, hydrationErrors: null }, n = Yh(t), n.return = e, e.child = n, ae = e, Bt = null)) : t = null, t === null)
                throw Rn(e);
            return Xr(t) ? e.lanes = 32 : e.lanes = 536870912, null;
        }
        var g = l.children;
        return l = l.fallback, u ? (Bn(), u = e.mode, g = Es({ mode: "hidden", children: g }, u), l = ra(l, u, n, null), g.return = e, l.return = e, g.sibling = l, e.child = g, l = e.child, l.memoizedState = sr(n), l.childLanes = or(t, d, n), e.memoizedState = lr, Wi(null, l)) : (_n(e), ur(e, g));
    } var T = t.memoizedState; if (T !== null && (g = T.dehydrated, g !== null)) {
        if (r)
            e.flags & 256 ? (_n(e), e.flags &= -257, e = rr(t, e, n)) : e.memoizedState !== null ? (Bn(), e.child = t.child, e.flags |= 128, e = null) : (Bn(), g = l.fallback, u = e.mode, l = Es({ mode: "visible", children: l.children }, u), g = ra(g, u, n, null), g.flags |= 2, l.return = e, g.return = e, l.sibling = g, e.child = l, ya(e, t.child, null, n), l = e.child, l.memoizedState = sr(n), l.childLanes = or(t, d, n), e.memoizedState = lr, e = Wi(null, l));
        else if (_n(e), Xr(g)) {
            if (d = g.nextSibling && g.nextSibling.dataset, d)
                var z = d.dgst;
            d = z, l = Error(o(419)), l.stack = "", l.digest = d, Hi({ value: l, source: null, stack: null }), e = rr(t, e, n);
        }
        else if (Kt || Qa(t, e, n, !1), d = (n & t.childLanes) !== 0, Kt || d) {
            if (d = _t, d !== null && (l = Jf(d, n), l !== 0 && l !== T.retryLane))
                throw T.retryLane = l, ua(t, l), xe(d, t, l), ar;
            Gr(g) || Os(), e = rr(t, e, n);
        }
        else
            Gr(g) ? (e.flags |= 192, e.child = t.child, e = null) : (t = T.treeContext, Bt = qe(g.nextSibling), ae = e, Et = !0, zn = null, Le = !1, t !== null && kh(e, t), e = ur(e, l.children), e.flags |= 4096);
        return e;
    } return u ? (Bn(), g = l.fallback, u = e.mode, T = t.child, z = T.sibling, l = un(T, { mode: "hidden", children: l.children }), l.subtreeFlags = T.subtreeFlags & 65011712, z !== null ? g = un(z, g) : (g = ra(g, u, n, null), g.flags |= 2), g.return = e, l.return = e, l.sibling = g, e.child = l, Wi(null, l), l = e.child, g = t.child.memoizedState, g === null ? g = sr(n) : (u = g.cachePool, u !== null ? (T = Zt._currentValue, u = u.parent !== T ? { parent: T, pool: T } : u) : u = Ph(), g = { baseLanes: g.baseLanes | n, cachePool: u }), l.memoizedState = g, l.childLanes = or(t, d, n), e.memoizedState = lr, Wi(t.child, l)) : (_n(e), n = t.child, t = n.sibling, n = un(n, { mode: "visible", children: l.children }), n.return = e, n.sibling = null, t !== null && (d = e.deletions, d === null ? (e.deletions = [t], e.flags |= 16) : d.push(t)), e.child = n, e.memoizedState = null, n); }
    function ur(t, e) { return e = Es({ mode: "visible", children: e }, t.mode), e.return = t, t.child = e; }
    function Es(t, e) { return t = Ee(22, t, null, e), t.lanes = 0, t; }
    function rr(t, e, n) { return ya(e, t.child, null, n), t = ur(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t; }
    function rm(t, e, n) { t.lanes |= e; var l = t.alternate; l !== null && (l.lanes |= e), Eu(t.return, e, n); }
    function cr(t, e, n, l, u, r) { var d = t.memoizedState; d === null ? t.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: l, tail: n, tailMode: u, treeForkCount: r } : (d.isBackwards = e, d.rendering = null, d.renderingStartTime = 0, d.last = l, d.tail = n, d.tailMode = u, d.treeForkCount = r); }
    function cm(t, e, n) { var l = e.pendingProps, u = l.revealOrder, r = l.tail; l = l.children; var d = Xt.current, g = (d & 2) !== 0; if (g ? (d = d & 1 | 2, e.flags |= 128) : d &= 1, F(Xt, d), le(t, e, l, n), l = Et ? Li : 0, !g && t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null;) {
            if (t.tag === 13)
                t.memoizedState !== null && rm(t, n, e);
            else if (t.tag === 19)
                rm(t, n, e);
            else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
            }
            if (t === e)
                break t;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e)
                    break t;
                t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
        } switch (u) {
        case "forwards":
            for (n = e.child, u = null; n !== null;)
                t = n.alternate, t !== null && hs(t) === null && (u = n), n = n.sibling;
            n = u, n === null ? (u = e.child, e.child = null) : (u = n.sibling, n.sibling = null), cr(e, !1, u, n, r, l);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (n = null, u = e.child, e.child = null; u !== null;) {
                if (t = u.alternate, t !== null && hs(t) === null) {
                    e.child = u;
                    break;
                }
                t = u.sibling, u.sibling = n, n = u, u = t;
            }
            cr(e, !0, n, null, r, l);
            break;
        case "together":
            cr(e, !1, null, null, void 0, l);
            break;
        default: e.memoizedState = null;
    } return e.child; }
    function mn(t, e, n) { if (t !== null && (e.dependencies = t.dependencies), Hn |= e.lanes, (n & e.childLanes) === 0)
        if (t !== null) {
            if (Qa(t, e, n, !1), (n & e.childLanes) === 0)
                return null;
        }
        else
            return null; if (t !== null && e.child !== t.child)
        throw Error(o(153)); if (e.child !== null) {
        for (t = e.child, n = un(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null;)
            t = t.sibling, n = n.sibling = un(t, t.pendingProps), n.return = e;
        n.sibling = null;
    } return e.child; }
    function fr(t, e) { return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && is(t))); }
    function Yv(t, e, n) { switch (e.tag) {
        case 3:
            ee(e, e.stateNode.containerInfo), wn(e, Zt, t.memoizedState.cache), ca();
            break;
        case 27:
        case 5:
            Ai(e);
            break;
        case 4:
            ee(e, e.stateNode.containerInfo);
            break;
        case 10:
            wn(e, e.type, e.memoizedProps.value);
            break;
        case 31:
            if (e.memoizedState !== null)
                return e.flags |= 128, Bu(e), null;
            break;
        case 13:
            var l = e.memoizedState;
            if (l !== null)
                return l.dehydrated !== null ? (_n(e), e.flags |= 128, null) : (n & e.child.childLanes) !== 0 ? um(t, e, n) : (_n(e), t = mn(t, e, n), t !== null ? t.sibling : null);
            _n(e);
            break;
        case 19:
            var u = (t.flags & 128) !== 0;
            if (l = (n & e.childLanes) !== 0, l || (Qa(t, e, n, !1), l = (n & e.childLanes) !== 0), u) {
                if (l)
                    return cm(t, e, n);
                e.flags |= 128;
            }
            if (u = e.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), F(Xt, Xt.current), l)
                break;
            return null;
        case 22: return e.lanes = 0, nm(t, e, n, e.pendingProps);
        case 24: wn(e, Zt, t.memoizedState.cache);
    } return mn(t, e, n); }
    function fm(t, e, n) { if (t !== null)
        if (t.memoizedProps !== e.pendingProps)
            Kt = !0;
        else {
            if (!fr(t, n) && (e.flags & 128) === 0)
                return Kt = !1, Yv(t, e, n);
            Kt = (t.flags & 131072) !== 0;
        }
    else
        Kt = !1, Et && (e.flags & 1048576) !== 0 && Xh(e, Li, e.index); switch (e.lanes = 0, e.tag) {
        case 16:
            t: {
                var l = e.pendingProps;
                if (t = ma(e.elementType), e.type = t, typeof t == "function")
                    yu(t) ? (l = va(t, l), e.tag = 1, e = sm(null, e, t, l, n)) : (e.tag = 0, e = ir(null, e, t, l, n));
                else {
                    if (t != null) {
                        var u = t.$$typeof;
                        if (u === J) {
                            e.tag = 11, e = Id(null, e, t, l, n);
                            break t;
                        }
                        else if (u === V) {
                            e.tag = 14, e = tm(null, e, t, l, n);
                            break t;
                        }
                    }
                    throw e = $(t) || t, Error(o(306, e, ""));
                }
            }
            return e;
        case 0: return ir(t, e, e.type, e.pendingProps, n);
        case 1: return l = e.type, u = va(l, e.pendingProps), sm(t, e, l, u, n);
        case 3:
            t: {
                if (ee(e, e.stateNode.containerInfo), t === null)
                    throw Error(o(387));
                l = e.pendingProps;
                var r = e.memoizedState;
                u = r.element, wu(t, e), Qi(e, l, null, n);
                var d = e.memoizedState;
                if (l = d.cache, wn(e, Zt, l), l !== r.cache && Mu(e, [Zt], n, !0), Zi(), l = d.element, r.isDehydrated)
                    if (r = { element: l, isDehydrated: !1, cache: d.cache }, e.updateQueue.baseState = r, e.memoizedState = r, e.flags & 256) {
                        e = om(t, e, l, n);
                        break t;
                    }
                    else if (l !== u) {
                        u = _e(Error(o(424)), e), Hi(u), e = om(t, e, l, n);
                        break t;
                    }
                    else
                        for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Bt = qe(t.firstChild), ae = e, Et = !0, zn = null, Le = !0, n = nd(e, null, l, n), e.child = n; n;)
                            n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (ca(), l === u) {
                        e = mn(t, e, n);
                        break t;
                    }
                    le(t, e, l, n);
                }
                e = e.child;
            }
            return e;
        case 26: return As(t, e), t === null ? (n = Tp(e.type, null, e.pendingProps, null)) ? e.memoizedState = n : Et || (n = e.type, t = e.pendingProps, l = qs(gt.current).createElement(n), l[ne] = e, l[de] = t, se(l, n, t), It(l), e.stateNode = l) : e.memoizedState = Tp(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
        case 27: return Ai(e), t === null && Et && (l = e.stateNode = xp(e.type, e.pendingProps, gt.current), ae = e, Le = !0, u = Bt, kn(e.type) ? (kr = u, Bt = qe(l.firstChild)) : Bt = u), le(t, e, e.pendingProps.children, n), As(t, e), t === null && (e.flags |= 4194304), e.child;
        case 5: return t === null && Et && ((u = l = Bt) && (l = gx(l, e.type, e.pendingProps, Le), l !== null ? (e.stateNode = l, ae = e, Bt = qe(l.firstChild), Le = !1, u = !0) : u = !1), u || Rn(e)), Ai(e), u = e.type, r = e.pendingProps, d = t !== null ? t.memoizedProps : null, l = r.children, Hr(u, r) ? l = null : d !== null && Hr(u, d) && (e.flags |= 32), e.memoizedState !== null && (u = Lu(t, e, Nv, null, null, n), hl._currentValue = u), As(t, e), le(t, e, l, n), e.child;
        case 6: return t === null && Et && ((t = n = Bt) && (n = vx(n, e.pendingProps, Le), n !== null ? (e.stateNode = n, ae = e, Bt = null, t = !0) : t = !1), t || Rn(e)), null;
        case 13: return um(t, e, n);
        case 4: return ee(e, e.stateNode.containerInfo), l = e.pendingProps, t === null ? e.child = ya(e, null, l, n) : le(t, e, l, n), e.child;
        case 11: return Id(t, e, e.type, e.pendingProps, n);
        case 7: return le(t, e, e.pendingProps, n), e.child;
        case 8: return le(t, e, e.pendingProps.children, n), e.child;
        case 12: return le(t, e, e.pendingProps.children, n), e.child;
        case 10: return l = e.pendingProps, wn(e, e.type, l.value), le(t, e, l.children, n), e.child;
        case 9: return u = e.type._context, l = e.pendingProps.children, ha(e), u = ie(u), l = l(u), e.flags |= 1, le(t, e, l, n), e.child;
        case 14: return tm(t, e, e.type, e.pendingProps, n);
        case 15: return em(t, e, e.type, e.pendingProps, n);
        case 19: return cm(t, e, n);
        case 31: return qv(t, e, n);
        case 22: return nm(t, e, n, e.pendingProps);
        case 24: return ha(e), l = ie(Zt), t === null ? (u = ju(), u === null && (u = _t, r = Du(), u.pooledCache = r, r.refCount++, r !== null && (u.pooledCacheLanes |= n), u = r), e.memoizedState = { parent: l, cache: u }, Ru(e), wn(e, Zt, u)) : ((t.lanes & n) !== 0 && (wu(t, e), Qi(e, null, null, n), Zi()), u = t.memoizedState, r = e.memoizedState, u.parent !== l ? (u = { parent: l, cache: l }, e.memoizedState = u, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = u), wn(e, Zt, l)) : (l = r.cache, wn(e, Zt, l), l !== u.cache && Mu(e, [Zt], n, !0))), le(t, e, e.pendingProps.children, n), e.child;
        case 29: throw e.pendingProps;
    } throw Error(o(156, e.tag)); }
    function pn(t) { t.flags |= 4; }
    function hr(t, e, n, l, u) { if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
        if (t.flags |= 16777216, (u & 335544128) === u)
            if (t.stateNode.complete)
                t.flags |= 8192;
            else if (Lm())
                t.flags |= 8192;
            else
                throw pa = us, zu;
    }
    else
        t.flags &= -16777217; }
    function hm(t, e) { if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
        t.flags &= -16777217;
    else if (t.flags |= 16777216, !Cp(e))
        if (Lm())
            t.flags |= 8192;
        else
            throw pa = us, zu; }
    function Ms(t, e) { e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Zf() : 536870912, t.lanes |= e, ii |= e); }
    function $i(t, e) { if (!Et)
        switch (t.tailMode) {
            case "hidden":
                e = t.tail;
                for (var n = null; e !== null;)
                    e.alternate !== null && (n = e), e = e.sibling;
                n === null ? t.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = t.tail;
                for (var l = null; n !== null;)
                    n.alternate !== null && (l = n), n = n.sibling;
                l === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null;
        } }
    function Ut(t) { var e = t.alternate !== null && t.alternate.child === t.child, n = 0, l = 0; if (e)
        for (var u = t.child; u !== null;)
            n |= u.lanes | u.childLanes, l |= u.subtreeFlags & 65011712, l |= u.flags & 65011712, u.return = t, u = u.sibling;
    else
        for (u = t.child; u !== null;)
            n |= u.lanes | u.childLanes, l |= u.subtreeFlags, l |= u.flags, u.return = t, u = u.sibling; return t.subtreeFlags |= l, t.childLanes = n, e; }
    function Gv(t, e, n) { var l = e.pendingProps; switch (bu(e), e.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14: return Ut(e), null;
        case 1: return Ut(e), null;
        case 3: return n = e.stateNode, l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), fn(Zt), Gt(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (Za(e) ? pn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Tu())), Ut(e), null;
        case 26:
            var u = e.type, r = e.memoizedState;
            return t === null ? (pn(e), r !== null ? (Ut(e), hm(e, r)) : (Ut(e), hr(e, u, null, l, n))) : r ? r !== t.memoizedState ? (pn(e), Ut(e), hm(e, r)) : (Ut(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== l && pn(e), Ut(e), hr(e, u, t, l, n)), null;
        case 27:
            if (Bl(e), n = gt.current, u = e.type, t !== null && e.stateNode != null)
                t.memoizedProps !== l && pn(e);
            else {
                if (!l) {
                    if (e.stateNode === null)
                        throw Error(o(166));
                    return Ut(e), null;
                }
                t = nt.current, Za(e) ? Zh(e) : (t = xp(u, l, n), e.stateNode = t, pn(e));
            }
            return Ut(e), null;
        case 5:
            if (Bl(e), u = e.type, t !== null && e.stateNode != null)
                t.memoizedProps !== l && pn(e);
            else {
                if (!l) {
                    if (e.stateNode === null)
                        throw Error(o(166));
                    return Ut(e), null;
                }
                if (r = nt.current, Za(e))
                    Zh(e);
                else {
                    var d = qs(gt.current);
                    switch (r) {
                        case 1:
                            r = d.createElementNS("http://www.w3.org/2000/svg", u);
                            break;
                        case 2:
                            r = d.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                            break;
                        default: switch (u) {
                            case "svg":
                                r = d.createElementNS("http://www.w3.org/2000/svg", u);
                                break;
                            case "math":
                                r = d.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                                break;
                            case "script":
                                r = d.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(r.firstChild);
                                break;
                            case "select":
                                r = typeof l.is == "string" ? d.createElement("select", { is: l.is }) : d.createElement("select"), l.multiple ? r.multiple = !0 : l.size && (r.size = l.size);
                                break;
                            default: r = typeof l.is == "string" ? d.createElement(u, { is: l.is }) : d.createElement(u);
                        }
                    }
                    r[ne] = e, r[de] = l;
                    t: for (d = e.child; d !== null;) {
                        if (d.tag === 5 || d.tag === 6)
                            r.appendChild(d.stateNode);
                        else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                            d.child.return = d, d = d.child;
                            continue;
                        }
                        if (d === e)
                            break t;
                        for (; d.sibling === null;) {
                            if (d.return === null || d.return === e)
                                break t;
                            d = d.return;
                        }
                        d.sibling.return = d.return, d = d.sibling;
                    }
                    e.stateNode = r;
                    t: switch (se(r, u, l), u) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            l = !!l.autoFocus;
                            break t;
                        case "img":
                            l = !0;
                            break t;
                        default: l = !1;
                    }
                    l && pn(e);
                }
            }
            return Ut(e), hr(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n), null;
        case 6:
            if (t && e.stateNode != null)
                t.memoizedProps !== l && pn(e);
            else {
                if (typeof l != "string" && e.stateNode === null)
                    throw Error(o(166));
                if (t = gt.current, Za(e)) {
                    if (t = e.stateNode, n = e.memoizedProps, l = null, u = ae, u !== null)
                        switch (u.tag) {
                            case 27:
                            case 5: l = u.memoizedProps;
                        }
                    t[ne] = e, t = !!(t.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || up(t.nodeValue, n)), t || Rn(e, !0);
                }
                else
                    t = qs(t).createTextNode(l), t[ne] = e, e.stateNode = t;
            }
            return Ut(e), null;
        case 31:
            if (n = e.memoizedState, t === null || t.memoizedState !== null) {
                if (l = Za(e), n !== null) {
                    if (t === null) {
                        if (!l)
                            throw Error(o(318));
                        if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t)
                            throw Error(o(557));
                        t[ne] = e;
                    }
                    else
                        ca(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
                    Ut(e), t = !1;
                }
                else
                    n = Tu(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = !0;
                if (!t)
                    return e.flags & 256 ? (De(e), e) : (De(e), null);
                if ((e.flags & 128) !== 0)
                    throw Error(o(558));
            }
            return Ut(e), null;
        case 13:
            if (l = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                if (u = Za(e), l !== null && l.dehydrated !== null) {
                    if (t === null) {
                        if (!u)
                            throw Error(o(318));
                        if (u = e.memoizedState, u = u !== null ? u.dehydrated : null, !u)
                            throw Error(o(317));
                        u[ne] = e;
                    }
                    else
                        ca(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
                    Ut(e), u = !1;
                }
                else
                    u = Tu(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = !0;
                if (!u)
                    return e.flags & 256 ? (De(e), e) : (De(e), null);
            }
            return De(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = l !== null, t = t !== null && t.memoizedState !== null, n && (l = e.child, u = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (u = l.alternate.memoizedState.cachePool.pool), r = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (r = l.memoizedState.cachePool.pool), r !== u && (l.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), Ms(e, e.updateQueue), Ut(e), null);
        case 4: return Gt(), t === null && Vr(e.stateNode.containerInfo), Ut(e), null;
        case 10: return fn(e.type), Ut(e), null;
        case 19:
            if (N(Xt), l = e.memoizedState, l === null)
                return Ut(e), null;
            if (u = (e.flags & 128) !== 0, r = l.rendering, r === null)
                if (u)
                    $i(l, !1);
                else {
                    if (Yt !== 0 || t !== null && (t.flags & 128) !== 0)
                        for (t = e.child; t !== null;) {
                            if (r = hs(t), r !== null) {
                                for (e.flags |= 128, $i(l, !1), t = r.updateQueue, e.updateQueue = t, Ms(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null;)
                                    qh(n, t), n = n.sibling;
                                return F(Xt, Xt.current & 1 | 2), Et && rn(e, l.treeForkCount), e.child;
                            }
                            t = t.sibling;
                        }
                    l.tail !== null && be() > Rs && (e.flags |= 128, u = !0, $i(l, !1), e.lanes = 4194304);
                }
            else {
                if (!u)
                    if (t = hs(r), t !== null) {
                        if (e.flags |= 128, u = !0, t = t.updateQueue, e.updateQueue = t, Ms(e, t), $i(l, !0), l.tail === null && l.tailMode === "hidden" && !r.alternate && !Et)
                            return Ut(e), null;
                    }
                    else
                        2 * be() - l.renderingStartTime > Rs && n !== 536870912 && (e.flags |= 128, u = !0, $i(l, !1), e.lanes = 4194304);
                l.isBackwards ? (r.sibling = e.child, e.child = r) : (t = l.last, t !== null ? t.sibling = r : e.child = r, l.last = r);
            }
            return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = be(), t.sibling = null, n = Xt.current, F(Xt, u ? n & 1 | 2 : n & 1), Et && rn(e, l.treeForkCount), t) : (Ut(e), null);
        case 22:
        case 23: return De(e), _u(), l = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== l && (e.flags |= 8192) : l && (e.flags |= 8192), l ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Ut(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Ut(e), n = e.updateQueue, n !== null && Ms(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), l = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), l !== n && (e.flags |= 2048), t !== null && N(da), null;
        case 24: return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), fn(Zt), Ut(e), null;
        case 25: return null;
        case 30: return null;
    } throw Error(o(156, e.tag)); }
    function Xv(t, e) { switch (bu(e), e.tag) {
        case 1: return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 3: return fn(Zt), Gt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
        case 26:
        case 27:
        case 5: return Bl(e), null;
        case 31:
            if (e.memoizedState !== null) {
                if (De(e), e.alternate === null)
                    throw Error(o(340));
                ca();
            }
            return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 13:
            if (De(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
                if (e.alternate === null)
                    throw Error(o(340));
                ca();
            }
            return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 19: return N(Xt), null;
        case 4: return Gt(), null;
        case 10: return fn(e.type), null;
        case 22:
        case 23: return De(e), _u(), t !== null && N(da), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 24: return fn(Zt), null;
        case 25: return null;
        default: return null;
    } }
    function dm(t, e) { switch (bu(e), e.tag) {
        case 3:
            fn(Zt), Gt();
            break;
        case 26:
        case 27:
        case 5:
            Bl(e);
            break;
        case 4:
            Gt();
            break;
        case 31:
            e.memoizedState !== null && De(e);
            break;
        case 13:
            De(e);
            break;
        case 19:
            N(Xt);
            break;
        case 10:
            fn(e.type);
            break;
        case 22:
        case 23:
            De(e), _u(), t !== null && N(da);
            break;
        case 24: fn(Zt);
    } }
    function Ii(t, e) { try {
        var n = e.updateQueue, l = n !== null ? n.lastEffect : null;
        if (l !== null) {
            var u = l.next;
            n = u;
            do {
                if ((n.tag & t) === t) {
                    l = void 0;
                    var r = n.create, d = n.inst;
                    l = r(), d.destroy = l;
                }
                n = n.next;
            } while (n !== u);
        }
    }
    catch (g) {
        zt(e, e.return, g);
    } }
    function Un(t, e, n) { try {
        var l = e.updateQueue, u = l !== null ? l.lastEffect : null;
        if (u !== null) {
            var r = u.next;
            l = r;
            do {
                if ((l.tag & t) === t) {
                    var d = l.inst, g = d.destroy;
                    if (g !== void 0) {
                        d.destroy = void 0, u = e;
                        var T = n, z = g;
                        try {
                            z();
                        }
                        catch (U) {
                            zt(u, T, U);
                        }
                    }
                }
                l = l.next;
            } while (l !== r);
        }
    }
    catch (U) {
        zt(e, e.return, U);
    } }
    function mm(t) { var e = t.updateQueue; if (e !== null) {
        var n = t.stateNode;
        try {
            id(e, n);
        }
        catch (l) {
            zt(t, t.return, l);
        }
    } }
    function pm(t, e, n) { n.props = va(t.type, t.memoizedProps), n.state = t.memoizedState; try {
        n.componentWillUnmount();
    }
    catch (l) {
        zt(t, e, l);
    } }
    function tl(t, e) { try {
        var n = t.ref;
        if (n !== null) {
            switch (t.tag) {
                case 26:
                case 27:
                case 5:
                    var l = t.stateNode;
                    break;
                case 30:
                    l = t.stateNode;
                    break;
                default: l = t.stateNode;
            }
            typeof n == "function" ? t.refCleanup = n(l) : n.current = l;
        }
    }
    catch (u) {
        zt(t, e, u);
    } }
    function Ie(t, e) { var n = t.ref, l = t.refCleanup; if (n !== null)
        if (typeof l == "function")
            try {
                l();
            }
            catch (u) {
                zt(t, e, u);
            }
            finally {
                t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
            }
        else if (typeof n == "function")
            try {
                n(null);
            }
            catch (u) {
                zt(t, e, u);
            }
        else
            n.current = null; }
    function ym(t) { var e = t.type, n = t.memoizedProps, l = t.stateNode; try {
        t: switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                n.autoFocus && l.focus();
                break t;
            case "img": n.src ? l.src = n.src : n.srcSet && (l.srcset = n.srcSet);
        }
    }
    catch (u) {
        zt(t, t.return, u);
    } }
    function dr(t, e, n) { try {
        var l = t.stateNode;
        fx(l, t.type, n, e), l[de] = e;
    }
    catch (u) {
        zt(t, t.return, u);
    } }
    function gm(t) { return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && kn(t.type) || t.tag === 4; }
    function mr(t) { t: for (;;) {
        for (; t.sibling === null;) {
            if (t.return === null || gm(t.return))
                return null;
            t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
            if (t.tag === 27 && kn(t.type) || t.flags & 2 || t.child === null || t.tag === 4)
                continue t;
            t.child.return = t, t = t.child;
        }
        if (!(t.flags & 2))
            return t.stateNode;
    } }
    function pr(t, e, n) { var l = t.tag; if (l === 5 || l === 6)
        t = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(t), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = sn));
    else if (l !== 4 && (l === 27 && kn(t.type) && (n = t.stateNode, e = null), t = t.child, t !== null))
        for (pr(t, e, n), t = t.sibling; t !== null;)
            pr(t, e, n), t = t.sibling; }
    function Ds(t, e, n) { var l = t.tag; if (l === 5 || l === 6)
        t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (l !== 4 && (l === 27 && kn(t.type) && (n = t.stateNode), t = t.child, t !== null))
        for (Ds(t, e, n), t = t.sibling; t !== null;)
            Ds(t, e, n), t = t.sibling; }
    function vm(t) { var e = t.stateNode, n = t.memoizedProps; try {
        for (var l = t.type, u = e.attributes; u.length;)
            e.removeAttributeNode(u[0]);
        se(e, l, n), e[ne] = t, e[de] = n;
    }
    catch (r) {
        zt(t, t.return, r);
    } }
    var yn = !1, Jt = !1, yr = !1, xm = typeof WeakSet == "function" ? WeakSet : Set, te = null;
    function kv(t, e) { if (t = t.containerInfo, Ur = Ks, t = wh(t), ru(t)) {
        if ("selectionStart" in t)
            var n = { start: t.selectionStart, end: t.selectionEnd };
        else
            t: {
                n = (n = t.ownerDocument) && n.defaultView || window;
                var l = n.getSelection && n.getSelection();
                if (l && l.rangeCount !== 0) {
                    n = l.anchorNode;
                    var u = l.anchorOffset, r = l.focusNode;
                    l = l.focusOffset;
                    try {
                        n.nodeType, r.nodeType;
                    }
                    catch {
                        n = null;
                        break t;
                    }
                    var d = 0, g = -1, T = -1, z = 0, U = 0, q = t, w = null;
                    e: for (;;) {
                        for (var O; q !== n || u !== 0 && q.nodeType !== 3 || (g = d + u), q !== r || l !== 0 && q.nodeType !== 3 || (T = d + l), q.nodeType === 3 && (d += q.nodeValue.length), (O = q.firstChild) !== null;)
                            w = q, q = O;
                        for (;;) {
                            if (q === t)
                                break e;
                            if (w === n && ++z === u && (g = d), w === r && ++U === l && (T = d), (O = q.nextSibling) !== null)
                                break;
                            q = w, w = q.parentNode;
                        }
                        q = O;
                    }
                    n = g === -1 || T === -1 ? null : { start: g, end: T };
                }
                else
                    n = null;
            }
        n = n || { start: 0, end: 0 };
    }
    else
        n = null; for (Lr = { focusedElem: t, selectionRange: n }, Ks = !1, te = e; te !== null;)
        if (e = te, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
            t.return = e, te = t;
        else
            for (; te !== null;) {
                switch (e = te, r = e.alternate, t = e.flags, e.tag) {
                    case 0:
                        if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                            for (n = 0; n < t.length; n++)
                                u = t[n], u.ref.impl = u.nextImpl;
                        break;
                    case 11:
                    case 15: break;
                    case 1:
                        if ((t & 1024) !== 0 && r !== null) {
                            t = void 0, n = e, u = r.memoizedProps, r = r.memoizedState, l = n.stateNode;
                            try {
                                var it = va(n.type, u);
                                t = l.getSnapshotBeforeUpdate(it, r), l.__reactInternalSnapshotBeforeUpdate = t;
                            }
                            catch (ct) {
                                zt(n, n.return, ct);
                            }
                        }
                        break;
                    case 3:
                        if ((t & 1024) !== 0) {
                            if (t = e.stateNode.containerInfo, n = t.nodeType, n === 9)
                                Yr(t);
                            else if (n === 1)
                                switch (t.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        Yr(t);
                                        break;
                                    default: t.textContent = "";
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17: break;
                    default: if ((t & 1024) !== 0)
                        throw Error(o(163));
                }
                if (t = e.sibling, t !== null) {
                    t.return = e.return, te = t;
                    break;
                }
                te = e.return;
            } }
    function bm(t, e, n) { var l = n.flags; switch (n.tag) {
        case 0:
        case 11:
        case 15:
            vn(t, n), l & 4 && Ii(5, n);
            break;
        case 1:
            if (vn(t, n), l & 4)
                if (t = n.stateNode, e === null)
                    try {
                        t.componentDidMount();
                    }
                    catch (d) {
                        zt(n, n.return, d);
                    }
                else {
                    var u = va(n.type, e.memoizedProps);
                    e = e.memoizedState;
                    try {
                        t.componentDidUpdate(u, e, t.__reactInternalSnapshotBeforeUpdate);
                    }
                    catch (d) {
                        zt(n, n.return, d);
                    }
                }
            l & 64 && mm(n), l & 512 && tl(n, n.return);
            break;
        case 3:
            if (vn(t, n), l & 64 && (t = n.updateQueue, t !== null)) {
                if (e = null, n.child !== null)
                    switch (n.child.tag) {
                        case 27:
                        case 5:
                            e = n.child.stateNode;
                            break;
                        case 1: e = n.child.stateNode;
                    }
                try {
                    id(t, e);
                }
                catch (d) {
                    zt(n, n.return, d);
                }
            }
            break;
        case 27: e === null && l & 4 && vm(n);
        case 26:
        case 5:
            vn(t, n), e === null && l & 4 && ym(n), l & 512 && tl(n, n.return);
            break;
        case 12:
            vn(t, n);
            break;
        case 31:
            vn(t, n), l & 4 && Am(t, n);
            break;
        case 13:
            vn(t, n), l & 4 && Em(t, n), l & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = Iv.bind(null, n), xx(t, n))));
            break;
        case 22:
            if (l = n.memoizedState !== null || yn, !l) {
                e = e !== null && e.memoizedState !== null || Jt, u = yn;
                var r = Jt;
                yn = l, (Jt = e) && !r ? xn(t, n, (n.subtreeFlags & 8772) !== 0) : vn(t, n), yn = u, Jt = r;
            }
            break;
        case 30: break;
        default: vn(t, n);
    } }
    function Sm(t) { var e = t.alternate; e !== null && (t.alternate = null, Sm(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Qo(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null; }
    var Lt = null, pe = !1;
    function gn(t, e, n) { for (n = n.child; n !== null;)
        Tm(t, e, n), n = n.sibling; }
    function Tm(t, e, n) { if (Se && typeof Se.onCommitFiberUnmount == "function")
        try {
            Se.onCommitFiberUnmount(Ei, n);
        }
        catch { } switch (n.tag) {
        case 26:
            Jt || Ie(n, e), gn(t, e, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
            break;
        case 27:
            Jt || Ie(n, e);
            var l = Lt, u = pe;
            kn(n.type) && (Lt = n.stateNode, pe = !1), gn(t, e, n), rl(n.stateNode), Lt = l, pe = u;
            break;
        case 5: Jt || Ie(n, e);
        case 6:
            if (l = Lt, u = pe, Lt = null, gn(t, e, n), Lt = l, pe = u, Lt !== null)
                if (pe)
                    try {
                        (Lt.nodeType === 9 ? Lt.body : Lt.nodeName === "HTML" ? Lt.ownerDocument.body : Lt).removeChild(n.stateNode);
                    }
                    catch (r) {
                        zt(n, e, r);
                    }
                else
                    try {
                        Lt.removeChild(n.stateNode);
                    }
                    catch (r) {
                        zt(n, e, r);
                    }
            break;
        case 18:
            Lt !== null && (pe ? (t = Lt, mp(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, n.stateNode), hi(t)) : mp(Lt, n.stateNode));
            break;
        case 4:
            l = Lt, u = pe, Lt = n.stateNode.containerInfo, pe = !0, gn(t, e, n), Lt = l, pe = u;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            Un(2, n, e), Jt || Un(4, n, e), gn(t, e, n);
            break;
        case 1:
            Jt || (Ie(n, e), l = n.stateNode, typeof l.componentWillUnmount == "function" && pm(n, e, l)), gn(t, e, n);
            break;
        case 21:
            gn(t, e, n);
            break;
        case 22:
            Jt = (l = Jt) || n.memoizedState !== null, gn(t, e, n), Jt = l;
            break;
        default: gn(t, e, n);
    } }
    function Am(t, e) { if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
        t = t.dehydrated;
        try {
            hi(t);
        }
        catch (n) {
            zt(e, e.return, n);
        }
    } }
    function Em(t, e) { if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
        try {
            hi(t);
        }
        catch (n) {
            zt(e, e.return, n);
        } }
    function Zv(t) { switch (t.tag) {
        case 31:
        case 13:
        case 19:
            var e = t.stateNode;
            return e === null && (e = t.stateNode = new xm), e;
        case 22: return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new xm), e;
        default: throw Error(o(435, t.tag));
    } }
    function Cs(t, e) { var n = Zv(t); e.forEach(function (l) { if (!n.has(l)) {
        n.add(l);
        var u = tx.bind(null, t, l);
        l.then(u, u);
    } }); }
    function ye(t, e) { var n = e.deletions; if (n !== null)
        for (var l = 0; l < n.length; l++) {
            var u = n[l], r = t, d = e, g = d;
            t: for (; g !== null;) {
                switch (g.tag) {
                    case 27:
                        if (kn(g.type)) {
                            Lt = g.stateNode, pe = !1;
                            break t;
                        }
                        break;
                    case 5:
                        Lt = g.stateNode, pe = !1;
                        break t;
                    case 3:
                    case 4:
                        Lt = g.stateNode.containerInfo, pe = !0;
                        break t;
                }
                g = g.return;
            }
            if (Lt === null)
                throw Error(o(160));
            Tm(r, d, u), Lt = null, pe = !1, r = u.alternate, r !== null && (r.return = null), u.return = null;
        } if (e.subtreeFlags & 13886)
        for (e = e.child; e !== null;)
            Mm(e, t), e = e.sibling; }
    var ke = null;
    function Mm(t, e) { var n = t.alternate, l = t.flags; switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            ye(e, t), ge(t), l & 4 && (Un(3, t, t.return), Ii(3, t), Un(5, t, t.return));
            break;
        case 1:
            ye(e, t), ge(t), l & 512 && (Jt || n === null || Ie(n, n.return)), l & 64 && yn && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
            break;
        case 26:
            var u = ke;
            if (ye(e, t), ge(t), l & 512 && (Jt || n === null || Ie(n, n.return)), l & 4) {
                var r = n !== null ? n.memoizedState : null;
                if (l = t.memoizedState, n === null)
                    if (l === null)
                        if (t.stateNode === null) {
                            t: {
                                l = t.type, n = t.memoizedProps, u = u.ownerDocument || u;
                                e: switch (l) {
                                    case "title":
                                        r = u.getElementsByTagName("title")[0], (!r || r[Ci] || r[ne] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = u.createElement(l), u.head.insertBefore(r, u.querySelector("head > title"))), se(r, l, n), r[ne] = t, It(r), l = r;
                                        break t;
                                    case "link":
                                        var d = Mp("link", "href", u).get(l + (n.href || ""));
                                        if (d) {
                                            for (var g = 0; g < d.length; g++)
                                                if (r = d[g], r.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && r.getAttribute("rel") === (n.rel == null ? null : n.rel) && r.getAttribute("title") === (n.title == null ? null : n.title) && r.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                                    d.splice(g, 1);
                                                    break e;
                                                }
                                        }
                                        r = u.createElement(l), se(r, l, n), u.head.appendChild(r);
                                        break;
                                    case "meta":
                                        if (d = Mp("meta", "content", u).get(l + (n.content || ""))) {
                                            for (g = 0; g < d.length; g++)
                                                if (r = d[g], r.getAttribute("content") === (n.content == null ? null : "" + n.content) && r.getAttribute("name") === (n.name == null ? null : n.name) && r.getAttribute("property") === (n.property == null ? null : n.property) && r.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && r.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                                    d.splice(g, 1);
                                                    break e;
                                                }
                                        }
                                        r = u.createElement(l), se(r, l, n), u.head.appendChild(r);
                                        break;
                                    default: throw Error(o(468, l));
                                }
                                r[ne] = t, It(r), l = r;
                            }
                            t.stateNode = l;
                        }
                        else
                            Dp(u, t.type, t.stateNode);
                    else
                        t.stateNode = Ep(u, l, t.memoizedProps);
                else
                    r !== l ? (r === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : r.count--, l === null ? Dp(u, t.type, t.stateNode) : Ep(u, l, t.memoizedProps)) : l === null && t.stateNode !== null && dr(t, t.memoizedProps, n.memoizedProps);
            }
            break;
        case 27:
            ye(e, t), ge(t), l & 512 && (Jt || n === null || Ie(n, n.return)), n !== null && l & 4 && dr(t, t.memoizedProps, n.memoizedProps);
            break;
        case 5:
            if (ye(e, t), ge(t), l & 512 && (Jt || n === null || Ie(n, n.return)), t.flags & 32) {
                u = t.stateNode;
                try {
                    _a(u, "");
                }
                catch (it) {
                    zt(t, t.return, it);
                }
            }
            l & 4 && t.stateNode != null && (u = t.memoizedProps, dr(t, u, n !== null ? n.memoizedProps : u)), l & 1024 && (yr = !0);
            break;
        case 6:
            if (ye(e, t), ge(t), l & 4) {
                if (t.stateNode === null)
                    throw Error(o(162));
                l = t.memoizedProps, n = t.stateNode;
                try {
                    n.nodeValue = l;
                }
                catch (it) {
                    zt(t, t.return, it);
                }
            }
            break;
        case 3:
            if (Xs = null, u = ke, ke = Ys(e.containerInfo), ye(e, t), ke = u, ge(t), l & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                    hi(e.containerInfo);
                }
                catch (it) {
                    zt(t, t.return, it);
                }
            yr && (yr = !1, Dm(t));
            break;
        case 4:
            l = ke, ke = Ys(t.stateNode.containerInfo), ye(e, t), ge(t), ke = l;
            break;
        case 12:
            ye(e, t), ge(t);
            break;
        case 31:
            ye(e, t), ge(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Cs(t, l)));
            break;
        case 13:
            ye(e, t), ge(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (zs = be()), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Cs(t, l)));
            break;
        case 22:
            u = t.memoizedState !== null;
            var T = n !== null && n.memoizedState !== null, z = yn, U = Jt;
            if (yn = z || u, Jt = U || T, ye(e, t), Jt = U, yn = z, ge(t), l & 8192)
                t: for (e = t.stateNode, e._visibility = u ? e._visibility & -2 : e._visibility | 1, u && (n === null || T || yn || Jt || xa(t)), n = null, e = t;;) {
                    if (e.tag === 5 || e.tag === 26) {
                        if (n === null) {
                            T = n = e;
                            try {
                                if (r = T.stateNode, u)
                                    d = r.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none";
                                else {
                                    g = T.stateNode;
                                    var q = T.memoizedProps.style, w = q != null && q.hasOwnProperty("display") ? q.display : null;
                                    g.style.display = w == null || typeof w == "boolean" ? "" : ("" + w).trim();
                                }
                            }
                            catch (it) {
                                zt(T, T.return, it);
                            }
                        }
                    }
                    else if (e.tag === 6) {
                        if (n === null) {
                            T = e;
                            try {
                                T.stateNode.nodeValue = u ? "" : T.memoizedProps;
                            }
                            catch (it) {
                                zt(T, T.return, it);
                            }
                        }
                    }
                    else if (e.tag === 18) {
                        if (n === null) {
                            T = e;
                            try {
                                var O = T.stateNode;
                                u ? pp(O, !0) : pp(T.stateNode, !1);
                            }
                            catch (it) {
                                zt(T, T.return, it);
                            }
                        }
                    }
                    else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                        e.child.return = e, e = e.child;
                        continue;
                    }
                    if (e === t)
                        break t;
                    for (; e.sibling === null;) {
                        if (e.return === null || e.return === t)
                            break t;
                        n === e && (n = null), e = e.return;
                    }
                    n === e && (n = null), e.sibling.return = e.return, e = e.sibling;
                }
            l & 4 && (l = t.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, Cs(t, n))));
            break;
        case 19:
            ye(e, t), ge(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Cs(t, l)));
            break;
        case 30: break;
        case 21: break;
        default: ye(e, t), ge(t);
    } }
    function ge(t) { var e = t.flags; if (e & 2) {
        try {
            for (var n, l = t.return; l !== null;) {
                if (gm(l)) {
                    n = l;
                    break;
                }
                l = l.return;
            }
            if (n == null)
                throw Error(o(160));
            switch (n.tag) {
                case 27:
                    var u = n.stateNode, r = mr(t);
                    Ds(t, r, u);
                    break;
                case 5:
                    var d = n.stateNode;
                    n.flags & 32 && (_a(d, ""), n.flags &= -33);
                    var g = mr(t);
                    Ds(t, g, d);
                    break;
                case 3:
                case 4:
                    var T = n.stateNode.containerInfo, z = mr(t);
                    pr(t, z, T);
                    break;
                default: throw Error(o(161));
            }
        }
        catch (U) {
            zt(t, t.return, U);
        }
        t.flags &= -3;
    } e & 4096 && (t.flags &= -4097); }
    function Dm(t) { if (t.subtreeFlags & 1024)
        for (t = t.child; t !== null;) {
            var e = t;
            Dm(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
        } }
    function vn(t, e) { if (e.subtreeFlags & 8772)
        for (e = e.child; e !== null;)
            bm(t, e.alternate, e), e = e.sibling; }
    function xa(t) { for (t = t.child; t !== null;) {
        var e = t;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Un(4, e, e.return), xa(e);
                break;
            case 1:
                Ie(e, e.return);
                var n = e.stateNode;
                typeof n.componentWillUnmount == "function" && pm(e, e.return, n), xa(e);
                break;
            case 27: rl(e.stateNode);
            case 26:
            case 5:
                Ie(e, e.return), xa(e);
                break;
            case 22:
                e.memoizedState === null && xa(e);
                break;
            case 30:
                xa(e);
                break;
            default: xa(e);
        }
        t = t.sibling;
    } }
    function xn(t, e, n) { for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null;) {
        var l = e.alternate, u = t, r = e, d = r.flags;
        switch (r.tag) {
            case 0:
            case 11:
            case 15:
                xn(u, r, n), Ii(4, r);
                break;
            case 1:
                if (xn(u, r, n), l = r, u = l.stateNode, typeof u.componentDidMount == "function")
                    try {
                        u.componentDidMount();
                    }
                    catch (z) {
                        zt(l, l.return, z);
                    }
                if (l = r, u = l.updateQueue, u !== null) {
                    var g = l.stateNode;
                    try {
                        var T = u.shared.hiddenCallbacks;
                        if (T !== null)
                            for (u.shared.hiddenCallbacks = null, u = 0; u < T.length; u++)
                                ad(T[u], g);
                    }
                    catch (z) {
                        zt(l, l.return, z);
                    }
                }
                n && d & 64 && mm(r), tl(r, r.return);
                break;
            case 27: vm(r);
            case 26:
            case 5:
                xn(u, r, n), n && l === null && d & 4 && ym(r), tl(r, r.return);
                break;
            case 12:
                xn(u, r, n);
                break;
            case 31:
                xn(u, r, n), n && d & 4 && Am(u, r);
                break;
            case 13:
                xn(u, r, n), n && d & 4 && Em(u, r);
                break;
            case 22:
                r.memoizedState === null && xn(u, r, n), tl(r, r.return);
                break;
            case 30: break;
            default: xn(u, r, n);
        }
        e = e.sibling;
    } }
    function gr(t, e) { var n = null; t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && qi(n)); }
    function vr(t, e) { t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && qi(t)); }
    function Ze(t, e, n, l) { if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null;)
            Cm(t, e, n, l), e = e.sibling; }
    function Cm(t, e, n, l) { var u = e.flags; switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Ze(t, e, n, l), u & 2048 && Ii(9, e);
            break;
        case 1:
            Ze(t, e, n, l);
            break;
        case 3:
            Ze(t, e, n, l), u & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && qi(t)));
            break;
        case 12:
            if (u & 2048) {
                Ze(t, e, n, l), t = e.stateNode;
                try {
                    var r = e.memoizedProps, d = r.id, g = r.onPostCommit;
                    typeof g == "function" && g(d, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
                }
                catch (T) {
                    zt(e, e.return, T);
                }
            }
            else
                Ze(t, e, n, l);
            break;
        case 31:
            Ze(t, e, n, l);
            break;
        case 13:
            Ze(t, e, n, l);
            break;
        case 23: break;
        case 22:
            r = e.stateNode, d = e.alternate, e.memoizedState !== null ? r._visibility & 2 ? Ze(t, e, n, l) : el(t, e) : r._visibility & 2 ? Ze(t, e, n, l) : (r._visibility |= 2, ei(t, e, n, l, (e.subtreeFlags & 10256) !== 0 || !1)), u & 2048 && gr(d, e);
            break;
        case 24:
            Ze(t, e, n, l), u & 2048 && vr(e.alternate, e);
            break;
        default: Ze(t, e, n, l);
    } }
    function ei(t, e, n, l, u) { for (u = u && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null;) {
        var r = t, d = e, g = n, T = l, z = d.flags;
        switch (d.tag) {
            case 0:
            case 11:
            case 15:
                ei(r, d, g, T, u), Ii(8, d);
                break;
            case 23: break;
            case 22:
                var U = d.stateNode;
                d.memoizedState !== null ? U._visibility & 2 ? ei(r, d, g, T, u) : el(r, d) : (U._visibility |= 2, ei(r, d, g, T, u)), u && z & 2048 && gr(d.alternate, d);
                break;
            case 24:
                ei(r, d, g, T, u), u && z & 2048 && vr(d.alternate, d);
                break;
            default: ei(r, d, g, T, u);
        }
        e = e.sibling;
    } }
    function el(t, e) { if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null;) {
            var n = t, l = e, u = l.flags;
            switch (l.tag) {
                case 22:
                    el(n, l), u & 2048 && gr(l.alternate, l);
                    break;
                case 24:
                    el(n, l), u & 2048 && vr(l.alternate, l);
                    break;
                default: el(n, l);
            }
            e = e.sibling;
        } }
    var nl = 8192;
    function ni(t, e, n) { if (t.subtreeFlags & nl)
        for (t = t.child; t !== null;)
            jm(t, e, n), t = t.sibling; }
    function jm(t, e, n) { switch (t.tag) {
        case 26:
            ni(t, e, n), t.flags & nl && t.memoizedState !== null && wx(n, ke, t.memoizedState, t.memoizedProps);
            break;
        case 5:
            ni(t, e, n);
            break;
        case 3:
        case 4:
            var l = ke;
            ke = Ys(t.stateNode.containerInfo), ni(t, e, n), ke = l;
            break;
        case 22:
            t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = nl, nl = 16777216, ni(t, e, n), nl = l) : ni(t, e, n));
            break;
        default: ni(t, e, n);
    } }
    function zm(t) { var e = t.alternate; if (e !== null && (t = e.child, t !== null)) {
        e.child = null;
        do
            e = t.sibling, t.sibling = null, t = e;
        while (t !== null);
    } }
    function al(t) { var e = t.deletions; if ((t.flags & 16) !== 0) {
        if (e !== null)
            for (var n = 0; n < e.length; n++) {
                var l = e[n];
                te = l, wm(l, t);
            }
        zm(t);
    } if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null;)
            Rm(t), t = t.sibling; }
    function Rm(t) { switch (t.tag) {
        case 0:
        case 11:
        case 15:
            al(t), t.flags & 2048 && Un(9, t, t.return);
            break;
        case 3:
            al(t);
            break;
        case 12:
            al(t);
            break;
        case 22:
            var e = t.stateNode;
            t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, js(t)) : al(t);
            break;
        default: al(t);
    } }
    function js(t) { var e = t.deletions; if ((t.flags & 16) !== 0) {
        if (e !== null)
            for (var n = 0; n < e.length; n++) {
                var l = e[n];
                te = l, wm(l, t);
            }
        zm(t);
    } for (t = t.child; t !== null;) {
        switch (e = t, e.tag) {
            case 0:
            case 11:
            case 15:
                Un(8, e, e.return), js(e);
                break;
            case 22:
                n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, js(e));
                break;
            default: js(e);
        }
        t = t.sibling;
    } }
    function wm(t, e) { for (; te !== null;) {
        var n = te;
        switch (n.tag) {
            case 0:
            case 11:
            case 15:
                Un(8, n, e);
                break;
            case 23:
            case 22:
                if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                    var l = n.memoizedState.cachePool.pool;
                    l != null && l.refCount++;
                }
                break;
            case 24: qi(n.memoizedState.cache);
        }
        if (l = n.child, l !== null)
            l.return = n, te = l;
        else
            t: for (n = t; te !== null;) {
                l = te;
                var u = l.sibling, r = l.return;
                if (Sm(l), l === n) {
                    te = null;
                    break t;
                }
                if (u !== null) {
                    u.return = r, te = u;
                    break t;
                }
                te = r;
            }
    } }
    var Qv = { getCacheForType: function (t) { var e = ie(Zt), n = e.data.get(t); return n === void 0 && (n = t(), e.data.set(t, n)), n; }, cacheSignal: function () { return ie(Zt).controller.signal; } }, Kv = typeof WeakMap == "function" ? WeakMap : Map, Ct = 0, _t = null, bt = null, Tt = 0, jt = 0, Ce = null, Ln = !1, ai = !1, xr = !1, bn = 0, Yt = 0, Hn = 0, ba = 0, br = 0, je = 0, ii = 0, il = null, ve = null, Sr = !1, zs = 0, Nm = 0, Rs = 1 / 0, ws = null, qn = null, Pt = 0, Yn = null, li = null, Sn = 0, Tr = 0, Ar = null, Om = null, ll = 0, Er = null;
    function ze() { return (Ct & 2) !== 0 && Tt !== 0 ? Tt & -Tt : C.T !== null ? Rr() : Ff(); }
    function Vm() { if (je === 0)
        if ((Tt & 536870912) === 0 || Et) {
            var t = Hl;
            Hl <<= 1, (Hl & 3932160) === 0 && (Hl = 262144), je = t;
        }
        else
            je = 536870912; return t = Me.current, t !== null && (t.flags |= 32), je; }
    function xe(t, e, n) { (t === _t && (jt === 2 || jt === 9) || t.cancelPendingCommit !== null) && (si(t, 0), Gn(t, Tt, je, !1)), Di(t, n), ((Ct & 2) === 0 || t !== _t) && (t === _t && ((Ct & 2) === 0 && (ba |= n), Yt === 4 && Gn(t, Tt, je, !1)), tn(t)); }
    function _m(t, e, n) { if ((Ct & 6) !== 0)
        throw Error(o(327)); var l = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Mi(t, e), u = l ? Pv(t, e) : Dr(t, e, !0), r = l; do {
        if (u === 0) {
            ai && !l && Gn(t, e, 0, !1);
            break;
        }
        else {
            if (n = t.current.alternate, r && !Jv(n)) {
                u = Dr(t, e, !1), r = !1;
                continue;
            }
            if (u === 2) {
                if (r = e, t.errorRecoveryDisabledLanes & r)
                    var d = 0;
                else
                    d = t.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
                if (d !== 0) {
                    e = d;
                    t: {
                        var g = t;
                        u = il;
                        var T = g.current.memoizedState.isDehydrated;
                        if (T && (si(g, d).flags |= 256), d = Dr(g, d, !1), d !== 2) {
                            if (xr && !T) {
                                g.errorRecoveryDisabledLanes |= r, ba |= r, u = 4;
                                break t;
                            }
                            r = ve, ve = u, r !== null && (ve === null ? ve = r : ve.push.apply(ve, r));
                        }
                        u = d;
                    }
                    if (r = !1, u !== 2)
                        continue;
                }
            }
            if (u === 1) {
                si(t, 0), Gn(t, e, 0, !0);
                break;
            }
            t: {
                switch (l = t, r = u, r) {
                    case 0:
                    case 1: throw Error(o(345));
                    case 4: if ((e & 4194048) !== e)
                        break;
                    case 6:
                        Gn(l, e, je, !Ln);
                        break t;
                    case 2:
                        ve = null;
                        break;
                    case 3:
                    case 5: break;
                    default: throw Error(o(329));
                }
                if ((e & 62914560) === e && (u = zs + 300 - be(), 10 < u)) {
                    if (Gn(l, e, je, !Ln), Yl(l, 0, !0) !== 0)
                        break t;
                    Sn = e, l.timeoutHandle = hp(Bm.bind(null, l, n, ve, ws, Sr, e, je, ba, ii, Ln, r, "Throttled", -0, 0), u);
                    break t;
                }
                Bm(l, n, ve, ws, Sr, e, je, ba, ii, Ln, r, null, -0, 0);
            }
        }
        break;
    } while (!0); tn(t); }
    function Bm(t, e, n, l, u, r, d, g, T, z, U, q, w, O) { if (t.timeoutHandle = -1, q = e.subtreeFlags, q & 8192 || (q & 16785408) === 16785408) {
        q = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: !0, waitingForViewTransition: !1, unsuspend: sn }, jm(e, r, q);
        var it = (r & 62914560) === r ? zs - be() : (r & 4194048) === r ? Nm - be() : 0;
        if (it = Nx(q, it), it !== null) {
            Sn = r, t.cancelPendingCommit = it(km.bind(null, t, e, r, n, l, u, d, g, T, U, q, null, w, O)), Gn(t, r, d, !z);
            return;
        }
    } km(t, e, r, n, l, u, d, g, T); }
    function Jv(t) { for (var e = t;;) {
        var n = e.tag;
        if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
            for (var l = 0; l < n.length; l++) {
                var u = n[l], r = u.getSnapshot;
                u = u.value;
                try {
                    if (!Ae(r(), u))
                        return !1;
                }
                catch {
                    return !1;
                }
            }
        if (n = e.child, e.subtreeFlags & 16384 && n !== null)
            n.return = e, e = n;
        else {
            if (e === t)
                break;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t)
                    return !0;
                e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
        }
    } return !0; }
    function Gn(t, e, n, l) { e &= ~br, e &= ~ba, t.suspendedLanes |= e, t.pingedLanes &= ~e, l && (t.warmLanes |= e), l = t.expirationTimes; for (var u = e; 0 < u;) {
        var r = 31 - Te(u), d = 1 << r;
        l[r] = -1, u &= ~d;
    } n !== 0 && Qf(t, n, e); }
    function Ns() { return (Ct & 6) === 0 ? (sl(0), !1) : !0; }
    function Mr() { if (bt !== null) {
        if (jt === 0)
            var t = bt.return;
        else
            t = bt, cn = fa = null, Yu(t), Pa = null, Gi = 0, t = bt;
        for (; t !== null;)
            dm(t.alternate, t), t = t.return;
        bt = null;
    } }
    function si(t, e) { var n = t.timeoutHandle; n !== -1 && (t.timeoutHandle = -1, mx(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), Sn = 0, Mr(), _t = t, bt = n = un(t.current, null), Tt = e, jt = 0, Ce = null, Ln = !1, ai = Mi(t, e), xr = !1, ii = je = br = ba = Hn = Yt = 0, ve = il = null, Sr = !1, (e & 8) !== 0 && (e |= e & 32); var l = t.entangledLanes; if (l !== 0)
        for (t = t.entanglements, l &= e; 0 < l;) {
            var u = 31 - Te(l), r = 1 << u;
            e |= t[u], l &= ~r;
        } return bn = e, Il(), n; }
    function Um(t, e) { yt = null, C.H = Pi, e === Fa || e === os ? (e = Ih(), jt = 3) : e === zu ? (e = Ih(), jt = 4) : jt = e === ar ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Ce = e, bt === null && (Yt = 1, Ss(t, _e(e, t.current))); }
    function Lm() { var t = Me.current; return t === null ? !0 : (Tt & 4194048) === Tt ? He === null : (Tt & 62914560) === Tt || (Tt & 536870912) !== 0 ? t === He : !1; }
    function Hm() { var t = C.H; return C.H = Pi, t === null ? Pi : t; }
    function qm() { var t = C.A; return C.A = Qv, t; }
    function Os() { Yt = 4, Ln || (Tt & 4194048) !== Tt && Me.current !== null || (ai = !0), (Hn & 134217727) === 0 && (ba & 134217727) === 0 || _t === null || Gn(_t, Tt, je, !1); }
    function Dr(t, e, n) { var l = Ct; Ct |= 2; var u = Hm(), r = qm(); (_t !== t || Tt !== e) && (ws = null, si(t, e)), e = !1; var d = Yt; t: do
        try {
            if (jt !== 0 && bt !== null) {
                var g = bt, T = Ce;
                switch (jt) {
                    case 8:
                        Mr(), d = 6;
                        break t;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        Me.current === null && (e = !0);
                        var z = jt;
                        if (jt = 0, Ce = null, oi(t, g, T, z), n && ai) {
                            d = 0;
                            break t;
                        }
                        break;
                    default: z = jt, jt = 0, Ce = null, oi(t, g, T, z);
                }
            }
            Fv(), d = Yt;
            break;
        }
        catch (U) {
            Um(t, U);
        }
    while (!0); return e && t.shellSuspendCounter++, cn = fa = null, Ct = l, C.H = u, C.A = r, bt === null && (_t = null, Tt = 0, Il()), d; }
    function Fv() { for (; bt !== null;)
        Ym(bt); }
    function Pv(t, e) { var n = Ct; Ct |= 2; var l = Hm(), u = qm(); _t !== t || Tt !== e ? (ws = null, Rs = be() + 500, si(t, e)) : ai = Mi(t, e); t: do
        try {
            if (jt !== 0 && bt !== null) {
                e = bt;
                var r = Ce;
                e: switch (jt) {
                    case 1:
                        jt = 0, Ce = null, oi(t, e, r, 1);
                        break;
                    case 2:
                    case 9:
                        if (Wh(r)) {
                            jt = 0, Ce = null, Gm(e);
                            break;
                        }
                        e = function () { jt !== 2 && jt !== 9 || _t !== t || (jt = 7), tn(t); }, r.then(e, e);
                        break t;
                    case 3:
                        jt = 7;
                        break t;
                    case 4:
                        jt = 5;
                        break t;
                    case 7:
                        Wh(r) ? (jt = 0, Ce = null, Gm(e)) : (jt = 0, Ce = null, oi(t, e, r, 7));
                        break;
                    case 5:
                        var d = null;
                        switch (bt.tag) {
                            case 26: d = bt.memoizedState;
                            case 5:
                            case 27:
                                var g = bt;
                                if (d ? Cp(d) : g.stateNode.complete) {
                                    jt = 0, Ce = null;
                                    var T = g.sibling;
                                    if (T !== null)
                                        bt = T;
                                    else {
                                        var z = g.return;
                                        z !== null ? (bt = z, Vs(z)) : bt = null;
                                    }
                                    break e;
                                }
                        }
                        jt = 0, Ce = null, oi(t, e, r, 5);
                        break;
                    case 6:
                        jt = 0, Ce = null, oi(t, e, r, 6);
                        break;
                    case 8:
                        Mr(), Yt = 6;
                        break t;
                    default: throw Error(o(462));
                }
            }
            Wv();
            break;
        }
        catch (U) {
            Um(t, U);
        }
    while (!0); return cn = fa = null, C.H = l, C.A = u, Ct = n, bt !== null ? 0 : (_t = null, Tt = 0, Il(), Yt); }
    function Wv() { for (; bt !== null && !b1();)
        Ym(bt); }
    function Ym(t) { var e = fm(t.alternate, t, bn); t.memoizedProps = t.pendingProps, e === null ? Vs(t) : bt = e; }
    function Gm(t) { var e = t, n = e.alternate; switch (e.tag) {
        case 15:
        case 0:
            e = lm(n, e, e.pendingProps, e.type, void 0, Tt);
            break;
        case 11:
            e = lm(n, e, e.pendingProps, e.type.render, e.ref, Tt);
            break;
        case 5: Yu(e);
        default: dm(n, e), e = bt = qh(e, bn), e = fm(n, e, bn);
    } t.memoizedProps = t.pendingProps, e === null ? Vs(t) : bt = e; }
    function oi(t, e, n, l) { cn = fa = null, Yu(e), Pa = null, Gi = 0; var u = e.return; try {
        if (Hv(t, u, e, n, Tt)) {
            Yt = 1, Ss(t, _e(n, t.current)), bt = null;
            return;
        }
    }
    catch (r) {
        if (u !== null)
            throw bt = u, r;
        Yt = 1, Ss(t, _e(n, t.current)), bt = null;
        return;
    } e.flags & 32768 ? (Et || l === 1 ? t = !0 : ai || (Tt & 536870912) !== 0 ? t = !1 : (Ln = t = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Me.current, l !== null && l.tag === 13 && (l.flags |= 16384))), Xm(e, t)) : Vs(e); }
    function Vs(t) { var e = t; do {
        if ((e.flags & 32768) !== 0) {
            Xm(e, Ln);
            return;
        }
        t = e.return;
        var n = Gv(e.alternate, e, bn);
        if (n !== null) {
            bt = n;
            return;
        }
        if (e = e.sibling, e !== null) {
            bt = e;
            return;
        }
        bt = e = t;
    } while (e !== null); Yt === 0 && (Yt = 5); }
    function Xm(t, e) { do {
        var n = Xv(t.alternate, t);
        if (n !== null) {
            n.flags &= 32767, bt = n;
            return;
        }
        if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
            bt = t;
            return;
        }
        bt = t = n;
    } while (t !== null); Yt = 6, bt = null; }
    function km(t, e, n, l, u, r, d, g, T) { t.cancelPendingCommit = null; do
        _s();
    while (Pt !== 0); if ((Ct & 6) !== 0)
        throw Error(o(327)); if (e !== null) {
        if (e === t.current)
            throw Error(o(177));
        if (r = e.lanes | e.childLanes, r |= mu, R1(t, n, r, d, g, T), t === _t && (bt = _t = null, Tt = 0), li = e, Yn = t, Sn = n, Tr = r, Ar = u, Om = l, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, ex(Ul, function () { return Fm(), null; })) : (t.callbackNode = null, t.callbackPriority = 0), l = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || l) {
            l = C.T, C.T = null, u = H.p, H.p = 2, d = Ct, Ct |= 4;
            try {
                kv(t, e, n);
            }
            finally {
                Ct = d, H.p = u, C.T = l;
            }
        }
        Pt = 1, Zm(), Qm(), Km();
    } }
    function Zm() { if (Pt === 1) {
        Pt = 0;
        var t = Yn, e = li, n = (e.flags & 13878) !== 0;
        if ((e.subtreeFlags & 13878) !== 0 || n) {
            n = C.T, C.T = null;
            var l = H.p;
            H.p = 2;
            var u = Ct;
            Ct |= 4;
            try {
                Mm(e, t);
                var r = Lr, d = wh(t.containerInfo), g = r.focusedElem, T = r.selectionRange;
                if (d !== g && g && g.ownerDocument && Rh(g.ownerDocument.documentElement, g)) {
                    if (T !== null && ru(g)) {
                        var z = T.start, U = T.end;
                        if (U === void 0 && (U = z), "selectionStart" in g)
                            g.selectionStart = z, g.selectionEnd = Math.min(U, g.value.length);
                        else {
                            var q = g.ownerDocument || document, w = q && q.defaultView || window;
                            if (w.getSelection) {
                                var O = w.getSelection(), it = g.textContent.length, ct = Math.min(T.start, it), Ot = T.end === void 0 ? ct : Math.min(T.end, it);
                                !O.extend && ct > Ot && (d = Ot, Ot = ct, ct = d);
                                var M = zh(g, ct), E = zh(g, Ot);
                                if (M && E && (O.rangeCount !== 1 || O.anchorNode !== M.node || O.anchorOffset !== M.offset || O.focusNode !== E.node || O.focusOffset !== E.offset)) {
                                    var j = q.createRange();
                                    j.setStart(M.node, M.offset), O.removeAllRanges(), ct > Ot ? (O.addRange(j), O.extend(E.node, E.offset)) : (j.setEnd(E.node, E.offset), O.addRange(j));
                                }
                            }
                        }
                    }
                    for (q = [], O = g; O = O.parentNode;)
                        O.nodeType === 1 && q.push({ element: O, left: O.scrollLeft, top: O.scrollTop });
                    for (typeof g.focus == "function" && g.focus(), g = 0; g < q.length; g++) {
                        var L = q[g];
                        L.element.scrollLeft = L.left, L.element.scrollTop = L.top;
                    }
                }
                Ks = !!Ur, Lr = Ur = null;
            }
            finally {
                Ct = u, H.p = l, C.T = n;
            }
        }
        t.current = e, Pt = 2;
    } }
    function Qm() { if (Pt === 2) {
        Pt = 0;
        var t = Yn, e = li, n = (e.flags & 8772) !== 0;
        if ((e.subtreeFlags & 8772) !== 0 || n) {
            n = C.T, C.T = null;
            var l = H.p;
            H.p = 2;
            var u = Ct;
            Ct |= 4;
            try {
                bm(t, e.alternate, e);
            }
            finally {
                Ct = u, H.p = l, C.T = n;
            }
        }
        Pt = 3;
    } }
    function Km() { if (Pt === 4 || Pt === 3) {
        Pt = 0, S1();
        var t = Yn, e = li, n = Sn, l = Om;
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Pt = 5 : (Pt = 0, li = Yn = null, Jm(t, t.pendingLanes));
        var u = t.pendingLanes;
        if (u === 0 && (qn = null), ko(n), e = e.stateNode, Se && typeof Se.onCommitFiberRoot == "function")
            try {
                Se.onCommitFiberRoot(Ei, e, void 0, (e.current.flags & 128) === 128);
            }
            catch { }
        if (l !== null) {
            e = C.T, u = H.p, H.p = 2, C.T = null;
            try {
                for (var r = t.onRecoverableError, d = 0; d < l.length; d++) {
                    var g = l[d];
                    r(g.value, { componentStack: g.stack });
                }
            }
            finally {
                C.T = e, H.p = u;
            }
        }
        (Sn & 3) !== 0 && _s(), tn(t), u = t.pendingLanes, (n & 261930) !== 0 && (u & 42) !== 0 ? t === Er ? ll++ : (ll = 0, Er = t) : ll = 0, sl(0);
    } }
    function Jm(t, e) { (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, qi(e))); }
    function _s() { return Zm(), Qm(), Km(), Fm(); }
    function Fm() { if (Pt !== 5)
        return !1; var t = Yn, e = Tr; Tr = 0; var n = ko(Sn), l = C.T, u = H.p; try {
        H.p = 32 > n ? 32 : n, C.T = null, n = Ar, Ar = null;
        var r = Yn, d = Sn;
        if (Pt = 0, li = Yn = null, Sn = 0, (Ct & 6) !== 0)
            throw Error(o(331));
        var g = Ct;
        if (Ct |= 4, Rm(r.current), Cm(r, r.current, d, n), Ct = g, sl(0, !1), Se && typeof Se.onPostCommitFiberRoot == "function")
            try {
                Se.onPostCommitFiberRoot(Ei, r);
            }
            catch { }
        return !0;
    }
    finally {
        H.p = u, C.T = l, Jm(t, e);
    } }
    function Pm(t, e, n) { e = _e(n, e), e = nr(t.stateNode, e, 2), t = Vn(t, e, 2), t !== null && (Di(t, 2), tn(t)); }
    function zt(t, e, n) { if (t.tag === 3)
        Pm(t, t, n);
    else
        for (; e !== null;) {
            if (e.tag === 3) {
                Pm(e, t, n);
                break;
            }
            else if (e.tag === 1) {
                var l = e.stateNode;
                if (typeof e.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (qn === null || !qn.has(l))) {
                    t = _e(n, t), n = Wd(2), l = Vn(e, n, 2), l !== null && ($d(n, l, e, t), Di(l, 2), tn(l));
                    break;
                }
            }
            e = e.return;
        } }
    function Cr(t, e, n) { var l = t.pingCache; if (l === null) {
        l = t.pingCache = new Kv;
        var u = new Set;
        l.set(e, u);
    }
    else
        u = l.get(e), u === void 0 && (u = new Set, l.set(e, u)); u.has(n) || (xr = !0, u.add(n), t = $v.bind(null, t, e, n), e.then(t, t)); }
    function $v(t, e, n) { var l = t.pingCache; l !== null && l.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, _t === t && (Tt & n) === n && (Yt === 4 || Yt === 3 && (Tt & 62914560) === Tt && 300 > be() - zs ? (Ct & 2) === 0 && si(t, 0) : br |= n, ii === Tt && (ii = 0)), tn(t); }
    function Wm(t, e) { e === 0 && (e = Zf()), t = ua(t, e), t !== null && (Di(t, e), tn(t)); }
    function Iv(t) { var e = t.memoizedState, n = 0; e !== null && (n = e.retryLane), Wm(t, n); }
    function tx(t, e) { var n = 0; switch (t.tag) {
        case 31:
        case 13:
            var l = t.stateNode, u = t.memoizedState;
            u !== null && (n = u.retryLane);
            break;
        case 19:
            l = t.stateNode;
            break;
        case 22:
            l = t.stateNode._retryCache;
            break;
        default: throw Error(o(314));
    } l !== null && l.delete(e), Wm(t, n); }
    function ex(t, e) { return qo(t, e); }
    var Bs = null, ui = null, jr = !1, Us = !1, zr = !1, Xn = 0;
    function tn(t) { t !== ui && t.next === null && (ui === null ? Bs = ui = t : ui = ui.next = t), Us = !0, jr || (jr = !0, ax()); }
    function sl(t, e) { if (!zr && Us) {
        zr = !0;
        do
            for (var n = !1, l = Bs; l !== null;) {
                if (t !== 0) {
                    var u = l.pendingLanes;
                    if (u === 0)
                        var r = 0;
                    else {
                        var d = l.suspendedLanes, g = l.pingedLanes;
                        r = (1 << 31 - Te(42 | t) + 1) - 1, r &= u & ~(d & ~g), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
                    }
                    r !== 0 && (n = !0, ep(l, r));
                }
                else
                    r = Tt, r = Yl(l, l === _t ? r : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), (r & 3) === 0 || Mi(l, r) || (n = !0, ep(l, r));
                l = l.next;
            }
        while (n);
        zr = !1;
    } }
    function nx() { $m(); }
    function $m() { Us = jr = !1; var t = 0; Xn !== 0 && dx() && (t = Xn); for (var e = be(), n = null, l = Bs; l !== null;) {
        var u = l.next, r = Im(l, e);
        r === 0 ? (l.next = null, n === null ? Bs = u : n.next = u, u === null && (ui = n)) : (n = l, (t !== 0 || (r & 3) !== 0) && (Us = !0)), l = u;
    } Pt !== 0 && Pt !== 5 || sl(t), Xn !== 0 && (Xn = 0); }
    function Im(t, e) { for (var n = t.suspendedLanes, l = t.pingedLanes, u = t.expirationTimes, r = t.pendingLanes & -62914561; 0 < r;) {
        var d = 31 - Te(r), g = 1 << d, T = u[d];
        T === -1 ? ((g & n) === 0 || (g & l) !== 0) && (u[d] = z1(g, e)) : T <= e && (t.expiredLanes |= g), r &= ~g;
    } if (e = _t, n = Tt, n = Yl(t, t === e ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), l = t.callbackNode, n === 0 || t === e && (jt === 2 || jt === 9) || t.cancelPendingCommit !== null)
        return l !== null && l !== null && Yo(l), t.callbackNode = null, t.callbackPriority = 0; if ((n & 3) === 0 || Mi(t, n)) {
        if (e = n & -n, e === t.callbackPriority)
            return e;
        switch (l !== null && Yo(l), ko(n)) {
            case 2:
            case 8:
                n = Xf;
                break;
            case 32:
                n = Ul;
                break;
            case 268435456:
                n = kf;
                break;
            default: n = Ul;
        }
        return l = tp.bind(null, t), n = qo(n, l), t.callbackPriority = e, t.callbackNode = n, e;
    } return l !== null && l !== null && Yo(l), t.callbackPriority = 2, t.callbackNode = null, 2; }
    function tp(t, e) { if (Pt !== 0 && Pt !== 5)
        return t.callbackNode = null, t.callbackPriority = 0, null; var n = t.callbackNode; if (_s() && t.callbackNode !== n)
        return null; var l = Tt; return l = Yl(t, t === _t ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), l === 0 ? null : (_m(t, l, e), Im(t, be()), t.callbackNode != null && t.callbackNode === n ? tp.bind(null, t) : null); }
    function ep(t, e) { if (_s())
        return null; _m(t, e, !0); }
    function ax() { px(function () { (Ct & 6) !== 0 ? qo(Gf, nx) : $m(); }); }
    function Rr() { if (Xn === 0) {
        var t = Ka;
        t === 0 && (t = Ll, Ll <<= 1, (Ll & 261888) === 0 && (Ll = 256)), Xn = t;
    } return Xn; }
    function np(t) { return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Zl("" + t); }
    function ap(t, e) { var n = e.ownerDocument.createElement("input"); return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t; }
    function ix(t, e, n, l, u) { if (e === "submit" && n && n.stateNode === u) {
        var r = np((u[de] || null).action), d = l.submitter;
        d && (e = (e = d[de] || null) ? np(e.formAction) : d.getAttribute("formAction"), e !== null && (r = e, d = null));
        var g = new Fl("action", "action", null, l, u);
        t.push({ event: g, listeners: [{ instance: null, listener: function () { if (l.defaultPrevented) {
                        if (Xn !== 0) {
                            var T = d ? ap(u, d) : new FormData(u);
                            Pu(n, { pending: !0, data: T, method: u.method, action: r }, null, T);
                        }
                    }
                    else
                        typeof r == "function" && (g.preventDefault(), T = d ? ap(u, d) : new FormData(u), Pu(n, { pending: !0, data: T, method: u.method, action: r }, r, T)); }, currentTarget: u }] });
    } }
    for (var wr = 0; wr < du.length; wr++) {
        var Nr = du[wr], lx = Nr.toLowerCase(), sx = Nr[0].toUpperCase() + Nr.slice(1);
        Xe(lx, "on" + sx);
    }
    Xe(Vh, "onAnimationEnd"), Xe(_h, "onAnimationIteration"), Xe(Bh, "onAnimationStart"), Xe("dblclick", "onDoubleClick"), Xe("focusin", "onFocus"), Xe("focusout", "onBlur"), Xe(Tv, "onTransitionRun"), Xe(Av, "onTransitionStart"), Xe(Ev, "onTransitionCancel"), Xe(Uh, "onTransitionEnd"), Oa("onMouseEnter", ["mouseout", "mouseover"]), Oa("onMouseLeave", ["mouseout", "mouseover"]), Oa("onPointerEnter", ["pointerout", "pointerover"]), Oa("onPointerLeave", ["pointerout", "pointerover"]), ia("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ia("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ia("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ia("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ia("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ia("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var ol = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ox = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ol));
    function ip(t, e) { e = (e & 4) !== 0; for (var n = 0; n < t.length; n++) {
        var l = t[n], u = l.event;
        l = l.listeners;
        t: {
            var r = void 0;
            if (e)
                for (var d = l.length - 1; 0 <= d; d--) {
                    var g = l[d], T = g.instance, z = g.currentTarget;
                    if (g = g.listener, T !== r && u.isPropagationStopped())
                        break t;
                    r = g, u.currentTarget = z;
                    try {
                        r(u);
                    }
                    catch (U) {
                        $l(U);
                    }
                    u.currentTarget = null, r = T;
                }
            else
                for (d = 0; d < l.length; d++) {
                    if (g = l[d], T = g.instance, z = g.currentTarget, g = g.listener, T !== r && u.isPropagationStopped())
                        break t;
                    r = g, u.currentTarget = z;
                    try {
                        r(u);
                    }
                    catch (U) {
                        $l(U);
                    }
                    u.currentTarget = null, r = T;
                }
        }
    } }
    function St(t, e) { var n = e[Zo]; n === void 0 && (n = e[Zo] = new Set); var l = t + "__bubble"; n.has(l) || (lp(e, t, 2, !1), n.add(l)); }
    function Or(t, e, n) { var l = 0; e && (l |= 4), lp(n, t, l, e); }
    var Ls = "_reactListening" + Math.random().toString(36).slice(2);
    function Vr(t) { if (!t[Ls]) {
        t[Ls] = !0, $f.forEach(function (n) { n !== "selectionchange" && (ox.has(n) || Or(n, !1, t), Or(n, !0, t)); });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[Ls] || (e[Ls] = !0, Or("selectionchange", !1, e));
    } }
    function lp(t, e, n, l) { switch (Vp(e)) {
        case 2:
            var u = _x;
            break;
        case 8:
            u = Bx;
            break;
        default: u = Fr;
    } n = u.bind(null, e, n, t), u = void 0, !tu || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (u = !0), l ? u !== void 0 ? t.addEventListener(e, n, { capture: !0, passive: u }) : t.addEventListener(e, n, !0) : u !== void 0 ? t.addEventListener(e, n, { passive: u }) : t.addEventListener(e, n, !1); }
    function _r(t, e, n, l, u) { var r = l; if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
        t: for (;;) {
            if (l === null)
                return;
            var d = l.tag;
            if (d === 3 || d === 4) {
                var g = l.stateNode.containerInfo;
                if (g === u)
                    break;
                if (d === 4)
                    for (d = l.return; d !== null;) {
                        var T = d.tag;
                        if ((T === 3 || T === 4) && d.stateNode.containerInfo === u)
                            return;
                        d = d.return;
                    }
                for (; g !== null;) {
                    if (d = Ra(g), d === null)
                        return;
                    if (T = d.tag, T === 5 || T === 6 || T === 26 || T === 27) {
                        l = r = d;
                        continue t;
                    }
                    g = g.parentNode;
                }
            }
            l = l.return;
        } ch(function () { var z = r, U = $o(n), q = []; t: {
        var w = Lh.get(t);
        if (w !== void 0) {
            var O = Fl, it = t;
            switch (t) {
                case "keypress": if (Kl(n) === 0)
                    break t;
                case "keydown":
                case "keyup":
                    O = tv;
                    break;
                case "focusin":
                    it = "focus", O = iu;
                    break;
                case "focusout":
                    it = "blur", O = iu;
                    break;
                case "beforeblur":
                case "afterblur":
                    O = iu;
                    break;
                case "click": if (n.button === 2)
                    break t;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    O = dh;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    O = G1;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    O = av;
                    break;
                case Vh:
                case _h:
                case Bh:
                    O = Z1;
                    break;
                case Uh:
                    O = lv;
                    break;
                case "scroll":
                case "scrollend":
                    O = q1;
                    break;
                case "wheel":
                    O = ov;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    O = K1;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    O = ph;
                    break;
                case "toggle":
                case "beforetoggle": O = rv;
            }
            var ct = (e & 4) !== 0, Ot = !ct && (t === "scroll" || t === "scrollend"), M = ct ? w !== null ? w + "Capture" : null : w;
            ct = [];
            for (var E = z, j; E !== null;) {
                var L = E;
                if (j = L.stateNode, L = L.tag, L !== 5 && L !== 26 && L !== 27 || j === null || M === null || (L = zi(E, M), L != null && ct.push(ul(E, L, j))), Ot)
                    break;
                E = E.return;
            }
            0 < ct.length && (w = new O(w, it, null, n, U), q.push({ event: w, listeners: ct }));
        }
    } if ((e & 7) === 0) {
        t: {
            if (w = t === "mouseover" || t === "pointerover", O = t === "mouseout" || t === "pointerout", w && n !== Wo && (it = n.relatedTarget || n.fromElement) && (Ra(it) || it[za]))
                break t;
            if ((O || w) && (w = U.window === U ? U : (w = U.ownerDocument) ? w.defaultView || w.parentWindow : window, O ? (it = n.relatedTarget || n.toElement, O = z, it = it ? Ra(it) : null, it !== null && (Ot = f(it), ct = it.tag, it !== Ot || ct !== 5 && ct !== 27 && ct !== 6) && (it = null)) : (O = null, it = z), O !== it)) {
                if (ct = dh, L = "onMouseLeave", M = "onMouseEnter", E = "mouse", (t === "pointerout" || t === "pointerover") && (ct = ph, L = "onPointerLeave", M = "onPointerEnter", E = "pointer"), Ot = O == null ? w : ji(O), j = it == null ? w : ji(it), w = new ct(L, E + "leave", O, n, U), w.target = Ot, w.relatedTarget = j, L = null, Ra(U) === z && (ct = new ct(M, E + "enter", it, n, U), ct.target = j, ct.relatedTarget = Ot, L = ct), Ot = L, O && it)
                    e: {
                        for (ct = ux, M = O, E = it, j = 0, L = M; L; L = ct(L))
                            j++;
                        L = 0;
                        for (var ut = E; ut; ut = ct(ut))
                            L++;
                        for (; 0 < j - L;)
                            M = ct(M), j--;
                        for (; 0 < L - j;)
                            E = ct(E), L--;
                        for (; j--;) {
                            if (M === E || E !== null && M === E.alternate) {
                                ct = M;
                                break e;
                            }
                            M = ct(M), E = ct(E);
                        }
                        ct = null;
                    }
                else
                    ct = null;
                O !== null && sp(q, w, O, ct, !1), it !== null && Ot !== null && sp(q, Ot, it, ct, !0);
            }
        }
        t: {
            if (w = z ? ji(z) : window, O = w.nodeName && w.nodeName.toLowerCase(), O === "select" || O === "input" && w.type === "file")
                var Mt = Ah;
            else if (Sh(w))
                if (Eh)
                    Mt = xv;
                else {
                    Mt = gv;
                    var st = yv;
                }
            else
                O = w.nodeName, !O || O.toLowerCase() !== "input" || w.type !== "checkbox" && w.type !== "radio" ? z && Po(z.elementType) && (Mt = Ah) : Mt = vv;
            if (Mt && (Mt = Mt(t, z))) {
                Th(q, Mt, n, U);
                break t;
            }
            st && st(t, w, z), t === "focusout" && z && w.type === "number" && z.memoizedProps.value != null && Fo(w, "number", w.value);
        }
        switch (st = z ? ji(z) : window, t) {
            case "focusin":
                (Sh(st) || st.contentEditable === "true") && (Ha = st, cu = z, Ui = null);
                break;
            case "focusout":
                Ui = cu = Ha = null;
                break;
            case "mousedown":
                fu = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                fu = !1, Nh(q, n, U);
                break;
            case "selectionchange": if (Sv)
                break;
            case "keydown":
            case "keyup": Nh(q, n, U);
        }
        var xt;
        if (su)
            t: {
                switch (t) {
                    case "compositionstart":
                        var At = "onCompositionStart";
                        break t;
                    case "compositionend":
                        At = "onCompositionEnd";
                        break t;
                    case "compositionupdate":
                        At = "onCompositionUpdate";
                        break t;
                }
                At = void 0;
            }
        else
            La ? xh(t, n) && (At = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (At = "onCompositionStart");
        At && (yh && n.locale !== "ko" && (La || At !== "onCompositionStart" ? At === "onCompositionEnd" && La && (xt = fh()) : (Cn = U, eu = "value" in Cn ? Cn.value : Cn.textContent, La = !0)), st = Hs(z, At), 0 < st.length && (At = new mh(At, t, null, n, U), q.push({ event: At, listeners: st }), xt ? At.data = xt : (xt = bh(n), xt !== null && (At.data = xt)))), (xt = fv ? hv(t, n) : dv(t, n)) && (At = Hs(z, "onBeforeInput"), 0 < At.length && (st = new mh("onBeforeInput", "beforeinput", null, n, U), q.push({ event: st, listeners: At }), st.data = xt)), ix(q, t, z, n, U);
    } ip(q, e); }); }
    function ul(t, e, n) { return { instance: t, listener: e, currentTarget: n }; }
    function Hs(t, e) { for (var n = e + "Capture", l = []; t !== null;) {
        var u = t, r = u.stateNode;
        if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || r === null || (u = zi(t, n), u != null && l.unshift(ul(t, u, r)), u = zi(t, e), u != null && l.push(ul(t, u, r))), t.tag === 3)
            return l;
        t = t.return;
    } return []; }
    function ux(t) { if (t === null)
        return null; do
        t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27); return t || null; }
    function sp(t, e, n, l, u) { for (var r = e._reactName, d = []; n !== null && n !== l;) {
        var g = n, T = g.alternate, z = g.stateNode;
        if (g = g.tag, T !== null && T === l)
            break;
        g !== 5 && g !== 26 && g !== 27 || z === null || (T = z, u ? (z = zi(n, r), z != null && d.unshift(ul(n, z, T))) : u || (z = zi(n, r), z != null && d.push(ul(n, z, T)))), n = n.return;
    } d.length !== 0 && t.push({ event: e, listeners: d }); }
    var rx = /\r\n?/g, cx = /\u0000|\uFFFD/g;
    function op(t) {
        return (typeof t == "string" ? t : "" + t).replace(rx, `
`).replace(cx, "");
    }
    function up(t, e) { return e = op(e), op(t) === e; }
    function Nt(t, e, n, l, u, r) { switch (n) {
        case "children":
            typeof l == "string" ? e === "body" || e === "textarea" && l === "" || _a(t, l) : (typeof l == "number" || typeof l == "bigint") && e !== "body" && _a(t, "" + l);
            break;
        case "className":
            Xl(t, "class", l);
            break;
        case "tabIndex":
            Xl(t, "tabindex", l);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            Xl(t, n, l);
            break;
        case "style":
            uh(t, l, r);
            break;
        case "data": if (e !== "object") {
            Xl(t, "data", l);
            break;
        }
        case "src":
        case "href":
            if (l === "" && (e !== "a" || n !== "href")) {
                t.removeAttribute(n);
                break;
            }
            if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
                t.removeAttribute(n);
                break;
            }
            l = Zl("" + l), t.setAttribute(n, l);
            break;
        case "action":
        case "formAction":
            if (typeof l == "function") {
                t.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break;
            }
            else
                typeof r == "function" && (n === "formAction" ? (e !== "input" && Nt(t, e, "name", u.name, u, null), Nt(t, e, "formEncType", u.formEncType, u, null), Nt(t, e, "formMethod", u.formMethod, u, null), Nt(t, e, "formTarget", u.formTarget, u, null)) : (Nt(t, e, "encType", u.encType, u, null), Nt(t, e, "method", u.method, u, null), Nt(t, e, "target", u.target, u, null)));
            if (l == null || typeof l == "symbol" || typeof l == "boolean") {
                t.removeAttribute(n);
                break;
            }
            l = Zl("" + l), t.setAttribute(n, l);
            break;
        case "onClick":
            l != null && (t.onclick = sn);
            break;
        case "onScroll":
            l != null && St("scroll", t);
            break;
        case "onScrollEnd":
            l != null && St("scrollend", t);
            break;
        case "dangerouslySetInnerHTML":
            if (l != null) {
                if (typeof l != "object" || !("__html" in l))
                    throw Error(o(61));
                if (n = l.__html, n != null) {
                    if (u.children != null)
                        throw Error(o(60));
                    t.innerHTML = n;
                }
            }
            break;
        case "multiple":
            t.multiple = l && typeof l != "function" && typeof l != "symbol";
            break;
        case "muted":
            t.muted = l && typeof l != "function" && typeof l != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref": break;
        case "autoFocus": break;
        case "xlinkHref":
            if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
                t.removeAttribute("xlink:href");
                break;
            }
            n = Zl("" + l), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, "" + l) : t.removeAttribute(n);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            l && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
            break;
        case "capture":
        case "download":
            l === !0 ? t.setAttribute(n, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, l) : t.removeAttribute(n);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? t.setAttribute(n, l) : t.removeAttribute(n);
            break;
        case "rowSpan":
        case "start":
            l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? t.removeAttribute(n) : t.setAttribute(n, l);
            break;
        case "popover":
            St("beforetoggle", t), St("toggle", t), Gl(t, "popover", l);
            break;
        case "xlinkActuate":
            ln(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
            break;
        case "xlinkArcrole":
            ln(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
            break;
        case "xlinkRole":
            ln(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
            break;
        case "xlinkShow":
            ln(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
            break;
        case "xlinkTitle":
            ln(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
            break;
        case "xlinkType":
            ln(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
            break;
        case "xmlBase":
            ln(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
            break;
        case "xmlLang":
            ln(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
            break;
        case "xmlSpace":
            ln(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
            break;
        case "is":
            Gl(t, "is", l);
            break;
        case "innerText":
        case "textContent": break;
        default: (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = L1.get(n) || n, Gl(t, n, l));
    } }
    function Br(t, e, n, l, u, r) { switch (n) {
        case "style":
            uh(t, l, r);
            break;
        case "dangerouslySetInnerHTML":
            if (l != null) {
                if (typeof l != "object" || !("__html" in l))
                    throw Error(o(61));
                if (n = l.__html, n != null) {
                    if (u.children != null)
                        throw Error(o(60));
                    t.innerHTML = n;
                }
            }
            break;
        case "children":
            typeof l == "string" ? _a(t, l) : (typeof l == "number" || typeof l == "bigint") && _a(t, "" + l);
            break;
        case "onScroll":
            l != null && St("scroll", t);
            break;
        case "onScrollEnd":
            l != null && St("scrollend", t);
            break;
        case "onClick":
            l != null && (t.onclick = sn);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref": break;
        case "innerText":
        case "textContent": break;
        default: if (!If.hasOwnProperty(n))
            t: {
                if (n[0] === "o" && n[1] === "n" && (u = n.endsWith("Capture"), e = n.slice(2, u ? n.length - 7 : void 0), r = t[de] || null, r = r != null ? r[n] : null, typeof r == "function" && t.removeEventListener(e, r, u), typeof l == "function")) {
                    typeof r != "function" && r !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(e, l, u);
                    break t;
                }
                n in t ? t[n] = l : l === !0 ? t.setAttribute(n, "") : Gl(t, n, l);
            }
    } }
    function se(t, e, n) { switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li": break;
        case "img":
            St("error", t), St("load", t);
            var l = !1, u = !1, r;
            for (r in n)
                if (n.hasOwnProperty(r)) {
                    var d = n[r];
                    if (d != null)
                        switch (r) {
                            case "src":
                                l = !0;
                                break;
                            case "srcSet":
                                u = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML": throw Error(o(137, e));
                            default: Nt(t, e, r, d, n, null);
                        }
                }
            u && Nt(t, e, "srcSet", n.srcSet, n, null), l && Nt(t, e, "src", n.src, n, null);
            return;
        case "input":
            St("invalid", t);
            var g = r = d = u = null, T = null, z = null;
            for (l in n)
                if (n.hasOwnProperty(l)) {
                    var U = n[l];
                    if (U != null)
                        switch (l) {
                            case "name":
                                u = U;
                                break;
                            case "type":
                                d = U;
                                break;
                            case "checked":
                                T = U;
                                break;
                            case "defaultChecked":
                                z = U;
                                break;
                            case "value":
                                r = U;
                                break;
                            case "defaultValue":
                                g = U;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (U != null)
                                    throw Error(o(137, e));
                                break;
                            default: Nt(t, e, l, U, n, null);
                        }
                }
            ih(t, r, g, T, z, d, u, !1);
            return;
        case "select":
            St("invalid", t), l = d = r = null;
            for (u in n)
                if (n.hasOwnProperty(u) && (g = n[u], g != null))
                    switch (u) {
                        case "value":
                            r = g;
                            break;
                        case "defaultValue":
                            d = g;
                            break;
                        case "multiple": l = g;
                        default: Nt(t, e, u, g, n, null);
                    }
            e = r, n = d, t.multiple = !!l, e != null ? Va(t, !!l, e, !1) : n != null && Va(t, !!l, n, !0);
            return;
        case "textarea":
            St("invalid", t), r = u = l = null;
            for (d in n)
                if (n.hasOwnProperty(d) && (g = n[d], g != null))
                    switch (d) {
                        case "value":
                            l = g;
                            break;
                        case "defaultValue":
                            u = g;
                            break;
                        case "children":
                            r = g;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (g != null)
                                throw Error(o(91));
                            break;
                        default: Nt(t, e, d, g, n, null);
                    }
            sh(t, l, u, r);
            return;
        case "option":
            for (T in n)
                n.hasOwnProperty(T) && (l = n[T], l != null) && (T === "selected" ? t.selected = l && typeof l != "function" && typeof l != "symbol" : Nt(t, e, T, l, n, null));
            return;
        case "dialog":
            St("beforetoggle", t), St("toggle", t), St("cancel", t), St("close", t);
            break;
        case "iframe":
        case "object":
            St("load", t);
            break;
        case "video":
        case "audio":
            for (l = 0; l < ol.length; l++)
                St(ol[l], t);
            break;
        case "image":
            St("error", t), St("load", t);
            break;
        case "details":
            St("toggle", t);
            break;
        case "embed":
        case "source":
        case "link": St("error", t), St("load", t);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (z in n)
                if (n.hasOwnProperty(z) && (l = n[z], l != null))
                    switch (z) {
                        case "children":
                        case "dangerouslySetInnerHTML": throw Error(o(137, e));
                        default: Nt(t, e, z, l, n, null);
                    }
            return;
        default: if (Po(e)) {
            for (U in n)
                n.hasOwnProperty(U) && (l = n[U], l !== void 0 && Br(t, e, U, l, n, void 0));
            return;
        }
    } for (g in n)
        n.hasOwnProperty(g) && (l = n[g], l != null && Nt(t, e, g, l, n, null)); }
    function fx(t, e, n, l) { switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li": break;
        case "input":
            var u = null, r = null, d = null, g = null, T = null, z = null, U = null;
            for (O in n) {
                var q = n[O];
                if (n.hasOwnProperty(O) && q != null)
                    switch (O) {
                        case "checked": break;
                        case "value": break;
                        case "defaultValue": T = q;
                        default: l.hasOwnProperty(O) || Nt(t, e, O, null, l, q);
                    }
            }
            for (var w in l) {
                var O = l[w];
                if (q = n[w], l.hasOwnProperty(w) && (O != null || q != null))
                    switch (w) {
                        case "type":
                            r = O;
                            break;
                        case "name":
                            u = O;
                            break;
                        case "checked":
                            z = O;
                            break;
                        case "defaultChecked":
                            U = O;
                            break;
                        case "value":
                            d = O;
                            break;
                        case "defaultValue":
                            g = O;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (O != null)
                                throw Error(o(137, e));
                            break;
                        default: O !== q && Nt(t, e, w, O, l, q);
                    }
            }
            Jo(t, d, g, T, z, U, r, u);
            return;
        case "select":
            O = d = g = w = null;
            for (r in n)
                if (T = n[r], n.hasOwnProperty(r) && T != null)
                    switch (r) {
                        case "value": break;
                        case "multiple": O = T;
                        default: l.hasOwnProperty(r) || Nt(t, e, r, null, l, T);
                    }
            for (u in l)
                if (r = l[u], T = n[u], l.hasOwnProperty(u) && (r != null || T != null))
                    switch (u) {
                        case "value":
                            w = r;
                            break;
                        case "defaultValue":
                            g = r;
                            break;
                        case "multiple": d = r;
                        default: r !== T && Nt(t, e, u, r, l, T);
                    }
            e = g, n = d, l = O, w != null ? Va(t, !!n, w, !1) : !!l != !!n && (e != null ? Va(t, !!n, e, !0) : Va(t, !!n, n ? [] : "", !1));
            return;
        case "textarea":
            O = w = null;
            for (g in n)
                if (u = n[g], n.hasOwnProperty(g) && u != null && !l.hasOwnProperty(g))
                    switch (g) {
                        case "value": break;
                        case "children": break;
                        default: Nt(t, e, g, null, l, u);
                    }
            for (d in l)
                if (u = l[d], r = n[d], l.hasOwnProperty(d) && (u != null || r != null))
                    switch (d) {
                        case "value":
                            w = u;
                            break;
                        case "defaultValue":
                            O = u;
                            break;
                        case "children": break;
                        case "dangerouslySetInnerHTML":
                            if (u != null)
                                throw Error(o(91));
                            break;
                        default: u !== r && Nt(t, e, d, u, l, r);
                    }
            lh(t, w, O);
            return;
        case "option":
            for (var it in n)
                w = n[it], n.hasOwnProperty(it) && w != null && !l.hasOwnProperty(it) && (it === "selected" ? t.selected = !1 : Nt(t, e, it, null, l, w));
            for (T in l)
                w = l[T], O = n[T], l.hasOwnProperty(T) && w !== O && (w != null || O != null) && (T === "selected" ? t.selected = w && typeof w != "function" && typeof w != "symbol" : Nt(t, e, T, w, l, O));
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var ct in n)
                w = n[ct], n.hasOwnProperty(ct) && w != null && !l.hasOwnProperty(ct) && Nt(t, e, ct, null, l, w);
            for (z in l)
                if (w = l[z], O = n[z], l.hasOwnProperty(z) && w !== O && (w != null || O != null))
                    switch (z) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (w != null)
                                throw Error(o(137, e));
                            break;
                        default: Nt(t, e, z, w, l, O);
                    }
            return;
        default: if (Po(e)) {
            for (var Ot in n)
                w = n[Ot], n.hasOwnProperty(Ot) && w !== void 0 && !l.hasOwnProperty(Ot) && Br(t, e, Ot, void 0, l, w);
            for (U in l)
                w = l[U], O = n[U], !l.hasOwnProperty(U) || w === O || w === void 0 && O === void 0 || Br(t, e, U, w, l, O);
            return;
        }
    } for (var M in n)
        w = n[M], n.hasOwnProperty(M) && w != null && !l.hasOwnProperty(M) && Nt(t, e, M, null, l, w); for (q in l)
        w = l[q], O = n[q], !l.hasOwnProperty(q) || w === O || w == null && O == null || Nt(t, e, q, w, l, O); }
    function rp(t) { switch (t) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link": return !0;
        default: return !1;
    } }
    function hx() { if (typeof performance.getEntriesByType == "function") {
        for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), l = 0; l < n.length; l++) {
            var u = n[l], r = u.transferSize, d = u.initiatorType, g = u.duration;
            if (r && g && rp(d)) {
                for (d = 0, g = u.responseEnd, l += 1; l < n.length; l++) {
                    var T = n[l], z = T.startTime;
                    if (z > g)
                        break;
                    var U = T.transferSize, q = T.initiatorType;
                    U && rp(q) && (T = T.responseEnd, d += U * (T < g ? 1 : (g - z) / (T - z)));
                }
                if (--l, e += 8 * (r + d) / (u.duration / 1e3), t++, 10 < t)
                    break;
            }
        }
        if (0 < t)
            return e / t / 1e6;
    } return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5; }
    var Ur = null, Lr = null;
    function qs(t) { return t.nodeType === 9 ? t : t.ownerDocument; }
    function cp(t) { switch (t) {
        case "http://www.w3.org/2000/svg": return 1;
        case "http://www.w3.org/1998/Math/MathML": return 2;
        default: return 0;
    } }
    function fp(t, e) { if (t === 0)
        switch (e) {
            case "svg": return 1;
            case "math": return 2;
            default: return 0;
        } return t === 1 && e === "foreignObject" ? 0 : t; }
    function Hr(t, e) { return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null; }
    var qr = null;
    function dx() { var t = window.event; return t && t.type === "popstate" ? t === qr ? !1 : (qr = t, !0) : (qr = null, !1); }
    var hp = typeof setTimeout == "function" ? setTimeout : void 0, mx = typeof clearTimeout == "function" ? clearTimeout : void 0, dp = typeof Promise == "function" ? Promise : void 0, px = typeof queueMicrotask == "function" ? queueMicrotask : typeof dp < "u" ? function (t) { return dp.resolve(null).then(t).catch(yx); } : hp;
    function yx(t) { setTimeout(function () { throw t; }); }
    function kn(t) { return t === "head"; }
    function mp(t, e) { var n = e, l = 0; do {
        var u = n.nextSibling;
        if (t.removeChild(n), u && u.nodeType === 8)
            if (n = u.data, n === "/$" || n === "/&") {
                if (l === 0) {
                    t.removeChild(u), hi(e);
                    return;
                }
                l--;
            }
            else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
                l++;
            else if (n === "html")
                rl(t.ownerDocument.documentElement);
            else if (n === "head") {
                n = t.ownerDocument.head, rl(n);
                for (var r = n.firstChild; r;) {
                    var d = r.nextSibling, g = r.nodeName;
                    r[Ci] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && r.rel.toLowerCase() === "stylesheet" || n.removeChild(r), r = d;
                }
            }
            else
                n === "body" && rl(t.ownerDocument.body);
        n = u;
    } while (n); hi(e); }
    function pp(t, e) { var n = t; t = 0; do {
        var l = n.nextSibling;
        if (n.nodeType === 1 ? e ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (e ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), l && l.nodeType === 8)
            if (n = l.data, n === "/$") {
                if (t === 0)
                    break;
                t--;
            }
            else
                n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || t++;
        n = l;
    } while (n); }
    function Yr(t) { var e = t.firstChild; for (e && e.nodeType === 10 && (e = e.nextSibling); e;) {
        var n = e;
        switch (e = e.nextSibling, n.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                Yr(n), Qo(n);
                continue;
            case "SCRIPT":
            case "STYLE": continue;
            case "LINK": if (n.rel.toLowerCase() === "stylesheet")
                continue;
        }
        t.removeChild(n);
    } }
    function gx(t, e, n, l) { for (; t.nodeType === 1;) {
        var u = n;
        if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
            if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden"))
                break;
        }
        else if (l) {
            if (!t[Ci])
                switch (e) {
                    case "meta":
                        if (!t.hasAttribute("itemprop"))
                            break;
                        return t;
                    case "link":
                        if (r = t.getAttribute("rel"), r === "stylesheet" && t.hasAttribute("data-precedence"))
                            break;
                        if (r !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title))
                            break;
                        return t;
                    case "style":
                        if (t.hasAttribute("data-precedence"))
                            break;
                        return t;
                    case "script":
                        if (r = t.getAttribute("src"), (r !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && r && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                            break;
                        return t;
                    default: return t;
                }
        }
        else if (e === "input" && t.type === "hidden") {
            var r = u.name == null ? null : "" + u.name;
            if (u.type === "hidden" && t.getAttribute("name") === r)
                return t;
        }
        else
            return t;
        if (t = qe(t.nextSibling), t === null)
            break;
    } return null; }
    function vx(t, e, n) { if (e === "")
        return null; for (; t.nodeType !== 3;)
        if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = qe(t.nextSibling), t === null))
            return null; return t; }
    function yp(t, e) { for (; t.nodeType !== 8;)
        if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = qe(t.nextSibling), t === null))
            return null; return t; }
    function Gr(t) { return t.data === "$?" || t.data === "$~"; }
    function Xr(t) { return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading"; }
    function xx(t, e) { var n = t.ownerDocument; if (t.data === "$~")
        t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading")
        e();
    else {
        var l = function () { e(), n.removeEventListener("DOMContentLoaded", l); };
        n.addEventListener("DOMContentLoaded", l), t._reactRetry = l;
    } }
    function qe(t) { for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3)
            break;
        if (e === 8) {
            if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
                break;
            if (e === "/$" || e === "/&")
                return null;
        }
    } return t; }
    var kr = null;
    function gp(t) { t = t.nextSibling; for (var e = 0; t;) {
        if (t.nodeType === 8) {
            var n = t.data;
            if (n === "/$" || n === "/&") {
                if (e === 0)
                    return qe(t.nextSibling);
                e--;
            }
            else
                n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++;
        }
        t = t.nextSibling;
    } return null; }
    function vp(t) { t = t.previousSibling; for (var e = 0; t;) {
        if (t.nodeType === 8) {
            var n = t.data;
            if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
                if (e === 0)
                    return t;
                e--;
            }
            else
                n !== "/$" && n !== "/&" || e++;
        }
        t = t.previousSibling;
    } return null; }
    function xp(t, e, n) { switch (e = qs(n), t) {
        case "html":
            if (t = e.documentElement, !t)
                throw Error(o(452));
            return t;
        case "head":
            if (t = e.head, !t)
                throw Error(o(453));
            return t;
        case "body":
            if (t = e.body, !t)
                throw Error(o(454));
            return t;
        default: throw Error(o(451));
    } }
    function rl(t) { for (var e = t.attributes; e.length;)
        t.removeAttributeNode(e[0]); Qo(t); }
    var Ye = new Map, bp = new Set;
    function Ys(t) { return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument; }
    var Tn = H.d;
    H.d = { f: bx, r: Sx, D: Tx, C: Ax, L: Ex, m: Mx, X: Cx, S: Dx, M: jx };
    function bx() { var t = Tn.f(), e = Ns(); return t || e; }
    function Sx(t) { var e = wa(t); e !== null && e.tag === 5 && e.type === "form" ? Ud(e) : Tn.r(t); }
    var ri = typeof document > "u" ? null : document;
    function Sp(t, e, n) { var l = ri; if (l && typeof e == "string" && e) {
        var u = Oe(e);
        u = 'link[rel="' + t + '"][href="' + u + '"]', typeof n == "string" && (u += '[crossorigin="' + n + '"]'), bp.has(u) || (bp.add(u), t = { rel: t, crossOrigin: n, href: e }, l.querySelector(u) === null && (e = l.createElement("link"), se(e, "link", t), It(e), l.head.appendChild(e)));
    } }
    function Tx(t) { Tn.D(t), Sp("dns-prefetch", t, null); }
    function Ax(t, e) { Tn.C(t, e), Sp("preconnect", t, e); }
    function Ex(t, e, n) { Tn.L(t, e, n); var l = ri; if (l && t && e) {
        var u = 'link[rel="preload"][as="' + Oe(e) + '"]';
        e === "image" && n && n.imageSrcSet ? (u += '[imagesrcset="' + Oe(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (u += '[imagesizes="' + Oe(n.imageSizes) + '"]')) : u += '[href="' + Oe(t) + '"]';
        var r = u;
        switch (e) {
            case "style":
                r = ci(t);
                break;
            case "script": r = fi(t);
        }
        Ye.has(r) || (t = x({ rel: "preload", href: e === "image" && n && n.imageSrcSet ? void 0 : t, as: e }, n), Ye.set(r, t), l.querySelector(u) !== null || e === "style" && l.querySelector(cl(r)) || e === "script" && l.querySelector(fl(r)) || (e = l.createElement("link"), se(e, "link", t), It(e), l.head.appendChild(e)));
    } }
    function Mx(t, e) { Tn.m(t, e); var n = ri; if (n && t) {
        var l = e && typeof e.as == "string" ? e.as : "script", u = 'link[rel="modulepreload"][as="' + Oe(l) + '"][href="' + Oe(t) + '"]', r = u;
        switch (l) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script": r = fi(t);
        }
        if (!Ye.has(r) && (t = x({ rel: "modulepreload", href: t }, e), Ye.set(r, t), n.querySelector(u) === null)) {
            switch (l) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script": if (n.querySelector(fl(r)))
                    return;
            }
            l = n.createElement("link"), se(l, "link", t), It(l), n.head.appendChild(l);
        }
    } }
    function Dx(t, e, n) { Tn.S(t, e, n); var l = ri; if (l && t) {
        var u = Na(l).hoistableStyles, r = ci(t);
        e = e || "default";
        var d = u.get(r);
        if (!d) {
            var g = { loading: 0, preload: null };
            if (d = l.querySelector(cl(r)))
                g.loading = 5;
            else {
                t = x({ rel: "stylesheet", href: t, "data-precedence": e }, n), (n = Ye.get(r)) && Zr(t, n);
                var T = d = l.createElement("link");
                It(T), se(T, "link", t), T._p = new Promise(function (z, U) { T.onload = z, T.onerror = U; }), T.addEventListener("load", function () { g.loading |= 1; }), T.addEventListener("error", function () { g.loading |= 2; }), g.loading |= 4, Gs(d, e, l);
            }
            d = { type: "stylesheet", instance: d, count: 1, state: g }, u.set(r, d);
        }
    } }
    function Cx(t, e) { Tn.X(t, e); var n = ri; if (n && t) {
        var l = Na(n).hoistableScripts, u = fi(t), r = l.get(u);
        r || (r = n.querySelector(fl(u)), r || (t = x({ src: t, async: !0 }, e), (e = Ye.get(u)) && Qr(t, e), r = n.createElement("script"), It(r), se(r, "link", t), n.head.appendChild(r)), r = { type: "script", instance: r, count: 1, state: null }, l.set(u, r));
    } }
    function jx(t, e) { Tn.M(t, e); var n = ri; if (n && t) {
        var l = Na(n).hoistableScripts, u = fi(t), r = l.get(u);
        r || (r = n.querySelector(fl(u)), r || (t = x({ src: t, async: !0, type: "module" }, e), (e = Ye.get(u)) && Qr(t, e), r = n.createElement("script"), It(r), se(r, "link", t), n.head.appendChild(r)), r = { type: "script", instance: r, count: 1, state: null }, l.set(u, r));
    } }
    function Tp(t, e, n, l) { var u = (u = gt.current) ? Ys(u) : null; if (!u)
        throw Error(o(446)); switch (t) {
        case "meta":
        case "title": return null;
        case "style": return typeof n.precedence == "string" && typeof n.href == "string" ? (e = ci(n.href), n = Na(u).hoistableStyles, l = n.get(e), l || (l = { type: "style", instance: null, count: 0, state: null }, n.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
        case "link":
            if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
                t = ci(n.href);
                var r = Na(u).hoistableStyles, d = r.get(t);
                if (d || (u = u.ownerDocument || u, d = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, r.set(t, d), (r = u.querySelector(cl(t))) && !r._p && (d.instance = r, d.state.loading = 5), Ye.has(t) || (n = { rel: "preload", as: "style", href: n.href, crossOrigin: n.crossOrigin, integrity: n.integrity, media: n.media, hrefLang: n.hrefLang, referrerPolicy: n.referrerPolicy }, Ye.set(t, n), r || zx(u, t, n, d.state))), e && l === null)
                    throw Error(o(528, ""));
                return d;
            }
            if (e && l !== null)
                throw Error(o(529, ""));
            return null;
        case "script": return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = fi(n), n = Na(u).hoistableScripts, l = n.get(e), l || (l = { type: "script", instance: null, count: 0, state: null }, n.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
        default: throw Error(o(444, t));
    } }
    function ci(t) { return 'href="' + Oe(t) + '"'; }
    function cl(t) { return 'link[rel="stylesheet"][' + t + "]"; }
    function Ap(t) { return x({}, t, { "data-precedence": t.precedence, precedence: null }); }
    function zx(t, e, n, l) { t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? l.loading = 1 : (e = t.createElement("link"), l.preload = e, e.addEventListener("load", function () { return l.loading |= 1; }), e.addEventListener("error", function () { return l.loading |= 2; }), se(e, "link", n), It(e), t.head.appendChild(e)); }
    function fi(t) { return '[src="' + Oe(t) + '"]'; }
    function fl(t) { return "script[async]" + t; }
    function Ep(t, e, n) { if (e.count++, e.instance === null)
        switch (e.type) {
            case "style":
                var l = t.querySelector('style[data-href~="' + Oe(n.href) + '"]');
                if (l)
                    return e.instance = l, It(l), l;
                var u = x({}, n, { "data-href": n.href, "data-precedence": n.precedence, href: null, precedence: null });
                return l = (t.ownerDocument || t).createElement("style"), It(l), se(l, "style", u), Gs(l, n.precedence, t), e.instance = l;
            case "stylesheet":
                u = ci(n.href);
                var r = t.querySelector(cl(u));
                if (r)
                    return e.state.loading |= 4, e.instance = r, It(r), r;
                l = Ap(n), (u = Ye.get(u)) && Zr(l, u), r = (t.ownerDocument || t).createElement("link"), It(r);
                var d = r;
                return d._p = new Promise(function (g, T) { d.onload = g, d.onerror = T; }), se(r, "link", l), e.state.loading |= 4, Gs(r, n.precedence, t), e.instance = r;
            case "script": return r = fi(n.src), (u = t.querySelector(fl(r))) ? (e.instance = u, It(u), u) : (l = n, (u = Ye.get(r)) && (l = x({}, n), Qr(l, u)), t = t.ownerDocument || t, u = t.createElement("script"), It(u), se(u, "link", l), t.head.appendChild(u), e.instance = u);
            case "void": return null;
            default: throw Error(o(443, e.type));
        }
    else
        e.type === "stylesheet" && (e.state.loading & 4) === 0 && (l = e.instance, e.state.loading |= 4, Gs(l, n.precedence, t)); return e.instance; }
    function Gs(t, e, n) { for (var l = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = l.length ? l[l.length - 1] : null, r = u, d = 0; d < l.length; d++) {
        var g = l[d];
        if (g.dataset.precedence === e)
            r = g;
        else if (r !== u)
            break;
    } r ? r.parentNode.insertBefore(t, r.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild)); }
    function Zr(t, e) { t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title); }
    function Qr(t, e) { t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity); }
    var Xs = null;
    function Mp(t, e, n) { if (Xs === null) {
        var l = new Map, u = Xs = new Map;
        u.set(n, l);
    }
    else
        u = Xs, l = u.get(n), l || (l = new Map, u.set(n, l)); if (l.has(t))
        return l; for (l.set(t, null), n = n.getElementsByTagName(t), u = 0; u < n.length; u++) {
        var r = n[u];
        if (!(r[Ci] || r[ne] || t === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
            var d = r.getAttribute(e) || "";
            d = t + d;
            var g = l.get(d);
            g ? g.push(r) : l.set(d, [r]);
        }
    } return l; }
    function Dp(t, e, n) { t = t.ownerDocument || t, t.head.insertBefore(n, e === "title" ? t.querySelector("head > title") : null); }
    function Rx(t, e, n) { if (n === 1 || e.itemProp != null)
        return !1; switch (t) {
        case "meta":
        case "title": return !0;
        case "style":
            if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
                break;
            return !0;
        case "link":
            if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
                break;
            return e.rel === "stylesheet" ? (t = e.disabled, typeof e.precedence == "string" && t == null) : !0;
        case "script": if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
            return !0;
    } return !1; }
    function Cp(t) { return !(t.type === "stylesheet" && (t.state.loading & 3) === 0); }
    function wx(t, e, n, l) { if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
        if (n.instance === null) {
            var u = ci(l.href), r = e.querySelector(cl(u));
            if (r) {
                e = r._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = ks.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = r, It(r);
                return;
            }
            r = e.ownerDocument || e, l = Ap(l), (u = Ye.get(u)) && Zr(l, u), r = r.createElement("link"), It(r);
            var d = r;
            d._p = new Promise(function (g, T) { d.onload = g, d.onerror = T; }), se(r, "link", l), n.instance = r;
        }
        t.stylesheets === null && (t.stylesheets = new Map), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = ks.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
    } }
    var Kr = 0;
    function Nx(t, e) { return t.stylesheets && t.count === 0 && Qs(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function (n) { var l = setTimeout(function () { if (t.stylesheets && Qs(t, t.stylesheets), t.unsuspend) {
        var r = t.unsuspend;
        t.unsuspend = null, r();
    } }, 6e4 + e); 0 < t.imgBytes && Kr === 0 && (Kr = 62500 * hx()); var u = setTimeout(function () { if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Qs(t, t.stylesheets), t.unsuspend)) {
        var r = t.unsuspend;
        t.unsuspend = null, r();
    } }, (t.imgBytes > Kr ? 50 : 800) + e); return t.unsuspend = n, function () { t.unsuspend = null, clearTimeout(l), clearTimeout(u); }; } : null; }
    function ks() { if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets)
            Qs(this, this.stylesheets);
        else if (this.unsuspend) {
            var t = this.unsuspend;
            this.unsuspend = null, t();
        }
    } }
    var Zs = null;
    function Qs(t, e) { t.stylesheets = null, t.unsuspend !== null && (t.count++, Zs = new Map, e.forEach(Ox, t), Zs = null, ks.call(t)); }
    function Ox(t, e) { if (!(e.state.loading & 4)) {
        var n = Zs.get(t);
        if (n)
            var l = n.get(null);
        else {
            n = new Map, Zs.set(t, n);
            for (var u = t.querySelectorAll("link[data-precedence],style[data-precedence]"), r = 0; r < u.length; r++) {
                var d = u[r];
                (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (n.set(d.dataset.precedence, d), l = d);
            }
            l && n.set(null, l);
        }
        u = e.instance, d = u.getAttribute("data-precedence"), r = n.get(d) || l, r === l && n.set(null, u), n.set(d, u), this.count++, l = ks.bind(this), u.addEventListener("load", l), u.addEventListener("error", l), r ? r.parentNode.insertBefore(u, r.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), e.state.loading |= 4;
    } }
    var hl = { $$typeof: G, Provider: null, Consumer: null, _currentValue: W, _currentValue2: W, _threadCount: 0 };
    function Vx(t, e, n, l, u, r, d, g, T) { this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Go(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Go(0), this.hiddenUpdates = Go(null), this.identifierPrefix = l, this.onUncaughtError = u, this.onCaughtError = r, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.incompleteTransitions = new Map; }
    function jp(t, e, n, l, u, r, d, g, T, z, U, q) { return t = new Vx(t, e, n, d, T, z, U, q, g), e = 1, r === !0 && (e |= 24), r = Ee(3, null, null, e), t.current = r, r.stateNode = t, e = Du(), e.refCount++, t.pooledCache = e, e.refCount++, r.memoizedState = { element: l, isDehydrated: n, cache: e }, Ru(r), t; }
    function zp(t) { return t ? (t = Ga, t) : Ga; }
    function Rp(t, e, n, l, u, r) { u = zp(u), l.context === null ? l.context = u : l.pendingContext = u, l = On(e), l.payload = { element: n }, r = r === void 0 ? null : r, r !== null && (l.callback = r), n = Vn(t, l, e), n !== null && (xe(n, t, e), ki(n, t, e)); }
    function wp(t, e) { if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
        var n = t.retryLane;
        t.retryLane = n !== 0 && n < e ? n : e;
    } }
    function Jr(t, e) { wp(t, e), (t = t.alternate) && wp(t, e); }
    function Np(t) { if (t.tag === 13 || t.tag === 31) {
        var e = ua(t, 67108864);
        e !== null && xe(e, t, 67108864), Jr(t, 67108864);
    } }
    function Op(t) { if (t.tag === 13 || t.tag === 31) {
        var e = ze();
        e = Xo(e);
        var n = ua(t, e);
        n !== null && xe(n, t, e), Jr(t, e);
    } }
    var Ks = !0;
    function _x(t, e, n, l) { var u = C.T; C.T = null; var r = H.p; try {
        H.p = 2, Fr(t, e, n, l);
    }
    finally {
        H.p = r, C.T = u;
    } }
    function Bx(t, e, n, l) { var u = C.T; C.T = null; var r = H.p; try {
        H.p = 8, Fr(t, e, n, l);
    }
    finally {
        H.p = r, C.T = u;
    } }
    function Fr(t, e, n, l) { if (Ks) {
        var u = Pr(l);
        if (u === null)
            _r(t, e, l, Js, n), _p(t, l);
        else if (Lx(u, t, e, n, l))
            l.stopPropagation();
        else if (_p(t, l), e & 4 && -1 < Ux.indexOf(t)) {
            for (; u !== null;) {
                var r = wa(u);
                if (r !== null)
                    switch (r.tag) {
                        case 3:
                            if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                                var d = aa(r.pendingLanes);
                                if (d !== 0) {
                                    var g = r;
                                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; d;) {
                                        var T = 1 << 31 - Te(d);
                                        g.entanglements[1] |= T, d &= ~T;
                                    }
                                    tn(r), (Ct & 6) === 0 && (Rs = be() + 500, sl(0));
                                }
                            }
                            break;
                        case 31:
                        case 13: g = ua(r, 2), g !== null && xe(g, r, 2), Ns(), Jr(r, 2);
                    }
                if (r = Pr(l), r === null && _r(t, e, l, Js, n), r === u)
                    break;
                u = r;
            }
            u !== null && l.stopPropagation();
        }
        else
            _r(t, e, l, null, n);
    } }
    function Pr(t) { return t = $o(t), Wr(t); }
    var Js = null;
    function Wr(t) { if (Js = null, t = Ra(t), t !== null) {
        var e = f(t);
        if (e === null)
            t = null;
        else {
            var n = e.tag;
            if (n === 13) {
                if (t = h(e), t !== null)
                    return t;
                t = null;
            }
            else if (n === 31) {
                if (t = m(e), t !== null)
                    return t;
                t = null;
            }
            else if (n === 3) {
                if (e.stateNode.current.memoizedState.isDehydrated)
                    return e.tag === 3 ? e.stateNode.containerInfo : null;
                t = null;
            }
            else
                e !== t && (t = null);
        }
    } return Js = t, null; }
    function Vp(t) { switch (t) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart": return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave": return 8;
        case "message": switch (T1()) {
            case Gf: return 2;
            case Xf: return 8;
            case Ul:
            case A1: return 32;
            case kf: return 268435456;
            default: return 32;
        }
        default: return 32;
    } }
    var $r = !1, Zn = null, Qn = null, Kn = null, dl = new Map, ml = new Map, Jn = [], Ux = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function _p(t, e) { switch (t) {
        case "focusin":
        case "focusout":
            Zn = null;
            break;
        case "dragenter":
        case "dragleave":
            Qn = null;
            break;
        case "mouseover":
        case "mouseout":
            Kn = null;
            break;
        case "pointerover":
        case "pointerout":
            dl.delete(e.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture": ml.delete(e.pointerId);
    } }
    function pl(t, e, n, l, u, r) { return t === null || t.nativeEvent !== r ? (t = { blockedOn: e, domEventName: n, eventSystemFlags: l, nativeEvent: r, targetContainers: [u] }, e !== null && (e = wa(e), e !== null && Np(e)), t) : (t.eventSystemFlags |= l, e = t.targetContainers, u !== null && e.indexOf(u) === -1 && e.push(u), t); }
    function Lx(t, e, n, l, u) { switch (e) {
        case "focusin": return Zn = pl(Zn, t, e, n, l, u), !0;
        case "dragenter": return Qn = pl(Qn, t, e, n, l, u), !0;
        case "mouseover": return Kn = pl(Kn, t, e, n, l, u), !0;
        case "pointerover":
            var r = u.pointerId;
            return dl.set(r, pl(dl.get(r) || null, t, e, n, l, u)), !0;
        case "gotpointercapture": return r = u.pointerId, ml.set(r, pl(ml.get(r) || null, t, e, n, l, u)), !0;
    } return !1; }
    function Bp(t) { var e = Ra(t.target); if (e !== null) {
        var n = f(e);
        if (n !== null) {
            if (e = n.tag, e === 13) {
                if (e = h(n), e !== null) {
                    t.blockedOn = e, Pf(t.priority, function () { Op(n); });
                    return;
                }
            }
            else if (e === 31) {
                if (e = m(n), e !== null) {
                    t.blockedOn = e, Pf(t.priority, function () { Op(n); });
                    return;
                }
            }
            else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    } t.blockedOn = null; }
    function Fs(t) { if (t.blockedOn !== null)
        return !1; for (var e = t.targetContainers; 0 < e.length;) {
        var n = Pr(t.nativeEvent);
        if (n === null) {
            n = t.nativeEvent;
            var l = new n.constructor(n.type, n);
            Wo = l, n.target.dispatchEvent(l), Wo = null;
        }
        else
            return e = wa(n), e !== null && Np(e), t.blockedOn = n, !1;
        e.shift();
    } return !0; }
    function Up(t, e, n) { Fs(t) && n.delete(e); }
    function Hx() { $r = !1, Zn !== null && Fs(Zn) && (Zn = null), Qn !== null && Fs(Qn) && (Qn = null), Kn !== null && Fs(Kn) && (Kn = null), dl.forEach(Up), ml.forEach(Up); }
    function Ps(t, e) { t.blockedOn === e && (t.blockedOn = null, $r || ($r = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Hx))); }
    var Ws = null;
    function Lp(t) { Ws !== t && (Ws = t, a.unstable_scheduleCallback(a.unstable_NormalPriority, function () { Ws === t && (Ws = null); for (var e = 0; e < t.length; e += 3) {
        var n = t[e], l = t[e + 1], u = t[e + 2];
        if (typeof l != "function") {
            if (Wr(l || n) === null)
                continue;
            break;
        }
        var r = wa(n);
        r !== null && (t.splice(e, 3), e -= 3, Pu(r, { pending: !0, data: u, method: n.method, action: l }, l, u));
    } })); }
    function hi(t) { function e(T) { return Ps(T, t); } Zn !== null && Ps(Zn, t), Qn !== null && Ps(Qn, t), Kn !== null && Ps(Kn, t), dl.forEach(e), ml.forEach(e); for (var n = 0; n < Jn.length; n++) {
        var l = Jn[n];
        l.blockedOn === t && (l.blockedOn = null);
    } for (; 0 < Jn.length && (n = Jn[0], n.blockedOn === null);)
        Bp(n), n.blockedOn === null && Jn.shift(); if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
        for (l = 0; l < n.length; l += 3) {
            var u = n[l], r = n[l + 1], d = u[de] || null;
            if (typeof r == "function")
                d || Lp(n);
            else if (d) {
                var g = null;
                if (r && r.hasAttribute("formAction")) {
                    if (u = r, d = r[de] || null)
                        g = d.formAction;
                    else if (Wr(u) !== null)
                        continue;
                }
                else
                    g = d.action;
                typeof g == "function" ? n[l + 1] = g : (n.splice(l, 3), l -= 3), Lp(n);
            }
        } }
    function Hp() { function t(r) { r.canIntercept && r.info === "react-transition" && r.intercept({ handler: function () { return new Promise(function (d) { return u = d; }); }, focusReset: "manual", scroll: "manual" }); } function e() { u !== null && (u(), u = null), l || setTimeout(n, 20); } function n() { if (!l && !navigation.transition) {
        var r = navigation.currentEntry;
        r && r.url != null && navigation.navigate(r.url, { state: r.getState(), info: "react-transition", history: "replace" });
    } } if (typeof navigation == "object") {
        var l = !1, u = null;
        return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(n, 100), function () { l = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), u !== null && (u(), u = null); };
    } }
    function Ir(t) { this._internalRoot = t; }
    $s.prototype.render = Ir.prototype.render = function (t) { var e = this._internalRoot; if (e === null)
        throw Error(o(409)); var n = e.current, l = ze(); Rp(n, l, t, e, null, null); }, $s.prototype.unmount = Ir.prototype.unmount = function () { var t = this._internalRoot; if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        Rp(t.current, 2, null, t, null, null), Ns(), e[za] = null;
    } };
    function $s(t) { this._internalRoot = t; }
    $s.prototype.unstable_scheduleHydration = function (t) { if (t) {
        var e = Ff();
        t = { blockedOn: null, target: t, priority: e };
        for (var n = 0; n < Jn.length && e !== 0 && e < Jn[n].priority; n++)
            ;
        Jn.splice(n, 0, t), n === 0 && Bp(t);
    } };
    var qp = i.version;
    if (qp !== "19.2.6")
        throw Error(o(527, qp, "19.2.6"));
    H.findDOMNode = function (t) { var e = t._reactInternals; if (e === void 0)
        throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","), Error(o(268, t))); return t = p(e), t = t !== null ? v(t) : null, t = t === null ? null : t.stateNode, t; };
    var qx = { bundleType: 0, version: "19.2.6", rendererPackageName: "react-dom", currentDispatcherRef: C, reconcilerVersion: "19.2.6" };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Is = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Is.isDisabled && Is.supportsFiber)
            try {
                Ei = Is.inject(qx), Se = Is;
            }
            catch { }
    }
    return gl.createRoot = function (t, e) { if (!c(t))
        throw Error(o(299)); var n = !1, l = "", u = Kd, r = Jd, d = Fd; return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (l = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (r = e.onCaughtError), e.onRecoverableError !== void 0 && (d = e.onRecoverableError)), e = jp(t, 1, !1, null, null, n, l, null, u, r, d, Hp), t[za] = e.current, Vr(t), new Ir(e); }, gl.hydrateRoot = function (t, e, n) { if (!c(t))
        throw Error(o(299)); var l = !1, u = "", r = Kd, d = Jd, g = Fd, T = null; return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onUncaughtError !== void 0 && (r = n.onUncaughtError), n.onCaughtError !== void 0 && (d = n.onCaughtError), n.onRecoverableError !== void 0 && (g = n.onRecoverableError), n.formState !== void 0 && (T = n.formState)), e = jp(t, 1, !0, e, n ?? null, l, u, T, r, d, g, Hp), e.context = zp(null), n = e.current, l = ze(), l = Xo(l), u = On(l), u.callback = null, Vn(n, u, l), n = l, e.current.lanes = n, Di(e, n), tn(e), t[za] = e.current, Vr(t), new $s(e); }, gl.version = "19.2.6", gl;
}
var Pp;
function Px() { if (Pp)
    return nc.exports; Pp = 1; function a() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
    }
    catch (i) {
        console.error(i);
    } } return a(), nc.exports = Fx(), nc.exports; }
var Wx = Px();
const sf = Q.createContext({});
function of(a) { const i = Q.useRef(null); return i.current === null && (i.current = a()), i.current; }
const $x = typeof window < "u", Tl = $x ? Q.useLayoutEffect : Q.useEffect, zo = Q.createContext(null);
function uf(a, i) { a.indexOf(i) === -1 && a.push(i); }
function yo(a, i) { const s = a.indexOf(i); s > -1 && a.splice(s, 1); }
const an = (a, i, s) => s > i ? i : s < a ? a : s;
let Ro = () => { };
const nn = {}, rf = a => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a), y0 = a => typeof a == "object" && a !== null, cf = a => /^0[^.\s]+$/u.test(a);
function g0(a) { let i; return () => (i === void 0 && (i = a()), i); }
const Pe = a => a, Nl = (...a) => a.reduce((i, s) => o => s(i(o))), ja = (a, i, s) => { const o = i - a; return o ? (s - a) / o : 1; };
class go {
    constructor() { this.subscriptions = []; }
    add(i) { return uf(this.subscriptions, i), () => this.remove(i); }
    remove(i) { yo(this.subscriptions, i); }
    notify(i, s, o) { const c = this.subscriptions.length; if (c)
        if (c === 1)
            this.subscriptions[0](i, s, o);
        else
            for (let f = 0; f < c; f++) {
                const h = this.subscriptions[f];
                h && h(i, s, o);
            } }
    getSize() { return this.subscriptions.length; }
    clear() { this.subscriptions.length = 0; }
}
const Ge = a => a * 1e3, Re = a => a / 1e3, v0 = (a, i) => i ? a * (1e3 / i) : 0, sc = (a, i, s) => a * (3 * (1 - a) * ((1 - a) * i + a * s) + a * a);
function Ol(a, i, s, o) { return a === i && s === o ? Pe : c => { let f = 0, h = 1, m = c; for (let y = 0;; y++) {
    m >= f && m <= h || (m = (f + h) / 2);
    const p = sc(m, a, s) - c;
    if (p * p < 1e-28 || y === 40)
        break;
    p > 0 ? h = m : f = m, m -= p * 1e-7 / (sc(m + 1e-7, a, s) - c - p);
} return sc(m, i, o); }; }
const x0 = a => i => i <= .5 ? a(2 * i) / 2 : (2 - a(2 * (1 - i))) / 2, b0 = a => i => 1 - a(1 - i), S0 = Ol(.33, 1.53, .69, .99), ff = b0(S0), T0 = x0(ff), A0 = a => a >= 1 ? 1 : (a *= 2) < 1 ? .5 * ff(a) : .5 * (2 - Math.pow(2, -10 * (a - 1))), hf = a => 1 - Math.sin(Math.acos(a)), E0 = b0(hf), M0 = x0(hf), Ix = Ol(.42, 0, 1, 1), t2 = Ol(0, 0, .58, 1), df = Ol(.42, 0, .58, 1), e2 = a => Array.isArray(a) && typeof a[0] != "number", mf = a => Array.isArray(a) && typeof a[0] == "number", n2 = { linear: Pe, easeIn: Ix, easeInOut: df, easeOut: t2, circIn: hf, circInOut: M0, circOut: E0, backIn: ff, backInOut: T0, backOut: S0, anticipate: A0 }, a2 = a => typeof a == "string", Wp = a => { if (mf(a)) {
    Ro(a.length === 4);
    const [i, s, o, c] = a;
    return Ol(i, s, o, c);
}
else if (a2(a))
    return n2[a]; return a; }, Ft = { delta: 0, timestamp: 0, isProcessing: !1 };
let lo;
function i2() { lo = void 0; }
const Ht = { now: () => (lo === void 0 && Ht.set(Ft.isProcessing || nn.useManualTiming ? Ft.timestamp : performance.now()), lo), set: a => { lo = a, queueMicrotask(i2); } }, xi = a => Math.round(a * 1e5) / 1e5, D0 = a => i => typeof i == "string" && i.startsWith(a), C0 = D0("--"), l2 = D0("var(--"), pf = a => l2(a) ? s2.test(a.split("/*")[0].trim()) : !1, s2 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function oc(a) { return typeof a != "string" ? !1 : a.split("/*")[0].includes("var(--"); }
const Ti = { test: a => typeof a == "number", parse: parseFloat, transform: a => a }, Al = { ...Ti, transform: a => an(0, 1, a) }, to = { ...Ti, default: 1 }, yf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function o2(a) { return a == null; }
const u2 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, gf = (a, i) => s => !!(typeof s == "string" && u2.test(s) && s.startsWith(a) || i && !o2(s) && Object.prototype.hasOwnProperty.call(s, i)), j0 = (a, i, s) => o => { if (typeof o != "string")
    return o; const [c, f, h, m] = o.match(yf); return { [a]: parseFloat(c), [i]: parseFloat(f), [s]: parseFloat(h), alpha: m !== void 0 ? parseFloat(m) : 1 }; }, r2 = a => an(0, 255, a), uc = { ...Ti, transform: a => Math.round(r2(a)) }, Aa = { test: gf("rgb", "red"), parse: j0("red", "green", "blue"), transform: ({ red: a, green: i, blue: s, alpha: o = 1 }) => "rgba(" + uc.transform(a) + ", " + uc.transform(i) + ", " + uc.transform(s) + ", " + xi(Al.transform(o)) + ")" };
function c2(a) { let i = "", s = "", o = "", c = ""; return a.length > 5 ? (i = a.substring(1, 3), s = a.substring(3, 5), o = a.substring(5, 7), c = a.substring(7, 9)) : (i = a.substring(1, 2), s = a.substring(2, 3), o = a.substring(3, 4), c = a.substring(4, 5), i += i, s += s, o += o, c += c), { red: parseInt(i, 16), green: parseInt(s, 16), blue: parseInt(o, 16), alpha: c ? parseInt(c, 16) / 255 : 1 }; }
const Nc = { test: gf("#"), parse: c2, transform: Aa.transform }, Vl = a => ({ test: i => typeof i == "string" && i.endsWith(a) && i.split(" ").length === 1, parse: parseFloat, transform: i => `${i}${a}` }), An = Vl("deg"), en = Vl("%"), lt = Vl("px"), f2 = Vl("vh"), h2 = Vl("vw"), $p = { ...en, parse: a => en.parse(a) / 100, transform: a => en.transform(a * 100) }, mi = { test: gf("hsl", "hue"), parse: j0("hue", "saturation", "lightness"), transform: ({ hue: a, saturation: i, lightness: s, alpha: o = 1 }) => "hsla(" + Math.round(a) + ", " + en.transform(xi(i)) + ", " + en.transform(xi(s)) + ", " + xi(Al.transform(o)) + ")" }, $t = { test: a => Aa.test(a) || Nc.test(a) || mi.test(a), parse: a => Aa.test(a) ? Aa.parse(a) : mi.test(a) ? mi.parse(a) : Nc.parse(a), transform: a => typeof a == "string" ? a : a.hasOwnProperty("red") ? Aa.transform(a) : mi.transform(a), getAnimatableNone: a => { const i = $t.parse(a); return i.alpha = 0, $t.transform(i); } }, d2 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu, z0 = new RegExp(yf.source), R0 = new RegExp(d2.source, "i");
function m2(a) { return isNaN(a) && typeof a == "string" && (z0.test(a) || R0.test(a)); }
const w0 = "number", N0 = "color", p2 = "var", y2 = "var(", Ip = "${}", g2 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)(?![a-z]*\()/giu;
function v2(a) { const i = a.toString(); return z0.test(i) || R0.test(i); }
function El(a) { const i = a.toString(), s = [], o = { color: [], number: [], var: [] }, c = []; let f = 0; const m = i.replace(g2, y => ($t.test(y) ? (o.color.push(f), c.push(N0), s.push($t.parse(y))) : y.startsWith(y2) ? (o.var.push(f), c.push(p2), s.push(y)) : (o.number.push(f), c.push(w0), s.push(parseFloat(y))), ++f, Ip)).split(Ip); return { values: s, split: m, indexes: o, types: c }; }
function x2(a) { return El(a).values; }
function O0({ split: a, types: i }) { const s = a.length; return o => { let c = ""; for (let f = 0; f < s; f++)
    if (c += a[f], o[f] !== void 0) {
        const h = i[f];
        h === w0 ? c += xi(o[f]) : h === N0 ? c += $t.transform(o[f]) : c += o[f];
    } return c; }; }
function b2(a) { return O0(El(a)); }
const S2 = a => typeof a == "number" ? 0 : $t.test(a) ? $t.getAnimatableNone(a) : a, T2 = (a, i) => typeof a == "number" ? i?.trim().endsWith("/") ? a : 0 : S2(a);
function A2(a) { const i = El(a); return O0(i)(i.values.map((o, c) => T2(o, i.split[c]))); }
const we = { test: m2, parse: x2, createTransformer: b2, getAnimatableNone: A2 };
function rc(a, i, s) { return s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? a + (i - a) * 6 * s : s < 1 / 2 ? i : s < 2 / 3 ? a + (i - a) * (2 / 3 - s) * 6 : a; }
function E2({ hue: a, saturation: i, lightness: s, alpha: o }) { a /= 360, i /= 100, s /= 100; let c = 0, f = 0, h = 0; if (!i)
    c = f = h = s;
else {
    const m = s < .5 ? s * (1 + i) : s + i - s * i, y = 2 * s - m;
    c = rc(y, m, a + 1 / 3), f = rc(y, m, a), h = rc(y, m, a - 1 / 3);
} return { red: Math.round(c * 255), green: Math.round(f * 255), blue: Math.round(h * 255), alpha: o }; }
function vo(a, i) { return s => s > 0 ? i : a; }
const Rt = (a, i, s) => a + (i - a) * s, cc = (a, i, s) => { const o = a * a, c = s * (i * i - o) + o; return c < 0 ? 0 : Math.sqrt(c); }, M2 = [Nc, Aa, mi], D2 = a => M2.find(i => i.test(a));
function ty(a) { const i = D2(a); if (!i)
    return !1; let s = i.parse(a); return i === mi && (s = E2(s)), s; }
const ey = (a, i) => { const s = ty(a), o = ty(i); if (!s || !o)
    return vo(a, i); const c = { ...s }; return f => (c.red = cc(s.red, o.red, f), c.green = cc(s.green, o.green, f), c.blue = cc(s.blue, o.blue, f), c.alpha = Rt(s.alpha, o.alpha, f), Aa.transform(c)); }, Oc = new Set(["none", "hidden"]);
function C2(a, i) { return Oc.has(a) ? s => s <= 0 ? a : i : s => s >= 1 ? i : a; }
function j2(a, i) { return s => Rt(a, i, s); }
function vf(a) { return typeof a == "number" ? j2 : typeof a == "string" ? pf(a) ? vo : $t.test(a) ? ey : w2 : Array.isArray(a) ? V0 : typeof a == "object" ? $t.test(a) ? ey : z2 : vo; }
function V0(a, i) { const s = [...a], o = s.length, c = a.map((f, h) => vf(f)(f, i[h])); return f => { for (let h = 0; h < o; h++)
    s[h] = c[h](f); return s; }; }
function z2(a, i) { const s = { ...a, ...i }, o = {}; for (const c in s)
    a[c] !== void 0 && i[c] !== void 0 && (o[c] = vf(a[c])(a[c], i[c])); return c => { for (const f in o)
    s[f] = o[f](c); return s; }; }
function R2(a, i) { const s = [], o = { color: 0, var: 0, number: 0 }; for (let c = 0; c < i.values.length; c++) {
    const f = i.types[c], h = a.indexes[f][o[f]], m = a.values[h] ?? 0;
    s[c] = m, o[f]++;
} return s; }
const w2 = (a, i) => { const s = we.createTransformer(i), o = El(a), c = El(i); return o.indexes.var.length === c.indexes.var.length && o.indexes.color.length === c.indexes.color.length && o.indexes.number.length >= c.indexes.number.length ? Oc.has(a) && !c.values.length || Oc.has(i) && !o.values.length ? C2(a, i) : Nl(V0(R2(o, c), c.values), s) : vo(a, i); }, ny = /^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;
function N2(a, i) { const s = ny.exec(a); if (!s)
    return; const o = ny.exec(i); if (!o || s[2] !== o[2])
    return; const c = s[2], f = parseFloat(s[1]), h = parseFloat(o[1]); return m => xi(Rt(f, h, m)) + c; }
function xf(a, i, s) { if (typeof a == "number" && typeof i == "number" && typeof s == "number")
    return Rt(a, i, s); if (typeof a == "string" && typeof i == "string") {
    const c = N2(a, i);
    if (c)
        return c;
} return vf(a)(a, i); }
const eo = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
function O2(a) { let i = new Set, s = new Set, o = !1, c = !1; const f = new Set; let h = { delta: 0, timestamp: 0, isProcessing: !1 }; function m(p) { f.has(p) && (s.add(p), a()), p(h); } const y = { schedule: (p, v = !1, x = !1) => { const R = x && o ? i : s; return v && f.add(p), R.add(p), p; }, cancel: p => { s.delete(p), f.delete(p); }, process: p => { if (h = p, o) {
        c = !0;
        return;
    } o = !0; const v = i; i = s, s = v, i.forEach(m), i.clear(), o = !1, c && (c = !1, y.process(p)); } }; return y; }
const V2 = 40;
function _0(a, i, s = { delta: 0, timestamp: 0, isProcessing: !1 }) { let o = !1, c = !0; const f = () => o = !0, h = eo.reduce((G, J) => (G[J] = O2(f), G), {}), { setup: m, read: y, resolveKeyframes: p, preUpdate: v, update: x, preRender: S, render: R, postRender: D } = h, B = () => { const G = nn.useManualTiming, J = G ? s.timestamp : performance.now(); o = !1, G || (s.delta = c ? 1e3 / 60 : Math.max(Math.min(J - s.timestamp, V2), 1)), s.timestamp = J, s.isProcessing = !0, m.process(s), y.process(s), p.process(s), v.process(s), x.process(s), S.process(s), R.process(s), D.process(s), s.isProcessing = !1, o && i && (c = !1, a(B)); }, _ = () => { o = !0, c = !0, s.isProcessing || a(B); }; return { schedule: eo.reduce((G, J) => { const rt = h[J]; return G[J] = (ft, V = !1, X = !1) => (o || _(), rt.schedule(ft, V, X)), G; }, {}), cancel: G => { for (let J = 0; J < eo.length; J++)
        h[eo[J]].cancel(G); }, state: s, steps: h }; }
const { schedule: Vt, cancel: ta, steps: fc } = _0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Pe, !0, Ft), B0 = a => { const i = ({ timestamp: s }) => a(s); return { start: (s = !0) => Vt.update(i, s), stop: () => ta(i), now: () => Ft.isProcessing ? Ft.timestamp : Ht.now() }; }, U0 = (a, i, s = 10) => { let o = ""; const c = Math.max(Math.round(i / s), 2); for (let f = 0; f < c; f++)
    o += Math.round(a(f / (c - 1)) * 1e4) / 1e4 + ", "; return `linear(${o.substring(0, o.length - 2)})`; }, bf = 2e4;
function Sf(a, i = 50, s = bf, o) { let c = 0, f = a.next(c); for (; !f.done && c < s;)
    c += i, f = a.next(c); return c >= s ? 1 / 0 : c; }
function _2(a, i = 100, s) { const { keyframes: o, velocity: c } = a, f = o && o[o.length - 1] - o[0], h = s({ ...a, velocity: c && f ? c * i / f : c, keyframes: [0, i] }), m = Math.min(Sf(h), bf); return { type: "keyframes", ease: y => h.next(m * y).value / i, duration: Re(m) }; }
const oe = { stiffness: 100, damping: 10, mass: 1, duration: 800, bounce: .3, visualDuration: .3, restSpeed: { granular: .01, default: 2 }, restDelta: { granular: .005, default: .5 }, minDuration: .01, maxDuration: 10, minDamping: .05 }, L0 = a => a < 0 ? 1 / Math.max(1 + a, oe.minDamping) : Math.max(1 - a, oe.minDamping);
function H0(a, i) { if (!(a > 1))
    return 1; const s = Math.sqrt(a * a - 1), o = a - s, c = a + s, f = 2 * s * Math.exp(-i) * (1 + i); return q0(h => c * Math.exp(-o * h) - o * Math.exp(-c * h) - f, h => Math.exp(-c * h) - Math.exp(-o * h), i) / i; }
function Vc(a, i) { return a * Math.sqrt(1 - i * i); }
const B2 = 12;
function q0(a, i, s) { let o = s; for (let c = 1; c < B2; c++)
    o = o - a(o) / i(o); return o; }
const hc = .001;
function U2({ duration: a = oe.duration, bounce: i = oe.bounce }) { let s, o; const c = L0(i); a = an(oe.minDuration, oe.maxDuration, Re(a)), c < 1 ? (s = p => { const v = p * c, x = v * a, S = Vc(p, c), R = Math.exp(-x); return hc - v / S * R; }, o = p => { const x = p * c * a, S = c * c * p * p * a, R = Math.exp(-x), D = Vc(p * p, c); return (-s(p) + hc > 0 ? -1 : 1) * -S * R / D; }) : (s = p => { const v = Math.exp(-p * a), x = p * a + 1; return -hc + v * x; }, o = p => { const v = Math.exp(-p * a), x = -p * (a * a); return v * x; }); const f = 5 / a, h = q0(s, o, f), m = h * H0(c, h * a), y = m * m; return { stiffness: y, damping: c * 2 * Math.sqrt(y), duration: Ge(a) }; }
const _c = (a, i) => (i ? a >= 0 : a > 0) && a < 1 / 0;
function dc(a, i) { if (_c(a, i))
    return a; }
function L2(a) { const i = dc(a.stiffness), s = dc(a.damping, !0), o = dc(a.mass), c = { ...a, stiffness: i ?? oe.stiffness, damping: s ?? oe.damping, mass: o ?? oe.mass, isResolvedFromDuration: !1, isTimeDefined: (i ?? s ?? o) === void 0 && (a.duration !== void 0 || a.bounce !== void 0) }; if (c.isTimeDefined) {
    if (a.visualDuration) {
        const f = L0(a.bounce || 0), h = 2 * Math.PI / (a.visualDuration * 1.2) * H0(f, 2 * Math.PI / 1.2);
        c.stiffness = h * h, c.damping = 2 * f * Math.sqrt(c.stiffness);
    }
    else
        Object.assign(c, U2(c)), c.isResolvedFromDuration = !0;
    (!_c(c.stiffness) || !_c(c.damping, !0)) && (c.stiffness = oe.stiffness, c.damping = oe.damping);
} return c; }
function xo(a = oe.visualDuration, i = oe.bounce) { const s = typeof a != "object" ? { visualDuration: a, keyframes: [0, 1], bounce: i } : a, o = s.keyframes[0], c = s.keyframes[s.keyframes.length - 1], f = { done: !1, value: o }, { stiffness: h, damping: m, mass: y, duration: p, isResolvedFromDuration: v, isTimeDefined: x } = L2({ ...s }), S = V => x ? 0 : -Re(V), R = m / (2 * Math.sqrt(h * y)), D = Re(Math.sqrt(h / y)), B = R * D, _ = { target: c, delta: c - o, velocity: S(s.velocity || 0) || 0, restSpeed: 0, restDelta: 0 }, K = () => { const V = Math.abs(_.delta) < 5; _.restSpeed = s.restSpeed || (V ? oe.restSpeed.granular : oe.restSpeed.default), _.restDelta = s.restDelta || (V ? oe.restDelta.granular : oe.restDelta.default); }; K(); let k, G, J; if (R < 1) {
    const V = Vc(D, R), X = { A: 0, sinC: 0, cosC: 0, t: -1, env: 0, sin: 0, cos: 0 };
    J = () => { X.A = (_.velocity + B * _.delta) / V, X.sinC = B * X.A + _.delta * V, X.cosC = B * _.delta - X.A * V; };
    const pt = dt => { dt !== X.t && (X.t = dt, X.env = Math.exp(-B * dt), X.sin = Math.sin(V * dt), X.cos = Math.cos(V * dt)); };
    k = dt => (pt(dt), _.target - X.env * (X.A * X.sin + _.delta * X.cos)), G = dt => (pt(dt), X.env * (X.sinC * X.sin + X.cosC * X.cos));
}
else if (R === 1) {
    k = X => _.target - Math.exp(-D * X) * (_.delta + (_.velocity + D * _.delta) * X);
    const V = { C: 0 };
    J = () => { V.C = _.velocity + D * _.delta; }, G = X => Math.exp(-D * X) * (D * V.C * X - _.velocity);
}
else {
    const V = D * Math.sqrt(R * R - 1), X = B - V, pt = B + V, dt = x ? 1 / 0 : 300 / V, P = (tt, $) => Math.exp($ > dt ? -tt * dt - B * ($ - dt) : -tt * $), Z = { S: 0, F: 0 };
    J = () => { const tt = (_.velocity + B * _.delta) / V; Z.S = (_.delta + tt) / 2, Z.F = (_.delta - tt) / 2; }, k = tt => _.target - Z.S * P(X, tt) - Z.F * P(pt, tt), G = tt => X * Z.S * P(X, tt) + pt * Z.F * P(pt, tt);
} J(); const rt = v && p || null, ft = { calculatedDuration: rt, retarget: (V, X) => { _.target = V[V.length - 1], _.delta = _.target - V[0], _.velocity = S(X), s.restSpeed && s.restDelta || K(), ft.calculatedDuration = rt, f.done = !1, J(); }, velocity: V => Ge(G(V)), next: V => { const X = k(V); if (v)
        f.done = V >= p;
    else {
        const pt = Ge(G(V));
        f.done = Math.abs(pt) <= _.restSpeed && Math.abs(_.target - X) <= _.restDelta;
    } return f.value = f.done ? _.target : X, f; }, toString: () => { const V = Math.min(Sf(ft), bf), X = U0(pt => ft.next(V * pt).value, V, 30); return V + "ms " + X; }, toTransition: () => { } }; return ft; }
xo.applyToOptions = a => { const i = _2(a, 100, xo); return a.ease = i.ease, a.duration = Ge(i.duration), a.type = "keyframes", a; };
function bo({ keyframes: a, velocity: i = 0, power: s = .8, timeConstant: o = 325, bounceDamping: c = 10, bounceStiffness: f = 500, modifyTarget: h, min: m, max: y, restDelta: p = .5, restSpeed: v }) { const x = a[0], S = { done: !1, value: x }, R = V => V < m || V > y, D = V => m === void 0 ? y : y === void 0 || Math.abs(m - V) < Math.abs(y - V) ? m : y; let B = s * i; const _ = x + B, K = h === void 0 ? _ : h(_); K !== _ && (B = K - x); const k = V => -B * Math.exp(-V / o), G = V => { const X = k(V); S.done = Math.abs(X) <= p, S.value = S.done ? K : K + X; }; let J, rt; const ft = V => { R(S.value) && (J = V, rt = xo({ keyframes: [S.value, D(S.value)], velocity: -k(V) / o * 1e3, damping: c, stiffness: f, restDelta: p, restSpeed: v })); }; return ft(0), { calculatedDuration: null, next: V => { let X = !1; return !rt && J === void 0 && (X = !0, G(V), ft(V)), J !== void 0 && V >= J ? rt.next(V - J) : (!X && G(V), S); } }; }
function H2(a, i, s) { const o = [], c = s || nn.mix || xf, f = a.length - 1; for (let h = 0; h < f; h++) {
    let m = c(a[h], a[h + 1]);
    if (i) {
        const y = Array.isArray(i) ? i[h] || Pe : i;
        m = Nl(y, m);
    }
    o.push(m);
} return o; }
function q2(a, i, { clamp: s = !0, ease: o, mixer: c } = {}) { const f = a.length; if (Ro(f === i.length), f === 1)
    return () => i[0]; if (f === 2 && i[0] === i[1])
    return () => i[1]; const h = a[0] === a[1]; a[0] > a[f - 1] && (a = [...a].reverse(), i = [...i].reverse()); const m = H2(i, o, c), y = m.length, p = v => { if (h && v < a[0])
    return i[0]; let x = 0; if (y > 1)
    for (; x < a.length - 2 && !(v < a[x + 1]); x++)
        ; const S = ja(a[x], a[x + 1], v); return m[x](S); }; return s ? v => p(an(a[0], a[f - 1], v)) : p; }
function Y2(a, i) { const s = a[a.length - 1]; for (let o = 1; o <= i; o++) {
    const c = ja(0, i, o);
    a.push(Rt(s, 1, c));
} }
function Y0(a) { const i = [0]; return Y2(i, a.length - 1), i; }
function G2(a, i) { return a.map(s => s * i); }
function X2(a, i) { return a.map(() => i || df).splice(0, a.length - 1); }
function Wn({ duration: a = 300, keyframes: i, times: s, ease: o = "easeInOut" }) { const c = e2(o) ? o.map(Wp) : Wp(o) || df, f = { done: !1, value: i[0] }; if (i.length === 2 && !Array.isArray(c) && (!s || s.length !== 2 || s[0] === 0 && s[1] === 1)) {
    const [y, p] = i, v = y === p ? void 0 : (nn.mix || xf)(y, p);
    return { calculatedDuration: a, next: x => (f.value = v ? v(c(a > 0 ? an(0, 1, x / a) : 1)) : p, f.done = x >= a, f) };
} const h = G2(s && s.length === i.length ? s : Y0(i), a), m = q2(h, i, { ease: Array.isArray(c) ? c : X2(i, c) }); return { calculatedDuration: a, next: y => (f.value = m(y), f.done = y >= a, f) }; }
const k2 = 5;
function Z2(a, i, s) { const o = Math.max(i - k2, 0); return v0(s - a(o), i - o); }
function Q2(a, i, s = 0) { return i <= 0 ? s : a.velocity ? a.velocity(i) : Z2(o => a.next(o).value, i, a.next(i).value); }
const K2 = a => a !== null;
function Ml(a, { repeat: i, repeatType: s = "loop" }, o, c = 1) { const f = a.filter(K2), m = c < 0 || i && s !== "loop" && i % 2 === 1 ? 0 : f.length - 1; return !m || o === void 0 ? f[m] : o; }
const J2 = { decay: bo, inertia: bo, tween: Wn, keyframes: Wn, spring: xo };
function G0(a) { typeof a.type == "string" && (a.type = J2[a.type]); }
const F2 = 40, X0 = (a, i) => i - a > F2 && !nn.useManualTiming ? i : a;
function k0(a, i) { return { kind: a, animation: i, timestamp: Ht.now(), frameTimestamp: Ft.timestamp, frameIsProcessing: Ft.isProcessing }; }
function Z0(a, i, s) { const o = globalThis.__MOTION_INSPECT__; if (o)
    try {
        o({ ...k0("animation-start", a), options: s ? { ...i, ...s } : i });
    }
    catch { } }
function P2(a, i) { const s = globalThis.__MOTION_INSPECT__; if (s)
    try {
        s({ ...k0("layout-animation-start", a), node: i });
    }
    catch { } }
class Tf {
    constructor() { this.isResolved = !1; }
    get finished() { return this._finished || (this._finished = this.isResolved ? Promise.resolve() : new Promise(i => { this._resolve = i; })), this._finished; }
    updateFinished() { this._finished = this._resolve = void 0, this.isResolved = !1; }
    notifyFinished() { this.isResolved = !0, this._resolve?.(); }
    then(i, s) { return this.finished.then(i, s); }
}
const W2 = a => a / 100, Bc = a => Math.round(a * 1e4) / 1e4;
class Dl extends Tf {
    constructor(i) { super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = { done: !1, value: void 0 }, this.stop = () => { const { motionValue: s } = this.options; s && s.updatedAt !== Ht.now() && this.tick(Ht.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.()); }, this.options = i, this.initAnimation(), this.play(), i.autoplay === !1 && this.pause(), Z0(this, this.options); }
    initAnimation() { const { options: i } = this; G0(i); const { type: s = Wn, repeat: o = 0, repeatDelay: c = 0, repeatType: f, velocity: h = 0 } = i; let { keyframes: m } = i; const y = s || Wn; y !== Wn && typeof m[0] != "number" && (this.mixKeyframes = Nl(W2, xf(m[0], m[1])), m = [0, 100]); const p = y(m === i.keyframes ? i : { ...i, keyframes: m }); f === "mirror" && (this.mirroredGenerator = y({ ...i, keyframes: [...m].reverse(), velocity: -h })), p.calculatedDuration === null && (p.calculatedDuration = Sf(p)); const { calculatedDuration: v } = p; this.calculatedDuration = v, this.resolvedDuration = v + c, this.totalDuration = this.resolvedDuration * (o + 1) - c, this.generator = p; }
    updateTime(i) { const s = Math.round(i - this.startTime) * this.playbackSpeed; this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = s; }
    tick(i, s = !1) { const { generator: o, totalDuration: c, calculatedDuration: f } = this; if (this.startTime === null)
        return o.next(0); const { delay: h = 0, keyframes: m, type: y, onUpdate: p, finalKeyframe: v } = this.options; this.startTime === this.pendingStartTime && (this.startTime = X0(this.startTime, i)), this.pendingStartTime = void 0, this.speed > 0 ? this.startTime = Math.min(this.startTime, i) : this.speed < 0 && (this.startTime = Math.min(i - c / this.speed, this.startTime)), s ? this.currentTime = i : this.updateTime(i); const x = this.currentTime - h * (this.playbackSpeed >= 0 ? 1 : -1), S = this.playbackSpeed >= 0 ? x < 0 : x > c; this.currentTime = Math.max(x, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c); const R = this.generate(this.currentTime, S); let { done: D } = R; !S && f !== null && (D = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0); const B = this.holdTime === null && (this.state === "finished" || this.state === "running" && D); return B && y !== bo && (R.value = Ml(m, this.options, v, this.speed)), p && p(R.value), B && this.finish(), R; }
    at(i) { return this.holdTime ?? Bc((i - this.startTime) * this.playbackSpeed); }
    sampleAt(i, s) { const { options: o, totalDuration: c } = this, f = this.at(i) - (o.delay || 0); return f >= c && o.type !== bo ? Ml(o.keyframes, o, s ? void 0 : o.finalKeyframe) : this.generate(Math.max(f, 0), f < 0).value; }
    generate(i, s) { const { generator: o, totalDuration: c, mixKeyframes: f, mirroredGenerator: h, resolvedDuration: m } = this, { keyframes: y, repeat: p, repeatType: v, repeatDelay: x } = this.options; let S = i, R = o; if (p) {
        const B = Math.min(i, c) / m;
        let _ = Math.floor(B), K = B % 1;
        !K && B >= 1 && (K = 1), K === 1 && _--, _ = Math.min(_, p + 1), _ % 2 && (v === "reverse" ? (K = 1 - K, x && (K -= x / m)) : v === "mirror" && (R = h)), S = an(0, 1, K) * m;
    } let D; return s ? (this.delayState.value = y[0], D = this.delayState) : D = R.next(S), f && !s && (D.value = f(D.value)), D; }
    then(i, s) { return this.finished.then(i, s); }
    get duration() { return Re(this.calculatedDuration); }
    get iterationDuration() { const { delay: i = 0 } = this.options || {}; return this.duration + Re(i); }
    get time() { return Re(this.currentTime); }
    set time(i) { i = Ge(i), this.currentTime = i, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = i : this.driver && (this.startTime = this.driver.now() - i / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = i, this.tick(i)); }
    getGeneratorVelocity() { return Q2(this.generator, this.currentTime, this.options.velocity); }
    get speed() { return this.playbackSpeed; }
    set speed(i) { const s = this.playbackSpeed !== i; s && this.driver && this.updateTime(Ht.now()), this.playbackSpeed = i, s && this.driver && (this.time = Re(this.currentTime)); }
    play() { if (this.isStopped)
        return; const { driver: i = B0, startTime: s } = this.options; this.driver || (this.driver = i(c => this.tick(c))), this.options.onPlay?.(); const o = this.driver.now(); this.state === "finished" ? (this.updateFinished(), this.startTime = o) : this.holdTime !== null ? this.startTime = o - this.holdTime / (this.playbackSpeed || 1) : this.startTime || (this.startTime = s ?? (this.pendingStartTime = o)), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start(); }
    pause() { this.state = "paused", this.updateTime(Ht.now()), this.holdTime = this.currentTime; }
    complete() { this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null; }
    finish() { this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.(); }
    cancel() { this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.(); }
    teardown() { this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null; }
    stopDriver() { this.driver && (this.driver.stop(), this.driver = void 0); }
    sample(i) { return this.startTime = 0, this.tick(i, !0); }
    attachTimeline(i) { return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), i.observe(this); }
}
const $2 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function I2(a) { const [i, s] = a.slice(0, -1).split("("); if (i === "drop-shadow")
    return a; const [o] = s.match(yf) || []; if (!o)
    return a; const c = s.replace(o, ""); let f = $2.has(i) ? 1 : 0; return o !== s && (f *= 100), i + "(" + f + c + ")"; }
const tb = /\b([a-z-]*)\(.*?\)/gu, Uc = { ...we, getAnimatableNone: a => { const i = a.match(tb); return i ? i.map(I2).join(" ") : a; } }, Lc = { ...we, getAnimatableNone: a => { const i = we.parse(a); return we.createTransformer(a)(i.map(o => typeof o == "number" ? 0 : typeof o == "object" ? { ...o, alpha: 1 } : o)); } }, ay = { ...Ti, transform: Math.round }, eb = { rotate: An, pathRotation: An, rotateX: An, rotateY: An, rotateZ: An, scale: to, scaleX: to, scaleY: to, scaleZ: to, skew: An, skewX: An, skewY: An, distance: lt, translateX: lt, translateY: lt, translateZ: lt, x: lt, y: lt, z: lt, perspective: lt, transformPerspective: lt, opacity: Al, originX: $p, originY: $p, originZ: lt }, Cl = { borderWidth: lt, borderTopWidth: lt, borderRightWidth: lt, borderBottomWidth: lt, borderLeftWidth: lt, borderRadius: lt, borderTopLeftRadius: lt, borderTopRightRadius: lt, borderBottomRightRadius: lt, borderBottomLeftRadius: lt, width: lt, maxWidth: lt, height: lt, maxHeight: lt, top: lt, right: lt, bottom: lt, left: lt, inset: lt, insetBlock: lt, insetBlockStart: lt, insetBlockEnd: lt, insetInline: lt, insetInlineStart: lt, insetInlineEnd: lt, padding: lt, paddingTop: lt, paddingRight: lt, paddingBottom: lt, paddingLeft: lt, paddingBlock: lt, paddingBlockStart: lt, paddingBlockEnd: lt, paddingInline: lt, paddingInlineStart: lt, paddingInlineEnd: lt, margin: lt, marginTop: lt, marginRight: lt, marginBottom: lt, marginLeft: lt, marginBlock: lt, marginBlockStart: lt, marginBlockEnd: lt, marginInline: lt, marginInlineStart: lt, marginInlineEnd: lt, fontSize: lt, backgroundPositionX: lt, backgroundPositionY: lt, ...eb, zIndex: ay, fillOpacity: Al, strokeOpacity: Al, numOctaves: ay }, nb = { ...Cl, color: $t, backgroundColor: $t, outlineColor: $t, fill: $t, stroke: $t, borderColor: $t, borderTopColor: $t, borderRightColor: $t, borderBottomColor: $t, borderLeftColor: $t, filter: Uc, WebkitFilter: Uc, mask: Lc, WebkitMask: Lc }, Q0 = a => nb[a], ab = new Set([Uc, Lc]);
function Af(a, i) { let s = Q0(a); return ab.has(s) || (s = we), s.getAnimatableNone ? s.getAnimatableNone(i) : void 0; }
function ib(a) { for (let i = 1; i < a.length; i++)
    a[i] ?? (a[i] = a[i - 1]); }
const Ea = a => a * 180 / Math.PI, Hc = a => { const i = Ea(Math.atan2(a[1], a[0])); return qc(i); }, lb = { x: 4, y: 5, translateX: 4, translateY: 5, scaleX: 0, scaleY: 3, scaleZ: () => 1, scale: a => (Math.abs(a[0]) + Math.abs(a[3])) / 2, rotate: Hc, rotateZ: Hc, skewX: a => Ea(Math.atan(a[1])), skewY: a => Ea(Math.atan(a[2])), skew: a => (Math.abs(a[1]) + Math.abs(a[2])) / 2 }, qc = a => (a = a % 360, a < 0 && (a += 360), a), iy = Hc, ly = a => Math.hypot(a[0], a[1]), sy = a => Math.hypot(a[4], a[5]), sb = { x: 12, y: 13, z: 14, translateX: 12, translateY: 13, translateZ: 14, scaleX: ly, scaleY: sy, scaleZ: a => Math.hypot(a[8], a[9], a[10]), scale: a => (ly(a) + sy(a)) / 2, rotateX: a => qc(Ea(Math.atan2(a[6], a[5]))), rotateY: a => qc(Ea(Math.atan2(-a[2], a[0]))), rotateZ: iy, rotate: iy, skewX: a => Ea(Math.atan(a[4])), skewY: a => Ea(Math.atan(a[1])), skew: a => (Math.abs(a[1]) + Math.abs(a[4])) / 2 };
function jl(a) { return a.includes("scale") ? 1 : 0; }
function Yc(a, i) { if (!a || a === "none")
    return jl(i); const s = a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u); let o, c; if (s)
    o = sb, c = s;
else {
    const m = a.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    o = lb, c = m;
} if (!c)
    return jl(i); const f = o[i], h = c[1].split(",").map(ub); return typeof f == "function" ? f(h) : h[f]; }
const ob = (a, i) => { const { transform: s = "none" } = getComputedStyle(a); return Yc(s, i); };
function ub(a) { return parseFloat(a.trim()); }
const En = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "scaleZ", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"], $n = new Set([...En, "pathRotation"]), oy = a => a === Ti || a === lt, rb = new Set(["x", "y", "z"]), cb = En.filter(a => !rb.has(a));
function fb(a) { const i = []; return cb.forEach(s => { const o = a.getValue(s); if (o !== void 0) {
    const c = o.get(), f = s.startsWith("scale") ? 1 : 0;
    if (c === f)
        return;
    i.push([s, c]), o.set(f);
} }), i; }
const hb = new Set(["bottom", "right"]);
function uy(a, i, s, o, c, f) { const h = parseFloat(a); if (!isNaN(h))
    return h; const { min: m, max: y } = i()[s], p = y - m; return f === "border-box" ? p : p - parseFloat(o) - parseFloat(c); }
const Ma = { width: ({ width: a, paddingLeft: i = "0", paddingRight: s = "0", boxSizing: o }, c) => uy(a, c, "x", i, s, o), height: ({ height: a, paddingTop: i = "0", paddingBottom: s = "0", boxSizing: o }, c) => uy(a, c, "y", i, s, o), top: ({ top: a }) => parseFloat(a), left: ({ left: a }) => parseFloat(a), bottom: ({ top: a }, i) => { const { y: s } = i(); return parseFloat(a) + (s.max - s.min); }, right: ({ left: a }, i) => { const { x: s } = i(); return parseFloat(a) + (s.max - s.min); }, x: ({ transform: a }) => Yc(a, "x"), y: ({ transform: a }) => Yc(a, "y") };
Ma.translateX = Ma.x;
Ma.translateY = Ma.y;
const Da = new Set;
let Gc = !1, Xc = !1, kc = !1;
function K0() { if (Xc) {
    const a = [], i = new Set, s = new Set;
    Da.forEach(c => { c.needsMeasurement && (a.push(c), i.add(c.element), hb.has(c.name) && s.add(c.element)); });
    const o = new Map;
    s.forEach(c => { const f = fb(c); f.length && (o.set(c, f), c.render()); }), a.forEach(c => c.measureInitialState()), i.forEach(c => { c.render(); const f = o.get(c); f && f.forEach(([h, m]) => { c.getValue(h)?.set(m); }); }), a.forEach(c => c.measureEndState()), a.forEach(c => { c.suspendedScrollY !== void 0 && window.scrollTo(0, c.suspendedScrollY); });
} Xc = !1, Gc = !1, Da.forEach(a => a.complete(kc)), Da.clear(); }
function J0() { Da.forEach(a => { a.readKeyframes(), a.needsMeasurement && (Xc = !0); }); }
function db() { kc = !0, J0(), K0(), kc = !1; }
function mb(a, i, s) { if (typeof a == "string") {
    if (rf(a) || cf(a))
        return parseFloat(a);
    if (!we.test(a) && we.test(s))
        return Af(i, s);
} return a ?? void 0; }
class Ef {
    constructor(i, s, o, c, f, h = !1) { this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...i], this.onComplete = s, this.name = o, this.motionValue = c, this.element = f, this.isAsync = h; }
    scheduleResolve() { this.state = "scheduled", this.isAsync ? (Da.add(this), Gc || (Gc = !0, Vt.read(J0), Vt.resolveKeyframes(K0))) : (this.readKeyframes(), this.complete()); }
    readKeyframes() { const { unresolvedKeyframes: i, name: s, element: o, motionValue: c } = this; if (i[0] === null) {
        const f = c?.get(), h = i[i.length - 1];
        if (f !== void 0)
            i[0] = f;
        else if (o && s) {
            const m = mb(o.readValue(s, h), s, h);
            m !== void 0 && (i[0] = m);
        }
        i[0] === void 0 && (i[0] = h), c && f === void 0 && c.set(i[0]);
    } ib(i); }
    setFinalKeyframe() { }
    measureInitialState() { }
    renderEndStyles() { }
    measureEndState() { }
    complete(i = !1) { this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i), Da.delete(this); }
    cancel() { this.state === "scheduled" && (Da.delete(this), this.state = "pending"); }
    resume() { this.state === "pending" && this.scheduleResolve(); }
}
const pb = a => a.startsWith("--");
function F0(a, i, s) { pb(i) ? a.style.setProperty(i, s) : a.style[i] = s; }
const yb = {};
function P0(a, i) { const s = g0(a); return () => yb[i] ?? s(); }
const gb = P0(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Mf = P0(() => { try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
}
catch {
    return !1;
} return !0; }, "linearEasing"), pi = ([a, i, s, o]) => `cubic-bezier(${a}, ${i}, ${s}, ${o})`, Zc = { linear: "linear", ease: "ease", easeIn: "ease-in", easeOut: "ease-out", easeInOut: "ease-in-out", circIn: pi([0, .65, .55, 1]), circOut: pi([.55, 0, 1, .45]), backIn: pi([.31, .01, .66, -.59]), backOut: pi([.33, 1.53, .69, .99]) };
function W0(a, i) { if (a)
    return typeof a == "function" ? Mf() ? U0(a, i) : "ease-out" : mf(a) ? pi(a) : Array.isArray(a) ? a.map(s => W0(s, i) || Zc.easeOut) : Zc[a]; }
function vb(a, i, s, { delay: o = 0, duration: c = 300, repeat: f = 0, repeatType: h = "loop", ease: m = "easeOut", times: y } = {}, p = void 0) { const v = { [i]: s }; y && (v.offset = y); const x = W0(m, c); Array.isArray(x) && (v.easing = x); const S = { delay: o, duration: c, easing: Array.isArray(x) ? "linear" : x, fill: "both", iterations: f + 1, direction: h === "reverse" ? "alternate" : "normal" }; return p && (S.pseudoElement = p), a.animate(v, S); }
function $0(a) { return typeof a == "function" && "applyToOptions" in a; }
function xb({ type: a, ...i }) { return $0(a) && Mf() ? a.applyToOptions(i) : (i.duration ?? (i.duration = 300), i.ease ?? (i.ease = "easeOut"), i); }
class I0 extends Tf {
    constructor(i) { if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !i)
        return; const { element: s, name: o, keyframes: c, pseudoElement: f, allowFlatten: h = !1, finalKeyframe: m, onComplete: y } = i; this.isPseudoElement = !!f, this.allowFlatten = h, this.options = i, Ro(typeof i.type != "string"); const p = xb(i); this.animation = vb(s, o, c, p, f), p.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => { if (this.finishedTime = this.time, !f) {
        const v = Ml(c, this.options, m, this.speed);
        this.updateMotionValue && this.updateMotionValue(v), F0(s, o, v), this.animation.cancel();
    } y?.(), this.notifyFinished(); }, Z0(this, i, p); }
    play() { this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished()); }
    pause() { this.animation.pause(); }
    complete() { this.animation.finish?.(); }
    cancel() { try {
        this.animation.cancel();
    }
    catch { } }
    stop() { if (this.isStopped)
        return; this.isStopped = !0; const { state: i } = this; i === "idle" || i === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel()); }
    commitStyles() { const i = this.options?.element; !this.isPseudoElement && i?.isConnected && this.animation.commitStyles?.(); }
    get duration() { const i = this.animation.effect?.getComputedTiming?.().duration || 0; return Re(Number(i)); }
    get iterationDuration() { const { delay: i = 0 } = this.options || {}; return this.duration + Re(i); }
    get time() { return Re(Number(this.animation.currentTime) || 0); }
    set time(i) { const s = this.finishedTime !== null; this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = Ge(i), s && this.animation.pause(); }
    get speed() { return this.animation.playbackRate; }
    set speed(i) { i < 0 && (this.finishedTime = null), this.animation.playbackRate = i; }
    get state() { return this.finishedTime !== null ? "finished" : this.animation.playState; }
    get startTime() { return this.manualStartTime ?? Number(this.animation.startTime); }
    set startTime(i) { this.manualStartTime = this.animation.startTime = i; }
    attachTimeline({ timeline: i, onAttach: s, observe: o }) { return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, i && gb() ? (this.animation.timeline = i, s?.(this.animation), Pe) : o(this); }
}
const tg = { anticipate: A0, backInOut: T0, circInOut: M0 };
function bb(a) { return a in tg; }
function Sb(a) { typeof a.ease == "string" && bb(a.ease) && (a.ease = tg[a.ease]); }
const So = 10;
class Tb extends I0 {
    constructor(i) { Sb(i), G0(i), super(i), i.startTime !== void 0 && i.autoplay !== !1 && (this.startTime = i.startTime), this.options = i; }
    elapsed() { return this.state === "running" ? (Ht.now() - this.startTime) * this.speed : this.time * 1e3; }
    sample(i) { if (!this.sampler) {
        const { motionValue: s, onUpdate: o, onComplete: c, onPlay: f, onStop: h, element: m, ...y } = this.options;
        this.sampler = new Dl({ ...y, autoplay: !1 }), this.sampler.stop();
    } return this.sampler.sample(Math.max(0, i)).value; }
    liveValue() { const { state: i } = this; if (i === "running" || i === "paused")
        return this.sample(this.elapsed()); }
    updateMotionValue(i) { const { motionValue: s, element: o, name: c } = this.options; if (!s)
        return; if (i !== void 0) {
        s.set(i);
        return;
    } const { speed: f } = this, h = this.elapsed(), m = this.state === "running" && f ? an(0, So, h) : 0, y = this.sample(h); o && c && F0(o, c, y), s.setWithVelocity(this.sample(h - m * Math.sign(f)), y, m / Math.abs(f || 1)); }
}
const ry = (a, i) => i === "zIndex" ? !1 : !!(typeof a == "number" || Array.isArray(a) || typeof a == "string" && (we.test(a) || a === "0") && !a.startsWith("url("));
function Ab(a) { const i = a[0]; if (a.length === 1)
    return !0; for (let s = 0; s < a.length; s++)
    if (a[s] !== i)
        return !0; }
function Eb(a, i, s, o) { const c = a[0]; if (c === null)
    return !1; if (i === "display" || i === "visibility")
    return !0; const f = a[a.length - 1], h = ry(c, i), m = ry(f, i); return !h || !m ? !1 : Ab(a) || (s === "spring" || $0(s)) && o; }
function Qc(a) { a.duration = 0, a.type = "keyframes"; }
const Kc = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]), Mb = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function Db(a) { for (let i = 0; i < a.length; i++)
    if (typeof a[i] == "string" && Mb.test(a[i]))
        return !0; return !1; }
const cy = new Set(["color", "backgroundColor", "outlineColor", "fill", "stroke", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"]), eg = g0(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Cb(a) { const { motionValue: i, name: s, repeatDelay: o, repeatType: c, damping: f, type: h, keyframes: m } = a; if (!s || !(Kc.has(s) || cy.has(s)))
    return !1; const y = i?.owner?.current; if (!(y instanceof HTMLElement) && !(y instanceof SVGElement))
    return !1; const { onUpdate: p, transformTemplate: v } = i.owner.getProps(); return eg() && (Kc.has(s) || cy.has(s) && Db(m)) && (s !== "transform" || !v) && !p && !o && c !== "mirror" && f !== 0 && h !== "inertia"; }
const To = (a, i) => i && typeof a == "number" ? i.transform(a) : a, ng = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" }, jb = En.length;
function ag(a, i, s) { let o = "", c = !0; for (let h = 0; h < jb; h++) {
    const m = En[h], y = a[m];
    if (y === void 0)
        continue;
    let p = !0;
    if (typeof y == "number")
        p = y === (m.startsWith("scale") ? 1 : 0);
    else {
        const v = parseFloat(y);
        p = m.startsWith("scale") ? v === 1 : v === 0;
    }
    if (!p || s) {
        const v = To(y, Cl[m]);
        if (!p) {
            c = !1;
            const x = ng[m] || m;
            o += `${x}(${v}) `;
        }
        s && (i[m] = v);
    }
} const f = a.pathRotation; return f && (c = !1, o += `rotate(${To(f, Cl.pathRotation)}) `), o = o.trim(), s ? o = s(i, c ? "" : o) : c && (o = "none"), o; }
const bi = new WeakMap, zb = 200, mc = .001, Rb = .1, wb = .001, Nb = 100, Ob = a => /^(linear|ease(In|Out|InOut))$/.test(a), pc = (a, i) => a - i, fy = (a, i, s) => { const o = []; for (let c = 0; c <= s; c++)
    o.push(Rt(a, i, c / s)); return o; }, so = a => a.motionValue.owner, yc = a => bi.get(a), yi = (a, i) => a.latestValues ? a.latestValues[i] : a.getValue(i)?.get(), Vb = ({ name: a, motionValue: i }) => a && En.includes(a) && i?.owner?.current instanceof HTMLElement && eg() && Mf();
function _b(a) { const i = so(a), { onUpdate: s, transformTemplate: o } = i.getProps(); return !a.isHandoff && !s && !a.hasOnUpdate && !o && a.type !== "inertia" && (yi(i, "transform") || "none") === "none" && !yi(i, "pathRotation") && !i.projection?.isProjecting(); }
class Bb extends Dl {
    constructor(i) { const s = so(i).current, { driver: o = B0 } = i, c = _b(i); i.driver = h => { const m = o(h); return { js: m, now: m.now, start: (y = !0) => { const p = yc(s); !p || p.isJS ? m.start(y) : p.schedule(!1, !y); }, stop: () => { m.stop(); const y = yc(s); y?.schedule(!y.isFinishing); } }; }, super(i), this.canAccelerate = c; const { stop: f } = this; this.stop = () => { this.isAccelerated() && this.sync(), f(); }; }
    get group() { return yc(so(this.options).current); }
    get js() { return this.driver?.js; }
    get name() { return this.options.name; }
    timing() { const { startTime: i, speed: s, totalDuration: o } = this, { delay: c = 0, repeatType: f } = this.options; return this.holdTime !== null ? [1 / 0, 0] : o === 1 / 0 ? [i + c / s, this.resolvedDuration * (f === "loop" ? 1 : 2) / s || 1] : [i + (c + o) / s, 0]; }
    isAccelerated() { const { group: i, state: s } = this; return i?.tracks.has(this) && !i.isJS && this.canAccelerate && (s === "running" || s === "paused"); }
    liveValue() { return this.isAccelerated() ? this.sampleAt(Ht.now()) : void 0; }
    tween() { const { keyframes: i, type: s, ease: o, times: c, repeat: f, delay: h = 0 } = this.options, m = mf(o) ? pi(o) : Ob(o) && Zc[o]; if (m && !f && !c && i.length === 2 && s === Wn && this.holdTime === null) {
        const y = this.startTime + h / this.speed;
        return [y, y + this.resolvedDuration / this.speed, m];
    } }
    boundaries(i, s) { const { startTime: o, speed: c, resolvedDuration: f, options: h } = this, { delay: m = 0, repeat: y = 0, repeatDelay: p = 0, repeatType: v, times: x, keyframes: S, type: R } = h, D = (R || Wn) === Wn ? x || Y0(S) : [0, 1], B = o + m / c, _ = []; if (this.holdTime !== null || !(f > 0))
        return _; for (let K = Math.max(0, Math.floor((i - B) * c / f)); K <= y; K++) {
        const k = B + K * f / c;
        if (k > s)
            break;
        for (const G of D) {
            const J = k + (K % 2 && v && v !== "loop" ? 1 - G : G) * (f - p) / c;
            J > i && J < s && _.push(J);
        }
    } return _; }
    numberAt(i) { return parseFloat(this.sampleAt(i, !0)); }
    sync() { const i = Ht.now(); this.options.motionValue.setWithVelocity(this.sampleAt(i - So, !0), this.sampleAt(i, !0), So); }
    play() { this.isStopped || ((this.group || Ub(so(this.options))).tracks.add(this), super.play()); }
    pause() { super.pause(), this.isAccelerated() && (this.sync(), this.group.schedule(!1)); }
    complete() { super.complete(); const { group: i } = this; i && !i.isJS && this.canAccelerate && this.tick(Ht.now()); }
    get time() { return this.isAccelerated() ? Re(an(0, this.totalDuration, this.at(Ht.now()) - (this.options.delay || 0))) : super.time; }
    set time(i) { super.time = i; }
    attachTimeline(i) { return this.canAccelerate = !1, this.group?.demote(!0), super.attachTimeline(i); }
}
function Ub(a) { const i = a.current, s = new Set, o = new Map; let c = {}, f = [], h = new Map, m = [], y = !1, p = !1, v = !1, x = -1 / 0; const S = P => { for (const Z of s)
    if (Z.name === P)
        return !0; }, R = (P, Z) => { const tt = {}; for (const $ of P === void 0 ? En : f) {
    const at = o.get($), C = P === void 0 ? yi(a, $) : at ? at.sampleAt(Z > P && !at.timing()[1] ? Z : P) : c[$];
    C !== void 0 && (tt[$] = C);
} return tt; }, D = (P, Z) => { let tt = ""; const $ = R(P, Z); for (const at in $)
    tt += (ng[at] || at) + "(" + To($[at], Cl[at]) + ") "; return tt || "none"; }, B = (P = R()) => { i.style.transform = ag(P, {}); }, _ = (P = !0) => { P && B(), m.forEach(({ animation: Z }) => Z.cancel()), m = []; }, K = (P, Z, tt = 1 / 0) => { const $ = { animation: P, offset: Z, end: tt }; P.startTime = Ht.now() + Z, tt < 1 / 0 && (P.onfinish = () => { $.isDone = !0, m.some(at => at.end === 1 / 0) && (P.cancel(), m = m.filter(at => at !== $)), dt.schedule(!1); }), P.oncancel = () => m.includes($) && dt.demote(), m.push($); }, k = (P, Z, tt) => { const $ = (C, H) => Math.abs(P(H) - P(C)), at = $(Z, tt); for (; tt - Z > .01;) {
    const C = (Z + tt) / 2;
    $(Z, C) > $(C, tt) ? tt = C : Z = C;
} return $(Z, tt) > at / 2 ? [Z, tt] : []; }, G = (P, Z, tt, $) => { const at = Math.min(zb, Math.max(2, Math.ceil((tt - Z) / So))); if ($.length * 4 > at)
    return; const C = fy(Z, tt, at).concat($).sort(pc), H = N => ja(Z, tt, N); let W, I; for (const N of P) {
    const F = C.map(vt => N.numberAt(vt)), [nt] = F, ht = F[F.length - 1] - nt, gt = F.map(vt => ht ? (vt - nt) / ht : vt - nt);
    if (ht) {
        if (!W)
            W = gt, I = vt => (N.numberAt(vt) - nt) / ht;
        else if (gt.some((vt, ee) => !(Math.abs(vt - W[ee]) <= mc)))
            return;
    }
    else if (gt.some(vt => !(Math.abs(vt) <= mc)))
        return;
} if (!W || W.every((N, F) => Math.abs(N - H(C[F])) <= mc))
    return "linear"; const et = [], A = (N, F = I(N)) => et.push(Bc(F) + " " + Bc(H(N) * 100) + "%"); return W.forEach((N, F) => { F && Math.abs(N - W[F - 1]) > .2 && k(I, C[F - 1], C[F]).forEach(nt => A(nt)), A(C[F], N); }), "linear(" + et + ")"; }, J = (P, Z, tt, $) => { const at = [Z], C = (et, A) => P.every(N => !(Math.abs(N.numberAt((et + A) / 2) - (N.numberAt(et) + N.numberAt(A)) / 2) > (N.name.startsWith("scale") ? wb : Rb))), H = (et, A, N) => { if (A - et < 1 || C(et, A))
    at.push(A);
else if (N < 4)
    H(et, (et + A) / 2, N + 1), H((et + A) / 2, A, N + 1);
else {
    for (const F of P)
        at.push(...k(nt => F.numberAt(nt), et, A));
    at.push(A);
} }, W = fy(Z, tt, Math.ceil((tt - Z) / 100)); for (const et of $)
    W.push(et, Math.min(et + .01, tt)); let I = Z; for (const et of W.sort(pc))
    et > I && H(I, et, 0), I = et; return at.sort(pc); }, rt = P => { let Z; for (const tt of P) {
    const $ = tt.tween();
    if (!$ || Z?.some((at, C) => C < 2 ? Math.abs($[C] - at) > 1 : $[C] !== at))
        return;
    Z = $;
} return Z; }, ft = (P, Z, tt, $ = { fill: "both" }, at, C) => { const H = P.flatMap(N => N.boundaries(Z, tt)), W = C || G(P, Z, tt, H), I = W ? [Z, tt] : J(P, Z, tt, H), et = I.map(N => D(N, at)); let A = { transform: et }; return W || (A.offset = I.map(N => ja(Z, tt, N))), et.every(N => N === et[0]) && (B(R(Z, at)), A = null), i.animate(A, { ...$, duration: tt - Z, easing: W || "linear" }); }, V = P => { let Z = P, tt = 0, $ = 0; const at = [], C = [], H = new Set; o.clear(), h = new Map; for (const I of s) {
    o.set(I.name, I);
    const [et, A] = I.timing(), N = et === 1 / 0;
    if (h.set(I, [I.at(P), I.speed, N]), N) {
        I.sync();
        continue;
    }
    if (I.speed < 0)
        return;
    if (A) {
        if (tt) {
            const F = (et - $) / A;
            if (Math.abs(A - tt) > 1 || Math.abs(F - Math.round(F)) * tt > 1)
                return;
        }
        else
            tt = A, $ = et;
        C.push(I);
    }
    else
        H.add(et);
    at.push(I), Z = Math.max(Z, et);
} c = {}, f = En.filter(I => { if (o.has(I))
    return !0; const et = c[I] = yi(a, I); return et !== void 0 && parseFloat(et) !== (I.startsWith("scale") ? 1 : 0); }), _(!1); const W = !tt && rt(at); try {
    if (W && W[1] > P) {
        const [I, et, A] = W;
        K(ft(at, I, et, void 0, void 0, A), I - P, et - I);
    }
    else
        Z > P && (K(ft(at, P, Z), 0, Z - P), H.forEach(I => I < Z - 1 && K(i.animate(null, { duration: I - P }), 0, I - P)));
    if (tt) {
        const I = $ + Math.floor((Z - $) / tt) * tt;
        K(ft(C, I, I + tt, { iterations: 1 / 0, iterationStart: (Z - I) / tt, fill: "forwards" }, Z), Z - P);
    }
}
catch {
    return;
} return m.length || _(), !0; }, X = P => { let Z, tt = 0; for (const $ of s) {
    const at = h.get($);
    if (!at)
        return !1;
    const [C, H, W] = at, I = $.at(P), et = $.timing()[0] === 1 / 0;
    if (W) {
        if (et && I === C)
            continue;
        return !1;
    }
    const A = (I - C) / H, N = et ? 0 : $.speed / H;
    if (Z === void 0)
        Z = A, tt = N;
    else if (Math.abs(A - Z) > 1 || N !== tt)
        return !1;
} if (Z === void 0)
    return !0; if (!m.length)
    return !1; for (const { offset: $, end: at, isDone: C } of m) {
    const H = Z - $;
    if (at < 1 / 0 && (C ? H < at - 1 : H < 0 || H >= at))
        return !1;
} for (const { animation: $, offset: at, isDone: C } of m) {
    if (C)
        continue;
    const H = Z - at;
    tt ? ($.playbackRate = tt, $.startTime = P - H / tt) : ($.pause(), $.currentTime = H);
} return !0; }, pt = () => { const P = Ht.now(); if (dt.isJS || (dt.isFinishing = !0, s.forEach($ => { const [at, C] = $.timing(); $.state === "running" && $.speed > 0 && !C && at <= P + 1 && ($.complete(), c[$.name] = yi(a, $.name), h.has($) || (y = !0)); }), dt.isFinishing = !1), p = !1, s.forEach(({ state: $ }, at) => { ($ === "idle" || $ === "finished") && s.delete(at); }), !s.size) {
    bi.delete(i), dt.isJS || _();
    return;
} for (const $ of s)
    if (!$.canAccelerate)
        return dt.demote(!0); dt.isJS && (dt.isJS = !1, y = !0, s.forEach($ => $.js?.stop())); const Z = y, tt = v; if (y = v = !1, Z || !X(P)) {
    if (tt) {
        if (P - x < Nb)
            return dt.demote();
        x = P;
    }
    if (!V(P))
        return dt.demote();
} }, dt = { tracks: s, isJS: !1, isFinishing: !1, schedule(P, Z) { y || (y = P), v || (v = !!Z), p || (p = !0, Ft.isProcessing ? Vt.render(pt, !1, !0) : queueMicrotask(pt)); }, check() { if (!dt.isJS) {
        for (const P in c)
            if (yi(a, P) !== c[P] && !S(P))
                return dt.schedule(!0, !0);
    } }, demote(P) { dt.isJS || (s.forEach(Z => { Z.isAccelerated() && Z.sync(), P || (Z.canAccelerate = !1); }), dt.isJS = !0, h = new Map, _(), s.forEach(Z => Z.state === "running" && Z.js?.start())); } }; return bi.set(i, dt), dt; }
class Lb extends Tf {
    constructor(i) { super(), this.stop = () => { this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel(); }, this.createdAt = Ht.now(); const { keyframes: s, name: o, motionValue: c, element: f } = i, h = i; h.autoplay ?? (h.autoplay = !0), h.delay ?? (h.delay = 0), h.type ?? (h.type = "keyframes"), h.repeat ?? (h.repeat = 0), h.repeatDelay ?? (h.repeatDelay = 0), h.repeatType ?? (h.repeatType = "loop"); const m = f?.KeyframeResolver || Ef; this.keyframeResolver = new m(s, (y, p, v) => this.onKeyframesResolved(y, p, h, !v), o, c, f), this.keyframeResolver?.scheduleResolve(); }
    onKeyframesResolved(i, s, o, c) { this.keyframeResolver = void 0; const { name: f, type: h, velocity: m, delay: y, isHandoff: p, onUpdate: v } = o; this.resolvedAt = Ht.now(); let x = !0; Eb(i, f, h, m) || (x = !1, (nn.instantAnimations || !y) && v?.(Ml(i, o, s)), i[0] = i[i.length - 1], Qc(o), o.repeat = 0); const { onComplete: S } = o; o.finalKeyframe = s, o.keyframes = i, o.onComplete = () => { S?.(), this.notifyFinished(); }; const R = x && !p && Cb(o), D = !R && Vb(o); c && (R || D || this.resolvedAt !== this.createdAt) && (o.startTime ?? (o.startTime = X0(this.createdAt, this.resolvedAt))); let B; if (R) {
        o.element = o.motionValue?.owner?.current;
        try {
            B = new Tb(o);
        }
        catch {
            B = new Dl(o);
        }
    }
    else
        D ? B = new Bb(o) : B = new Dl(o); this.pendingTimeline && (this.stopTimeline = B.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = B; }
    get finished() { return this._animation ? this._animation.finished : super.finished; }
    then(i, s) { return this.finished.finally(i).then(() => { }); }
    liveValue() { return this._animation?.liveValue?.(); }
    get animation() { return this._animation || (this.keyframeResolver?.resume(), db()), this._animation; }
    get duration() { return this.animation.duration; }
    get iterationDuration() { return this.animation.iterationDuration; }
    get time() { return this.animation.time; }
    set time(i) { this.animation.time = i; }
    get speed() { return this.animation.speed; }
    get state() { return this.animation.state; }
    set speed(i) { this.animation.speed = i; }
    get startTime() { return this.animation.startTime; }
    attachTimeline(i) { return this._animation ? this.stopTimeline = this.animation.attachTimeline(i) : this.pendingTimeline = i, () => this.stop(); }
    play() { this.animation.play(); }
    pause() { this.animation.pause(); }
    complete() { this.animation.complete(); }
    cancel() { this._animation && this.animation.cancel(), this.keyframeResolver?.cancel(); }
}
function ig(a, i, s, o = 0, c = 1) { const f = Array.from(a).sort((p, v) => p.sortNodePosition(v)).indexOf(i), h = a.size, m = (h - 1) * o; return typeof s == "function" ? s(f, h) : c === 1 ? f * o : m - f * o; }
const hy = 30, Hb = a => !isNaN(parseFloat(a));
class qb {
    constructor(i, s = {}) { this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = o => { const c = Ht.now(); if (this.updatedAt !== c && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(o), this.current !== this.prev && (this.notifyChange(), this.dependents))
        for (const f of this.dependents)
            f.dirty(); }, this.hasAnimated = !1, this.setCurrent(i), this.owner = s.owner; }
    setCurrent(i) { this.current = i, this.updatedAt = Ht.now(), this.canTrackVelocity === null && i !== void 0 && (this.canTrackVelocity = Hb(this.current)); }
    setPrevFrameValue(i = this.current) { this.prevFrameValue = i, this.prevUpdatedAt = this.updatedAt; }
    onChange(i) { return this.on("change", i); }
    on(i, s) { var o; return i === "change" ? this.onChangeSubscribe(s) : ((o = this.events)[i] || (o[i] = new go)).add(s); }
    onChangeSubscribe(i) { const { events: s } = this; return !s.change && !this.changeSubscriber ? this.changeSubscriber = i : (s.change || (s.change = new go, s.change.add(this.changeSubscriber), this.changeSubscriber = void 0), s.change.add(i)), () => { this.changeSubscriber === i ? this.changeSubscriber = void 0 : s.change?.remove(i), this.stopIfUnobserved(); }; }
    stopIfUnobserved() { Vt.read(() => { !this.changeSubscriber && !this.events.change?.getSize() && this.stop(); }); }
    clearListeners() { this.changeSubscriber = void 0; for (const i in this.events)
        this.events[i].clear(); }
    attach(i, s) { this.passiveEffect = i, this.stopPassiveEffect = s; }
    set(i) { this.passiveEffect ? this.passiveEffect(i, this.updateAndNotify) : this.updateAndNotify(i); }
    setWithVelocity(i, s, o) { this.set(s), this.prev = void 0, this.prevFrameValue = i, this.prevUpdatedAt = this.updatedAt - o; }
    jump(i, s = !0) { this.updateAndNotify(i), this.prev = i, this.prevUpdatedAt = this.prevFrameValue = void 0, s && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect(); }
    dirty() { this.notifyChange(); }
    notifyChange() { const { current: i, changeSubscriber: s } = this; s ? s(i) : this.events.change?.notify(i); }
    addDependent(i) { this.dependents || (this.dependents = new Set), this.dependents.add(i); }
    removeDependent(i) { this.dependents && this.dependents.delete(i); }
    get() { const i = this.animation?.liveValue?.(); return i === void 0 ? this.current : i; }
    getCurrent() { return this.current; }
    getPrevious() { return this.prev; }
    getVelocity() { const i = Ht.now(); if (!this.canTrackVelocity || this.prevFrameValue === void 0 || i - this.updatedAt > hy)
        return 0; const s = Math.min(this.updatedAt - this.prevUpdatedAt, hy); return v0(parseFloat(this.current) - parseFloat(this.prevFrameValue), s); }
    start(i) { return this.stop(), new Promise(s => { this.hasAnimated = !0; let o = !1, c; c = i(() => { o = !0, this.events.animationComplete?.notify(), this.animation === c && this.clearAnimation(), s(); }), o || (this.animation = c), this.events.animationStart?.notify(); }); }
    stop() { this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation(); }
    isAnimating() { return !!this.animation; }
    clearAnimation() { this.animation = void 0; }
    destroy() { this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect(); }
}
function Si(a, i) { return new qb(a, i); }
function lg(a, i) { if (a?.inherit && i) {
    const { inherit: s, ...o } = a;
    return { ...i, ...o };
} return a; }
function Df(a, i) { const s = a?.[i] ?? a?.default ?? a; return s !== a ? lg(s, a) : s; }
const Yb = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 }, Gb = a => ({ type: "spring", stiffness: 550, damping: a === 0 ? 2 * Math.sqrt(550) : 30, restSpeed: 10 }), Xb = { type: "keyframes", duration: .8 }, kb = { type: "keyframes", ease: [.25, .1, .35, 1], duration: .3 }, Zb = (a, { keyframes: i }) => i.length > 2 ? Xb : $n.has(a) ? a.startsWith("scale") ? Gb(i[1]) : Yb : kb, Qb = new Set(["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"]);
function Kb(a) { for (const i in a)
    if (!Qb.has(i))
        return !0; return !1; }
const Cf = (a, i, s, o = {}, c, f) => h => { const m = Df(o, a) || {}, y = m.delay || o.delay || 0; let { elapsed: p = 0 } = o; p = p - Ge(y); const v = { keyframes: Array.isArray(s) ? s : [null, s], ease: "easeOut", velocity: i.getVelocity(), ...m, delay: -p, onUpdate: S => { i.set(S), m.onUpdate && m.onUpdate(S); }, onComplete: () => { h(), m.onComplete && m.onComplete(); }, name: a, motionValue: i, element: f ? void 0 : c, hasOnUpdate: !!m.onUpdate }; Kb(m) || Object.assign(v, Zb(a, v)), v.duration && (v.duration = Ge(v.duration)), v.repeatDelay && (v.repeatDelay = Ge(v.repeatDelay)), v.from !== void 0 && (v.keyframes[0] = v.from); let x = !1; if ((v.type === !1 || v.duration === 0 && !v.repeatDelay) && (Qc(v), v.delay === 0 && (x = !0)), (nn.instantAnimations || nn.skipAnimations || c?.shouldSkipAnimations || m.skipAnimations) && (x = !0, Qc(v), v.delay = 0), v.allowFlatten = !m.type && !m.ease, x && !f && i.get() !== void 0) {
    const S = Ml(v.keyframes, m);
    if (S !== void 0) {
        Vt.update(() => { v.onUpdate(S), v.onComplete(); });
        return;
    }
} return m.isSync ? new Dl(v) : new Lb(v); }, Jb = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Fb(a) { const i = Jb.exec(a); if (!i)
    return [,]; const [, s, o, c] = i; return [`--${s ?? o}`, c]; }
function sg(a, i, s = 1) { const [o, c] = Fb(a); if (!o)
    return; const f = window.getComputedStyle(i).getPropertyValue(o); if (f) {
    const h = f.trim();
    return rf(h) ? parseFloat(h) : h;
} return pf(c) ? sg(c, i, s + 1) : c; }
function Pb(a) { const i = [{}, {}]; return a?.values.forEach((s, o) => { i[0][o] = s.get(), i[1][o] = s.getVelocity(); }), i; }
function og(a, i, s, o) { const c = f => typeof f == "function" ? f(s !== void 0 ? s : a.custom, ...Pb(o)) : f; return i = c(i), typeof i == "string" && (i = a.variants && a.variants[i]), c(i); }
function Ca(a, i, s) { return og(a.getProps(), i, s, a); }
const ug = (a, i) => i === "exit" ? a.presenceContext?.custom : void 0, rg = new Set(["width", "height", "top", "left", "right", "bottom", ...En]), Wb = a => Array.isArray(a);
function $b(a, i, s) { a.hasValue(i) ? a.getValue(i).set(s) : a.addValue(i, Si(s)); }
function Ib(a) { return Wb(a) ? a[a.length - 1] || 0 : a; }
function tS(a, i) { const s = Ca(a, i); let { transitionEnd: o = {}, transition: c = {}, ...f } = s || {}; f = { ...f, ...o }; for (const h in f) {
    const m = Ib(f[h]);
    $b(a, h, m);
} }
const ue = a => !!(a && a.getVelocity);
function eS(a) { return !!(ue(a) && a.add); }
function Jc(a, i) { const s = a.getValue("willChange"); if (eS(s))
    return s.add(i); if (!s && nn.WillChange) {
    const o = new nn.WillChange("auto");
    a.addValue("willChange", o), o.add(i);
} }
function jf(a) { return a.replace(/([A-Z])/g, i => `-${i.toLowerCase()}`); }
const nS = "framerAppearId", cg = "data-" + jf(nS);
function fg(a) { return a.props[cg]; }
const aS = typeof window < "u";
function iS({ protectedKeys: a, needsAnimating: i }, s) { const o = s in a && !i[s]; return i[s] = !1, o; }
function hg(a, i, { delay: s = 0, transitionOverride: o, type: c } = {}) { let { transition: f, transitionEnd: h, ...m } = i; const y = a.getDefaultTransition(); f = f ? lg(f, y) : y; const p = f?.reduceMotion, v = f?.skipAnimations; o && (f = o); const x = [], S = c && a.animationState?.getState()[c], R = f?.path; R && R.animateVisualElement(a, m, f, s, x); for (const D in m) {
    const B = a.getValue(D, a.latestValues[D] ?? null), _ = m[D];
    if (_ === void 0 || S && iS(S, D))
        continue;
    const K = { delay: s, ...Df(f || {}, D) };
    v && (K.skipAnimations = !0);
    const k = B.get();
    if (k !== void 0 && !B.isAnimating() && !Array.isArray(_) && _ === k && !K.velocity) {
        Vt.update(() => B.set(_));
        continue;
    }
    let G = !1;
    if (aS && window.MotionHandoffAnimation) {
        const ft = fg(a);
        if (ft) {
            const V = window.MotionHandoffAnimation(ft, D, Vt);
            V !== null && (K.startTime = V, G = !0);
        }
    }
    Jc(a, D);
    const J = p ?? a.shouldReduceMotion;
    B.start(Cf(D, B, _, J && rg.has(D) ? { type: !1 } : K, a, G));
    const rt = B.animation;
    rt && x.push(rt);
} if (h) {
    const D = () => Vt.update(() => { h && tS(a, h); });
    x.length ? Promise.all(x).then(D) : D();
} return x; }
function Fc(a, i, s = {}) { const o = Ca(a, i, ug(a, s.type)), c = s.transitionOverride || (o?.transition ?? (a.getDefaultTransition() || {})), f = () => Promise.all(o ? hg(a, o, s) : []), h = (y = 0) => { const { variantChildren: p } = a, { delayChildren: v = 0, staggerChildren: x, staggerDirection: S } = c, R = []; return p?.forEach(D => { D.notify("AnimationStart", i), R.push(Fc(D, i, { ...s, delay: y + (typeof v == "function" ? 0 : v) + ig(p, D, v, x, S) }).then(() => D.notify("AnimationComplete", i))); }), Promise.all(R); }, { when: m } = c; return m ? m === "beforeChildren" ? f().then(() => h()) : h().then(f) : Promise.all([f(), h(s.delay)]); }
function lS(a, i, s = {}) { return a.notify("AnimationStart", i), (Array.isArray(i) ? Promise.all(i.map(c => Fc(a, c, s))) : typeof i == "string" ? Fc(a, i, s) : Promise.all(hg(a, Ca(a, i, s.custom), s))).then(() => { a.notify("AnimationComplete", i); }); }
const sS = { test: a => a === "auto", parse: a => a }, oS = a => i => i.test(a), uS = [Ti, lt, en, An, h2, f2, sS], dy = a => uS.find(oS(a));
function rS(a) { return typeof a == "number" ? a === 0 : a !== null ? a === "none" || a === "0" || cf(a) : !0; }
const cS = new Set(["auto", "none", "0"]);
function fS(a, i, s) { let o = 0, c; for (; o < a.length && !c;) {
    const f = a[o];
    typeof f == "string" && !cS.has(f) && v2(f) && (c = a[o]), o++;
} if (c && s)
    for (const f of i)
        a[f] !== c && (a[f] = Af(s, c)); }
class hS extends Ef {
    constructor(i, s, o, c, f) { super(i, s, o, c, f, !0); }
    scheduleResolve() { if (this.canReadNow() && (this.readKeyframes(), !this.needsMeasurement))
        return this.complete(); super.scheduleResolve(); }
    canReadNow() { const { unresolvedKeyframes: i, element: s, motionValue: o } = this, c = i[0] ?? o?.get(); if (!s?.current || c === void 0)
        return !1; for (let f = 0; f < i.length; f++)
        if (oc(f ? i[f] : c))
            return !1; return !0; }
    readKeyframes() { const { unresolvedKeyframes: i, element: s, name: o } = this; if (!s || !s.current)
        return; super.readKeyframes(); for (let v = 0; v < i.length; v++) {
        let x = i[v];
        if (typeof x == "string" && (x = x.trim(), pf(x))) {
            const S = sg(x, s.current);
            S !== void 0 && (i[v] = S), v === i.length - 1 && (this.finalKeyframe = x);
        }
    } if (this.resolveNoneKeyframes(), !rg.has(o) || i.length !== 2)
        return; const [c, f] = i; if (typeof c == "number" && typeof f == "number")
        return; const h = dy(c), m = dy(f), y = oc(c), p = oc(f); if (y !== p && Ma[o]) {
        this.needsMeasurement = !0;
        return;
    } if (h !== m)
        if (oy(h) && oy(m))
            for (let v = 0; v < i.length; v++) {
                const x = i[v];
                typeof x == "string" && (i[v] = parseFloat(x));
            }
        else
            Ma[o] && (this.needsMeasurement = !0); }
    resolveNoneKeyframes() { const { unresolvedKeyframes: i, name: s } = this, o = []; for (let c = 0; c < i.length; c++)
        (i[c] === null || rS(i[c])) && o.push(c); o.length && fS(i, o, s); }
    measure() { const { element: i, name: s } = this; return Ma[s](window.getComputedStyle(i.current), () => i.measureViewportBox()); }
    measureInitialState() { const { element: i, unresolvedKeyframes: s, name: o } = this; if (!i || !i.current)
        return; o === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = this.measure(), s[0] = this.measuredOrigin; const c = s[s.length - 1]; c !== void 0 && this.motionValue?.jump(c, !1); }
    measureEndState() { const { element: i, unresolvedKeyframes: s } = this; if (!i || !i.current)
        return; this.motionValue?.jump(this.measuredOrigin, !1); const o = s.length - 1, c = s[o]; s[o] = this.measure(), c !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = c), this.removedTransforms?.length && this.removedTransforms.forEach(([f, h]) => { i.getValue(f).set(h); }), this.resolveNoneKeyframes(); }
}
const zf = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"];
function oo(a) { return y0(a) && "offsetHeight" in a && !("ownerSVGElement" in a); }
function Rf(a) { return y0(a) && "ownerSVGElement" in a; }
function dg(a, i, s) { if (a == null)
    return []; if (a instanceof EventTarget)
    return [a]; if (typeof a == "string") {
    let o = document;
    const c = s?.[a] ?? o.querySelectorAll(a);
    return c ? Array.from(c) : [];
} return Array.from(a).filter(o => o != null); }
function wf(a, i, s) { const { style: o, vars: c, transformOrigin: f } = a; let h = !1, m = !1; for (const y in i) {
    const p = i[y];
    if ($n.has(y)) {
        h = !0;
        continue;
    }
    else if (C0(y)) {
        c[y] = p;
        continue;
    }
    else {
        const v = To(p, Cl[y]);
        y.startsWith("origin") ? (m = !0, f[y] = v) : o[y] = v;
    }
} if (i.transform || (h || s ? o.transform = ag(i, a.transform, s) : o.transform && (o.transform = "none")), m) {
    const { originX: y = "50%", originY: p = "50%", originZ: v = 0 } = f;
    o.transformOrigin = `${y} ${p} ${v}`;
} }
const dS = { offset: "stroke-dashoffset", array: "stroke-dasharray" }, mS = { offset: "strokeDashoffset", array: "strokeDasharray" };
function pS(a, i, s = 1, o = 0, c = !0) { a.pathLength = 1; const f = c ? dS : mS; a[f.offset] = `${-o}`, a[f.array] = `${i} ${s}`; }
const mg = ["transform", "opacity", "clipPath", "filter", "offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function pg(a, { attrX: i, attrY: s, attrScale: o, pathLength: c, pathSpacing: f = 1, pathOffset: h = 0, ...m }, y, p, v) { if (wf(a, m, p), y) {
    a.style.viewBox && (a.attrs.viewBox = a.style.viewBox);
    return;
} a.attrs = a.style, a.style = {}; const { attrs: x, style: S } = a; for (const R of mg)
    x[R] !== void 0 && (S[R] = x[R], delete x[R]); (S.transform || x.transformOrigin) && (S.transformOrigin = x.transformOrigin ?? "50% 50%", delete x.transformOrigin), S.transform && (S.transformBox = v?.transformBox ?? "fill-box", delete x.transformBox), i !== void 0 && (x.x = i), s !== void 0 && (x.y = s), o !== void 0 && (x.scale = o), c !== void 0 && pS(x, c, f, h, !1); }
function yg({ top: a, left: i, right: s, bottom: o }) { return { x: { min: i, max: s }, y: { min: a, max: o } }; }
function yS({ x: a, y: i }) { return { top: i.min, right: a.max, bottom: i.max, left: a.min }; }
function gS(a, i) { if (!i)
    return a; const s = i({ x: a.left, y: a.top }), o = i({ x: a.right, y: a.bottom }); return { top: s.y, left: s.x, bottom: o.y, right: o.x }; }
function gc(a) { return a === void 0 || a === 1; }
function Pc({ scale: a, scaleX: i, scaleY: s }) { return !gc(a) || !gc(i) || !gc(s); }
function Ta(a) { return Pc(a) || gg(a) || a.z || a.rotate || a.rotateX || a.rotateY || a.skewX || a.skewY; }
function gg(a) { return my(a.x) || my(a.y); }
function my(a) { return a && a !== "0%"; }
function Ao(a, i, s) { const o = a - s, c = i * o; return s + c; }
function py(a, i, s, o, c) { return c !== void 0 && (a = Ao(a, c, o)), Ao(a, s, o) + i; }
function Wc(a, i = 0, s = 1, o, c) { a.min = py(a.min, i, s, o, c), a.max = py(a.max, i, s, o, c); }
function vg(a, { x: i, y: s }) { Wc(a.x, i.translate, i.scale, i.originPoint), Wc(a.y, s.translate, s.scale, s.originPoint); }
const yy = .999999999999, gy = 1.0000000000001;
function vS(a, i, s, o = !1) { const c = s.length; if (!c)
    return; i.x = i.y = 1; let f, h; for (let m = 0; m < c; m++) {
    f = s[m], h = f.projectionDelta;
    const { visualElement: y } = f.options;
    y && y.props.style && y.props.style.display === "contents" || (o && f.options.layoutScroll && f.scroll && f !== f.root && (Fe(a.x, -f.scroll.offset.x), Fe(a.y, -f.scroll.offset.y)), h && (i.x *= h.x.scale, i.y *= h.y.scale, vg(a, h)), o && Ta(f.latestValues) && uo(a, f.latestValues, f.layout?.layoutBox));
} i.x < gy && i.x > yy && (i.x = 1), i.y < gy && i.y > yy && (i.y = 1); }
function Fe(a, i) { a.min += i, a.max += i; }
function vy(a, i, s, o, c = .5) { const f = Rt(a.min, a.max, c); Wc(a, i, s, f, o); }
function xy(a, i) { return typeof a == "string" ? parseFloat(a) / 100 * (i.max - i.min) : a; }
function uo(a, i, s) { const o = s ?? a; vy(a.x, xy(i.x, o.x), i.scaleX, i.scale, i.originX), vy(a.y, xy(i.y, o.y), i.scaleY, i.scale, i.originY); }
function xg(a, i) { return yg(gS(a.getBoundingClientRect(), i)); }
function xS(a, i, s) { const o = xg(a, s), { scroll: c } = i; return c && (Fe(o.x, c.offset.x), Fe(o.y, c.offset.y)), o; }
const { schedule: Nf } = _0(queueMicrotask, !1), Ke = { x: !1, y: !1 };
function bg() { return Ke.x || Ke.y; }
function bS(a) { return a === "x" || a === "y" ? Ke[a] ? null : (Ke[a] = !0, () => { Ke[a] = !1; }) : Ke.x || Ke.y ? null : (Ke.x = Ke.y = !0, () => { Ke.x = Ke.y = !1; }); }
function Sg(a, i) { const s = dg(a), o = new AbortController, c = { passive: !0, ...i, signal: o.signal }; return [s, c, () => o.abort()]; }
function SS(a) { return !(a.pointerType === "touch" || bg()); }
function TS(a, i, s = {}) { const [o, c, f] = Sg(a, s); return o.forEach(h => { let m = !1, y = !1, p; const v = () => { h.removeEventListener("pointerleave", D); }, x = _ => { p && (p(_), p = void 0), v(); }, S = _ => { m = !1, window.removeEventListener("pointerup", S), window.removeEventListener("pointercancel", S), y && (y = !1, x(_)); }, R = () => { m = !0, window.addEventListener("pointerup", S, c), window.addEventListener("pointercancel", S, c); }, D = _ => { if (_.pointerType !== "touch") {
    if (m) {
        y = !0;
        return;
    }
    x(_);
} }, B = _ => { if (!SS(_))
    return; y = !1; const K = i(h, _); typeof K == "function" && (p = K, h.addEventListener("pointerleave", D, c)); }; h.addEventListener("pointerenter", B, c), h.addEventListener("pointerdown", R, c); }), f; }
const Tg = (a, i) => i ? a === i ? !0 : Tg(a, i.parentElement) : !1, Of = a => a.pointerType === "mouse" ? typeof a.button != "number" || a.button <= 0 : a.isPrimary !== !1, AS = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function ES(a) { return AS.has(a.tagName) || a.isContentEditable === !0; }
const MS = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function DS(a) { return MS.has(a.tagName) || a.isContentEditable === !0; }
const ro = new WeakSet;
function by(a) { return i => { i.key === "Enter" && a(i); }; }
function vc(a, i) { a.dispatchEvent(new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 })); }
const CS = (a, i) => { const s = a.currentTarget; if (!s)
    return; const o = by(() => { if (ro.has(s))
    return; vc(s, "down"); const c = by(() => { vc(s, "up"); }), f = () => vc(s, "cancel"); s.addEventListener("keyup", c, i), s.addEventListener("blur", f, i); }); s.addEventListener("keydown", o, i), s.addEventListener("blur", () => s.removeEventListener("keydown", o), i); };
function Sy(a) { return Of(a) && !bg(); }
const Ty = new WeakSet;
function jS(a, i, s = {}) { const [o, c, f] = Sg(a, s), h = m => { const y = m.currentTarget; if (!Sy(m) || Ty.has(m))
    return; ro.add(y), s.stopPropagation && Ty.add(m); const p = i(y, m), v = { ...c, capture: !0 }, x = (D, B) => { window.removeEventListener("pointerup", S, v), window.removeEventListener("pointercancel", R, v), ro.has(y) && ro.delete(y), Sy(D) && typeof p == "function" && p(D, { success: B }); }, S = D => { x(D, y === window || y === document || s.useGlobalTarget || Tg(y, D.target)); }, R = D => { x(D, !1); }; window.addEventListener("pointerup", S, v), window.addEventListener("pointercancel", R, v); }; return o.forEach(m => { (s.useGlobalTarget ? window : m).addEventListener("pointerdown", h, c), oo(m) && (m.addEventListener("focus", p => CS(p, c)), !ES(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0)); }), f; }
const co = new WeakMap;
let fo;
const Ag = (a, i, s) => (o, c) => c && c[0] ? c[0][a + "Size"] : Rf(o) && "getBBox" in o ? o.getBBox()[i] : o[s], zS = Ag("inline", "width", "offsetWidth"), RS = Ag("block", "height", "offsetHeight");
function wS({ target: a, borderBoxSize: i }) { co.get(a)?.forEach(s => { s(a, { get width() { return zS(a, i); }, get height() { return RS(a, i); } }); }); }
function NS(a) { a.forEach(wS); }
function OS() { typeof ResizeObserver > "u" || (fo = new ResizeObserver(NS)); }
function VS(a, i) { fo || OS(); const s = dg(a); return s.forEach(o => { let c = co.get(o); c || (c = new Set, co.set(o, c)), c.add(i), fo?.observe(o); }), () => { s.forEach(o => { const c = co.get(o); c?.delete(i), c?.size || fo?.unobserve(o); }); }; }
const ho = new Set;
let gi;
function _S() { gi = () => { const a = { get width() { return window.innerWidth; }, get height() { return window.innerHeight; } }; ho.forEach(i => i(a)); }, window.addEventListener("resize", gi); }
function BS(a) { return ho.add(a), gi || _S(), () => { ho.delete(a), !ho.size && typeof gi == "function" && (window.removeEventListener("resize", gi), gi = void 0); }; }
function Ay(a, i) { return typeof a == "function" ? BS(a) : VS(a, i); }
function US(a) { return Rf(a) && a.tagName === "svg"; }
const Ey = a => typeof a == "number" ? a : parseFloat(a), My = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }), vi = () => ({ x: My(), y: My() }), Dy = () => ({ min: 0, max: 0 }), Wt = () => ({ x: Dy(), y: Dy() }), LS = new WeakMap;
function wo(a) { return a !== null && typeof a == "object" && typeof a.start == "function"; }
function zl(a) { return typeof a == "string" || Array.isArray(a); }
const Vf = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"], Cy = ["initial", ...Vf];
function No(a) { if (wo(a.animate))
    return !0; for (let i = 0; i < Cy.length; i++)
    if (zl(a[Cy[i]]))
        return !0; return !1; }
function Eg(a) { return !!(No(a) || a.variants); }
function HS(a, i, s) { for (const o in i) {
    const c = i[o], f = s[o];
    if (ue(c))
        a.addValue(o, c);
    else if (ue(f))
        a.addValue(o, Si(c, { owner: a }));
    else if (f !== c)
        if (a.hasValue(o)) {
            const h = a.getValue(o);
            h.liveStyle === !0 ? h.jump(c) : h.hasAnimated || h.set(c);
        }
        else {
            const h = a.getStaticValue(o);
            a.addValue(o, Si(h !== void 0 ? h : c, { owner: a }));
        }
} for (const o in s)
    i[o] === void 0 && a.removeValue(o); return i; }
const $c = { current: null }, Mg = { current: !1 }, qS = typeof window < "u";
function YS() { if (Mg.current = !0, !!qS)
    if (window.matchMedia) {
        const a = window.matchMedia("(prefers-reduced-motion)"), i = () => $c.current = a.matches;
        a.addEventListener("change", i), i();
    }
    else
        $c.current = !1; }
const jy = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
let Eo = {};
function Dg(a) { Eo = a; }
function GS() { return Eo; }
class XS {
    scrapeMotionValuesFromProps(i, s, o) { return {}; }
    constructor({ parent: i, props: s, presenceContext: o, reducedMotionConfig: c, skipAnimations: f, blockInitialAnimation: h, visualState: m }, y = {}) { this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = new Map, this.KeyframeResolver = Ef, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => { this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection)); }, this.renderScheduledAt = 0, this.scheduleRender = () => { const R = Ht.now(); this.renderScheduledAt < R && (this.renderScheduledAt = R, Vt.render(this.render, !1, !0)); }; const { latestValues: p, renderState: v } = m; this.latestValues = p, this.baseTarget = { ...p }, this.initialValues = s.initial ? { ...p } : {}, this.renderState = v, this.parent = i, this.props = s, this.presenceContext = o, this.depth = i ? i.depth + 1 : 0, this.reducedMotionConfig = c, this.skipAnimationsConfig = f, this.options = y, this.blockInitialAnimation = !!h, this.isControllingVariants = No(s), this.isVariantNode = Eg(s), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(i && i.current); const { willChange: x, ...S } = this.scrapeMotionValuesFromProps(s, {}, this); for (const R in S) {
        const D = S[R];
        p[R] !== void 0 && ue(D) && D.set(p[R]);
    } }
    mount(i) { if (this.hasBeenMounted)
        for (const s in this.initialValues)
            this.values.get(s)?.jump(this.initialValues[s]), this.latestValues[s] = this.initialValues[s]; if (this.current = i, LS.set(i, this), this.projection && !this.projection.instance && this.projection.mount(i), this.isVariantNode && !this.isControllingVariants) {
        let s = this;
        do
            s = s.props.inherit !== !1 && s.parent;
        while (s && !s.isVariantNode);
        if (s) {
            const { variantChildren: o } = s;
            o.add(this), this.removeFromVariantTree = () => o.delete(this);
        }
    } this.values.forEach((s, o) => this.bindToMotionValue(o, s)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (Mg.current || YS(), this.shouldReduceMotion = $c.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0; }
    unmount() { this.projection && this.projection.unmount(), ta(this.notifyUpdate), ta(this.render), this.valueSubscriptions.forEach(i => i()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this); for (const i in this.events)
        this.events[i].clear(); for (const i in this.features) {
        const s = this.features[i];
        s && (s.unmount(), s.isMounted = !1);
    } this.current = null; }
    addChild(i) { this.children.add(i), this.enteringChildren ?? (this.enteringChildren = new Set), this.enteringChildren.add(i); }
    removeChild(i) { this.children.delete(i), this.enteringChildren && this.enteringChildren.delete(i); }
    bindToMotionValue(i, s) { if (this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)(), s.accelerate && Kc.has(i) && this.current instanceof HTMLElement) {
        const { factory: h, keyframes: m, times: y, ease: p, duration: v } = s.accelerate, x = new I0({ element: this.current, name: i, keyframes: m, times: y, ease: p, duration: Ge(v) }), S = h(x);
        this.valueSubscriptions.set(i, () => { S(), x.cancel(); });
        return;
    } const o = $n.has(i); o && this.onBindTransform && this.onBindTransform(); const c = s.on("change", h => { this.latestValues[i] = h, this.props.onUpdate && Vt.preRender(this.notifyUpdate), o && (this.projection && (this.projection.isTransformDirty = !0), bi.get(this.current)?.check()), this.scheduleRender(); }); let f; typeof window < "u" && window.MotionCheckAppearSync && (f = window.MotionCheckAppearSync(this, i, s)), this.valueSubscriptions.set(i, () => { c(), f && f(); }); }
    sortNodePosition(i) { return !this.current || !i.current || !this.sortInstanceNodePosition || this.type !== i.type ? 0 : this.sortInstanceNodePosition(this.current, i.current); }
    updateFeatures() { let i = "animation"; for (i in Eo) {
        const s = Eo[i];
        if (!s)
            continue;
        const { isEnabled: o, Feature: c } = s;
        if (!this.features[i] && c && o(this.props) && (this.features[i] = new c(this)), this.features[i]) {
            const f = this.features[i];
            f.isMounted ? f.update() : (f.mount(), f.isMounted = !0);
        }
    } }
    triggerBuild() { this.build(this.renderState, this.latestValues, this.props); }
    measureViewportBox() { return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Wt(); }
    getStaticValue(i) { return this.latestValues[i]; }
    setStaticValue(i, s) { this.latestValues[i] = s; }
    update(i, s) { const { transformTemplate: o, onUpdate: c } = this.props; (i.transformTemplate || o) && this.scheduleRender(), (i.transformTemplate && !o || i.onUpdate && !c) && bi.get(this.current)?.demote(), this.prevProps = this.props, this.props = i, this.prevPresenceContext = this.presenceContext, this.presenceContext = s; for (let f = 0; f < jy.length; f++) {
        const h = jy[f];
        this.propEventSubscriptions[h] && (this.propEventSubscriptions[h](), delete this.propEventSubscriptions[h]);
        const m = "on" + h, y = i[m];
        y && (this.propEventSubscriptions[h] = this.on(h, y));
    } this.prevMotionValues = HS(this, this.scrapeMotionValuesFromProps(i, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(); }
    getProps() { return this.props; }
    getVariant(i) { return this.props.variants ? this.props.variants[i] : void 0; }
    getDefaultTransition() { return this.props.transition; }
    getTransformPagePoint() { return this.props.transformPagePoint; }
    addValue(i, s) { const o = this.values.get(i); if (s !== o) {
        o && this.removeValue(i), this.bindToMotionValue(i, s), this.values.set(i, s);
        const c = s.get();
        c !== void 0 && (this.latestValues[i] = c);
    } }
    removeValue(i) { this.values.delete(i); const s = this.valueSubscriptions.get(i); s && (s(), this.valueSubscriptions.delete(i)), delete this.latestValues[i], this.removeValueFromRenderState(i, this.renderState); }
    hasValue(i) { return this.values.has(i); }
    getValue(i, s) { if (this.props.values && this.props.values[i])
        return this.props.values[i]; let o = this.values.get(i); return o === void 0 && s !== void 0 && (o = Si(s ?? this.getDefaultValue?.(i), { owner: this }), this.addValue(i, o)), o; }
    readValue(i, s) { let o = this.latestValues[i] !== void 0 || !this.current ? this.latestValues[i] : this.getBaseTargetFromProps(this.props, i) ?? this.readValueFromInstance(this.current, i, this.options); return o != null && (typeof o == "string" && (rf(o) || cf(o)) ? o = parseFloat(o) : typeof o != "number" && !we.test(o) && we.test(s) && (o = Af(i, s)), this.setBaseTarget(i, ue(o) ? o.get() : o)), ue(o) ? o.get() : o; }
    setBaseTarget(i, s) { this.baseTarget[i] = s; }
    on(i, s) { return this.events[i] || (this.events[i] = new go), this.events[i].add(s); }
    notify(i, ...s) { this.events[i] && this.events[i].notify(...s); }
    scheduleRenderMicrotask() { Nf.render(this.render); }
}
class Cg extends XS {
    constructor() { super(...arguments), this.KeyframeResolver = hS; }
    sortInstanceNodePosition(i, s) { return i.compareDocumentPosition(s) & 2 ? 1 : -1; }
    getBaseTargetFromProps(i, s) { const o = i.style; return o ? o[s] : void 0; }
    removeValueFromRenderState(i, { vars: s, style: o }) { delete s[i], delete o[i]; }
    handleChildMotionValue() { this.childSubscription && (this.childSubscription(), delete this.childSubscription); const { children: i } = this.props; ue(i) && (this.childSubscription = i.on("change", s => { this.current && (this.current.textContent = `${s}`); })); }
}
class ea {
    constructor(i) { this.isMounted = !1, this.node = i; }
    update() { }
}
function jg(a, { style: i, vars: s }, o, c) { const f = a.style; let h; for (h in i)
    f[h] = i[h]; c?.applyProjectionStyles(f, o); for (h in s)
    f.setProperty(h, s[h]); }
const Rl = {};
function zg(a, { layout: i, layoutId: s }) { return $n.has(a) || a.startsWith("origin") || (i || s !== void 0) && (!!Rl[a] || a === "opacity"); }
function _f(a, i, s) { const o = a.style, c = i?.style, f = {}; if (!o)
    return f; for (const h in o)
    (ue(o[h]) || c && ue(c[h]) || zg(h, a) || s?.getValue(h)?.liveStyle !== void 0) && (f[h] = o[h]); return f; }
function kS(a) { return window.getComputedStyle(a); }
class ZS extends Cg {
    constructor() { super(...arguments), this.type = "html", this.renderInstance = jg; }
    mount(i) { Ro(!!i.style), super.mount(i); }
    readValueFromInstance(i, s) { if ($n.has(s))
        return this.projection?.isProjecting ? jl(s) : ob(i, s); {
        const o = kS(i), c = (C0(s) ? o.getPropertyValue(s) : o[s]) || 0;
        return typeof c == "string" ? c.trim() : c;
    } }
    measureInstanceViewportBox(i, { transformPagePoint: s }) { return xg(i, s); }
    build(i, s, o) { wf(i, s, o.transformTemplate); }
    scrapeMotionValuesFromProps(i, s, o) { return _f(i, s, o); }
}
const Rg = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]), wg = a => typeof a == "string" && a.toLowerCase() === "svg";
function QS(a, i, s, o) { jg(a, i, void 0, o); for (const c in i.attrs)
    a.setAttribute(Rg.has(c) ? c : jf(c), i.attrs[c]); }
function Ng(a, i, s) { const o = _f(a, i, s); for (const c in a)
    if (c !== "children" && (ue(a[c]) || ue(i[c]))) {
        const f = En.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
        o[f] = a[c];
    } return o; }
class KS extends Cg {
    constructor() { super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Wt; }
    getBaseTargetFromProps(i, s) { return $n.has(s) ? super.getBaseTargetFromProps(i, s) ?? jl(s) : i[s]; }
    getDefaultValue(i) { return $n.has(i) ? this.latestValues[i] ?? jl(i) : void 0; }
    readValueFromInstance(i, s) { if ($n.has(s)) {
        const o = Q0(s);
        return o && o.default || 0;
    } if (mg.includes(s)) {
        const c = getComputedStyle(i)[s];
        if (typeof c == "string" && c)
            return c.trim();
    } return s = Rg.has(s) ? s : jf(s), i.getAttribute(s); }
    scrapeMotionValuesFromProps(i, s, o) { return Ng(i, s, o); }
    build(i, s, o) { pg(i, s, this.isSVGTag, o.transformTemplate, o.style); }
    renderInstance(i, s, o, c) { QS(i, s, o, c); }
    mount(i) { this.isSVGTag = wg(i.tagName), super.mount(i); }
}
function Og(a, i) { if (!Array.isArray(i))
    return !1; const s = i.length; if (s !== a.length)
    return !1; for (let o = 0; o < s; o++)
    if (i[o] !== a[o])
        return !1; return !0; }
const JS = [...Vf].reverse();
function FS(a) { let i = m => Promise.all(m.map(({ animation: y, options: p }) => lS(a, y, p))), s = zy(), o = !0, c = !1; function f(m) { const { props: y, parent: p, manuallyAnimateOnMount: v } = a, x = o || c, S = [], R = new Set; let D = {}, B = 1 / 0, _ = a; do
    _ = _.props.inherit !== !1 && _.parent;
while (_ && !_.isControllingVariants); if (JS.forEach((k, G) => { const J = s[k], rt = y[k], ft = _ && _.props[k], V = rt !== void 0 ? rt : zl(ft) || ft === !1 ? ft : void 0, X = zl(V), pt = k === m ? J.isActive : null; pt === !1 && (B = G); const dt = X && rt === void 0 && !(x && v); if (J.protectedKeys = { ...D }, !J.isActive && pt === null || !V && !J.prevProp || wo(V) || typeof V == "boolean")
    return; if (k === "exit" && J.isActive && pt !== !0) {
    D = { ...D, ...J.prevResolvedValues };
    return;
} const P = PS(J.prevProp, V); let Z = P || X && (pt && !dt || G > B), tt = !1; const $ = Array.isArray(V) ? V : [V]; let at = {}; if (pt !== !1)
    for (const H of $) {
        const { transition: W, transitionEnd: I, ...et } = Ca(a, H, ug(a, k)) || {};
        at = { ...at, ...et, ...I };
    } const { prevResolvedValues: C } = J; for (const H in { ...C, ...at }) {
    if (H in D)
        continue;
    const W = at[H], I = C[H], et = Array.isArray(W) && Array.isArray(I) ? !Og(W, I) || P : W !== I;
    if (et && W == null)
        R.add(H);
    else if (et || W !== void 0 && R.has(H)) {
        Z = !0, R.delete(H) && (tt = !0), J.needsAnimating[H] = !0;
        const A = a.getValue(H);
        A && (A.liveStyle = !1);
    }
    else
        J.protectedKeys[H] = !0;
} if (J.prevProp = V, J.prevResolvedValues = at, J.isActive && (D = { ...D, ...at }), Z && (!(dt && P) || tt))
    for (const H of $) {
        const W = { type: k };
        if (typeof H == "string" && x && v && p?.enteringChildren) {
            const I = Ca(p, H)?.transition?.delayChildren;
            W.delay = ig(p.enteringChildren, a, I);
        }
        S.push({ animation: H, options: W });
    } }), R.size) {
    const { initial: k } = y, G = {}, J = typeof k != "boolean" && Ca(a, Array.isArray(k) ? k[0] : k, a.presenceContext?.custom);
    J && J.transition && (G.transition = J.transition), R.forEach(rt => { const ft = a.getValue(rt); ft && (ft.liveStyle = !0); const V = J && !Array.isArray(k) ? J[rt] : void 0, X = a.getBaseTargetFromProps(y, rt); G[rt] = (V !== void 0 ? V : X !== void 0 && !ue(X) ? X : a.initialValues[rt] === void 0 ? a.baseTarget[rt] : void 0) ?? null; }), S.push({ animation: G });
} const K = x && a.blockInitialAnimation || o && !v && (y.initial === !1 || y.initial === y.animate); return o = c = !1, !K && S.length ? i(S) : Promise.resolve(); } function h(m, y) { if (s[m].isActive === y)
    return Promise.resolve(); a.variantChildren?.forEach(v => v.animationState?.setActive(m, y)), s[m].isActive = y; const p = f(m); for (const v in s)
    s[v].protectedKeys = {}; return p; } return { animateChanges: f, setActive: h, setAnimateFunction: m => { i = m(a); }, getState: () => s, reset: () => { s = zy(), c = !0; } }; }
function PS(a, i) { return typeof i == "string" ? i !== a : Array.isArray(i) ? !Og(i, a) : !1; }
function zy() { const a = {}; for (const i of Vf)
    a[i] = { isActive: i === "animate", protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} }; return a; }
function Ic(a, i) { a.min = i.min, a.max = i.max; }
function Qe(a, i) { Ic(a.x, i.x), Ic(a.y, i.y); }
function Ry(a, i) { a.translate = i.translate, a.scale = i.scale, a.originPoint = i.originPoint, a.origin = i.origin; }
const Vg = 1e-4, WS = 1 - Vg, $S = 1 + Vg, _g = .01, IS = 0 - _g, tT = 0 + _g;
function fe(a) { return a.max - a.min; }
function eT(a, i, s) { return Math.abs(a - i) <= s; }
function wy(a, i, s, o = .5) { a.origin = o, a.originPoint = Rt(i.min, i.max, a.origin), a.scale = fe(s) / fe(i), a.translate = Rt(s.min, s.max, a.origin) - a.originPoint, (a.scale >= WS && a.scale <= $S || isNaN(a.scale)) && (a.scale = 1), (a.translate >= IS && a.translate <= tT || isNaN(a.translate)) && (a.translate = 0); }
function bl(a, i, s, o) { wy(a.x, i.x, s.x, o ? o.originX : void 0), wy(a.y, i.y, s.y, o ? o.originY : void 0); }
function Ny(a, i, s, o = 0) { const c = o ? Rt(s.min, s.max, o) : s.min; a.min = c + i.min, a.max = a.min + fe(i); }
function nT(a, i, s, o) { Ny(a.x, i.x, s.x, o?.x), Ny(a.y, i.y, s.y, o?.y); }
function Oy(a, i, s, o = 0) { const c = o ? Rt(s.min, s.max, o) : s.min; a.min = i.min - c, a.max = a.min + fe(i); }
function Mo(a, i, s, o) { Oy(a.x, i.x, s.x, o?.x), Oy(a.y, i.y, s.y, o?.y); }
function Vy(a, i, s, o, c) { return a -= i, a = Ao(a, 1 / s, o), c !== void 0 && (a = Ao(a, 1 / c, o)), a; }
function aT(a, i = 0, s = 1, o = .5, c, f = a, h = a) { if (en.test(i) && (i = parseFloat(i), i = Rt(h.min, h.max, i / 100) - h.min), typeof i != "number")
    return; let m = Rt(f.min, f.max, o); a === f && (m -= i), a.min = Vy(a.min, i, s, m, c), a.max = Vy(a.max, i, s, m, c); }
function _y(a, i, [s, o, c], f, h) { aT(a, i[s], i[o], i[c], i.scale, f, h); }
const iT = ["x", "scaleX", "originX"], lT = ["y", "scaleY", "originY"];
function By(a, i, s, o) { _y(a.x, i, iT, s ? s.x : void 0, o ? o.x : void 0), _y(a.y, i, lT, s ? s.y : void 0, o ? o.y : void 0); }
function Uy(a) { return a.translate === 0 && a.scale === 1; }
function Bg(a) { return Uy(a.x) && Uy(a.y); }
function Ly(a, i) { return a.min === i.min && a.max === i.max; }
function sT(a, i) { return Ly(a.x, i.x) && Ly(a.y, i.y); }
function Hy(a, i) { return Math.round(a.min) === Math.round(i.min) && Math.round(a.max) === Math.round(i.max); }
function Ug(a, i) { return Hy(a.x, i.x) && Hy(a.y, i.y); }
function qy(a) { return fe(a.x) / fe(a.y); }
function Yy(a, i) { return a.translate === i.translate && a.scale === i.scale && a.originPoint === i.originPoint; }
function Je(a) { return [a("x"), a("y")]; }
function Gy(a, i) { return i.max === i.min ? 0 : a / (i.max - i.min) * 100; }
const vl = { correct: (a, i) => { if (!i.target)
        return a; if (typeof a == "string")
        if (lt.test(a))
            a = parseFloat(a);
        else
            return a; const s = Gy(a, i.target.x), o = Gy(a, i.target.y); return `${s}% ${o}%`; } }, oT = { correct: (a, { treeScale: i, projectionDelta: s }) => { const o = a, c = we.parse(a); if (c.length > 5)
        return o; const f = we.createTransformer(a), h = typeof c[0] != "number" ? 1 : 0, m = s.x.scale * i.x, y = s.y.scale * i.y; c[0 + h] /= m, c[1 + h] /= y; const p = Rt(m, y, .5); return typeof c[2 + h] == "number" && (c[2 + h] /= p), typeof c[3 + h] == "number" && (c[3 + h] /= p), f(c); } };
function uT(a, i, s) { let o = ""; const c = a.x.translate / i.x, f = a.y.translate / i.y, h = s?.z || 0; if ((c || f || h) && (o = `translate3d(${c}px, ${f}px, ${h}px) `), (i.x !== 1 || i.y !== 1) && (o += `scale(${1 / i.x}, ${1 / i.y}) `), s) {
    const { transformPerspective: p, rotate: v, pathRotation: x, rotateX: S, rotateY: R, skewX: D, skewY: B } = s;
    p && (o = `perspective(${p}px) ${o}`), v && (o += `rotate(${v}deg) `), x && (o += `rotate(${x}deg) `), S && (o += `rotateX(${S}deg) `), R && (o += `rotateY(${R}deg) `), D && (o += `skewX(${D}deg) `), B && (o += `skewY(${B}deg) `);
} const m = a.x.scale * i.x, y = a.y.scale * i.y; return (m !== 1 || y !== 1) && (o += `scale(${m}, ${y})`), o || "none"; }
const rT = zf.length, Xy = a => typeof a == "number" || lt.test(a);
function cT(a, i, s, o, c, f) { c ? (a.opacity = Rt(0, s.opacity ?? 1, fT(o)), a.opacityExit = Rt(i.opacity ?? 1, 0, hT(o))) : f && (a.opacity = Rt(i.opacity ?? 1, s.opacity ?? 1, o)); for (let h = 0; h < rT; h++) {
    const m = zf[h];
    let y = ky(i, m), p = ky(s, m);
    if (y === void 0 && p === void 0)
        continue;
    y || (y = 0), p || (p = 0), y === 0 || p === 0 || Xy(y) === Xy(p) ? (a[m] = Math.max(Rt(Ey(y), Ey(p), o), 0), (en.test(p) || en.test(y)) && (a[m] += "%")) : a[m] = p;
} (i.rotate || s.rotate) && (a.rotate = Rt(i.rotate || 0, s.rotate || 0, o)); }
function ky(a, i) { return a[i] !== void 0 ? a[i] : a.borderRadius; }
const fT = Lg(0, .5, E0), hT = Lg(.5, .95, Pe);
function Lg(a, i, s) { return o => o < a ? 0 : o > i ? 1 : s(ja(a, i, o)); }
function dT(a, i, s) { const o = ue(a) ? a : Si(a); return o.start(Cf("", o, i, s)), o.animation; }
function wl(a, i, s, o = { passive: !0 }) { return a.addEventListener(i, s, o), () => a.removeEventListener(i, s, o); }
const mT = (a, i) => a.depth - i.depth;
class pT {
    constructor() { this.children = [], this.isDirty = !1; }
    add(i) { uf(this.children, i), this.isDirty = !0; }
    remove(i) { yo(this.children, i), this.isDirty = !0; }
    forEach(i) { this.isDirty && this.children.sort(mT), this.isDirty = !1, this.children.forEach(i); }
}
function yT(a, i) { const s = Ht.now(), o = ({ timestamp: c }) => { const f = c - s; f >= i && (ta(o), a(f - i)); }; return Vt.setup(o, !0), () => ta(o); }
function mo(a) { return ue(a) ? a.get() : a; }
class gT {
    constructor() { this.members = []; }
    add(i) { uf(this.members, i); for (let s = this.members.length - 1; s >= 0; s--) {
        const o = this.members[s];
        if (o === i || o === this.lead || o === this.prevLead)
            continue;
        const c = o.instance;
        (!c || c.isConnected === !1) && !o.snapshot && (yo(this.members, o), o.unmount());
    } i.scheduleRender(); }
    remove(i) { if (yo(this.members, i), i === this.prevLead && (this.prevLead = void 0), i === this.lead) {
        const s = this.members[this.members.length - 1];
        s && this.promote(s);
    } }
    relegate(i) { for (let s = this.members.indexOf(i) - 1; s >= 0; s--) {
        const o = this.members[s];
        if (o.isPresent !== !1 && o.instance?.isConnected !== !1)
            return this.promote(o), !0;
    } return !1; }
    promote(i, s) { const o = this.lead; if (i !== o && (this.prevLead = o, this.lead = i, i.show(), o)) {
        o.updateSnapshot(), i.scheduleRender();
        const { layoutDependency: c } = o.options, { layoutDependency: f } = i.options;
        (c === void 0 || c !== f) && (i.resumeFrom = o, s && (o.preserveOpacity = !0), o.snapshot && (i.snapshot = o.snapshot, i.snapshot.latestValues = o.animationValues || o.latestValues), i.root?.isUpdating && (i.isLayoutDirty = !0)), i.options.crossfade === !1 && o.hide();
    } }
    exitAnimationComplete() { this.members.forEach(i => { i.options.onExitComplete?.(), i.resumingFrom?.options.onExitComplete?.(); }); }
    scheduleRender() { this.members.forEach(i => i.instance && i.scheduleRender(!1)); }
    removeLeadSnapshot() { this.lead?.snapshot && (this.lead.snapshot = void 0); }
}
const vT = { borderRadius: { ...vl, applyTo: [...zf] }, borderTopLeftRadius: vl, borderTopRightRadius: vl, borderBottomLeftRadius: vl, borderBottomRightRadius: vl, boxShadow: oT }, po = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
Object.assign(Rl, { ...vT, ...Rl });
const xc = ["", "X", "Y", "Z"], xT = 1e3;
let bT = 0;
function bc(a, i, s, o) { const { latestValues: c } = i; c[a] && (s[a] = c[a], i.setStaticValue(a, 0), o && (o[a] = 0)); }
const Sc = ({ instance: a }) => a && bi.get(a)?.demote();
function Hg(a) { if (a.hasCheckedOptimisedAppear = !0, a.root === a)
    return; const { visualElement: i } = a.options; if (!i)
    return; const s = fg(i); if (window.MotionHasOptimisedAnimation(s, "transform")) {
    const { layout: c, layoutId: f } = a.options;
    window.MotionCancelOptimisedAnimation(s, "transform", Vt, !(c || f));
} const { parent: o } = a; o && !o.hasCheckedOptimisedAppear && Hg(o); }
function qg({ attachResizeListener: a, defaultParent: i, measureScroll: s, checkIsScrollRoot: o, resetTransform: c }) { return class {
    constructor(h = {}, m = i?.()) { this.id = bT++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => { this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots()); }, this.updateProjection = () => { this.projectionUpdateScheduled = !1, this.nodes.forEach(AT), this.nodes.forEach(wT), this.nodes.forEach(NT), this.nodes.forEach(ET); }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = h, this.root = m ? m.root || m : this, this.path = m ? [...m.path, m] : [], this.parent = m, this.depth = m ? m.depth + 1 : 0; for (let y = 0; y < this.path.length; y++)
        this.path[y].shouldResetTransform = !0; this.root === this && (this.nodes = new pT); }
    addEventListener(h, m) { return this.eventHandlers.has(h) || this.eventHandlers.set(h, new go), this.eventHandlers.get(h).add(m); }
    notifyListeners(h, ...m) { const y = this.eventHandlers.get(h); y && y.notify(...m); }
    hasListeners(h) { return this.eventHandlers.has(h); }
    mount(h) { if (this.instance)
        return; this.isSVG = Rf(h) && !US(h), this.instance = h; const { layoutId: m, layout: y, visualElement: p } = this.options; if (p && !p.current && p.mount(h), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (y || m) && (this.isLayoutDirty = !0), a) {
        let v, x = 0;
        const S = () => this.root.updateBlockedByResize = !1;
        Vt.read(() => { x = window.innerWidth; }), a(h, () => { const R = window.innerWidth; R !== x && (x = R, this.root.updateBlockedByResize = !0, v && v(), v = yT(S, 250), po.hasAnimatedSinceResize && (po.hasAnimatedSinceResize = !1, this.nodes.forEach(Ky))); });
    } m && this.root.registerSharedNode(m, this), this.options.animate !== !1 && p && (m || y) && this.addEventListener("didUpdate", ({ delta: v, hasLayoutChanged: x, hasRelativeLayoutChanged: S, layout: R }) => { if (this.isAnimationBlocked) {
        this.target = void 0, this.relativeTarget = void 0;
        return;
    } const D = this.options.transition || p.getDefaultTransition() || UT, { onLayoutAnimationStart: B, onLayoutAnimationComplete: _ } = p.getProps(), K = !this.targetLayout || !Ug(this.targetLayout, R), k = !x && S; if (this.options.layoutRoot || this.resumeFrom || k || x && (K || !this.currentAnimation)) {
        this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
        const G = { ...Df(D, "layout"), onPlay: B, onComplete: _ };
        (p.shouldReduceMotion || this.options.layoutRoot) && (G.delay = 0, G.type = !1), this.startAnimation(G), this.setAnimationOrigin(v, k, G.path);
    }
    else
        x || Ky(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete(); this.targetLayout = R; }); }
    unmount() { this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this); const h = this.getStack(); h && h.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), ta(this.updateProjection); }
    blockUpdate() { this.updateManuallyBlocked = !0; }
    unblockUpdate() { this.updateManuallyBlocked = !1; }
    isUpdateBlocked() { return this.updateManuallyBlocked || this.updateBlockedByResize; }
    startUpdate() { this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(OT), this.animationId++); }
    getTransformTemplate() { const { visualElement: h } = this.options; return h && h.getProps().transformTemplate; }
    willUpdate(h = !0) { if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
    } if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Hg(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return; Sc(this), this.isLayoutDirty = !0; for (let v = 0; v < this.path.length; v++) {
        const x = this.path[v];
        x.shouldResetTransform = !0, Sc(x), (typeof x.latestValues.x == "string" || typeof x.latestValues.y == "string") && (x.isLayoutDirty = !0), x.updateScroll("snapshot"), x.options.layoutRoot && x.willUpdate(!1), x.isAnimationBlocked && (x.dragSnapshot || (x.dragSnapshot = x.measure()), this.dragAncestor = x);
    } const { layoutId: m, layout: y } = this.options; if (m === void 0 && !y)
        return; const p = this.getTransformTemplate(); this.prevTransformTemplateValue = p ? p(this.latestValues, "") : void 0, this.updateSnapshot(), h && this.notifyListeners("willUpdate"); }
    update() { if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        const y = this.updateBlockedByResize;
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), y && this.nodes.forEach(DT), this.nodes.forEach(Zy);
        return;
    } if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Qy);
        return;
    } this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(jT), this.nodes.forEach(zT), this.nodes.forEach(RT), this.nodes.forEach(ST), this.nodes.forEach(TT)) : this.nodes.forEach(Qy), this.clearAllSnapshots(); const m = Ht.now(); Ft.delta = an(0, 1e3 / 60, m - Ft.timestamp), Ft.timestamp = m, Ft.isProcessing = !0, fc.update.process(Ft), fc.preRender.process(Ft), fc.render.process(Ft), Ft.isProcessing = !1; }
    didUpdate() { this.updateScheduled || (this.updateScheduled = !0, Nf.read(this.scheduleUpdate)); }
    clearAllSnapshots() { this.nodes.forEach(MT), this.sharedNodes.forEach(VT); }
    scheduleUpdateProjection() { this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Vt.preRender(this.updateProjection, !1, !0)); }
    scheduleCheckAfterUnmount() { Vt.postRender(() => { this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed(); }); }
    updateSnapshot() { this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !fe(this.snapshot.measuredBox.x) && !fe(this.snapshot.measuredBox.y) && (this.snapshot = void 0)); }
    updateLayout() { if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return; if (this.resumeFrom && !this.resumeFrom.instance)
        for (let y = 0; y < this.path.length; y++)
            this.path[y].updateScroll(); const h = this.layout; this.layout = this.measure(!1), this.layoutCorrected || (this.layoutCorrected = Wt()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox); const { visualElement: m } = this.options; m && m.notify("LayoutMeasure", this.layout.layoutBox, h ? h.layoutBox : void 0); }
    updateScroll(h = "measure") { let m = !!(this.options.layoutScroll && this.instance); if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === h && (m = !1), m && this.instance) {
        const y = o(this.instance);
        this.scroll = { animationId: this.root.animationId, phase: h, isRoot: y, offset: s(this.instance), wasRoot: this.scroll ? this.scroll.isRoot : y };
    } }
    resetTransform() { if (!c)
        return; const h = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout; h && Sc(this); const m = this.projectionDelta && !Bg(this.projectionDelta), y = this.getTransformTemplate(), p = y ? y(this.latestValues, "") : void 0, v = p !== this.prevTransformTemplateValue; h && this.instance && (m || Ta(this.latestValues) || v) && (c(this.instance, p), this.shouldResetTransform = !1, this.scheduleRender()); }
    measure(h = !0) { const m = this.measurePageBox(); let y = this.removeElementScroll(m); return h && (y = this.removeTransform(y)), LT(y), { animationId: this.root.animationId, measuredBox: m, layoutBox: y, latestValues: {}, source: this.id }; }
    measurePageBox() { const { visualElement: h } = this.options; if (!h)
        return Wt(); const m = h.measureViewportBox(); if (!(this.scroll?.wasRoot || this.path.some(HT))) {
        const { scroll: p } = this.root;
        p && (Fe(m.x, p.offset.x), Fe(m.y, p.offset.y));
    } return m; }
    removeElementScroll(h) { const m = Wt(); if (Qe(m, h), this.scroll?.wasRoot)
        return m; for (let y = 0; y < this.path.length; y++) {
        const p = this.path[y], { scroll: v, options: x } = p;
        p !== this.root && v && x.layoutScroll && (v.wasRoot && Qe(m, h), Fe(m.x, v.offset.x), Fe(m.y, v.offset.y));
    } return m; }
    applyTransform(h, m = !1, y) { const p = y || Wt(); Qe(p, h); for (let v = 0; v < this.path.length; v++) {
        const x = this.path[v];
        !m && x.options.layoutScroll && x.scroll && x !== x.root && (Fe(p.x, -x.scroll.offset.x), Fe(p.y, -x.scroll.offset.y)), Ta(x.latestValues) && uo(p, x.latestValues, x.layout?.layoutBox);
    } return Ta(this.latestValues) && uo(p, this.latestValues, this.layout?.layoutBox), p; }
    removeTransform(h) { const m = Wt(); Qe(m, h); for (let y = 0; y < this.path.length; y++) {
        const p = this.path[y];
        if (!Ta(p.latestValues))
            continue;
        let v;
        p.instance && (Pc(p.latestValues) && p.updateSnapshot(), v = Wt(), Qe(v, p.measurePageBox())), By(m, p.latestValues, p.snapshot?.layoutBox, v);
    } return Ta(this.latestValues) && By(m, this.latestValues), m; }
    setTargetDelta(h) { this.targetDelta = h, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0; }
    setOptions(h) { this.options = { ...this.options, ...h, crossfade: h.crossfade !== void 0 ? h.crossfade : !0 }; }
    clearMeasurements() { this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1; }
    forceRelativeParentToResolveTarget() { this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ft.timestamp && this.relativeParent.resolveTargetDelta(!0); }
    resolveTargetDelta(h = !1) { const m = this.getLead(); this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = m.isSharedProjectionDirty); const y = !!this.resumingFrom || this !== m; if (!(h || y && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return; const { layout: v, layoutId: x } = this.options; if (!this.layout || !(v || x))
        return; this.resolvedRelativeTargetAt = Ft.timestamp; const S = this.getClosestProjectingParent(); !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && S && S.layout ? this.createRelativeTarget(S, this.layout.layoutBox, S.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Wt(), this.targetWithTransforms = Wt()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), nT(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Qe(this.target, this.layout.layoutBox), vg(this.target, this.targetDelta)) : Qe(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && S && !!S.resumingFrom == !!this.resumingFrom && !S.options.layoutScroll && S.target && this.animationProgress !== 1 ? this.createRelativeTarget(S, this.target, S.target) : this.relativeParent = this.relativeTarget = void 0)); }
    getClosestProjectingParent() { if (!(!this.parent || Pc(this.parent.latestValues) || gg(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent(); }
    isProjecting() { return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout); }
    createRelativeTarget(h, m, y) { this.relativeParent = h, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Wt(), this.relativeTargetOrigin = Wt(), Mo(this.relativeTargetOrigin, m, y, this.options.layoutAnchor || void 0), Qe(this.relativeTarget, this.relativeTargetOrigin); }
    removeRelativeTarget() { this.relativeParent = this.relativeTarget = void 0; }
    calcProjection() { const h = this.getLead(), m = !!this.resumingFrom || this !== h; let y = !0; if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (y = !1), m && (this.isSharedProjectionDirty || this.isTransformDirty) && (y = !1), this.resolvedRelativeTargetAt === Ft.timestamp && (y = !1), y)
        return; const { layout: p, layoutId: v } = this.options; if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(p || v))
        return; Qe(this.layoutCorrected, this.layout.layoutBox); const x = this.treeScale.x, S = this.treeScale.y; vS(this.layoutCorrected, this.treeScale, this.path, m), h.layout && !h.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (h.target = h.layout.layoutBox, h.targetWithTransforms = Wt()); const { target: R } = h; if (!R) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
    } !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Ry(this.prevProjectionDelta.x, this.projectionDelta.x), Ry(this.prevProjectionDelta.y, this.projectionDelta.y)), bl(this.projectionDelta, this.layoutCorrected, R, this.latestValues), (this.treeScale.x !== x || this.treeScale.y !== S || !Yy(this.projectionDelta.x, this.prevProjectionDelta.x) || !Yy(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", R)); }
    hide() { this.isVisible = !1; }
    show() { this.isVisible = !0; }
    scheduleRender(h = !0) { if (this.options.visualElement?.scheduleRender(), h) {
        const m = this.getStack();
        m && m.scheduleRender();
    } this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0); }
    createProjectionDeltas() { this.prevProjectionDelta = vi(), this.projectionDelta = vi(), this.projectionDeltaWithTransform = vi(); }
    setAnimationOrigin(h, m = !1, y) { const p = this.snapshot, v = p ? p.latestValues : {}, x = { ...this.latestValues }, S = vi(); (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !m; const R = Wt(), D = p ? p.source : void 0, B = this.layout ? this.layout.source : void 0, _ = D !== B, K = this.getStack(), k = !K || K.members.length <= 1, G = !!(_ && !k && this.options.crossfade === !0 && !this.path.some(BT)); this.animationProgress = 0; let J; const rt = y?.interpolateProjection(h); this.mixTargetDelta = ft => { const V = ft / 1e3, X = rt?.(V); X ? (S.x.translate = X.x, S.x.scale = Rt(h.x.scale, 1, V), S.x.origin = h.x.origin, S.x.originPoint = h.x.originPoint, S.y.translate = X.y, S.y.scale = Rt(h.y.scale, 1, V), S.y.origin = h.y.origin, S.y.originPoint = h.y.originPoint) : (Jy(S.x, h.x, V), Jy(S.y, h.y, V)), this.setTargetDelta(S), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Mo(R, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), _T(this.relativeTarget, this.relativeTargetOrigin, R, V), J && sT(this.relativeTarget, J) && (this.isProjectionDirty = !1), J || (J = Wt()), Qe(J, this.relativeTarget)), _ && (this.animationValues = x, cT(x, v, this.latestValues, V, G, k)), X && X.rotate !== void 0 && (this.animationValues || (this.animationValues = x), this.animationValues.pathRotation = X.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = V; }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0); }
    startAnimation(h) { this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (ta(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Vt.update(() => { po.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Si(0)), this.motionValue.jump(0, !1), this.currentAnimation = dT(this.motionValue, [0, 1e3], { ...h, velocity: 0, isSync: !0, onUpdate: m => { this.mixTargetDelta(m), h.onUpdate && h.onUpdate(m); }, onComplete: () => { h.onComplete && h.onComplete(), this.completeAnimation(); } }), P2(this.currentAnimation, this), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0; }); }
    completeAnimation() { this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0); const h = this.getStack(); h && h.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete"); }
    finishAnimation() { this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(xT), this.currentAnimation.stop()), this.completeAnimation(); }
    applyTransformsToTarget() { const h = this.getLead(), { targetWithTransforms: m, layout: y, latestValues: p } = h; let { target: v } = h; if (!(!m || !v || !y)) {
        if (this !== h && this.layout && y && Yg(this.options.animationType, this.layout.layoutBox, y.layoutBox)) {
            v = this.target || Wt();
            const x = fe(this.layout.layoutBox.x);
            v.x.min = h.target.x.min, v.x.max = v.x.min + x;
            const S = fe(this.layout.layoutBox.y);
            v.y.min = h.target.y.min, v.y.max = v.y.min + S;
        }
        Qe(m, v), uo(m, p), bl(this.projectionDeltaWithTransform, this.layoutCorrected, m, p);
    } }
    registerSharedNode(h, m) { this.sharedNodes.has(h) || this.sharedNodes.set(h, new gT), this.sharedNodes.get(h).add(m); const p = m.options.initialPromotionConfig; m.promote({ transition: p ? p.transition : void 0, preserveFollowOpacity: p && p.shouldPreserveFollowOpacity ? p.shouldPreserveFollowOpacity(m) : void 0 }); }
    isLead() { const h = this.getStack(); return h ? h.lead === this : !0; }
    getLead() { const { layoutId: h } = this.options; return h ? this.getStack()?.lead || this : this; }
    getPrevLead() { const { layoutId: h } = this.options; return h ? this.getStack()?.prevLead : void 0; }
    getStack() { const { layoutId: h } = this.options; if (h)
        return this.root.sharedNodes.get(h); }
    promote({ needsReset: h, transition: m, preserveFollowOpacity: y } = {}) { const p = this.getStack(); p && p.promote(this, y), h && (this.projectionDelta = void 0, this.needsReset = !0), m && this.setOptions({ transition: m }); }
    relegate() { const h = this.getStack(); return h ? h.relegate(this) : !1; }
    resetSkewAndRotation() { const { visualElement: h } = this.options; if (!h)
        return; let m = !1; const { latestValues: y } = h; if ((y.z || y.rotate || y.rotateX || y.rotateY || y.rotateZ || y.skewX || y.skewY) && (m = !0), !m)
        return; const p = {}; y.z && bc("z", h, p, this.animationValues); for (let v = 0; v < xc.length; v++)
        bc(`rotate${xc[v]}`, h, p, this.animationValues), bc(`skew${xc[v]}`, h, p, this.animationValues); h.render(); for (const v in p)
        h.setStaticValue(v, p[v]), this.animationValues && (this.animationValues[v] = p[v]); h.scheduleRender(); }
    applyProjectionStyles(h, m) { if (!this.instance || this.isSVG)
        return; if (!this.isVisible) {
        h.visibility = "hidden";
        return;
    } const y = this.getTransformTemplate(); if (this.needsReset) {
        this.needsReset = !1, h.visibility = "", h.opacity = "", h.pointerEvents = mo(m?.pointerEvents) || "", h.transform = y ? y(this.latestValues, "") : "none";
        return;
    } const p = this.getLead(); if (!this.projectionDelta || !this.layout || !p.target) {
        this.options.layoutId && (h.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, h.pointerEvents = mo(m?.pointerEvents) || ""), this.hasProjected && !Ta(this.latestValues) && (h.transform = y ? y({}, "") : "none", this.hasProjected = !1);
        return;
    } h.visibility = ""; const v = p.animationValues || p.latestValues; this.applyTransformsToTarget(); let x = uT(this.projectionDeltaWithTransform, this.treeScale, v); y && (x = y(v, x)), h.transform = x; const { x: S, y: R } = this.projectionDelta; h.transformOrigin = `${S.origin * 100}% ${R.origin * 100}% 0`, p.animationValues ? h.opacity = p === this ? v.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : v.opacityExit : h.opacity = p === this ? v.opacity !== void 0 ? v.opacity : "" : v.opacityExit !== void 0 ? v.opacityExit : 0; for (const D in Rl) {
        if (v[D] === void 0)
            continue;
        const { correct: B, applyTo: _, isCSSVariable: K } = Rl[D], k = x === "none" ? v[D] : B(v[D], p);
        if (_) {
            const G = _.length;
            for (let J = 0; J < G; J++)
                h[_[J]] = k;
        }
        else
            K ? this.options.visualElement.renderState.vars[D] = k : h[D] = k;
    } this.options.layoutId && (h.pointerEvents = p === this ? mo(m?.pointerEvents) || "" : "none"); }
    clearSnapshot() { this.resumeFrom = this.snapshot = this.dragSnapshot = this.dragAncestor = void 0; }
    resetTree() { this.root.nodes.forEach(h => h.currentAnimation?.stop()), this.root.nodes.forEach(Zy), this.root.sharedNodes.clear(); }
}; }
function ST(a) { a.updateLayout(), CT(a); }
function TT(a) { const i = a.resumeFrom?.snapshot || a.snapshot; if (a.isLead() && a.layout && i && a.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: o } = a.layout, { animationType: c } = a.options, f = i.source !== a.layout.source;
    if (c === "size")
        Je(v => { const x = f ? i.measuredBox[v] : i.layoutBox[v], S = fe(x); x.min = s[v].min, x.max = x.min + S; });
    else if (c === "x" || c === "y") {
        const v = c === "x" ? "y" : "x";
        Ic(f ? i.measuredBox[v] : i.layoutBox[v], s[v]);
    }
    else
        Yg(c, i.layoutBox, s) && Je(v => { const x = f ? i.measuredBox[v] : i.layoutBox[v], S = fe(s[v]); x.max = x.min + S, a.relativeTarget && !a.currentAnimation && (a.isProjectionDirty = !0, a.relativeTarget[v].max = a.relativeTarget[v].min + S); });
    const h = vi();
    bl(h, s, i.layoutBox);
    const m = vi();
    f ? bl(m, a.applyTransform(o, !0), i.measuredBox) : bl(m, s, i.layoutBox);
    const y = !Bg(h);
    let p = !1;
    if (!a.resumeFrom) {
        const v = a.getClosestProjectingParent();
        if (v && !v.resumeFrom) {
            const { snapshot: x, layout: S } = v;
            if (x && S) {
                const R = a.options.layoutAnchor || void 0, D = Wt();
                Mo(D, i.layoutBox, x.layoutBox, R);
                const B = Wt();
                Mo(B, s, S.layoutBox, R), Ug(D, B) || (p = !0), v.options.layoutRoot && (a.relativeTarget = B, a.relativeTargetOrigin = D, a.relativeParent = v);
            }
        }
    }
    a.notifyListeners("didUpdate", { layout: s, snapshot: i, delta: m, layoutDelta: h, hasLayoutChanged: y, hasRelativeLayoutChanged: p });
}
else if (a.isLead()) {
    const { onExitComplete: s } = a.options;
    s && s();
} a.options.transition = void 0; }
function AT(a) { a.parent && (a.isProjecting() || (a.isProjectionDirty = a.parent.isProjectionDirty), a.isSharedProjectionDirty || (a.isSharedProjectionDirty = !!(a.isProjectionDirty || a.parent.isProjectionDirty || a.parent.isSharedProjectionDirty)), a.isTransformDirty || (a.isTransformDirty = a.parent.isTransformDirty)); }
function ET(a) { a.isProjectionDirty = a.isSharedProjectionDirty = a.isTransformDirty = !1; }
function MT(a) { a.clearSnapshot(); }
function Zy(a) { a.clearMeasurements(); }
function DT(a) { a.isLayoutDirty = !0, a.updateLayout(); }
function Qy(a) { a.isLayoutDirty = !1; }
function CT(a) { const { snapshot: i, dragAncestor: s } = a, o = s?.layout; if (!i || !o || a.resumeFrom || a.isAnimationBlocked)
    return; const c = s.dragSnapshot; Je(f => Fe(i.layoutBox[f], o.layoutBox[f].min - c.layoutBox[f].min)); }
function jT(a) { a.isAnimationBlocked && a.layout && !a.isLayoutDirty && (a.snapshot = a.dragSnapshot || a.layout, a.isLayoutDirty = !0); }
function zT(a) { a.relativeTarget && a.relativeParent?.isLayoutDirty && (a.currentAnimation ? a.isLayoutDirty = !0 : (a.targetDelta = void 0, a.removeRelativeTarget())); }
function RT(a) { const { visualElement: i } = a.options; i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"), a.resetTransform(); }
function Ky(a) { a.finishAnimation(), a.targetDelta = a.relativeTarget = a.target = void 0, a.isProjectionDirty = !0; }
function wT(a) { a.resolveTargetDelta(); }
function NT(a) { a.calcProjection(); }
function OT(a) { a.resetSkewAndRotation(); }
function VT(a) { a.removeLeadSnapshot(); }
function Jy(a, i, s) { a.translate = Rt(i.translate, 0, s), a.scale = Rt(i.scale, 1, s), a.origin = i.origin, a.originPoint = i.originPoint; }
function Fy(a, i, s, o) { a.min = Rt(i.min, s.min, o), a.max = Rt(i.max, s.max, o); }
function _T(a, i, s, o) { Fy(a.x, i.x, s.x, o), Fy(a.y, i.y, s.y, o); }
function BT(a) { return a.animationValues && a.animationValues.opacityExit !== void 0; }
const UT = { duration: .45, ease: [.4, 0, .1, 1] }, Py = a => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(a), Wy = Py("applewebkit/") && !Py("chrome/") ? Math.round : Pe;
function $y(a) { a.min = Wy(a.min), a.max = Wy(a.max); }
function LT(a) { $y(a.x), $y(a.y); }
function Yg(a, i, s) { return a === "position" || a === "preserve-aspect" && !eT(qy(i), qy(s), .2); }
function HT(a) { return a !== a.root && a.scroll?.wasRoot; }
const qT = qg({ attachResizeListener: (a, i) => wl(a, "resize", i), measureScroll: () => ({ x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0, y: document.documentElement.scrollTop || document.body?.scrollTop || 0 }), checkIsScrollRoot: () => !0 }), Tc = { current: void 0 }, Gg = qg({ measureScroll: a => ({ x: a.scrollLeft, y: a.scrollTop }), defaultParent: () => { if (!Tc.current) {
        const a = new qT({});
        a.mount(window), a.setOptions({ layoutScroll: !0 }), Tc.current = a;
    } return Tc.current; }, resetTransform: (a, i) => { a.style.transform = i !== void 0 ? i : "none"; }, checkIsScrollRoot: a => window.getComputedStyle(a).position === "fixed" }), Bf = Q.createContext({ transformPagePoint: a => a, isStatic: !1, reducedMotion: "never" });
function Iy(a, i) { if (typeof a == "function")
    return a(i); a != null && (a.current = i); }
function YT(...a) { return i => { let s = !1; const o = a.map(c => { const f = Iy(c, i); return !s && typeof f == "function" && (s = !0), f; }); if (s)
    return () => { for (let c = 0; c < o.length; c++) {
        const f = o[c];
        typeof f == "function" ? f() : Iy(a[c], null);
    } }; }; }
function GT(...a) { return Q.useCallback(YT(...a), a); }
class XT extends Q.Component {
    getSnapshotBeforeUpdate(i) { const s = this.props.childRef.current; if (oo(s) && i.isPresent && !this.props.isPresent && this.props.pop !== !1) {
        const o = s.offsetParent, c = oo(o) && o.offsetWidth || 0, f = oo(o) && o.offsetHeight || 0, h = getComputedStyle(s), m = this.props.sizeRef.current;
        m.height = parseFloat(h.height), m.width = parseFloat(h.width), m.top = s.offsetTop, m.left = s.offsetLeft, m.right = c - m.width - m.left, m.bottom = f - m.height - m.top, m.direction = h.direction;
    } return null; }
    componentDidUpdate() { }
    render() { return this.props.children; }
}
function kT({ children: a, isPresent: i, anchorX: s, anchorY: o, root: c, pop: f }) {
    const h = Q.useId(), m = Q.useRef(null), y = Q.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0, direction: "ltr" }), { nonce: p } = Q.useContext(Bf), v = f !== !1 ? a.props?.ref ?? a?.ref : void 0, x = GT(m, v);
    return Q.useInsertionEffect(() => {
        const { width: S, height: R, top: D, left: B, right: _, bottom: K, direction: k } = y.current;
        if (i || f === !1 || !m.current || !S || !R)
            return;
        const G = k === "rtl", J = s === "left" ? G ? `right: ${_}` : `left: ${B}` : G ? `left: ${B}` : `right: ${_}`, rt = o === "bottom" ? `bottom: ${K}` : `top: ${D}`, ft = m.current;
        ft.dataset.motionPopId = h;
        const V = ft.ownerDocument, X = V.createElement("style");
        p && (X.nonce = p);
        const pt = c ?? V.head;
        return pt.appendChild(X), X.sheet && X.sheet.insertRule(`
          [data-motion-pop-id="${h}"] {
            position: absolute !important;
            width: ${S}px !important;
            height: ${R}px !important;
            ${J}px !important;
            ${rt}px !important;
          }
        `), () => { m.current?.removeAttribute("data-motion-pop-id"), pt.contains(X) && pt.removeChild(X); };
    }, [i]), b.jsx(XT, { isPresent: i, childRef: m, sizeRef: y, pop: f, children: f === !1 ? a : Q.cloneElement(a, { ref: x }) });
}
const ZT = ({ children: a, initial: i, isPresent: s, onExitComplete: o, custom: c, presenceAffectsLayout: f, mode: h, anchorX: m, anchorY: y, root: p }) => { const v = of(QT), x = Q.useId(), S = Q.useRef(s), R = Q.useRef(o); Tl(() => { S.current = s, R.current = o; }); let D = !0, B = Q.useMemo(() => (D = !1, { id: x, initial: i, isPresent: s, custom: c, onExitComplete: _ => { v.set(_, !0); for (const K of v.values())
        if (!K)
            return; o && o(); }, register: _ => (v.set(_, !1), () => { v.delete(_), !S.current && !v.size && R.current?.(); }) }), [s, v, o]); return f && D && (B = { ...B }), Q.useMemo(() => { v.forEach((_, K) => v.set(K, !1)); }, [s]), Q.useEffect(() => { !s && !v.size && o && o(); }, [s]), a = b.jsx(kT, { pop: h === "popLayout", isPresent: s, anchorX: m, anchorY: y, root: p, children: a }), b.jsx(zo.Provider, { value: B, children: a }); };
function QT() { return new Map; }
function Xg(a = !0) { const i = Q.useContext(zo); if (i === null)
    return [!0, null]; const { isPresent: s, onExitComplete: o, register: c } = i, f = Q.useId(); Q.useEffect(() => { if (a)
    return c(f); }, [a]); const h = Q.useCallback(() => a && o && o(f), [f, o, a]); return !s && o ? [!1, h] : [!0]; }
const xl = a => a.key || "";
function t0(a) { const i = []; return Q.Children.forEach(a, s => { Q.isValidElement(s) && i.push(s); }), i; }
const Uf = ({ children: a, custom: i, initial: s = !0, onExitComplete: o, presenceAffectsLayout: c = !0, mode: f = "sync", propagate: h = !1, anchorX: m = "left", anchorY: y = "top", root: p }) => { const [v, x] = Xg(h), S = Q.useMemo(() => t0(a), [a]), R = h && !v ? [] : S.map(xl), D = Q.useRef(!0), B = of(() => new Map), _ = Q.useRef(new Set), [K, k] = Q.useState(S), [G, J] = Q.useState(S); Tl(() => { h && !v && !G.length && x?.(); }, [v, h, G.length, x]), Tl(() => { D.current = !1; for (let V = 0; V < G.length; V++) {
    const X = xl(G[V]);
    R.includes(X) ? (B.delete(X), _.current.delete(X)) : B.get(X) !== !0 && B.set(X, !1);
} }, [G, R.length, R.join("-")]); const rt = []; if (S !== K) {
    let V = [...S], X = 0;
    for (const pt of G) {
        const dt = R.indexOf(xl(pt));
        dt === -1 ? (V.splice(X++, 0, pt), rt.push(pt)) : X = dt + rt.length + 1;
    }
    return rt.every(pt => B.get(xl(pt))) ? V = S : f === "wait" && (V = rt), J(t0(V)), k(S), null;
} const { forceRender: ft } = Q.useContext(sf); return b.jsx(b.Fragment, { children: G.map(V => { const X = xl(V), pt = h && !v ? !1 : S === G || R.includes(X), dt = () => { if (_.current.has(X))
        return; if (B.has(X))
        _.current.add(X), B.set(X, !0);
    else
        return; let P = !0; B.forEach(Z => { Z || (P = !1); }), P && (ft?.(), k([]), h && x?.(), o && o()); }; return b.jsx(ZT, { isPresent: pt, initial: !D.current || s ? void 0 : !1, custom: i, presenceAffectsLayout: c, mode: f, root: p, onExitComplete: pt ? void 0 : dt, anchorX: m, anchorY: y, children: V }, X); }) }); }, kg = Q.createContext({ strict: !1 }), e0 = { animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"], exit: ["exit"], drag: ["drag", "dragControls"], focus: ["whileFocus"], hover: ["whileHover", "onHoverStart", "onHoverEnd"], tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"], pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"], inView: ["whileInView", "onViewportEnter", "onViewportLeave"], layout: ["layout", "layoutId"] };
let n0 = !1;
function KT() { if (n0)
    return; const a = {}; for (const i in e0)
    a[i] = { isEnabled: s => e0[i].some(o => !!s[o]) }; Dg(a), n0 = !0; }
function Zg() { return KT(), GS(); }
function JT(a) { const i = Zg(); for (const s in a)
    i[s] = { ...i[s], ...a[s] }; Dg(i); }
const Oo = Q.createContext({});
function FT(a, i) { if (No(a)) {
    const { initial: s, animate: o } = a;
    return { initial: s === !1 || zl(s) ? s : void 0, animate: zl(o) ? o : void 0 };
} return a.inherit !== !1 ? i : {}; }
function PT(a) { const { initial: i, animate: s } = FT(a, Q.useContext(Oo)); return Q.useMemo(() => ({ initial: i, animate: s }), [a0(i), a0(s)]); }
function a0(a) { return Array.isArray(a) ? a.join(" ") : a; }
const Lf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Qg(a, i, s) { for (const o in i)
    !ue(i[o]) && !zg(o, s) && (a[o] = i[o]); }
function WT({ transformTemplate: a }, i) { return Q.useMemo(() => { const s = Lf(); return wf(s, i, a), Object.assign({}, s.vars, s.style); }, [i]); }
function $T(a, i) { const s = a.style || {}, o = {}; return Qg(o, s, a), Object.assign(o, WT(a, i)), o; }
function IT(a, i) { const s = {}, o = $T(a, i); return a.drag && a.dragListener !== !1 && (s.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = a.drag === !0 ? "none" : `pan-${a.drag === "x" ? "y" : "x"}`), a.tabIndex === void 0 && (a.onTap || a.onTapStart || a.whileTap) && (s.tabIndex = 0), s.style = o, s; }
const Kg = () => ({ ...Lf(), attrs: {} });
function tA(a, i, s, o) { const c = Q.useMemo(() => { const f = Kg(); return pg(f, i, wg(o), a.transformTemplate, a.style), { ...f.attrs, style: { ...f.style } }; }, [i]); if (a.style) {
    const f = {};
    Qg(f, a.style, a), c.style = { ...f, ...c.style };
} return c; }
const eA = new Set(["animate", "exit", "variants", "initial", "style", "values", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);
function Do(a) { return a.startsWith("while") || a.startsWith("drag") && a !== "draggable" || a.startsWith("layout") || a.startsWith("onTap") || a.startsWith("onPan") || a.startsWith("onLayout") || eA.has(a); }
function nA(a, i) { return a.startsWith("on") ? !Do(a) : i?.(a) ?? !Do(a); }
function aA(a, i, s, o) { const c = {}; for (const f in a)
    f === "values" && typeof a.values == "object" || ue(a[f]) || (nA(f, o) || s === !0 && Do(f) || !i && !Do(f) || a.draggable && f.startsWith("onDrag")) && (c[f] = a[f]); return c; }
const iA = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Hf(a) { return typeof a != "string" || a.includes("-") ? !1 : !!(iA.indexOf(a) > -1 || /[A-Z]/u.test(a)); }
function lA(a, i, s, { latestValues: o }, c, f = !1, h, m) { const p = (h ?? Hf(a) ? tA : IT)(i, o, c, a), v = aA(i, typeof a == "string", f, m), x = a !== Q.Fragment ? { ...v, ...p, ref: s } : {}, { children: S } = i, R = Q.useMemo(() => ue(S) ? S.get() : S, [S]); return Q.createElement(a, { ...x, children: R }); }
function sA({ scrapeMotionValuesFromProps: a, createRenderState: i }, s, o, c) { return { latestValues: oA(s, o, c, a), renderState: i() }; }
function oA(a, i, s, o) { const c = {}, f = o(a, {}); for (const S in f)
    c[S] = mo(f[S]); let { initial: h, animate: m } = a; const y = No(a), p = Eg(a); i && p && !y && a.inherit !== !1 && (h === void 0 && (h = i.initial), m === void 0 && (m = i.animate)); let v = s ? s.initial === !1 : !1; v = v || h === !1; const x = v ? m : h; if (x && typeof x != "boolean" && !wo(x)) {
    const S = Array.isArray(x) ? x : [x];
    for (let R = 0; R < S.length; R++) {
        const D = og(a, S[R]);
        if (D) {
            const { transitionEnd: B, transition: _, ...K } = D;
            for (const k in K) {
                let G = K[k];
                if (Array.isArray(G)) {
                    const J = v ? G.length - 1 : 0;
                    G = G[J];
                }
                G !== null && (c[k] = G);
            }
            for (const k in B)
                c[k] = B[k];
        }
    }
} return c; }
const Jg = a => (i, s) => { const o = Q.useContext(Oo), c = Q.useContext(zo), f = () => sA(a, i, o, c); return s ? f() : of(f); }, uA = Jg({ scrapeMotionValuesFromProps: _f, createRenderState: Lf }), rA = Jg({ scrapeMotionValuesFromProps: Ng, createRenderState: Kg }), cA = Symbol.for("motionComponentSymbol");
function fA(a, i, s) { const o = Q.useRef(s); Q.useInsertionEffect(() => { o.current = s; }); const c = Q.useRef(null); return Q.useCallback(f => { f && a.onMount?.(f), i && (f ? i.mount(f) : i.unmount()); const h = o.current; if (typeof h == "function")
    if (f) {
        const m = h(f);
        typeof m == "function" && (c.current = m);
    }
    else
        c.current ? (c.current(), c.current = null) : h(f);
else
    h && (h.current = f); }, [i]); }
const Fg = Q.createContext({});
function di(a) { return a && typeof a == "object" && Object.prototype.hasOwnProperty.call(a, "current"); }
function hA(a, i, s, o, c, f) { const { visualElement: h } = Q.useContext(Oo), m = Q.useContext(kg), y = Q.useContext(zo), p = Q.useContext(Bf), v = p.reducedMotion, x = p.skipAnimations, S = Q.useRef(null), R = Q.useRef(!1); o = o || m.renderer, !S.current && o && (S.current = o(a, { visualState: i, parent: h, props: s, presenceContext: y, blockInitialAnimation: y ? y.initial === !1 : !1, reducedMotionConfig: v, skipAnimations: x, isSVG: f }), R.current && S.current && (S.current.manuallyAnimateOnMount = !0)); const D = S.current, B = Q.useContext(Fg); D && !D.projection && c && (D.type === "html" || D.type === "svg") && dA(S.current, s, c, B); const _ = Q.useRef(!1); Q.useInsertionEffect(() => { D && _.current && D.update(s, y); }); const K = s[cg], k = Q.useRef(!!K && typeof window < "u" && !window.MotionHandoffIsComplete?.(K) && window.MotionHasOptimisedAnimation?.(K)); return Tl(() => { !R.current || !D || (D.animationState?.animateChanges(), D.enteringChildren = void 0); }, []), Tl(() => { R.current = !0, D && (_.current = !0, window.MotionIsMounted = !0, D.updateFeatures(), D.scheduleRenderMicrotask(), k.current && D.animationState && D.animationState.animateChanges()); }), Q.useEffect(() => { D && (!k.current && D.animationState && D.animationState.animateChanges(), k.current && (queueMicrotask(() => { window.MotionHandoffMarkAsComplete?.(K); }), k.current = !1), D.enteringChildren = void 0); }), D; }
function dA(a, i, s, o) { const { layoutId: c, layout: f, drag: h, dragConstraints: m, layoutScroll: y, layoutRoot: p, layoutAnchor: v, layoutCrossfade: x } = i; a.projection = new s(a.latestValues, i["data-framer-portal-id"] ? void 0 : Pg(a.parent)), a.projection.setOptions({ layoutId: c, layout: f, alwaysMeasureLayout: !!h || m && di(m), visualElement: a, animationType: typeof f == "string" ? f : "both", initialPromotionConfig: o, crossfade: x, layoutScroll: y, layoutRoot: p, layoutAnchor: v }); }
function Pg(a) { if (a)
    return a.options.allowProjection !== !1 ? a.projection : Pg(a.parent); }
function Ac(a, { forwardMotionProps: i = !1, type: s } = {}, o, c) { o && JT(o); const f = s ? s === "svg" : Hf(a), h = f ? rA : uA; function m(p, v) { let x; const S = { ...Q.useContext(Bf), ...p, layoutId: mA(p) }, { isStatic: R, isValidProp: D } = S, B = PT(p), _ = h(p, R); if (!R && typeof window < "u") {
    pA();
    const K = yA(S);
    x = K.MeasureLayout, B.visualElement = hA(a, _, S, c, K.ProjectionNode, f);
} return b.jsxs(Oo.Provider, { value: B, children: [x && B.visualElement ? b.jsx(x, { visualElement: B.visualElement, ...S }) : null, lA(a, p, fA(_, B.visualElement, v), _, R, i, f, D)] }); } m.displayName = `motion.${typeof a == "string" ? a : `create(${a.displayName ?? a.name ?? ""})`}`; const y = Q.forwardRef(m); return y[cA] = a, y; }
function mA({ layoutId: a }) { const i = Q.useContext(sf).id; return i && a !== void 0 ? i + "-" + a : a; }
function pA(a, i) { Q.useContext(kg).strict; }
function yA(a) { const i = Zg(), { drag: s, layout: o } = i; if (!s && !o)
    return {}; const c = { ...s, ...o }; return { MeasureLayout: s?.isEnabled(a) || o?.isEnabled(a) ? c.MeasureLayout : void 0, ProjectionNode: c.ProjectionNode }; }
function gA(a, i) { if (typeof Proxy > "u")
    return Ac; const s = new Map, o = (f, h) => Ac(f, h, a, i), c = (f, h) => o(f, h); return new Proxy(c, { get: (f, h) => h === "create" ? o : (s.has(h) || s.set(h, Ac(h, void 0, a, i)), s.get(h)) }); }
const vA = (a, i) => i.isSVG ?? Hf(a) ? new KS(i) : new ZS(i, { allowProjection: a !== Q.Fragment });
class xA extends ea {
    constructor(i) { super(i), i.animationState || (i.animationState = FS(i)); }
    updateAnimationControlsSubscription() { const { animate: i } = this.node.getProps(); wo(i) && (this.unmountControls = i.subscribe(this.node)); }
    mount() { this.updateAnimationControlsSubscription(); }
    update() { const { animate: i } = this.node.getProps(), { animate: s } = this.node.prevProps || {}; i !== s && this.updateAnimationControlsSubscription(); }
    unmount() { this.node.animationState.reset(), this.unmountControls?.(); }
}
let bA = 0;
class SA extends ea {
    constructor() { super(...arguments), this.id = bA++; }
    update() { const { presenceContext: i, prevPresenceContext: s, animationState: o } = this.node; if (!i || !o)
        return; const { isPresent: c, onExitComplete: f } = i, h = s?.isPresent; if (c === h)
        return; if (c && h === !1) {
        if (this.exit === !0) {
            const { initial: y } = this.node.getProps();
            if (y && !Array.isArray(y)) {
                const { transition: p, transitionEnd: v, ...x } = Ca(this.node, y) || {};
                for (const S in x)
                    this.node.getValue(S)?.jump(x[S]);
            }
            this.node.blockInitialAnimation = !1, o.reset(), o.animateChanges();
        }
        else
            o.setActive("exit", !1);
        this.exit = void 0;
        return;
    } const m = this.exit = o.setActive("exit", !c); f && !c && m.then(() => { this.exit === m && (this.exit = !0, f(this.id)); }); }
    mount() { const { register: i, onExitComplete: s } = this.node.presenceContext || {}; s && s(this.id), i && (this.unmount = i(this.id)); }
    unmount() { }
}
const TA = { animation: { Feature: xA }, exit: { Feature: SA } };
function Vo(a) { return { point: { x: a.pageX, y: a.pageY } }; }
const AA = a => i => Of(i) && a(i, Vo(i));
function Sl(a, i, s, o) { return wl(a, i, AA(s), o); }
const Wg = ({ current: a }) => a ? a.ownerDocument.defaultView : null, i0 = (a, i) => Math.abs(a - i);
function EA(a, i) { const s = i0(a.x, i.x), o = i0(a.y, i.y); return Math.sqrt(s ** 2 + o ** 2); }
const l0 = new Set(["auto", "scroll"]);
class $g {
    constructor(i, s, { transformPagePoint: o, contextWindow: c = window, dragSnapToOrigin: f = !1, distanceThreshold: h = 3, element: m } = {}) { if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = new Map, this.removeScrollListeners = null, this.onElementScroll = D => { this.handleScroll(D.target); }, this.onWindowScroll = () => { this.handleScroll(window); }, this.updatePoint = () => { if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return; this.hasPendingMove = !1, this.lastRawMoveEventInfo && (this.lastMoveEventInfo = no(this.lastRawMoveEventInfo, this.transformPagePoint)); const D = Ec(this.lastMoveEventInfo, this.history), B = this.startEvent !== null, _ = EA(D.offset, { x: 0, y: 0 }) >= this.distanceThreshold; if (!B && !_)
        return; const { point: K } = D; this.history.push({ ...K, timestamp: Ht.now() }); const { onStart: k, onMove: G } = this.handlers; B || (k && k(this.lastMoveEvent, D), this.startEvent = this.lastMoveEvent), G && G(this.lastMoveEvent, D); }, this.handlePointerMove = (D, B) => { this.lastMoveEvent = D, this.lastRawMoveEventInfo = B, this.lastMoveEventInfo = no(B, this.transformPagePoint), this.hasPendingMove = !0, Vt.update(this.updatePoint, !0); }, this.handlePointerUp = (D, B) => { this.hasPendingMove && this.updatePoint(), this.end(); const { onEnd: _, onSessionEnd: K, resumeAnimation: k } = this.handlers; if ((this.dragSnapToOrigin || !this.startEvent) && k && k(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return; const G = Ec(D.type === "pointercancel" ? this.lastMoveEventInfo : no(B, this.transformPagePoint), this.history); this.startEvent && _ && _(D, G), K && K(D, G); }, !Of(i))
        return; this.dragSnapToOrigin = f, this.handlers = s, this.transformPagePoint = o, this.distanceThreshold = h, this.contextWindow = c || window; const y = Vo(i), p = no(y, this.transformPagePoint), { point: v } = p, { timestamp: x } = Ft; this.history = [{ ...v, timestamp: x }]; const { onSessionStart: S } = s; S && S(i, Ec(p, this.history)); const R = { passive: !0, capture: !0 }; this.removeListeners = Nl(Sl(this.contextWindow, "pointermove", this.handlePointerMove, R), Sl(this.contextWindow, "pointerup", this.handlePointerUp, R), Sl(this.contextWindow, "pointercancel", this.handlePointerUp, R)), m && this.startScrollTracking(m); }
    startScrollTracking(i) { let s = i.parentElement; for (; s;) {
        const o = getComputedStyle(s);
        (l0.has(o.overflowX) || l0.has(o.overflowY)) && this.scrollPositions.set(s, { x: s.scrollLeft, y: s.scrollTop }), s = s.parentElement;
    } this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }), window.addEventListener("scroll", this.onElementScroll, { capture: !0 }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => { window.removeEventListener("scroll", this.onElementScroll, { capture: !0 }), window.removeEventListener("scroll", this.onWindowScroll); }; }
    handleScroll(i) { const s = this.scrollPositions.get(i); if (!s)
        return; const o = i === window, c = o ? { x: window.scrollX, y: window.scrollY } : { x: i.scrollLeft, y: i.scrollTop }, f = { x: c.x - s.x, y: c.y - s.y }; f.x === 0 && f.y === 0 || (o ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += f.x, this.lastMoveEventInfo.point.y += f.y) : this.history.length > 0 && (this.history[0].x -= f.x, this.history[0].y -= f.y), this.scrollPositions.set(i, c), Vt.update(this.updatePoint, !0)); }
    updateHandlers(i) { this.handlers = i; }
    end() { this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), ta(this.updatePoint); }
}
function no(a, i) { return i ? { point: i(a.point) } : a; }
function s0(a, i) { return { x: a.x - i.x, y: a.y - i.y }; }
function Ec({ point: a }, i) { return { point: a, delta: s0(a, Ig(i)), offset: s0(a, MA(i)), velocity: DA(i, .1) }; }
function MA(a) { return a[0]; }
function Ig(a) { return a[a.length - 1]; }
function DA(a, i) { if (a.length < 2)
    return { x: 0, y: 0 }; let s = a.length - 1, o = null; const c = Ig(a); for (; s >= 0 && (o = a[s], !(c.timestamp - o.timestamp > Ge(i)));)
    s--; if (!o)
    return { x: 0, y: 0 }; o === a[0] && a.length > 2 && c.timestamp - o.timestamp > Ge(i) * 2 && (o = a[1]); const f = Re(c.timestamp - o.timestamp); if (f === 0)
    return { x: 0, y: 0 }; const h = { x: (c.x - o.x) / f, y: (c.y - o.y) / f }; return h.x === 1 / 0 && (h.x = 0), h.y === 1 / 0 && (h.y = 0), h; }
function CA(a, { min: i, max: s }, o) { return i !== void 0 && a < i ? a = o ? Rt(i, a, o.min) : Math.max(a, i) : s !== void 0 && a > s && (a = o ? Rt(s, a, o.max) : Math.min(a, s)), a; }
function o0(a, i, s) { return { min: i !== void 0 ? a.min + i : void 0, max: s !== void 0 ? a.max + s - (a.max - a.min) : void 0 }; }
function jA(a, { top: i, left: s, bottom: o, right: c }) { return { x: o0(a.x, s, c), y: o0(a.y, i, o) }; }
function u0(a, i) { let s = i.min - a.min, o = i.max - a.max; return i.max - i.min < a.max - a.min && ([s, o] = [o, s]), { min: s, max: o }; }
function zA(a, i) { return { x: u0(a.x, i.x), y: u0(a.y, i.y) }; }
function RA(a, i) { let s = .5; const o = fe(a), c = fe(i); return c > o ? s = ja(i.min, i.max - o, a.min) : o > c && (s = ja(a.min, a.max - c, i.min)), an(0, 1, s); }
function wA(a, i) { const s = {}; return i.min !== void 0 && (s.min = i.min - a.min), i.max !== void 0 && (s.max = i.max - a.min), s; }
const tf = .35;
function NA(a = tf) { return a === !1 ? a = 0 : a === !0 && (a = tf), { x: r0(a, "left", "right"), y: r0(a, "top", "bottom") }; }
function r0(a, i, s) { return { min: c0(a, i), max: c0(a, s) }; }
function c0(a, i) { return typeof a == "number" ? a : a[i] || 0; }
const OA = new WeakMap;
class VA {
    constructor(i) { this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Wt(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = i; }
    start(i, { snapToCursor: s = !1, distanceThreshold: o } = {}) { const { presenceContext: c } = this.visualElement; if (c && c.isPresent === !1)
        return; const f = x => { s && this.snapToCursor(x), this.stopAnimation(); }, h = (x, S) => { const { drag: R, dragPropagation: D, onDragStart: B } = this.getProps(); if (R && !D && (this.openDragLock && this.openDragLock(), this.openDragLock = bS(R), !this.openDragLock))
        return; this.latestPointerEvent = x, this.latestPanInfo = S, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Je(K => { let k = this.getAxisMotionValue(K).get() || 0; if (en.test(k)) {
        const { projection: G } = this.visualElement;
        if (G && G.layout) {
            const J = G.layout.layoutBox[K];
            J && (k = fe(J) * (parseFloat(k) / 100));
        }
    } this.originPoint[K] = k; }), B && Vt.update(() => B(x, S), !1, !0), Jc(this.visualElement, "transform"); const { animationState: _ } = this.visualElement; _ && _.setActive("whileDrag", !0); }, m = (x, S) => { this.latestPointerEvent = x, this.latestPanInfo = S; const { dragPropagation: R, dragDirectionLock: D, onDirectionLock: B, onDrag: _ } = this.getProps(); if (!R && !this.openDragLock)
        return; const { offset: K } = S; if (D && this.currentDirection === null) {
        this.currentDirection = BA(K), this.currentDirection !== null && B && B(this.currentDirection);
        return;
    } this.updateAxis("x", S.point, K), this.updateAxis("y", S.point, K), this.visualElement.render(), _ && Vt.update(() => _(x, S), !1, !0); }, y = (x, S) => { this.latestPointerEvent = x, this.latestPanInfo = S, this.stop(x, S), this.latestPointerEvent = null, this.latestPanInfo = null; }, p = () => { const { dragSnapToOrigin: x } = this.getProps(); (x || this.constraints) && this.startAnimation({ x: 0, y: 0 }); }, { dragSnapToOrigin: v } = this.getProps(); this.panSession = new $g(i, { onSessionStart: f, onStart: h, onMove: m, onSessionEnd: y, resumeAnimation: p }, { transformPagePoint: this.visualElement.getTransformPagePoint(), dragSnapToOrigin: v, distanceThreshold: o, contextWindow: Wg(this.visualElement), element: this.visualElement.current }); }
    stop(i, s) { const o = i || this.latestPointerEvent, c = s || this.latestPanInfo, f = this.isDragging; if (this.cancel(), !f || !c || !o)
        return; const { velocity: h } = c; this.startAnimation(h); const { onDragEnd: m } = this.getProps(); m && Vt.postRender(() => m(o, c)); }
    cancel() { this.isDragging = !1; const { projection: i, animationState: s } = this.visualElement; i && (i.isAnimationBlocked = !1), this.endPanSession(); const { dragPropagation: o } = this.getProps(); !o && this.openDragLock && (this.openDragLock(), this.openDragLock = null), s && s.setActive("whileDrag", !1); }
    endPanSession() { this.panSession && this.panSession.end(), this.panSession = void 0; }
    updateAxis(i, s, o) { const { drag: c } = this.getProps(); if (!o || !ao(i, c, this.currentDirection))
        return; const f = this.getAxisMotionValue(i); let h = this.originPoint[i] + o[i]; this.constraints && this.constraints[i] && (h = CA(h, this.constraints[i], this.elastic[i])), f.set(h); }
    resolveConstraints() { const { dragConstraints: i, dragElastic: s } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, c = this.constraints; i && di(i) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : i && o ? this.constraints = jA(o.layoutBox, i) : this.constraints = !1, this.elastic = NA(s), c !== this.constraints && !di(i) && o && this.constraints && !this.hasMutatedConstraints && Je(f => { this.constraints !== !1 && this.getAxisMotionValue(f) && (this.constraints[f] = wA(o.layoutBox[f], this.constraints[f])); }); }
    resolveRefConstraints() { const { dragConstraints: i, onMeasureDragConstraints: s } = this.getProps(); if (!i || !di(i))
        return !1; const o = i.current, { projection: c } = this.visualElement; if (!c || !c.layout)
        return !1; c.root && (c.root.scroll = void 0, c.root.updateScroll()); const f = xS(o, c.root, this.visualElement.getTransformPagePoint()); let h = zA(c.layout.layoutBox, f); if (s) {
        const m = s(yS(h));
        this.hasMutatedConstraints = !!m, m && (h = yg(m));
    } return h; }
    startAnimation(i) { const { drag: s, dragMomentum: o, dragElastic: c, dragTransition: f, dragSnapToOrigin: h, onDragTransitionEnd: m } = this.getProps(), y = this.constraints || {}, p = Je(v => { if (!ao(v, s, this.currentDirection))
        return; let x = y && y[v] || {}; (h === !0 || h === v) && (x = { min: 0, max: 0 }); const S = c ? 200 : 1e6, R = c ? 40 : 1e7, D = { type: "inertia", velocity: o ? i[v] : 0, bounceStiffness: S, bounceDamping: R, timeConstant: 750, restDelta: 1, restSpeed: 10, ...f, ...x }; return this.startAxisValueAnimation(v, D); }); return Promise.all(p).then(m); }
    startAxisValueAnimation(i, s) { const o = this.getAxisMotionValue(i); return Jc(this.visualElement, i), o.start(Cf(i, o, 0, s, this.visualElement, !1)); }
    stopAnimation() { Je(i => this.getAxisMotionValue(i).stop()); }
    getAxisMotionValue(i) { const s = `_drag${i.toUpperCase()}`, c = this.visualElement.getProps()[s]; return c || this.visualElement.getValue(i, this.visualElement.latestValues[i] ?? 0); }
    snapToCursor({ clientX: i, clientY: s }) { const { drag: o } = this.getProps(), c = { x: i, y: s }, f = this.visualElement.getTransformPagePoint()?.(c) || c, h = this.visualElement.measureViewportBox(); Je(m => { if (!ao(m, o, this.currentDirection))
        return; const y = this.getAxisMotionValue(m), { min: p, max: v } = h[m]; y.set((y.get() || 0) + f[m] - Rt(p, v, .5)); }); }
    scalePositionWithinConstraints() { if (!this.visualElement.current)
        return; const { drag: i, dragConstraints: s } = this.getProps(), { projection: o } = this.visualElement; if (!di(s) || !o || !this.constraints)
        return; this.stopAnimation(); const c = this.constraints, f = { x: 0, y: 0 }; Je(m => { const y = this.getAxisMotionValue(m).get(); f[m] = RA({ min: y, max: y }, c[m]); }); const { transformTemplate: h } = this.visualElement.getProps(); this.visualElement.current.style.transform = h ? h({}, "") : "none", o.root && o.root.updateScroll(), o.updateLayout(), this.constraints = !1, this.resolveConstraints(), Je(m => { const y = this.getAxisMotionValue(m); if (!ao(m, i, null) || !y.get())
        return; const { min: p, max: v } = this.constraints[m]; y.set(Rt(p, v, f[m])); }), this.visualElement.render(); }
    addListeners() { if (!this.visualElement.current)
        return; OA.set(this.visualElement, this); const i = this.visualElement.current, s = Sl(i, "pointerdown", p => { const { drag: v, dragListener: x = !0 } = this.getProps(), S = p.target, R = S !== i && DS(S); v && x && !R && this.start(p); }); let o; const c = () => { const { dragConstraints: p } = this.getProps(); di(p) && p.current && (this.constraints = this.resolveRefConstraints(), o || (o = _A(i, p.current, () => this.scalePositionWithinConstraints()))); }, { projection: f } = this.visualElement, h = f.addEventListener("measure", c); f && !f.layout && (f.root && f.root.updateScroll(), f.updateLayout()), Vt.read(c); const m = wl(window, "resize", () => this.scalePositionWithinConstraints()), y = f.addEventListener("didUpdate", (({ delta: p, hasLayoutChanged: v }) => { this.isDragging && v && (Je(x => { const S = this.getAxisMotionValue(x); S && (this.originPoint[x] += p[x].translate, S.set(S.get() + p[x].translate)); }), this.visualElement.render()); })); return () => { m(), s(), h(), y && y(), o && o(); }; }
    getProps() { const i = this.visualElement.getProps(), { drag: s = !1, dragDirectionLock: o = !1, dragPropagation: c = !1, dragConstraints: f = !1, dragElastic: h = tf, dragMomentum: m = !0 } = i; return { ...i, drag: s, dragDirectionLock: o, dragPropagation: c, dragConstraints: f, dragElastic: h, dragMomentum: m }; }
}
function f0(a) { let i = !0; return () => { if (i) {
    i = !1;
    return;
} a(); }; }
function _A(a, i, s) { const o = Ay(a, f0(s)), c = Ay(i, f0(s)); return () => { o(), c(); }; }
function ao(a, i, s) { return (i === !0 || i === a) && (s === null || s === a); }
function BA(a, i = 10) { let s = null; return Math.abs(a.y) > i ? s = "y" : Math.abs(a.x) > i && (s = "x"), s; }
class UA extends ea {
    constructor(i) { super(i), this.removeGroupControls = Pe, this.removeListeners = Pe, this.controls = new VA(i); }
    mount() { const { dragControls: i } = this.node.getProps(); i && (this.removeGroupControls = i.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Pe; }
    update() { const { dragControls: i } = this.node.getProps(), { dragControls: s } = this.node.prevProps || {}; i !== s && (this.removeGroupControls(), i && (this.removeGroupControls = i.subscribe(this.controls))); }
    unmount() { this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession(); }
}
const Mc = a => (i, s) => { a && Vt.update(() => a(i, s), !1, !0); };
class LA extends ea {
    constructor() { super(...arguments), this.removePointerDownListener = Pe; }
    onPointerDown(i) { this.session = new $g(i, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint(), contextWindow: Wg(this.node) }); }
    createPanHandlers() { const { onPanSessionStart: i, onPanStart: s, onPan: o, onPanEnd: c } = this.node.getProps(); return { onSessionStart: Mc(i), onStart: Mc(s), onMove: Mc(o), onEnd: (f, h) => { delete this.session, c && Vt.postRender(() => c(f, h)); } }; }
    mount() { this.removePointerDownListener = Sl(this.node.current, "pointerdown", i => this.onPointerDown(i)); }
    update() { this.session && this.session.updateHandlers(this.createPanHandlers()); }
    unmount() { this.removePointerDownListener(), this.session && this.session.end(); }
}
let Dc = !1;
class HA extends Q.Component {
    componentDidMount() { const { visualElement: i, layoutGroup: s, switchLayoutGroup: o, layoutId: c } = this.props, { projection: f } = i; f && (s.group && s.group.add(f), o && o.register && c && o.register(f), Dc && f.root.didUpdate(), f.addEventListener("animationComplete", () => { this.safeToRemove(); }), f.setOptions({ ...f.options, layoutDependency: this.props.layoutDependency, onExitComplete: () => this.safeToRemove() })), po.hasEverUpdated = !0; }
    getSnapshotBeforeUpdate(i) { const { layoutDependency: s, visualElement: o, drag: c, isPresent: f } = this.props, { projection: h } = o; return h && (h.isPresent = f, i.layoutDependency !== s && h.setOptions({ ...h.options, layoutDependency: s }), Dc = !0, c || i.layoutDependency !== s || s === void 0 || i.isPresent !== f ? h.willUpdate() : this.safeToRemove(), i.isPresent !== f && (f ? h.promote() : h.relegate() || Vt.postRender(() => { const m = h.getStack(); (!m || !m.members.length) && this.safeToRemove(); }))), null; }
    componentDidUpdate() { const { visualElement: i, layoutAnchor: s } = this.props, { projection: o } = i; o && (o.options.layoutAnchor = s, o.root.didUpdate(), Nf.postRender(() => { !o.currentAnimation && o.isLead() && this.safeToRemove(); })); }
    componentWillUnmount() { const { visualElement: i, layoutGroup: s, switchLayoutGroup: o } = this.props, { projection: c } = i; Dc = !0, c && (c.scheduleCheckAfterUnmount(), s && s.group && s.group.remove(c), o && o.deregister && o.deregister(c)); }
    safeToRemove() { const { safeToRemove: i } = this.props; i && i(); }
    render() { return null; }
}
function t1(a) { const [i, s] = Xg(), o = Q.useContext(sf); return b.jsx(HA, { ...a, layoutGroup: o, switchLayoutGroup: Q.useContext(Fg), isPresent: i, safeToRemove: s }); }
const qA = { pan: { Feature: LA }, drag: { Feature: UA, ProjectionNode: Gg, MeasureLayout: t1 } };
function h0(a, i, s) { const { props: o } = a; a.animationState && o.whileHover && a.animationState.setActive("whileHover", s === "Start"); const c = "onHover" + s, f = o[c]; f && Vt.postRender(() => f(i, Vo(i))); }
class YA extends ea {
    mount() { const { current: i } = this.node; i && (this.unmount = TS(i, (s, o) => (h0(this.node, o, "Start"), c => h0(this.node, c, "End")))); }
    unmount() { }
}
class GA extends ea {
    constructor() { super(...arguments), this.isActive = !1; }
    onFocus() { let i = !1; try {
        i = this.node.current.matches(":focus-visible");
    }
    catch {
        i = !0;
    } !i || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0); }
    onBlur() { !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1); }
    mount() { this.unmount = Nl(wl(this.node.current, "focus", () => this.onFocus()), wl(this.node.current, "blur", () => this.onBlur())); }
    unmount() { }
}
function d0(a, i, s) { const { props: o } = a; if (a.current instanceof HTMLButtonElement && a.current.disabled)
    return; a.animationState && o.whileTap && a.animationState.setActive("whileTap", s === "Start"); const c = "onTap" + (s === "End" ? "" : s), f = o[c]; f && Vt.postRender(() => f(i, Vo(i))); }
class XA extends ea {
    mount() { const { current: i } = this.node; if (!i)
        return; const { globalTapTarget: s, propagate: o } = this.node.props; this.unmount = jS(i, (c, f) => (d0(this.node, f, "Start"), (h, { success: m }) => d0(this.node, h, m ? "End" : "Cancel")), { useGlobalTarget: s, stopPropagation: o?.tap === !1 }); }
    unmount() { }
}
const ef = new WeakMap, Cc = new WeakMap, kA = a => { const i = ef.get(a.target); i && i(a); }, ZA = a => { a.forEach(kA); };
function QA({ root: a, ...i }) { const s = a || document; Cc.has(s) || Cc.set(s, {}); const o = Cc.get(s), c = JSON.stringify(i); return o[c] || (o[c] = new IntersectionObserver(ZA, { root: a, ...i })), o[c]; }
function KA(a, i, s) { const o = QA(i); return ef.set(a, s), o.observe(a), () => { ef.delete(a), o.unobserve(a); }; }
const JA = { some: 0, all: 1 };
class FA extends ea {
    constructor() { super(...arguments), this.hasEnteredView = !1, this.isInView = !1; }
    startObserver() { this.stopObserver?.(); const { viewport: i = {} } = this.node.getProps(), { root: s, margin: o, amount: c = "some", once: f } = i, h = { root: s ? s.current : void 0, rootMargin: o, threshold: typeof c == "number" ? c : JA[c] }, m = y => { const { isIntersecting: p } = y; if (this.isInView === p || (this.isInView = p, f && !p && this.hasEnteredView))
        return; p && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", p); const { onViewportEnter: v, onViewportLeave: x } = this.node.getProps(), S = p ? v : x; S && S(y); }; this.stopObserver = KA(this.node.current, h, m); }
    mount() { this.startObserver(); }
    update() { if (typeof IntersectionObserver > "u")
        return; const { props: i, prevProps: s } = this.node; ["amount", "margin", "root"].some(PA(i, s)) && this.startObserver(); }
    unmount() { this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1; }
}
function PA({ viewport: a = {} }, { viewport: i = {} } = {}) { return s => a[s] !== i[s]; }
const WA = { inView: { Feature: FA }, tap: { Feature: XA }, focus: { Feature: GA }, hover: { Feature: YA } }, $A = { layout: { ProjectionNode: Gg, MeasureLayout: t1 } }, IA = { ...TA, ...WA, ...qA, ...$A }, ot = gA(IA, vA);
const t3 = a => a?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
function e3(a, i, s = []) { if (i == null)
    throw new Error("[lucide]: iconNode is required when icon name is used"); return { name: t3(a), size: 24, node: i, ...s.length > 0 ? { aliases: s } : {} }; }
const n3 = a => { let i = "", s = !1; for (const o of a) {
    if (o === "-" || o === "_" || o <= " ") {
        s = i.length > 0;
        continue;
    }
    i.length === 0 ? i += o.toLowerCase() : i += s ? o.toUpperCase() : o, s = !1;
} return i; };
const a3 = a => { const i = n3(a); return i.charAt(0).toUpperCase() + i.slice(1); };
const nf = (...a) => a.filter((i, s, o) => !!i && i.trim() !== "" && o.indexOf(i) === s).join(" ").trim();
const Sa = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" };
function jc(a) { return a != null; }
function i3(a, i = {}) { const s = i.attributeNames ?? {}, o = S => s[S] ?? S, c = a.size ?? a.width ?? Sa.width, f = a.size ?? a.height ?? Sa.height, h = a.aliases?.filter(S => typeof S == "string" && S.trim() !== "").map(S => `lucide-${S}`) ?? [], m = [...a.name ? [`lucide-${a.name}`] : [], ...h], y = i.className?.split(" ").filter(Boolean) ?? [], p = i.includeDefaultClasses === !1 ? nf(...y) : nf("lucide", ...m, ...y), v = i.absoluteStrokeWidth ? Number(i.strokeWidth ?? Sa["stroke-width"]) * Number(a.size ?? a.width ?? Sa.width) / Number(i.size ?? i.width ?? Sa.width) : i.strokeWidth ?? Sa["stroke-width"]; return ["svg", { ...Object.entries(Sa).reduce((S, [R, D]) => (S[o(R)] = D, S), {}), ..."color" in i && i.color && { [o("stroke")]: i.color }, ..."size" in i && jc(i.size) && { [o("width")]: i.size, [o("height")]: i.size }, ..."width" in i && jc(i.width) && { [o("width")]: i.width }, ..."height" in i && jc(i.height) && { [o("height")]: i.height }, [o("stroke-width")]: v, ...p && { [o("class")]: p }, [o("viewBox")]: `0 0 ${c} ${f}`, ...i.hasA11yProp === !1 ? { [o("aria-hidden")]: "true" } : {}, ..."attributes" in i && i.attributes }, a.node.map(S => { const [R, D, B] = S, _ = i.nonScalingStroke ? { [o("vector-effect")]: "non-scaling-stroke", ...D } : D; return B ? [R, _, B] : [R, _]; })]; }
function l3(a, i = {}) { return i3(a, { ...i, attributeNames: { ...i.attributeNames, class: "className", "stroke-width": "strokeWidth", "stroke-linecap": "strokeLinecap", "stroke-linejoin": "strokeLinejoin", "vector-effect": "vectorEffect" } }); }
const s3 = a => { for (const i in a)
    if (i.startsWith("aria-") || i === "role" || i === "title")
        return !0; return !1; }, o3 = Q.createContext({}), u3 = () => Q.useContext(o3), r3 = Q.forwardRef(({ color: a, size: i, width: s, height: o, strokeWidth: c, absoluteStrokeWidth: f, nonScalingStroke: h, className: m = "", children: y, iconNode: p = [], icon: v = { node: p, aliases: [], size: 24 }, ...x }, S) => { const { size: R = 24, strokeWidth: D = 2, absoluteStrokeWidth: B = !1, nonScalingStroke: _ = !1, color: K = "currentColor", className: k = "" } = u3() ?? {}, G = !!y || s3(x), [J, rt, ft = []] = l3(v, { color: a ?? K, width: s ?? i ?? R, height: o ?? i ?? R, strokeWidth: c ?? D, absoluteStrokeWidth: f ?? B, nonScalingStroke: h ?? _, className: nf(k, m), hasA11yProp: G, attributes: x }); return Q.createElement(J, { ref: S, ...rt }, [...ft.map(([V, X]) => Q.createElement(V, X)), ...Array.isArray(y) ? y : [y]]); });
function he(a, i = [], s = []) { const o = typeof a == "string" ? e3(a, i, s) : a, c = Q.forwardRef(({ className: f, ...h }, m) => Q.createElement(r3, { ref: m, icon: o, className: f, ...h })); return o.name && (c.displayName = a3(o.name)), c; }
const e1 = { name: "arrow-left", size: 24, node: [["path", { d: "m12 19-7-7 7-7", key: "1l729n" }], ["path", { d: "M19 12H5", key: "x3x0zl" }]] };
e1.node;
const n1 = he(e1);
const a1 = { name: "chevron-right", size: 24, node: [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]] };
a1.node;
const c3 = he(a1);
const i1 = { name: "graduation-cap", size: 24, node: [["path", { d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z", key: "j76jl0" }], ["path", { d: "M22 10v6", key: "1lu8f3" }], ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]] };
i1.node;
const f3 = he(i1);
const awarenessBrainIcon = he({ name: "brain", size: 24, node: [["path", { d: "M12 18V5", key: "awareness-brain-spine" }], ["path", { d: "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4", key: "awareness-brain-center" }], ["path", { d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5", key: "awareness-brain-top" }], ["path", { d: "M17.997 5.125a4 4 0 0 1 2.357 6.316", key: "awareness-brain-right-top" }], ["path", { d: "M18 18a4 4 0 0 0 2-7.464", key: "awareness-brain-right" }], ["path", { d: "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517", key: "awareness-brain-bottom" }], ["path", { d: "M6 18a4 4 0 0 1-2-7.464", key: "awareness-brain-left" }], ["path", { d: "M6.003 5.125a4 4 0 0 0-2.357 6.316", key: "awareness-brain-left-top" }]] });
const l1 = { name: "hammer", size: 24, node: [["path", { d: "m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9", key: "1hayfq" }], ["path", { d: "m18 15 4-4", key: "16gjal" }], ["path", { d: "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5", key: "15ts47" }]] };
l1.node;
const h3 = he(l1);
const s1 = { name: "hard-hat", size: 24, node: [["path", { d: "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5", key: "1p9q5i" }], ["path", { d: "M14 6a6 6 0 0 1 6 6v3", key: "1hnv84" }], ["path", { d: "M4 15v-3a6 6 0 0 1 6-6", key: "9ciidu" }], ["rect", { x: "2", y: "15", width: "20", height: "4", rx: "1", key: "g3x8cw" }]] };
s1.node;
const d3 = he(s1);
const o1 = { name: "life-buoy", size: 24, node: [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m4.93 4.93 4.24 4.24", key: "1ymg45" }], ["path", { d: "m14.83 9.17 4.24-4.24", key: "1cb5xl" }], ["path", { d: "m14.83 14.83 4.24 4.24", key: "q42g0n" }], ["path", { d: "m9.17 14.83-4.24 4.24", key: "bqpfvv" }], ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }]] };
o1.node;
const m3 = he(o1);
const u1 = { name: "map-pin", size: 24, node: [["path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0", key: "1r0f0z" }], ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]] };
u1.node;
const p3 = he(u1);
const r1 = { name: "pause", size: 24, node: [["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }], ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]] };
r1.node;
const y3 = he(r1);
const c1 = { name: "play", size: 24, node: [["path", { d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z", key: "10ikf1" }]] };
c1.node;
const g3 = he(c1);
const f1 = { name: "rotate-ccw", size: 24, node: [["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }], ["path", { d: "M3 3v5h5", key: "1xhq8a" }]] };
f1.node;
const v3 = he(f1);
const h1 = { name: "skip-back", size: 24, node: [["path", { d: "M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z", key: "15892j" }], ["path", { d: "M3 20V4", key: "1ptbpl" }]] };
h1.node;
const x3 = he(h1);
const d1 = { name: "skip-forward", size: 24, node: [["path", { d: "M21 4v16", key: "7j8fe9" }], ["path", { d: "M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z", key: "zs4d6" }]] };
d1.node;
const b3 = he(d1);
const m1 = { name: "volume-2", size: 24, node: [["path", { d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z", key: "uqj9uw" }], ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }], ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]] };
m1.node;
const S3 = he(m1);
const p1 = { name: "volume-x", size: 24, node: [["path", { d: "M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z", key: "1p7khw" }], ["path", { d: "m16.5 14.5 5-5", key: "cul3yw" }], ["path", { d: "m16.5 9.5 5 5", key: "1akey5" }]] };
p1.node;
const T3 = he(p1);
const y1 = { name: "wrench", size: 24, node: [["path", { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z", key: "1ngwbx" }]] };
y1.node;
const A3 = he(y1), Y = { blush: "#FBE9EC", charcoal: "#1A1719", gray: "#8E8389", rose: "#C08497", coral: "#FF7F82", lavender: "#A78BFA", lavenderSoft: "#CDBDF9" };
function E3(a, i = 1600, s = 0, o = 0) { const [c, f] = Q.useState(0); return Q.useEffect(() => { let h = 0, m = 0, y = !1; const p = x => { m || (m = x); const S = Math.min(1, (x - m) / i), R = S === 1 ? 1 : 1 - Math.pow(2, -10 * S); f(Number((a * R).toFixed(o))), S < 1 && !y && (h = requestAnimationFrame(p)); }, v = setTimeout(() => { h = requestAnimationFrame(p); }, s); return () => { y = !0, clearTimeout(v), cancelAnimationFrame(h); }; }, [a, i, s, o]), c; }
function Co({ to: a, duration: i = 1600, delay: s = 0, decimals: o = 0, suffix: c = "", prefix: f = "", className: h = "" }) { const m = E3(a, i, s, o), y = o > 0 ? m.toFixed(o) : Math.round(m).toLocaleString("en-US"); return b.jsxs("span", { className: h, style: { fontVariantNumeric: "tabular-nums" }, children: [f, y, c] }); }
function _o({ num: a, label: i, color: s = Y.rose, delay: o = 0 }) { return b.jsxs(ot.div, { initial: { opacity: 0, y: -8 }, animate: { opacity: 1, y: 0 }, transition: { delay: o, duration: .5 }, className: "flex items-center gap-2", children: [b.jsx("span", { className: "font-mono text-[13px] leading-none tracking-[0.18em]", style: { color: s }, children: a }), b.jsx("span", { className: "h-px w-4", style: { background: s, opacity: .5 } }), b.jsx("span", { className: "font-mono text-[13px] leading-none uppercase tracking-[0.22em]", style: { color: Y.gray }, children: i })] }); }
function In({ children: a, bg: i = Y.charcoal, fg: s = "#fff", dot: o, pulse: c = !1, className: f = "" }) { return b.jsxs("span", { className: `inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[12px] uppercase tracking-[0.16em] leading-none ${f}`, style: { background: i, color: s }, children: [o && b.jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [c && b.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75", style: { background: o } }), b.jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full", style: { background: o } })] }), a] }); }
function M3({ children: a, className: i = "", delay: s = 0, tint: o = "rgba(255,255,255,0.86)" }) { return b.jsx(ot.div, { initial: { opacity: 0, y: 22, scale: .97 }, animate: { opacity: 1, y: 0, scale: 1 }, transition: { delay: s, type: "spring", stiffness: 140, damping: 18 }, className: `rounded-[26px] border border-white/70 p-5 shadow-[0_18px_40px_-20px_rgba(26,23,25,0.35)] backdrop-blur-sm ${i}`, style: { background: o }, children: a }); }
function g1({ size: a = 96, animate: i = !0 }) { return b.jsxs("div", { className: "relative flex items-center justify-center", style: { width: a, height: a }, children: [b.jsx(ot.span, { className: "absolute inset-0 rounded-[32%] blur-xl", style: { background: Y.coral, opacity: .35 }, animate: i ? { scale: [1, 1.18, 1], opacity: [.3, .5, .3] } : void 0, transition: { duration: 2.4, repeat: 1 / 0, ease: "easeInOut" } }), b.jsx(ot.div, { className: "relative flex items-center justify-center rounded-[32%] shadow-[0_14px_30px_-12px_rgba(192,132,151,0.9)]", style: { width: a, height: a, background: `linear-gradient(145deg, ${Y.coral} 0%, ${Y.rose} 55%, ${Y.lavender} 140%)` }, initial: i ? { scale: .6, rotate: -12, opacity: 0 } : !1, animate: { scale: 1, rotate: 0, opacity: 1 }, transition: { type: "spring", stiffness: 180, damping: 14 }, children: b.jsxs("svg", { viewBox: "0 0 100 100", style: { width: a * .62, height: a * .62 }, fill: "none", children: [b.jsx(ot.path, { d: "M50 86C50 86 12 62 12 36.5C12 23 22.5 13 35 13C42.5 13 48 17 50 21C52 17 57.5 13 65 13C77.5 13 88 23 88 36.5C88 62 50 86 50 86Z", fill: "rgba(255,255,255,0.92)", initial: i ? { scale: .7, opacity: 0 } : !1, animate: { scale: 1, opacity: 1 }, style: { transformOrigin: "50% 50%" }, transition: { delay: .15, type: "spring", stiffness: 200, damping: 13 } }), b.jsx(ot.path, { d: "M18 47H36L43 33L52 62L59 47H80", stroke: Y.charcoal, strokeWidth: 6.5, strokeLinecap: "round", strokeLinejoin: "round", initial: i ? { pathLength: 0 } : !1, animate: { pathLength: 1 }, transition: { delay: .45, duration: 1.1, ease: "easeInOut" } })] }) })] }); }
function D3() { return b.jsx("div", { className: "pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-multiply", style: { backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")` } }); }
function jo({ text: a, className: i = "", delay: s = 0, stagger: o = .06, style: c }) { const f = a.split(" "); return b.jsx("span", { className: i, style: c, children: f.map((h, m) => b.jsx("span", { className: "inline-block overflow-hidden align-bottom", children: b.jsxs(ot.span, { className: "inline-block", initial: { y: "110%", opacity: 0 }, animate: { y: "0%", opacity: 1 }, transition: { delay: s + m * o, duration: .7, ease: [.16, 1, .3, 1] }, children: [h, m < f.length - 1 ? " " : ""] }) }, m)) }); }
function C3() { return b.jsxs("div", { className: "lf-scene lf-intro relative flex h-full w-full flex-col items-center justify-center px-8 text-center", children: [b.jsx(ot.div, { className: "pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl", style: { background: Y.lavenderSoft, opacity: .35 }, animate: { scale: [.9, 1.08, .9] }, transition: { duration: 6, repeat: 1 / 0, ease: "easeInOut" } }), [0, 1, 2].map(a => b.jsx(ot.span, { className: "pointer-events-none absolute rounded-full border", style: { borderColor: Y.rose, width: 120, height: 120 }, initial: { scale: .6, opacity: .5 }, animate: { scale: [.6, 2.9], opacity: [.45, 0] }, transition: { duration: 3.2, repeat: 1 / 0, delay: a * 1.05, ease: "easeOut" } }, a)), b.jsxs("div", { className: "relative z-10 flex flex-col items-center", children: [b.jsx(g1, { size: 104 }), b.jsxs(ot.h1, { className: "font-heading mt-7 text-[44px] font-bold leading-[1.02] tracking-[-0.02em]", style: { color: Y.charcoal }, initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { delay: .55, duration: .8, ease: [.16, 1, .3, 1] }, children: ["Alameda", b.jsx("br", {}), "Lifeline"] }), b.jsx(ot.div, { className: "mt-5 h-px", style: { background: Y.rose }, initial: { width: 0, opacity: 0 }, animate: { width: 140, opacity: .6 }, transition: { delay: 1.1, duration: .7, ease: "easeOut" } }), b.jsxs(ot.p, { className: "font-mono mt-4 text-[13px] uppercase leading-relaxed tracking-[0.26em]", style: { color: Y.gray }, initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 1.3, duration: .8 }, children: ["Built by the", b.jsx("br", {}), b.jsx("span", { style: { color: Y.charcoal }, children: "Medical Security Index" })] }), b.jsx(ot.div, { className: "mt-10 flex items-center gap-2", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 1.9, duration: .6 }, children: [0, 1, 2].map(a => b.jsx(ot.span, { className: "h-1.5 w-1.5 rounded-full", style: { background: Y.rose }, animate: { opacity: [.25, 1, .25], y: [0, -3, 0] }, transition: { duration: 1.2, repeat: 1 / 0, delay: a * .18, ease: "easeInOut" } }, a)) })] })] }); }
const j3 = 301;
function z3() { return b.jsxs("div", { className: "lf-scene lf-split lf-idea relative flex h-full w-full flex-col justify-center px-7", children: [b.jsxs("div", { className: "lf-col lf-col-a", children: [b.jsx(_o, { num: "IDEA", label: "The Premise", color: Y.coral }), b.jsxs("h2", { className: "font-heading mt-5 text-[40px] font-bold leading-[1.02] tracking-[-0.02em]", style: { color: Y.charcoal }, children: [b.jsx(jo, { text: "Every Number", delay: .25 }), b.jsx("br", {}), b.jsx(jo, { text: "Is A Life", delay: .5, style: { color: Y.coral } })] }), b.jsx(ot.p, { className: "mt-4 max-w-[300px] text-[15px] leading-relaxed", style: { color: Y.gray }, initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: .95, duration: .7 }, children: "Each dot below is one person lost to an opioid-related overdose in Alameda County in 2023." })] }), b.jsxs("div", { className: "lf-col lf-col-b", children: [b.jsxs(ot.div, { className: "mt-7 rounded-[24px] border border-white/70 bg-white/80 p-4 shadow-[0_18px_40px_-24px_rgba(26,23,25,0.4)]", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 1.05, duration: .7, ease: [.16, 1, .3, 1] }, children: [b.jsx("div", { className: "flex flex-wrap gap-[5px]", children: Array.from({ length: j3 }).map((a, i) => { const s = i === 184; return b.jsx(ot.span, { className: "rounded-full", style: { width: 7, height: 7, background: s ? Y.coral : Y.charcoal }, initial: { opacity: 0, scale: 0 }, animate: { opacity: s ? 1 : .62, scale: s ? 1.5 : 1 }, transition: { delay: 1.25 + i * .0045, duration: .25, ease: "easeOut" } }, i); }) }), b.jsxs(ot.div, { className: "mt-4 flex items-center justify-between", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 2.8, duration: .6 }, children: [b.jsx("span", { className: "font-mono text-[12px] uppercase tracking-[0.18em]", style: { color: Y.gray }, children: "301 Neighbors" }), b.jsxs("span", { className: "flex items-center gap-1.5", children: [b.jsx("span", { className: "h-[7px] w-[7px] rounded-full", style: { background: Y.coral } }), b.jsx("span", { className: "font-mono text-[12px] uppercase tracking-[0.18em]", style: { color: Y.gray }, children: "1 dot = 1 person" })] })] })] })] })] }); }
function R3() { return b.jsxs("div", { className: "lf-scene lf-split lf-lost relative flex h-full w-full flex-col justify-center gap-4 px-7", children: [b.jsxs("div", { className: "lf-col lf-col-a", children: [b.jsx(_o, { num: "01", label: "Alameda County · 2023", color: Y.rose }), b.jsxs("div", { className: "relative", children: [b.jsx(ot.div, { className: "pointer-events-none absolute -left-4 -top-6 h-36 w-36 rounded-full blur-2xl", style: { background: Y.coral, opacity: .22 }, animate: { scale: [1, 1.15, 1] }, transition: { duration: 4, repeat: 1 / 0, ease: "easeInOut" } }), b.jsxs("div", { className: "relative flex items-end gap-3", children: [b.jsx(Co, { to: 301, duration: 1800, delay: 250, className: "font-heading text-[104px] font-bold leading-[0.82] tracking-[-0.045em]" }), b.jsx(ot.div, { initial: { opacity: 0, x: -8 }, animate: { opacity: 1, x: 0 }, transition: { delay: 1.7, duration: .6 }, className: "pb-2", children: b.jsx(In, { bg: Y.coral, fg: "#fff", children: "▲ 60.82%" }) })] }), b.jsxs(ot.p, { className: "font-heading mt-3 text-[20px] font-semibold leading-tight tracking-[-0.01em]", style: { color: Y.charcoal }, initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: .8, duration: .7 }, children: ["Lives lost to opioid-related", b.jsx("br", {}), "overdoses in Alameda County"] })] })] }), b.jsxs("div", { className: "lf-col lf-col-b", children: [b.jsxs(M3, { delay: 1, className: "mt-1", children: [b.jsx("div", { className: "font-mono mb-4 text-[12px] uppercase tracking-[0.2em]", style: { color: Y.gray }, children: "Year over year" }), [{ year: "2022", val: 187, color: Y.rose, delay: 1.2 }, { year: "2023", val: 301, color: Y.charcoal, delay: 1.45 }].map(s => b.jsxs("div", { className: "mb-3 last:mb-0", children: [b.jsxs("div", { className: "mb-1.5 flex items-baseline justify-between", children: [b.jsx("span", { className: "font-mono text-[12px] tracking-[0.16em]", style: { color: Y.gray }, children: s.year }), b.jsx("span", { className: "font-heading text-[18px] font-bold leading-none", style: { color: s.color }, children: b.jsx(Co, { to: s.val, duration: 1200, delay: s.delay * 1e3 }) })] }), b.jsx("div", { className: "h-3 w-full overflow-hidden rounded-full", style: { background: "rgba(26,23,25,0.07)" }, children: b.jsx(ot.div, { className: "h-3 rounded-full", style: { background: s.color }, initial: { width: 0 }, animate: { width: `${s.val / 301 * 100}%` }, transition: { delay: s.delay, duration: 1.1, ease: [.16, 1, .3, 1] } }) })] }, s.year)), b.jsxs(ot.div, { className: "mt-4 flex items-center gap-2 border-t border-dashed pt-3", style: { borderColor: "rgba(26,23,25,0.12)" }, initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 2.1, duration: .6 }, children: [b.jsx("span", { className: "font-heading text-[26px] font-bold leading-none", style: { color: Y.coral }, children: "+114" }), b.jsxs("span", { className: "text-[13px] leading-tight", style: { color: Y.gray }, children: ["more people", b.jsx("br", {}), "than the year before"] })] })] })] })] }); }
let zc = null;
function _l() { if (typeof window > "u")
    return null; if (!zc) {
    const i = window.AudioContext || window.webkitAudioContext;
    if (!i)
        return null;
    zc = new i;
} const a = zc; return a ? (a.state === "suspended" && a.resume(), a) : null; }
function w3() { _l(); }
function N3(a = 1.5, i = .18) { const s = _l(); if (!s)
    return; const o = s.currentTime, c = s.createGain(); c.gain.setValueAtTime(1e-4, o), c.gain.exponentialRampToValueAtTime(i, o + .18), c.gain.setValueAtTime(i, o + a - .1), c.gain.exponentialRampToValueAtTime(1e-4, o + a); const f = s.createBiquadFilter(); f.type = "lowpass", f.frequency.setValueAtTime(420, o), f.frequency.exponentialRampToValueAtTime(2600, o + a), f.Q.value = 6, [1, 1.005, .5].forEach((h, m) => { const y = s.createOscillator(); y.type = m === 2 ? "square" : "sawtooth", y.frequency.setValueAtTime(55 * h, o), y.frequency.exponentialRampToValueAtTime(240 * h, o + a * .8), y.frequency.exponentialRampToValueAtTime(300 * h, o + a); const p = s.createGain(); p.gain.value = m === 2 ? .25 : .5, y.connect(p).connect(f), y.start(o), y.stop(o + a + .05); }), f.connect(c).connect(s.destination); }
function O3(a = .3) { const i = _l(); if (!i)
    return; const s = i.currentTime, o = Math.floor(i.sampleRate * 1.1), c = i.createBuffer(1, o, i.sampleRate), f = c.getChannelData(0); for (let x = 0; x < o; x++)
    f[x] = (Math.random() * 2 - 1) * Math.pow(1 - x / o, 2.2); const h = i.createBufferSource(); h.buffer = c; const m = i.createBiquadFilter(); m.type = "bandpass", m.frequency.setValueAtTime(1800, s), m.frequency.exponentialRampToValueAtTime(320, s + .8), m.Q.value = .8; const y = i.createGain(); y.gain.setValueAtTime(a, s), y.gain.exponentialRampToValueAtTime(1e-4, s + 1), h.connect(m).connect(y).connect(i.destination), h.start(s); const p = i.createOscillator(); p.type = "sine", p.frequency.setValueAtTime(120, s), p.frequency.exponentialRampToValueAtTime(32, s + .45); const v = i.createGain(); v.gain.setValueAtTime(a * 1.1, s), v.gain.exponentialRampToValueAtTime(1e-4, s + .6), p.connect(v).connect(i.destination), p.start(s), p.stop(s + .65); }
function V3(a = .05) { const i = _l(); if (!i)
    return; const s = i.currentTime, o = i.createOscillator(); o.type = "sine", o.frequency.setValueAtTime(880, s), o.frequency.exponentialRampToValueAtTime(1320, s + .07); const c = i.createGain(); c.gain.setValueAtTime(a, s), c.gain.exponentialRampToValueAtTime(1e-4, s + .14), o.connect(c).connect(i.destination), o.start(s), o.stop(s + .16); }
function _3(a = .1) { const i = _l(); if (!i)
    return; const s = i.currentTime; [392, 494, 587, 784].forEach((o, c) => { const f = i.createOscillator(); f.type = "triangle", f.frequency.value = o; const h = i.createGain(), m = s + c * .12; h.gain.setValueAtTime(1e-4, m), h.gain.exponentialRampToValueAtTime(a, m + .25), h.gain.exponentialRampToValueAtTime(1e-4, m + 1.8), f.connect(h).connect(i.destination), f.start(m), f.stop(m + 1.9); }); }
const Rc = 105007, wc = 40990;
function B3({ color: a = Y.charcoal }) { return b.jsxs("svg", { width: "86", height: "40", viewBox: "0 0 86 40", fill: "none", children: [b.jsx("path", { d: "M4 29c0-4 2-6 6-7l9-9c2-2 4-3 7-3h17c3 0 5 1 7 3l7 8 17 2c5 1 8 3 8 6v4c0 2-1 3-3 3H7c-2 0-3-1-3-3v-4z", fill: a }), b.jsx("path", { d: "M24 15l-6 6h17V13h-7c-2 0-3 .6-4 2z", fill: "rgba(255,255,255,0.85)" }), b.jsx("path", { d: "M40 13h5c2 0 3 .5 4 2l5 6H40V13z", fill: "rgba(255,255,255,0.85)" }), b.jsx("circle", { cx: "23", cy: "33", r: "6", fill: "#262226" }), b.jsx("circle", { cx: "23", cy: "33", r: "2.4", fill: Y.blush }), b.jsx("circle", { cx: "63", cy: "33", r: "6", fill: "#262226" }), b.jsx("circle", { cx: "63", cy: "33", r: "2.4", fill: Y.blush }), b.jsx("rect", { x: "76", y: "22", width: "7", height: "4", rx: "2", fill: Y.coral })] }); }
function U3({ soundOn: a }) { const [i, s] = Q.useState(!1); Q.useEffect(() => { a && N3(1.55, .14); const c = setTimeout(() => { s(!0), a && O3(.26); }, 1500); return () => clearTimeout(c); }, [a]); const o = (Rc / wc).toFixed(1); return b.jsxs(ot.div, { className: "lf-scene lf-split lf-cars relative flex h-full w-full flex-col justify-center px-7", animate: i ? { x: [0, -9, 8, -6, 4, -2, 0], y: [0, 5, -4, 3, -1, 0] } : {}, transition: { duration: .55, ease: "easeOut" }, children: [b.jsxs("div", { className: "lf-col lf-col-a", children: [b.jsx(_o, { num: "02", label: "In Perspective", color: Y.lavender }), b.jsxs("h2", { className: "font-heading mt-5 text-[34px] font-bold leading-[1.04] tracking-[-0.02em]", style: { color: Y.charcoal }, children: ["More overdose deaths ", b.jsx("br", {}), "than", " ", b.jsx("span", { style: { color: Y.lavender }, children: "car accidents." })] }), b.jsxs(ot.div, { className: "lf-footer mt-5 flex items-center justify-between", initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: { delay: 2.6, duration: .6 }, children: [b.jsxs(In, { bg: "rgba(167,139,250,0.16)", fg: Y.lavender, dot: Y.lavender, pulse: !0, children: [o, "× more"] }), b.jsx("span", { className: "font-mono text-[11px] uppercase tracking-[0.14em]", style: { color: Y.gray }, children: "U.S. 2023 · CDC / NHTSA" })] })] }), b.jsxs("div", { className: "lf-col lf-col-b", children: [b.jsx("div", { className: "lf-trackbox mt-6", children: b.jsxs("div", { className: "lf-track relative h-[88px] overflow-hidden rounded-[22px] border border-white/70 bg-white/80 shadow-[0_18px_40px_-26px_rgba(26,23,25,0.45)]", children: [!i && [18, 34, 50, 66].map((c, f) => b.jsx(ot.span, { className: "absolute h-[2px] rounded-full", style: { top: c, background: Y.rose, opacity: .45 }, initial: { left: "100%", width: 10 }, animate: { left: "-20%", width: [10, 34, 10] }, transition: { duration: .55, repeat: 1 / 0, delay: f * .12, ease: "linear" } }, f)), b.jsx("div", { className: "absolute bottom-[14px] left-0 right-0 h-px", style: { background: "rgba(26,23,25,0.18)" } }), b.jsx(ot.div, { className: "absolute bottom-[14px] right-3 w-[6px] rounded-full", style: { background: Y.charcoal, height: 46 }, animate: i ? { rotate: 14, x: 4 } : { rotate: 0 }, transition: { type: "spring", stiffness: 160, damping: 10 } }), b.jsx(ot.div, { className: "absolute bottom-[8px]", style: { left: 0, transformOrigin: "83px 50%" }, initial: { x: -100 }, animate: i ? { x: 201, scaleX: .86 } : { x: 201 }, transition: i ? { type: "spring", stiffness: 300, damping: 12 } : { duration: 1.38, ease: [.3, 0, .9, .6] }, children: b.jsx(B3, {}) }), i && b.jsxs(b.Fragment, { children: [b.jsx(ot.span, { className: "absolute bottom-[26px] right-[18px] h-3 w-3 rounded-full", style: { background: Y.coral }, initial: { scale: 0, opacity: .9 }, animate: { scale: 9, opacity: 0 }, transition: { duration: .7, ease: "easeOut" } }), Array.from({ length: 10 }).map((c, f) => { const h = Math.PI / 1.4 * (f / 9) + Math.PI * .75; return b.jsx(ot.span, { className: "absolute bottom-[28px] right-[22px] rounded-full", style: { width: 4, height: 4, background: f % 2 ? Y.lavender : Y.charcoal }, initial: { x: 0, y: 0, opacity: 1 }, animate: { x: Math.cos(h) * (28 + f * 4), y: Math.sin(h) * (26 + f * 3) - 10, opacity: 0 }, transition: { duration: .85, ease: "easeOut" } }, f); })] })] }) }), b.jsx("div", { className: "mt-6 space-y-4", children: [{ label: "Drug overdose deaths", val: Rc, color: Y.charcoal, pct: 100, delay: 1.9 }, { label: "Car crash deaths", val: wc, color: Y.lavender, pct: wc / Rc * 100, delay: 2.15 }].map(c => b.jsxs("div", { children: [b.jsxs("div", { className: "mb-1.5 flex items-baseline justify-between", children: [b.jsx("span", { className: "font-mono text-[12px] uppercase tracking-[0.16em]", style: { color: Y.gray }, children: c.label }), b.jsx("span", { className: "font-heading text-[19px] font-bold leading-none", style: { color: c.color }, children: b.jsx(Co, { to: c.val, duration: 1400, delay: c.delay * 1e3 }) })] }), b.jsx("div", { className: "h-[13px] w-full overflow-hidden rounded-full", style: { background: "rgba(26,23,25,0.07)" }, children: b.jsx(ot.div, { className: "h-[13px] rounded-full", style: { background: c.color }, initial: { width: 0 }, animate: { width: `${c.pct}%` }, transition: { delay: c.delay, duration: 1.1, ease: [.16, 1, .3, 1] } }) })] }, c.label)) })] })] }); }
const v1 = 14, L3 = 7, m0 = v1 * L3;
function H3({ soundOn: a }) { return Q.useEffect(() => { a && _3(.07); }, [a]), b.jsxs("div", { className: "lf-scene lf-hope relative flex h-full w-full flex-col justify-center px-7", children: [b.jsx(ot.div, { className: "pointer-events-none absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full blur-3xl", style: { background: Y.lavenderSoft, opacity: .5 }, animate: { scale: [.9, 1.15, .9], opacity: [.35, .55, .35] }, transition: { duration: 5, repeat: 1 / 0, ease: "easeInOut" } }), b.jsxs("div", { className: "lf-hope-inner relative flex flex-col", children: [b.jsxs("div", { className: "lf-col lf-col-a", children: [b.jsx(_o, { num: "03", label: "There Is Hope", color: Y.lavender }), b.jsxs("div", { className: "mt-5 flex items-end gap-2", children: [b.jsx(Co, { to: 22, duration: 1600, delay: 250, className: "font-heading text-[96px] font-bold leading-[0.8] tracking-[-0.045em]" }), b.jsx("span", { className: "font-heading pb-2 text-[30px] font-bold leading-none tracking-[-0.02em]", style: { color: Y.lavender }, children: "Million" })] }), b.jsxs("h2", { className: "font-heading mt-4 text-[26px] font-bold leading-[1.08] tracking-[-0.015em]", style: { color: Y.charcoal }, children: [b.jsx(jo, { text: "Americans are living", delay: .9 }), b.jsx("br", {}), b.jsx(jo, { text: "in recovery today.", delay: 1.1 })] }), b.jsx(ot.p, { className: "lf-last mt-5 text-[14px] leading-relaxed", style: { color: Y.gray }, initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 2.7, duration: .7 }, children: "Behind every number is a person — and recovery happens every single day in Alameda County." })] }), b.jsxs("div", { className: "lf-col lf-col-b", children: [b.jsxs("div", { className: "mt-6 rounded-[24px] border border-white/70 bg-white/80 p-4 shadow-[0_18px_40px_-26px_rgba(26,23,25,0.4)]", children: [b.jsx("div", { className: "grid gap-[6px]", style: { gridTemplateColumns: `repeat(${v1}, minmax(0,1fr))` }, children: Array.from({ length: m0 }).map((i, s) => b.jsx(ot.span, { className: "aspect-square rounded-full", initial: { background: "rgba(26,23,25,0.12)", scale: .8 }, animate: { background: s < m0 - 12 ? Y.lavender : "rgba(26,23,25,0.12)", scale: 1 }, transition: { delay: 1.3 + s * .012, duration: .4, ease: "easeOut" } }, s)) }), b.jsxs(ot.div, { className: "mt-4 flex items-center justify-between", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 2.5, duration: .6 }, children: [b.jsx(In, { bg: "rgba(167,139,250,0.16)", fg: Y.lavender, dot: Y.lavender, pulse: !0, children: "Recovery is real" }), b.jsx("span", { className: "font-mono text-[11px] uppercase tracking-[0.14em]", style: { color: Y.gray }, children: "SAMHSA" })] })] })] })] })] }); }
function q3({ onEnter: a }) { return b.jsxs("div", { className: "lf-scene lf-outro relative flex h-full w-full flex-col items-center justify-center px-8 text-center", children: [b.jsx(ot.div, { className: "pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl", style: { background: Y.coral, opacity: .18 }, animate: { scale: [.95, 1.1, .95] }, transition: { duration: 5, repeat: 1 / 0, ease: "easeInOut" } }), b.jsxs("div", { className: "relative z-10 flex flex-col items-center", children: [b.jsx(g1, { size: 76 }), b.jsx(ot.h2, { className: "font-heading mt-6 text-[36px] font-bold leading-[1.02] tracking-[-0.02em]", style: { color: Y.charcoal }, initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { delay: .4, duration: .7 }, children: "Alameda Lifeline" }), b.jsx(ot.p, { className: "mt-3 max-w-[280px] text-[15px] leading-relaxed", style: { color: Y.gray }, initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { delay: .6, duration: .7 }, children: "Teaching people about the opioid crisis across Alameda County along with resources to combat it." }), b.jsxs(ot.div, { className: "mt-5 flex flex-wrap items-center justify-center gap-2", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: .85, duration: .6 }, children: [b.jsx(In, { bg: "rgba(255,127,130,0.14)", fg: Y.coral, children: "Learn" }), b.jsx(In, { bg: "rgba(192,132,151,0.16)", fg: Y.rose, children: "Find Naloxone" }), b.jsx(In, { bg: "rgba(167,139,250,0.16)", fg: Y.lavender, children: "Test Yourself" })] }), b.jsx(ot.button, { onClick: a, className: "font-heading mt-9 rounded-full px-9 py-4 text-[17px] font-semibold text-white shadow-[0_16px_34px_-14px_rgba(255,127,130,0.95)]", style: { background: Y.charcoal }, initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { delay: 1.05, type: "spring", stiffness: 160, damping: 16 }, whileHover: { scale: 1.04 }, whileTap: { scale: .96 }, children: "Enter the app" }), b.jsx(ot.p, { className: "font-mono mt-6 text-[11px] uppercase tracking-[0.24em]", style: { color: Y.gray }, initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 1.3, duration: .7 }, children: "Built by the Medical Security Index" })] })] }); }
const p0 = ["to an overdose", "in a crisis", "to save a life", "when it matters"];
function Y3() { const [a, i] = Q.useState(0); return Q.useEffect(() => { const s = setInterval(() => i(o => (o + 1) % p0.length), 2200); return () => clearInterval(s); }, []), b.jsx("span", { className: "relative inline-flex min-w-[86px] overflow-hidden align-bottom", children: b.jsx(Uf, { mode: "wait", initial: !1, children: b.jsx(ot.span, { initial: { y: 12, opacity: 0 }, animate: { y: 0, opacity: 1 }, exit: { y: -12, opacity: 0 }, transition: { duration: .35, ease: "easeOut" }, className: "font-heading font-semibold", style: { color: Y.lavender }, children: p0[a] }, a) }) }); }
const af = [{ icon: f3, title: "Build Awareness", tag: "Learn", color: Y.coral, blurb: b.jsxs(b.Fragment, { children: ["Information about overdoses", b.jsx("br", {}), "and how to respond"] }) }, { icon: p3, title: "Find Naloxone", tag: "Map · ACBH data", color: Y.rose, blurb: b.jsxs(b.Fragment, { children: ["Interactive map of naloxone sites,", b.jsx("br", {}), "built on public ACBH data"] }) }, { icon: awarenessBrainIcon, title: "Test Your Knowledge", tag: "Scenarios", color: Y.lavender, blurb: b.jsxs(b.Fragment, { children: ["Interactive scenarios to learn", b.jsx("br", {}), "how to respond ", b.jsx(Y3, {})] }) }];
const LIFELINE_MAP_POINTS = [{ "address": "2350 5th St.", "city": "Alameda", "fts": "No", "hours": "24/7, but need to ask worker for access to NSB", "lat": 37.7828075, "lng": -122.2817819, "location": "Outside Office", "name": "Operation Dignity: Dignity Village", "zip": "94501" }, { "address": "2070 Clinton Ave", "city": "Alameda", "fts": "No", "hours": "24/7", "lat": 37.7627262, "lng": -122.2539508, "location": "Outside of ED", "name": "AHS Alameda Hospital: Emergency Department", "zip": "94501" }, { "address": "815 Atlantic Ave, Suite 100", "city": "Alameda", "fts": "No", "hours": "Mon-Fri: 8am-5pm", "lat": 37.7807688, "lng": -122.2724121, "location": "Inside Lobby", "name": "AHS Marina Wellness", "zip": "94501" }, { "address": "1931 Center St", "city": "Berkeley", "fts": "Yes", "hours": "Every day 9:00am-5:00pm", "lat": 37.8699724, "lng": -122.27181589999998, "location": "Inside of the facility.", "name": "Dorothy Day House", "zip": "94704" }, { "address": "830 University Ave", "city": "Berkeley", "fts": "Yes", "hours": "24/7", "lat": 37.8678222, "lng": -122.2972547, "location": "Sidewalk of the front entryway ramp, next to the sharps disposal kiosk", "name": "Berkeley Free Clinic", "zip": "94710" }, { "address": "2150 Dwight Way", "city": "Berkeley", "fts": "No", "hours": "Mon-Thurs 9:00am - 5:00pm", "lat": 37.863892799999995, "lng": -122.265875, "location": "Outside the front door", "name": "Alameda County Homeless Action Center", "zip": "94704" }, { "address": "1835 Allston Way", "city": "Berkeley", "fts": "Yes", "hours": "Mon-Fri 8:30am - 4:00pm", "lat": 37.8688776, "lng": -122.2736517, "location": "In the middle of the conference room", "name": "Options Recovery Services: Berkeley", "zip": "94703" }, { "address": "2809 Telegraph Ave", "city": "Berkeley", "fts": "Yes", "hours": "8:00am - 4:30pm", "lat": 37.8591847, "lng": -122.2588815, "location": "Front lobby", "name": "BACS: North County Housing Resource Center", "zip": "94705" }, { "address": "2090 Kittredge Street", "city": "Berkeley", "fts": "Yes", "hours": "24/7", "lat": 37.8681967, "lng": -122.2684903, "location": "Outside library front entrance. Fentanyl test strips on the side of the box", "name": "Berkeley Public Library: Central Library", "zip": "94704" }, { "address": "1980 Allston Way, H105", "city": "Berkeley", "fts": "Yes", "hours": "School hours", "lat": 37.8679926, "lng": -122.2706171, "location": "Lobby of Health Center. *Members of the public who are not students at Berkeley High are not allowed on campus and will need to call the Health Center to access the naloxone.", "name": "Berkeley High School Health Clinic", "zip": "94704" }, { "address": "1900 6th St", "city": "Berkeley", "fts": "No", "hours": "Mon-Fri: 8am-5pm", "lat": 37.869075599999995, "lng": -122.298435, "location": "Inside center", "name": "West Berkeley Family Wellness Center", "zip": "94710" }, { "address": "2130 Center St Ste 200", "city": "Berkeley", "fts": "No", "hours": "Monday 9:00am - 6:00pm Tues- Thurs 9:00am - 7:00pm Friday 9:00am - 6:00pm", "lat": 37.870163999999995, "lng": -122.2670552, "location": "Lobby", "name": "Pacific Center for Human Growth", "zip": "94704" }, { "address": "1931 Center Street", "city": "Berkeley", "fts": "Yes", "hours": "Mon-Fri: 9am-4pm. Closed on weekends", "lat": 37.8699724, "lng": -122.27181589999998, "location": "Inside Main Hall", "name": "Options Recovery Services: Berkeley Center Street", "zip": "94704" }, { "address": "1170 The Alameda", "city": "Berkeley", "fts": "Yes", "hours": "24/7", "lat": 37.8854432, "lng": -122.27544379999998, "location": "Outside of Library", "name": "Berkeley Public Library: North Branch", "zip": "94701" }, { "address": "1901 Russell Street", "city": "Berkeley", "fts": "Yes", "hours": "24/7", "lat": 37.856397300000005, "lng": -122.2709272, "location": "Outside of Library", "name": "Berkeley Public Library: Tarea Hall Pittman Branch", "zip": "94703" }, { "address": "2940 Benvenue Avenue", "city": "Berkeley", "fts": "Yes", "hours": "24/7", "lat": 37.8565951, "lng": -122.2543956, "location": "Outside of Library", "name": "Berkeley Public Library: Claremont Branch", "zip": "94705" }, { "address": "1125 University Ave", "city": "Berkeley", "fts": "Yes", "hours": "24/7", "lat": 37.8695508, "lng": -122.2909654, "location": "Outside of Library", "name": "Berkeley Public Library: West Branch", "zip": "94702" }, { "address": "5325 Broder Blvd", "city": "Dublin", "fts": "Yes", "hours": "SRJ lobby hours", "lat": 37.7179702, "lng": -121.8877735, "location": "Inside lobby", "name": "Santa Rita Jail", "zip": "94568" }, { "address": "6361 Clark Avenue", "city": "Dublin", "fts": "No", "hours": "Mon-Fri 8am-5pm. Closed on weekends, but officer is there if need support", "lat": 37.7043656, "lng": -121.9196992, "location": "Lobby", "name": "Dublin Police Services", "zip": "94568" }, { "address": "2400 Stevenson Blvd.", "city": "Fremont", "fts": "Yes", "hours": "Please check library hours Mon & Tues 12:00pm - 8:00pm Wed & Thurs 11:00am - 6:00pm Fri & Sat 10:00am - 5:00pm Sun 1:00pm - 5:00pm", "lat": 37.5508057, "lng": -121.971058, "location": "Inside lobby rotunda", "name": "Alameda County Library: Fremont Main Library", "zip": "94538" }, { "address": "3300 Capitol Ave. Building C", "city": "Fremont", "fts": "Yes", "hours": "24/7 inside facility", "lat": 37.552315799999995, "lng": -121.981145, "location": "In Community common area", "name": "BACS: Fremont Navigation Center", "zip": "94538" }, { "address": "4069 Grimmer Blvd", "city": "Fremont", "fts": "Yes", "hours": "8:30am - 5:00pm", "lat": 37.5104612, "lng": -121.9643443, "location": "Front lobby", "name": "BACS: South County Wellness Center", "zip": "94538" }, { "address": "37323 Fremont Blvd", "city": "Fremont", "fts": "No", "hours": "Mon-Fri 9:00am - 7:00pm Sat 9:00am - 5:00pm", "lat": 37.558009, "lng": -122.0071521, "location": "Inside near pharmacy entrance", "name": "Haller's Pharmacy", "zip": "94536" }, { "address": "4067 Peralta Blvd", "city": "Fremont", "fts": "No", "hours": "24/7", "lat": 37.557558199999995, "lng": -122.0075807, "location": "Outside Medical Supply Entrance", "name": "Haller's Medical Supply", "zip": "94536" }, { "address": "4075 Papazian Way, Suite 102", "city": "Fremont", "fts": "Yes", "hours": "Mon - Fri 8:00am - 5:00pm", "lat": 37.5334106, "lng": -121.962062, "location": "Inside drop in center", "name": "Abode Services: Fremont Housing Resource Center", "zip": "94538" }, { "address": "1999 Mowry Ave. Suite F", "city": "Fremont", "fts": "Yes", "hours": "Mon-Fri: 9am-5pm", "lat": 37.5582825, "lng": -121.9811688, "location": "Lobby", "name": "BACH: Mowry III", "zip": "94538" }, { "address": "1901 Harder Rd", "city": "Hayward", "fts": "Yes", "hours": "24/7", "lat": 37.6519012, "lng": -122.0519608, "location": "CSUEB Student Housing, breezeway of Calaveras Residence and Lassen Hall", "name": "CSU East Bay", "zip": "94542" }, { "address": "107 Jackson St.", "city": "Hayward", "fts": "Yes", "hours": "Mon-Fri 10:00am-8:00pm", "lat": 37.6575946, "lng": -122.086445, "location": "Lobby - by the front desk", "name": "Second Chance: Hayward Recovery Center", "zip": "94544" }, { "address": "2575 Depot Road", "city": "Hayward", "fts": "No", "hours": "24/7", "lat": 37.638824199999995, "lng": -122.1140802, "location": "Outside of facility", "name": "Horizon Treatment Services: Cronin House", "zip": "94545" }, { "address": "590 B St.", "city": "Hayward", "fts": "Yes", "hours": "8:30am - 5:00pm", "lat": 37.670188, "lng": -122.0897825, "location": "Front lobby", "name": "BACS: HEDCO Wellness Center", "zip": "94541" }, { "address": "27287 Patrick Ave", "city": "Hayward", "fts": "Yes", "hours": "10:00am - 4:00pm", "lat": 37.6339388, "lng": -122.0796611, "location": "Out front by the check-in table for the Resource Center and Food Pantry", "name": "First Presbyterian Shelter: South Hayward Parish", "zip": "94544" }, { "address": "25555 Hesparian Blvd Building 2300", "city": "Hayward", "fts": "No", "hours": "24/7", "lat": 37.6397503, "lng": -122.1050045, "location": "Front of the Health Center", "name": "Chabot College: Student Health Center", "zip": "94545" }, { "address": "795 Fletcher Lane", "city": "Hayward", "fts": "No", "hours": "24/7", "lat": 37.6654233, "lng": -122.0803345, "location": "Outside the reception/dosing door.", "name": "MedMark: Hayward", "zip": "94544" }, { "address": "664 Southland Mall", "city": "Hayward", "fts": "No", "hours": "Mon-Fri: 8:30am-5pm", "lat": 37.6511146, "lng": -122.1025846, "location": "Inside Lobby behind security desk on the left", "name": "AHS Hayward Wellness", "zip": "94545" }, { "address": "450 N. Livermore Ave.", "city": "Livermore", "fts": "No", "hours": "Monday - Friday 9:00am- 5:00pm", "lat": 37.6867836, "lng": -121.7707166, "location": "the lobby at the entrance/exit of the community room", "name": "Vineyard Resource Center", "zip": "94551" }, { "address": "150 N L St.", "city": "Livermore", "fts": "No", "hours": "Monday-Thursday 1:00-5:00 PM and Friday-Saturday 12:00PM-4:00PM", "lat": 37.68339, "lng": -121.7719471, "location": "Inside Food Pantry", "name": "Tri-Valley Haven: Pantry", "zip": "94550" }, { "address": "6330 Thornton Ave", "city": "Newark", "fts": "Yes", "hours": "Mon-Fri 10:00am-8:00pm", "lat": 37.5340667, "lng": -122.0322603, "location": "Lobby - by the front desk", "name": "Second Chance: Tri-Cities Center", "zip": "94560" }, { "address": "6066 Civic Terrace Ave", "city": "Newark", "fts": "No", "hours": "Mon-Fri: 8:30am-4:30pm", "lat": 37.5359712, "lng": -122.0279346, "location": "Inside Lobby", "name": "AHS Newark Wellness", "zip": "94560" }, { "address": "700 Adeline St.", "city": "Oakland", "fts": "Yes", "hours": "24/7", "lat": 37.804195, "lng": -122.2875119, "location": "Outside front entrance, on the sidewalk at the top of the ramp", "name": "Baywell Health: West Oakland Clinic", "zip": "94607" }, { "address": "7515 International Blvd", "city": "Oakland", "fts": "Yes", "hours": "24/7", "lat": 37.758016999999995, "lng": -122.185406, "location": "Outside facility next to the gate", "name": "EOCP: Crossroads Shelter", "zip": "94621" }, { "address": "2811 Adeline Street", "city": "Oakland", "fts": "Yes", "hours": "Mon-Fri 9:00am - 5:00pm", "lat": 37.82054300000001, "lng": -122.2823694, "location": "Inside lobby", "name": "CAL-PEP", "zip": "94608" }, { "address": "7200 Bancroft Avenue, Suite 275", "city": "Oakland", "fts": "Yes", "hours": "Mon-Fri 9:00am - 5:00pm", "lat": 37.7671679, "lng": -122.1767049, "location": "Inside BOSS office at Eastmont Mall", "name": "BOSS: WERC", "zip": "94605" }, { "address": "1630 10th Street", "city": "Oakland", "fts": "Yes", "hours": "Mon-Fri 8:30am - 4:00pm", "lat": 37.809259100000006, "lng": -122.2969765, "location": "In the lobby, next to the water fountain", "name": "Options Recovery Services: Oakland", "zip": "94607" }, { "address": "555 27th St.", "city": "Oakland", "fts": "Yes", "hours": "24/7, but need to ask worker for access to NSB", "lat": 37.8166233, "lng": -122.2706242, "location": "Outside Office", "name": "Operation Dignity: Northgate Community Cabins", "zip": "94612" }, { "address": "3502 Mandela Parkway", "city": "Oakland", "fts": "No", "hours": "24/7, but need to ask worker for access to NSB", "lat": 37.8248535, "lng": -122.2893356, "location": "Outside Office", "name": "Operation Dignity: Mandela Cabins South", "zip": "94608" }, { "address": "3501 Mandela Parkway", "city": "Oakland", "fts": "No", "hours": "24/7, but need to ask worker for access to NSB", "lat": 37.8260277, "lng": -122.2900138, "location": "Outside office", "name": "Operation Dignity: Mandela Cabins North", "zip": "94608" }, { "address": "1315 Fruitvale Ave", "city": "Oakland", "fts": "Yes", "hours": "Mon 9:00am - 5:00pm Tues-Thurs 11:00am - 7:00pm Fri 9:00am - 5:00pm", "lat": 37.777187, "lng": -122.2263853, "location": "Inside waiting room", "name": "La Familia", "zip": "94601" }, { "address": "516 31st St.", "city": "Oakland", "fts": "Yes", "hours": "24/7 inside facility", "lat": 37.8203203, "lng": -122.2674593, "location": "NSB box is placed between both program door. The white door leads to the CRT and the black door is the exit and entry door to CSU", "name": "BACS: Amber House", "zip": "94609" }, { "address": "629 Oakland Avenue", "city": "Oakland", "fts": "Yes", "hours": "9:00am - 4:00pm", "lat": 37.8207856, "lng": -122.25099899999998, "location": "Front lobby", "name": "BACS: Towne House", "zip": "94611" }, { "address": "1888 MLK Jr. Way", "city": "Oakland", "fts": "No", "hours": "Monday - Friday 9:00am - 5:00pm", "lat": 37.80899670000001, "lng": -122.2740367, "location": "In the lobby", "name": "HCEB: Soul Sanctuary", "zip": "94612" }, { "address": "796 66th Ave", "city": "Oakland", "fts": "No", "hours": "Accessible to residents 24/7", "lat": 37.7552698, "lng": -122.20307, "location": "Front Office", "name": "Urban Alchemy 66th Ave. RV Site", "zip": "94621" }, { "address": "5323 Foothill Blvd", "city": "Oakland", "fts": "No", "hours": "24/7", "lat": 37.7724194, "lng": -122.20016789999998, "location": "Outside the building", "name": "HEPPAC: Foothill", "zip": "94601" }, { "address": "2816 Havenscourt Blvd", "city": "Oakland", "fts": "No", "hours": "24/7", "lat": 37.7700016, "lng": -122.1817948, "location": "Outside the building", "name": "HEPPAC: Havenscourt", "zip": "94605" }, { "address": "3650 Mandela Parkway", "city": "Oakland", "fts": "Yes", "hours": "24/7 inside facility", "lat": 37.8272486, "lng": -122.2882728, "location": "Inside gated lobby *Guests will need to stop at the gate and get the naloxone from the security staff", "name": "HCEB: Mandela House Program", "zip": "94608" }, { "address": "3207 Lakeshore Ave", "city": "Oakland", "fts": "Yes", "hours": "Monday & Tuesday: 10:00am-8:30pm Wednesday - Friday: 10:00am-6:00pm", "lat": 37.8103972, "lng": -122.2460367, "location": "Lobby", "name": "Oakland LGBTQ Community Center", "zip": "94610" }, { "address": "925 Brockhurst Street", "city": "Oakland", "fts": "No", "hours": "24/7", "lat": 37.8228501, "lng": -122.2769647, "location": "Outside", "name": "St. Mary's Center", "zip": "94608" }, { "address": "10429 International Blvd", "city": "Oakland", "fts": "No", "hours": "Mon-Fri: 6:00am - 2:15pm Saturday: 7:45 am - 10:45 am", "lat": 37.7392819, "lng": -122.1671435, "location": "In Lobby", "name": "Lifeline Treatment Services", "zip": "94603" }, { "address": "2577 San Pablo Ave", "city": "Oakland", "fts": "No", "hours": "Mon, Tues, Thurs, Friday - 9am-3pm. Wednesday - 9am-1pm.", "lat": 37.8170326, "lng": -122.2757121, "location": "In lobby", "name": "Lifelong: Our Place", "zip": "94612" }, { "address": "1701 E 19th Street", "city": "Oakland", "fts": "No", "hours": "Mon-Fri 9:00am - 5:30pm", "lat": 37.7901534, "lng": -122.2409273, "location": "Inside of food pantry area", "name": "Trybe: SAP Center", "zip": "94606" }, { "address": "18th Avenue & Foothill Blvd", "city": "Oakland", "fts": "No", "hours": "Mon-Fri: 9:00am - 6:30pm", "lat": 37.788764, "lng": -122.2405203, "location": "On the court - outside", "name": "Trybe: SAP Courts", "zip": "94606" }, { "address": "655 International Blvd", "city": "Oakland", "fts": "No", "hours": "Mon-Fri: 9:00am - 6:30pm", "lat": 37.794315, "lng": -122.2530805, "location": "In the lobby", "name": "Trybe: Clinton Park", "zip": "94606" }, { "address": "2222 E. 15th St.", "city": "Oakland", "fts": "No", "hours": "Mon-Fri: 9:00am - 5:00pm", "lat": 37.7854399, "lng": -122.2362425, "location": "Inside the Garden", "name": "Trybe: E.15th Garden", "zip": "94606" }, { "address": "2272 San Pablo", "city": "Oakland", "fts": "No", "hours": "24/7", "lat": 37.8131251, "lng": -122.2739319, "location": "Outside of entrance", "name": "St. Vincent De Paul: San Pablo Entrance", "zip": "94612" }, { "address": "2272 San Pablo", "city": "Oakland", "fts": "No", "hours": "Tuesday-Saturday 9am - 3pm", "lat": 37.8131251, "lng": -122.2739319, "location": "Inside lobby", "name": "St. Vincent De Paul: Community Center Lobby", "zip": "94612" }, { "address": "675 23rd St.", "city": "Oakland", "fts": "No", "hours": "24/7", "lat": 37.8134174, "lng": -122.2732944, "location": "Outside of enterance", "name": "St. Vincent De Paul: 23rd Entrance", "zip": "94612" }, { "address": "675 23rd St.", "city": "Oakland", "fts": "No", "hours": "Every day: 5:30pm - 7am", "lat": 37.8134174, "lng": -122.2732944, "location": "Inside Shelter Lobby", "name": "St. Vincent De Paul: Shelter Lobby", "zip": "94612" }, { "address": "3600 Broadway", "city": "Oakland", "fts": "No", "hours": "24/7 inside", "lat": 37.8243722, "lng": -122.2582293, "location": "Inside of first double doors of ED. Before security scanner", "name": "Kaiser Permanente: Oakland Emergency Department", "zip": "94611" }, { "address": "2551 MacArthur Blvd", "city": "Oakland", "fts": "No", "hours": "Varies", "lat": 37.7990561, "lng": -122.2116525, "location": "Community Space", "name": "Trybe: The LinK Cafe", "zip": "94602" }, { "address": "1411 E. 31st St", "city": "Oakland", "fts": "No", "hours": "24/7", "lat": 37.7979281, "lng": -122.232063, "location": "Outside of ED entrance, on the sidewalk", "name": "AHS Highland Hospital: Emergency Department", "zip": "94602" }, { "address": "1411 E 31st St", "city": "Oakland", "fts": "No", "hours": "Mon-Fri: 9:00am - 5:00pm", "lat": 37.7979281, "lng": -122.232063, "location": "Highland Hospital OA-1", "name": "AHS Highland Hospital: Bridge Clinic", "zip": "94602" }, { "address": "1411 E 31st St", "city": "Oakland", "fts": "No", "hours": "Mon-Fri: 6:45am - 5:00pm", "lat": 37.7979281, "lng": -122.232063, "location": "Bldg E, Fl E-2", "name": "AHS Highland Hospital: Dental Clinic", "zip": "94602" }, { "address": "1411 E. 31st St.", "city": "Oakland", "fts": "No", "hours": "24/7 inside hospital", "lat": 37.7979281, "lng": -122.232063, "location": "Take K building elevator to the 7th floor.", "name": "AHS Highland Hospital: K7", "zip": "94602" }, { "address": "1411 E. 31st St.", "city": "Oakland", "fts": "No", "hours": "24/7 inside hospital", "lat": 37.7979281, "lng": -122.232063, "location": "Take K Building elevator to pharmacy (K3).", "name": "AHS Highland Hospital: K3 Pharmacy", "zip": "94602" }, { "address": "1411 E 31st St.", "city": "Oakland", "fts": "No", "hours": "24/7 inside hospital", "lat": 37.7979281, "lng": -122.232063, "location": "Exit the elevator on the 6th floor of the K building elevator", "name": "AHS Highland Hospital: K6", "zip": "94602" }, { "address": "6955 Foothill Blvd.", "city": "Oakland", "fts": "No", "hours": "Mon-Fri: 8:30am - 5:00pm", "lat": 37.7694355, "lng": -122.1752206, "location": "In Main Entrance Lobby", "name": "AHS Eastmont Wellness Center", "zip": "94605" }, { "address": "386 14th Street", "city": "Oakland", "fts": "No", "hours": "Mon, Wed, Thurs, Fri: 8:30am - 4:30pm Tues: 1:00 - 4:30pm", "lat": 37.8038847, "lng": -122.2694449, "location": "In Lobby", "name": "Trust Clinic", "zip": "94612" }, { "address": "99th Ave. & International Blvd.", "city": "Oakland", "fts": "No", "hours": "24/7", "lat": 37.7436047, "lng": -122.1700575, "location": "Outside", "name": "Roots 99th", "zip": "94603" }, { "address": "84th Ave. & International Blvd.", "city": "Oakland", "fts": "No", "hours": "24/7", "lat": 37.7540536, "lng": -122.1777884, "location": "Outside", "name": "Roots 84th", "zip": "94621" }, { "address": "5555 West Las Positas", "city": "Pleasanton", "fts": "No", "hours": "24/7", "lat": 37.6932688, "lng": -121.8797421, "location": "Outside of the Emergency Department", "name": "Stanford Health Care Tri-Valley: Pleasanton Emergency Department", "zip": "94588" }, { "address": "15480 Foothill Blvd", "city": "San Leandro", "fts": "No", "hours": "24/7", "lat": 37.7087633, "lng": -122.1192419, "location": "Outside Cherry Hill Sobering on the sidewalk", "name": "Cherry Hill Sobering", "zip": "94578" }, { "address": "1300 E. 14th Street", "city": "San Leandro", "fts": "Yes", "hours": "Mon-Fri 8:30am - 4:00pm", "lat": 37.7249661, "lng": -122.1555763, "location": "Next to drinking fountain", "name": "Options Recovery Services: San Leandro", "zip": "94577" }, { "address": "1100 San Leandro Blvd.", "city": "San Leandro", "fts": "No", "hours": "Mon-Fri 8:00am - 5:00pm", "lat": 37.7254674, "lng": -122.1610675, "location": "First Floor Lobby", "name": "Alameda County Public Health Department", "zip": "94577" }, { "address": "16335 E. 14th Street", "city": "San Leandro", "fts": "Yes", "hours": "24/7", "lat": 37.6954994, "lng": -122.1154301, "location": "Outside rear entrance, on the parking lot side", "name": "REACH Ashland Youth Center", "zip": "94578" }, { "address": "3081 Teagarden St", "city": "San Leandro", "fts": "Yes", "hours": "Monday - Friday: 8:00am - 6:00pm", "lat": 37.7050083, "lng": -122.1536732, "location": "Lobby", "name": "Davis Street Primary Care Clinic", "zip": "94577" }, { "address": "2500 Fairmont Dr", "city": "San Leandro", "fts": "No", "hours": "Monday - Friday: 8:30am - 4:00pm", "lat": 37.7161233, "lng": -122.1182067, "location": "If you go to the facility you can go through security, take a right down hallway and immediate left and you'll see it there along the wall (to the left of the ATM)", "name": "Alameda County Juvenile Justice Center", "zip": "94578" }, { "address": "13855 E 14th St.", "city": "San Leandro", "fts": "No", "hours": "24/7 inside hospital", "lat": 37.712266, "lng": -122.14355779999998, "location": "Main Lobby", "name": "AHS San Leandro Hospital: Main Lobby", "zip": "94578" }, { "address": "13855 E 14th St", "city": "San Leandro", "fts": "No", "hours": "24/7 inside ED door", "lat": 37.712266, "lng": -122.14355779999998, "location": "Before Security / Inside ED door", "name": "AHS San Leandro Hospital: Emergency Department", "zip": "94578" }];
const ALAMEDA_COUNTY_BOUNDARY = { "geometry": { "coordinates": [[[-122.3731209999672, 37.88388400016003], [-122.37378200011617, 37.88372500002528], [-122.36778099979504, 37.866726000251745], [-122.34668100029576, 37.81102700028631], [-122.28178000004398, 37.708229999648104], [-122.10957400032736, 37.49763699978767], [-122.08147300042424, 37.47783800006457], [-122.0519310003974, 37.45925099971012], [-122.04782499976136, 37.459007000244775], [-122.0361820000426, 37.46496600029199], [-122.02542499970542, 37.46563000032565], [-122.02115300028636, 37.4650730003395], [-121.99667100004916, 37.46723899983332], [-121.99266900006852, 37.46463899989071], [-121.9800139996732, 37.46089200005816], [-121.9750710000594, 37.46063900003872], [-121.96415700026166, 37.46315099970009], [-121.95931300038204, 37.46351500001595], [-121.94960200015832, 37.46140800018954], [-121.94640899956636, 37.46336200012449], [-121.9470870003321, 37.46742400015819], [-121.94644899974932, 37.46859000003277], [-121.94491399991432, 37.46916300008397], [-121.94422600000117, 37.46582199994922], [-121.94108500018604, 37.464948000208935], [-121.93924099965623, 37.46248699975418], [-121.93602500039636, 37.46292900011445], [-121.93498699978052, 37.46246399995426], [-121.9347320004107, 37.46052400026549], [-121.93119900006012, 37.460643999993856], [-121.93112799991502, 37.45739000029373], [-121.9327120001538, 37.4568420001985], [-121.9326259999401, 37.455146999930875], [-121.92844400003436, 37.45739400000381], [-121.92746099967012, 37.45670499990381], [-121.92784999983256, 37.45526200012888], [-121.92504100027844, 37.45418599980327], [-121.9108870000331, 37.46148599993277], [-121.91133200027204, 37.46223600022221], [-121.90130700022893, 37.46495800025561], [-121.89765300040284, 37.46697299983574], [-121.8908560002135, 37.46798200006078], [-121.8877379999646, 37.47093599977844], [-121.88515899966596, 37.47141299973733], [-121.88260299983185, 37.47055399978664], [-121.88115500003548, 37.47107599979052], [-121.8794650003898, 37.472168000153694], [-121.87745000015576, 37.47518300000416], [-121.87577899987836, 37.47499899985991], [-121.87461200028936, 37.47576699966212], [-121.87369300039752, 37.47784499995966], [-121.87078500021089, 37.47945000034886], [-121.8699340000911, 37.48167999981388], [-121.8652669997635, 37.484637000190375], [-121.74128099963325, 37.48394000009918], [-121.68907900015772, 37.48282799964981], [-121.47295200003808, 37.48233299966121], [-121.4719250001912, 37.48178300034248], [-121.46927499974744, 37.48968800019276], [-121.47376100032508, 37.49277700013316], [-121.47603500012686, 37.49542399974544], [-121.4793619997148, 37.49648399976185], [-121.482064999862, 37.50143899986283], [-121.49318299987422, 37.50242100031683], [-121.496017000441, 37.50493800009746], [-121.49538200023127, 37.50813299980866], [-121.49667600004184, 37.50921099981103], [-121.49723199971054, 37.51246299979755], [-121.50237100004122, 37.51847000019264], [-121.4995800000305, 37.520140000138], [-121.49826799977826, 37.522426999720274], [-121.5014749997156, 37.525002999833184], [-121.50441999971214, 37.52586300015991], [-121.50990600037248, 37.524625000277744], [-121.51674899969424, 37.52551199994989], [-121.51913399982412, 37.52444700033642], [-121.522328000241, 37.52470500012104], [-121.52386200025111, 37.52621200034899], [-121.52881699956048, 37.528059999706926], [-121.53038599973068, 37.52706099975046], [-121.53269399986765, 37.528652999683544], [-121.5406109997903, 37.5298219998215], [-121.54575400031896, 37.53253200024187], [-121.5504540002585, 37.539331999817286], [-121.5566549996979, 37.542732000344024], [-121.55699700000466, 37.81648799975208], [-121.6344719995626, 37.796996000335305], [-121.65539899970784, 37.79267099970948], [-121.96003999975495, 37.71853099973994], [-121.97193799974188, 37.730323999758035], [-121.98010400008484, 37.73110499994556], [-121.98809700017551, 37.733148999908586], [-121.9954259997441, 37.738351000275635], [-122.00107100041308, 37.739028000169206], [-122.01177099995056, 37.74742800021725], [-122.01077099986786, 37.75512700002073], [-121.99741099984092, 37.7633600003543], [-122.01380000042828, 37.7801279998727], [-122.0177720002717, 37.78122700023896], [-122.02197199972076, 37.78422700009587], [-122.0304719999746, 37.78772700019817], [-122.04547300014178, 37.79812599997185], [-122.0615189996992, 37.80008799991179], [-122.06150600017872, 37.79920700007027], [-122.14069800004482, 37.80471699990106], [-122.14880800031132, 37.81375999995898], [-122.15295000003408, 37.815034000170115], [-122.1573920002308, 37.81795199997948], [-122.16687300030074, 37.81342400021693], [-122.17277499998936, 37.81582599991786], [-122.1778730003122, 37.81632300029947], [-122.18122400018956, 37.819341000310665], [-122.1855769997995, 37.82072599998418], [-122.1868709996101, 37.822082000157906], [-122.18572900013548, 37.825366000172075], [-122.18702399977096, 37.827537000032976], [-122.18668800021028, 37.82987700020168], [-122.1838179996585, 37.83435299977464], [-122.18511599966706, 37.83735300018849], [-122.1887650003686, 37.8377369999359], [-122.19526799993176, 37.841630000158446], [-122.19510600044838, 37.84360499989863], [-122.2007610002648, 37.847444999739466], [-122.2031000003639, 37.85119199985234], [-122.20889800029546, 37.8519409998146], [-122.21193299980536, 37.85694600011753], [-122.21982600033688, 37.86477099975037], [-122.2214180000733, 37.865468000229754], [-122.21979100017678, 37.86733199980104], [-122.21637199962905, 37.869075000005026], [-122.21764000039865, 37.87224999990049], [-122.21980399969723, 37.873494999762066], [-122.22361999990508, 37.87856599998312], [-122.22884000042664, 37.881023000246806], [-122.23867899979857, 37.883325000000966], [-122.24197100012474, 37.881927000323714], [-122.24407900024518, 37.883223999777094], [-122.24926200005848, 37.886971999870504], [-122.25028600043063, 37.88982800030775], [-122.2490310000798, 37.89076200007548], [-122.25016199968375, 37.8933560002333], [-122.25294000017404, 37.8937639996529], [-122.25268499990592, 37.89501500031117], [-122.25370199970703, 37.89619300024556], [-122.25593600022418, 37.89603099975376], [-122.25692899973588, 37.89984100018507], [-122.25841900026336, 37.89898099971372], [-122.25968499958653, 37.89987600024698], [-122.2608370000052, 37.89968500033461], [-122.26128999974176, 37.90139200030049], [-122.2640270002241, 37.90377499976112], [-122.27034900003731, 37.904390999797826], [-122.27154099974064, 37.9049409998779], [-122.27107999960818, 37.90582399970302], [-122.27787000012484, 37.90314999969412], [-122.2772819997708, 37.90172100009672], [-122.27877899997095, 37.90073899999175], [-122.28364299994205, 37.89999799988706], [-122.28843699959292, 37.8975969997332], [-122.29654100001164, 37.89892500005991], [-122.30016999972338, 37.897940999798486], [-122.30217999993452, 37.898524999673256], [-122.31284199983718, 37.89734799970701], [-122.3731209999672, 37.88388400016003]]], "type": "Polygon" }, "properties": { "GEOID": "06001", "NAME": "Alameda County" }, "type": "Feature" };


// Shared top-level bindings used by the extracted app components.
export {
  tc,
  yl,
  Yp,
  Gx,
  Gp,
  Xx,
  b,
  ec,
  mt,
  Xp,
  kx,
  kp,
  lf,
  Q,
  nc,
  gl,
  ac,
  ic,
  Zp,
  Zx,
  Qp,
  Qx,
  lc,
  re,
  Kp,
  Kx,
  Jp,
  Jx,
  Fp,
  Fx,
  Pp,
  Px,
  Wx,
  sf,
  of,
  $x,
  Tl,
  zo,
  uf,
  yo,
  an,
  Ro,
  nn,
  rf,
  y0,
  cf,
  g0,
  Pe,
  Nl,
  ja,
  go,
  Ge,
  Re,
  v0,
  sc,
  Ol,
  x0,
  b0,
  S0,
  ff,
  T0,
  A0,
  hf,
  E0,
  M0,
  Ix,
  t2,
  df,
  e2,
  mf,
  n2,
  a2,
  Wp,
  Ft,
  lo,
  i2,
  Ht,
  xi,
  D0,
  C0,
  l2,
  pf,
  s2,
  oc,
  Ti,
  Al,
  to,
  yf,
  o2,
  u2,
  gf,
  j0,
  r2,
  uc,
  Aa,
  c2,
  Nc,
  Vl,
  An,
  en,
  lt,
  f2,
  h2,
  $p,
  mi,
  $t,
  d2,
  z0,
  R0,
  m2,
  w0,
  N0,
  p2,
  y2,
  Ip,
  g2,
  v2,
  El,
  x2,
  O0,
  b2,
  S2,
  T2,
  A2,
  we,
  rc,
  E2,
  vo,
  Rt,
  cc,
  M2,
  D2,
  ty,
  ey,
  Oc,
  C2,
  j2,
  vf,
  V0,
  z2,
  R2,
  w2,
  ny,
  N2,
  xf,
  eo,
  O2,
  V2,
  _0,
  Vt,
  ta,
  fc,
  B0,
  U0,
  bf,
  Sf,
  _2,
  oe,
  L0,
  H0,
  Vc,
  B2,
  q0,
  hc,
  U2,
  _c,
  dc,
  L2,
  xo,
  bo,
  H2,
  q2,
  Y2,
  Y0,
  G2,
  X2,
  Wn,
  k2,
  Z2,
  Q2,
  K2,
  Ml,
  J2,
  G0,
  F2,
  X0,
  k0,
  Z0,
  P2,
  Tf,
  W2,
  Bc,
  Dl,
  $2,
  I2,
  tb,
  Uc,
  Lc,
  ay,
  eb,
  Cl,
  nb,
  Q0,
  ab,
  Af,
  ib,
  Ea,
  Hc,
  lb,
  qc,
  iy,
  ly,
  sy,
  sb,
  jl,
  Yc,
  ob,
  ub,
  En,
  $n,
  oy,
  rb,
  cb,
  fb,
  hb,
  uy,
  Ma,
  Da,
  Gc,
  Xc,
  kc,
  K0,
  J0,
  db,
  mb,
  Ef,
  pb,
  F0,
  yb,
  P0,
  gb,
  Mf,
  pi,
  Zc,
  W0,
  vb,
  $0,
  xb,
  I0,
  tg,
  bb,
  Sb,
  So,
  Tb,
  ry,
  Ab,
  Eb,
  Qc,
  Kc,
  Mb,
  Db,
  cy,
  eg,
  Cb,
  To,
  ng,
  jb,
  ag,
  bi,
  zb,
  mc,
  Rb,
  wb,
  Nb,
  Ob,
  pc,
  fy,
  so,
  yc,
  yi,
  Vb,
  _b,
  Bb,
  Ub,
  Lb,
  ig,
  hy,
  Hb,
  qb,
  Si,
  lg,
  Df,
  Yb,
  Gb,
  Xb,
  kb,
  Zb,
  Qb,
  Kb,
  Cf,
  Jb,
  Fb,
  sg,
  Pb,
  og,
  Ca,
  ug,
  rg,
  Wb,
  $b,
  Ib,
  tS,
  ue,
  eS,
  Jc,
  jf,
  nS,
  cg,
  fg,
  aS,
  iS,
  hg,
  Fc,
  lS,
  sS,
  oS,
  uS,
  dy,
  rS,
  cS,
  fS,
  hS,
  zf,
  oo,
  Rf,
  dg,
  wf,
  dS,
  mS,
  pS,
  mg,
  pg,
  yg,
  yS,
  gS,
  gc,
  Pc,
  Ta,
  gg,
  my,
  Ao,
  py,
  Wc,
  vg,
  yy,
  gy,
  vS,
  Fe,
  vy,
  xy,
  uo,
  xg,
  xS,
  Nf,
  Ke,
  bg,
  bS,
  Sg,
  SS,
  TS,
  Tg,
  Of,
  AS,
  ES,
  MS,
  DS,
  ro,
  by,
  vc,
  CS,
  Sy,
  Ty,
  jS,
  co,
  fo,
  Ag,
  zS,
  RS,
  wS,
  NS,
  OS,
  VS,
  ho,
  gi,
  _S,
  BS,
  Ay,
  US,
  Ey,
  My,
  vi,
  Dy,
  Wt,
  LS,
  wo,
  zl,
  Vf,
  Cy,
  No,
  Eg,
  HS,
  $c,
  Mg,
  qS,
  YS,
  jy,
  Eo,
  Dg,
  GS,
  XS,
  Cg,
  ea,
  jg,
  Rl,
  zg,
  _f,
  kS,
  ZS,
  Rg,
  wg,
  QS,
  Ng,
  KS,
  Og,
  JS,
  FS,
  PS,
  zy,
  Ic,
  Qe,
  Ry,
  Vg,
  WS,
  $S,
  _g,
  IS,
  tT,
  fe,
  eT,
  wy,
  bl,
  Ny,
  nT,
  Oy,
  Mo,
  Vy,
  aT,
  _y,
  iT,
  lT,
  By,
  Uy,
  Bg,
  Ly,
  sT,
  Hy,
  Ug,
  qy,
  Yy,
  Je,
  Gy,
  vl,
  oT,
  uT,
  rT,
  Xy,
  cT,
  ky,
  fT,
  hT,
  Lg,
  dT,
  wl,
  mT,
  pT,
  yT,
  mo,
  gT,
  vT,
  po,
  xc,
  xT,
  bT,
  bc,
  Sc,
  Hg,
  qg,
  ST,
  TT,
  AT,
  ET,
  MT,
  Zy,
  DT,
  Qy,
  CT,
  jT,
  zT,
  RT,
  Ky,
  wT,
  NT,
  OT,
  VT,
  Jy,
  Fy,
  _T,
  BT,
  UT,
  Py,
  Wy,
  $y,
  LT,
  Yg,
  HT,
  qT,
  Tc,
  Gg,
  Bf,
  Iy,
  YT,
  GT,
  XT,
  kT,
  ZT,
  QT,
  Xg,
  xl,
  t0,
  Uf,
  kg,
  e0,
  n0,
  KT,
  Zg,
  JT,
  Oo,
  FT,
  PT,
  a0,
  Lf,
  Qg,
  WT,
  $T,
  IT,
  Kg,
  tA,
  eA,
  Do,
  nA,
  aA,
  iA,
  Hf,
  lA,
  sA,
  oA,
  Jg,
  uA,
  rA,
  cA,
  fA,
  Fg,
  di,
  hA,
  dA,
  Pg,
  Ac,
  mA,
  pA,
  yA,
  gA,
  vA,
  xA,
  bA,
  SA,
  TA,
  Vo,
  AA,
  Sl,
  Wg,
  i0,
  EA,
  l0,
  $g,
  no,
  s0,
  Ec,
  MA,
  Ig,
  DA,
  CA,
  o0,
  jA,
  u0,
  zA,
  RA,
  wA,
  tf,
  NA,
  r0,
  c0,
  OA,
  VA,
  f0,
  _A,
  ao,
  BA,
  UA,
  Mc,
  LA,
  Dc,
  HA,
  t1,
  qA,
  h0,
  YA,
  GA,
  d0,
  XA,
  ef,
  Cc,
  kA,
  ZA,
  QA,
  KA,
  JA,
  FA,
  PA,
  WA,
  $A,
  IA,
  ot,
  t3,
  e3,
  n3,
  a3,
  nf,
  Sa,
  jc,
  i3,
  l3,
  s3,
  o3,
  u3,
  r3,
  he,
  e1,
  n1,
  a1,
  c3,
  i1,
  f3,
  awarenessBrainIcon,
  l1,
  h3,
  s1,
  d3,
  o1,
  m3,
  u1,
  p3,
  r1,
  y3,
  c1,
  g3,
  f1,
  v3,
  h1,
  x3,
  d1,
  b3,
  m1,
  S3,
  p1,
  T3,
  y1,
  A3,
  Y,
  E3,
  Co,
  _o,
  In,
  M3,
  g1,
  D3,
  jo,
  C3,
  j3,
  z3,
  R3,
  zc,
  _l,
  w3,
  N3,
  O3,
  V3,
  _3,
  Rc,
  wc,
  B3,
  U3,
  v1,
  L3,
  m0,
  H3,
  q3,
  p0,
  Y3,
  af,
  LIFELINE_MAP_POINTS,
  ALAMEDA_COUNTY_BOUNDARY
};
