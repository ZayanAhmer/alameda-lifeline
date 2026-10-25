(function () { const B = document.createElement("link").relList; if (B && B.supports && B.supports("modulepreload"))
    return; for (const x of document.querySelectorAll('link[rel="modulepreload"]'))
    m(x); new MutationObserver(x => { for (const j of x)
    if (j.type === "childList")
        for (const K of j.addedNodes)
            K.tagName === "LINK" && K.rel === "modulepreload" && m(K); }).observe(document, { childList: !0, subtree: !0 }); function C(x) { const j = {}; return x.integrity && (j.integrity = x.integrity), x.referrerPolicy && (j.referrerPolicy = x.referrerPolicy), x.crossOrigin === "use-credentials" ? j.credentials = "include" : x.crossOrigin === "anonymous" ? j.credentials = "omit" : j.credentials = "same-origin", j; } function m(x) { if (x.ep)
    return; x.ep = !0; const j = C(x); fetch(x.href, j); } })();
var rf = { exports: {} }, Tu = {};
var x0;
function nr() { if (x0)
    return Tu; x0 = 1; var b = Symbol.for("react.transitional.element"), B = Symbol.for("react.fragment"); function C(m, x, j) { var K = null; if (j !== void 0 && (K = "" + j), x.key !== void 0 && (K = "" + x.key), "key" in x) {
    j = {};
    for (var il in x)
        il !== "key" && (j[il] = x[il]);
}
else
    j = x; return x = j.ref, { $$typeof: b, type: m, key: K, ref: x !== void 0 ? x : null, props: j }; } return Tu.Fragment = B, Tu.jsx = C, Tu.jsxs = C, Tu; }
var _0;
function ir() { return _0 || (_0 = 1, rf.exports = nr()), rf.exports; }
var h = ir(), mf = { exports: {} }, X = {};
var O0;
function cr() { if (O0)
    return X; O0 = 1; var b = Symbol.for("react.transitional.element"), B = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), j = Symbol.for("react.consumer"), K = Symbol.for("react.context"), il = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), z = Symbol.for("react.memo"), G = Symbol.for("react.lazy"), H = Symbol.for("react.activity"), el = Symbol.iterator; function ql(o) { return o === null || typeof o != "object" ? null : (o = el && o[el] || o["@@iterator"], typeof o == "function" ? o : null); } var Xl = { isMounted: function () { return !1; }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, Bl = Object.assign, Ut = {}; function Fl(o, T, O) { this.props = o, this.context = T, this.refs = Ut, this.updater = O || Xl; } Fl.prototype.isReactComponent = {}, Fl.prototype.setState = function (o, T) { if (typeof o != "object" && typeof o != "function" && o != null)
    throw Error("takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, o, T, "setState"); }, Fl.prototype.forceUpdate = function (o) { this.updater.enqueueForceUpdate(this, o, "forceUpdate"); }; function Ft() { } Ft.prototype = Fl.prototype; function Cl(o, T, O) { this.props = o, this.context = T, this.refs = Ut, this.updater = O || Xl; } var st = Cl.prototype = new Ft; st.constructor = Cl, Bl(st, Fl.prototype), st.isPureReactComponent = !0; var Tt = Array.isArray; function Ql() { } var F = { H: null, A: null, T: null, S: null }, Ll = Object.prototype.hasOwnProperty; function xt(o, T, O) { var D = O.ref; return { $$typeof: b, type: o, key: T, ref: D !== void 0 ? D : null, props: O }; } function Ke(o, T) { return xt(o.type, T, o.props); } function _t(o) { return typeof o == "object" && o !== null && o.$$typeof === b; } function Zl(o) { var T = { "=": "=0", ":": "=2" }; return "$" + o.replace(/[=:]/g, function (O) { return T[O]; }); } var Te = /\/+/g; function jt(o, T) { return typeof o == "object" && o !== null && o.key != null ? Zl("" + o.key) : T.toString(36); } function zt(o) { switch (o.status) {
    case "fulfilled": return o.value;
    case "rejected": throw o.reason;
    default: switch (typeof o.status == "string" ? o.then(Ql, Ql) : (o.status = "pending", o.then(function (T) { o.status === "pending" && (o.status = "fulfilled", o.value = T); }, function (T) { o.status === "pending" && (o.status = "rejected", o.reason = T); })), o.status) {
        case "fulfilled": return o.value;
        case "rejected": throw o.reason;
    }
} throw o; } function p(o, T, O, D, L) { var J = typeof o; (J === "undefined" || J === "boolean") && (o = null); var al = !1; if (o === null)
    al = !0;
else
    switch (J) {
        case "bigint":
        case "string":
        case "number":
            al = !0;
            break;
        case "object": switch (o.$$typeof) {
            case b:
            case B:
                al = !0;
                break;
            case G: return al = o._init, p(al(o._payload), T, O, D, L);
        }
    } if (al)
    return L = L(o), al = D === "" ? "." + jt(o, 0) : D, Tt(L) ? (O = "", al != null && (O = al.replace(Te, "$&/") + "/"), p(L, T, O, "", function (Ua) { return Ua; })) : L != null && (_t(L) && (L = Ke(L, O + (L.key == null || o && o.key === L.key ? "" : ("" + L.key).replace(Te, "$&/") + "/") + al)), T.push(L)), 1; al = 0; var Yl = D === "" ? "." : D + ":"; if (Tt(o))
    for (var bl = 0; bl < o.length; bl++)
        D = o[bl], J = Yl + jt(D, bl), al += p(D, T, O, J, L);
else if (bl = ql(o), typeof bl == "function")
    for (o = bl.call(o), bl = 0; !(D = o.next()).done;)
        D = D.value, J = Yl + jt(D, bl++), al += p(D, T, O, J, L);
else if (J === "object") {
    if (typeof o.then == "function")
        return p(zt(o), T, O, D, L);
    throw T = String(o), Error("Objects are not valid as a React child (found: " + (T === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : T) + "). If you meant to render a collection of children, use an array instead.");
} return al; } function _(o, T, O) { if (o == null)
    return o; var D = [], L = 0; return p(o, D, "", "", function (J) { return T.call(O, J, L++); }), D; } function Y(o) { if (o._status === -1) {
    var T = o._result;
    T = T(), T.then(function (O) { (o._status === 0 || o._status === -1) && (o._status = 1, o._result = O); }, function (O) { (o._status === 0 || o._status === -1) && (o._status = 2, o._result = O); }), o._status === -1 && (o._status = 0, o._result = T);
} if (o._status === 1)
    return o._result.default; throw o._result; } var cl = typeof reportError == "function" ? reportError : function (o) { if (typeof window == "object" && typeof window.ErrorEvent == "function") {
    var T = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: typeof o == "object" && o !== null && typeof o.message == "string" ? String(o.message) : String(o), error: o });
    if (!window.dispatchEvent(T))
        return;
}
else if (typeof process == "object" && typeof process.emit == "function") {
    process.emit("uncaughtException", o);
    return;
} console.error(o); }, dl = { map: _, forEach: function (o, T, O) { _(o, function () { T.apply(this, arguments); }, O); }, count: function (o) { var T = 0; return _(o, function () { T++; }), T; }, toArray: function (o) { return _(o, function (T) { return T; }) || []; }, only: function (o) { if (!_t(o))
        throw Error("React.Children.only expected to receive a single React element child."); return o; } }; return X.Activity = H, X.Children = dl, X.Component = Fl, X.Fragment = C, X.Profiler = x, X.PureComponent = Cl, X.StrictMode = m, X.Suspense = N, X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F, X.__COMPILER_RUNTIME = { __proto__: null, c: function (o) { return F.H.useMemoCache(o); } }, X.cache = function (o) { return function () { return o.apply(null, arguments); }; }, X.cacheSignal = function () { return null; }, X.cloneElement = function (o, T, O) { if (o == null)
    throw Error("The argument must be a React element, but you passed " + o + "."); var D = Bl({}, o.props), L = o.key; if (T != null)
    for (J in T.key !== void 0 && (L = "" + T.key), T)
        !Ll.call(T, J) || J === "key" || J === "__self" || J === "__source" || J === "ref" && T.ref === void 0 || (D[J] = T[J]); var J = arguments.length - 2; if (J === 1)
    D.children = O;
else if (1 < J) {
    for (var al = Array(J), Yl = 0; Yl < J; Yl++)
        al[Yl] = arguments[Yl + 2];
    D.children = al;
} return xt(o.type, L, D); }, X.createContext = function (o) { return o = { $$typeof: K, _currentValue: o, _currentValue2: o, _threadCount: 0, Provider: null, Consumer: null }, o.Provider = o, o.Consumer = { $$typeof: j, _context: o }, o; }, X.createElement = function (o, T, O) { var D, L = {}, J = null; if (T != null)
    for (D in T.key !== void 0 && (J = "" + T.key), T)
        Ll.call(T, D) && D !== "key" && D !== "__self" && D !== "__source" && (L[D] = T[D]); var al = arguments.length - 2; if (al === 1)
    L.children = O;
else if (1 < al) {
    for (var Yl = Array(al), bl = 0; bl < al; bl++)
        Yl[bl] = arguments[bl + 2];
    L.children = Yl;
} if (o && o.defaultProps)
    for (D in al = o.defaultProps, al)
        L[D] === void 0 && (L[D] = al[D]); return xt(o, J, L); }, X.createRef = function () { return { current: null }; }, X.forwardRef = function (o) { return { $$typeof: il, render: o }; }, X.isValidElement = _t, X.lazy = function (o) { return { $$typeof: G, _payload: { _status: -1, _result: o }, _init: Y }; }, X.memo = function (o, T) { return { $$typeof: z, type: o, compare: T === void 0 ? null : T }; }, X.startTransition = function (o) { var T = F.T, O = {}; F.T = O; try {
    var D = o(), L = F.S;
    L !== null && L(O, D), typeof D == "object" && D !== null && typeof D.then == "function" && D.then(Ql, cl);
}
catch (J) {
    cl(J);
}
finally {
    T !== null && O.types !== null && (T.types = O.types), F.T = T;
} }, X.unstable_useCacheRefresh = function () { return F.H.useCacheRefresh(); }, X.use = function (o) { return F.H.use(o); }, X.useActionState = function (o, T, O) { return F.H.useActionState(o, T, O); }, X.useCallback = function (o, T) { return F.H.useCallback(o, T); }, X.useContext = function (o) { return F.H.useContext(o); }, X.useDebugValue = function () { }, X.useDeferredValue = function (o, T) { return F.H.useDeferredValue(o, T); }, X.useEffect = function (o, T) { return F.H.useEffect(o, T); }, X.useEffectEvent = function (o) { return F.H.useEffectEvent(o); }, X.useId = function () { return F.H.useId(); }, X.useImperativeHandle = function (o, T, O) { return F.H.useImperativeHandle(o, T, O); }, X.useInsertionEffect = function (o, T) { return F.H.useInsertionEffect(o, T); }, X.useLayoutEffect = function (o, T) { return F.H.useLayoutEffect(o, T); }, X.useMemo = function (o, T) { return F.H.useMemo(o, T); }, X.useOptimistic = function (o, T) { return F.H.useOptimistic(o, T); }, X.useReducer = function (o, T, O) { return F.H.useReducer(o, T, O); }, X.useRef = function (o) { return F.H.useRef(o); }, X.useState = function (o) { return F.H.useState(o); }, X.useSyncExternalStore = function (o, T, O) { return F.H.useSyncExternalStore(o, T, O); }, X.useTransition = function () { return F.H.useTransition(); }, X.version = "19.2.6", X; }
var M0;
function pf() { return M0 || (M0 = 1, mf.exports = cr()), mf.exports; }
var zf = pf(), vf = { exports: {} }, xu = {}, gf = { exports: {} }, Sf = {};
var D0;
function fr() { return D0 || (D0 = 1, (function (b) { function B(p, _) { var Y = p.length; p.push(_); l: for (; 0 < Y;) {
    var cl = Y - 1 >>> 1, dl = p[cl];
    if (0 < x(dl, _))
        p[cl] = _, p[Y] = dl, Y = cl;
    else
        break l;
} } function C(p) { return p.length === 0 ? null : p[0]; } function m(p) { if (p.length === 0)
    return null; var _ = p[0], Y = p.pop(); if (Y !== _) {
    p[0] = Y;
    l: for (var cl = 0, dl = p.length, o = dl >>> 1; cl < o;) {
        var T = 2 * (cl + 1) - 1, O = p[T], D = T + 1, L = p[D];
        if (0 > x(O, Y))
            D < dl && 0 > x(L, O) ? (p[cl] = L, p[D] = Y, cl = D) : (p[cl] = O, p[T] = Y, cl = T);
        else if (D < dl && 0 > x(L, Y))
            p[cl] = L, p[D] = Y, cl = D;
        else
            break l;
    }
} return _; } function x(p, _) { var Y = p.sortIndex - _.sortIndex; return Y !== 0 ? Y : p.id - _.id; } if (b.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
    var j = performance;
    b.unstable_now = function () { return j.now(); };
}
else {
    var K = Date, il = K.now();
    b.unstable_now = function () { return K.now() - il; };
} var N = [], z = [], G = 1, H = null, el = 3, ql = !1, Xl = !1, Bl = !1, Ut = !1, Fl = typeof setTimeout == "function" ? setTimeout : null, Ft = typeof clearTimeout == "function" ? clearTimeout : null, Cl = typeof setImmediate < "u" ? setImmediate : null; function st(p) { for (var _ = C(z); _ !== null;) {
    if (_.callback === null)
        m(z);
    else if (_.startTime <= p)
        m(z), _.sortIndex = _.expirationTime, B(N, _);
    else
        break;
    _ = C(z);
} } function Tt(p) { if (Bl = !1, st(p), !Xl)
    if (C(N) !== null)
        Xl = !0, Ql || (Ql = !0, Zl());
    else {
        var _ = C(z);
        _ !== null && zt(Tt, _.startTime - p);
    } } var Ql = !1, F = -1, Ll = 5, xt = -1; function Ke() { return Ut ? !0 : !(b.unstable_now() - xt < Ll); } function _t() { if (Ut = !1, Ql) {
    var p = b.unstable_now();
    xt = p;
    var _ = !0;
    try {
        l: {
            Xl = !1, Bl && (Bl = !1, Ft(F), F = -1), ql = !0;
            var Y = el;
            try {
                t: {
                    for (st(p), H = C(N); H !== null && !(H.expirationTime > p && Ke());) {
                        var cl = H.callback;
                        if (typeof cl == "function") {
                            H.callback = null, el = H.priorityLevel;
                            var dl = cl(H.expirationTime <= p);
                            if (p = b.unstable_now(), typeof dl == "function") {
                                H.callback = dl, st(p), _ = !0;
                                break t;
                            }
                            H === C(N) && m(N), st(p);
                        }
                        else
                            m(N);
                        H = C(N);
                    }
                    if (H !== null)
                        _ = !0;
                    else {
                        var o = C(z);
                        o !== null && zt(Tt, o.startTime - p), _ = !1;
                    }
                }
                break l;
            }
            finally {
                H = null, el = Y, ql = !1;
            }
            _ = void 0;
        }
    }
    finally {
        _ ? Zl() : Ql = !1;
    }
} } var Zl; if (typeof Cl == "function")
    Zl = function () { Cl(_t); };
else if (typeof MessageChannel < "u") {
    var Te = new MessageChannel, jt = Te.port2;
    Te.port1.onmessage = _t, Zl = function () { jt.postMessage(null); };
}
else
    Zl = function () { Fl(_t, 0); }; function zt(p, _) { F = Fl(function () { p(b.unstable_now()); }, _); } b.unstable_IdlePriority = 5, b.unstable_ImmediatePriority = 1, b.unstable_LowPriority = 4, b.unstable_NormalPriority = 3, b.unstable_Profiling = null, b.unstable_UserBlockingPriority = 2, b.unstable_cancelCallback = function (p) { p.callback = null; }, b.unstable_forceFrameRate = function (p) { 0 > p || 125 < p ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ll = 0 < p ? Math.floor(1e3 / p) : 5; }, b.unstable_getCurrentPriorityLevel = function () { return el; }, b.unstable_next = function (p) { switch (el) {
    case 1:
    case 2:
    case 3:
        var _ = 3;
        break;
    default: _ = el;
} var Y = el; el = _; try {
    return p();
}
finally {
    el = Y;
} }, b.unstable_requestPaint = function () { Ut = !0; }, b.unstable_runWithPriority = function (p, _) { switch (p) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: break;
    default: p = 3;
} var Y = el; el = p; try {
    return _();
}
finally {
    el = Y;
} }, b.unstable_scheduleCallback = function (p, _, Y) { var cl = b.unstable_now(); switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? cl + Y : cl) : Y = cl, p) {
    case 1:
        var dl = -1;
        break;
    case 2:
        dl = 250;
        break;
    case 5:
        dl = 1073741823;
        break;
    case 4:
        dl = 1e4;
        break;
    default: dl = 5e3;
} return dl = Y + dl, p = { id: G++, callback: _, priorityLevel: p, startTime: Y, expirationTime: dl, sortIndex: -1 }, Y > cl ? (p.sortIndex = Y, B(z, p), C(N) === null && p === C(z) && (Bl ? (Ft(F), F = -1) : Bl = !0, zt(Tt, Y - cl))) : (p.sortIndex = dl, B(N, p), Xl || ql || (Xl = !0, Ql || (Ql = !0, Zl()))), p; }, b.unstable_shouldYield = Ke, b.unstable_wrapCallback = function (p) { var _ = el; return function () { var Y = el; el = _; try {
    return p.apply(this, arguments);
}
finally {
    el = Y;
} }; }; })(Sf)), Sf; }
var N0;
function sr() { return N0 || (N0 = 1, gf.exports = fr()), gf.exports; }
var bf = { exports: {} }, Rl = {};
var U0;
function or() { if (U0)
    return Rl; U0 = 1; var b = pf(); function B(N) { var z = "https://react.dev/errors/" + N; if (1 < arguments.length) {
    z += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var G = 2; G < arguments.length; G++)
        z += "&args[]=" + encodeURIComponent(arguments[G]);
} return "Minified React error #" + N + "; visit " + z + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; } function C() { } var m = { d: { f: C, r: function () { throw Error(B(522)); }, D: C, C, L: C, m: C, X: C, S: C, M: C }, p: 0, findDOMNode: null }, x = Symbol.for("react.portal"); function j(N, z, G) { var H = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: x, key: H == null ? null : "" + H, children: N, containerInfo: z, implementation: G }; } var K = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE; function il(N, z) { if (N === "font")
    return ""; if (typeof z == "string")
    return z === "use-credentials" ? z : ""; } return Rl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = m, Rl.createPortal = function (N, z) { var G = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null; if (!z || z.nodeType !== 1 && z.nodeType !== 9 && z.nodeType !== 11)
    throw Error(B(299)); return j(N, z, null, G); }, Rl.flushSync = function (N) { var z = K.T, G = m.p; try {
    if (K.T = null, m.p = 2, N)
        return N();
}
finally {
    K.T = z, m.p = G, m.d.f();
} }, Rl.preconnect = function (N, z) { typeof N == "string" && (z ? (z = z.crossOrigin, z = typeof z == "string" ? z === "use-credentials" ? z : "" : void 0) : z = null, m.d.C(N, z)); }, Rl.prefetchDNS = function (N) { typeof N == "string" && m.d.D(N); }, Rl.preinit = function (N, z) { if (typeof N == "string" && z && typeof z.as == "string") {
    var G = z.as, H = il(G, z.crossOrigin), el = typeof z.integrity == "string" ? z.integrity : void 0, ql = typeof z.fetchPriority == "string" ? z.fetchPriority : void 0;
    G === "style" ? m.d.S(N, typeof z.precedence == "string" ? z.precedence : void 0, { crossOrigin: H, integrity: el, fetchPriority: ql }) : G === "script" && m.d.X(N, { crossOrigin: H, integrity: el, fetchPriority: ql, nonce: typeof z.nonce == "string" ? z.nonce : void 0 });
} }, Rl.preinitModule = function (N, z) { if (typeof N == "string")
    if (typeof z == "object" && z !== null) {
        if (z.as == null || z.as === "script") {
            var G = il(z.as, z.crossOrigin);
            m.d.M(N, { crossOrigin: G, integrity: typeof z.integrity == "string" ? z.integrity : void 0, nonce: typeof z.nonce == "string" ? z.nonce : void 0 });
        }
    }
    else
        z == null && m.d.M(N); }, Rl.preload = function (N, z) { if (typeof N == "string" && typeof z == "object" && z !== null && typeof z.as == "string") {
    var G = z.as, H = il(G, z.crossOrigin);
    m.d.L(N, G, { crossOrigin: H, integrity: typeof z.integrity == "string" ? z.integrity : void 0, nonce: typeof z.nonce == "string" ? z.nonce : void 0, type: typeof z.type == "string" ? z.type : void 0, fetchPriority: typeof z.fetchPriority == "string" ? z.fetchPriority : void 0, referrerPolicy: typeof z.referrerPolicy == "string" ? z.referrerPolicy : void 0, imageSrcSet: typeof z.imageSrcSet == "string" ? z.imageSrcSet : void 0, imageSizes: typeof z.imageSizes == "string" ? z.imageSizes : void 0, media: typeof z.media == "string" ? z.media : void 0 });
} }, Rl.preloadModule = function (N, z) { if (typeof N == "string")
    if (z) {
        var G = il(z.as, z.crossOrigin);
        m.d.m(N, { as: typeof z.as == "string" && z.as !== "script" ? z.as : void 0, crossOrigin: G, integrity: typeof z.integrity == "string" ? z.integrity : void 0 });
    }
    else
        m.d.m(N); }, Rl.requestFormReset = function (N) { m.d.r(N); }, Rl.unstable_batchedUpdates = function (N, z) { return N(z); }, Rl.useFormState = function (N, z, G) { return K.H.useFormState(N, z, G); }, Rl.useFormStatus = function () { return K.H.useHostTransitionStatus(); }, Rl.version = "19.2.6", Rl; }
var j0;
function dr() { if (j0)
    return bf.exports; j0 = 1; function b() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b);
    }
    catch (B) {
        console.error(B);
    } } return b(), bf.exports = or(), bf.exports; }
var H0;
function hr() {
    if (H0)
        return xu;
    H0 = 1;
    var b = sr(), B = pf(), C = dr();
    function m(l) { var t = "https://react.dev/errors/" + l; if (1 < arguments.length) {
        t += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var e = 2; e < arguments.length; e++)
            t += "&args[]=" + encodeURIComponent(arguments[e]);
    } return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; }
    function x(l) { return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11); }
    function j(l) { var t = l, e = l; if (l.alternate)
        for (; t.return;)
            t = t.return;
    else {
        l = t;
        do
            t = l, (t.flags & 4098) !== 0 && (e = t.return), l = t.return;
        while (l);
    } return t.tag === 3 ? e : null; }
    function K(l) { if (l.tag === 13) {
        var t = l.memoizedState;
        if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null)
            return t.dehydrated;
    } return null; }
    function il(l) { if (l.tag === 31) {
        var t = l.memoizedState;
        if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null)
            return t.dehydrated;
    } return null; }
    function N(l) { if (j(l) !== l)
        throw Error(m(188)); }
    function z(l) { var t = l.alternate; if (!t) {
        if (t = j(l), t === null)
            throw Error(m(188));
        return t !== l ? null : l;
    } for (var e = l, a = t;;) {
        var u = e.return;
        if (u === null)
            break;
        var n = u.alternate;
        if (n === null) {
            if (a = u.return, a !== null) {
                e = a;
                continue;
            }
            break;
        }
        if (u.child === n.child) {
            for (n = u.child; n;) {
                if (n === e)
                    return N(u), l;
                if (n === a)
                    return N(u), t;
                n = n.sibling;
            }
            throw Error(m(188));
        }
        if (e.return !== a.return)
            e = u, a = n;
        else {
            for (var i = !1, c = u.child; c;) {
                if (c === e) {
                    i = !0, e = u, a = n;
                    break;
                }
                if (c === a) {
                    i = !0, a = u, e = n;
                    break;
                }
                c = c.sibling;
            }
            if (!i) {
                for (c = n.child; c;) {
                    if (c === e) {
                        i = !0, e = n, a = u;
                        break;
                    }
                    if (c === a) {
                        i = !0, a = n, e = u;
                        break;
                    }
                    c = c.sibling;
                }
                if (!i)
                    throw Error(m(189));
            }
        }
        if (e.alternate !== a)
            throw Error(m(190));
    } if (e.tag !== 3)
        throw Error(m(188)); return e.stateNode.current === e ? l : t; }
    function G(l) { var t = l.tag; if (t === 5 || t === 26 || t === 27 || t === 6)
        return l; for (l = l.child; l !== null;) {
        if (t = G(l), t !== null)
            return t;
        l = l.sibling;
    } return null; }
    var H = Object.assign, el = Symbol.for("react.element"), ql = Symbol.for("react.transitional.element"), Xl = Symbol.for("react.portal"), Bl = Symbol.for("react.fragment"), Ut = Symbol.for("react.strict_mode"), Fl = Symbol.for("react.profiler"), Ft = Symbol.for("react.consumer"), Cl = Symbol.for("react.context"), st = Symbol.for("react.forward_ref"), Tt = Symbol.for("react.suspense"), Ql = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), Ll = Symbol.for("react.lazy"), xt = Symbol.for("react.activity"), Ke = Symbol.for("react.memo_cache_sentinel"), _t = Symbol.iterator;
    function Zl(l) { return l === null || typeof l != "object" ? null : (l = _t && l[_t] || l["@@iterator"], typeof l == "function" ? l : null); }
    var Te = Symbol.for("react.client.reference");
    function jt(l) { if (l == null)
        return null; if (typeof l == "function")
        return l.$$typeof === Te ? null : l.displayName || l.name || null; if (typeof l == "string")
        return l; switch (l) {
        case Bl: return "Fragment";
        case Fl: return "Profiler";
        case Ut: return "StrictMode";
        case Tt: return "Suspense";
        case Ql: return "SuspenseList";
        case xt: return "Activity";
    } if (typeof l == "object")
        switch (l.$$typeof) {
            case Xl: return "Portal";
            case Cl: return l.displayName || "Context";
            case Ft: return (l._context.displayName || "Context") + ".Consumer";
            case st:
                var t = l.render;
                return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
            case F: return t = l.displayName || null, t !== null ? t : jt(l.type) || "Memo";
            case Ll:
                t = l._payload, l = l._init;
                try {
                    return jt(l(t));
                }
                catch { }
        } return null; }
    var zt = Array.isArray, p = B.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = C.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = { pending: !1, data: null, method: null, action: null }, cl = [], dl = -1;
    function o(l) { return { current: l }; }
    function T(l) { 0 > dl || (l.current = cl[dl], cl[dl] = null, dl--); }
    function O(l, t) { dl++, cl[dl] = l.current, l.current = t; }
    var D = o(null), L = o(null), J = o(null), al = o(null);
    function Yl(l, t) { switch (O(J, t), O(L, l), O(D, null), t.nodeType) {
        case 9:
        case 11:
            l = (l = t.documentElement) && (l = l.namespaceURI) ? $d(l) : 0;
            break;
        default: if (l = t.tagName, t = t.namespaceURI)
            t = $d(t), l = Wd(t, l);
        else
            switch (l) {
                case "svg":
                    l = 1;
                    break;
                case "math":
                    l = 2;
                    break;
                default: l = 0;
            }
    } T(D), O(D, l); }
    function bl() { T(D), T(L), T(J); }
    function Ua(l) { l.memoizedState !== null && O(al, l); var t = D.current, e = Wd(t, l.type); t !== e && (O(L, l), O(D, e)); }
    function Du(l) { L.current === l && (T(D), T(L)), al.current === l && (T(al), zu._currentValue = Y); }
    var Wn, Ef;
    function xe(l) {
        if (Wn === void 0)
            try {
                throw Error();
            }
            catch (e) {
                var t = e.stack.trim().match(/\n( *(at )?)/);
                Wn = t && t[1] || "", Ef = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
        return `
` + Wn + l + Ef;
    }
    var kn = !1;
    function Fn(l, t) {
        if (!l || kn)
            return "";
        kn = !0;
        var e = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = { DetermineComponentFrameRoot: function () { try {
                    if (t) {
                        var E = function () { throw Error(); };
                        if (Object.defineProperty(E.prototype, "props", { set: function () { throw Error(); } }), typeof Reflect == "object" && Reflect.construct) {
                            try {
                                Reflect.construct(E, []);
                            }
                            catch (g) {
                                var v = g;
                            }
                            Reflect.construct(l, [], E);
                        }
                        else {
                            try {
                                E.call();
                            }
                            catch (g) {
                                v = g;
                            }
                            l.call(E.prototype);
                        }
                    }
                    else {
                        try {
                            throw Error();
                        }
                        catch (g) {
                            v = g;
                        }
                        (E = l()) && typeof E.catch == "function" && E.catch(function () { });
                    }
                }
                catch (g) {
                    if (g && v && typeof g.stack == "string")
                        return [g.stack, v.stack];
                } return [null, null]; } };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var u = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            u && u.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
            var n = a.DetermineComponentFrameRoot(), i = n[0], c = n[1];
            if (i && c) {
                var f = i.split(`
`), r = c.split(`
`);
                for (u = a = 0; a < f.length && !f[a].includes("DetermineComponentFrameRoot");)
                    a++;
                for (; u < r.length && !r[u].includes("DetermineComponentFrameRoot");)
                    u++;
                if (a === f.length || u === r.length)
                    for (a = f.length - 1, u = r.length - 1; 1 <= a && 0 <= u && f[a] !== r[u];)
                        u--;
                for (; 1 <= a && 0 <= u; a--, u--)
                    if (f[a] !== r[u]) {
                        if (a !== 1 || u !== 1)
                            do
                                if (a--, u--, 0 > u || f[a] !== r[u]) {
                                    var S = `
` + f[a].replace(" at new ", " at ");
                                    return l.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", l.displayName)), S;
                                }
                            while (1 <= a && 0 <= u);
                        break;
                    }
            }
        }
        finally {
            kn = !1, Error.prepareStackTrace = e;
        }
        return (e = l ? l.displayName || l.name : "") ? xe(e) : "";
    }
    function q0(l, t) { switch (l.tag) {
        case 26:
        case 27:
        case 5: return xe(l.type);
        case 16: return xe("Lazy");
        case 13: return l.child !== t && t !== null ? xe("Suspense Fallback") : xe("Suspense");
        case 19: return xe("SuspenseList");
        case 0:
        case 15: return Fn(l.type, !1);
        case 11: return Fn(l.type.render, !1);
        case 1: return Fn(l.type, !0);
        case 31: return xe("Activity");
        default: return "";
    } }
    function Tf(l) {
        try {
            var t = "", e = null;
            do
                t += q0(l, e), e = l, l = l.return;
            while (l);
            return t;
        }
        catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack;
        }
    }
    var In = Object.prototype.hasOwnProperty, Pn = b.unstable_scheduleCallback, li = b.unstable_cancelCallback, B0 = b.unstable_shouldYield, Y0 = b.unstable_requestPaint, Il = b.unstable_now, G0 = b.unstable_getCurrentPriorityLevel, xf = b.unstable_ImmediatePriority, _f = b.unstable_UserBlockingPriority, Nu = b.unstable_NormalPriority, X0 = b.unstable_LowPriority, Of = b.unstable_IdlePriority, Q0 = b.log, L0 = b.unstable_setDisableYieldValue, ja = null, Pl = null;
    function It(l) { if (typeof Q0 == "function" && L0(l), Pl && typeof Pl.setStrictMode == "function")
        try {
            Pl.setStrictMode(ja, l);
        }
        catch { } }
    var lt = Math.clz32 ? Math.clz32 : K0, Z0 = Math.log, V0 = Math.LN2;
    function K0(l) { return l >>>= 0, l === 0 ? 32 : 31 - (Z0(l) / V0 | 0) | 0; }
    var Uu = 256, ju = 262144, Hu = 4194304;
    function _e(l) { var t = l & 42; if (t !== 0)
        return t; switch (l & -l) {
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
        case 131072: return l & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152: return l & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432: return l & 62914560;
        case 67108864: return 67108864;
        case 134217728: return 134217728;
        case 268435456: return 268435456;
        case 536870912: return 536870912;
        case 1073741824: return 0;
        default: return l;
    } }
    function Cu(l, t, e) { var a = l.pendingLanes; if (a === 0)
        return 0; var u = 0, n = l.suspendedLanes, i = l.pingedLanes; l = l.warmLanes; var c = a & 134217727; return c !== 0 ? (a = c & ~n, a !== 0 ? u = _e(a) : (i &= c, i !== 0 ? u = _e(i) : e || (e = c & ~l, e !== 0 && (u = _e(e))))) : (c = a & ~n, c !== 0 ? u = _e(c) : i !== 0 ? u = _e(i) : e || (e = a & ~l, e !== 0 && (u = _e(e)))), u === 0 ? 0 : t !== 0 && t !== u && (t & n) === 0 && (n = u & -u, e = t & -t, n >= e || n === 32 && (e & 4194048) !== 0) ? t : u; }
    function Ha(l, t) { return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0; }
    function J0(l, t) { switch (l) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64: return t + 250;
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
        case 2097152: return t + 5e3;
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
    function Mf() { var l = Hu; return Hu <<= 1, (Hu & 62914560) === 0 && (Hu = 4194304), l; }
    function ti(l) { for (var t = [], e = 0; 31 > e; e++)
        t.push(l); return t; }
    function Ca(l, t) { l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0); }
    function w0(l, t, e, a, u, n) { var i = l.pendingLanes; l.pendingLanes = e, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= e, l.entangledLanes &= e, l.errorRecoveryDisabledLanes &= e, l.shellSuspendCounter = 0; var c = l.entanglements, f = l.expirationTimes, r = l.hiddenUpdates; for (e = i & ~e; 0 < e;) {
        var S = 31 - lt(e), E = 1 << S;
        c[S] = 0, f[S] = -1;
        var v = r[S];
        if (v !== null)
            for (r[S] = null, S = 0; S < v.length; S++) {
                var g = v[S];
                g !== null && (g.lane &= -536870913);
            }
        e &= ~E;
    } a !== 0 && Df(l, a, 0), n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t)); }
    function Df(l, t, e) { l.pendingLanes |= t, l.suspendedLanes &= ~t; var a = 31 - lt(t); l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | e & 261930; }
    function Nf(l, t) { var e = l.entangledLanes |= t; for (l = l.entanglements; e;) {
        var a = 31 - lt(e), u = 1 << a;
        u & t | l[a] & t && (l[a] |= t), e &= ~u;
    } }
    function Uf(l, t) { var e = t & -t; return e = (e & 42) !== 0 ? 1 : ei(e), (e & (l.suspendedLanes | t)) !== 0 ? 0 : e; }
    function ei(l) { switch (l) {
        case 2:
            l = 1;
            break;
        case 8:
            l = 4;
            break;
        case 32:
            l = 16;
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
            l = 128;
            break;
        case 268435456:
            l = 134217728;
            break;
        default: l = 0;
    } return l; }
    function ai(l) { return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2; }
    function jf() { var l = _.p; return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : S0(l.type)); }
    function Hf(l, t) { var e = _.p; try {
        return _.p = l, t();
    }
    finally {
        _.p = e;
    } }
    var Pt = Math.random().toString(36).slice(2), Dl = "__reactFiber$" + Pt, Vl = "__reactProps$" + Pt, Je = "__reactContainer$" + Pt, ui = "__reactEvents$" + Pt, $0 = "__reactListeners$" + Pt, W0 = "__reactHandles$" + Pt, Cf = "__reactResources$" + Pt, Ra = "__reactMarker$" + Pt;
    function ni(l) { delete l[Dl], delete l[Vl], delete l[ui], delete l[$0], delete l[W0]; }
    function we(l) { var t = l[Dl]; if (t)
        return t; for (var e = l.parentNode; e;) {
        if (t = e[Je] || e[Dl]) {
            if (e = t.alternate, t.child !== null || e !== null && e.child !== null)
                for (l = e0(l); l !== null;) {
                    if (e = l[Dl])
                        return e;
                    l = e0(l);
                }
            return t;
        }
        l = e, e = l.parentNode;
    } return null; }
    function $e(l) { if (l = l[Dl] || l[Je]) {
        var t = l.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
            return l;
    } return null; }
    function qa(l) { var t = l.tag; if (t === 5 || t === 26 || t === 27 || t === 6)
        return l.stateNode; throw Error(m(33)); }
    function We(l) { var t = l[Cf]; return t || (t = l[Cf] = { hoistableStyles: new Map, hoistableScripts: new Map }), t; }
    function Ol(l) { l[Ra] = !0; }
    var Rf = new Set, qf = {};
    function Oe(l, t) { ke(l, t), ke(l + "Capture", t); }
    function ke(l, t) { for (qf[l] = t, l = 0; l < t.length; l++)
        Rf.add(t[l]); }
    var k0 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Bf = {}, Yf = {};
    function F0(l) { return In.call(Yf, l) ? !0 : In.call(Bf, l) ? !1 : k0.test(l) ? Yf[l] = !0 : (Bf[l] = !0, !1); }
    function Ru(l, t, e) { if (F0(t))
        if (e === null)
            l.removeAttribute(t);
        else {
            switch (typeof e) {
                case "undefined":
                case "function":
                case "symbol":
                    l.removeAttribute(t);
                    return;
                case "boolean":
                    var a = t.toLowerCase().slice(0, 5);
                    if (a !== "data-" && a !== "aria-") {
                        l.removeAttribute(t);
                        return;
                    }
            }
            l.setAttribute(t, "" + e);
        } }
    function qu(l, t, e) { if (e === null)
        l.removeAttribute(t);
    else {
        switch (typeof e) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                l.removeAttribute(t);
                return;
        }
        l.setAttribute(t, "" + e);
    } }
    function Ht(l, t, e, a) { if (a === null)
        l.removeAttribute(e);
    else {
        switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                l.removeAttribute(e);
                return;
        }
        l.setAttributeNS(t, e, "" + a);
    } }
    function ot(l) { switch (typeof l) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined": return l;
        case "object": return l;
        default: return "";
    } }
    function Gf(l) { var t = l.type; return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio"); }
    function I0(l, t, e) { var a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t); if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var u = a.get, n = a.set;
        return Object.defineProperty(l, t, { configurable: !0, get: function () { return u.call(this); }, set: function (i) { e = "" + i, n.call(this, i); } }), Object.defineProperty(l, t, { enumerable: a.enumerable }), { getValue: function () { return e; }, setValue: function (i) { e = "" + i; }, stopTracking: function () { l._valueTracker = null, delete l[t]; } };
    } }
    function ii(l) { if (!l._valueTracker) {
        var t = Gf(l) ? "checked" : "value";
        l._valueTracker = I0(l, t, "" + l[t]);
    } }
    function Xf(l) { if (!l)
        return !1; var t = l._valueTracker; if (!t)
        return !0; var e = t.getValue(), a = ""; return l && (a = Gf(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== e ? (t.setValue(l), !0) : !1; }
    function Bu(l) { if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u")
        return null; try {
        return l.activeElement || l.body;
    }
    catch {
        return l.body;
    } }
    var P0 = /[\n"\\]/g;
    function dt(l) { return l.replace(P0, function (t) { return "\\" + t.charCodeAt(0).toString(16) + " "; }); }
    function ci(l, t, e, a, u, n, i, c) { l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + ot(t)) : l.value !== "" + ot(t) && (l.value = "" + ot(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), t != null ? fi(l, i, ot(t)) : e != null ? fi(l, i, ot(e)) : a != null && l.removeAttribute("value"), u == null && n != null && (l.defaultChecked = !!n), u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + ot(c) : l.removeAttribute("name"); }
    function Qf(l, t, e, a, u, n, i, c) { if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || e != null) {
        if (!(n !== "submit" && n !== "reset" || t != null)) {
            ii(l);
            return;
        }
        e = e != null ? "" + ot(e) : "", t = t != null ? "" + ot(t) : e, c || t === l.value || (l.value = t), l.defaultValue = t;
    } a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i), ii(l); }
    function fi(l, t, e) { t === "number" && Bu(l.ownerDocument) === l || l.defaultValue === "" + e || (l.defaultValue = "" + e); }
    function Fe(l, t, e, a) { if (l = l.options, t) {
        t = {};
        for (var u = 0; u < e.length; u++)
            t["$" + e[u]] = !0;
        for (e = 0; e < l.length; e++)
            u = t.hasOwnProperty("$" + l[e].value), l[e].selected !== u && (l[e].selected = u), u && a && (l[e].defaultSelected = !0);
    }
    else {
        for (e = "" + ot(e), t = null, u = 0; u < l.length; u++) {
            if (l[u].value === e) {
                l[u].selected = !0, a && (l[u].defaultSelected = !0);
                return;
            }
            t !== null || l[u].disabled || (t = l[u]);
        }
        t !== null && (t.selected = !0);
    } }
    function Lf(l, t, e) { if (t != null && (t = "" + ot(t), t !== l.value && (l.value = t), e == null)) {
        l.defaultValue !== t && (l.defaultValue = t);
        return;
    } l.defaultValue = e != null ? "" + ot(e) : ""; }
    function Zf(l, t, e, a) { if (t == null) {
        if (a != null) {
            if (e != null)
                throw Error(m(92));
            if (zt(a)) {
                if (1 < a.length)
                    throw Error(m(93));
                a = a[0];
            }
            e = a;
        }
        e == null && (e = ""), t = e;
    } e = ot(t), l.defaultValue = e, a = l.textContent, a === e && a !== "" && a !== null && (l.value = a), ii(l); }
    function Ie(l, t) { if (t) {
        var e = l.firstChild;
        if (e && e === l.lastChild && e.nodeType === 3) {
            e.nodeValue = t;
            return;
        }
    } l.textContent = t; }
    var lh = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Vf(l, t, e) { var a = t.indexOf("--") === 0; e == null || typeof e == "boolean" || e === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, e) : typeof e != "number" || e === 0 || lh.has(t) ? t === "float" ? l.cssFloat = e : l[t] = ("" + e).trim() : l[t] = e + "px"; }
    function Kf(l, t, e) { if (t != null && typeof t != "object")
        throw Error(m(62)); if (l = l.style, e != null) {
        for (var a in e)
            !e.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
        for (var u in t)
            a = t[u], t.hasOwnProperty(u) && e[u] !== a && Vf(l, u, a);
    }
    else
        for (var n in t)
            t.hasOwnProperty(n) && Vf(l, n, t[n]); }
    function si(l) { if (l.indexOf("-") === -1)
        return !1; switch (l) {
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
    var th = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), eh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Yu(l) { return eh.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l; }
    function Ct() { }
    var oi = null;
    function di(l) { return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l; }
    var Pe = null, la = null;
    function Jf(l) { var t = $e(l); if (t && (l = t.stateNode)) {
        var e = l[Vl] || null;
        l: switch (l = t.stateNode, t.type) {
            case "input":
                if (ci(l, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name), t = e.name, e.type === "radio" && t != null) {
                    for (e = l; e.parentNode;)
                        e = e.parentNode;
                    for (e = e.querySelectorAll('input[name="' + dt("" + t) + '"][type="radio"]'), t = 0; t < e.length; t++) {
                        var a = e[t];
                        if (a !== l && a.form === l.form) {
                            var u = a[Vl] || null;
                            if (!u)
                                throw Error(m(90));
                            ci(a, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name);
                        }
                    }
                    for (t = 0; t < e.length; t++)
                        a = e[t], a.form === l.form && Xf(a);
                }
                break l;
            case "textarea":
                Lf(l, e.value, e.defaultValue);
                break l;
            case "select": t = e.value, t != null && Fe(l, !!e.multiple, t, !1);
        }
    } }
    var hi = !1;
    function wf(l, t, e) { if (hi)
        return l(t, e); hi = !0; try {
        var a = l(t);
        return a;
    }
    finally {
        if (hi = !1, (Pe !== null || la !== null) && (_n(), Pe && (t = Pe, l = la, la = Pe = null, Jf(t), l)))
            for (t = 0; t < l.length; t++)
                Jf(l[t]);
    } }
    function Ba(l, t) { var e = l.stateNode; if (e === null)
        return null; var a = e[Vl] || null; if (a === null)
        return null; e = a[t]; l: switch (t) {
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
            (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
            break l;
        default: l = !1;
    } if (l)
        return null; if (e && typeof e != "function")
        throw Error(m(231, t, typeof e)); return e; }
    var Rt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), yi = !1;
    if (Rt)
        try {
            var Ya = {};
            Object.defineProperty(Ya, "passive", { get: function () { yi = !0; } }), window.addEventListener("test", Ya, Ya), window.removeEventListener("test", Ya, Ya);
        }
        catch {
            yi = !1;
        }
    var le = null, ri = null, Gu = null;
    function $f() { if (Gu)
        return Gu; var l, t = ri, e = t.length, a, u = "value" in le ? le.value : le.textContent, n = u.length; for (l = 0; l < e && t[l] === u[l]; l++)
        ; var i = e - l; for (a = 1; a <= i && t[e - a] === u[n - a]; a++)
        ; return Gu = u.slice(l, 1 < a ? 1 - a : void 0); }
    function Xu(l) { var t = l.keyCode; return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0; }
    function Qu() { return !0; }
    function Wf() { return !1; }
    function Kl(l) { function t(e, a, u, n, i) { this._reactName = e, this._targetInst = u, this.type = a, this.nativeEvent = n, this.target = i, this.currentTarget = null; for (var c in l)
        l.hasOwnProperty(c) && (e = l[c], this[c] = e ? e(n) : n[c]); return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Qu : Wf, this.isPropagationStopped = Wf, this; } return H(t.prototype, { preventDefault: function () { this.defaultPrevented = !0; var e = this.nativeEvent; e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Qu); }, stopPropagation: function () { var e = this.nativeEvent; e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Qu); }, persist: function () { }, isPersistent: Qu }), t; }
    var Me = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (l) { return l.timeStamp || Date.now(); }, defaultPrevented: 0, isTrusted: 0 }, Lu = Kl(Me), Ga = H({}, Me, { view: 0, detail: 0 }), ah = Kl(Ga), mi, vi, Xa, Zu = H({}, Ga, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Si, button: 0, buttons: 0, relatedTarget: function (l) { return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget; }, movementX: function (l) { return "movementX" in l ? l.movementX : (l !== Xa && (Xa && l.type === "mousemove" ? (mi = l.screenX - Xa.screenX, vi = l.screenY - Xa.screenY) : vi = mi = 0, Xa = l), mi); }, movementY: function (l) { return "movementY" in l ? l.movementY : vi; } }), kf = Kl(Zu), uh = H({}, Zu, { dataTransfer: 0 }), nh = Kl(uh), ih = H({}, Ga, { relatedTarget: 0 }), gi = Kl(ih), ch = H({}, Me, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), fh = Kl(ch), sh = H({}, Me, { clipboardData: function (l) { return "clipboardData" in l ? l.clipboardData : window.clipboardData; } }), oh = Kl(sh), dh = H({}, Me, { data: 0 }), Ff = Kl(dh), hh = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, yh = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, rh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function mh(l) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(l) : (l = rh[l]) ? !!t[l] : !1; }
    function Si() { return mh; }
    var vh = H({}, Ga, { key: function (l) { if (l.key) {
            var t = hh[l.key] || l.key;
            if (t !== "Unidentified")
                return t;
        } return l.type === "keypress" ? (l = Xu(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? yh[l.keyCode] || "Unidentified" : ""; }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Si, charCode: function (l) { return l.type === "keypress" ? Xu(l) : 0; }, keyCode: function (l) { return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0; }, which: function (l) { return l.type === "keypress" ? Xu(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0; } }), gh = Kl(vh), Sh = H({}, Zu, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), If = Kl(Sh), bh = H({}, Ga, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Si }), zh = Kl(bh), ph = H({}, Me, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ah = Kl(ph), Eh = H({}, Zu, { deltaX: function (l) { return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0; }, deltaY: function (l) { return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0; }, deltaZ: 0, deltaMode: 0 }), Th = Kl(Eh), xh = H({}, Me, { newState: 0, oldState: 0 }), _h = Kl(xh), Oh = [9, 13, 27, 32], bi = Rt && "CompositionEvent" in window, Qa = null;
    Rt && "documentMode" in document && (Qa = document.documentMode);
    var Mh = Rt && "TextEvent" in window && !Qa, Pf = Rt && (!bi || Qa && 8 < Qa && 11 >= Qa), ls = " ", ts = !1;
    function es(l, t) { switch (l) {
        case "keyup": return Oh.indexOf(t.keyCode) !== -1;
        case "keydown": return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout": return !0;
        default: return !1;
    } }
    function as(l) { return l = l.detail, typeof l == "object" && "data" in l ? l.data : null; }
    var ta = !1;
    function Dh(l, t) { switch (l) {
        case "compositionend": return as(t);
        case "keypress": return t.which !== 32 ? null : (ts = !0, ls);
        case "textInput": return l = t.data, l === ls && ts ? null : l;
        default: return null;
    } }
    function Nh(l, t) { if (ta)
        return l === "compositionend" || !bi && es(l, t) ? (l = $f(), Gu = ri = le = null, ta = !1, l) : null; switch (l) {
        case "paste": return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend": return Pf && t.locale !== "ko" ? null : t.data;
        default: return null;
    } }
    var Uh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
    function us(l) { var t = l && l.nodeName && l.nodeName.toLowerCase(); return t === "input" ? !!Uh[l.type] : t === "textarea"; }
    function ns(l, t, e, a) { Pe ? la ? la.push(a) : la = [a] : Pe = a, t = Hn(t, "onChange"), 0 < t.length && (e = new Lu("onChange", "change", null, e, a), l.push({ event: e, listeners: t })); }
    var La = null, Za = null;
    function jh(l) { Ld(l, 0); }
    function Vu(l) { var t = qa(l); if (Xf(t))
        return l; }
    function is(l, t) { if (l === "change")
        return t; }
    var cs = !1;
    if (Rt) {
        var zi;
        if (Rt) {
            var pi = "oninput" in document;
            if (!pi) {
                var fs = document.createElement("div");
                fs.setAttribute("oninput", "return;"), pi = typeof fs.oninput == "function";
            }
            zi = pi;
        }
        else
            zi = !1;
        cs = zi && (!document.documentMode || 9 < document.documentMode);
    }
    function ss() { La && (La.detachEvent("onpropertychange", os), Za = La = null); }
    function os(l) { if (l.propertyName === "value" && Vu(Za)) {
        var t = [];
        ns(t, Za, l, di(l)), wf(jh, t);
    } }
    function Hh(l, t, e) { l === "focusin" ? (ss(), La = t, Za = e, La.attachEvent("onpropertychange", os)) : l === "focusout" && ss(); }
    function Ch(l) { if (l === "selectionchange" || l === "keyup" || l === "keydown")
        return Vu(Za); }
    function Rh(l, t) { if (l === "click")
        return Vu(t); }
    function qh(l, t) { if (l === "input" || l === "change")
        return Vu(t); }
    function Bh(l, t) { return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t; }
    var tt = typeof Object.is == "function" ? Object.is : Bh;
    function Va(l, t) { if (tt(l, t))
        return !0; if (typeof l != "object" || l === null || typeof t != "object" || t === null)
        return !1; var e = Object.keys(l), a = Object.keys(t); if (e.length !== a.length)
        return !1; for (a = 0; a < e.length; a++) {
        var u = e[a];
        if (!In.call(t, u) || !tt(l[u], t[u]))
            return !1;
    } return !0; }
    function ds(l) { for (; l && l.firstChild;)
        l = l.firstChild; return l; }
    function hs(l, t) { var e = ds(l); l = 0; for (var a; e;) {
        if (e.nodeType === 3) {
            if (a = l + e.textContent.length, l <= t && a >= t)
                return { node: e, offset: t - l };
            l = a;
        }
        l: {
            for (; e;) {
                if (e.nextSibling) {
                    e = e.nextSibling;
                    break l;
                }
                e = e.parentNode;
            }
            e = void 0;
        }
        e = ds(e);
    } }
    function ys(l, t) { return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ys(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1; }
    function rs(l) { l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window; for (var t = Bu(l.document); t instanceof l.HTMLIFrameElement;) {
        try {
            var e = typeof t.contentWindow.location.href == "string";
        }
        catch {
            e = !1;
        }
        if (e)
            l = t.contentWindow;
        else
            break;
        t = Bu(l.document);
    } return t; }
    function Ai(l) { var t = l && l.nodeName && l.nodeName.toLowerCase(); return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true"); }
    var Yh = Rt && "documentMode" in document && 11 >= document.documentMode, ea = null, Ei = null, Ka = null, Ti = !1;
    function ms(l, t, e) { var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument; Ti || ea == null || ea !== Bu(a) || (a = ea, "selectionStart" in a && Ai(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset }), Ka && Va(Ka, a) || (Ka = a, a = Hn(Ei, "onSelect"), 0 < a.length && (t = new Lu("onSelect", "select", null, t, e), l.push({ event: t, listeners: a }), t.target = ea))); }
    function De(l, t) { var e = {}; return e[l.toLowerCase()] = t.toLowerCase(), e["Webkit" + l] = "webkit" + t, e["Moz" + l] = "moz" + t, e; }
    var aa = { animationend: De("Animation", "AnimationEnd"), animationiteration: De("Animation", "AnimationIteration"), animationstart: De("Animation", "AnimationStart"), transitionrun: De("Transition", "TransitionRun"), transitionstart: De("Transition", "TransitionStart"), transitioncancel: De("Transition", "TransitionCancel"), transitionend: De("Transition", "TransitionEnd") }, xi = {}, vs = {};
    Rt && (vs = document.createElement("div").style, "AnimationEvent" in window || (delete aa.animationend.animation, delete aa.animationiteration.animation, delete aa.animationstart.animation), "TransitionEvent" in window || delete aa.transitionend.transition);
    function Ne(l) { if (xi[l])
        return xi[l]; if (!aa[l])
        return l; var t = aa[l], e; for (e in t)
        if (t.hasOwnProperty(e) && e in vs)
            return xi[l] = t[e]; return l; }
    var gs = Ne("animationend"), Ss = Ne("animationiteration"), bs = Ne("animationstart"), Gh = Ne("transitionrun"), Xh = Ne("transitionstart"), Qh = Ne("transitioncancel"), zs = Ne("transitionend"), ps = new Map, _i = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    _i.push("scrollEnd");
    function pt(l, t) { ps.set(l, t), Oe(t, [l]); }
    var Ku = typeof reportError == "function" ? reportError : function (l) { if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l), error: l });
        if (!window.dispatchEvent(t))
            return;
    }
    else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", l);
        return;
    } console.error(l); }, ht = [], ua = 0, Oi = 0;
    function Ju() { for (var l = ua, t = Oi = ua = 0; t < l;) {
        var e = ht[t];
        ht[t++] = null;
        var a = ht[t];
        ht[t++] = null;
        var u = ht[t];
        ht[t++] = null;
        var n = ht[t];
        if (ht[t++] = null, a !== null && u !== null) {
            var i = a.pending;
            i === null ? u.next = u : (u.next = i.next, i.next = u), a.pending = u;
        }
        n !== 0 && As(e, u, n);
    } }
    function wu(l, t, e, a) { ht[ua++] = l, ht[ua++] = t, ht[ua++] = e, ht[ua++] = a, Oi |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a); }
    function Mi(l, t, e, a) { return wu(l, t, e, a), $u(l); }
    function Ue(l, t) { return wu(l, null, null, t), $u(l); }
    function As(l, t, e) { l.lanes |= e; var a = l.alternate; a !== null && (a.lanes |= e); for (var u = !1, n = l.return; n !== null;)
        n.childLanes |= e, a = n.alternate, a !== null && (a.childLanes |= e), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (u = !0)), l = n, n = n.return; return l.tag === 3 ? (n = l.stateNode, u && t !== null && (u = 31 - lt(e), l = n.hiddenUpdates, a = l[u], a === null ? l[u] = [t] : a.push(t), t.lane = e | 536870912), n) : null; }
    function $u(l) { if (50 < yu)
        throw yu = 0, Bc = null, Error(m(185)); for (var t = l.return; t !== null;)
        l = t, t = l.return; return l.tag === 3 ? l.stateNode : null; }
    var na = {};
    function Lh(l, t, e, a) { this.tag = l, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null; }
    function et(l, t, e, a) { return new Lh(l, t, e, a); }
    function Di(l) { return l = l.prototype, !(!l || !l.isReactComponent); }
    function qt(l, t) { var e = l.alternate; return e === null ? (e = et(l.tag, t, l.key, l.mode), e.elementType = l.elementType, e.type = l.type, e.stateNode = l.stateNode, e.alternate = l, l.alternate = e) : (e.pendingProps = t, e.type = l.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = l.flags & 65011712, e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, t = l.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, e.sibling = l.sibling, e.index = l.index, e.ref = l.ref, e.refCleanup = l.refCleanup, e; }
    function Es(l, t) { l.flags &= 65011714; var e = l.alternate; return e === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, l.type = e.type, t = e.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), l; }
    function Wu(l, t, e, a, u, n) { var i = 0; if (a = l, typeof l == "function")
        Di(l) && (i = 1);
    else if (typeof l == "string")
        i = wy(l, e, D.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
        l: switch (l) {
            case xt: return l = et(31, e, t, u), l.elementType = xt, l.lanes = n, l;
            case Bl: return je(e.children, u, n, t);
            case Ut:
                i = 8, u |= 24;
                break;
            case Fl: return l = et(12, e, t, u | 2), l.elementType = Fl, l.lanes = n, l;
            case Tt: return l = et(13, e, t, u), l.elementType = Tt, l.lanes = n, l;
            case Ql: return l = et(19, e, t, u), l.elementType = Ql, l.lanes = n, l;
            default:
                if (typeof l == "object" && l !== null)
                    switch (l.$$typeof) {
                        case Cl:
                            i = 10;
                            break l;
                        case Ft:
                            i = 9;
                            break l;
                        case st:
                            i = 11;
                            break l;
                        case F:
                            i = 14;
                            break l;
                        case Ll:
                            i = 16, a = null;
                            break l;
                    }
                i = 29, e = Error(m(130, l === null ? "null" : typeof l, "")), a = null;
        } return t = et(i, e, t, u), t.elementType = l, t.type = a, t.lanes = n, t; }
    function je(l, t, e, a) { return l = et(7, l, a, t), l.lanes = e, l; }
    function Ni(l, t, e) { return l = et(6, l, null, t), l.lanes = e, l; }
    function Ts(l) { var t = et(18, null, null, 0); return t.stateNode = l, t; }
    function Ui(l, t, e) { return t = et(4, l.children !== null ? l.children : [], l.key, t), t.lanes = e, t.stateNode = { containerInfo: l.containerInfo, pendingChildren: null, implementation: l.implementation }, t; }
    var xs = new WeakMap;
    function yt(l, t) { if (typeof l == "object" && l !== null) {
        var e = xs.get(l);
        return e !== void 0 ? e : (t = { value: l, source: t, stack: Tf(t) }, xs.set(l, t), t);
    } return { value: l, source: t, stack: Tf(t) }; }
    var ia = [], ca = 0, ku = null, Ja = 0, rt = [], mt = 0, te = null, Ot = 1, Mt = "";
    function Bt(l, t) { ia[ca++] = Ja, ia[ca++] = ku, ku = l, Ja = t; }
    function _s(l, t, e) { rt[mt++] = Ot, rt[mt++] = Mt, rt[mt++] = te, te = l; var a = Ot; l = Mt; var u = 32 - lt(a) - 1; a &= ~(1 << u), e += 1; var n = 32 - lt(t) + u; if (30 < n) {
        var i = u - u % 5;
        n = (a & (1 << i) - 1).toString(32), a >>= i, u -= i, Ot = 1 << 32 - lt(t) + u | e << u | a, Mt = n + l;
    }
    else
        Ot = 1 << n | e << u | a, Mt = l; }
    function ji(l) { l.return !== null && (Bt(l, 1), _s(l, 1, 0)); }
    function Hi(l) { for (; l === ku;)
        ku = ia[--ca], ia[ca] = null, Ja = ia[--ca], ia[ca] = null; for (; l === te;)
        te = rt[--mt], rt[mt] = null, Mt = rt[--mt], rt[mt] = null, Ot = rt[--mt], rt[mt] = null; }
    function Os(l, t) { rt[mt++] = Ot, rt[mt++] = Mt, rt[mt++] = te, Ot = t.id, Mt = t.overflow, te = l; }
    var Nl = null, yl = null, I = !1, ee = null, vt = !1, Ci = Error(m(519));
    function ae(l) { var t = Error(m(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")); throw wa(yt(t, l)), Ci; }
    function Ms(l) { var t = l.stateNode, e = l.type, a = l.memoizedProps; switch (t[Dl] = l, t[Vl] = a, e) {
        case "dialog":
            $("cancel", t), $("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            $("load", t);
            break;
        case "video":
        case "audio":
            for (e = 0; e < mu.length; e++)
                $(mu[e], t);
            break;
        case "source":
            $("error", t);
            break;
        case "img":
        case "image":
        case "link":
            $("error", t), $("load", t);
            break;
        case "details":
            $("toggle", t);
            break;
        case "input":
            $("invalid", t), Qf(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0);
            break;
        case "select":
            $("invalid", t);
            break;
        case "textarea": $("invalid", t), Zf(t, a.value, a.defaultValue, a.children);
    } e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || t.textContent === "" + e || a.suppressHydrationWarning === !0 || Jd(t.textContent, e) ? (a.popover != null && ($("beforetoggle", t), $("toggle", t)), a.onScroll != null && $("scroll", t), a.onScrollEnd != null && $("scrollend", t), a.onClick != null && (t.onclick = Ct), t = !0) : t = !1, t || ae(l, !0); }
    function Ds(l) { for (Nl = l.return; Nl;)
        switch (Nl.tag) {
            case 5:
            case 31:
            case 13:
                vt = !1;
                return;
            case 27:
            case 3:
                vt = !0;
                return;
            default: Nl = Nl.return;
        } }
    function fa(l) { if (l !== Nl)
        return !1; if (!I)
        return Ds(l), I = !0, !1; var t = l.tag, e; if ((e = t !== 3 && t !== 27) && ((e = t === 5) && (e = l.type, e = !(e !== "form" && e !== "button") || Ic(l.type, l.memoizedProps)), e = !e), e && yl && ae(l), Ds(l), t === 13) {
        if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l)
            throw Error(m(317));
        yl = t0(l);
    }
    else if (t === 31) {
        if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l)
            throw Error(m(317));
        yl = t0(l);
    }
    else
        t === 27 ? (t = yl, ge(l.type) ? (l = af, af = null, yl = l) : yl = t) : yl = Nl ? St(l.stateNode.nextSibling) : null; return !0; }
    function He() { yl = Nl = null, I = !1; }
    function Ri() { var l = ee; return l !== null && (Wl === null ? Wl = l : Wl.push.apply(Wl, l), ee = null), l; }
    function wa(l) { ee === null ? ee = [l] : ee.push(l); }
    var qi = o(null), Ce = null, Yt = null;
    function ue(l, t, e) { O(qi, t._currentValue), t._currentValue = e; }
    function Gt(l) { l._currentValue = qi.current, T(qi); }
    function Bi(l, t, e) { for (; l !== null;) {
        var a = l.alternate;
        if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === e)
            break;
        l = l.return;
    } }
    function Yi(l, t, e, a) { var u = l.child; for (u !== null && (u.return = l); u !== null;) {
        var n = u.dependencies;
        if (n !== null) {
            var i = u.child;
            n = n.firstContext;
            l: for (; n !== null;) {
                var c = n;
                n = u;
                for (var f = 0; f < t.length; f++)
                    if (c.context === t[f]) {
                        n.lanes |= e, c = n.alternate, c !== null && (c.lanes |= e), Bi(n.return, e, l), a || (i = null);
                        break l;
                    }
                n = c.next;
            }
        }
        else if (u.tag === 18) {
            if (i = u.return, i === null)
                throw Error(m(341));
            i.lanes |= e, n = i.alternate, n !== null && (n.lanes |= e), Bi(i, e, l), i = null;
        }
        else
            i = u.child;
        if (i !== null)
            i.return = u;
        else
            for (i = u; i !== null;) {
                if (i === l) {
                    i = null;
                    break;
                }
                if (u = i.sibling, u !== null) {
                    u.return = i.return, i = u;
                    break;
                }
                i = i.return;
            }
        u = i;
    } }
    function sa(l, t, e, a) { l = null; for (var u = t, n = !1; u !== null;) {
        if (!n) {
            if ((u.flags & 524288) !== 0)
                n = !0;
            else if ((u.flags & 262144) !== 0)
                break;
        }
        if (u.tag === 10) {
            var i = u.alternate;
            if (i === null)
                throw Error(m(387));
            if (i = i.memoizedProps, i !== null) {
                var c = u.type;
                tt(u.pendingProps.value, i.value) || (l !== null ? l.push(c) : l = [c]);
            }
        }
        else if (u === al.current) {
            if (i = u.alternate, i === null)
                throw Error(m(387));
            i.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(zu) : l = [zu]);
        }
        u = u.return;
    } l !== null && Yi(t, l, e, a), t.flags |= 262144; }
    function Fu(l) { for (l = l.firstContext; l !== null;) {
        if (!tt(l.context._currentValue, l.memoizedValue))
            return !0;
        l = l.next;
    } return !1; }
    function Re(l) { Ce = l, Yt = null, l = l.dependencies, l !== null && (l.firstContext = null); }
    function Ul(l) { return Ns(Ce, l); }
    function Iu(l, t) { return Ce === null && Re(l), Ns(l, t); }
    function Ns(l, t) { var e = t._currentValue; if (t = { context: t, memoizedValue: e, next: null }, Yt === null) {
        if (l === null)
            throw Error(m(308));
        Yt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    }
    else
        Yt = Yt.next = t; return e; }
    var Zh = typeof AbortController < "u" ? AbortController : function () { var l = [], t = this.signal = { aborted: !1, addEventListener: function (e, a) { l.push(a); } }; this.abort = function () { t.aborted = !0, l.forEach(function (e) { return e(); }); }; }, Vh = b.unstable_scheduleCallback, Kh = b.unstable_NormalPriority, Al = { $$typeof: Cl, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
    function Gi() { return { controller: new Zh, data: new Map, refCount: 0 }; }
    function $a(l) { l.refCount--, l.refCount === 0 && Vh(Kh, function () { l.controller.abort(); }); }
    var Wa = null, Xi = 0, oa = 0, da = null;
    function Jh(l, t) { if (Wa === null) {
        var e = Wa = [];
        Xi = 0, oa = Zc(), da = { status: "pending", value: void 0, then: function (a) { e.push(a); } };
    } return Xi++, t.then(Us, Us), t; }
    function Us() { if (--Xi === 0 && Wa !== null) {
        da !== null && (da.status = "fulfilled");
        var l = Wa;
        Wa = null, oa = 0, da = null;
        for (var t = 0; t < l.length; t++)
            (0, l[t])();
    } }
    function wh(l, t) { var e = [], a = { status: "pending", value: null, reason: null, then: function (u) { e.push(u); } }; return l.then(function () { a.status = "fulfilled", a.value = t; for (var u = 0; u < e.length; u++)
        (0, e[u])(t); }, function (u) { for (a.status = "rejected", a.reason = u, u = 0; u < e.length; u++)
        (0, e[u])(void 0); }), a; }
    var js = p.S;
    p.S = function (l, t) { vd = Il(), typeof t == "object" && t !== null && typeof t.then == "function" && Jh(l, t), js !== null && js(l, t); };
    var qe = o(null);
    function Qi() { var l = qe.current; return l !== null ? l : hl.pooledCache; }
    function Pu(l, t) { t === null ? O(qe, qe.current) : O(qe, t.pool); }
    function Hs() { var l = Qi(); return l === null ? null : { parent: Al._currentValue, pool: l }; }
    var ha = Error(m(460)), Li = Error(m(474)), ln = Error(m(542)), tn = { then: function () { } };
    function Cs(l) { return l = l.status, l === "fulfilled" || l === "rejected"; }
    function Rs(l, t, e) { switch (e = l[e], e === void 0 ? l.push(t) : e !== t && (t.then(Ct, Ct), t = e), t.status) {
        case "fulfilled": return t.value;
        case "rejected": throw l = t.reason, Bs(l), l;
        default:
            if (typeof t.status == "string")
                t.then(Ct, Ct);
            else {
                if (l = hl, l !== null && 100 < l.shellSuspendCounter)
                    throw Error(m(482));
                l = t, l.status = "pending", l.then(function (a) { if (t.status === "pending") {
                    var u = t;
                    u.status = "fulfilled", u.value = a;
                } }, function (a) { if (t.status === "pending") {
                    var u = t;
                    u.status = "rejected", u.reason = a;
                } });
            }
            switch (t.status) {
                case "fulfilled": return t.value;
                case "rejected": throw l = t.reason, Bs(l), l;
            }
            throw Ye = t, ha;
    } }
    function Be(l) { try {
        var t = l._init;
        return t(l._payload);
    }
    catch (e) {
        throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Ye = e, ha) : e;
    } }
    var Ye = null;
    function qs() { if (Ye === null)
        throw Error(m(459)); var l = Ye; return Ye = null, l; }
    function Bs(l) { if (l === ha || l === ln)
        throw Error(m(483)); }
    var ya = null, ka = 0;
    function en(l) { var t = ka; return ka += 1, ya === null && (ya = []), Rs(ya, l, t); }
    function Fa(l, t) { t = t.props.ref, l.ref = t !== void 0 ? t : null; }
    function an(l, t) { throw t.$$typeof === el ? Error(m(525)) : (l = Object.prototype.toString.call(t), Error(m(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l))); }
    function Ys(l) { function t(d, s) { if (l) {
        var y = d.deletions;
        y === null ? (d.deletions = [s], d.flags |= 16) : y.push(s);
    } } function e(d, s) { if (!l)
        return null; for (; s !== null;)
        t(d, s), s = s.sibling; return null; } function a(d) { for (var s = new Map; d !== null;)
        d.key !== null ? s.set(d.key, d) : s.set(d.index, d), d = d.sibling; return s; } function u(d, s) { return d = qt(d, s), d.index = 0, d.sibling = null, d; } function n(d, s, y) { return d.index = y, l ? (y = d.alternate, y !== null ? (y = y.index, y < s ? (d.flags |= 67108866, s) : y) : (d.flags |= 67108866, s)) : (d.flags |= 1048576, s); } function i(d) { return l && d.alternate === null && (d.flags |= 67108866), d; } function c(d, s, y, A) { return s === null || s.tag !== 6 ? (s = Ni(y, d.mode, A), s.return = d, s) : (s = u(s, y), s.return = d, s); } function f(d, s, y, A) { var R = y.type; return R === Bl ? S(d, s, y.props.children, A, y.key) : s !== null && (s.elementType === R || typeof R == "object" && R !== null && R.$$typeof === Ll && Be(R) === s.type) ? (s = u(s, y.props), Fa(s, y), s.return = d, s) : (s = Wu(y.type, y.key, y.props, null, d.mode, A), Fa(s, y), s.return = d, s); } function r(d, s, y, A) { return s === null || s.tag !== 4 || s.stateNode.containerInfo !== y.containerInfo || s.stateNode.implementation !== y.implementation ? (s = Ui(y, d.mode, A), s.return = d, s) : (s = u(s, y.children || []), s.return = d, s); } function S(d, s, y, A, R) { return s === null || s.tag !== 7 ? (s = je(y, d.mode, A, R), s.return = d, s) : (s = u(s, y), s.return = d, s); } function E(d, s, y) { if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint")
        return s = Ni("" + s, d.mode, y), s.return = d, s; if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
            case ql: return y = Wu(s.type, s.key, s.props, null, d.mode, y), Fa(y, s), y.return = d, y;
            case Xl: return s = Ui(s, d.mode, y), s.return = d, s;
            case Ll: return s = Be(s), E(d, s, y);
        }
        if (zt(s) || Zl(s))
            return s = je(s, d.mode, y, null), s.return = d, s;
        if (typeof s.then == "function")
            return E(d, en(s), y);
        if (s.$$typeof === Cl)
            return E(d, Iu(d, s), y);
        an(d, s);
    } return null; } function v(d, s, y, A) { var R = s !== null ? s.key : null; if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return R !== null ? null : c(d, s, "" + y, A); if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
            case ql: return y.key === R ? f(d, s, y, A) : null;
            case Xl: return y.key === R ? r(d, s, y, A) : null;
            case Ll: return y = Be(y), v(d, s, y, A);
        }
        if (zt(y) || Zl(y))
            return R !== null ? null : S(d, s, y, A, null);
        if (typeof y.then == "function")
            return v(d, s, en(y), A);
        if (y.$$typeof === Cl)
            return v(d, s, Iu(d, y), A);
        an(d, y);
    } return null; } function g(d, s, y, A, R) { if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return d = d.get(y) || null, c(s, d, "" + A, R); if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
            case ql: return d = d.get(A.key === null ? y : A.key) || null, f(s, d, A, R);
            case Xl: return d = d.get(A.key === null ? y : A.key) || null, r(s, d, A, R);
            case Ll: return A = Be(A), g(d, s, y, A, R);
        }
        if (zt(A) || Zl(A))
            return d = d.get(y) || null, S(s, d, A, R, null);
        if (typeof A.then == "function")
            return g(d, s, y, en(A), R);
        if (A.$$typeof === Cl)
            return g(d, s, y, Iu(s, A), R);
        an(s, A);
    } return null; } function M(d, s, y, A) { for (var R = null, P = null, U = s, V = s = 0, k = null; U !== null && V < y.length; V++) {
        U.index > V ? (k = U, U = null) : k = U.sibling;
        var ll = v(d, U, y[V], A);
        if (ll === null) {
            U === null && (U = k);
            break;
        }
        l && U && ll.alternate === null && t(d, U), s = n(ll, s, V), P === null ? R = ll : P.sibling = ll, P = ll, U = k;
    } if (V === y.length)
        return e(d, U), I && Bt(d, V), R; if (U === null) {
        for (; V < y.length; V++)
            U = E(d, y[V], A), U !== null && (s = n(U, s, V), P === null ? R = U : P.sibling = U, P = U);
        return I && Bt(d, V), R;
    } for (U = a(U); V < y.length; V++)
        k = g(U, d, V, y[V], A), k !== null && (l && k.alternate !== null && U.delete(k.key === null ? V : k.key), s = n(k, s, V), P === null ? R = k : P.sibling = k, P = k); return l && U.forEach(function (Ae) { return t(d, Ae); }), I && Bt(d, V), R; } function q(d, s, y, A) { if (y == null)
        throw Error(m(151)); for (var R = null, P = null, U = s, V = s = 0, k = null, ll = y.next(); U !== null && !ll.done; V++, ll = y.next()) {
        U.index > V ? (k = U, U = null) : k = U.sibling;
        var Ae = v(d, U, ll.value, A);
        if (Ae === null) {
            U === null && (U = k);
            break;
        }
        l && U && Ae.alternate === null && t(d, U), s = n(Ae, s, V), P === null ? R = Ae : P.sibling = Ae, P = Ae, U = k;
    } if (ll.done)
        return e(d, U), I && Bt(d, V), R; if (U === null) {
        for (; !ll.done; V++, ll = y.next())
            ll = E(d, ll.value, A), ll !== null && (s = n(ll, s, V), P === null ? R = ll : P.sibling = ll, P = ll);
        return I && Bt(d, V), R;
    } for (U = a(U); !ll.done; V++, ll = y.next())
        ll = g(U, d, V, ll.value, A), ll !== null && (l && ll.alternate !== null && U.delete(ll.key === null ? V : ll.key), s = n(ll, s, V), P === null ? R = ll : P.sibling = ll, P = ll); return l && U.forEach(function (ur) { return t(d, ur); }), I && Bt(d, V), R; } function ol(d, s, y, A) { if (typeof y == "object" && y !== null && y.type === Bl && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
            case ql:
                l: {
                    for (var R = y.key; s !== null;) {
                        if (s.key === R) {
                            if (R = y.type, R === Bl) {
                                if (s.tag === 7) {
                                    e(d, s.sibling), A = u(s, y.props.children), A.return = d, d = A;
                                    break l;
                                }
                            }
                            else if (s.elementType === R || typeof R == "object" && R !== null && R.$$typeof === Ll && Be(R) === s.type) {
                                e(d, s.sibling), A = u(s, y.props), Fa(A, y), A.return = d, d = A;
                                break l;
                            }
                            e(d, s);
                            break;
                        }
                        else
                            t(d, s);
                        s = s.sibling;
                    }
                    y.type === Bl ? (A = je(y.props.children, d.mode, A, y.key), A.return = d, d = A) : (A = Wu(y.type, y.key, y.props, null, d.mode, A), Fa(A, y), A.return = d, d = A);
                }
                return i(d);
            case Xl:
                l: {
                    for (R = y.key; s !== null;) {
                        if (s.key === R)
                            if (s.tag === 4 && s.stateNode.containerInfo === y.containerInfo && s.stateNode.implementation === y.implementation) {
                                e(d, s.sibling), A = u(s, y.children || []), A.return = d, d = A;
                                break l;
                            }
                            else {
                                e(d, s);
                                break;
                            }
                        else
                            t(d, s);
                        s = s.sibling;
                    }
                    A = Ui(y, d.mode, A), A.return = d, d = A;
                }
                return i(d);
            case Ll: return y = Be(y), ol(d, s, y, A);
        }
        if (zt(y))
            return M(d, s, y, A);
        if (Zl(y)) {
            if (R = Zl(y), typeof R != "function")
                throw Error(m(150));
            return y = R.call(y), q(d, s, y, A);
        }
        if (typeof y.then == "function")
            return ol(d, s, en(y), A);
        if (y.$$typeof === Cl)
            return ol(d, s, Iu(d, y), A);
        an(d, y);
    } return typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint" ? (y = "" + y, s !== null && s.tag === 6 ? (e(d, s.sibling), A = u(s, y), A.return = d, d = A) : (e(d, s), A = Ni(y, d.mode, A), A.return = d, d = A), i(d)) : e(d, s); } return function (d, s, y, A) { try {
        ka = 0;
        var R = ol(d, s, y, A);
        return ya = null, R;
    }
    catch (U) {
        if (U === ha || U === ln)
            throw U;
        var P = et(29, U, null, d.mode);
        return P.lanes = A, P.return = d, P;
    } }; }
    var Ge = Ys(!0), Gs = Ys(!1), ne = !1;
    function Zi(l) { l.updateQueue = { baseState: l.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null }; }
    function Vi(l, t) { l = l.updateQueue, t.updateQueue === l && (t.updateQueue = { baseState: l.baseState, firstBaseUpdate: l.firstBaseUpdate, lastBaseUpdate: l.lastBaseUpdate, shared: l.shared, callbacks: null }); }
    function ie(l) { return { lane: l, tag: 0, payload: null, callback: null, next: null }; }
    function ce(l, t, e) { var a = l.updateQueue; if (a === null)
        return null; if (a = a.shared, (tl & 2) !== 0) {
        var u = a.pending;
        return u === null ? t.next = t : (t.next = u.next, u.next = t), a.pending = t, t = $u(l), As(l, null, e), t;
    } return wu(l, a, t, e), $u(l); }
    function Ia(l, t, e) { if (t = t.updateQueue, t !== null && (t = t.shared, (e & 4194048) !== 0)) {
        var a = t.lanes;
        a &= l.pendingLanes, e |= a, t.lanes = e, Nf(l, e);
    } }
    function Ki(l, t) { var e = l.updateQueue, a = l.alternate; if (a !== null && (a = a.updateQueue, e === a)) {
        var u = null, n = null;
        if (e = e.firstBaseUpdate, e !== null) {
            do {
                var i = { lane: e.lane, tag: e.tag, payload: e.payload, callback: null, next: null };
                n === null ? u = n = i : n = n.next = i, e = e.next;
            } while (e !== null);
            n === null ? u = n = t : n = n.next = t;
        }
        else
            u = n = t;
        e = { baseState: a.baseState, firstBaseUpdate: u, lastBaseUpdate: n, shared: a.shared, callbacks: a.callbacks }, l.updateQueue = e;
        return;
    } l = e.lastBaseUpdate, l === null ? e.firstBaseUpdate = t : l.next = t, e.lastBaseUpdate = t; }
    var Ji = !1;
    function Pa() { if (Ji) {
        var l = da;
        if (l !== null)
            throw l;
    } }
    function lu(l, t, e, a) { Ji = !1; var u = l.updateQueue; ne = !1; var n = u.firstBaseUpdate, i = u.lastBaseUpdate, c = u.shared.pending; if (c !== null) {
        u.shared.pending = null;
        var f = c, r = f.next;
        f.next = null, i === null ? n = r : i.next = r, i = f;
        var S = l.alternate;
        S !== null && (S = S.updateQueue, c = S.lastBaseUpdate, c !== i && (c === null ? S.firstBaseUpdate = r : c.next = r, S.lastBaseUpdate = f));
    } if (n !== null) {
        var E = u.baseState;
        i = 0, S = r = f = null, c = n;
        do {
            var v = c.lane & -536870913, g = v !== c.lane;
            if (g ? (W & v) === v : (a & v) === v) {
                v !== 0 && v === oa && (Ji = !0), S !== null && (S = S.next = { lane: 0, tag: c.tag, payload: c.payload, callback: null, next: null });
                l: {
                    var M = l, q = c;
                    v = t;
                    var ol = e;
                    switch (q.tag) {
                        case 1:
                            if (M = q.payload, typeof M == "function") {
                                E = M.call(ol, E, v);
                                break l;
                            }
                            E = M;
                            break l;
                        case 3: M.flags = M.flags & -65537 | 128;
                        case 0:
                            if (M = q.payload, v = typeof M == "function" ? M.call(ol, E, v) : M, v == null)
                                break l;
                            E = H({}, E, v);
                            break l;
                        case 2: ne = !0;
                    }
                }
                v = c.callback, v !== null && (l.flags |= 64, g && (l.flags |= 8192), g = u.callbacks, g === null ? u.callbacks = [v] : g.push(v));
            }
            else
                g = { lane: v, tag: c.tag, payload: c.payload, callback: c.callback, next: null }, S === null ? (r = S = g, f = E) : S = S.next = g, i |= v;
            if (c = c.next, c === null) {
                if (c = u.shared.pending, c === null)
                    break;
                g = c, c = g.next, g.next = null, u.lastBaseUpdate = g, u.shared.pending = null;
            }
        } while (!0);
        S === null && (f = E), u.baseState = f, u.firstBaseUpdate = r, u.lastBaseUpdate = S, n === null && (u.shared.lanes = 0), he |= i, l.lanes = i, l.memoizedState = E;
    } }
    function Xs(l, t) { if (typeof l != "function")
        throw Error(m(191, l)); l.call(t); }
    function Qs(l, t) { var e = l.callbacks; if (e !== null)
        for (l.callbacks = null, l = 0; l < e.length; l++)
            Xs(e[l], t); }
    var ra = o(null), un = o(0);
    function Ls(l, t) { l = $t, O(un, l), O(ra, t), $t = l | t.baseLanes; }
    function wi() { O(un, $t), O(ra, ra.current); }
    function $i() { $t = un.current, T(ra), T(un); }
    var at = o(null), gt = null;
    function fe(l) { var t = l.alternate; O(zl, zl.current & 1), O(at, l), gt === null && (t === null || ra.current !== null || t.memoizedState !== null) && (gt = l); }
    function Wi(l) { O(zl, zl.current), O(at, l), gt === null && (gt = l); }
    function Zs(l) { l.tag === 22 ? (O(zl, zl.current), O(at, l), gt === null && (gt = l)) : se(); }
    function se() { O(zl, zl.current), O(at, at.current); }
    function ut(l) { T(at), gt === l && (gt = null), T(zl); }
    var zl = o(0);
    function nn(l) { for (var t = l; t !== null;) {
        if (t.tag === 13) {
            var e = t.memoizedState;
            if (e !== null && (e = e.dehydrated, e === null || tf(e) || ef(e)))
                return t;
        }
        else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
            if ((t.flags & 128) !== 0)
                return t;
        }
        else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
        }
        if (t === l)
            break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === l)
                return null;
            t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
    } return null; }
    var Xt = 0, Z = null, fl = null, El = null, cn = !1, ma = !1, Xe = !1, fn = 0, tu = 0, va = null, $h = 0;
    function gl() { throw Error(m(321)); }
    function ki(l, t) { if (t === null)
        return !1; for (var e = 0; e < t.length && e < l.length; e++)
        if (!tt(l[e], t[e]))
            return !1; return !0; }
    function Fi(l, t, e, a, u, n) { return Xt = n, Z = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, p.H = l === null || l.memoizedState === null ? Oo : hc, Xe = !1, n = e(a, u), Xe = !1, ma && (n = Ks(t, e, a, u)), Vs(l), n; }
    function Vs(l) { p.H = uu; var t = fl !== null && fl.next !== null; if (Xt = 0, El = fl = Z = null, cn = !1, tu = 0, va = null, t)
        throw Error(m(300)); l === null || Tl || (l = l.dependencies, l !== null && Fu(l) && (Tl = !0)); }
    function Ks(l, t, e, a) { Z = l; var u = 0; do {
        if (ma && (va = null), tu = 0, ma = !1, 25 <= u)
            throw Error(m(301));
        if (u += 1, El = fl = null, l.updateQueue != null) {
            var n = l.updateQueue;
            n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
        }
        p.H = Mo, n = t(e, a);
    } while (ma); return n; }
    function Wh() { var l = p.H, t = l.useState()[0]; return t = typeof t.then == "function" ? eu(t) : t, l = l.useState()[0], (fl !== null ? fl.memoizedState : null) !== l && (Z.flags |= 1024), t; }
    function Ii() { var l = fn !== 0; return fn = 0, l; }
    function Pi(l, t, e) { t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~e; }
    function lc(l) { if (cn) {
        for (l = l.memoizedState; l !== null;) {
            var t = l.queue;
            t !== null && (t.pending = null), l = l.next;
        }
        cn = !1;
    } Xt = 0, El = fl = Z = null, ma = !1, tu = fn = 0, va = null; }
    function Gl() { var l = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return El === null ? Z.memoizedState = El = l : El = El.next = l, El; }
    function pl() { if (fl === null) {
        var l = Z.alternate;
        l = l !== null ? l.memoizedState : null;
    }
    else
        l = fl.next; var t = El === null ? Z.memoizedState : El.next; if (t !== null)
        El = t, fl = l;
    else {
        if (l === null)
            throw Z.alternate === null ? Error(m(467)) : Error(m(310));
        fl = l, l = { memoizedState: fl.memoizedState, baseState: fl.baseState, baseQueue: fl.baseQueue, queue: fl.queue, next: null }, El === null ? Z.memoizedState = El = l : El = El.next = l;
    } return El; }
    function sn() { return { lastEffect: null, events: null, stores: null, memoCache: null }; }
    function eu(l) { var t = tu; return tu += 1, va === null && (va = []), l = Rs(va, l, t), t = Z, (El === null ? t.memoizedState : El.next) === null && (t = t.alternate, p.H = t === null || t.memoizedState === null ? Oo : hc), l; }
    function on(l) { if (l !== null && typeof l == "object") {
        if (typeof l.then == "function")
            return eu(l);
        if (l.$$typeof === Cl)
            return Ul(l);
    } throw Error(m(438, String(l))); }
    function tc(l) { var t = null, e = Z.updateQueue; if (e !== null && (t = e.memoCache), t == null) {
        var a = Z.alternate;
        a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = { data: a.data.map(function (u) { return u.slice(); }), index: 0 })));
    } if (t == null && (t = { data: [], index: 0 }), e === null && (e = sn(), Z.updateQueue = e), e.memoCache = t, e = t.data[t.index], e === void 0)
        for (e = t.data[t.index] = Array(l), a = 0; a < l; a++)
            e[a] = Ke; return t.index++, e; }
    function Qt(l, t) { return typeof t == "function" ? t(l) : t; }
    function dn(l) { var t = pl(); return ec(t, fl, l); }
    function ec(l, t, e) { var a = l.queue; if (a === null)
        throw Error(m(311)); a.lastRenderedReducer = e; var u = l.baseQueue, n = a.pending; if (n !== null) {
        if (u !== null) {
            var i = u.next;
            u.next = n.next, n.next = i;
        }
        t.baseQueue = u = n, a.pending = null;
    } if (n = l.baseState, u === null)
        l.memoizedState = n;
    else {
        t = u.next;
        var c = i = null, f = null, r = t, S = !1;
        do {
            var E = r.lane & -536870913;
            if (E !== r.lane ? (W & E) === E : (Xt & E) === E) {
                var v = r.revertLane;
                if (v === 0)
                    f !== null && (f = f.next = { lane: 0, revertLane: 0, gesture: null, action: r.action, hasEagerState: r.hasEagerState, eagerState: r.eagerState, next: null }), E === oa && (S = !0);
                else if ((Xt & v) === v) {
                    r = r.next, v === oa && (S = !0);
                    continue;
                }
                else
                    E = { lane: 0, revertLane: r.revertLane, gesture: null, action: r.action, hasEagerState: r.hasEagerState, eagerState: r.eagerState, next: null }, f === null ? (c = f = E, i = n) : f = f.next = E, Z.lanes |= v, he |= v;
                E = r.action, Xe && e(n, E), n = r.hasEagerState ? r.eagerState : e(n, E);
            }
            else
                v = { lane: E, revertLane: r.revertLane, gesture: r.gesture, action: r.action, hasEagerState: r.hasEagerState, eagerState: r.eagerState, next: null }, f === null ? (c = f = v, i = n) : f = f.next = v, Z.lanes |= E, he |= E;
            r = r.next;
        } while (r !== null && r !== t);
        if (f === null ? i = n : f.next = c, !tt(n, l.memoizedState) && (Tl = !0, S && (e = da, e !== null)))
            throw e;
        l.memoizedState = n, l.baseState = i, l.baseQueue = f, a.lastRenderedState = n;
    } return u === null && (a.lanes = 0), [l.memoizedState, a.dispatch]; }
    function ac(l) { var t = pl(), e = t.queue; if (e === null)
        throw Error(m(311)); e.lastRenderedReducer = l; var a = e.dispatch, u = e.pending, n = t.memoizedState; if (u !== null) {
        e.pending = null;
        var i = u = u.next;
        do
            n = l(n, i.action), i = i.next;
        while (i !== u);
        tt(n, t.memoizedState) || (Tl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), e.lastRenderedState = n;
    } return [n, a]; }
    function Js(l, t, e) { var a = Z, u = pl(), n = I; if (n) {
        if (e === void 0)
            throw Error(m(407));
        e = e();
    }
    else
        e = t(); var i = !tt((fl || u).memoizedState, e); if (i && (u.memoizedState = e, Tl = !0), u = u.queue, ic(Ws.bind(null, a, u, l), [l]), u.getSnapshot !== t || i || El !== null && El.memoizedState.tag & 1) {
        if (a.flags |= 2048, ga(9, { destroy: void 0 }, $s.bind(null, a, u, e, t), null), hl === null)
            throw Error(m(349));
        n || (Xt & 127) !== 0 || ws(a, t, e);
    } return e; }
    function ws(l, t, e) { l.flags |= 16384, l = { getSnapshot: t, value: e }, t = Z.updateQueue, t === null ? (t = sn(), Z.updateQueue = t, t.stores = [l]) : (e = t.stores, e === null ? t.stores = [l] : e.push(l)); }
    function $s(l, t, e, a) { t.value = e, t.getSnapshot = a, ks(t) && Fs(l); }
    function Ws(l, t, e) { return e(function () { ks(t) && Fs(l); }); }
    function ks(l) { var t = l.getSnapshot; l = l.value; try {
        var e = t();
        return !tt(l, e);
    }
    catch {
        return !0;
    } }
    function Fs(l) { var t = Ue(l, 2); t !== null && kl(t, l, 2); }
    function uc(l) { var t = Gl(); if (typeof l == "function") {
        var e = l;
        if (l = e(), Xe) {
            It(!0);
            try {
                e();
            }
            finally {
                It(!1);
            }
        }
    } return t.memoizedState = t.baseState = l, t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Qt, lastRenderedState: l }, t; }
    function Is(l, t, e, a) { return l.baseState = e, ec(l, fl, typeof a == "function" ? a : Qt); }
    function kh(l, t, e, a, u) { if (rn(l))
        throw Error(m(485)); if (l = t.action, l !== null) {
        var n = { payload: u, action: l, next: null, isTransition: !0, status: "pending", value: null, reason: null, listeners: [], then: function (i) { n.listeners.push(i); } };
        p.T !== null ? e(!0) : n.isTransition = !1, a(n), e = t.pending, e === null ? (n.next = t.pending = n, Ps(t, n)) : (n.next = e.next, t.pending = e.next = n);
    } }
    function Ps(l, t) { var e = t.action, a = t.payload, u = l.state; if (t.isTransition) {
        var n = p.T, i = {};
        p.T = i;
        try {
            var c = e(u, a), f = p.S;
            f !== null && f(i, c), lo(l, t, c);
        }
        catch (r) {
            nc(l, t, r);
        }
        finally {
            n !== null && i.types !== null && (n.types = i.types), p.T = n;
        }
    }
    else
        try {
            n = e(u, a), lo(l, t, n);
        }
        catch (r) {
            nc(l, t, r);
        } }
    function lo(l, t, e) { e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(function (a) { to(l, t, a); }, function (a) { return nc(l, t, a); }) : to(l, t, e); }
    function to(l, t, e) { t.status = "fulfilled", t.value = e, eo(t), l.state = e, t = l.pending, t !== null && (e = t.next, e === t ? l.pending = null : (e = e.next, t.next = e, Ps(l, e))); }
    function nc(l, t, e) { var a = l.pending; if (l.pending = null, a !== null) {
        a = a.next;
        do
            t.status = "rejected", t.reason = e, eo(t), t = t.next;
        while (t !== a);
    } l.action = null; }
    function eo(l) { l = l.listeners; for (var t = 0; t < l.length; t++)
        (0, l[t])(); }
    function ao(l, t) { return t; }
    function uo(l, t) { if (I) {
        var e = hl.formState;
        if (e !== null) {
            l: {
                var a = Z;
                if (I) {
                    if (yl) {
                        t: {
                            for (var u = yl, n = vt; u.nodeType !== 8;) {
                                if (!n) {
                                    u = null;
                                    break t;
                                }
                                if (u = St(u.nextSibling), u === null) {
                                    u = null;
                                    break t;
                                }
                            }
                            n = u.data, u = n === "F!" || n === "F" ? u : null;
                        }
                        if (u) {
                            yl = St(u.nextSibling), a = u.data === "F!";
                            break l;
                        }
                    }
                    ae(a);
                }
                a = !1;
            }
            a && (t = e[0]);
        }
    } return e = Gl(), e.memoizedState = e.baseState = t, a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ao, lastRenderedState: t }, e.queue = a, e = To.bind(null, Z, a), a.dispatch = e, a = uc(!1), n = dc.bind(null, Z, !1, a.queue), a = Gl(), u = { state: t, dispatch: null, action: l, pending: null }, a.queue = u, e = kh.bind(null, Z, u, n, e), u.dispatch = e, a.memoizedState = l, [t, e, !1]; }
    function no(l) { var t = pl(); return io(t, fl, l); }
    function io(l, t, e) { if (t = ec(l, t, ao)[0], l = dn(Qt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
            var a = eu(t);
        }
        catch (i) {
            throw i === ha ? ln : i;
        }
    else
        a = t; t = pl(); var u = t.queue, n = u.dispatch; return e !== t.memoizedState && (Z.flags |= 2048, ga(9, { destroy: void 0 }, Fh.bind(null, u, e), null)), [a, n, l]; }
    function Fh(l, t) { l.action = t; }
    function co(l) { var t = pl(), e = fl; if (e !== null)
        return io(t, e, l); pl(), t = t.memoizedState, e = pl(); var a = e.queue.dispatch; return e.memoizedState = l, [t, a, !1]; }
    function ga(l, t, e, a) { return l = { tag: l, create: e, deps: a, inst: t, next: null }, t = Z.updateQueue, t === null && (t = sn(), Z.updateQueue = t), e = t.lastEffect, e === null ? t.lastEffect = l.next = l : (a = e.next, e.next = l, l.next = a, t.lastEffect = l), l; }
    function fo() { return pl().memoizedState; }
    function hn(l, t, e, a) { var u = Gl(); Z.flags |= l, u.memoizedState = ga(1 | t, { destroy: void 0 }, e, a === void 0 ? null : a); }
    function yn(l, t, e, a) { var u = pl(); a = a === void 0 ? null : a; var n = u.memoizedState.inst; fl !== null && a !== null && ki(a, fl.memoizedState.deps) ? u.memoizedState = ga(t, n, e, a) : (Z.flags |= l, u.memoizedState = ga(1 | t, n, e, a)); }
    function so(l, t) { hn(8390656, 8, l, t); }
    function ic(l, t) { yn(2048, 8, l, t); }
    function Ih(l) { Z.flags |= 4; var t = Z.updateQueue; if (t === null)
        t = sn(), Z.updateQueue = t, t.events = [l];
    else {
        var e = t.events;
        e === null ? t.events = [l] : e.push(l);
    } }
    function oo(l) { var t = pl().memoizedState; return Ih({ ref: t, nextImpl: l }), function () { if ((tl & 2) !== 0)
        throw Error(m(440)); return t.impl.apply(void 0, arguments); }; }
    function ho(l, t) { return yn(4, 2, l, t); }
    function yo(l, t) { return yn(4, 4, l, t); }
    function ro(l, t) { if (typeof t == "function") {
        l = l();
        var e = t(l);
        return function () { typeof e == "function" ? e() : t(null); };
    } if (t != null)
        return l = l(), t.current = l, function () { t.current = null; }; }
    function mo(l, t, e) { e = e != null ? e.concat([l]) : null, yn(4, 4, ro.bind(null, t, l), e); }
    function cc() { }
    function vo(l, t) { var e = pl(); t = t === void 0 ? null : t; var a = e.memoizedState; return t !== null && ki(t, a[1]) ? a[0] : (e.memoizedState = [l, t], l); }
    function go(l, t) { var e = pl(); t = t === void 0 ? null : t; var a = e.memoizedState; if (t !== null && ki(t, a[1]))
        return a[0]; if (a = l(), Xe) {
        It(!0);
        try {
            l();
        }
        finally {
            It(!1);
        }
    } return e.memoizedState = [a, t], a; }
    function fc(l, t, e) { return e === void 0 || (Xt & 1073741824) !== 0 && (W & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = e, l = Sd(), Z.lanes |= l, he |= l, e); }
    function So(l, t, e, a) { return tt(e, t) ? e : ra.current !== null ? (l = fc(l, e, a), tt(l, t) || (Tl = !0), l) : (Xt & 42) === 0 || (Xt & 1073741824) !== 0 && (W & 261930) === 0 ? (Tl = !0, l.memoizedState = e) : (l = Sd(), Z.lanes |= l, he |= l, t); }
    function bo(l, t, e, a, u) { var n = _.p; _.p = n !== 0 && 8 > n ? n : 8; var i = p.T, c = {}; p.T = c, dc(l, !1, t, e); try {
        var f = u(), r = p.S;
        if (r !== null && r(c, f), f !== null && typeof f == "object" && typeof f.then == "function") {
            var S = wh(f, a);
            au(l, t, S, ct(l));
        }
        else
            au(l, t, a, ct(l));
    }
    catch (E) {
        au(l, t, { then: function () { }, status: "rejected", reason: E }, ct());
    }
    finally {
        _.p = n, i !== null && c.types !== null && (i.types = c.types), p.T = i;
    } }
    function Ph() { }
    function sc(l, t, e, a) { if (l.tag !== 5)
        throw Error(m(476)); var u = zo(l).queue; bo(l, u, t, Y, e === null ? Ph : function () { return po(l), e(a); }); }
    function zo(l) { var t = l.memoizedState; if (t !== null)
        return t; t = { memoizedState: Y, baseState: Y, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Qt, lastRenderedState: Y }, next: null }; var e = {}; return t.next = { memoizedState: e, baseState: e, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Qt, lastRenderedState: e }, next: null }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t; }
    function po(l) { var t = zo(l); t.next === null && (t = l.alternate.memoizedState), au(l, t.next.queue, {}, ct()); }
    function oc() { return Ul(zu); }
    function Ao() { return pl().memoizedState; }
    function Eo() { return pl().memoizedState; }
    function ly(l) { for (var t = l.return; t !== null;) {
        switch (t.tag) {
            case 24:
            case 3:
                var e = ct();
                l = ie(e);
                var a = ce(t, l, e);
                a !== null && (kl(a, t, e), Ia(a, t, e)), t = { cache: Gi() }, l.payload = t;
                return;
        }
        t = t.return;
    } }
    function ty(l, t, e) { var a = ct(); e = { lane: a, revertLane: 0, gesture: null, action: e, hasEagerState: !1, eagerState: null, next: null }, rn(l) ? xo(t, e) : (e = Mi(l, t, e, a), e !== null && (kl(e, l, a), _o(e, t, a))); }
    function To(l, t, e) { var a = ct(); au(l, t, e, a); }
    function au(l, t, e, a) { var u = { lane: a, revertLane: 0, gesture: null, action: e, hasEagerState: !1, eagerState: null, next: null }; if (rn(l))
        xo(t, u);
    else {
        var n = l.alternate;
        if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
            try {
                var i = t.lastRenderedState, c = n(i, e);
                if (u.hasEagerState = !0, u.eagerState = c, tt(c, i))
                    return wu(l, t, u, 0), hl === null && Ju(), !1;
            }
            catch { }
        if (e = Mi(l, t, u, a), e !== null)
            return kl(e, l, a), _o(e, t, a), !0;
    } return !1; }
    function dc(l, t, e, a) { if (a = { lane: 2, revertLane: Zc(), gesture: null, action: a, hasEagerState: !1, eagerState: null, next: null }, rn(l)) {
        if (t)
            throw Error(m(479));
    }
    else
        t = Mi(l, e, a, 2), t !== null && kl(t, l, 2); }
    function rn(l) { var t = l.alternate; return l === Z || t !== null && t === Z; }
    function xo(l, t) { ma = cn = !0; var e = l.pending; e === null ? t.next = t : (t.next = e.next, e.next = t), l.pending = t; }
    function _o(l, t, e) { if ((e & 4194048) !== 0) {
        var a = t.lanes;
        a &= l.pendingLanes, e |= a, t.lanes = e, Nf(l, e);
    } }
    var uu = { readContext: Ul, use: on, useCallback: gl, useContext: gl, useEffect: gl, useImperativeHandle: gl, useLayoutEffect: gl, useInsertionEffect: gl, useMemo: gl, useReducer: gl, useRef: gl, useState: gl, useDebugValue: gl, useDeferredValue: gl, useTransition: gl, useSyncExternalStore: gl, useId: gl, useHostTransitionStatus: gl, useFormState: gl, useActionState: gl, useOptimistic: gl, useMemoCache: gl, useCacheRefresh: gl };
    uu.useEffectEvent = gl;
    var Oo = { readContext: Ul, use: on, useCallback: function (l, t) { return Gl().memoizedState = [l, t === void 0 ? null : t], l; }, useContext: Ul, useEffect: so, useImperativeHandle: function (l, t, e) { e = e != null ? e.concat([l]) : null, hn(4194308, 4, ro.bind(null, t, l), e); }, useLayoutEffect: function (l, t) { return hn(4194308, 4, l, t); }, useInsertionEffect: function (l, t) { hn(4, 2, l, t); }, useMemo: function (l, t) { var e = Gl(); t = t === void 0 ? null : t; var a = l(); if (Xe) {
            It(!0);
            try {
                l();
            }
            finally {
                It(!1);
            }
        } return e.memoizedState = [a, t], a; }, useReducer: function (l, t, e) { var a = Gl(); if (e !== void 0) {
            var u = e(t);
            if (Xe) {
                It(!0);
                try {
                    e(t);
                }
                finally {
                    It(!1);
                }
            }
        }
        else
            u = t; return a.memoizedState = a.baseState = u, l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: l, lastRenderedState: u }, a.queue = l, l = l.dispatch = ty.bind(null, Z, l), [a.memoizedState, l]; }, useRef: function (l) { var t = Gl(); return l = { current: l }, t.memoizedState = l; }, useState: function (l) { l = uc(l); var t = l.queue, e = To.bind(null, Z, t); return t.dispatch = e, [l.memoizedState, e]; }, useDebugValue: cc, useDeferredValue: function (l, t) { var e = Gl(); return fc(e, l, t); }, useTransition: function () { var l = uc(!1); return l = bo.bind(null, Z, l.queue, !0, !1), Gl().memoizedState = l, [!1, l]; }, useSyncExternalStore: function (l, t, e) { var a = Z, u = Gl(); if (I) {
            if (e === void 0)
                throw Error(m(407));
            e = e();
        }
        else {
            if (e = t(), hl === null)
                throw Error(m(349));
            (W & 127) !== 0 || ws(a, t, e);
        } u.memoizedState = e; var n = { value: e, getSnapshot: t }; return u.queue = n, so(Ws.bind(null, a, n, l), [l]), a.flags |= 2048, ga(9, { destroy: void 0 }, $s.bind(null, a, n, e, t), null), e; }, useId: function () { var l = Gl(), t = hl.identifierPrefix; if (I) {
            var e = Mt, a = Ot;
            e = (a & ~(1 << 32 - lt(a) - 1)).toString(32) + e, t = "_" + t + "R_" + e, e = fn++, 0 < e && (t += "H" + e.toString(32)), t += "_";
        }
        else
            e = $h++, t = "_" + t + "r_" + e.toString(32) + "_"; return l.memoizedState = t; }, useHostTransitionStatus: oc, useFormState: uo, useActionState: uo, useOptimistic: function (l) { var t = Gl(); t.memoizedState = t.baseState = l; var e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null }; return t.queue = e, t = dc.bind(null, Z, !0, e), e.dispatch = t, [l, t]; }, useMemoCache: tc, useCacheRefresh: function () { return Gl().memoizedState = ly.bind(null, Z); }, useEffectEvent: function (l) { var t = Gl(), e = { impl: l }; return t.memoizedState = e, function () { if ((tl & 2) !== 0)
            throw Error(m(440)); return e.impl.apply(void 0, arguments); }; } }, hc = { readContext: Ul, use: on, useCallback: vo, useContext: Ul, useEffect: ic, useImperativeHandle: mo, useInsertionEffect: ho, useLayoutEffect: yo, useMemo: go, useReducer: dn, useRef: fo, useState: function () { return dn(Qt); }, useDebugValue: cc, useDeferredValue: function (l, t) { var e = pl(); return So(e, fl.memoizedState, l, t); }, useTransition: function () { var l = dn(Qt)[0], t = pl().memoizedState; return [typeof l == "boolean" ? l : eu(l), t]; }, useSyncExternalStore: Js, useId: Ao, useHostTransitionStatus: oc, useFormState: no, useActionState: no, useOptimistic: function (l, t) { var e = pl(); return Is(e, fl, l, t); }, useMemoCache: tc, useCacheRefresh: Eo };
    hc.useEffectEvent = oo;
    var Mo = { readContext: Ul, use: on, useCallback: vo, useContext: Ul, useEffect: ic, useImperativeHandle: mo, useInsertionEffect: ho, useLayoutEffect: yo, useMemo: go, useReducer: ac, useRef: fo, useState: function () { return ac(Qt); }, useDebugValue: cc, useDeferredValue: function (l, t) { var e = pl(); return fl === null ? fc(e, l, t) : So(e, fl.memoizedState, l, t); }, useTransition: function () { var l = ac(Qt)[0], t = pl().memoizedState; return [typeof l == "boolean" ? l : eu(l), t]; }, useSyncExternalStore: Js, useId: Ao, useHostTransitionStatus: oc, useFormState: co, useActionState: co, useOptimistic: function (l, t) { var e = pl(); return fl !== null ? Is(e, fl, l, t) : (e.baseState = l, [l, e.queue.dispatch]); }, useMemoCache: tc, useCacheRefresh: Eo };
    Mo.useEffectEvent = oo;
    function yc(l, t, e, a) { t = l.memoizedState, e = e(a, t), e = e == null ? t : H({}, t, e), l.memoizedState = e, l.lanes === 0 && (l.updateQueue.baseState = e); }
    var rc = { enqueueSetState: function (l, t, e) { l = l._reactInternals; var a = ct(), u = ie(a); u.payload = t, e != null && (u.callback = e), t = ce(l, u, a), t !== null && (kl(t, l, a), Ia(t, l, a)); }, enqueueReplaceState: function (l, t, e) { l = l._reactInternals; var a = ct(), u = ie(a); u.tag = 1, u.payload = t, e != null && (u.callback = e), t = ce(l, u, a), t !== null && (kl(t, l, a), Ia(t, l, a)); }, enqueueForceUpdate: function (l, t) { l = l._reactInternals; var e = ct(), a = ie(e); a.tag = 2, t != null && (a.callback = t), t = ce(l, a, e), t !== null && (kl(t, l, e), Ia(t, l, e)); } };
    function Do(l, t, e, a, u, n, i) { return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, i) : t.prototype && t.prototype.isPureReactComponent ? !Va(e, a) || !Va(u, n) : !0; }
    function No(l, t, e, a) { l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, a), t.state !== l && rc.enqueueReplaceState(t, t.state, null); }
    function Qe(l, t) { var e = t; if ("ref" in t) {
        e = {};
        for (var a in t)
            a !== "ref" && (e[a] = t[a]);
    } if (l = l.defaultProps) {
        e === t && (e = H({}, e));
        for (var u in l)
            e[u] === void 0 && (e[u] = l[u]);
    } return e; }
    function Uo(l) { Ku(l); }
    function jo(l) { console.error(l); }
    function Ho(l) { Ku(l); }
    function mn(l, t) { try {
        var e = l.onUncaughtError;
        e(t.value, { componentStack: t.stack });
    }
    catch (a) {
        setTimeout(function () { throw a; });
    } }
    function Co(l, t, e) { try {
        var a = l.onCaughtError;
        a(e.value, { componentStack: e.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    }
    catch (u) {
        setTimeout(function () { throw u; });
    } }
    function mc(l, t, e) { return e = ie(e), e.tag = 3, e.payload = { element: null }, e.callback = function () { mn(l, t); }, e; }
    function Ro(l) { return l = ie(l), l.tag = 3, l; }
    function qo(l, t, e, a) { var u = e.type.getDerivedStateFromError; if (typeof u == "function") {
        var n = a.value;
        l.payload = function () { return u(n); }, l.callback = function () { Co(t, e, a); };
    } var i = e.stateNode; i !== null && typeof i.componentDidCatch == "function" && (l.callback = function () { Co(t, e, a), typeof u != "function" && (ye === null ? ye = new Set([this]) : ye.add(this)); var c = a.stack; this.componentDidCatch(a.value, { componentStack: c !== null ? c : "" }); }); }
    function ey(l, t, e, a, u) { if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
        if (t = e.alternate, t !== null && sa(t, e, u, !0), e = at.current, e !== null) {
            switch (e.tag) {
                case 31:
                case 13: return gt === null ? On() : e.alternate === null && Sl === 0 && (Sl = 3), e.flags &= -257, e.flags |= 65536, e.lanes = u, a === tn ? e.flags |= 16384 : (t = e.updateQueue, t === null ? e.updateQueue = new Set([a]) : t.add(a), Xc(l, a, u)), !1;
                case 22: return e.flags |= 65536, a === tn ? e.flags |= 16384 : (t = e.updateQueue, t === null ? (t = { transitions: null, markerInstances: null, retryQueue: new Set([a]) }, e.updateQueue = t) : (e = t.retryQueue, e === null ? t.retryQueue = new Set([a]) : e.add(a)), Xc(l, a, u)), !1;
            }
            throw Error(m(435, e.tag));
        }
        return Xc(l, a, u), On(), !1;
    } if (I)
        return t = at.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, a !== Ci && (l = Error(m(422), { cause: a }), wa(yt(l, e)))) : (a !== Ci && (t = Error(m(423), { cause: a }), wa(yt(t, e))), l = l.current.alternate, l.flags |= 65536, u &= -u, l.lanes |= u, a = yt(a, e), u = mc(l.stateNode, a, u), Ki(l, u), Sl !== 4 && (Sl = 2)), !1; var n = Error(m(520), { cause: a }); if (n = yt(n, e), hu === null ? hu = [n] : hu.push(n), Sl !== 4 && (Sl = 2), t === null)
        return !0; a = yt(a, e), e = t; do {
        switch (e.tag) {
            case 3: return e.flags |= 65536, l = u & -u, e.lanes |= l, l = mc(e.stateNode, a, l), Ki(e, l), !1;
            case 1: if (t = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (ye === null || !ye.has(n))))
                return e.flags |= 65536, u &= -u, e.lanes |= u, u = Ro(u), qo(u, l, e, a), Ki(e, u), !1;
        }
        e = e.return;
    } while (e !== null); return !1; }
    var vc = Error(m(461)), Tl = !1;
    function jl(l, t, e, a) { t.child = l === null ? Gs(t, null, e, a) : Ge(t, l.child, e, a); }
    function Bo(l, t, e, a, u) { e = e.render; var n = t.ref; if ("ref" in a) {
        var i = {};
        for (var c in a)
            c !== "ref" && (i[c] = a[c]);
    }
    else
        i = a; return Re(t), a = Fi(l, t, e, i, n, u), c = Ii(), l !== null && !Tl ? (Pi(l, t, u), Lt(l, t, u)) : (I && c && ji(t), t.flags |= 1, jl(l, t, a, u), t.child); }
    function Yo(l, t, e, a, u) { if (l === null) {
        var n = e.type;
        return typeof n == "function" && !Di(n) && n.defaultProps === void 0 && e.compare === null ? (t.tag = 15, t.type = n, Go(l, t, n, a, u)) : (l = Wu(e.type, null, a, t, t.mode, u), l.ref = t.ref, l.return = t, t.child = l);
    } if (n = l.child, !Tc(l, u)) {
        var i = n.memoizedProps;
        if (e = e.compare, e = e !== null ? e : Va, e(i, a) && l.ref === t.ref)
            return Lt(l, t, u);
    } return t.flags |= 1, l = qt(n, a), l.ref = t.ref, l.return = t, t.child = l; }
    function Go(l, t, e, a, u) { if (l !== null) {
        var n = l.memoizedProps;
        if (Va(n, a) && l.ref === t.ref)
            if (Tl = !1, t.pendingProps = a = n, Tc(l, u))
                (l.flags & 131072) !== 0 && (Tl = !0);
            else
                return t.lanes = l.lanes, Lt(l, t, u);
    } return gc(l, t, e, a, u); }
    function Xo(l, t, e, a) { var u = a.children, n = l !== null ? l.memoizedState : null; if (l === null && t.stateNode === null && (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), a.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
            if (n = n !== null ? n.baseLanes | e : e, l !== null) {
                for (a = t.child = l.child, u = 0; a !== null;)
                    u = u | a.lanes | a.childLanes, a = a.sibling;
                a = u & ~n;
            }
            else
                a = 0, t.child = null;
            return Qo(l, t, n, e, a);
        }
        if ((e & 536870912) !== 0)
            t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Pu(t, n !== null ? n.cachePool : null), n !== null ? Ls(t, n) : wi(), Zs(t);
        else
            return a = t.lanes = 536870912, Qo(l, t, n !== null ? n.baseLanes | e : e, e, a);
    }
    else
        n !== null ? (Pu(t, n.cachePool), Ls(t, n), se(), t.memoizedState = null) : (l !== null && Pu(t, null), wi(), se()); return jl(l, t, u, e), t.child; }
    function nu(l, t) { return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t.sibling; }
    function Qo(l, t, e, a, u) { var n = Qi(); return n = n === null ? null : { parent: Al._currentValue, pool: n }, t.memoizedState = { baseLanes: e, cachePool: n }, l !== null && Pu(t, null), wi(), Zs(t), l !== null && sa(l, t, a, !0), t.childLanes = u, null; }
    function vn(l, t) { return t = Sn({ mode: t.mode, children: t.children }, l.mode), t.ref = l.ref, l.child = t, t.return = l, t; }
    function Lo(l, t, e) { return Ge(t, l.child, null, e), l = vn(t, t.pendingProps), l.flags |= 2, ut(t), t.memoizedState = null, l; }
    function ay(l, t, e) { var a = t.pendingProps, u = (t.flags & 128) !== 0; if (t.flags &= -129, l === null) {
        if (I) {
            if (a.mode === "hidden")
                return l = vn(t, a), t.lanes = 536870912, nu(null, l);
            if (Wi(t), (l = yl) ? (l = l0(l, vt), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = { dehydrated: l, treeContext: te !== null ? { id: Ot, overflow: Mt } : null, retryLane: 536870912, hydrationErrors: null }, e = Ts(l), e.return = t, t.child = e, Nl = t, yl = null)) : l = null, l === null)
                throw ae(t);
            return t.lanes = 536870912, null;
        }
        return vn(t, a);
    } var n = l.memoizedState; if (n !== null) {
        var i = n.dehydrated;
        if (Wi(t), u)
            if (t.flags & 256)
                t.flags &= -257, t = Lo(l, t, e);
            else if (t.memoizedState !== null)
                t.child = l.child, t.flags |= 128, t = null;
            else
                throw Error(m(558));
        else if (Tl || sa(l, t, e, !1), u = (e & l.childLanes) !== 0, Tl || u) {
            if (a = hl, a !== null && (i = Uf(a, e), i !== 0 && i !== n.retryLane))
                throw n.retryLane = i, Ue(l, i), kl(a, l, i), vc;
            On(), t = Lo(l, t, e);
        }
        else
            l = n.treeContext, yl = St(i.nextSibling), Nl = t, I = !0, ee = null, vt = !1, l !== null && Os(t, l), t = vn(t, a), t.flags |= 4096;
        return t;
    } return l = qt(l.child, { mode: a.mode, children: a.children }), l.ref = t.ref, t.child = l, l.return = t, l; }
    function gn(l, t) { var e = t.ref; if (e === null)
        l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
        if (typeof e != "function" && typeof e != "object")
            throw Error(m(284));
        (l === null || l.ref !== e) && (t.flags |= 4194816);
    } }
    function gc(l, t, e, a, u) { return Re(t), e = Fi(l, t, e, a, void 0, u), a = Ii(), l !== null && !Tl ? (Pi(l, t, u), Lt(l, t, u)) : (I && a && ji(t), t.flags |= 1, jl(l, t, e, u), t.child); }
    function Zo(l, t, e, a, u, n) { return Re(t), t.updateQueue = null, e = Ks(t, a, e, u), Vs(l), a = Ii(), l !== null && !Tl ? (Pi(l, t, n), Lt(l, t, n)) : (I && a && ji(t), t.flags |= 1, jl(l, t, e, n), t.child); }
    function Vo(l, t, e, a, u) { if (Re(t), t.stateNode === null) {
        var n = na, i = e.contextType;
        typeof i == "object" && i !== null && (n = Ul(i)), n = new e(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = rc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Zi(t), i = e.contextType, n.context = typeof i == "object" && i !== null ? Ul(i) : na, n.state = t.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (yc(t, e, i, a), n.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && rc.enqueueReplaceState(n, n.state, null), lu(t, a, n, u), Pa(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    }
    else if (l === null) {
        n = t.stateNode;
        var c = t.memoizedProps, f = Qe(e, c);
        n.props = f;
        var r = n.context, S = e.contextType;
        i = na, typeof S == "object" && S !== null && (i = Ul(S));
        var E = e.getDerivedStateFromProps;
        S = typeof E == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, S || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || r !== i) && No(t, n, a, i), ne = !1;
        var v = t.memoizedState;
        n.state = v, lu(t, a, n, u), Pa(), r = t.memoizedState, c || v !== r || ne ? (typeof E == "function" && (yc(t, e, E, a), r = t.memoizedState), (f = ne || Do(t, e, f, a, v, r, i)) ? (S || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = r), n.props = a, n.state = r, n.context = i, a = f) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    }
    else {
        n = t.stateNode, Vi(l, t), i = t.memoizedProps, S = Qe(e, i), n.props = S, E = t.pendingProps, v = n.context, r = e.contextType, f = na, typeof r == "object" && r !== null && (f = Ul(r)), c = e.getDerivedStateFromProps, (r = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== E || v !== f) && No(t, n, a, f), ne = !1, v = t.memoizedState, n.state = v, lu(t, a, n, u), Pa();
        var g = t.memoizedState;
        i !== E || v !== g || ne || l !== null && l.dependencies !== null && Fu(l.dependencies) ? (typeof c == "function" && (yc(t, e, c, a), g = t.memoizedState), (S = ne || Do(t, e, S, a, v, g, f) || l !== null && l.dependencies !== null && Fu(l.dependencies)) ? (r || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, g, f), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(a, g, f)), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && v === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = g), n.props = a, n.state = g, n.context = f, a = S) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && v === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024), a = !1);
    } return n = a, gn(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = Ge(t, l.child, null, u), t.child = Ge(t, null, e, u)) : jl(l, t, e, u), t.memoizedState = n.state, l = t.child) : l = Lt(l, t, u), l; }
    function Ko(l, t, e, a) { return He(), t.flags |= 256, jl(l, t, e, a), t.child; }
    var Sc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function bc(l) { return { baseLanes: l, cachePool: Hs() }; }
    function zc(l, t, e) { return l = l !== null ? l.childLanes & ~e : 0, t && (l |= it), l; }
    function Jo(l, t, e) { var a = t.pendingProps, u = !1, n = (t.flags & 128) !== 0, i; if ((i = n) || (i = l !== null && l.memoizedState === null ? !1 : (zl.current & 2) !== 0), i && (u = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
        if (I) {
            if (u ? fe(t) : se(), (l = yl) ? (l = l0(l, vt), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = { dehydrated: l, treeContext: te !== null ? { id: Ot, overflow: Mt } : null, retryLane: 536870912, hydrationErrors: null }, e = Ts(l), e.return = t, t.child = e, Nl = t, yl = null)) : l = null, l === null)
                throw ae(t);
            return ef(l) ? t.lanes = 32 : t.lanes = 536870912, null;
        }
        var c = a.children;
        return a = a.fallback, u ? (se(), u = t.mode, c = Sn({ mode: "hidden", children: c }, u), a = je(a, u, e, null), c.return = t, a.return = t, c.sibling = a, t.child = c, a = t.child, a.memoizedState = bc(e), a.childLanes = zc(l, i, e), t.memoizedState = Sc, nu(null, a)) : (fe(t), pc(t, c));
    } var f = l.memoizedState; if (f !== null && (c = f.dehydrated, c !== null)) {
        if (n)
            t.flags & 256 ? (fe(t), t.flags &= -257, t = Ac(l, t, e)) : t.memoizedState !== null ? (se(), t.child = l.child, t.flags |= 128, t = null) : (se(), c = a.fallback, u = t.mode, a = Sn({ mode: "visible", children: a.children }, u), c = je(c, u, e, null), c.flags |= 2, a.return = t, c.return = t, a.sibling = c, t.child = a, Ge(t, l.child, null, e), a = t.child, a.memoizedState = bc(e), a.childLanes = zc(l, i, e), t.memoizedState = Sc, t = nu(null, a));
        else if (fe(t), ef(c)) {
            if (i = c.nextSibling && c.nextSibling.dataset, i)
                var r = i.dgst;
            i = r, a = Error(m(419)), a.stack = "", a.digest = i, wa({ value: a, source: null, stack: null }), t = Ac(l, t, e);
        }
        else if (Tl || sa(l, t, e, !1), i = (e & l.childLanes) !== 0, Tl || i) {
            if (i = hl, i !== null && (a = Uf(i, e), a !== 0 && a !== f.retryLane))
                throw f.retryLane = a, Ue(l, a), kl(i, l, a), vc;
            tf(c) || On(), t = Ac(l, t, e);
        }
        else
            tf(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = f.treeContext, yl = St(c.nextSibling), Nl = t, I = !0, ee = null, vt = !1, l !== null && Os(t, l), t = pc(t, a.children), t.flags |= 4096);
        return t;
    } return u ? (se(), c = a.fallback, u = t.mode, f = l.child, r = f.sibling, a = qt(f, { mode: "hidden", children: a.children }), a.subtreeFlags = f.subtreeFlags & 65011712, r !== null ? c = qt(r, c) : (c = je(c, u, e, null), c.flags |= 2), c.return = t, a.return = t, a.sibling = c, t.child = a, nu(null, a), a = t.child, c = l.child.memoizedState, c === null ? c = bc(e) : (u = c.cachePool, u !== null ? (f = Al._currentValue, u = u.parent !== f ? { parent: f, pool: f } : u) : u = Hs(), c = { baseLanes: c.baseLanes | e, cachePool: u }), a.memoizedState = c, a.childLanes = zc(l, i, e), t.memoizedState = Sc, nu(l.child, a)) : (fe(t), e = l.child, l = e.sibling, e = qt(e, { mode: "visible", children: a.children }), e.return = t, e.sibling = null, l !== null && (i = t.deletions, i === null ? (t.deletions = [l], t.flags |= 16) : i.push(l)), t.child = e, t.memoizedState = null, e); }
    function pc(l, t) { return t = Sn({ mode: "visible", children: t }, l.mode), t.return = l, l.child = t; }
    function Sn(l, t) { return l = et(22, l, null, t), l.lanes = 0, l; }
    function Ac(l, t, e) { return Ge(t, l.child, null, e), l = pc(t, t.pendingProps.children), l.flags |= 2, t.memoizedState = null, l; }
    function wo(l, t, e) { l.lanes |= t; var a = l.alternate; a !== null && (a.lanes |= t), Bi(l.return, t, e); }
    function Ec(l, t, e, a, u, n) { var i = l.memoizedState; i === null ? l.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: e, tailMode: u, treeForkCount: n } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = e, i.tailMode = u, i.treeForkCount = n); }
    function $o(l, t, e) { var a = t.pendingProps, u = a.revealOrder, n = a.tail; a = a.children; var i = zl.current, c = (i & 2) !== 0; if (c ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, O(zl, i), jl(l, t, a, e), a = I ? Ja : 0, !c && l !== null && (l.flags & 128) !== 0)
        l: for (l = t.child; l !== null;) {
            if (l.tag === 13)
                l.memoizedState !== null && wo(l, e, t);
            else if (l.tag === 19)
                wo(l, e, t);
            else if (l.child !== null) {
                l.child.return = l, l = l.child;
                continue;
            }
            if (l === t)
                break l;
            for (; l.sibling === null;) {
                if (l.return === null || l.return === t)
                    break l;
                l = l.return;
            }
            l.sibling.return = l.return, l = l.sibling;
        } switch (u) {
        case "forwards":
            for (e = t.child, u = null; e !== null;)
                l = e.alternate, l !== null && nn(l) === null && (u = e), e = e.sibling;
            e = u, e === null ? (u = t.child, t.child = null) : (u = e.sibling, e.sibling = null), Ec(t, !1, u, e, n, a);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (e = null, u = t.child, t.child = null; u !== null;) {
                if (l = u.alternate, l !== null && nn(l) === null) {
                    t.child = u;
                    break;
                }
                l = u.sibling, u.sibling = e, e = u, u = l;
            }
            Ec(t, !0, e, null, n, a);
            break;
        case "together":
            Ec(t, !1, null, null, void 0, a);
            break;
        default: t.memoizedState = null;
    } return t.child; }
    function Lt(l, t, e) { if (l !== null && (t.dependencies = l.dependencies), he |= t.lanes, (e & t.childLanes) === 0)
        if (l !== null) {
            if (sa(l, t, e, !1), (e & t.childLanes) === 0)
                return null;
        }
        else
            return null; if (l !== null && t.child !== l.child)
        throw Error(m(153)); if (t.child !== null) {
        for (l = t.child, e = qt(l, l.pendingProps), t.child = e, e.return = t; l.sibling !== null;)
            l = l.sibling, e = e.sibling = qt(l, l.pendingProps), e.return = t;
        e.sibling = null;
    } return t.child; }
    function Tc(l, t) { return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Fu(l))); }
    function uy(l, t, e) { switch (t.tag) {
        case 3:
            Yl(t, t.stateNode.containerInfo), ue(t, Al, l.memoizedState.cache), He();
            break;
        case 27:
        case 5:
            Ua(t);
            break;
        case 4:
            Yl(t, t.stateNode.containerInfo);
            break;
        case 10:
            ue(t, t.type, t.memoizedProps.value);
            break;
        case 31:
            if (t.memoizedState !== null)
                return t.flags |= 128, Wi(t), null;
            break;
        case 13:
            var a = t.memoizedState;
            if (a !== null)
                return a.dehydrated !== null ? (fe(t), t.flags |= 128, null) : (e & t.child.childLanes) !== 0 ? Jo(l, t, e) : (fe(t), l = Lt(l, t, e), l !== null ? l.sibling : null);
            fe(t);
            break;
        case 19:
            var u = (l.flags & 128) !== 0;
            if (a = (e & t.childLanes) !== 0, a || (sa(l, t, e, !1), a = (e & t.childLanes) !== 0), u) {
                if (a)
                    return $o(l, t, e);
                t.flags |= 128;
            }
            if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), O(zl, zl.current), a)
                break;
            return null;
        case 22: return t.lanes = 0, Xo(l, t, e, t.pendingProps);
        case 24: ue(t, Al, l.memoizedState.cache);
    } return Lt(l, t, e); }
    function Wo(l, t, e) { if (l !== null)
        if (l.memoizedProps !== t.pendingProps)
            Tl = !0;
        else {
            if (!Tc(l, e) && (t.flags & 128) === 0)
                return Tl = !1, uy(l, t, e);
            Tl = (l.flags & 131072) !== 0;
        }
    else
        Tl = !1, I && (t.flags & 1048576) !== 0 && _s(t, Ja, t.index); switch (t.lanes = 0, t.tag) {
        case 16:
            l: {
                var a = t.pendingProps;
                if (l = Be(t.elementType), t.type = l, typeof l == "function")
                    Di(l) ? (a = Qe(l, a), t.tag = 1, t = Vo(null, t, l, a, e)) : (t.tag = 0, t = gc(null, t, l, a, e));
                else {
                    if (l != null) {
                        var u = l.$$typeof;
                        if (u === st) {
                            t.tag = 11, t = Bo(null, t, l, a, e);
                            break l;
                        }
                        else if (u === F) {
                            t.tag = 14, t = Yo(null, t, l, a, e);
                            break l;
                        }
                    }
                    throw t = jt(l) || l, Error(m(306, t, ""));
                }
            }
            return t;
        case 0: return gc(l, t, t.type, t.pendingProps, e);
        case 1: return a = t.type, u = Qe(a, t.pendingProps), Vo(l, t, a, u, e);
        case 3:
            l: {
                if (Yl(t, t.stateNode.containerInfo), l === null)
                    throw Error(m(387));
                a = t.pendingProps;
                var n = t.memoizedState;
                u = n.element, Vi(l, t), lu(t, a, null, e);
                var i = t.memoizedState;
                if (a = i.cache, ue(t, Al, a), a !== n.cache && Yi(t, [Al], e, !0), Pa(), a = i.element, n.isDehydrated)
                    if (n = { element: a, isDehydrated: !1, cache: i.cache }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
                        t = Ko(l, t, a, e);
                        break l;
                    }
                    else if (a !== u) {
                        u = yt(Error(m(424)), t), wa(u), t = Ko(l, t, a, e);
                        break l;
                    }
                    else
                        for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, yl = St(l.firstChild), Nl = t, I = !0, ee = null, vt = !0, e = Gs(t, null, a, e), t.child = e; e;)
                            e.flags = e.flags & -3 | 4096, e = e.sibling;
                else {
                    if (He(), a === u) {
                        t = Lt(l, t, e);
                        break l;
                    }
                    jl(l, t, a, e);
                }
                t = t.child;
            }
            return t;
        case 26: return gn(l, t), l === null ? (e = i0(t.type, null, t.pendingProps, null)) ? t.memoizedState = e : I || (e = t.type, l = t.pendingProps, a = Cn(J.current).createElement(e), a[Dl] = t, a[Vl] = l, Hl(a, e, l), Ol(a), t.stateNode = a) : t.memoizedState = i0(t.type, l.memoizedProps, t.pendingProps, l.memoizedState), null;
        case 27: return Ua(t), l === null && I && (a = t.stateNode = a0(t.type, t.pendingProps, J.current), Nl = t, vt = !0, u = yl, ge(t.type) ? (af = u, yl = St(a.firstChild)) : yl = u), jl(l, t, t.pendingProps.children, e), gn(l, t), l === null && (t.flags |= 4194304), t.child;
        case 5: return l === null && I && ((u = a = yl) && (a = Cy(a, t.type, t.pendingProps, vt), a !== null ? (t.stateNode = a, Nl = t, yl = St(a.firstChild), vt = !1, u = !0) : u = !1), u || ae(t)), Ua(t), u = t.type, n = t.pendingProps, i = l !== null ? l.memoizedProps : null, a = n.children, Ic(u, n) ? a = null : i !== null && Ic(u, i) && (t.flags |= 32), t.memoizedState !== null && (u = Fi(l, t, Wh, null, null, e), zu._currentValue = u), gn(l, t), jl(l, t, a, e), t.child;
        case 6: return l === null && I && ((l = e = yl) && (e = Ry(e, t.pendingProps, vt), e !== null ? (t.stateNode = e, Nl = t, yl = null, l = !0) : l = !1), l || ae(t)), null;
        case 13: return Jo(l, t, e);
        case 4: return Yl(t, t.stateNode.containerInfo), a = t.pendingProps, l === null ? t.child = Ge(t, null, a, e) : jl(l, t, a, e), t.child;
        case 11: return Bo(l, t, t.type, t.pendingProps, e);
        case 7: return jl(l, t, t.pendingProps, e), t.child;
        case 8: return jl(l, t, t.pendingProps.children, e), t.child;
        case 12: return jl(l, t, t.pendingProps.children, e), t.child;
        case 10: return a = t.pendingProps, ue(t, t.type, a.value), jl(l, t, a.children, e), t.child;
        case 9: return u = t.type._context, a = t.pendingProps.children, Re(t), u = Ul(u), a = a(u), t.flags |= 1, jl(l, t, a, e), t.child;
        case 14: return Yo(l, t, t.type, t.pendingProps, e);
        case 15: return Go(l, t, t.type, t.pendingProps, e);
        case 19: return $o(l, t, e);
        case 31: return ay(l, t, e);
        case 22: return Xo(l, t, e, t.pendingProps);
        case 24: return Re(t), a = Ul(Al), l === null ? (u = Qi(), u === null && (u = hl, n = Gi(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= e), u = n), t.memoizedState = { parent: a, cache: u }, Zi(t), ue(t, Al, u)) : ((l.lanes & e) !== 0 && (Vi(l, t), lu(t, null, null, e), Pa()), u = l.memoizedState, n = t.memoizedState, u.parent !== a ? (u = { parent: a, cache: a }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), ue(t, Al, a)) : (a = n.cache, ue(t, Al, a), a !== u.cache && Yi(t, [Al], e, !0))), jl(l, t, t.pendingProps.children, e), t.child;
        case 29: throw t.pendingProps;
    } throw Error(m(156, t.tag)); }
    function Zt(l) { l.flags |= 4; }
    function xc(l, t, e, a, u) { if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
        if (l.flags |= 16777216, (u & 335544128) === u)
            if (l.stateNode.complete)
                l.flags |= 8192;
            else if (Ad())
                l.flags |= 8192;
            else
                throw Ye = tn, Li;
    }
    else
        l.flags &= -16777217; }
    function ko(l, t) { if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
        l.flags &= -16777217;
    else if (l.flags |= 16777216, !d0(t))
        if (Ad())
            l.flags |= 8192;
        else
            throw Ye = tn, Li; }
    function bn(l, t) { t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? Mf() : 536870912, l.lanes |= t, pa |= t); }
    function iu(l, t) { if (!I)
        switch (l.tailMode) {
            case "hidden":
                t = l.tail;
                for (var e = null; t !== null;)
                    t.alternate !== null && (e = t), t = t.sibling;
                e === null ? l.tail = null : e.sibling = null;
                break;
            case "collapsed":
                e = l.tail;
                for (var a = null; e !== null;)
                    e.alternate !== null && (a = e), e = e.sibling;
                a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
        } }
    function rl(l) { var t = l.alternate !== null && l.alternate.child === l.child, e = 0, a = 0; if (t)
        for (var u = l.child; u !== null;)
            e |= u.lanes | u.childLanes, a |= u.subtreeFlags & 65011712, a |= u.flags & 65011712, u.return = l, u = u.sibling;
    else
        for (u = l.child; u !== null;)
            e |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = l, u = u.sibling; return l.subtreeFlags |= a, l.childLanes = e, t; }
    function ny(l, t, e) { var a = t.pendingProps; switch (Hi(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14: return rl(t), null;
        case 1: return rl(t), null;
        case 3: return e = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Gt(Al), bl(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (l === null || l.child === null) && (fa(t) ? Zt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ri())), rl(t), null;
        case 26:
            var u = t.type, n = t.memoizedState;
            return l === null ? (Zt(t), n !== null ? (rl(t), ko(t, n)) : (rl(t), xc(t, u, null, a, e))) : n ? n !== l.memoizedState ? (Zt(t), rl(t), ko(t, n)) : (rl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && Zt(t), rl(t), xc(t, u, l, a, e)), null;
        case 27:
            if (Du(t), e = J.current, u = t.type, l !== null && t.stateNode != null)
                l.memoizedProps !== a && Zt(t);
            else {
                if (!a) {
                    if (t.stateNode === null)
                        throw Error(m(166));
                    return rl(t), null;
                }
                l = D.current, fa(t) ? Ms(t) : (l = a0(u, a, e), t.stateNode = l, Zt(t));
            }
            return rl(t), null;
        case 5:
            if (Du(t), u = t.type, l !== null && t.stateNode != null)
                l.memoizedProps !== a && Zt(t);
            else {
                if (!a) {
                    if (t.stateNode === null)
                        throw Error(m(166));
                    return rl(t), null;
                }
                if (n = D.current, fa(t))
                    Ms(t);
                else {
                    var i = Cn(J.current);
                    switch (n) {
                        case 1:
                            n = i.createElementNS("http://www.w3.org/2000/svg", u);
                            break;
                        case 2:
                            n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                            break;
                        default: switch (u) {
                            case "svg":
                                n = i.createElementNS("http://www.w3.org/2000/svg", u);
                                break;
                            case "math":
                                n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                                break;
                            case "script":
                                n = i.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild);
                                break;
                            case "select":
                                n = typeof a.is == "string" ? i.createElement("select", { is: a.is }) : i.createElement("select"), a.multiple ? n.multiple = !0 : a.size && (n.size = a.size);
                                break;
                            default: n = typeof a.is == "string" ? i.createElement(u, { is: a.is }) : i.createElement(u);
                        }
                    }
                    n[Dl] = t, n[Vl] = a;
                    l: for (i = t.child; i !== null;) {
                        if (i.tag === 5 || i.tag === 6)
                            n.appendChild(i.stateNode);
                        else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                            i.child.return = i, i = i.child;
                            continue;
                        }
                        if (i === t)
                            break l;
                        for (; i.sibling === null;) {
                            if (i.return === null || i.return === t)
                                break l;
                            i = i.return;
                        }
                        i.sibling.return = i.return, i = i.sibling;
                    }
                    t.stateNode = n;
                    l: switch (Hl(n, u, a), u) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            a = !!a.autoFocus;
                            break l;
                        case "img":
                            a = !0;
                            break l;
                        default: a = !1;
                    }
                    a && Zt(t);
                }
            }
            return rl(t), xc(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, e), null;
        case 6:
            if (l && t.stateNode != null)
                l.memoizedProps !== a && Zt(t);
            else {
                if (typeof a != "string" && t.stateNode === null)
                    throw Error(m(166));
                if (l = J.current, fa(t)) {
                    if (l = t.stateNode, e = t.memoizedProps, a = null, u = Nl, u !== null)
                        switch (u.tag) {
                            case 27:
                            case 5: a = u.memoizedProps;
                        }
                    l[Dl] = t, l = !!(l.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || Jd(l.nodeValue, e)), l || ae(t, !0);
                }
                else
                    l = Cn(l).createTextNode(a), l[Dl] = t, t.stateNode = l;
            }
            return rl(t), null;
        case 31:
            if (e = t.memoizedState, l === null || l.memoizedState !== null) {
                if (a = fa(t), e !== null) {
                    if (l === null) {
                        if (!a)
                            throw Error(m(318));
                        if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l)
                            throw Error(m(557));
                        l[Dl] = t;
                    }
                    else
                        He(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                    rl(t), l = !1;
                }
                else
                    e = Ri(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), l = !0;
                if (!l)
                    return t.flags & 256 ? (ut(t), t) : (ut(t), null);
                if ((t.flags & 128) !== 0)
                    throw Error(m(558));
            }
            return rl(t), null;
        case 13:
            if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
                if (u = fa(t), a !== null && a.dehydrated !== null) {
                    if (l === null) {
                        if (!u)
                            throw Error(m(318));
                        if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u)
                            throw Error(m(317));
                        u[Dl] = t;
                    }
                    else
                        He(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                    rl(t), u = !1;
                }
                else
                    u = Ri(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), u = !0;
                if (!u)
                    return t.flags & 256 ? (ut(t), t) : (ut(t), null);
            }
            return ut(t), (t.flags & 128) !== 0 ? (t.lanes = e, t) : (e = a !== null, l = l !== null && l.memoizedState !== null, e && (a = t.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== u && (a.flags |= 2048)), e !== l && e && (t.child.flags |= 8192), bn(t, t.updateQueue), rl(t), null);
        case 4: return bl(), l === null && wc(t.stateNode.containerInfo), rl(t), null;
        case 10: return Gt(t.type), rl(t), null;
        case 19:
            if (T(zl), a = t.memoizedState, a === null)
                return rl(t), null;
            if (u = (t.flags & 128) !== 0, n = a.rendering, n === null)
                if (u)
                    iu(a, !1);
                else {
                    if (Sl !== 0 || l !== null && (l.flags & 128) !== 0)
                        for (l = t.child; l !== null;) {
                            if (n = nn(l), n !== null) {
                                for (t.flags |= 128, iu(a, !1), l = n.updateQueue, t.updateQueue = l, bn(t, l), t.subtreeFlags = 0, l = e, e = t.child; e !== null;)
                                    Es(e, l), e = e.sibling;
                                return O(zl, zl.current & 1 | 2), I && Bt(t, a.treeForkCount), t.child;
                            }
                            l = l.sibling;
                        }
                    a.tail !== null && Il() > Tn && (t.flags |= 128, u = !0, iu(a, !1), t.lanes = 4194304);
                }
            else {
                if (!u)
                    if (l = nn(n), l !== null) {
                        if (t.flags |= 128, u = !0, l = l.updateQueue, t.updateQueue = l, bn(t, l), iu(a, !0), a.tail === null && a.tailMode === "hidden" && !n.alternate && !I)
                            return rl(t), null;
                    }
                    else
                        2 * Il() - a.renderingStartTime > Tn && e !== 536870912 && (t.flags |= 128, u = !0, iu(a, !1), t.lanes = 4194304);
                a.isBackwards ? (n.sibling = t.child, t.child = n) : (l = a.last, l !== null ? l.sibling = n : t.child = n, a.last = n);
            }
            return a.tail !== null ? (l = a.tail, a.rendering = l, a.tail = l.sibling, a.renderingStartTime = Il(), l.sibling = null, e = zl.current, O(zl, u ? e & 1 | 2 : e & 1), I && Bt(t, a.treeForkCount), l) : (rl(t), null);
        case 22:
        case 23: return ut(t), $i(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (rl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : rl(t), e = t.updateQueue, e !== null && bn(t, e.retryQueue), e = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== e && (t.flags |= 2048), l !== null && T(qe), null;
        case 24: return e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), Gt(Al), rl(t), null;
        case 25: return null;
        case 30: return null;
    } throw Error(m(156, t.tag)); }
    function iy(l, t) { switch (Hi(t), t.tag) {
        case 1: return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
        case 3: return Gt(Al), bl(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5: return Du(t), null;
        case 31:
            if (t.memoizedState !== null) {
                if (ut(t), t.alternate === null)
                    throw Error(m(340));
                He();
            }
            return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
        case 13:
            if (ut(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(m(340));
                He();
            }
            return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
        case 19: return T(zl), null;
        case 4: return bl(), null;
        case 10: return Gt(t.type), null;
        case 22:
        case 23: return ut(t), $i(), l !== null && T(qe), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
        case 24: return Gt(Al), null;
        case 25: return null;
        default: return null;
    } }
    function Fo(l, t) { switch (Hi(t), t.tag) {
        case 3:
            Gt(Al), bl();
            break;
        case 26:
        case 27:
        case 5:
            Du(t);
            break;
        case 4:
            bl();
            break;
        case 31:
            t.memoizedState !== null && ut(t);
            break;
        case 13:
            ut(t);
            break;
        case 19:
            T(zl);
            break;
        case 10:
            Gt(t.type);
            break;
        case 22:
        case 23:
            ut(t), $i(), l !== null && T(qe);
            break;
        case 24: Gt(Al);
    } }
    function cu(l, t) { try {
        var e = t.updateQueue, a = e !== null ? e.lastEffect : null;
        if (a !== null) {
            var u = a.next;
            e = u;
            do {
                if ((e.tag & l) === l) {
                    a = void 0;
                    var n = e.create, i = e.inst;
                    a = n(), i.destroy = a;
                }
                e = e.next;
            } while (e !== u);
        }
    }
    catch (c) {
        nl(t, t.return, c);
    } }
    function oe(l, t, e) { try {
        var a = t.updateQueue, u = a !== null ? a.lastEffect : null;
        if (u !== null) {
            var n = u.next;
            a = n;
            do {
                if ((a.tag & l) === l) {
                    var i = a.inst, c = i.destroy;
                    if (c !== void 0) {
                        i.destroy = void 0, u = t;
                        var f = e, r = c;
                        try {
                            r();
                        }
                        catch (S) {
                            nl(u, f, S);
                        }
                    }
                }
                a = a.next;
            } while (a !== n);
        }
    }
    catch (S) {
        nl(t, t.return, S);
    } }
    function Io(l) { var t = l.updateQueue; if (t !== null) {
        var e = l.stateNode;
        try {
            Qs(t, e);
        }
        catch (a) {
            nl(l, l.return, a);
        }
    } }
    function Po(l, t, e) { e.props = Qe(l.type, l.memoizedProps), e.state = l.memoizedState; try {
        e.componentWillUnmount();
    }
    catch (a) {
        nl(l, t, a);
    } }
    function fu(l, t) { try {
        var e = l.ref;
        if (e !== null) {
            switch (l.tag) {
                case 26:
                case 27:
                case 5:
                    var a = l.stateNode;
                    break;
                case 30:
                    a = l.stateNode;
                    break;
                default: a = l.stateNode;
            }
            typeof e == "function" ? l.refCleanup = e(a) : e.current = a;
        }
    }
    catch (u) {
        nl(l, t, u);
    } }
    function Dt(l, t) { var e = l.ref, a = l.refCleanup; if (e !== null)
        if (typeof a == "function")
            try {
                a();
            }
            catch (u) {
                nl(l, t, u);
            }
            finally {
                l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
            }
        else if (typeof e == "function")
            try {
                e(null);
            }
            catch (u) {
                nl(l, t, u);
            }
        else
            e.current = null; }
    function ld(l) { var t = l.type, e = l.memoizedProps, a = l.stateNode; try {
        l: switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                e.autoFocus && a.focus();
                break l;
            case "img": e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet);
        }
    }
    catch (u) {
        nl(l, l.return, u);
    } }
    function _c(l, t, e) { try {
        var a = l.stateNode;
        My(a, l.type, e, t), a[Vl] = t;
    }
    catch (u) {
        nl(l, l.return, u);
    } }
    function td(l) { return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && ge(l.type) || l.tag === 4; }
    function Oc(l) { l: for (;;) {
        for (; l.sibling === null;) {
            if (l.return === null || td(l.return))
                return null;
            l = l.return;
        }
        for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18;) {
            if (l.tag === 27 && ge(l.type) || l.flags & 2 || l.child === null || l.tag === 4)
                continue l;
            l.child.return = l, l = l.child;
        }
        if (!(l.flags & 2))
            return l.stateNode;
    } }
    function Mc(l, t, e) { var a = l.tag; if (a === 5 || a === 6)
        l = l.stateNode, t ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(l, t) : (t = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, t.appendChild(l), e = e._reactRootContainer, e != null || t.onclick !== null || (t.onclick = Ct));
    else if (a !== 4 && (a === 27 && ge(l.type) && (e = l.stateNode, t = null), l = l.child, l !== null))
        for (Mc(l, t, e), l = l.sibling; l !== null;)
            Mc(l, t, e), l = l.sibling; }
    function zn(l, t, e) { var a = l.tag; if (a === 5 || a === 6)
        l = l.stateNode, t ? e.insertBefore(l, t) : e.appendChild(l);
    else if (a !== 4 && (a === 27 && ge(l.type) && (e = l.stateNode), l = l.child, l !== null))
        for (zn(l, t, e), l = l.sibling; l !== null;)
            zn(l, t, e), l = l.sibling; }
    function ed(l) { var t = l.stateNode, e = l.memoizedProps; try {
        for (var a = l.type, u = t.attributes; u.length;)
            t.removeAttributeNode(u[0]);
        Hl(t, a, e), t[Dl] = l, t[Vl] = e;
    }
    catch (n) {
        nl(l, l.return, n);
    } }
    var Vt = !1, xl = !1, Dc = !1, ad = typeof WeakSet == "function" ? WeakSet : Set, Ml = null;
    function cy(l, t) { if (l = l.containerInfo, kc = Qn, l = rs(l), Ai(l)) {
        if ("selectionStart" in l)
            var e = { start: l.selectionStart, end: l.selectionEnd };
        else
            l: {
                e = (e = l.ownerDocument) && e.defaultView || window;
                var a = e.getSelection && e.getSelection();
                if (a && a.rangeCount !== 0) {
                    e = a.anchorNode;
                    var u = a.anchorOffset, n = a.focusNode;
                    a = a.focusOffset;
                    try {
                        e.nodeType, n.nodeType;
                    }
                    catch {
                        e = null;
                        break l;
                    }
                    var i = 0, c = -1, f = -1, r = 0, S = 0, E = l, v = null;
                    t: for (;;) {
                        for (var g; E !== e || u !== 0 && E.nodeType !== 3 || (c = i + u), E !== n || a !== 0 && E.nodeType !== 3 || (f = i + a), E.nodeType === 3 && (i += E.nodeValue.length), (g = E.firstChild) !== null;)
                            v = E, E = g;
                        for (;;) {
                            if (E === l)
                                break t;
                            if (v === e && ++r === u && (c = i), v === n && ++S === a && (f = i), (g = E.nextSibling) !== null)
                                break;
                            E = v, v = E.parentNode;
                        }
                        E = g;
                    }
                    e = c === -1 || f === -1 ? null : { start: c, end: f };
                }
                else
                    e = null;
            }
        e = e || { start: 0, end: 0 };
    }
    else
        e = null; for (Fc = { focusedElem: l, selectionRange: e }, Qn = !1, Ml = t; Ml !== null;)
        if (t = Ml, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null)
            l.return = t, Ml = l;
        else
            for (; Ml !== null;) {
                switch (t = Ml, n = t.alternate, l = t.flags, t.tag) {
                    case 0:
                        if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null))
                            for (e = 0; e < l.length; e++)
                                u = l[e], u.ref.impl = u.nextImpl;
                        break;
                    case 11:
                    case 15: break;
                    case 1:
                        if ((l & 1024) !== 0 && n !== null) {
                            l = void 0, e = t, u = n.memoizedProps, n = n.memoizedState, a = e.stateNode;
                            try {
                                var M = Qe(e.type, u);
                                l = a.getSnapshotBeforeUpdate(M, n), a.__reactInternalSnapshotBeforeUpdate = l;
                            }
                            catch (q) {
                                nl(e, e.return, q);
                            }
                        }
                        break;
                    case 3:
                        if ((l & 1024) !== 0) {
                            if (l = t.stateNode.containerInfo, e = l.nodeType, e === 9)
                                lf(l);
                            else if (e === 1)
                                switch (l.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        lf(l);
                                        break;
                                    default: l.textContent = "";
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17: break;
                    default: if ((l & 1024) !== 0)
                        throw Error(m(163));
                }
                if (l = t.sibling, l !== null) {
                    l.return = t.return, Ml = l;
                    break;
                }
                Ml = t.return;
            } }
    function ud(l, t, e) { var a = e.flags; switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Jt(l, e), a & 4 && cu(5, e);
            break;
        case 1:
            if (Jt(l, e), a & 4)
                if (l = e.stateNode, t === null)
                    try {
                        l.componentDidMount();
                    }
                    catch (i) {
                        nl(e, e.return, i);
                    }
                else {
                    var u = Qe(e.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate);
                    }
                    catch (i) {
                        nl(e, e.return, i);
                    }
                }
            a & 64 && Io(e), a & 512 && fu(e, e.return);
            break;
        case 3:
            if (Jt(l, e), a & 64 && (l = e.updateQueue, l !== null)) {
                if (t = null, e.child !== null)
                    switch (e.child.tag) {
                        case 27:
                        case 5:
                            t = e.child.stateNode;
                            break;
                        case 1: t = e.child.stateNode;
                    }
                try {
                    Qs(l, t);
                }
                catch (i) {
                    nl(e, e.return, i);
                }
            }
            break;
        case 27: t === null && a & 4 && ed(e);
        case 26:
        case 5:
            Jt(l, e), t === null && a & 4 && ld(e), a & 512 && fu(e, e.return);
            break;
        case 12:
            Jt(l, e);
            break;
        case 31:
            Jt(l, e), a & 4 && cd(l, e);
            break;
        case 13:
            Jt(l, e), a & 4 && fd(l, e), a & 64 && (l = e.memoizedState, l !== null && (l = l.dehydrated, l !== null && (e = vy.bind(null, e), qy(l, e))));
            break;
        case 22:
            if (a = e.memoizedState !== null || Vt, !a) {
                t = t !== null && t.memoizedState !== null || xl, u = Vt;
                var n = xl;
                Vt = a, (xl = t) && !n ? wt(l, e, (e.subtreeFlags & 8772) !== 0) : Jt(l, e), Vt = u, xl = n;
            }
            break;
        case 30: break;
        default: Jt(l, e);
    } }
    function nd(l) { var t = l.alternate; t !== null && (l.alternate = null, nd(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && ni(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null; }
    var ml = null, Jl = !1;
    function Kt(l, t, e) { for (e = e.child; e !== null;)
        id(l, t, e), e = e.sibling; }
    function id(l, t, e) { if (Pl && typeof Pl.onCommitFiberUnmount == "function")
        try {
            Pl.onCommitFiberUnmount(ja, e);
        }
        catch { } switch (e.tag) {
        case 26:
            xl || Dt(e, t), Kt(l, t, e), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
            break;
        case 27:
            xl || Dt(e, t);
            var a = ml, u = Jl;
            ge(e.type) && (ml = e.stateNode, Jl = !1), Kt(l, t, e), gu(e.stateNode), ml = a, Jl = u;
            break;
        case 5: xl || Dt(e, t);
        case 6:
            if (a = ml, u = Jl, ml = null, Kt(l, t, e), ml = a, Jl = u, ml !== null)
                if (Jl)
                    try {
                        (ml.nodeType === 9 ? ml.body : ml.nodeName === "HTML" ? ml.ownerDocument.body : ml).removeChild(e.stateNode);
                    }
                    catch (n) {
                        nl(e, t, n);
                    }
                else
                    try {
                        ml.removeChild(e.stateNode);
                    }
                    catch (n) {
                        nl(e, t, n);
                    }
            break;
        case 18:
            ml !== null && (Jl ? (l = ml, Id(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.stateNode), Da(l)) : Id(ml, e.stateNode));
            break;
        case 4:
            a = ml, u = Jl, ml = e.stateNode.containerInfo, Jl = !0, Kt(l, t, e), ml = a, Jl = u;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            oe(2, e, t), xl || oe(4, e, t), Kt(l, t, e);
            break;
        case 1:
            xl || (Dt(e, t), a = e.stateNode, typeof a.componentWillUnmount == "function" && Po(e, t, a)), Kt(l, t, e);
            break;
        case 21:
            Kt(l, t, e);
            break;
        case 22:
            xl = (a = xl) || e.memoizedState !== null, Kt(l, t, e), xl = a;
            break;
        default: Kt(l, t, e);
    } }
    function cd(l, t) { if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
        l = l.dehydrated;
        try {
            Da(l);
        }
        catch (e) {
            nl(t, t.return, e);
        }
    } }
    function fd(l, t) { if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
        try {
            Da(l);
        }
        catch (e) {
            nl(t, t.return, e);
        } }
    function fy(l) { switch (l.tag) {
        case 31:
        case 13:
        case 19:
            var t = l.stateNode;
            return t === null && (t = l.stateNode = new ad), t;
        case 22: return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new ad), t;
        default: throw Error(m(435, l.tag));
    } }
    function pn(l, t) { var e = fy(l); t.forEach(function (a) { if (!e.has(a)) {
        e.add(a);
        var u = gy.bind(null, l, a);
        a.then(u, u);
    } }); }
    function wl(l, t) { var e = t.deletions; if (e !== null)
        for (var a = 0; a < e.length; a++) {
            var u = e[a], n = l, i = t, c = i;
            l: for (; c !== null;) {
                switch (c.tag) {
                    case 27:
                        if (ge(c.type)) {
                            ml = c.stateNode, Jl = !1;
                            break l;
                        }
                        break;
                    case 5:
                        ml = c.stateNode, Jl = !1;
                        break l;
                    case 3:
                    case 4:
                        ml = c.stateNode.containerInfo, Jl = !0;
                        break l;
                }
                c = c.return;
            }
            if (ml === null)
                throw Error(m(160));
            id(n, i, u), ml = null, Jl = !1, n = u.alternate, n !== null && (n.return = null), u.return = null;
        } if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null;)
            sd(t, l), t = t.sibling; }
    var At = null;
    function sd(l, t) { var e = l.alternate, a = l.flags; switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            wl(t, l), $l(l), a & 4 && (oe(3, l, l.return), cu(3, l), oe(5, l, l.return));
            break;
        case 1:
            wl(t, l), $l(l), a & 512 && (xl || e === null || Dt(e, e.return)), a & 64 && Vt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (e = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
            break;
        case 26:
            var u = At;
            if (wl(t, l), $l(l), a & 512 && (xl || e === null || Dt(e, e.return)), a & 4) {
                var n = e !== null ? e.memoizedState : null;
                if (a = l.memoizedState, e === null)
                    if (a === null)
                        if (l.stateNode === null) {
                            l: {
                                a = l.type, e = l.memoizedProps, u = u.ownerDocument || u;
                                t: switch (a) {
                                    case "title":
                                        n = u.getElementsByTagName("title")[0], (!n || n[Ra] || n[Dl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(a), u.head.insertBefore(n, u.querySelector("head > title"))), Hl(n, a, e), n[Dl] = l, Ol(n), a = n;
                                        break l;
                                    case "link":
                                        var i = s0("link", "href", u).get(a + (e.href || ""));
                                        if (i) {
                                            for (var c = 0; c < i.length; c++)
                                                if (n = i[c], n.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && n.getAttribute("rel") === (e.rel == null ? null : e.rel) && n.getAttribute("title") === (e.title == null ? null : e.title) && n.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                                                    i.splice(c, 1);
                                                    break t;
                                                }
                                        }
                                        n = u.createElement(a), Hl(n, a, e), u.head.appendChild(n);
                                        break;
                                    case "meta":
                                        if (i = s0("meta", "content", u).get(a + (e.content || ""))) {
                                            for (c = 0; c < i.length; c++)
                                                if (n = i[c], n.getAttribute("content") === (e.content == null ? null : "" + e.content) && n.getAttribute("name") === (e.name == null ? null : e.name) && n.getAttribute("property") === (e.property == null ? null : e.property) && n.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && n.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                                                    i.splice(c, 1);
                                                    break t;
                                                }
                                        }
                                        n = u.createElement(a), Hl(n, a, e), u.head.appendChild(n);
                                        break;
                                    default: throw Error(m(468, a));
                                }
                                n[Dl] = l, Ol(n), a = n;
                            }
                            l.stateNode = a;
                        }
                        else
                            o0(u, l.type, l.stateNode);
                    else
                        l.stateNode = f0(u, a, l.memoizedProps);
                else
                    n !== a ? (n === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : n.count--, a === null ? o0(u, l.type, l.stateNode) : f0(u, a, l.memoizedProps)) : a === null && l.stateNode !== null && _c(l, l.memoizedProps, e.memoizedProps);
            }
            break;
        case 27:
            wl(t, l), $l(l), a & 512 && (xl || e === null || Dt(e, e.return)), e !== null && a & 4 && _c(l, l.memoizedProps, e.memoizedProps);
            break;
        case 5:
            if (wl(t, l), $l(l), a & 512 && (xl || e === null || Dt(e, e.return)), l.flags & 32) {
                u = l.stateNode;
                try {
                    Ie(u, "");
                }
                catch (M) {
                    nl(l, l.return, M);
                }
            }
            a & 4 && l.stateNode != null && (u = l.memoizedProps, _c(l, u, e !== null ? e.memoizedProps : u)), a & 1024 && (Dc = !0);
            break;
        case 6:
            if (wl(t, l), $l(l), a & 4) {
                if (l.stateNode === null)
                    throw Error(m(162));
                a = l.memoizedProps, e = l.stateNode;
                try {
                    e.nodeValue = a;
                }
                catch (M) {
                    nl(l, l.return, M);
                }
            }
            break;
        case 3:
            if (Bn = null, u = At, At = Rn(t.containerInfo), wl(t, l), At = u, $l(l), a & 4 && e !== null && e.memoizedState.isDehydrated)
                try {
                    Da(t.containerInfo);
                }
                catch (M) {
                    nl(l, l.return, M);
                }
            Dc && (Dc = !1, od(l));
            break;
        case 4:
            a = At, At = Rn(l.stateNode.containerInfo), wl(t, l), $l(l), At = a;
            break;
        case 12:
            wl(t, l), $l(l);
            break;
        case 31:
            wl(t, l), $l(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, pn(l, a)));
            break;
        case 13:
            wl(t, l), $l(l), l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && (En = Il()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, pn(l, a)));
            break;
        case 22:
            u = l.memoizedState !== null;
            var f = e !== null && e.memoizedState !== null, r = Vt, S = xl;
            if (Vt = r || u, xl = S || f, wl(t, l), xl = S, Vt = r, $l(l), a & 8192)
                l: for (t = l.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (e === null || f || Vt || xl || Le(l)), e = null, t = l;;) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (e === null) {
                            f = e = t;
                            try {
                                if (n = f.stateNode, u)
                                    i = n.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                                else {
                                    c = f.stateNode;
                                    var E = f.memoizedProps.style, v = E != null && E.hasOwnProperty("display") ? E.display : null;
                                    c.style.display = v == null || typeof v == "boolean" ? "" : ("" + v).trim();
                                }
                            }
                            catch (M) {
                                nl(f, f.return, M);
                            }
                        }
                    }
                    else if (t.tag === 6) {
                        if (e === null) {
                            f = t;
                            try {
                                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                            }
                            catch (M) {
                                nl(f, f.return, M);
                            }
                        }
                    }
                    else if (t.tag === 18) {
                        if (e === null) {
                            f = t;
                            try {
                                var g = f.stateNode;
                                u ? Pd(g, !0) : Pd(f.stateNode, !1);
                            }
                            catch (M) {
                                nl(f, f.return, M);
                            }
                        }
                    }
                    else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
                        t.child.return = t, t = t.child;
                        continue;
                    }
                    if (t === l)
                        break l;
                    for (; t.sibling === null;) {
                        if (t.return === null || t.return === l)
                            break l;
                        e === t && (e = null), t = t.return;
                    }
                    e === t && (e = null), t.sibling.return = t.return, t = t.sibling;
                }
            a & 4 && (a = l.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, pn(l, e))));
            break;
        case 19:
            wl(t, l), $l(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, pn(l, a)));
            break;
        case 30: break;
        case 21: break;
        default: wl(t, l), $l(l);
    } }
    function $l(l) { var t = l.flags; if (t & 2) {
        try {
            for (var e, a = l.return; a !== null;) {
                if (td(a)) {
                    e = a;
                    break;
                }
                a = a.return;
            }
            if (e == null)
                throw Error(m(160));
            switch (e.tag) {
                case 27:
                    var u = e.stateNode, n = Oc(l);
                    zn(l, n, u);
                    break;
                case 5:
                    var i = e.stateNode;
                    e.flags & 32 && (Ie(i, ""), e.flags &= -33);
                    var c = Oc(l);
                    zn(l, c, i);
                    break;
                case 3:
                case 4:
                    var f = e.stateNode.containerInfo, r = Oc(l);
                    Mc(l, r, f);
                    break;
                default: throw Error(m(161));
            }
        }
        catch (S) {
            nl(l, l.return, S);
        }
        l.flags &= -3;
    } t & 4096 && (l.flags &= -4097); }
    function od(l) { if (l.subtreeFlags & 1024)
        for (l = l.child; l !== null;) {
            var t = l;
            od(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
        } }
    function Jt(l, t) { if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null;)
            ud(l, t.alternate, t), t = t.sibling; }
    function Le(l) { for (l = l.child; l !== null;) {
        var t = l;
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                oe(4, t, t.return), Le(t);
                break;
            case 1:
                Dt(t, t.return);
                var e = t.stateNode;
                typeof e.componentWillUnmount == "function" && Po(t, t.return, e), Le(t);
                break;
            case 27: gu(t.stateNode);
            case 26:
            case 5:
                Dt(t, t.return), Le(t);
                break;
            case 22:
                t.memoizedState === null && Le(t);
                break;
            case 30:
                Le(t);
                break;
            default: Le(t);
        }
        l = l.sibling;
    } }
    function wt(l, t, e) { for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
        var a = t.alternate, u = l, n = t, i = n.flags;
        switch (n.tag) {
            case 0:
            case 11:
            case 15:
                wt(u, n, e), cu(4, n);
                break;
            case 1:
                if (wt(u, n, e), a = n, u = a.stateNode, typeof u.componentDidMount == "function")
                    try {
                        u.componentDidMount();
                    }
                    catch (r) {
                        nl(a, a.return, r);
                    }
                if (a = n, u = a.updateQueue, u !== null) {
                    var c = a.stateNode;
                    try {
                        var f = u.shared.hiddenCallbacks;
                        if (f !== null)
                            for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++)
                                Xs(f[u], c);
                    }
                    catch (r) {
                        nl(a, a.return, r);
                    }
                }
                e && i & 64 && Io(n), fu(n, n.return);
                break;
            case 27: ed(n);
            case 26:
            case 5:
                wt(u, n, e), e && a === null && i & 4 && ld(n), fu(n, n.return);
                break;
            case 12:
                wt(u, n, e);
                break;
            case 31:
                wt(u, n, e), e && i & 4 && cd(u, n);
                break;
            case 13:
                wt(u, n, e), e && i & 4 && fd(u, n);
                break;
            case 22:
                n.memoizedState === null && wt(u, n, e), fu(n, n.return);
                break;
            case 30: break;
            default: wt(u, n, e);
        }
        t = t.sibling;
    } }
    function Nc(l, t) { var e = null; l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== e && (l != null && l.refCount++, e != null && $a(e)); }
    function Uc(l, t) { l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && $a(l)); }
    function Et(l, t, e, a) { if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null;)
            dd(l, t, e, a), t = t.sibling; }
    function dd(l, t, e, a) { var u = t.flags; switch (t.tag) {
        case 0:
        case 11:
        case 15:
            Et(l, t, e, a), u & 2048 && cu(9, t);
            break;
        case 1:
            Et(l, t, e, a);
            break;
        case 3:
            Et(l, t, e, a), u & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && $a(l)));
            break;
        case 12:
            if (u & 2048) {
                Et(l, t, e, a), l = t.stateNode;
                try {
                    var n = t.memoizedProps, i = n.id, c = n.onPostCommit;
                    typeof c == "function" && c(i, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0);
                }
                catch (f) {
                    nl(t, t.return, f);
                }
            }
            else
                Et(l, t, e, a);
            break;
        case 31:
            Et(l, t, e, a);
            break;
        case 13:
            Et(l, t, e, a);
            break;
        case 23: break;
        case 22:
            n = t.stateNode, i = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? Et(l, t, e, a) : su(l, t) : n._visibility & 2 ? Et(l, t, e, a) : (n._visibility |= 2, Sa(l, t, e, a, (t.subtreeFlags & 10256) !== 0 || !1)), u & 2048 && Nc(i, t);
            break;
        case 24:
            Et(l, t, e, a), u & 2048 && Uc(t.alternate, t);
            break;
        default: Et(l, t, e, a);
    } }
    function Sa(l, t, e, a, u) { for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null;) {
        var n = l, i = t, c = e, f = a, r = i.flags;
        switch (i.tag) {
            case 0:
            case 11:
            case 15:
                Sa(n, i, c, f, u), cu(8, i);
                break;
            case 23: break;
            case 22:
                var S = i.stateNode;
                i.memoizedState !== null ? S._visibility & 2 ? Sa(n, i, c, f, u) : su(n, i) : (S._visibility |= 2, Sa(n, i, c, f, u)), u && r & 2048 && Nc(i.alternate, i);
                break;
            case 24:
                Sa(n, i, c, f, u), u && r & 2048 && Uc(i.alternate, i);
                break;
            default: Sa(n, i, c, f, u);
        }
        t = t.sibling;
    } }
    function su(l, t) { if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null;) {
            var e = l, a = t, u = a.flags;
            switch (a.tag) {
                case 22:
                    su(e, a), u & 2048 && Nc(a.alternate, a);
                    break;
                case 24:
                    su(e, a), u & 2048 && Uc(a.alternate, a);
                    break;
                default: su(e, a);
            }
            t = t.sibling;
        } }
    var ou = 8192;
    function ba(l, t, e) { if (l.subtreeFlags & ou)
        for (l = l.child; l !== null;)
            hd(l, t, e), l = l.sibling; }
    function hd(l, t, e) { switch (l.tag) {
        case 26:
            ba(l, t, e), l.flags & ou && l.memoizedState !== null && $y(e, At, l.memoizedState, l.memoizedProps);
            break;
        case 5:
            ba(l, t, e);
            break;
        case 3:
        case 4:
            var a = At;
            At = Rn(l.stateNode.containerInfo), ba(l, t, e), At = a;
            break;
        case 22:
            l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = ou, ou = 16777216, ba(l, t, e), ou = a) : ba(l, t, e));
            break;
        default: ba(l, t, e);
    } }
    function yd(l) { var t = l.alternate; if (t !== null && (l = t.child, l !== null)) {
        t.child = null;
        do
            t = l.sibling, l.sibling = null, l = t;
        while (l !== null);
    } }
    function du(l) { var t = l.deletions; if ((l.flags & 16) !== 0) {
        if (t !== null)
            for (var e = 0; e < t.length; e++) {
                var a = t[e];
                Ml = a, md(a, l);
            }
        yd(l);
    } if (l.subtreeFlags & 10256)
        for (l = l.child; l !== null;)
            rd(l), l = l.sibling; }
    function rd(l) { switch (l.tag) {
        case 0:
        case 11:
        case 15:
            du(l), l.flags & 2048 && oe(9, l, l.return);
            break;
        case 3:
            du(l);
            break;
        case 12:
            du(l);
            break;
        case 22:
            var t = l.stateNode;
            l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, An(l)) : du(l);
            break;
        default: du(l);
    } }
    function An(l) { var t = l.deletions; if ((l.flags & 16) !== 0) {
        if (t !== null)
            for (var e = 0; e < t.length; e++) {
                var a = t[e];
                Ml = a, md(a, l);
            }
        yd(l);
    } for (l = l.child; l !== null;) {
        switch (t = l, t.tag) {
            case 0:
            case 11:
            case 15:
                oe(8, t, t.return), An(t);
                break;
            case 22:
                e = t.stateNode, e._visibility & 2 && (e._visibility &= -3, An(t));
                break;
            default: An(t);
        }
        l = l.sibling;
    } }
    function md(l, t) { for (; Ml !== null;) {
        var e = Ml;
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                oe(8, e, t);
                break;
            case 23:
            case 22:
                if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
                    var a = e.memoizedState.cachePool.pool;
                    a != null && a.refCount++;
                }
                break;
            case 24: $a(e.memoizedState.cache);
        }
        if (a = e.child, a !== null)
            a.return = e, Ml = a;
        else
            l: for (e = l; Ml !== null;) {
                a = Ml;
                var u = a.sibling, n = a.return;
                if (nd(a), a === e) {
                    Ml = null;
                    break l;
                }
                if (u !== null) {
                    u.return = n, Ml = u;
                    break l;
                }
                Ml = n;
            }
    } }
    var sy = { getCacheForType: function (l) { var t = Ul(Al), e = t.data.get(l); return e === void 0 && (e = l(), t.data.set(l, e)), e; }, cacheSignal: function () { return Ul(Al).controller.signal; } }, oy = typeof WeakMap == "function" ? WeakMap : Map, tl = 0, hl = null, w = null, W = 0, ul = 0, nt = null, de = !1, za = !1, jc = !1, $t = 0, Sl = 0, he = 0, Ze = 0, Hc = 0, it = 0, pa = 0, hu = null, Wl = null, Cc = !1, En = 0, vd = 0, Tn = 1 / 0, xn = null, ye = null, _l = 0, re = null, Aa = null, Wt = 0, Rc = 0, qc = null, gd = null, yu = 0, Bc = null;
    function ct() { return (tl & 2) !== 0 && W !== 0 ? W & -W : p.T !== null ? Zc() : jf(); }
    function Sd() { if (it === 0)
        if ((W & 536870912) === 0 || I) {
            var l = ju;
            ju <<= 1, (ju & 3932160) === 0 && (ju = 262144), it = l;
        }
        else
            it = 536870912; return l = at.current, l !== null && (l.flags |= 32), it; }
    function kl(l, t, e) { (l === hl && (ul === 2 || ul === 9) || l.cancelPendingCommit !== null) && (Ea(l, 0), me(l, W, it, !1)), Ca(l, e), ((tl & 2) === 0 || l !== hl) && (l === hl && ((tl & 2) === 0 && (Ze |= e), Sl === 4 && me(l, W, it, !1)), Nt(l)); }
    function bd(l, t, e) { if ((tl & 6) !== 0)
        throw Error(m(327)); var a = !e && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Ha(l, t), u = a ? yy(l, t) : Gc(l, t, !0), n = a; do {
        if (u === 0) {
            za && !a && me(l, t, 0, !1);
            break;
        }
        else {
            if (e = l.current.alternate, n && !dy(e)) {
                u = Gc(l, t, !1), n = !1;
                continue;
            }
            if (u === 2) {
                if (n = t, l.errorRecoveryDisabledLanes & n)
                    var i = 0;
                else
                    i = l.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
                if (i !== 0) {
                    t = i;
                    l: {
                        var c = l;
                        u = hu;
                        var f = c.current.memoizedState.isDehydrated;
                        if (f && (Ea(c, i).flags |= 256), i = Gc(c, i, !1), i !== 2) {
                            if (jc && !f) {
                                c.errorRecoveryDisabledLanes |= n, Ze |= n, u = 4;
                                break l;
                            }
                            n = Wl, Wl = u, n !== null && (Wl === null ? Wl = n : Wl.push.apply(Wl, n));
                        }
                        u = i;
                    }
                    if (n = !1, u !== 2)
                        continue;
                }
            }
            if (u === 1) {
                Ea(l, 0), me(l, t, 0, !0);
                break;
            }
            l: {
                switch (a = l, n = u, n) {
                    case 0:
                    case 1: throw Error(m(345));
                    case 4: if ((t & 4194048) !== t)
                        break;
                    case 6:
                        me(a, t, it, !de);
                        break l;
                    case 2:
                        Wl = null;
                        break;
                    case 3:
                    case 5: break;
                    default: throw Error(m(329));
                }
                if ((t & 62914560) === t && (u = En + 300 - Il(), 10 < u)) {
                    if (me(a, t, it, !de), Cu(a, 0, !0) !== 0)
                        break l;
                    Wt = t, a.timeoutHandle = kd(zd.bind(null, a, e, Wl, xn, Cc, t, it, Ze, pa, de, n, "Throttled", -0, 0), u);
                    break l;
                }
                zd(a, e, Wl, xn, Cc, t, it, Ze, pa, de, n, null, -0, 0);
            }
        }
        break;
    } while (!0); Nt(l); }
    function zd(l, t, e, a, u, n, i, c, f, r, S, E, v, g) { if (l.timeoutHandle = -1, E = t.subtreeFlags, E & 8192 || (E & 16785408) === 16785408) {
        E = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: !0, waitingForViewTransition: !1, unsuspend: Ct }, hd(t, n, E);
        var M = (n & 62914560) === n ? En - Il() : (n & 4194048) === n ? vd - Il() : 0;
        if (M = Wy(E, M), M !== null) {
            Wt = n, l.cancelPendingCommit = M(Md.bind(null, l, t, n, e, a, u, i, c, f, S, E, null, v, g)), me(l, n, i, !r);
            return;
        }
    } Md(l, t, n, e, a, u, i, c, f); }
    function dy(l) { for (var t = l;;) {
        var e = t.tag;
        if ((e === 0 || e === 11 || e === 15) && t.flags & 16384 && (e = t.updateQueue, e !== null && (e = e.stores, e !== null)))
            for (var a = 0; a < e.length; a++) {
                var u = e[a], n = u.getSnapshot;
                u = u.value;
                try {
                    if (!tt(n(), u))
                        return !1;
                }
                catch {
                    return !1;
                }
            }
        if (e = t.child, t.subtreeFlags & 16384 && e !== null)
            e.return = t, t = e;
        else {
            if (t === l)
                break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === l)
                    return !0;
                t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
        }
    } return !0; }
    function me(l, t, e, a) { t &= ~Hc, t &= ~Ze, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes; for (var u = t; 0 < u;) {
        var n = 31 - lt(u), i = 1 << n;
        a[n] = -1, u &= ~i;
    } e !== 0 && Df(l, e, t); }
    function _n() { return (tl & 6) === 0 ? (ru(0), !1) : !0; }
    function Yc() { if (w !== null) {
        if (ul === 0)
            var l = w.return;
        else
            l = w, Yt = Ce = null, lc(l), ya = null, ka = 0, l = w;
        for (; l !== null;)
            Fo(l.alternate, l), l = l.return;
        w = null;
    } }
    function Ea(l, t) { var e = l.timeoutHandle; e !== -1 && (l.timeoutHandle = -1, Uy(e)), e = l.cancelPendingCommit, e !== null && (l.cancelPendingCommit = null, e()), Wt = 0, Yc(), hl = l, w = e = qt(l.current, null), W = t, ul = 0, nt = null, de = !1, za = Ha(l, t), jc = !1, pa = it = Hc = Ze = he = Sl = 0, Wl = hu = null, Cc = !1, (t & 8) !== 0 && (t |= t & 32); var a = l.entangledLanes; if (a !== 0)
        for (l = l.entanglements, a &= t; 0 < a;) {
            var u = 31 - lt(a), n = 1 << u;
            t |= l[u], a &= ~n;
        } return $t = t, Ju(), e; }
    function pd(l, t) { Z = null, p.H = uu, t === ha || t === ln ? (t = qs(), ul = 3) : t === Li ? (t = qs(), ul = 4) : ul = t === vc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, nt = t, w === null && (Sl = 1, mn(l, yt(t, l.current))); }
    function Ad() { var l = at.current; return l === null ? !0 : (W & 4194048) === W ? gt === null : (W & 62914560) === W || (W & 536870912) !== 0 ? l === gt : !1; }
    function Ed() { var l = p.H; return p.H = uu, l === null ? uu : l; }
    function Td() { var l = p.A; return p.A = sy, l; }
    function On() { Sl = 4, de || (W & 4194048) !== W && at.current !== null || (za = !0), (he & 134217727) === 0 && (Ze & 134217727) === 0 || hl === null || me(hl, W, it, !1); }
    function Gc(l, t, e) { var a = tl; tl |= 2; var u = Ed(), n = Td(); (hl !== l || W !== t) && (xn = null, Ea(l, t)), t = !1; var i = Sl; l: do
        try {
            if (ul !== 0 && w !== null) {
                var c = w, f = nt;
                switch (ul) {
                    case 8:
                        Yc(), i = 6;
                        break l;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        at.current === null && (t = !0);
                        var r = ul;
                        if (ul = 0, nt = null, Ta(l, c, f, r), e && za) {
                            i = 0;
                            break l;
                        }
                        break;
                    default: r = ul, ul = 0, nt = null, Ta(l, c, f, r);
                }
            }
            hy(), i = Sl;
            break;
        }
        catch (S) {
            pd(l, S);
        }
    while (!0); return t && l.shellSuspendCounter++, Yt = Ce = null, tl = a, p.H = u, p.A = n, w === null && (hl = null, W = 0, Ju()), i; }
    function hy() { for (; w !== null;)
        xd(w); }
    function yy(l, t) { var e = tl; tl |= 2; var a = Ed(), u = Td(); hl !== l || W !== t ? (xn = null, Tn = Il() + 500, Ea(l, t)) : za = Ha(l, t); l: do
        try {
            if (ul !== 0 && w !== null) {
                t = w;
                var n = nt;
                t: switch (ul) {
                    case 1:
                        ul = 0, nt = null, Ta(l, t, n, 1);
                        break;
                    case 2:
                    case 9:
                        if (Cs(n)) {
                            ul = 0, nt = null, _d(t);
                            break;
                        }
                        t = function () { ul !== 2 && ul !== 9 || hl !== l || (ul = 7), Nt(l); }, n.then(t, t);
                        break l;
                    case 3:
                        ul = 7;
                        break l;
                    case 4:
                        ul = 5;
                        break l;
                    case 7:
                        Cs(n) ? (ul = 0, nt = null, _d(t)) : (ul = 0, nt = null, Ta(l, t, n, 7));
                        break;
                    case 5:
                        var i = null;
                        switch (w.tag) {
                            case 26: i = w.memoizedState;
                            case 5:
                            case 27:
                                var c = w;
                                if (i ? d0(i) : c.stateNode.complete) {
                                    ul = 0, nt = null;
                                    var f = c.sibling;
                                    if (f !== null)
                                        w = f;
                                    else {
                                        var r = c.return;
                                        r !== null ? (w = r, Mn(r)) : w = null;
                                    }
                                    break t;
                                }
                        }
                        ul = 0, nt = null, Ta(l, t, n, 5);
                        break;
                    case 6:
                        ul = 0, nt = null, Ta(l, t, n, 6);
                        break;
                    case 8:
                        Yc(), Sl = 6;
                        break l;
                    default: throw Error(m(462));
                }
            }
            ry();
            break;
        }
        catch (S) {
            pd(l, S);
        }
    while (!0); return Yt = Ce = null, p.H = a, p.A = u, tl = e, w !== null ? 0 : (hl = null, W = 0, Ju(), Sl); }
    function ry() { for (; w !== null && !B0();)
        xd(w); }
    function xd(l) { var t = Wo(l.alternate, l, $t); l.memoizedProps = l.pendingProps, t === null ? Mn(l) : w = t; }
    function _d(l) { var t = l, e = t.alternate; switch (t.tag) {
        case 15:
        case 0:
            t = Zo(e, t, t.pendingProps, t.type, void 0, W);
            break;
        case 11:
            t = Zo(e, t, t.pendingProps, t.type.render, t.ref, W);
            break;
        case 5: lc(t);
        default: Fo(e, t), t = w = Es(t, $t), t = Wo(e, t, $t);
    } l.memoizedProps = l.pendingProps, t === null ? Mn(l) : w = t; }
    function Ta(l, t, e, a) { Yt = Ce = null, lc(t), ya = null, ka = 0; var u = t.return; try {
        if (ey(l, u, t, e, W)) {
            Sl = 1, mn(l, yt(e, l.current)), w = null;
            return;
        }
    }
    catch (n) {
        if (u !== null)
            throw w = u, n;
        Sl = 1, mn(l, yt(e, l.current)), w = null;
        return;
    } t.flags & 32768 ? (I || a === 1 ? l = !0 : za || (W & 536870912) !== 0 ? l = !1 : (de = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = at.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Od(t, l)) : Mn(t); }
    function Mn(l) { var t = l; do {
        if ((t.flags & 32768) !== 0) {
            Od(t, de);
            return;
        }
        l = t.return;
        var e = ny(t.alternate, t, $t);
        if (e !== null) {
            w = e;
            return;
        }
        if (t = t.sibling, t !== null) {
            w = t;
            return;
        }
        w = t = l;
    } while (t !== null); Sl === 0 && (Sl = 5); }
    function Od(l, t) { do {
        var e = iy(l.alternate, l);
        if (e !== null) {
            e.flags &= 32767, w = e;
            return;
        }
        if (e = l.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !t && (l = l.sibling, l !== null)) {
            w = l;
            return;
        }
        w = l = e;
    } while (l !== null); Sl = 6, w = null; }
    function Md(l, t, e, a, u, n, i, c, f) { l.cancelPendingCommit = null; do
        Dn();
    while (_l !== 0); if ((tl & 6) !== 0)
        throw Error(m(327)); if (t !== null) {
        if (t === l.current)
            throw Error(m(177));
        if (n = t.lanes | t.childLanes, n |= Oi, w0(l, e, n, i, c, f), l === hl && (w = hl = null, W = 0), Aa = t, re = l, Wt = e, Rc = n, qc = u, gd = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Sy(Nu, function () { return Hd(), null; })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
            a = p.T, p.T = null, u = _.p, _.p = 2, i = tl, tl |= 4;
            try {
                cy(l, t, e);
            }
            finally {
                tl = i, _.p = u, p.T = a;
            }
        }
        _l = 1, Dd(), Nd(), Ud();
    } }
    function Dd() { if (_l === 1) {
        _l = 0;
        var l = re, t = Aa, e = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || e) {
            e = p.T, p.T = null;
            var a = _.p;
            _.p = 2;
            var u = tl;
            tl |= 4;
            try {
                sd(t, l);
                var n = Fc, i = rs(l.containerInfo), c = n.focusedElem, f = n.selectionRange;
                if (i !== c && c && c.ownerDocument && ys(c.ownerDocument.documentElement, c)) {
                    if (f !== null && Ai(c)) {
                        var r = f.start, S = f.end;
                        if (S === void 0 && (S = r), "selectionStart" in c)
                            c.selectionStart = r, c.selectionEnd = Math.min(S, c.value.length);
                        else {
                            var E = c.ownerDocument || document, v = E && E.defaultView || window;
                            if (v.getSelection) {
                                var g = v.getSelection(), M = c.textContent.length, q = Math.min(f.start, M), ol = f.end === void 0 ? q : Math.min(f.end, M);
                                !g.extend && q > ol && (i = ol, ol = q, q = i);
                                var d = hs(c, q), s = hs(c, ol);
                                if (d && s && (g.rangeCount !== 1 || g.anchorNode !== d.node || g.anchorOffset !== d.offset || g.focusNode !== s.node || g.focusOffset !== s.offset)) {
                                    var y = E.createRange();
                                    y.setStart(d.node, d.offset), g.removeAllRanges(), q > ol ? (g.addRange(y), g.extend(s.node, s.offset)) : (y.setEnd(s.node, s.offset), g.addRange(y));
                                }
                            }
                        }
                    }
                    for (E = [], g = c; g = g.parentNode;)
                        g.nodeType === 1 && E.push({ element: g, left: g.scrollLeft, top: g.scrollTop });
                    for (typeof c.focus == "function" && c.focus(), c = 0; c < E.length; c++) {
                        var A = E[c];
                        A.element.scrollLeft = A.left, A.element.scrollTop = A.top;
                    }
                }
                Qn = !!kc, Fc = kc = null;
            }
            finally {
                tl = u, _.p = a, p.T = e;
            }
        }
        l.current = t, _l = 2;
    } }
    function Nd() { if (_l === 2) {
        _l = 0;
        var l = re, t = Aa, e = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || e) {
            e = p.T, p.T = null;
            var a = _.p;
            _.p = 2;
            var u = tl;
            tl |= 4;
            try {
                ud(l, t.alternate, t);
            }
            finally {
                tl = u, _.p = a, p.T = e;
            }
        }
        _l = 3;
    } }
    function Ud() { if (_l === 4 || _l === 3) {
        _l = 0, Y0();
        var l = re, t = Aa, e = Wt, a = gd;
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? _l = 5 : (_l = 0, Aa = re = null, jd(l, l.pendingLanes));
        var u = l.pendingLanes;
        if (u === 0 && (ye = null), ai(e), t = t.stateNode, Pl && typeof Pl.onCommitFiberRoot == "function")
            try {
                Pl.onCommitFiberRoot(ja, t, void 0, (t.current.flags & 128) === 128);
            }
            catch { }
        if (a !== null) {
            t = p.T, u = _.p, _.p = 2, p.T = null;
            try {
                for (var n = l.onRecoverableError, i = 0; i < a.length; i++) {
                    var c = a[i];
                    n(c.value, { componentStack: c.stack });
                }
            }
            finally {
                p.T = t, _.p = u;
            }
        }
        (Wt & 3) !== 0 && Dn(), Nt(l), u = l.pendingLanes, (e & 261930) !== 0 && (u & 42) !== 0 ? l === Bc ? yu++ : (yu = 0, Bc = l) : yu = 0, ru(0);
    } }
    function jd(l, t) { (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, $a(t))); }
    function Dn() { return Dd(), Nd(), Ud(), Hd(); }
    function Hd() { if (_l !== 5)
        return !1; var l = re, t = Rc; Rc = 0; var e = ai(Wt), a = p.T, u = _.p; try {
        _.p = 32 > e ? 32 : e, p.T = null, e = qc, qc = null;
        var n = re, i = Wt;
        if (_l = 0, Aa = re = null, Wt = 0, (tl & 6) !== 0)
            throw Error(m(331));
        var c = tl;
        if (tl |= 4, rd(n.current), dd(n, n.current, i, e), tl = c, ru(0, !1), Pl && typeof Pl.onPostCommitFiberRoot == "function")
            try {
                Pl.onPostCommitFiberRoot(ja, n);
            }
            catch { }
        return !0;
    }
    finally {
        _.p = u, p.T = a, jd(l, t);
    } }
    function Cd(l, t, e) { t = yt(e, t), t = mc(l.stateNode, t, 2), l = ce(l, t, 2), l !== null && (Ca(l, 2), Nt(l)); }
    function nl(l, t, e) { if (l.tag === 3)
        Cd(l, l, e);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Cd(t, l, e);
                break;
            }
            else if (t.tag === 1) {
                var a = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ye === null || !ye.has(a))) {
                    l = yt(e, l), e = Ro(2), a = ce(t, e, 2), a !== null && (qo(e, a, t, l), Ca(a, 2), Nt(a));
                    break;
                }
            }
            t = t.return;
        } }
    function Xc(l, t, e) { var a = l.pingCache; if (a === null) {
        a = l.pingCache = new oy;
        var u = new Set;
        a.set(t, u);
    }
    else
        u = a.get(t), u === void 0 && (u = new Set, a.set(t, u)); u.has(e) || (jc = !0, u.add(e), l = my.bind(null, l, t, e), t.then(l, l)); }
    function my(l, t, e) { var a = l.pingCache; a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & e, l.warmLanes &= ~e, hl === l && (W & e) === e && (Sl === 4 || Sl === 3 && (W & 62914560) === W && 300 > Il() - En ? (tl & 2) === 0 && Ea(l, 0) : Hc |= e, pa === W && (pa = 0)), Nt(l); }
    function Rd(l, t) { t === 0 && (t = Mf()), l = Ue(l, t), l !== null && (Ca(l, t), Nt(l)); }
    function vy(l) { var t = l.memoizedState, e = 0; t !== null && (e = t.retryLane), Rd(l, e); }
    function gy(l, t) { var e = 0; switch (l.tag) {
        case 31:
        case 13:
            var a = l.stateNode, u = l.memoizedState;
            u !== null && (e = u.retryLane);
            break;
        case 19:
            a = l.stateNode;
            break;
        case 22:
            a = l.stateNode._retryCache;
            break;
        default: throw Error(m(314));
    } a !== null && a.delete(t), Rd(l, e); }
    function Sy(l, t) { return Pn(l, t); }
    var Nn = null, xa = null, Qc = !1, Un = !1, Lc = !1, ve = 0;
    function Nt(l) { l !== xa && l.next === null && (xa === null ? Nn = xa = l : xa = xa.next = l), Un = !0, Qc || (Qc = !0, zy()); }
    function ru(l, t) { if (!Lc && Un) {
        Lc = !0;
        do
            for (var e = !1, a = Nn; a !== null;) {
                if (l !== 0) {
                    var u = a.pendingLanes;
                    if (u === 0)
                        var n = 0;
                    else {
                        var i = a.suspendedLanes, c = a.pingedLanes;
                        n = (1 << 31 - lt(42 | l) + 1) - 1, n &= u & ~(i & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
                    }
                    n !== 0 && (e = !0, Gd(a, n));
                }
                else
                    n = W, n = Cu(a, a === hl ? n : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (n & 3) === 0 || Ha(a, n) || (e = !0, Gd(a, n));
                a = a.next;
            }
        while (e);
        Lc = !1;
    } }
    function by() { qd(); }
    function qd() { Un = Qc = !1; var l = 0; ve !== 0 && Ny() && (l = ve); for (var t = Il(), e = null, a = Nn; a !== null;) {
        var u = a.next, n = Bd(a, t);
        n === 0 ? (a.next = null, e === null ? Nn = u : e.next = u, u === null && (xa = e)) : (e = a, (l !== 0 || (n & 3) !== 0) && (Un = !0)), a = u;
    } _l !== 0 && _l !== 5 || ru(l), ve !== 0 && (ve = 0); }
    function Bd(l, t) { for (var e = l.suspendedLanes, a = l.pingedLanes, u = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n;) {
        var i = 31 - lt(n), c = 1 << i, f = u[i];
        f === -1 ? ((c & e) === 0 || (c & a) !== 0) && (u[i] = J0(c, t)) : f <= t && (l.expiredLanes |= c), n &= ~c;
    } if (t = hl, e = W, e = Cu(l, l === t ? e : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a = l.callbackNode, e === 0 || l === t && (ul === 2 || ul === 9) || l.cancelPendingCommit !== null)
        return a !== null && a !== null && li(a), l.callbackNode = null, l.callbackPriority = 0; if ((e & 3) === 0 || Ha(l, e)) {
        if (t = e & -e, t === l.callbackPriority)
            return t;
        switch (a !== null && li(a), ai(e)) {
            case 2:
            case 8:
                e = _f;
                break;
            case 32:
                e = Nu;
                break;
            case 268435456:
                e = Of;
                break;
            default: e = Nu;
        }
        return a = Yd.bind(null, l), e = Pn(e, a), l.callbackPriority = t, l.callbackNode = e, t;
    } return a !== null && a !== null && li(a), l.callbackPriority = 2, l.callbackNode = null, 2; }
    function Yd(l, t) { if (_l !== 0 && _l !== 5)
        return l.callbackNode = null, l.callbackPriority = 0, null; var e = l.callbackNode; if (Dn() && l.callbackNode !== e)
        return null; var a = W; return a = Cu(l, l === hl ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a === 0 ? null : (bd(l, a, t), Bd(l, Il()), l.callbackNode != null && l.callbackNode === e ? Yd.bind(null, l) : null); }
    function Gd(l, t) { if (Dn())
        return null; bd(l, t, !0); }
    function zy() { jy(function () { (tl & 6) !== 0 ? Pn(xf, by) : qd(); }); }
    function Zc() { if (ve === 0) {
        var l = oa;
        l === 0 && (l = Uu, Uu <<= 1, (Uu & 261888) === 0 && (Uu = 256)), ve = l;
    } return ve; }
    function Xd(l) { return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Yu("" + l); }
    function Qd(l, t) { var e = t.ownerDocument.createElement("input"); return e.name = t.name, e.value = t.value, l.id && e.setAttribute("form", l.id), t.parentNode.insertBefore(e, t), l = new FormData(l), e.parentNode.removeChild(e), l; }
    function py(l, t, e, a, u) { if (t === "submit" && e && e.stateNode === u) {
        var n = Xd((u[Vl] || null).action), i = a.submitter;
        i && (t = (t = i[Vl] || null) ? Xd(t.formAction) : i.getAttribute("formAction"), t !== null && (n = t, i = null));
        var c = new Lu("action", "action", null, a, u);
        l.push({ event: c, listeners: [{ instance: null, listener: function () { if (a.defaultPrevented) {
                        if (ve !== 0) {
                            var f = i ? Qd(u, i) : new FormData(u);
                            sc(e, { pending: !0, data: f, method: u.method, action: n }, null, f);
                        }
                    }
                    else
                        typeof n == "function" && (c.preventDefault(), f = i ? Qd(u, i) : new FormData(u), sc(e, { pending: !0, data: f, method: u.method, action: n }, n, f)); }, currentTarget: u }] });
    } }
    for (var Vc = 0; Vc < _i.length; Vc++) {
        var Kc = _i[Vc], Ay = Kc.toLowerCase(), Ey = Kc[0].toUpperCase() + Kc.slice(1);
        pt(Ay, "on" + Ey);
    }
    pt(gs, "onAnimationEnd"), pt(Ss, "onAnimationIteration"), pt(bs, "onAnimationStart"), pt("dblclick", "onDoubleClick"), pt("focusin", "onFocus"), pt("focusout", "onBlur"), pt(Gh, "onTransitionRun"), pt(Xh, "onTransitionStart"), pt(Qh, "onTransitionCancel"), pt(zs, "onTransitionEnd"), ke("onMouseEnter", ["mouseout", "mouseover"]), ke("onMouseLeave", ["mouseout", "mouseover"]), ke("onPointerEnter", ["pointerout", "pointerover"]), ke("onPointerLeave", ["pointerout", "pointerover"]), Oe("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Oe("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Oe("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Oe("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Oe("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Oe("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var mu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ty = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mu));
    function Ld(l, t) { t = (t & 4) !== 0; for (var e = 0; e < l.length; e++) {
        var a = l[e], u = a.event;
        a = a.listeners;
        l: {
            var n = void 0;
            if (t)
                for (var i = a.length - 1; 0 <= i; i--) {
                    var c = a[i], f = c.instance, r = c.currentTarget;
                    if (c = c.listener, f !== n && u.isPropagationStopped())
                        break l;
                    n = c, u.currentTarget = r;
                    try {
                        n(u);
                    }
                    catch (S) {
                        Ku(S);
                    }
                    u.currentTarget = null, n = f;
                }
            else
                for (i = 0; i < a.length; i++) {
                    if (c = a[i], f = c.instance, r = c.currentTarget, c = c.listener, f !== n && u.isPropagationStopped())
                        break l;
                    n = c, u.currentTarget = r;
                    try {
                        n(u);
                    }
                    catch (S) {
                        Ku(S);
                    }
                    u.currentTarget = null, n = f;
                }
        }
    } }
    function $(l, t) { var e = t[ui]; e === void 0 && (e = t[ui] = new Set); var a = l + "__bubble"; e.has(a) || (Zd(t, l, 2, !1), e.add(a)); }
    function Jc(l, t, e) { var a = 0; t && (a |= 4), Zd(e, l, a, t); }
    var jn = "_reactListening" + Math.random().toString(36).slice(2);
    function wc(l) { if (!l[jn]) {
        l[jn] = !0, Rf.forEach(function (e) { e !== "selectionchange" && (Ty.has(e) || Jc(e, !1, l), Jc(e, !0, l)); });
        var t = l.nodeType === 9 ? l : l.ownerDocument;
        t === null || t[jn] || (t[jn] = !0, Jc("selectionchange", !1, t));
    } }
    function Zd(l, t, e, a) { switch (S0(t)) {
        case 2:
            var u = Iy;
            break;
        case 8:
            u = Py;
            break;
        default: u = sf;
    } e = u.bind(null, t, e, l), u = void 0, !yi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), a ? u !== void 0 ? l.addEventListener(t, e, { capture: !0, passive: u }) : l.addEventListener(t, e, !0) : u !== void 0 ? l.addEventListener(t, e, { passive: u }) : l.addEventListener(t, e, !1); }
    function $c(l, t, e, a, u) { var n = a; if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
        l: for (;;) {
            if (a === null)
                return;
            var i = a.tag;
            if (i === 3 || i === 4) {
                var c = a.stateNode.containerInfo;
                if (c === u)
                    break;
                if (i === 4)
                    for (i = a.return; i !== null;) {
                        var f = i.tag;
                        if ((f === 3 || f === 4) && i.stateNode.containerInfo === u)
                            return;
                        i = i.return;
                    }
                for (; c !== null;) {
                    if (i = we(c), i === null)
                        return;
                    if (f = i.tag, f === 5 || f === 6 || f === 26 || f === 27) {
                        a = n = i;
                        continue l;
                    }
                    c = c.parentNode;
                }
            }
            a = a.return;
        } wf(function () { var r = n, S = di(e), E = []; l: {
        var v = ps.get(l);
        if (v !== void 0) {
            var g = Lu, M = l;
            switch (l) {
                case "keypress": if (Xu(e) === 0)
                    break l;
                case "keydown":
                case "keyup":
                    g = gh;
                    break;
                case "focusin":
                    M = "focus", g = gi;
                    break;
                case "focusout":
                    M = "blur", g = gi;
                    break;
                case "beforeblur":
                case "afterblur":
                    g = gi;
                    break;
                case "click": if (e.button === 2)
                    break l;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    g = kf;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    g = nh;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    g = zh;
                    break;
                case gs:
                case Ss:
                case bs:
                    g = fh;
                    break;
                case zs:
                    g = Ah;
                    break;
                case "scroll":
                case "scrollend":
                    g = ah;
                    break;
                case "wheel":
                    g = Th;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    g = oh;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    g = If;
                    break;
                case "toggle":
                case "beforetoggle": g = _h;
            }
            var q = (t & 4) !== 0, ol = !q && (l === "scroll" || l === "scrollend"), d = q ? v !== null ? v + "Capture" : null : v;
            q = [];
            for (var s = r, y; s !== null;) {
                var A = s;
                if (y = A.stateNode, A = A.tag, A !== 5 && A !== 26 && A !== 27 || y === null || d === null || (A = Ba(s, d), A != null && q.push(vu(s, A, y))), ol)
                    break;
                s = s.return;
            }
            0 < q.length && (v = new g(v, M, null, e, S), E.push({ event: v, listeners: q }));
        }
    } if ((t & 7) === 0) {
        l: {
            if (v = l === "mouseover" || l === "pointerover", g = l === "mouseout" || l === "pointerout", v && e !== oi && (M = e.relatedTarget || e.fromElement) && (we(M) || M[Je]))
                break l;
            if ((g || v) && (v = S.window === S ? S : (v = S.ownerDocument) ? v.defaultView || v.parentWindow : window, g ? (M = e.relatedTarget || e.toElement, g = r, M = M ? we(M) : null, M !== null && (ol = j(M), q = M.tag, M !== ol || q !== 5 && q !== 27 && q !== 6) && (M = null)) : (g = null, M = r), g !== M)) {
                if (q = kf, A = "onMouseLeave", d = "onMouseEnter", s = "mouse", (l === "pointerout" || l === "pointerover") && (q = If, A = "onPointerLeave", d = "onPointerEnter", s = "pointer"), ol = g == null ? v : qa(g), y = M == null ? v : qa(M), v = new q(A, s + "leave", g, e, S), v.target = ol, v.relatedTarget = y, A = null, we(S) === r && (q = new q(d, s + "enter", M, e, S), q.target = y, q.relatedTarget = ol, A = q), ol = A, g && M)
                    t: {
                        for (q = xy, d = g, s = M, y = 0, A = d; A; A = q(A))
                            y++;
                        A = 0;
                        for (var R = s; R; R = q(R))
                            A++;
                        for (; 0 < y - A;)
                            d = q(d), y--;
                        for (; 0 < A - y;)
                            s = q(s), A--;
                        for (; y--;) {
                            if (d === s || s !== null && d === s.alternate) {
                                q = d;
                                break t;
                            }
                            d = q(d), s = q(s);
                        }
                        q = null;
                    }
                else
                    q = null;
                g !== null && Vd(E, v, g, q, !1), M !== null && ol !== null && Vd(E, ol, M, q, !0);
            }
        }
        l: {
            if (v = r ? qa(r) : window, g = v.nodeName && v.nodeName.toLowerCase(), g === "select" || g === "input" && v.type === "file")
                var P = is;
            else if (us(v))
                if (cs)
                    P = qh;
                else {
                    P = Ch;
                    var U = Hh;
                }
            else
                g = v.nodeName, !g || g.toLowerCase() !== "input" || v.type !== "checkbox" && v.type !== "radio" ? r && si(r.elementType) && (P = is) : P = Rh;
            if (P && (P = P(l, r))) {
                ns(E, P, e, S);
                break l;
            }
            U && U(l, v, r), l === "focusout" && r && v.type === "number" && r.memoizedProps.value != null && fi(v, "number", v.value);
        }
        switch (U = r ? qa(r) : window, l) {
            case "focusin":
                (us(U) || U.contentEditable === "true") && (ea = U, Ei = r, Ka = null);
                break;
            case "focusout":
                Ka = Ei = ea = null;
                break;
            case "mousedown":
                Ti = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Ti = !1, ms(E, e, S);
                break;
            case "selectionchange": if (Yh)
                break;
            case "keydown":
            case "keyup": ms(E, e, S);
        }
        var V;
        if (bi)
            l: {
                switch (l) {
                    case "compositionstart":
                        var k = "onCompositionStart";
                        break l;
                    case "compositionend":
                        k = "onCompositionEnd";
                        break l;
                    case "compositionupdate":
                        k = "onCompositionUpdate";
                        break l;
                }
                k = void 0;
            }
        else
            ta ? es(l, e) && (k = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && (k = "onCompositionStart");
        k && (Pf && e.locale !== "ko" && (ta || k !== "onCompositionStart" ? k === "onCompositionEnd" && ta && (V = $f()) : (le = S, ri = "value" in le ? le.value : le.textContent, ta = !0)), U = Hn(r, k), 0 < U.length && (k = new Ff(k, l, null, e, S), E.push({ event: k, listeners: U }), V ? k.data = V : (V = as(e), V !== null && (k.data = V)))), (V = Mh ? Dh(l, e) : Nh(l, e)) && (k = Hn(r, "onBeforeInput"), 0 < k.length && (U = new Ff("onBeforeInput", "beforeinput", null, e, S), E.push({ event: U, listeners: k }), U.data = V)), py(E, l, r, e, S);
    } Ld(E, t); }); }
    function vu(l, t, e) { return { instance: l, listener: t, currentTarget: e }; }
    function Hn(l, t) { for (var e = t + "Capture", a = []; l !== null;) {
        var u = l, n = u.stateNode;
        if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = Ba(l, e), u != null && a.unshift(vu(l, u, n)), u = Ba(l, t), u != null && a.push(vu(l, u, n))), l.tag === 3)
            return a;
        l = l.return;
    } return []; }
    function xy(l) { if (l === null)
        return null; do
        l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27); return l || null; }
    function Vd(l, t, e, a, u) { for (var n = t._reactName, i = []; e !== null && e !== a;) {
        var c = e, f = c.alternate, r = c.stateNode;
        if (c = c.tag, f !== null && f === a)
            break;
        c !== 5 && c !== 26 && c !== 27 || r === null || (f = r, u ? (r = Ba(e, n), r != null && i.unshift(vu(e, r, f))) : u || (r = Ba(e, n), r != null && i.push(vu(e, r, f)))), e = e.return;
    } i.length !== 0 && l.push({ event: t, listeners: i }); }
    var _y = /\r\n?/g, Oy = /\u0000|\uFFFD/g;
    function Kd(l) {
        return (typeof l == "string" ? l : "" + l).replace(_y, `
`).replace(Oy, "");
    }
    function Jd(l, t) { return t = Kd(t), Kd(l) === t; }
    function sl(l, t, e, a, u, n) { switch (e) {
        case "children":
            typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Ie(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Ie(l, "" + a);
            break;
        case "className":
            qu(l, "class", a);
            break;
        case "tabIndex":
            qu(l, "tabindex", a);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            qu(l, e, a);
            break;
        case "style":
            Kf(l, a, n);
            break;
        case "data": if (t !== "object") {
            qu(l, "data", a);
            break;
        }
        case "src":
        case "href":
            if (a === "" && (t !== "a" || e !== "href")) {
                l.removeAttribute(e);
                break;
            }
            if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                l.removeAttribute(e);
                break;
            }
            a = Yu("" + a), l.setAttribute(e, a);
            break;
        case "action":
        case "formAction":
            if (typeof a == "function") {
                l.setAttribute(e, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break;
            }
            else
                typeof n == "function" && (e === "formAction" ? (t !== "input" && sl(l, t, "name", u.name, u, null), sl(l, t, "formEncType", u.formEncType, u, null), sl(l, t, "formMethod", u.formMethod, u, null), sl(l, t, "formTarget", u.formTarget, u, null)) : (sl(l, t, "encType", u.encType, u, null), sl(l, t, "method", u.method, u, null), sl(l, t, "target", u.target, u, null)));
            if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                l.removeAttribute(e);
                break;
            }
            a = Yu("" + a), l.setAttribute(e, a);
            break;
        case "onClick":
            a != null && (l.onclick = Ct);
            break;
        case "onScroll":
            a != null && $("scroll", l);
            break;
        case "onScrollEnd":
            a != null && $("scrollend", l);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html" in a))
                    throw Error(m(61));
                if (e = a.__html, e != null) {
                    if (u.children != null)
                        throw Error(m(60));
                    l.innerHTML = e;
                }
            }
            break;
        case "multiple":
            l.multiple = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "muted":
            l.muted = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref": break;
        case "autoFocus": break;
        case "xlinkHref":
            if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                l.removeAttribute("xlink:href");
                break;
            }
            e = Yu("" + a), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "" + a) : l.removeAttribute(e);
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
            a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "") : l.removeAttribute(e);
            break;
        case "capture":
        case "download":
            a === !0 ? l.setAttribute(e, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, a) : l.removeAttribute(e);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(e, a) : l.removeAttribute(e);
            break;
        case "rowSpan":
        case "start":
            a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(e) : l.setAttribute(e, a);
            break;
        case "popover":
            $("beforetoggle", l), $("toggle", l), Ru(l, "popover", a);
            break;
        case "xlinkActuate":
            Ht(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
            break;
        case "xlinkArcrole":
            Ht(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
            break;
        case "xlinkRole":
            Ht(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
            break;
        case "xlinkShow":
            Ht(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
            break;
        case "xlinkTitle":
            Ht(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
            break;
        case "xlinkType":
            Ht(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
            break;
        case "xmlBase":
            Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
            break;
        case "xmlLang":
            Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
            break;
        case "xmlSpace":
            Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
            break;
        case "is":
            Ru(l, "is", a);
            break;
        case "innerText":
        case "textContent": break;
        default: (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = th.get(e) || e, Ru(l, e, a));
    } }
    function Wc(l, t, e, a, u, n) { switch (e) {
        case "style":
            Kf(l, a, n);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html" in a))
                    throw Error(m(61));
                if (e = a.__html, e != null) {
                    if (u.children != null)
                        throw Error(m(60));
                    l.innerHTML = e;
                }
            }
            break;
        case "children":
            typeof a == "string" ? Ie(l, a) : (typeof a == "number" || typeof a == "bigint") && Ie(l, "" + a);
            break;
        case "onScroll":
            a != null && $("scroll", l);
            break;
        case "onScrollEnd":
            a != null && $("scrollend", l);
            break;
        case "onClick":
            a != null && (l.onclick = Ct);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref": break;
        case "innerText":
        case "textContent": break;
        default: if (!qf.hasOwnProperty(e))
            l: {
                if (e[0] === "o" && e[1] === "n" && (u = e.endsWith("Capture"), t = e.slice(2, u ? e.length - 7 : void 0), n = l[Vl] || null, n = n != null ? n[e] : null, typeof n == "function" && l.removeEventListener(t, n, u), typeof a == "function")) {
                    typeof n != "function" && n !== null && (e in l ? l[e] = null : l.hasAttribute(e) && l.removeAttribute(e)), l.addEventListener(t, a, u);
                    break l;
                }
                e in l ? l[e] = a : a === !0 ? l.setAttribute(e, "") : Ru(l, e, a);
            }
    } }
    function Hl(l, t, e) { switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li": break;
        case "img":
            $("error", l), $("load", l);
            var a = !1, u = !1, n;
            for (n in e)
                if (e.hasOwnProperty(n)) {
                    var i = e[n];
                    if (i != null)
                        switch (n) {
                            case "src":
                                a = !0;
                                break;
                            case "srcSet":
                                u = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML": throw Error(m(137, t));
                            default: sl(l, t, n, i, e, null);
                        }
                }
            u && sl(l, t, "srcSet", e.srcSet, e, null), a && sl(l, t, "src", e.src, e, null);
            return;
        case "input":
            $("invalid", l);
            var c = n = i = u = null, f = null, r = null;
            for (a in e)
                if (e.hasOwnProperty(a)) {
                    var S = e[a];
                    if (S != null)
                        switch (a) {
                            case "name":
                                u = S;
                                break;
                            case "type":
                                i = S;
                                break;
                            case "checked":
                                f = S;
                                break;
                            case "defaultChecked":
                                r = S;
                                break;
                            case "value":
                                n = S;
                                break;
                            case "defaultValue":
                                c = S;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (S != null)
                                    throw Error(m(137, t));
                                break;
                            default: sl(l, t, a, S, e, null);
                        }
                }
            Qf(l, n, c, f, r, i, u, !1);
            return;
        case "select":
            $("invalid", l), a = i = n = null;
            for (u in e)
                if (e.hasOwnProperty(u) && (c = e[u], c != null))
                    switch (u) {
                        case "value":
                            n = c;
                            break;
                        case "defaultValue":
                            i = c;
                            break;
                        case "multiple": a = c;
                        default: sl(l, t, u, c, e, null);
                    }
            t = n, e = i, l.multiple = !!a, t != null ? Fe(l, !!a, t, !1) : e != null && Fe(l, !!a, e, !0);
            return;
        case "textarea":
            $("invalid", l), n = u = a = null;
            for (i in e)
                if (e.hasOwnProperty(i) && (c = e[i], c != null))
                    switch (i) {
                        case "value":
                            a = c;
                            break;
                        case "defaultValue":
                            u = c;
                            break;
                        case "children":
                            n = c;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (c != null)
                                throw Error(m(91));
                            break;
                        default: sl(l, t, i, c, e, null);
                    }
            Zf(l, a, u, n);
            return;
        case "option":
            for (f in e)
                e.hasOwnProperty(f) && (a = e[f], a != null) && (f === "selected" ? l.selected = a && typeof a != "function" && typeof a != "symbol" : sl(l, t, f, a, e, null));
            return;
        case "dialog":
            $("beforetoggle", l), $("toggle", l), $("cancel", l), $("close", l);
            break;
        case "iframe":
        case "object":
            $("load", l);
            break;
        case "video":
        case "audio":
            for (a = 0; a < mu.length; a++)
                $(mu[a], l);
            break;
        case "image":
            $("error", l), $("load", l);
            break;
        case "details":
            $("toggle", l);
            break;
        case "embed":
        case "source":
        case "link": $("error", l), $("load", l);
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
            for (r in e)
                if (e.hasOwnProperty(r) && (a = e[r], a != null))
                    switch (r) {
                        case "children":
                        case "dangerouslySetInnerHTML": throw Error(m(137, t));
                        default: sl(l, t, r, a, e, null);
                    }
            return;
        default: if (si(t)) {
            for (S in e)
                e.hasOwnProperty(S) && (a = e[S], a !== void 0 && Wc(l, t, S, a, e, void 0));
            return;
        }
    } for (c in e)
        e.hasOwnProperty(c) && (a = e[c], a != null && sl(l, t, c, a, e, null)); }
    function My(l, t, e, a) { switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li": break;
        case "input":
            var u = null, n = null, i = null, c = null, f = null, r = null, S = null;
            for (g in e) {
                var E = e[g];
                if (e.hasOwnProperty(g) && E != null)
                    switch (g) {
                        case "checked": break;
                        case "value": break;
                        case "defaultValue": f = E;
                        default: a.hasOwnProperty(g) || sl(l, t, g, null, a, E);
                    }
            }
            for (var v in a) {
                var g = a[v];
                if (E = e[v], a.hasOwnProperty(v) && (g != null || E != null))
                    switch (v) {
                        case "type":
                            n = g;
                            break;
                        case "name":
                            u = g;
                            break;
                        case "checked":
                            r = g;
                            break;
                        case "defaultChecked":
                            S = g;
                            break;
                        case "value":
                            i = g;
                            break;
                        case "defaultValue":
                            c = g;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (g != null)
                                throw Error(m(137, t));
                            break;
                        default: g !== E && sl(l, t, v, g, a, E);
                    }
            }
            ci(l, i, c, f, r, S, n, u);
            return;
        case "select":
            g = i = c = v = null;
            for (n in e)
                if (f = e[n], e.hasOwnProperty(n) && f != null)
                    switch (n) {
                        case "value": break;
                        case "multiple": g = f;
                        default: a.hasOwnProperty(n) || sl(l, t, n, null, a, f);
                    }
            for (u in a)
                if (n = a[u], f = e[u], a.hasOwnProperty(u) && (n != null || f != null))
                    switch (u) {
                        case "value":
                            v = n;
                            break;
                        case "defaultValue":
                            c = n;
                            break;
                        case "multiple": i = n;
                        default: n !== f && sl(l, t, u, n, a, f);
                    }
            t = c, e = i, a = g, v != null ? Fe(l, !!e, v, !1) : !!a != !!e && (t != null ? Fe(l, !!e, t, !0) : Fe(l, !!e, e ? [] : "", !1));
            return;
        case "textarea":
            g = v = null;
            for (c in e)
                if (u = e[c], e.hasOwnProperty(c) && u != null && !a.hasOwnProperty(c))
                    switch (c) {
                        case "value": break;
                        case "children": break;
                        default: sl(l, t, c, null, a, u);
                    }
            for (i in a)
                if (u = a[i], n = e[i], a.hasOwnProperty(i) && (u != null || n != null))
                    switch (i) {
                        case "value":
                            v = u;
                            break;
                        case "defaultValue":
                            g = u;
                            break;
                        case "children": break;
                        case "dangerouslySetInnerHTML":
                            if (u != null)
                                throw Error(m(91));
                            break;
                        default: u !== n && sl(l, t, i, u, a, n);
                    }
            Lf(l, v, g);
            return;
        case "option":
            for (var M in e)
                v = e[M], e.hasOwnProperty(M) && v != null && !a.hasOwnProperty(M) && (M === "selected" ? l.selected = !1 : sl(l, t, M, null, a, v));
            for (f in a)
                v = a[f], g = e[f], a.hasOwnProperty(f) && v !== g && (v != null || g != null) && (f === "selected" ? l.selected = v && typeof v != "function" && typeof v != "symbol" : sl(l, t, f, v, a, g));
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
            for (var q in e)
                v = e[q], e.hasOwnProperty(q) && v != null && !a.hasOwnProperty(q) && sl(l, t, q, null, a, v);
            for (r in a)
                if (v = a[r], g = e[r], a.hasOwnProperty(r) && v !== g && (v != null || g != null))
                    switch (r) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (v != null)
                                throw Error(m(137, t));
                            break;
                        default: sl(l, t, r, v, a, g);
                    }
            return;
        default: if (si(t)) {
            for (var ol in e)
                v = e[ol], e.hasOwnProperty(ol) && v !== void 0 && !a.hasOwnProperty(ol) && Wc(l, t, ol, void 0, a, v);
            for (S in a)
                v = a[S], g = e[S], !a.hasOwnProperty(S) || v === g || v === void 0 && g === void 0 || Wc(l, t, S, v, a, g);
            return;
        }
    } for (var d in e)
        v = e[d], e.hasOwnProperty(d) && v != null && !a.hasOwnProperty(d) && sl(l, t, d, null, a, v); for (E in a)
        v = a[E], g = e[E], !a.hasOwnProperty(E) || v === g || v == null && g == null || sl(l, t, E, v, a, g); }
    function wd(l) { switch (l) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link": return !0;
        default: return !1;
    } }
    function Dy() { if (typeof performance.getEntriesByType == "function") {
        for (var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
            var u = e[a], n = u.transferSize, i = u.initiatorType, c = u.duration;
            if (n && c && wd(i)) {
                for (i = 0, c = u.responseEnd, a += 1; a < e.length; a++) {
                    var f = e[a], r = f.startTime;
                    if (r > c)
                        break;
                    var S = f.transferSize, E = f.initiatorType;
                    S && wd(E) && (f = f.responseEnd, i += S * (f < c ? 1 : (c - r) / (f - r)));
                }
                if (--a, t += 8 * (n + i) / (u.duration / 1e3), l++, 10 < l)
                    break;
            }
        }
        if (0 < l)
            return t / l / 1e6;
    } return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5; }
    var kc = null, Fc = null;
    function Cn(l) { return l.nodeType === 9 ? l : l.ownerDocument; }
    function $d(l) { switch (l) {
        case "http://www.w3.org/2000/svg": return 1;
        case "http://www.w3.org/1998/Math/MathML": return 2;
        default: return 0;
    } }
    function Wd(l, t) { if (l === 0)
        switch (t) {
            case "svg": return 1;
            case "math": return 2;
            default: return 0;
        } return l === 1 && t === "foreignObject" ? 0 : l; }
    function Ic(l, t) { return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null; }
    var Pc = null;
    function Ny() { var l = window.event; return l && l.type === "popstate" ? l === Pc ? !1 : (Pc = l, !0) : (Pc = null, !1); }
    var kd = typeof setTimeout == "function" ? setTimeout : void 0, Uy = typeof clearTimeout == "function" ? clearTimeout : void 0, Fd = typeof Promise == "function" ? Promise : void 0, jy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Fd < "u" ? function (l) { return Fd.resolve(null).then(l).catch(Hy); } : kd;
    function Hy(l) { setTimeout(function () { throw l; }); }
    function ge(l) { return l === "head"; }
    function Id(l, t) { var e = t, a = 0; do {
        var u = e.nextSibling;
        if (l.removeChild(e), u && u.nodeType === 8)
            if (e = u.data, e === "/$" || e === "/&") {
                if (a === 0) {
                    l.removeChild(u), Da(t);
                    return;
                }
                a--;
            }
            else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&")
                a++;
            else if (e === "html")
                gu(l.ownerDocument.documentElement);
            else if (e === "head") {
                e = l.ownerDocument.head, gu(e);
                for (var n = e.firstChild; n;) {
                    var i = n.nextSibling, c = n.nodeName;
                    n[Ra] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || e.removeChild(n), n = i;
                }
            }
            else
                e === "body" && gu(l.ownerDocument.body);
        e = u;
    } while (e); Da(t); }
    function Pd(l, t) { var e = l; l = 0; do {
        var a = e.nextSibling;
        if (e.nodeType === 1 ? t ? (e._stashedDisplay = e.style.display, e.style.display = "none") : (e.style.display = e._stashedDisplay || "", e.getAttribute("style") === "" && e.removeAttribute("style")) : e.nodeType === 3 && (t ? (e._stashedText = e.nodeValue, e.nodeValue = "") : e.nodeValue = e._stashedText || ""), a && a.nodeType === 8)
            if (e = a.data, e === "/$") {
                if (l === 0)
                    break;
                l--;
            }
            else
                e !== "$" && e !== "$?" && e !== "$~" && e !== "$!" || l++;
        e = a;
    } while (e); }
    function lf(l) { var t = l.firstChild; for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
        var e = t;
        switch (t = t.nextSibling, e.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                lf(e), ni(e);
                continue;
            case "SCRIPT":
            case "STYLE": continue;
            case "LINK": if (e.rel.toLowerCase() === "stylesheet")
                continue;
        }
        l.removeChild(e);
    } }
    function Cy(l, t, e, a) { for (; l.nodeType === 1;) {
        var u = e;
        if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
            if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
                break;
        }
        else if (a) {
            if (!l[Ra])
                switch (t) {
                    case "meta":
                        if (!l.hasAttribute("itemprop"))
                            break;
                        return l;
                    case "link":
                        if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                            break;
                        if (n !== u.rel || l.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || l.getAttribute("title") !== (u.title == null ? null : u.title))
                            break;
                        return l;
                    case "style":
                        if (l.hasAttribute("data-precedence"))
                            break;
                        return l;
                    case "script":
                        if (n = l.getAttribute("src"), (n !== (u.src == null ? null : u.src) || l.getAttribute("type") !== (u.type == null ? null : u.type) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                            break;
                        return l;
                    default: return l;
                }
        }
        else if (t === "input" && l.type === "hidden") {
            var n = u.name == null ? null : "" + u.name;
            if (u.type === "hidden" && l.getAttribute("name") === n)
                return l;
        }
        else
            return l;
        if (l = St(l.nextSibling), l === null)
            break;
    } return null; }
    function Ry(l, t, e) { if (t === "")
        return null; for (; l.nodeType !== 3;)
        if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = St(l.nextSibling), l === null))
            return null; return l; }
    function l0(l, t) { for (; l.nodeType !== 8;)
        if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = St(l.nextSibling), l === null))
            return null; return l; }
    function tf(l) { return l.data === "$?" || l.data === "$~"; }
    function ef(l) { return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading"; }
    function qy(l, t) { var e = l.ownerDocument; if (l.data === "$~")
        l._reactRetry = t;
    else if (l.data !== "$?" || e.readyState !== "loading")
        t();
    else {
        var a = function () { t(), e.removeEventListener("DOMContentLoaded", a); };
        e.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    } }
    function St(l) { for (; l != null; l = l.nextSibling) {
        var t = l.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
                break;
            if (t === "/$" || t === "/&")
                return null;
        }
    } return l; }
    var af = null;
    function t0(l) { l = l.nextSibling; for (var t = 0; l;) {
        if (l.nodeType === 8) {
            var e = l.data;
            if (e === "/$" || e === "/&") {
                if (t === 0)
                    return St(l.nextSibling);
                t--;
            }
            else
                e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || t++;
        }
        l = l.nextSibling;
    } return null; }
    function e0(l) { l = l.previousSibling; for (var t = 0; l;) {
        if (l.nodeType === 8) {
            var e = l.data;
            if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
                if (t === 0)
                    return l;
                t--;
            }
            else
                e !== "/$" && e !== "/&" || t++;
        }
        l = l.previousSibling;
    } return null; }
    function a0(l, t, e) { switch (t = Cn(e), l) {
        case "html":
            if (l = t.documentElement, !l)
                throw Error(m(452));
            return l;
        case "head":
            if (l = t.head, !l)
                throw Error(m(453));
            return l;
        case "body":
            if (l = t.body, !l)
                throw Error(m(454));
            return l;
        default: throw Error(m(451));
    } }
    function gu(l) { for (var t = l.attributes; t.length;)
        l.removeAttributeNode(t[0]); ni(l); }
    var bt = new Map, u0 = new Set;
    function Rn(l) { return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument; }
    var kt = _.d;
    _.d = { f: By, r: Yy, D: Gy, C: Xy, L: Qy, m: Ly, X: Vy, S: Zy, M: Ky };
    function By() { var l = kt.f(), t = _n(); return l || t; }
    function Yy(l) { var t = $e(l); t !== null && t.tag === 5 && t.type === "form" ? po(t) : kt.r(l); }
    var _a = typeof document > "u" ? null : document;
    function n0(l, t, e) { var a = _a; if (a && typeof t == "string" && t) {
        var u = dt(t);
        u = 'link[rel="' + l + '"][href="' + u + '"]', typeof e == "string" && (u += '[crossorigin="' + e + '"]'), u0.has(u) || (u0.add(u), l = { rel: l, crossOrigin: e, href: t }, a.querySelector(u) === null && (t = a.createElement("link"), Hl(t, "link", l), Ol(t), a.head.appendChild(t)));
    } }
    function Gy(l) { kt.D(l), n0("dns-prefetch", l, null); }
    function Xy(l, t) { kt.C(l, t), n0("preconnect", l, t); }
    function Qy(l, t, e) { kt.L(l, t, e); var a = _a; if (a && l && t) {
        var u = 'link[rel="preload"][as="' + dt(t) + '"]';
        t === "image" && e && e.imageSrcSet ? (u += '[imagesrcset="' + dt(e.imageSrcSet) + '"]', typeof e.imageSizes == "string" && (u += '[imagesizes="' + dt(e.imageSizes) + '"]')) : u += '[href="' + dt(l) + '"]';
        var n = u;
        switch (t) {
            case "style":
                n = Oa(l);
                break;
            case "script": n = Ma(l);
        }
        bt.has(n) || (l = H({ rel: "preload", href: t === "image" && e && e.imageSrcSet ? void 0 : l, as: t }, e), bt.set(n, l), a.querySelector(u) !== null || t === "style" && a.querySelector(Su(n)) || t === "script" && a.querySelector(bu(n)) || (t = a.createElement("link"), Hl(t, "link", l), Ol(t), a.head.appendChild(t)));
    } }
    function Ly(l, t) { kt.m(l, t); var e = _a; if (e && l) {
        var a = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + dt(a) + '"][href="' + dt(l) + '"]', n = u;
        switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script": n = Ma(l);
        }
        if (!bt.has(n) && (l = H({ rel: "modulepreload", href: l }, t), bt.set(n, l), e.querySelector(u) === null)) {
            switch (a) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script": if (e.querySelector(bu(n)))
                    return;
            }
            a = e.createElement("link"), Hl(a, "link", l), Ol(a), e.head.appendChild(a);
        }
    } }
    function Zy(l, t, e) { kt.S(l, t, e); var a = _a; if (a && l) {
        var u = We(a).hoistableStyles, n = Oa(l);
        t = t || "default";
        var i = u.get(n);
        if (!i) {
            var c = { loading: 0, preload: null };
            if (i = a.querySelector(Su(n)))
                c.loading = 5;
            else {
                l = H({ rel: "stylesheet", href: l, "data-precedence": t }, e), (e = bt.get(n)) && uf(l, e);
                var f = i = a.createElement("link");
                Ol(f), Hl(f, "link", l), f._p = new Promise(function (r, S) { f.onload = r, f.onerror = S; }), f.addEventListener("load", function () { c.loading |= 1; }), f.addEventListener("error", function () { c.loading |= 2; }), c.loading |= 4, qn(i, t, a);
            }
            i = { type: "stylesheet", instance: i, count: 1, state: c }, u.set(n, i);
        }
    } }
    function Vy(l, t) { kt.X(l, t); var e = _a; if (e && l) {
        var a = We(e).hoistableScripts, u = Ma(l), n = a.get(u);
        n || (n = e.querySelector(bu(u)), n || (l = H({ src: l, async: !0 }, t), (t = bt.get(u)) && nf(l, t), n = e.createElement("script"), Ol(n), Hl(n, "link", l), e.head.appendChild(n)), n = { type: "script", instance: n, count: 1, state: null }, a.set(u, n));
    } }
    function Ky(l, t) { kt.M(l, t); var e = _a; if (e && l) {
        var a = We(e).hoistableScripts, u = Ma(l), n = a.get(u);
        n || (n = e.querySelector(bu(u)), n || (l = H({ src: l, async: !0, type: "module" }, t), (t = bt.get(u)) && nf(l, t), n = e.createElement("script"), Ol(n), Hl(n, "link", l), e.head.appendChild(n)), n = { type: "script", instance: n, count: 1, state: null }, a.set(u, n));
    } }
    function i0(l, t, e, a) { var u = (u = J.current) ? Rn(u) : null; if (!u)
        throw Error(m(446)); switch (l) {
        case "meta":
        case "title": return null;
        case "style": return typeof e.precedence == "string" && typeof e.href == "string" ? (t = Oa(e.href), e = We(u).hoistableStyles, a = e.get(t), a || (a = { type: "style", instance: null, count: 0, state: null }, e.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
        case "link":
            if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
                l = Oa(e.href);
                var n = We(u).hoistableStyles, i = n.get(l);
                if (i || (u = u.ownerDocument || u, i = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, n.set(l, i), (n = u.querySelector(Su(l))) && !n._p && (i.instance = n, i.state.loading = 5), bt.has(l) || (e = { rel: "preload", as: "style", href: e.href, crossOrigin: e.crossOrigin, integrity: e.integrity, media: e.media, hrefLang: e.hrefLang, referrerPolicy: e.referrerPolicy }, bt.set(l, e), n || Jy(u, l, e, i.state))), t && a === null)
                    throw Error(m(528, ""));
                return i;
            }
            if (t && a !== null)
                throw Error(m(529, ""));
            return null;
        case "script": return t = e.async, e = e.src, typeof e == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ma(e), e = We(u).hoistableScripts, a = e.get(t), a || (a = { type: "script", instance: null, count: 0, state: null }, e.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
        default: throw Error(m(444, l));
    } }
    function Oa(l) { return 'href="' + dt(l) + '"'; }
    function Su(l) { return 'link[rel="stylesheet"][' + l + "]"; }
    function c0(l) { return H({}, l, { "data-precedence": l.precedence, precedence: null }); }
    function Jy(l, t, e, a) { l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function () { return a.loading |= 1; }), t.addEventListener("error", function () { return a.loading |= 2; }), Hl(t, "link", e), Ol(t), l.head.appendChild(t)); }
    function Ma(l) { return '[src="' + dt(l) + '"]'; }
    function bu(l) { return "script[async]" + l; }
    function f0(l, t, e) { if (t.count++, t.instance === null)
        switch (t.type) {
            case "style":
                var a = l.querySelector('style[data-href~="' + dt(e.href) + '"]');
                if (a)
                    return t.instance = a, Ol(a), a;
                var u = H({}, e, { "data-href": e.href, "data-precedence": e.precedence, href: null, precedence: null });
                return a = (l.ownerDocument || l).createElement("style"), Ol(a), Hl(a, "style", u), qn(a, e.precedence, l), t.instance = a;
            case "stylesheet":
                u = Oa(e.href);
                var n = l.querySelector(Su(u));
                if (n)
                    return t.state.loading |= 4, t.instance = n, Ol(n), n;
                a = c0(e), (u = bt.get(u)) && uf(a, u), n = (l.ownerDocument || l).createElement("link"), Ol(n);
                var i = n;
                return i._p = new Promise(function (c, f) { i.onload = c, i.onerror = f; }), Hl(n, "link", a), t.state.loading |= 4, qn(n, e.precedence, l), t.instance = n;
            case "script": return n = Ma(e.src), (u = l.querySelector(bu(n))) ? (t.instance = u, Ol(u), u) : (a = e, (u = bt.get(n)) && (a = H({}, e), nf(a, u)), l = l.ownerDocument || l, u = l.createElement("script"), Ol(u), Hl(u, "link", a), l.head.appendChild(u), t.instance = u);
            case "void": return null;
            default: throw Error(m(443, t.type));
        }
    else
        t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, qn(a, e.precedence, l)); return t.instance; }
    function qn(l, t, e) { for (var a = e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = a.length ? a[a.length - 1] : null, n = u, i = 0; i < a.length; i++) {
        var c = a[i];
        if (c.dataset.precedence === t)
            n = c;
        else if (n !== u)
            break;
    } n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = e.nodeType === 9 ? e.head : e, t.insertBefore(l, t.firstChild)); }
    function uf(l, t) { l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title); }
    function nf(l, t) { l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity); }
    var Bn = null;
    function s0(l, t, e) { if (Bn === null) {
        var a = new Map, u = Bn = new Map;
        u.set(e, a);
    }
    else
        u = Bn, a = u.get(e), a || (a = new Map, u.set(e, a)); if (a.has(l))
        return a; for (a.set(l, null), e = e.getElementsByTagName(l), u = 0; u < e.length; u++) {
        var n = e[u];
        if (!(n[Ra] || n[Dl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
            var i = n.getAttribute(t) || "";
            i = l + i;
            var c = a.get(i);
            c ? c.push(n) : a.set(i, [n]);
        }
    } return a; }
    function o0(l, t, e) { l = l.ownerDocument || l, l.head.insertBefore(e, t === "title" ? l.querySelector("head > title") : null); }
    function wy(l, t, e) { if (e === 1 || t.itemProp != null)
        return !1; switch (l) {
        case "meta":
        case "title": return !0;
        case "style":
            if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
                break;
            return !0;
        case "link":
            if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
                break;
            return t.rel === "stylesheet" ? (l = t.disabled, typeof t.precedence == "string" && l == null) : !0;
        case "script": if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
            return !0;
    } return !1; }
    function d0(l) { return !(l.type === "stylesheet" && (l.state.loading & 3) === 0); }
    function $y(l, t, e, a) { if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
        if (e.instance === null) {
            var u = Oa(a.href), n = t.querySelector(Su(u));
            if (n) {
                t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Yn.bind(l), t.then(l, l)), e.state.loading |= 4, e.instance = n, Ol(n);
                return;
            }
            n = t.ownerDocument || t, a = c0(a), (u = bt.get(u)) && uf(a, u), n = n.createElement("link"), Ol(n);
            var i = n;
            i._p = new Promise(function (c, f) { i.onload = c, i.onerror = f; }), Hl(n, "link", a), e.instance = n;
        }
        l.stylesheets === null && (l.stylesheets = new Map), l.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (l.count++, e = Yn.bind(l), t.addEventListener("load", e), t.addEventListener("error", e));
    } }
    var cf = 0;
    function Wy(l, t) { return l.stylesheets && l.count === 0 && Xn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function (e) { var a = setTimeout(function () { if (l.stylesheets && Xn(l, l.stylesheets), l.unsuspend) {
        var n = l.unsuspend;
        l.unsuspend = null, n();
    } }, 6e4 + t); 0 < l.imgBytes && cf === 0 && (cf = 62500 * Dy()); var u = setTimeout(function () { if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Xn(l, l.stylesheets), l.unsuspend)) {
        var n = l.unsuspend;
        l.unsuspend = null, n();
    } }, (l.imgBytes > cf ? 50 : 800) + t); return l.unsuspend = e, function () { l.unsuspend = null, clearTimeout(a), clearTimeout(u); }; } : null; }
    function Yn() { if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets)
            Xn(this, this.stylesheets);
        else if (this.unsuspend) {
            var l = this.unsuspend;
            this.unsuspend = null, l();
        }
    } }
    var Gn = null;
    function Xn(l, t) { l.stylesheets = null, l.unsuspend !== null && (l.count++, Gn = new Map, t.forEach(ky, l), Gn = null, Yn.call(l)); }
    function ky(l, t) { if (!(t.state.loading & 4)) {
        var e = Gn.get(l);
        if (e)
            var a = e.get(null);
        else {
            e = new Map, Gn.set(l, e);
            for (var u = l.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < u.length; n++) {
                var i = u[n];
                (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i), a = i);
            }
            a && e.set(null, a);
        }
        u = t.instance, i = u.getAttribute("data-precedence"), n = e.get(i) || a, n === a && e.set(null, u), e.set(i, u), this.count++, a = Yn.bind(this), u.addEventListener("load", a), u.addEventListener("error", a), n ? n.parentNode.insertBefore(u, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(u, l.firstChild)), t.state.loading |= 4;
    } }
    var zu = { $$typeof: Cl, Provider: null, Consumer: null, _currentValue: Y, _currentValue2: Y, _threadCount: 0 };
    function Fy(l, t, e, a, u, n, i, c, f) { this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ti(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ti(0), this.hiddenUpdates = ti(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = f, this.incompleteTransitions = new Map; }
    function h0(l, t, e, a, u, n, i, c, f, r, S, E) { return l = new Fy(l, t, e, i, f, r, S, E, c), t = 1, n === !0 && (t |= 24), n = et(3, null, null, t), l.current = n, n.stateNode = l, t = Gi(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = { element: a, isDehydrated: e, cache: t }, Zi(n), l; }
    function y0(l) { return l ? (l = na, l) : na; }
    function r0(l, t, e, a, u, n) { u = y0(u), a.context === null ? a.context = u : a.pendingContext = u, a = ie(t), a.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (a.callback = n), e = ce(l, a, t), e !== null && (kl(e, l, t), Ia(e, l, t)); }
    function m0(l, t) { if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
        var e = l.retryLane;
        l.retryLane = e !== 0 && e < t ? e : t;
    } }
    function ff(l, t) { m0(l, t), (l = l.alternate) && m0(l, t); }
    function v0(l) { if (l.tag === 13 || l.tag === 31) {
        var t = Ue(l, 67108864);
        t !== null && kl(t, l, 67108864), ff(l, 67108864);
    } }
    function g0(l) { if (l.tag === 13 || l.tag === 31) {
        var t = ct();
        t = ei(t);
        var e = Ue(l, t);
        e !== null && kl(e, l, t), ff(l, t);
    } }
    var Qn = !0;
    function Iy(l, t, e, a) { var u = p.T; p.T = null; var n = _.p; try {
        _.p = 2, sf(l, t, e, a);
    }
    finally {
        _.p = n, p.T = u;
    } }
    function Py(l, t, e, a) { var u = p.T; p.T = null; var n = _.p; try {
        _.p = 8, sf(l, t, e, a);
    }
    finally {
        _.p = n, p.T = u;
    } }
    function sf(l, t, e, a) { if (Qn) {
        var u = of(a);
        if (u === null)
            $c(l, t, a, Ln, e), b0(l, a);
        else if (tr(u, l, t, e, a))
            a.stopPropagation();
        else if (b0(l, a), t & 4 && -1 < lr.indexOf(l)) {
            for (; u !== null;) {
                var n = $e(u);
                if (n !== null)
                    switch (n.tag) {
                        case 3:
                            if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                                var i = _e(n.pendingLanes);
                                if (i !== 0) {
                                    var c = n;
                                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i;) {
                                        var f = 1 << 31 - lt(i);
                                        c.entanglements[1] |= f, i &= ~f;
                                    }
                                    Nt(n), (tl & 6) === 0 && (Tn = Il() + 500, ru(0));
                                }
                            }
                            break;
                        case 31:
                        case 13: c = Ue(n, 2), c !== null && kl(c, n, 2), _n(), ff(n, 2);
                    }
                if (n = of(a), n === null && $c(l, t, a, Ln, e), n === u)
                    break;
                u = n;
            }
            u !== null && a.stopPropagation();
        }
        else
            $c(l, t, a, null, e);
    } }
    function of(l) { return l = di(l), df(l); }
    var Ln = null;
    function df(l) { if (Ln = null, l = we(l), l !== null) {
        var t = j(l);
        if (t === null)
            l = null;
        else {
            var e = t.tag;
            if (e === 13) {
                if (l = K(t), l !== null)
                    return l;
                l = null;
            }
            else if (e === 31) {
                if (l = il(t), l !== null)
                    return l;
                l = null;
            }
            else if (e === 3) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                    return t.tag === 3 ? t.stateNode.containerInfo : null;
                l = null;
            }
            else
                t !== l && (l = null);
        }
    } return Ln = l, null; }
    function S0(l) { switch (l) {
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
        case "message": switch (G0()) {
            case xf: return 2;
            case _f: return 8;
            case Nu:
            case X0: return 32;
            case Of: return 268435456;
            default: return 32;
        }
        default: return 32;
    } }
    var hf = !1, Se = null, be = null, ze = null, pu = new Map, Au = new Map, pe = [], lr = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function b0(l, t) { switch (l) {
        case "focusin":
        case "focusout":
            Se = null;
            break;
        case "dragenter":
        case "dragleave":
            be = null;
            break;
        case "mouseover":
        case "mouseout":
            ze = null;
            break;
        case "pointerover":
        case "pointerout":
            pu.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture": Au.delete(t.pointerId);
    } }
    function Eu(l, t, e, a, u, n) { return l === null || l.nativeEvent !== n ? (l = { blockedOn: t, domEventName: e, eventSystemFlags: a, nativeEvent: n, targetContainers: [u] }, t !== null && (t = $e(t), t !== null && v0(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), l); }
    function tr(l, t, e, a, u) { switch (t) {
        case "focusin": return Se = Eu(Se, l, t, e, a, u), !0;
        case "dragenter": return be = Eu(be, l, t, e, a, u), !0;
        case "mouseover": return ze = Eu(ze, l, t, e, a, u), !0;
        case "pointerover":
            var n = u.pointerId;
            return pu.set(n, Eu(pu.get(n) || null, l, t, e, a, u)), !0;
        case "gotpointercapture": return n = u.pointerId, Au.set(n, Eu(Au.get(n) || null, l, t, e, a, u)), !0;
    } return !1; }
    function z0(l) { var t = we(l.target); if (t !== null) {
        var e = j(t);
        if (e !== null) {
            if (t = e.tag, t === 13) {
                if (t = K(e), t !== null) {
                    l.blockedOn = t, Hf(l.priority, function () { g0(e); });
                    return;
                }
            }
            else if (t === 31) {
                if (t = il(e), t !== null) {
                    l.blockedOn = t, Hf(l.priority, function () { g0(e); });
                    return;
                }
            }
            else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
                l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
                return;
            }
        }
    } l.blockedOn = null; }
    function Zn(l) { if (l.blockedOn !== null)
        return !1; for (var t = l.targetContainers; 0 < t.length;) {
        var e = of(l.nativeEvent);
        if (e === null) {
            e = l.nativeEvent;
            var a = new e.constructor(e.type, e);
            oi = a, e.target.dispatchEvent(a), oi = null;
        }
        else
            return t = $e(e), t !== null && v0(t), l.blockedOn = e, !1;
        t.shift();
    } return !0; }
    function p0(l, t, e) { Zn(l) && e.delete(t); }
    function er() { hf = !1, Se !== null && Zn(Se) && (Se = null), be !== null && Zn(be) && (be = null), ze !== null && Zn(ze) && (ze = null), pu.forEach(p0), Au.forEach(p0); }
    function Vn(l, t) { l.blockedOn === t && (l.blockedOn = null, hf || (hf = !0, b.unstable_scheduleCallback(b.unstable_NormalPriority, er))); }
    var Kn = null;
    function A0(l) { Kn !== l && (Kn = l, b.unstable_scheduleCallback(b.unstable_NormalPriority, function () { Kn === l && (Kn = null); for (var t = 0; t < l.length; t += 3) {
        var e = l[t], a = l[t + 1], u = l[t + 2];
        if (typeof a != "function") {
            if (df(a || e) === null)
                continue;
            break;
        }
        var n = $e(e);
        n !== null && (l.splice(t, 3), t -= 3, sc(n, { pending: !0, data: u, method: e.method, action: a }, a, u));
    } })); }
    function Da(l) { function t(f) { return Vn(f, l); } Se !== null && Vn(Se, l), be !== null && Vn(be, l), ze !== null && Vn(ze, l), pu.forEach(t), Au.forEach(t); for (var e = 0; e < pe.length; e++) {
        var a = pe[e];
        a.blockedOn === l && (a.blockedOn = null);
    } for (; 0 < pe.length && (e = pe[0], e.blockedOn === null);)
        z0(e), e.blockedOn === null && pe.shift(); if (e = (l.ownerDocument || l).$$reactFormReplay, e != null)
        for (a = 0; a < e.length; a += 3) {
            var u = e[a], n = e[a + 1], i = u[Vl] || null;
            if (typeof n == "function")
                i || A0(e);
            else if (i) {
                var c = null;
                if (n && n.hasAttribute("formAction")) {
                    if (u = n, i = n[Vl] || null)
                        c = i.formAction;
                    else if (df(u) !== null)
                        continue;
                }
                else
                    c = i.action;
                typeof c == "function" ? e[a + 1] = c : (e.splice(a, 3), a -= 3), A0(e);
            }
        } }
    function E0() { function l(n) { n.canIntercept && n.info === "react-transition" && n.intercept({ handler: function () { return new Promise(function (i) { return u = i; }); }, focusReset: "manual", scroll: "manual" }); } function t() { u !== null && (u(), u = null), a || setTimeout(e, 20); } function e() { if (!a && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, { state: n.getState(), info: "react-transition", history: "replace" });
    } } if (typeof navigation == "object") {
        var a = !1, u = null;
        return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(e, 100), function () { a = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), u !== null && (u(), u = null); };
    } }
    function yf(l) { this._internalRoot = l; }
    Jn.prototype.render = yf.prototype.render = function (l) { var t = this._internalRoot; if (t === null)
        throw Error(m(409)); var e = t.current, a = ct(); r0(e, a, l, t, null, null); }, Jn.prototype.unmount = yf.prototype.unmount = function () { var l = this._internalRoot; if (l !== null) {
        this._internalRoot = null;
        var t = l.containerInfo;
        r0(l.current, 2, null, l, null, null), _n(), t[Je] = null;
    } };
    function Jn(l) { this._internalRoot = l; }
    Jn.prototype.unstable_scheduleHydration = function (l) { if (l) {
        var t = jf();
        l = { blockedOn: null, target: l, priority: t };
        for (var e = 0; e < pe.length && t !== 0 && t < pe[e].priority; e++)
            ;
        pe.splice(e, 0, l), e === 0 && z0(l);
    } };
    var T0 = B.version;
    if (T0 !== "19.2.6")
        throw Error(m(527, T0, "19.2.6"));
    _.findDOMNode = function (l) { var t = l._reactInternals; if (t === void 0)
        throw typeof l.render == "function" ? Error(m(188)) : (l = Object.keys(l).join(","), Error(m(268, l))); return l = z(t), l = l !== null ? G(l) : null, l = l === null ? null : l.stateNode, l; };
    var ar = { bundleType: 0, version: "19.2.6", rendererPackageName: "react-dom", currentDispatcherRef: p, reconcilerVersion: "19.2.6" };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var wn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!wn.isDisabled && wn.supportsFiber)
            try {
                ja = wn.inject(ar), Pl = wn;
            }
            catch { }
    }
    return xu.createRoot = function (l, t) { if (!x(l))
        throw Error(m(299)); var e = !1, a = "", u = Uo, n = jo, i = Ho; return t != null && (t.unstable_strictMode === !0 && (e = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = h0(l, 1, !1, null, null, e, a, null, u, n, i, E0), l[Je] = t.current, wc(l), new yf(t); }, xu.hydrateRoot = function (l, t, e) { if (!x(l))
        throw Error(m(299)); var a = !1, u = "", n = Uo, i = jo, c = Ho, f = null; return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (u = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.formState !== void 0 && (f = e.formState)), t = h0(l, 1, !0, t, e ?? null, a, u, f, n, i, c, E0), t.context = y0(null), e = t.current, a = ct(), a = ei(a), u = ie(a), u.callback = null, ce(e, u, a), e = a, t.current.lanes = e, Ca(t, e), Nt(t), l[Je] = t.current, wc(l), new Jn(t); }, xu.version = "19.2.6", xu;
}
var C0;
function yr() { if (C0)
    return vf.exports; C0 = 1; function b() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b);
    }
    catch (B) {
        console.error(B);
    } } return b(), vf.exports = hr(), vf.exports; }
var rr = yr();
const Q = { bg: "#F7F0F2", grid: "#E8DDE1", ground: "#D4C4CC", outline: "#2D3846", body: "#51404A", bodyDark: "#51404A", bodyLight: "#51404A", label: "#62575D", amber: "#F59E0B", accent: "#A78BFA" }, Ou = "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace", _u = 322;
function Ve({ head: b, limbs: B, front: C = [], torso: T }) { return h.jsxs("g", { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", children: [B.map((x, j) => h.jsx("path", { d: x.d, stroke: Q.outline, strokeWidth: x.w + 4 }, `o${j}`)), T && h.jsx("path", { d: T, fill: Q.body, stroke: Q.outline, strokeWidth: "3.2", strokeLinejoin: "round" }), B.map((x, j) => h.jsx("path", { d: x.d, stroke: x.tone ?? Q.body, strokeWidth: x.w }, `f${j}`)), B.map((x, j) => h.jsx("path", { d: x.d, stroke: "url(#figure-dots)", strokeWidth: Math.max(4, x.w - 1) }, `d${j}`)), T && h.jsx("path", { d: T, fill: "url(#figure-dots)", stroke: "none" }), h.jsx("circle", { cx: b.cx, cy: b.cy, r: "15.5", fill: Q.body, stroke: Q.outline, strokeWidth: "2.2", strokeDasharray: "2 2.5" }), h.jsx("circle", { cx: b.cx, cy: b.cy, r: "13.5", fill: "url(#figure-dots)", stroke: "none" }), C.map((x, j) => h.jsx("path", { d: x.d, stroke: Q.outline, strokeWidth: x.w + 4 }, `fo${j}`)), C.map((x, j) => h.jsx("path", { d: x.d, stroke: x.tone ?? Q.bodyLight, strokeWidth: x.w }, `ff${j}`)), C.map((x, j) => h.jsx("path", { d: x.d, stroke: "url(#figure-dots)", strokeWidth: Math.max(4, x.w - 1) }, `fd${j}`))] }); }
function R0(b) { return { head: { cx: b, cy: 307 }, torso: `M ${b - 129} 297 Q ${b - 122} 292 ${b - 112} 295 L ${b - 21} 295 Q ${b - 8} 296 ${b - 8} 307 Q ${b - 8} 319 ${b - 21} 321 L ${b - 122} 321 Q ${b - 136} 321 ${b - 136} 309 Q ${b - 136} 301 ${b - 129} 297 Z`, limbs: [{ d: `M ${b - 122} 312 L ${b - 218} 312`, w: 22, tone: Q.bodyDark }] }; }
function mr(b) { return { head: { cx: b, cy: 306 }, torso: `M ${b - 129} 296 Q ${b - 121} 292 ${b - 112} 294 L ${b - 21} 294 Q ${b - 8} 295 ${b - 8} 307 Q ${b - 8} 319 ${b - 21} 321 L ${b - 122} 321 Q ${b - 136} 320 ${b - 136} 308 Q ${b - 136} 300 ${b - 129} 296 Z`, limbs: [{ d: `M ${b - 120} 313 L ${b - 206} 314`, w: 18, tone: Q.bodyDark }, { d: `M ${b - 118} 302 L ${b - 162} 274 L ${b - 204} 311`, w: 17, tone: Q.bodyDark }], front: [{ d: `M ${b - 40} 302 L ${b - 62} 282 L ${b - 24} 286`, w: 11 }] }; }
function Af(b, B = []) { return { head: { cx: b - 12, cy: 198 }, torso: `M ${b - 25} 221 Q ${b - 11} 214 ${b + 1} 221 L ${b + 23} 264 Q ${b + 27} 271 ${b + 16} 276 L ${b} 279 Q ${b - 7} 274 ${b - 10} 266 L ${b - 26} 235 Q ${b - 30} 227 ${b - 25} 221 Z`, limbs: [{ d: `M ${b + 8} 270 L ${b + 8} 313 L ${b + 60} 315`, w: 16, tone: Q.bodyDark }, { d: `M ${b + 6} 270 L ${b - 8} 313 L ${b + 46} 314`, w: 16 }], front: B.map(C => ({ d: C, w: 13 })) }; }
function vr(b, B) { return { head: { cx: b, cy: 164 }, torso: `M ${b - 17} 181 Q ${b} 173 ${b + 17} 181 L ${b + 19} 253 Q ${b} 263 ${b - 19} 253 Z`, limbs: [{ d: `M ${b + 8} 258 L ${b + 9} 316`, w: 14, tone: Q.bodyDark }, { d: `M ${b - 6} 258 L ${b - 7} 316`, w: 14 }], front: B.map(C => ({ d: C, w: 13 })) }; }
function Mu({ x: b, y: B, scale: C = 1, rotate: m = 0, label: x = !1, muted: j = !1, pressed: K = !1 }) { const il = j ? "#C08497" : Q.amber, N = j ? "#8C7182" : "#D97706", z = j ? "#62575D" : "#FBBF24", G = K ? -16 : 0, nozzlePath = "M -6 5 C -4 0, 4 0, 6 5 C 7 22, 11 36, 17 44 L 41 44 C 45 44, 47 47, 46 51 C 44 57, 36 57, 29 54 C 22 52, 19 55, 18 60 L -18 60 C -19 55, -22 52, -29 54 C -36 57, -44 57, -46 51 C -47 47, -45 44, -41 44 L -17 44 C -11 36, -7 22, -6 5 Z"; return h.jsxs("g", { transform: `translate(${b} ${B}) rotate(${m}) scale(${C})`, children: [h.jsxs("g", { transform: `translate(0 ${G})`, children: [h.jsx("rect", { x: "-9", y: "110", width: "18", height: "24", rx: "2", fill: il, stroke: Q.bg, strokeWidth: "1.2" }), h.jsx("rect", { x: "-5", y: "112", width: "4", height: "20", fill: z, opacity: "0.6" }), h.jsx("rect", { x: "-13", y: "131", width: "26", height: "7", rx: "3", fill: il, stroke: Q.bg, strokeWidth: "1.2" })] }), h.jsx("rect", { x: "-17", y: "59", width: "34", height: "54", rx: "3", fill: "#E2E8F0", stroke: Q.bg, strokeWidth: "1.4" }), h.jsx("rect", { x: "7", y: "60", width: "9", height: "52", fill: "#CBD5E1" }), h.jsx("rect", { x: "-16.5", y: "77", width: "33", height: "24", fill: il }), h.jsx("rect", { x: "-16.5", y: "77", width: "33", height: "4", fill: N }), x && h.jsxs(h.Fragment, { children: [h.jsx("text", { x: "0", y: "92", fill: Q.bg, fontFamily: Ou, fontSize: "8", fontWeight: "bold", textAnchor: "middle", children: "4 mg" }), h.jsx("text", { x: "0", y: "72", fill: "#000000", fontFamily: Ou, fontSize: "5.6", fontWeight: "bold", textAnchor: "middle", children: "NALOXONE" })] }), h.jsx("path", { d: nozzlePath, fill: "#FFFFFF", stroke: Q.outline, strokeWidth: "1.4", strokeLinejoin: "round" }), h.jsx("path", { d: nozzlePath, fill: "url(#figure-dots)", stroke: "none" })] }); }
function Na({ cx: b, cy: B, r: C }) { return h.jsx("circle", { cx: b, cy: B, r: C, fill: "url(#amber-glow)" }); }
function Ee({ x: b, y: B, children: C, amber: m = !1, size: x = 11, anchor: j = "middle" }) { return h.jsx("text", { x: b, y: B, fill: m ? Q.accent : Q.label, fontFamily: Ou, fontSize: x, fontWeight: m ? 700 : 400, textAnchor: j, letterSpacing: "0.08em", children: C }); }
const ft = 336, vl = 380;
function gr() { const B = R0(ft), C = Af(vl, [`M ${vl - 12} 232 L ${vl - 34} 262 L ${ft - 14} 296`, `M ${vl - 8} 232 L ${vl + 30} 250 L ${vl + 36} 222`]), m = vr(650, ["M 656 198 L 660 238", "M 644 198 L 624 226 L 606 224"]); return h.jsxs("g", { className: "scene-anim", children: [h.jsx(Ve, { ...B }), h.jsx(Ee, { x: ft - 72, y: 284, children: "Not responding" }), h.jsx(Ve, { ...C }), h.jsx(Na, { cx: vl + 38, cy: 209, r: 44 }), h.jsx("rect", { x: vl + 28, y: 194, width: "17", height: "30", rx: "4", fill: Q.bg, stroke: Q.accent, strokeWidth: "1.8" }), h.jsx("rect", { x: vl + 31, y: 198, width: "11", height: "20", rx: "2", fill: Q.accent }), h.jsxs("g", { stroke: Q.accent, strokeWidth: "1.6", fill: "none", strokeLinecap: "round", children: [h.jsx("path", { d: `M ${vl + 51} 203 A 8 8 0 0 1 ${vl + 51} 215` }), h.jsx("path", { d: `M ${vl + 57} 198 A 14 14 0 0 1 ${vl + 57} 220`, opacity: "0.6" })] }), h.jsx(Ee, { x: vl + 70, y: 214, amber: !0, size: 15, anchor: "start", children: "911" }), h.jsx(Ve, { ...m }), h.jsx(Na, { cx: 606, cy: 222, r: 36 }), h.jsx(Mu, { x: 606, y: 192, scale: .36 }), h.jsx(Ee, { x: 606, y: 178, amber: !0, children: "NALOXONE" })] }); }
function Sr() { const b = R0(ft), B = .7, C = 420, m = Af(C, [`M ${C - 8} 234 L ${C - 28} 268 L ${ft + 28} 298`, `M ${C - 12} 232 L ${C - 30} 222 L ${ft + 13} 206`]), x = 520, j = 606, K = 84, il = 1.25, N = [["Nozzle", "into one nostril", j + 8, K + 20 * il, 104], ["Finger wings", "fingers either side", j + 56, K + 50 * il, 148], ["One dose", "don't test or prime", j + 21, K + 90 * il, 194], ["Plunger", "thumb presses firmly", j + 15, K + 124 * il, 240]]; return h.jsxs("g", { className: "scene-anim", children: [h.jsx(Ve, { ...b }), h.jsx(Na, { cx: ft + 9, cy: 240, r: 60 }), h.jsx(Ve, { ...m }), h.jsx(Mu, { x: ft + 9, y: 289, scale: B, rotate: 180 }), h.jsx("rect", { x, y: 36, width: 364, height: 264, rx: "12", fill: "#FBF7F8", stroke: "#CDBAC3", strokeWidth: "1.2" }), h.jsx(Ee, { x: x + 20, y: 62, size: 10.5, anchor: "start", children: "NALOXONE NASAL SPRAY" }), h.jsx(Na, { cx: j, cy: 170, r: 96 }), h.jsx(Mu, { x: j, y: K, scale: il, label: !0 }), h.jsx("g", { stroke: Q.accent, strokeWidth: "1", strokeDasharray: "2 3", opacity: "0.8", children: N.map(([, , z, G, H], el) => h.jsx("line", { x1: z, y1: G, x2: x + 170, y2: H }, el)) }), N.map(([z, G, , , H], el) => h.jsxs("g", { children: [h.jsx("circle", { cx: x + 170, cy: H, r: "2.5", fill: Q.accent }), h.jsx("text", { x: x + 182, y: H - 1, fill: "#1A1719", fontFamily: Ou, fontSize: "12", fontWeight: "bold", children: z }), h.jsx("text", { x: x + 182, y: H + 13, fill: Q.label, fontFamily: Ou, fontSize: "10.5", children: G })] }, el))] }); }
function br() { const b = mr(ft), B = Af(vl, [`M ${vl - 12} 232 L ${vl - 34} 262 L ${ft - 14} 296`, `M ${vl - 8} 232 L ${vl + 30} 250 L ${vl + 36} 222`]); return h.jsxs("g", { className: "scene-anim", children: [h.jsx(Ve, { ...b }), h.jsx(Ee, { x: ft - 100, y: 252, children: "On their side" }), h.jsx(Ve, { ...B }), h.jsx(Na, { cx: vl + 38, cy: 222, r: 40 }), h.jsx(Mu, { x: vl + 38, y: 192, scale: .36 }), h.jsx(Ee, { x: vl + 38, y: 178, amber: !0, children: "NEW DEVICE" }), h.jsx(Mu, { x: 545, y: 308, scale: .3, rotate: 90, muted: !0, pressed: !0 }), h.jsx(Ee, { x: 522, y: 284, children: "Used" }), h.jsxs("g", { children: [h.jsxs("g", { stroke: Q.accent, strokeWidth: "1.5", opacity: "0.6", strokeLinecap: "round", children: [h.jsx("line", { x1: "596", y1: "300", x2: "622", y2: "300" }), h.jsx("line", { x1: "584", y1: "282", x2: "614", y2: "282", strokeDasharray: "3 4" })] }), h.jsx("rect", { x: "700", y: "228", width: "160", height: "80", rx: "6", fill: "#F7F0F2", stroke: Q.outline, strokeWidth: "1.5" }), h.jsx("rect", { x: "700", y: "228", width: "160", height: "80", rx: "6", fill: "url(#figure-dots)" }), h.jsx("path", { d: "M 640 308 L 640 272 L 660 246 L 700 246 L 700 308 Z", fill: "#F7F0F2", stroke: Q.outline, strokeWidth: "1.5", strokeLinejoin: "round" }), h.jsx("path", { d: "M 650 272 L 664 252 L 694 252 L 694 272 Z", fill: "#E8DDE1" }), h.jsx("rect", { x: "640", y: "284", width: "220", height: "6", fill: Q.accent, opacity: "0.85" }), h.jsxs("g", { transform: "translate(780 256)", fill: Q.accent, children: [h.jsx("rect", { x: "-4", y: "-13", width: "8", height: "26", rx: "2" }), h.jsx("rect", { x: "-13", y: "-4", width: "26", height: "8", rx: "2" })] }), h.jsx("circle", { cx: "670", cy: "308", r: "13", fill: Q.bg, stroke: Q.outline, strokeWidth: "3" }), h.jsx("circle", { cx: "816", cy: "308", r: "13", fill: Q.bg, stroke: Q.outline, strokeWidth: "3" }), h.jsx(Na, { cx: 680, cy: 238, r: 34 }), h.jsx("rect", { x: "670", y: "238", width: "20", height: "8", rx: "3", fill: Q.accent }), h.jsx(Ee, { x: 780, y: 216, children: "EMS ARRIVING" })] })] }); }
function zr({ step: b }) { return h.jsxs("svg", { className: "scene-svg", viewBox: "0 0 920 360", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", children: [h.jsxs("defs", { children: [h.jsx("pattern", { id: "arch-dots", width: "18", height: "18", patternUnits: "userSpaceOnUse", children: h.jsx("circle", { cx: "2", cy: "2", r: "1", fill: Q.grid }) }), h.jsx("pattern", { id: "figure-dots", width: "6", height: "6", patternUnits: "userSpaceOnUse", children: h.jsx("circle", { cx: "1.5", cy: "1.5", r: "1.1", fill: "#B58D9D", opacity: "0.5" }) }), h.jsxs("radialGradient", { id: "amber-glow", cx: "50%", cy: "50%", r: "50%", children: [h.jsx("stop", { offset: "0%", stopColor: "#A78BFA", stopOpacity: "0.32" }), h.jsx("stop", { offset: "100%", stopColor: "#A78BFA", stopOpacity: "0" })] })] }), h.jsx("rect", { width: "920", height: "360", fill: Q.bg }), h.jsx("rect", { width: "920", height: "360", fill: "url(#arch-dots)" }), h.jsx("line", { x1: "36", y1: _u, x2: "884", y2: _u, stroke: Q.ground, strokeWidth: "1.5" }), h.jsx("g", { stroke: Q.ground, strokeWidth: "1", children: Array.from({ length: 22 }, (B, C) => 60 + C * 40).map(B => h.jsx("line", { x1: B, y1: _u, x2: B, y2: _u + 6 }, B)) }), h.jsxs("g", { opacity: "0.9", children: [h.jsx("line", { x1: "76", y1: _u, x2: "76", y2: "170", stroke: "#2D3846", strokeWidth: "2" }), h.jsx("line", { x1: "76", y1: "226", x2: "94", y2: "206", stroke: "#2D3846", strokeWidth: "1.5" }), h.jsx("line", { x1: "76", y1: "246", x2: "58", y2: "226", stroke: "#2D3846", strokeWidth: "1.5" }), h.jsx("circle", { cx: "76", cy: "146", r: "38", fill: "url(#figure-dots)", stroke: "#2D3846", strokeWidth: "1", strokeDasharray: "2 3" })] }), b === 0 && h.jsx(gr, {}), b === 1 && h.jsx(Sr, {}), b === 2 && h.jsx(br, {})] }); }
const $n = [
    {
        "name": "Notice",
        "title": "They won't wake up.",
        "scene": "After school, your friend is slumped near the courtyard. You shout their name and shake their shoulder, but they don't respond. Their breathing is slow and unusual. Nobody knows what happened.",
        "question": "What should you do first?",
        "imageAlt": "A friend lies unresponsive on the ground. One student kneels beside them with a hand on their shoulder and calls 911 on a phone. Another student stands nearby holding a naloxone nasal spray.",
        "answers": [
            {
                "text": "Ask nearby people whether they saw what happened before you decide whether 911 is needed.",
                "correct": false,
                "feedback": "Don't wait. Someone who can't be woken up and is breathing slowly may be overdosing. Opioids can slow or stop breathing, and a lack of oxygen can cause brain damage or death. If you aren't sure, treat it as an emergency."
            },
            {
                "text": "Treat it as an emergency: call 911 and ask whether anyone nearby has naloxone.",
                "correct": true,
                "feedback": "You don't need to know the cause to act. If other people are there, call 911 and get naloxone at the same time. Signs of an opioid overdose include not waking up, slow or stopped breathing, gurgling sounds, and blue or gray lips."
            },
            {
                "text": "Try to sit them upright and watch for a minute to see whether their breathing improves before calling.",
                "correct": false,
                "feedback": "Don't delay the emergency call or sit an unresponsive person upright. Not waking up and slow or unusual breathing are enough reason to call 911 and get naloxone."
            }
        ],
        "resource": {
            "label": "Emergency",
            "title": "Call 911",
            "phone": "911",
            "body": "Say where you are and that someone isn't responding or breathing normally. Stay on the line and follow the call-taker's instructions.",
            "note": "Calling is protected: under California Health & Safety Code §11376.5, it isn't a crime to be under the influence of, or to possess drugs for personal use, if you seek medical help for an overdose in good faith. It doesn't cover selling drugs."
        }
    },
    {
        "name": "Respond",
        "title": "Naloxone is here.",
        "scene": "Someone is on the phone with 911, and a student hands you a naloxone nasal spray. Your friend still isn't responding.",
        "question": "What's the best next step?",
        "imageAlt": "A student kneels by the friend's head, supporting it, and holds a naloxone nasal spray with the nozzle at one nostril. A diagram labels the nozzle, finger wings, single-dose barrel, and plunger.",
        "answers": [
            {
                "text": "Lay them on their back, tilt their head back, put the nozzle in one nostril, and press the plunger firmly.",
                "correct": true,
                "feedback": "That matches the device instructions. Push the nozzle in until your fingers are against the bottom of their nose, then press the plunger firmly. Each device is one dose, so don't test or prime it. Naloxone is safe to give even if you're not sure opioids are involved. It has no effect if they aren't."
            },
            {
                "text": "Wait for an adult to arrive and take the lead before using the spray.",
                "correct": false,
                "feedback": "Don't wait. Naloxone is made to be used by anyone, including students, and it's safe if opioids aren't involved. You can ask someone to find an adult while you act."
            },
            {
                "text": "Give the spray now, then ask the caller to cancel 911 if your friend begins responding.",
                "correct": false,
                "feedback": "Naloxone doesn't replace emergency care. It's temporary, and the overdose can return after it wears off, so paramedics still need to come. Keep 911 on the line while you give it."
            }
        ],
        "resource": {
            "label": "Free naloxone",
            "title": "Get naloxone in Alameda County",
            "body": "Naloxone is free and over the counter. You don't need a prescription, ID, or insurance to carry it. Alameda County Health shares where to find free naloxone stand boxes in public places, plus rescue training for the public and youth.",
            "links": [
                {
                    "text": "Naloxone information (Alameda County Health)",
                    "url": "https://health.alamedacountyca.gov/opioid-treatment-and-support/"
                },
                {
                    "text": "Rescue training (NCAPDA)",
                    "url": "https://ncapda.org/naloxone-overdose-rescue-training/"
                }
            ]
        }
    },
    {
        "name": "Stay",
        "title": "Don't leave them alone.",
        "scene": "You gave the naloxone about two minutes ago. Your friend is breathing, but slowly, and still hasn't woken up. 911 says an ambulance is on the way.",
        "question": "What should you do while you wait?",
        "imageAlt": "The friend lies on their side in the recovery position. The student stays beside them holding a second, new naloxone device. The used first device lies on the ground, and an ambulance arrives.",
        "answers": [
            {
                "text": "If they start waking, lay them flat on their back and step away briefly to meet the responders.",
                "correct": false,
                "feedback": "Stay with them and keep them on their side. Naloxone's effects can wear off, and even if they wake up, they should be checked by medical professionals until help arrives."
            },
            {
                "text": "If they don't improve right away, use another spray from the same device before waiting.",
                "correct": false,
                "feedback": "Each nasal spray is single-use. Wait 2–3 minutes, keep 911 on the line, and if they still aren't responding, use a new device in the other nostril. Some overdoses need more than one dose."
            },
            {
                "text": "Stay, roll them onto their side, and follow 911's directions. If they still aren't responding after 2–3 minutes, give a second dose from a new device in the other nostril.",
                "correct": true,
                "feedback": "Lying on their side helps keep their airway clear. Each device holds one dose, so a second dose needs a new device, in the other nostril. If they stop breathing, follow the 911 call-taker's instructions, which may include rescue breathing or CPR. Stay until paramedics take over."
            }
        ],
        "resource": {
            "label": "Support, not an emergency",
            "title": "First Step, Alameda County",
            "phone": "1-800-491-9099",
            "body": "Call or text any time to talk with a licensed clinician about mental health and substance use support, for yourself or someone you know. First Step is for screening and referrals, not crises. In a crisis, call or text 988, or call 911.",
            "links": [
                {
                    "text": "About First Step",
                    "url": "https://health.alamedacountyca.gov/division/first-step/"
                }
            ]
        }
    }
], pr = [{ name: "CDC: What to Do If You Think Someone Is Overdosing", url: "https://www.cdc.gov/stop-overdose/response/index.html", used: "The overall sequence: naloxone and 911, keep them awake and breathing, lay them on their side, stay until help arrives." }, { name: "CDC: Naloxone FAQ", url: "https://www.cdc.gov/stop-overdose/naloxone-faq/", used: "Naloxone works within 2–3 minutes; wait 2–3 minutes before a second dose." }, { name: "FDA label and Instructions for Use: NARCAN Nasal Spray (DailyMed)", url: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=784a0e98-c2d6-f845-e053-2991aa0ac4b4", used: "Device steps: lay on back, tilt head, nozzle in one nostril, press firmly, no priming or testing; recovery position; second dose from a new device in the other nostril." }, { name: "CDC/NIOSH: Naloxone use in a suspected overdose", url: "https://www.cdc.gov/niosh/substance-use/fentanyl-emergency-responders/operating-procedures.html", used: "Naloxone effects are temporary; rescue breathing or CPR if trained." }, { name: "NYS Department of Health: How to Inject Naloxone", url: "https://www.health.ny.gov/publications/12028a.pdf", used: "Checking for a response (shout, shake) and signs such as gurgling sounds and blue or gray lips." }, { name: "Alameda County Health: Opioid Treatment and Support", url: "https://health.alamedacountyca.gov/opioid-treatment-and-support/", used: "Naloxone is free and over the counter; stand boxes; training for the public and youth." }, { name: "Alameda County Health: First Step", url: "https://health.alamedacountyca.gov/division/first-step/", used: "Phone number, hours, and that it is not a crisis line." }, { name: "California Health & Safety Code §11376.5", url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=11376.5.", used: "911 Good Samaritan protection for personal-use possession and being under the influence." }];


// Shared top-level bindings used by the extracted app components.
export {
  rf,
  Tu,
  x0,
  nr,
  _0,
  ir,
  h,
  mf,
  X,
  O0,
  cr,
  M0,
  pf,
  zf,
  vf,
  xu,
  gf,
  Sf,
  D0,
  fr,
  N0,
  sr,
  bf,
  Rl,
  U0,
  or,
  j0,
  dr,
  H0,
  hr,
  C0,
  yr,
  rr,
  Q,
  Ou,
  _u,
  Ve,
  R0,
  mr,
  Af,
  vr,
  Mu,
  Na,
  Ee,
  ft,
  vl,
  gr,
  Sr,
  br,
  zr,
  $n,
  pr
};
