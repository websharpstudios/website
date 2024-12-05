/**handles:websharp_main**/
(() => {
  var e = !1,
    t = !1,
    n = [],
    r = -1,
    O,
    d,
    f,
    i;
  function o(e) {
    a(e);
  }
  function a(e) {
    n.includes(e) || n.push(e), s();
  }
  function k(e) {
    var e = n.indexOf(e);
    -1 !== e && r < e && n.splice(e, 1);
  }
  function s() {
    t || e || ((e = !0), queueMicrotask(l));
  }
  function l() {
    t = !(e = !1);
    for (let e = 0; e < n.length; e++) n[e](), (r = e);
    (n.length = 0), (t = !(r = -1));
  }
  var u = !0;
  function c(e) {
    (u = !1), e(), (u = !0);
  }
  function p(t) {
    (O = t.reactive),
      (f = t.release),
      (d = (e) =>
        t.effect(e, {
          scheduler: (e) => {
            u ? o(e) : e();
          },
        })),
      (i = t.raw);
  }
  function _(e) {
    d = e;
  }
  function h(n) {
    let r = () => {};
    var e;
    return [
      (e) => {
        let t = d(e);
        return (
          n._x_effects ||
            ((n._x_effects = new Set()),
            (n._x_runEffects = () => {
              n._x_effects.forEach((e) => e());
            })),
          n._x_effects.add(t),
          (r = () => {
            void 0 !== t && (n._x_effects.delete(t), f(t));
          }),
          t
        );
      },
      () => {
        r();
      },
    ];
  }
  var v = [],
    m = [],
    g = [];
  function x(e) {
    g.push(e);
  }
  function y(e, t) {
    'function' == typeof t
      ? (e._x_cleanups || (e._x_cleanups = []), e._x_cleanups.push(t))
      : m.push((t = e));
  }
  function b(e) {
    v.push(e);
  }
  function w(e, t, n) {
    e._x_attributeCleanups || (e._x_attributeCleanups = {}),
      e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []),
      e._x_attributeCleanups[t].push(n);
  }
  function E(n, r) {
    n._x_attributeCleanups &&
      Object.entries(n._x_attributeCleanups).forEach(([e, t]) => {
        (void 0 !== r && !r.includes(e)) ||
          (t.forEach((e) => e()), delete n._x_attributeCleanups[e]);
      });
  }
  var S = new MutationObserver(D),
    A = !1;
  function $() {
    S.observe(document, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeOldValue: !0,
    }),
      (A = !0);
  }
  function j() {
    T(), S.disconnect(), (A = !1);
  }
  var C = [],
    L = !1;
  function T() {
    (C = C.concat(S.takeRecords())).length &&
      !L &&
      ((L = !0),
      queueMicrotask(() => {
        N(), (L = !1);
      }));
  }
  function N() {
    D(C), (C.length = 0);
  }
  function M(e) {
    if (!A) return e();
    j();
    var e = e();
    return $(), e;
  }
  var P = !1,
    R = [];
  function I() {
    P = !0;
  }
  function q() {
    (P = !1), D(R), (R = []);
  }
  function D(s) {
    if (P) R = R.concat(s);
    else {
      let r = [],
        i = [],
        o = new Map(),
        a = new Map();
      for (let n = 0; n < s.length; n++)
        if (
          !s[n].target._x_ignoreMutationObserver &&
          ('childList' === s[n].type &&
            (s[n].addedNodes.forEach((e) => 1 === e.nodeType && r.push(e)),
            s[n].removedNodes.forEach((e) => 1 === e.nodeType && i.push(e))),
          'attributes' === s[n].type)
        ) {
          let e = s[n].target,
            t = s[n].attributeName;
          var l = s[n].oldValue,
            u = () => {
              o.has(e) || o.set(e, []),
                o.get(e).push({ name: t, value: e.getAttribute(t) });
            },
            c = () => {
              a.has(e) || a.set(e, []), a.get(e).push(t);
            };
          e.hasAttribute(t) && null === l
            ? u()
            : e.hasAttribute(t)
            ? (c(), u())
            : c();
        }
      a.forEach((e, t) => {
        E(t, e);
      }),
        o.forEach((t, n) => {
          v.forEach((e) => e(n, t));
        });
      for (let t of i)
        if (!r.includes(t) && (m.forEach((e) => e(t)), t._x_cleanups))
          for (; t._x_cleanups.length; ) t._x_cleanups.pop()();
      r.forEach((e) => {
        (e._x_ignoreSelf = !0), (e._x_ignore = !0);
      });
      for (let t of r)
        i.includes(t) ||
          (t.isConnected &&
            (delete t._x_ignoreSelf,
            delete t._x_ignore,
            g.forEach((e) => e(t)),
            (t._x_ignore = !0),
            (t._x_ignoreSelf = !0)));
      r.forEach((e) => {
        delete e._x_ignoreSelf, delete e._x_ignore;
      }),
        (r = null),
        (i = null),
        (o = null),
        (a = null);
    }
  }
  function z(e) {
    return W(U(e));
  }
  function B(e, t, n) {
    return (
      (e._x_dataStack = [t, ...U(n || e)]),
      () => {
        e._x_dataStack = e._x_dataStack.filter((e) => e !== t);
      }
    );
  }
  function F(e, t) {
    let n = e._x_dataStack[0];
    Object.entries(t).forEach(([e, t]) => {
      n[e] = t;
    });
  }
  function U(e) {
    return (
      e._x_dataStack ||
      ('function' == typeof ShadowRoot && e instanceof ShadowRoot
        ? U(e.host)
        : e.parentNode
        ? U(e.parentNode)
        : [])
    );
  }
  function W(o) {
    let a = new Proxy(
      {},
      {
        ownKeys: () => Array.from(new Set(o.flatMap((e) => Object.keys(e)))),
        has: (e, t) => o.some((e) => e.hasOwnProperty(t)),
        get: (e, i) =>
          (o.find((n) => {
            if (n.hasOwnProperty(i)) {
              var r = Object.getOwnPropertyDescriptor(n, i);
              if (
                (r.get && r.get._x_alreadyBound) ||
                (r.set && r.set._x_alreadyBound)
              )
                return !0;
              if ((r.get || r.set) && r.enumerable) {
                let e = r.get,
                  t = r.set;
                var r = r;
                (e = e && e.bind(a)),
                  (t = t && t.bind(a)),
                  e && (e._x_alreadyBound = !0),
                  t && (t._x_alreadyBound = !0),
                  Object.defineProperty(n, i, { ...r, get: e, set: t });
              }
              return !0;
            }
            return !1;
          }) || {})[i],
        set: (e, t, n) => {
          let r = o.find((e) => e.hasOwnProperty(t));
          return r ? (r[t] = n) : (o[o.length - 1][t] = n), !0;
        },
      }
    );
    return a;
  }
  function H(o) {
    let a = (e) => 'object' == typeof e && !Array.isArray(e) && null !== e,
      s = (r, i = '') => {
        Object.entries(Object.getOwnPropertyDescriptors(r)).forEach(
          ([e, { value: t, enumerable: n }]) => {
            var n;
            !1 !== n &&
              void 0 !== t &&
              ((n = '' === i ? e : `${i}.${e}`),
              'object' == typeof t && null !== t && t._x_interceptor
                ? (r[e] = t.initialize(o, n, e))
                : !a(t) || t === r || t instanceof Element || s(t, n));
          }
        );
      };
    return s(o);
  }
  function K(r, e = () => {}) {
    let a = {
      initialValue: void 0,
      _x_interceptor: !0,
      initialize(t, n, e) {
        return r(
          this.initialValue,
          () => V(t, n),
          (e) => Y(t, n, e),
          n,
          e
        );
      },
    };
    return (
      e(a),
      (o) => {
        if ('object' == typeof o && null !== o && o._x_interceptor) {
          let i = a.initialize.bind(a);
          a.initialize = (e, t, n) => {
            var r = o.initialize(e, t, n);
            return (a.initialValue = r), i(e, t, n);
          };
        } else a.initialValue = o;
        return a;
      }
    );
  }
  function V(e, t) {
    return t.split('.').reduce((e, t) => e[t], e);
  }
  function Y(e, t, n) {
    if (1 !== (t = 'string' == typeof t ? t.split('.') : t).length) {
      if (0 === t.length) throw error;
      return e[t[0]] || (e[t[0]] = {}), Y(e[t[0]], t.slice(1), n);
    }
    e[t[0]] = n;
  }
  var J = {};
  function Z(e, t) {
    J[e] = t;
  }
  function G(t, r) {
    return (
      Object.entries(J).forEach(([e, n]) => {
        Object.defineProperty(t, `$${e}`, {
          get() {
            var [e, t] = Ee(r),
              e = { interceptor: K, ...e };
            return y(r, t), n(r, e);
          },
          enumerable: !1,
        });
      }),
      t
    );
  }
  function Q(t, n, e, ...r) {
    try {
      return e(...r);
    } catch (e) {
      X(e, t, n);
    }
  }
  function X(e, t, n = void 0) {
    Object.assign(e, { el: t, expression: n }),
      console.warn(
        `Alpine Expression Error: ${e.message}

${n ? 'Expression: "' + n + '"\n\n' : ''}`,
        t
      ),
      setTimeout(() => {
        throw e;
      }, 0);
  }
  var ee = !0;
  function te(e) {
    var t = ee;
    (ee = !1), e(), (ee = t);
  }
  function ne(e, t, n = {}) {
    let r;
    return re(e, t)((e) => (r = e), n), r;
  }
  function re(...e) {
    return ie(...e);
  }
  var ie = ae;
  function oe(e) {
    ie = e;
  }
  function ae(e, t) {
    var n = {};
    G(n, e);
    var n = [n, ...U(e)],
      n = 'function' == typeof t ? se(n, t) : ce(n, t, e);
    return Q.bind(null, e, t, n);
  }
  function se(i, o) {
    return (e = () => {}, { scope: t = {}, params: n = [] } = {}) => {
      var r;
      de(e, o.apply(W([t, ...i]), n));
    };
  }
  var le = {};
  function ue(t, n) {
    if (le[t]) return le[t];
    let e = Object.getPrototypeOf(async function () {}).constructor,
      r =
        /^[\n\s]*if.*\(.*\)/.test(t) || /^(let|const)\s/.test(t)
          ? `(async()=>{ ${t} })()`
          : t;
    var i,
      o = (() => {
        try {
          return new e(
            ['__self', 'scope'],
            `with (scope) { __self.result = ${r} }; __self.finished = true; return __self.result;`
          );
        } catch (e) {
          return X(e, n, t), Promise.resolve();
        }
      })();
    return (le[t] = o);
  }
  function ce(i, o, a) {
    let s = ue(o, a);
    return (t = () => {}, { scope: e = {}, params: n = [] } = {}) => {
      (s.result = void 0), (s.finished = !1);
      let r = W([e, ...i]);
      if ('function' == typeof s) {
        let e = s(s, r).catch((e) => X(e, a, o));
        s.finished
          ? (de(t, s.result, r, n, a), (s.result = void 0))
          : e
              .then((e) => {
                de(t, e, r, n, a);
              })
              .catch((e) => X(e, a, o))
              .finally(() => (s.result = void 0));
      }
    };
  }
  function de(t, n, r, i, o) {
    if (ee && 'function' == typeof n) {
      let e = n.apply(r, i);
      e instanceof Promise
        ? e.then((e) => de(t, e, r, i)).catch((e) => X(e, o, n))
        : t(e);
    } else
      'object' == typeof n && n instanceof Promise ? n.then((e) => t(e)) : t(n);
  }
  var fe = 'x-';
  function pe(e = '') {
    return fe + e;
  }
  function _e(e) {
    fe = e;
  }
  var he = {};
  function ve(t, e) {
    return (
      (he[t] = e),
      {
        before(e) {
          var e;
          he[e]
            ? ((e = Me.indexOf(e)),
              Me.splice(0 <= e ? e : Me.indexOf('DEFAULT'), 0, t))
            : console.warn(
                'Cannot find directive `${directive}`. `${name}` will use the default order of execution'
              );
        },
      }
    );
  }
  function me(t, r, e) {
    if (((r = Array.from(r)), t._x_virtualDirectives)) {
      let e = Object.entries(t._x_virtualDirectives).map(([e, t]) => ({
          name: e,
          value: t,
        })),
        n = ge(e);
      (e = e.map((t) =>
        n.find((e) => e.name === t.name)
          ? { name: `x-bind:${t.name}`, value: `"${t.value}"` }
          : t
      )),
        (r = r.concat(e));
    }
    let n = {},
      i = r
        .map(ke((e, t) => (n[e] = t)))
        .filter(Ce)
        .map(Te(n, e))
        .sort(Pe);
    return i.map((e) => Se(t, e));
  }
  function ge(e) {
    return Array.from(e)
      .map(ke())
      .filter((e) => !Ce(e));
  }
  var xe = !1,
    ye = new Map(),
    be = Symbol();
  function we(e) {
    xe = !0;
    let t = Symbol();
    (be = t), ye.set(t, []);
    let n = () => {
      for (; ye.get(t).length; ) ye.get(t).shift()();
      ye.delete(t);
    };
    var r = () => {
      (xe = !1), n();
    };
    e(n), r();
  }
  function Ee(e) {
    let t = [];
    var n = (e) => t.push(e),
      [r, i] = h(e),
      o,
      a;
    return (
      t.push(i),
      [
        {
          Alpine: Qt,
          effect: r,
          cleanup: n,
          evaluateLater: re.bind(re, e),
          evaluate: ne.bind(ne, e),
        },
        () => t.forEach((e) => e()),
      ]
    );
  }
  function Se(e, t) {
    var n;
    let r = he[t.type] || (() => {}),
      [i, o] = Ee(e);
    w(e, t.original, o);
    var a = () => {
      e._x_ignore ||
        e._x_ignoreSelf ||
        (r.inline && r.inline(e, t, i),
        (r = r.bind(r, e, t, i)),
        xe ? ye.get(be).push(r) : r());
    };
    return (a.runCleanups = o), a;
  }
  var Ae =
      (n, r) =>
      ({ name: e, value: t }) => ({
        name: (e = e.startsWith(n) ? e.replace(n, r) : e),
        value: t,
      }),
    Oe = (e) => e;
  function ke(r = () => {}) {
    return ({ name: e, value: t }) => {
      var { name: n, value: t } = $e.reduce((e, t) => t(e), {
        name: e,
        value: t,
      });
      return n !== e && r(n, e), { name: n, value: t };
    };
  }
  var $e = [];
  function je(e) {
    $e.push(e);
  }
  function Ce({ name: e }) {
    return Le().test(e);
  }
  var Le = () => new RegExp(`^${fe}([^:^.]+)\\b`);
  function Te(o, a) {
    return ({ name: e, value: t }) => {
      var n = e.match(Le()),
        r = e.match(/:([a-zA-Z0-9\-:]+)/);
      let i = e.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
      var e = a || o[e] || e;
      return {
        type: n ? n[1] : null,
        value: r ? r[1] : null,
        modifiers: i.map((e) => e.replace('.', '')),
        expression: t,
        original: e,
      };
    };
  }
  var Ne = 'DEFAULT',
    Me = [
      'ignore',
      'ref',
      'data',
      'id',
      'bind',
      'init',
      'for',
      'model',
      'modelable',
      'transition',
      'show',
      'if',
      Ne,
      'teleport',
    ];
  function Pe(e, t) {
    var e = -1 === Me.indexOf(e.type) ? Ne : e.type,
      t = -1 === Me.indexOf(t.type) ? Ne : t.type;
    return Me.indexOf(e) - Me.indexOf(t);
  }
  function Re(e, t, n = {}) {
    e.dispatchEvent(
      new CustomEvent(t, {
        detail: n,
        bubbles: !0,
        composed: !0,
        cancelable: !0,
      })
    );
  }
  function Ie(t, n) {
    if ('function' == typeof ShadowRoot && t instanceof ShadowRoot)
      Array.from(t.children).forEach((e) => Ie(e, n));
    else {
      let e = !1;
      if ((n(t, () => (e = !0)), !e)) {
        let e = t.firstElementChild;
        for (; e; ) Ie(e, n, !1), (e = e.nextElementSibling);
      }
    }
  }
  function qe(e, ...t) {
    console.warn(`Alpine Warning: ${e}`, ...t);
  }
  function De() {
    document.body ||
      qe(
        "Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"
      ),
      Re(document, 'alpine:init'),
      Re(document, 'alpine:initializing'),
      $(),
      x((e) => Ge(e, Ie)),
      y((e) => Qe(e)),
      b((e, t) => {
        me(e, t).forEach((e) => e());
      });
    var e = (e) => !Ke(e.parentElement, !0);
    Array.from(document.querySelectorAll(Ue()))
      .filter(e)
      .forEach((e) => {
        Ge(e);
      }),
      Re(document, 'alpine:initialized');
  }
  var ze = [],
    Be = [];
  function Fe() {
    return ze.map((e) => e());
  }
  function Ue() {
    return ze.concat(Be).map((e) => e());
  }
  function We(e) {
    ze.push(e);
  }
  function He(e) {
    Be.push(e);
  }
  function Ke(e, n = !1) {
    return Ve(e, (t) => {
      const e = (n ? Ue : Fe)();
      if (e.some((e) => t.matches(e))) return !0;
    });
  }
  function Ve(e, t) {
    if (e)
      return t(e)
        ? e
        : (e = e._x_teleportBack ? e._x_teleportBack : e).parentElement
        ? Ve(e.parentElement, t)
        : void 0;
  }
  function Ye(t) {
    return Fe().some((e) => t.matches(e));
  }
  var Je = [];
  function Ze(e) {
    Je.push(e);
  }
  function Ge(e, t = Ie, r = () => {}) {
    we(() => {
      t(e, (t, n) => {
        r(t, n),
          Je.forEach((e) => e(t, n)),
          me(t, t.attributes).forEach((e) => e()),
          t._x_ignore && n();
      });
    });
  }
  function Qe(e) {
    Ie(e, (e) => E(e));
  }
  var Xe = [],
    et = !1;
  function tt(t = () => {}) {
    return (
      queueMicrotask(() => {
        et ||
          setTimeout(() => {
            nt();
          });
      }),
      new Promise((e) => {
        Xe.push(() => {
          t(), e();
        });
      })
    );
  }
  function nt() {
    for (et = !1; Xe.length; ) Xe.shift()();
  }
  function rt() {
    et = !0;
  }
  function it(e, t) {
    return Array.isArray(t)
      ? ot(e, t.join(' '))
      : 'object' == typeof t && null !== t
      ? at(e, t)
      : 'function' == typeof t
      ? it(e, t())
      : ot(e, t);
  }
  function ot(t, e) {
    var n = (e) => e.split(' ').filter(Boolean),
      r,
      i;
    return ((e) => (
      t.classList.add(...e),
      () => {
        t.classList.remove(...e);
      }
    ))(
      ((e) =>
        e
          .split(' ')
          .filter((e) => !t.classList.contains(e))
          .filter(Boolean))((e = (!0 !== e && e) || ''))
    );
  }
  function at(t, e) {
    let n = (e) => e.split(' ').filter(Boolean),
      r = Object.entries(e)
        .flatMap(([e, t]) => !!t && n(e))
        .filter(Boolean),
      i = Object.entries(e)
        .flatMap(([e, t]) => !t && n(e))
        .filter(Boolean),
      o = [],
      a = [];
    return (
      i.forEach((e) => {
        t.classList.contains(e) && (t.classList.remove(e), a.push(e));
      }),
      r.forEach((e) => {
        t.classList.contains(e) || (t.classList.add(e), o.push(e));
      }),
      () => {
        a.forEach((e) => t.classList.add(e)),
          o.forEach((e) => t.classList.remove(e));
      }
    );
  }
  function st(e, t) {
    return ('object' == typeof t && null !== t ? lt : ut)(e, t);
  }
  function lt(n, e) {
    let r = {};
    return (
      Object.entries(e).forEach(([e, t]) => {
        (r[e] = n.style[e]),
          e.startsWith('--') || (e = ct(e)),
          n.style.setProperty(e, t);
      }),
      setTimeout(() => {
        0 === n.style.length && n.removeAttribute('style');
      }),
      () => {
        st(n, r);
      }
    );
  }
  function ut(e, t) {
    let n = e.getAttribute('style', t);
    return (
      e.setAttribute('style', t),
      () => {
        e.setAttribute('style', n || '');
      }
    );
  }
  function ct(e) {
    return e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }
  function dt(e, t = () => {}) {
    let n = !1;
    return function () {
      n ? t.apply(this, arguments) : ((n = !0), e.apply(this, arguments));
    };
  }
  function ft(t, e, n) {
    _t(t, it, '');
    let r = {
      enter: (e) => {
        t._x_transition.enter.during = e;
      },
      'enter-start': (e) => {
        t._x_transition.enter.start = e;
      },
      'enter-end': (e) => {
        t._x_transition.enter.end = e;
      },
      leave: (e) => {
        t._x_transition.leave.during = e;
      },
      'leave-start': (e) => {
        t._x_transition.leave.start = e;
      },
      'leave-end': (e) => {
        t._x_transition.leave.end = e;
      },
    };
    r[n](e);
  }
  function pt(e, n, t) {
    _t(e, st);
    var r = !n.includes('in') && !n.includes('out') && !t,
      i = r || n.includes('in') || ['enter'].includes(t),
      o = r || n.includes('out') || ['leave'].includes(t),
      a =
        !(n =
          (n =
            n.includes('in') && !r
              ? n.filter((e, t) => t < n.indexOf('out'))
              : n).includes('out') && !r
            ? n.filter((e, t) => t > n.indexOf('out'))
            : n).includes('opacity') && !n.includes('scale'),
      s,
      l,
      u = a || n.includes('opacity') ? 0 : 1,
      c = a || n.includes('scale') ? gt(n, 'scale', 95) / 100 : 1,
      d = gt(n, 'delay', 0),
      f = gt(n, 'origin', 'center'),
      p = 'opacity, transform',
      t = gt(n, 'duration', 150) / 1e3,
      r = gt(n, 'duration', 75) / 1e3,
      a = 'cubic-bezier(0.4, 0.0, 0.2, 1)';
    i &&
      ((e._x_transition.enter.during = {
        transformOrigin: f,
        transitionDelay: d,
        transitionProperty: p,
        transitionDuration: `${t}s`,
        transitionTimingFunction: a,
      }),
      (e._x_transition.enter.start = { opacity: u, transform: `scale(${c})` }),
      (e._x_transition.enter.end = { opacity: 1, transform: 'scale(1)' })),
      o &&
        ((e._x_transition.leave.during = {
          transformOrigin: f,
          transitionDelay: d,
          transitionProperty: p,
          transitionDuration: `${r}s`,
          transitionTimingFunction: a,
        }),
        (e._x_transition.leave.start = { opacity: 1, transform: 'scale(1)' }),
        (e._x_transition.leave.end = { opacity: u, transform: `scale(${c})` }));
  }
  function _t(n, r, e = {}) {
    n._x_transition ||
      (n._x_transition = {
        enter: { during: e, start: e, end: e },
        leave: { during: e, start: e, end: e },
        in(e = () => {}, t = () => {}) {
          vt(
            n,
            r,
            {
              during: this.enter.during,
              start: this.enter.start,
              end: this.enter.end,
            },
            e,
            t
          );
        },
        out(e = () => {}, t = () => {}) {
          vt(
            n,
            r,
            {
              during: this.leave.during,
              start: this.leave.start,
              end: this.leave.end,
            },
            e,
            t
          );
        },
      });
  }
  function ht(e) {
    var e = e.parentNode;
    if (e) return e._x_hidePromise ? e : ht(e);
  }
  function vt(
    e,
    t,
    { during: n, start: r, end: i } = {},
    o = () => {},
    a = () => {}
  ) {
    if (
      (e._x_transitioning && e._x_transitioning.cancel(),
      0 === Object.keys(n).length &&
        0 === Object.keys(r).length &&
        0 === Object.keys(i).length)
    )
      return o(), void a();
    let s, l, u;
    mt(e, {
      start() {
        s = t(e, r);
      },
      during() {
        l = t(e, n);
      },
      before: o,
      end() {
        s(), (u = t(e, i));
      },
      after: a,
      cleanup() {
        l(), u();
      },
    });
  }
  function mt(n, r) {
    let i,
      o,
      a,
      e = dt(() => {
        M(() => {
          (i = !0),
            o || r.before(),
            a || (r.end(), nt()),
            r.after(),
            n.isConnected && r.cleanup(),
            delete n._x_transitioning;
        });
      });
    (n._x_transitioning = {
      beforeCancels: [],
      beforeCancel(e) {
        this.beforeCancels.push(e);
      },
      cancel: dt(function () {
        for (; this.beforeCancels.length; ) this.beforeCancels.shift()();
        e();
      }),
      finish: e,
    }),
      M(() => {
        r.start(), r.during();
      }),
      rt(),
      requestAnimationFrame(() => {
        if (!i) {
          let e =
              1e3 *
              Number(
                getComputedStyle(n)
                  .transitionDuration.replace(/,.*/, '')
                  .replace('s', '')
              ),
            t =
              1e3 *
              Number(
                getComputedStyle(n)
                  .transitionDelay.replace(/,.*/, '')
                  .replace('s', '')
              );
          0 === e &&
            (e =
              1e3 *
              Number(getComputedStyle(n).animationDuration.replace('s', ''))),
            M(() => {
              r.before();
            }),
            (o = !0),
            requestAnimationFrame(() => {
              i ||
                (M(() => {
                  r.end();
                }),
                nt(),
                setTimeout(n._x_transitioning.finish, e + t),
                (a = !0));
            });
        }
      });
  }
  function gt(e, t, n) {
    if (-1 === e.indexOf(t)) return n;
    const r = e[e.indexOf(t) + 1];
    if (!r) return n;
    if ('scale' === t && isNaN(r)) return n;
    if ('duration' === t) {
      var n = r.match(/([0-9]+)ms/);
      if (n) return n[1];
    }
    return 'origin' === t &&
      ['top', 'right', 'left', 'center', 'bottom'].includes(e[e.indexOf(t) + 2])
      ? [r, e[e.indexOf(t) + 2]].join(' ')
      : r;
  }
  ve(
    'transition',
    (e, { value: t, modifiers: n, expression: r }, { evaluate: i }) => {
      (r = 'function' == typeof r ? i(r) : r) ? ft(e, r, t) : pt(e, n, t);
    }
  );
  var xt = !(window.Element.prototype._x_toggleAndCascadeWithTransitions =
    function (r, e, t, n) {
      const i =
        'visible' === document.visibilityState
          ? requestAnimationFrame
          : setTimeout;
      var o = () => i(t);
      e
        ? r._x_transition && (r._x_transition.enter || r._x_transition.leave)
          ? r._x_transition.enter &&
            (Object.entries(r._x_transition.enter.during).length ||
              Object.entries(r._x_transition.enter.start).length ||
              Object.entries(r._x_transition.enter.end).length)
            ? r._x_transition.in(t)
            : o()
          : r._x_transition
          ? r._x_transition.in(t)
          : o()
        : ((r._x_hidePromise = r._x_transition
            ? new Promise((e, t) => {
                r._x_transition.out(
                  () => {},
                  () => e(n)
                ),
                  r._x_transitioning.beforeCancel(() =>
                    t({ isFromCancelledTransition: !0 })
                  );
              })
            : Promise.resolve(n)),
          queueMicrotask(() => {
            let e = ht(r);
            e
              ? (e._x_hideChildren || (e._x_hideChildren = []),
                e._x_hideChildren.push(r))
              : i(() => {
                  let n = (e) => {
                    var t = Promise.all([
                      e._x_hidePromise,
                      ...(e._x_hideChildren || []).map(n),
                    ]).then(([e]) => e());
                    return delete e._x_hidePromise, delete e._x_hideChildren, t;
                  };
                  n(r).catch((e) => {
                    if (!e.isFromCancelledTransition) throw e;
                  });
                });
          }));
    });
  function yt(t, n = () => {}) {
    return (...e) => (xt ? n : t)(...e);
  }
  function bt(t) {
    return (...e) => xt && t(...e);
  }
  function wt(e, t) {
    t._x_dataStack || (t._x_dataStack = e._x_dataStack),
      (xt = !0),
      St(() => {
        Et(t);
      }),
      (xt = !1);
  }
  function Et(e) {
    let r = !1;
    var t;
    Ge(e, (e, n) => {
      Ie(e, (e, t) => (r && Ye(e) ? t() : ((r = !0), void n(e, t))));
    });
  }
  function St(e) {
    let n = d;
    _((e, t) => {
      var e = n(e);
      return f(e), () => {};
    }),
      e(),
      _(n);
  }
  function At(e, t, n, r = []) {
    switch (
      (e._x_bindings || (e._x_bindings = O({})),
      (e._x_bindings[t] = n),
      (t = r.includes('camel') ? Tt(t) : t))
    ) {
      case 'value':
        Ot(e, n);
        break;
      case 'style':
        $t(e, n);
        break;
      case 'class':
        kt(e, n);
        break;
      default:
        jt(e, t, n);
    }
  }
  function Ot(t, e) {
    'radio' === t.type
      ? (void 0 === t.attributes.value && (t.value = e),
        window.fromModel && (t.checked = t.value == e))
      : 'checkbox' === t.type
      ? Number.isInteger(e)
        ? (t.value = e)
        : Number.isInteger(e) ||
          Array.isArray(e) ||
          'boolean' == typeof e ||
          [null, void 0].includes(e)
        ? Array.isArray(e)
          ? (t.checked = e.some((e) => e == t.value))
          : (t.checked = !!e)
        : (t.value = String(e))
      : 'SELECT' === t.tagName
      ? Lt(t, e)
      : t.value !== e && (t.value = e);
  }
  function kt(e, t) {
    e._x_undoAddedClasses && e._x_undoAddedClasses(),
      (e._x_undoAddedClasses = it(e, t));
  }
  function $t(e, t) {
    e._x_undoAddedStyles && e._x_undoAddedStyles(),
      (e._x_undoAddedStyles = st(e, t));
  }
  function jt(e, t, n) {
    [null, void 0, !1].includes(n) && Pt(t)
      ? e.removeAttribute(t)
      : Ct(e, t, (n = Mt(t) ? t : n));
  }
  function Ct(e, t, n) {
    e.getAttribute(t) != n && e.setAttribute(t, n);
  }
  function Lt(e, t) {
    const n = [].concat(t).map((e) => e + '');
    Array.from(e.options).forEach((e) => {
      e.selected = n.includes(e.value);
    });
  }
  function Tt(e) {
    return e.toLowerCase().replace(/-(\w)/g, (e, t) => t.toUpperCase());
  }
  function Nt(e, t) {
    return e == t;
  }
  function Mt(e) {
    const t = [
      'disabled',
      'checked',
      'required',
      'readonly',
      'hidden',
      'open',
      'selected',
      'autofocus',
      'itemscope',
      'multiple',
      'novalidate',
      'allowfullscreen',
      'allowpaymentrequest',
      'formnovalidate',
      'autoplay',
      'controls',
      'loop',
      'muted',
      'playsinline',
      'default',
      'ismap',
      'reversed',
      'async',
      'defer',
      'nomodule',
    ];
    return t.includes(e);
  }
  function Pt(e) {
    return ![
      'aria-pressed',
      'aria-checked',
      'aria-expanded',
      'aria-selected',
    ].includes(e);
  }
  function Rt(e, t, n) {
    if (e._x_bindings && void 0 !== e._x_bindings[t]) return e._x_bindings[t];
    var e = e.getAttribute(t);
    return null === e
      ? 'function' == typeof n
        ? n()
        : n
      : '' === e || (Mt(t) ? !![t, 'true'].includes(e) : e);
  }
  function It(r, i) {
    var o;
    return function () {
      var e = this,
        t = arguments,
        n = function () {
          (o = null), r.apply(e, t);
        };
      clearTimeout(o), (o = setTimeout(n, i));
    };
  }
  function qt(n, r) {
    let i;
    return function () {
      var e = this,
        t = arguments;
      i || (n.apply(e, t), (i = !0), setTimeout(() => (i = !1), r));
    };
  }
  function Dt(e) {
    e(Qt);
  }
  var zt = {},
    Bt = !1;
  function Ft(e, t) {
    if ((Bt || ((zt = O(zt)), (Bt = !0)), void 0 === t)) return zt[e];
    'object' == typeof (zt[e] = t) &&
      null !== t &&
      t.hasOwnProperty('init') &&
      'function' == typeof t.init &&
      zt[e].init(),
      H(zt[e]);
  }
  function Ut() {
    return zt;
  }
  var Wt = {};
  function Ht(e, t) {
    let n = 'function' != typeof t ? () => t : t;
    e instanceof Element ? Vt(e, n()) : (Wt[e] = n);
  }
  function Kt(n) {
    return (
      Object.entries(Wt).forEach(([e, t]) => {
        Object.defineProperty(n, e, {
          get() {
            return (...e) => t(...e);
          },
        });
      }),
      n
    );
  }
  function Vt(e, t, n) {
    let r = [];
    for (; r.length; ) r.pop()();
    let i = Object.entries(t).map(([e, t]) => ({ name: e, value: t })),
      o = ge(i);
    (i = i.map((t) =>
      o.find((e) => e.name === t.name)
        ? { name: `x-bind:${t.name}`, value: `"${t.value}"` }
        : t
    )),
      me(e, i, n).map((e) => {
        r.push(e.runCleanups), e();
      });
  }
  var Yt = {};
  function Jt(e, t) {
    Yt[e] = t;
  }
  function Zt(n, r) {
    return (
      Object.entries(Yt).forEach(([e, t]) => {
        Object.defineProperty(n, e, {
          get() {
            return (...e) => t.bind(r)(...e);
          },
          enumerable: !1,
        });
      }),
      n
    );
  }
  var Gt,
    Qt = {
      get reactive() {
        return O;
      },
      get release() {
        return f;
      },
      get effect() {
        return d;
      },
      get raw() {
        return i;
      },
      version: '3.12.0',
      flushAndStopDeferringMutations: q,
      dontAutoEvaluateFunctions: te,
      disableEffectScheduling: c,
      startObservingMutations: $,
      stopObservingMutations: j,
      setReactivityEngine: p,
      closestDataStack: U,
      skipDuringClone: yt,
      onlyDuringClone: bt,
      addRootSelector: We,
      addInitSelector: He,
      addScopeToNode: B,
      deferMutations: I,
      mapAttributes: je,
      evaluateLater: re,
      interceptInit: Ze,
      setEvaluator: oe,
      mergeProxies: W,
      findClosest: Ve,
      closestRoot: Ke,
      destroyTree: Qe,
      interceptor: K,
      transition: vt,
      setStyles: st,
      mutateDom: M,
      directive: ve,
      throttle: qt,
      debounce: It,
      evaluate: ne,
      initTree: Ge,
      nextTick: tt,
      prefixed: pe,
      prefix: _e,
      plugin: Dt,
      magic: Z,
      store: Ft,
      start: De,
      clone: wt,
      bound: Rt,
      $data: z,
      walk: Ie,
      data: Jt,
      bind: Ht,
    };
  function Xt(e, t) {
    const n = Object.create(null);
    var r = e.split(',');
    for (let e = 0; e < r.length; e++) n[r[e]] = !0;
    return t ? (e) => !!n[e.toLowerCase()] : (e) => !!n[e];
  }
  var en,
    tn = Xt(
      'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly' +
        ',async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected'
    ),
    nn = Object.freeze({}),
    rn = Object.freeze([]),
    on = Object.assign,
    an = Object.prototype.hasOwnProperty,
    sn = (e, t) => an.call(e, t),
    ln = Array.isArray,
    un = (e) => '[object Map]' === _n(e),
    cn = (e) => 'string' == typeof e,
    dn = (e) => 'symbol' == typeof e,
    fn = (e) => null !== e && 'object' == typeof e,
    pn = Object.prototype.toString,
    _n = (e) => pn.call(e),
    hn = (e) => _n(e).slice(8, -1),
    vn = (e) =>
      cn(e) && 'NaN' !== e && '-' !== e[0] && '' + parseInt(e, 10) === e,
    mn = (n) => {
      const r = Object.create(null);
      return (e) => {
        var t;
        return r[e] || (r[e] = n(e));
      };
    },
    gn = /-(\w)/g,
    xn = mn((e) => e.replace(gn, (e, t) => (t ? t.toUpperCase() : ''))),
    yn = /\B([A-Z])/g,
    bn = mn((e) => e.replace(yn, '-$1').toLowerCase()),
    wn = mn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
    En = mn((e) => (e ? `on${wn(e)}` : '')),
    Sn = (e, t) => e !== t && (e == e || t == t),
    An = new WeakMap(),
    On = [],
    kn,
    $n = Symbol('iterate'),
    jn = Symbol('Map key iterate');
  function Cn(e) {
    return e && !0 === e._isEffect;
  }
  function Ln(e, t = nn) {
    const n = Mn((e = Cn(e) ? e.raw : e), t);
    return t.lazy || n(), n;
  }
  function Tn(e) {
    e.active &&
      (Pn(e), e.options.onStop && e.options.onStop(), (e.active = !1));
  }
  var Nn = 0;
  function Mn(t, e) {
    const n = function e() {
      if (!n.active) return t();
      if (!On.includes(n)) {
        Pn(n);
        try {
          return Dn(), On.push(n), (kn = n), t();
        } finally {
          On.pop(), zn(), (kn = On[On.length - 1]);
        }
      }
    };
    return (
      (n.id = Nn++),
      (n.allowRecurse = !!e.allowRecurse),
      (n._isEffect = !0),
      (n.active = !0),
      (n.raw = t),
      (n.deps = []),
      (n.options = e),
      n
    );
  }
  function Pn(t) {
    const { deps: n } = t;
    if (n.length) {
      for (let e = 0; e < n.length; e++) n[e].delete(t);
      n.length = 0;
    }
  }
  var Rn = !0,
    In = [];
  function qn() {
    In.push(Rn), (Rn = !1);
  }
  function Dn() {
    In.push(Rn), (Rn = !0);
  }
  function zn() {
    var e = In.pop();
    Rn = void 0 === e || e;
  }
  function Bn(n, r, i) {
    if (Rn && void 0 !== kn) {
      let e = An.get(n);
      e || An.set(n, (e = new Map()));
      let t = e.get(i);
      t || e.set(i, (t = new Set())),
        t.has(kn) ||
          (t.add(kn),
          kn.deps.push(t),
          kn.options.onTrack &&
            kn.options.onTrack({ effect: kn, target: n, type: r, key: i }));
    }
  }
  function Fn(t, n, r, i, o, a) {
    const e = An.get(t);
    if (e) {
      const l = new Set(),
        u = (e) => {
          e &&
            e.forEach((e) => {
              (e === kn && !e.allowRecurse) || l.add(e);
            });
        };
      if ('clear' === n) e.forEach(u);
      else if ('length' === r && ln(t))
        e.forEach((e, t) => {
          ('length' === t || i <= t) && u(e);
        });
      else
        switch ((void 0 !== r && u(e.get(r)), n)) {
          case 'add':
            ln(t)
              ? vn(r) && u(e.get('length'))
              : (u(e.get($n)), un(t) && u(e.get(jn)));
            break;
          case 'delete':
            ln(t) || (u(e.get($n)), un(t) && u(e.get(jn)));
            break;
          case 'set':
            un(t) && u(e.get($n));
        }
      var s;
      l.forEach((e) => {
        e.options.onTrigger &&
          e.options.onTrigger({
            effect: e,
            target: t,
            key: r,
            type: n,
            newValue: i,
            oldValue: o,
            oldTarget: a,
          }),
          e.options.scheduler ? e.options.scheduler(e) : e();
      });
    }
  }
  var Un = Xt('__proto__,__v_isRef,__isVue'),
    Wn = new Set(
      Object.getOwnPropertyNames(Symbol)
        .map((e) => Symbol[e])
        .filter(dn)
    ),
    Hn = Zn(),
    Kn = Zn(!1, !0),
    Vn = Zn(!0),
    Yn = Zn(!0, !0),
    Jn = {};
  function Zn(a = !1, s = !1) {
    return function e(t, n, r) {
      if ('__v_isReactive' === n) return !a;
      if ('__v_isReadonly' === n) return a;
      if ('__v_raw' === n && r === (a ? (s ? Nr : Tr) : s ? Lr : Cr).get(t))
        return t;
      var i = ln(t);
      if (!a && i && sn(Jn, n)) return Reflect.get(Jn, n, r);
      var r = Reflect.get(t, n, r),
        o;
      return (dn(n) ? Wn.has(n) : Un(n))
        ? r
        : (a || Bn(t, 'get', n),
          s
            ? r
            : zr(r)
            ? !i || !vn(n)
              ? r.value
              : r
            : fn(r)
            ? (a ? Ir : Rr)(r)
            : r);
    };
  }
  ['includes', 'indexOf', 'lastIndexOf'].forEach((e) => {
    const r = Array.prototype[e];
    Jn[e] = function (...e) {
      var n = Dr(this);
      for (let e = 0, t = this.length; e < t; e++) Bn(n, 'get', e + '');
      var t = r.apply(n, e);
      return -1 === t || !1 === t ? r.apply(n, e.map(Dr)) : t;
    };
  }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((e) => {
      const t = Array.prototype[e];
      Jn[e] = function (...e) {
        qn();
        var e = t.apply(this, e);
        return zn(), e;
      };
    });
  var mn = Gn(),
    nn = Gn(!0);
  function Gn(l = !1) {
    return function e(t, n, r, i) {
      let o = t[n];
      if (!l && ((r = Dr(r)), (o = Dr(o)), !ln(t) && zr(o) && !zr(r)))
        return (o.value = r), !0;
      var a = ln(t) && vn(n) ? Number(n) < t.length : sn(t, n),
        s = Reflect.set(t, n, r, i);
      return (
        t === Dr(i) &&
          (a ? Sn(r, o) && Fn(t, 'set', n, r, o) : Fn(t, 'add', n, r)),
        s
      );
    };
  }
  function Qn(e, t) {
    var n = sn(e, t),
      r = e[t],
      i = Reflect.deleteProperty(e, t);
    return i && n && Fn(e, 'delete', t, void 0, r), i;
  }
  function Xn(e, t) {
    var n = Reflect.has(e, t);
    return (dn(t) && Wn.has(t)) || Bn(e, 'has', t), n;
  }
  function er(e) {
    return Bn(e, 'iterate', ln(e) ? 'length' : $n), Reflect.ownKeys(e);
  }
  var tr = { get: Hn, set: mn, deleteProperty: Qn, has: Xn, ownKeys: er },
    nr = {
      get: Vn,
      set(e, t) {
        return (
          console.warn(
            `Set operation on key "${String(t)}" failed: target is readonly.`,
            e
          ),
          !0
        );
      },
      deleteProperty(e, t) {
        return (
          console.warn(
            `Delete operation on key "${String(
              t
            )}" failed: target is readonly.`,
            e
          ),
          !0
        );
      },
    },
    rr = on({}, tr, { get: Kn, set: nn }),
    ir = on({}, nr, { get: Yn }),
    or = (e) => (fn(e) ? Rr(e) : e),
    ar = (e) => (fn(e) ? Ir(e) : e),
    sr = (e) => e,
    lr = (e) => Reflect.getPrototypeOf(e);
  function ur(e, t, n = !1, r = !1) {
    var i = Dr((e = e.__v_raw)),
      o = Dr(t);
    t !== o && (n || Bn(i, 'get', t)), n || Bn(i, 'get', o);
    const { has: a } = lr(i),
      s = r ? sr : n ? ar : or;
    return a.call(i, t)
      ? s(e.get(t))
      : a.call(i, o)
      ? s(e.get(o))
      : void (e !== i && e.get(t));
  }
  function cr(e, t = !1) {
    const n = this.__v_raw;
    var r = Dr(n),
      i = Dr(e);
    return (
      e !== i && (t || Bn(r, 'has', e)),
      t || Bn(r, 'has', i),
      e === i ? n.has(e) : n.has(e) || n.has(i)
    );
  }
  function dr(e, t = !1) {
    return (
      (e = e.__v_raw), t || Bn(Dr(e), 'iterate', $n), Reflect.get(e, 'size', e)
    );
  }
  function fr(e) {
    e = Dr(e);
    const t = Dr(this),
      n = lr(t);
    var r;
    return n.has.call(t, e) || (t.add(e), Fn(t, 'add', e, e)), this;
  }
  function pr(e, t) {
    t = Dr(t);
    const n = Dr(this),
      { has: r, get: i } = lr(n);
    let o = r.call(n, e);
    o ? jr(n, r, e) : ((e = Dr(e)), (o = r.call(n, e)));
    var a = i.call(n, e);
    return (
      n.set(e, t),
      o ? Sn(t, a) && Fn(n, 'set', e, t, a) : Fn(n, 'add', e, t),
      this
    );
  }
  function _r(e) {
    const t = Dr(this),
      { has: n, get: r } = lr(t);
    let i = n.call(t, e);
    i ? jr(t, n, e) : ((e = Dr(e)), (i = n.call(t, e)));
    var o = r ? r.call(t, e) : void 0,
      a = t.delete(e);
    return i && Fn(t, 'delete', e, void 0, o), a;
  }
  function hr() {
    const e = Dr(this);
    var t = 0 !== e.size,
      n = new (un(e) ? Map : Set)(e),
      r = e.clear();
    return t && Fn(e, 'clear', void 0, void 0, n), r;
  }
  function vr(s, l) {
    return function e(n, r) {
      const i = this,
        t = i.__v_raw;
      var o = Dr(t);
      const a = l ? sr : s ? ar : or;
      return (
        s || Bn(o, 'iterate', $n), t.forEach((e, t) => n.call(r, a(e), a(t), i))
      );
    };
  }
  function mr(s, l, u) {
    return function (...e) {
      const t = this.__v_raw;
      var n = Dr(t),
        r = un(n);
      const i = 'entries' === s || (s === Symbol.iterator && r);
      var r = 'keys' === s && r;
      const o = t[s](...e),
        a = u ? sr : l ? ar : or;
      return (
        l || Bn(n, 'iterate', r ? jn : $n),
        {
          next() {
            var { value: e, done: t } = o.next();
            return t
              ? { value: e, done: t }
              : { value: i ? [a(e[0]), a(e[1])] : a(e), done: t };
          },
          [Symbol.iterator]() {
            return this;
          },
        }
      );
    };
  }
  function gr(t) {
    return function (...e) {
      var e = e[0] ? `on key "${e[0]}" ` : '';
      return (
        console.warn(
          `${wn(t)} operation ${e}failed: target is readonly.`,
          Dr(this)
        ),
        'delete' !== t && this
      );
    };
  }
  var xr = {
      get(e) {
        return ur(this, e);
      },
      get size() {
        return dr(this);
      },
      has: cr,
      add: fr,
      set: pr,
      delete: _r,
      clear: hr,
      forEach: vr(!1, !1),
    },
    yr = {
      get(e) {
        return ur(this, e, !1, !0);
      },
      get size() {
        return dr(this);
      },
      has: cr,
      add: fr,
      set: pr,
      delete: _r,
      clear: hr,
      forEach: vr(!1, !0),
    },
    br = {
      get(e) {
        return ur(this, e, !0);
      },
      get size() {
        return dr(this, !0);
      },
      has(e) {
        return cr.call(this, e, !0);
      },
      add: gr('add'),
      set: gr('set'),
      delete: gr('delete'),
      clear: gr('clear'),
      forEach: vr(!0, !1),
    },
    wr = {
      get(e) {
        return ur(this, e, !0, !0);
      },
      get size() {
        return dr(this, !0);
      },
      has(e) {
        return cr.call(this, e, !0);
      },
      add: gr('add'),
      set: gr('set'),
      delete: gr('delete'),
      clear: gr('clear'),
      forEach: vr(!0, !0),
    },
    Er;
  function Sr(r, e) {
    const i = e ? (r ? wr : yr) : r ? br : xr;
    return (e, t, n) =>
      '__v_isReactive' === t
        ? !r
        : '__v_isReadonly' === t
        ? r
        : '__v_raw' === t
        ? e
        : Reflect.get(sn(i, t) && t in e ? i : e, t, n);
  }
  ['keys', 'values', 'entries', Symbol.iterator].forEach((e) => {
    (xr[e] = mr(e, !1, !1)),
      (br[e] = mr(e, !0, !1)),
      (yr[e] = mr(e, !1, !0)),
      (wr[e] = mr(e, !0, !0));
  });
  var Ar = { get: Sr(!1, !1) },
    Or = { get: Sr(!1, !0) },
    kr = { get: Sr(!0, !1) },
    $r = { get: Sr(!0, !0) };
  function jr(e, t, n) {
    var r = Dr(n),
      e;
    r !== n &&
      t.call(e, r) &&
      ((e = hn(e)),
      console.warn(
        `Reactive ${e} contains both the raw and reactive versions of the same object${
          'Map' === e ? ' as keys' : ''
        }, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
      ));
  }
  var Cr = new WeakMap(),
    Lr = new WeakMap(),
    Tr = new WeakMap(),
    Nr = new WeakMap();
  function Mr(e) {
    switch (e) {
      case 'Object':
      case 'Array':
        return 1;
      case 'Map':
      case 'Set':
      case 'WeakMap':
      case 'WeakSet':
        return 2;
      default:
        return 0;
    }
  }
  function Pr(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Mr(hn(e));
  }
  function Rr(e) {
    return e && e.__v_isReadonly ? e : qr(e, !1, tr, Ar, Cr);
  }
  function Ir(e) {
    return qr(e, !0, nr, kr, Tr);
  }
  function qr(e, t, n, r, i) {
    if (!fn(e))
      return console.warn(`value cannot be made reactive: ${String(e)}`), e;
    if (e.__v_raw && (!t || !e.__v_isReactive)) return e;
    var t = i.get(e);
    if (t) return t;
    var t = Pr(e);
    if (0 === t) return e;
    var n = new Proxy(e, 2 === t ? r : n);
    return i.set(e, n), n;
  }
  function Dr(e) {
    return (e && Dr(e.__v_raw)) || e;
  }
  function zr(e) {
    return Boolean(e && !0 === e.__v_isRef);
  }
  function Br(e) {
    let t = [],
      n = e;
    for (; n; ) n._x_refs && t.push(n._x_refs), (n = n.parentNode);
    return t;
  }
  Z('nextTick', () => tt),
    Z('dispatch', (e) => Re.bind(Re, e)),
    Z('watch', (o, { evaluateLater: a, effect: s }) => (e, t) => {
      let n = a(e),
        r = !0,
        i;
      var e = s(() =>
        n((e) => {
          JSON.stringify(e),
            r
              ? (i = e)
              : queueMicrotask(() => {
                  t(e, i), (i = e);
                }),
            (r = !1);
        })
      );
      o._x_effects.delete(e);
    }),
    Z('store', Ut),
    Z('data', (e) => z(e)),
    Z('root', (e) => Ke(e)),
    Z(
      'refs',
      (e) => e._x_refs_proxy || ((e._x_refs_proxy = W(Br(e))), e._x_refs_proxy)
    );
  var Fr = {};
  function Ur(e) {
    return Fr[e] || (Fr[e] = 0), ++Fr[e];
  }
  function Wr(e, t) {
    return Ve(e, (e) => {
      if (e._x_ids && e._x_ids[t]) return !0;
    });
  }
  function Hr(e, t) {
    e._x_ids || (e._x_ids = {}), e._x_ids[t] || (e._x_ids[t] = Ur(t));
  }
  function Kr(t, e, n) {
    Z(e, (e) =>
      qe(
        `You can't use [$${directiveName}] without first installing the "${t}" plugin here: https://alpinejs.dev/plugins/${n}`,
        e
      )
    );
  }
  function Vr({ get: n, set: r }, { get: i, set: o }) {
    let a = !0,
      s,
      l,
      u,
      c,
      e = d(() => {
        let e, t;
        a
          ? ((e = n()), o(e), (t = i()), (a = !1))
          : ((e = n()),
            (t = i()),
            (u = JSON.stringify(e)),
            (c = JSON.stringify(t)),
            u !== s ? ((t = i()), o(e), (t = e)) : (r(t), (e = t))),
          (s = JSON.stringify(e)),
          (l = JSON.stringify(t));
      });
    return () => {
      f(e);
    };
  }
  Z('id', (r) => (e, t = null) => {
    var n = Wr(r, e),
      n = n ? n._x_ids[e] : Ur(e);
    return t ? `${e}-${n}-${t}` : `${e}-${n}`;
  }),
    Z('el', (e) => e),
    Kr('Focus', 'focus', 'focus'),
    Kr('Persist', 'persist', 'persist'),
    ve(
      'modelable',
      (r, { expression: e }, { effect: t, evaluateLater: n, cleanup: i }) => {
        let o = n(e),
          a = () => {
            let t;
            return o((e) => (t = e)), t;
          },
          s = n(`${e} = __placeholder`),
          l = (e) => s(() => {}, { scope: { __placeholder: e } });
        var e = a();
        l(e),
          queueMicrotask(() => {
            if (r._x_model) {
              r._x_removeModelListeners.default();
              let e = r._x_model.get,
                t = r._x_model.set;
              var n = Vr(
                {
                  get() {
                    return e();
                  },
                  set(e) {
                    t(e);
                  },
                },
                {
                  get() {
                    return a();
                  },
                  set(e) {
                    l(e);
                  },
                }
              );
              i(n);
            }
          });
      }
    );
  var Yr = document.createElement('div');
  ve('teleport', (t, { modifiers: e, expression: n }, { cleanup: r }) => {
    'template' !== t.tagName.toLowerCase() &&
      qe('x-teleport can only be used on a <template> tag', t);
    let i = yt(
      () => document.querySelector(n),
      () => Yr
    )();
    i || qe(`Cannot find x-teleport element for selector: "${n}"`);
    let o = t.content.cloneNode(!0).firstElementChild;
    (t._x_teleport = o),
      (o._x_teleportBack = t)._x_forwardEvents &&
        t._x_forwardEvents.forEach((e) => {
          o.addEventListener(e, (e) => {
            e.stopPropagation(), t.dispatchEvent(new e.constructor(e.type, e));
          });
        }),
      B(o, {}, t),
      M(() => {
        e.includes('prepend')
          ? i.parentNode.insertBefore(o, i)
          : e.includes('append')
          ? i.parentNode.insertBefore(o, i.nextSibling)
          : i.appendChild(o),
          Ge(o),
          (o._x_ignore = !0);
      }),
      r(() => o.remove());
  });
  var on = () => {};
  function Jr(n, r, i, t) {
    let o = n,
      a = (e) => t(e),
      s = {};
    var e = (t, n) => (e) => n(t, e);
    if (
      (i.includes('dot') && (r = Zr(r)),
      i.includes('camel') && (r = Gr(r)),
      i.includes('passive') && (s.passive = !0),
      i.includes('capture') && (s.capture = !0),
      i.includes('window') && (o = window),
      i.includes('document') && (o = document),
      i.includes('prevent') &&
        (a = e(a, (e, t) => {
          t.preventDefault(), e(t);
        })),
      i.includes('stop') &&
        (a = e(a, (e, t) => {
          t.stopPropagation(), e(t);
        })),
      i.includes('self') &&
        (a = e(a, (e, t) => {
          t.target === n && e(t);
        })),
      (i.includes('away') || i.includes('outside')) &&
        ((o = document),
        (a = e(a, (e, t) => {
          n.contains(t.target) ||
            (!1 !== t.target.isConnected &&
              ((n.offsetWidth < 1 && n.offsetHeight < 1) ||
                (!1 !== n._x_isShown && e(t))));
        }))),
      i.includes('once') &&
        (a = e(a, (e, t) => {
          e(t), o.removeEventListener(r, a, s);
        })),
      (a = e(a, (e, t) => {
        (ei(r) && ti(t, i)) || e(t);
      })),
      i.includes('debounce'))
    ) {
      let e = i[i.indexOf('debounce') + 1] || 'invalid-wait';
      var l = Qr(e.split('ms')[0]) ? Number(e.split('ms')[0]) : 250;
      a = It(a, l);
    }
    if (i.includes('throttle')) {
      let e = i[i.indexOf('throttle') + 1] || 'invalid-wait';
      var l = Qr(e.split('ms')[0]) ? Number(e.split('ms')[0]) : 250;
      a = qt(a, l);
    }
    return (
      o.addEventListener(r, a, s),
      () => {
        o.removeEventListener(r, a, s);
      }
    );
  }
  function Zr(e) {
    return e.replace(/-/g, '.');
  }
  function Gr(e) {
    return e.toLowerCase().replace(/-(\w)/g, (e, t) => t.toUpperCase());
  }
  function Qr(e) {
    return !Array.isArray(e) && !isNaN(e);
  }
  function Xr(e) {
    return [' ', '_'].includes(e)
      ? e
      : e
          .replace(/([a-z])([A-Z])/g, '$1-$2')
          .replace(/[_\s]/, '-')
          .toLowerCase();
  }
  function ei(e) {
    return ['keydown', 'keyup'].includes(e);
  }
  function ti(t, e) {
    let n = e.filter(
      (e) =>
        !['window', 'document', 'prevent', 'stop', 'once', 'capture'].includes(
          e
        )
    );
    var e, r;
    if (
      (n.includes('debounce') &&
        ((e = n.indexOf('debounce')),
        n.splice(e, Qr((n[e + 1] || 'invalid-wait').split('ms')[0]) ? 2 : 1)),
      n.includes('throttle') &&
        ((r = n.indexOf('throttle')),
        n.splice(r, Qr((n[r + 1] || 'invalid-wait').split('ms')[0]) ? 2 : 1)),
      0 !== n.length && (1 !== n.length || !ni(t.key).includes(n[0])))
    ) {
      const i = ['ctrl', 'shift', 'alt', 'meta', 'cmd', 'super'],
        o = i.filter((e) => n.includes(e));
      if (((n = n.filter((e) => !o.includes(e))), 0 < o.length)) {
        var r = o.filter(
          (e) => t[`${(e = 'cmd' === e || 'super' === e ? 'meta' : e)}Key`]
        );
        if (r.length === o.length && ni(t.key).includes(n[0])) return;
      }
      return 1;
    }
  }
  function ni(t) {
    if (!t) return [];
    t = Xr(t);
    let n = {
      ctrl: 'control',
      slash: '/',
      space: ' ',
      spacebar: ' ',
      cmd: 'meta',
      esc: 'escape',
      up: 'arrow-up',
      down: 'arrow-down',
      left: 'arrow-left',
      right: 'arrow-right',
      period: '.',
      equal: '=',
      minus: '-',
      underscore: '_',
    };
    return (
      (n[t] = t),
      Object.keys(n)
        .map((e) => {
          if (n[e] === t) return e;
        })
        .filter((e) => e)
    );
  }
  function ri(e, n, r, i) {
    return M(() => {
      if (r instanceof CustomEvent && void 0 !== r.detail)
        return void 0 !== r.detail ? r.detail : r.target.value;
      if ('checkbox' === e.type) {
        if (Array.isArray(i)) {
          let t = n.includes('number') ? ii(r.target.value) : r.target.value;
          return r.target.checked ? i.concat([t]) : i.filter((e) => !(e == t));
        }
        return r.target.checked;
      }
      if ('select' === e.tagName.toLowerCase() && e.multiple)
        return n.includes('number')
          ? Array.from(r.target.selectedOptions).map((e) => {
              var t;
              return ii(e.value || e.text);
            })
          : Array.from(r.target.selectedOptions).map((e) => e.value || e.text);
      {
        let e = r.target.value;
        return n.includes('number') ? ii(e) : n.includes('trim') ? e.trim() : e;
      }
    });
  }
  function ii(e) {
    var t = e ? parseFloat(e) : null;
    return ai(t) ? t : e;
  }
  function oi(e, t) {
    return e == t;
  }
  function ai(e) {
    return !Array.isArray(e) && !isNaN(e);
  }
  function si(e) {
    return (
      null !== e &&
      'object' == typeof e &&
      'function' == typeof e.get &&
      'function' == typeof e.set
    );
  }
  function li(e, t) {
    e._x_keyExpression = t;
  }
  function ui(e, w, t, E) {
    let S = (e) => 'object' == typeof e && !Array.isArray(e),
      A = e;
    t((n) => {
      void 0 ===
        (n = fi(n) && 0 <= n ? Array.from(Array(n).keys(), (e) => e + 1) : n) &&
        (n = []);
      let i = e._x_lookup,
        t = e._x_prevKeys,
        o = [],
        a = [];
      if (S(n))
        n = Object.entries(n).map(([e, t]) => {
          var t = di(w, t, e, n);
          E((e) => a.push(e), { scope: { index: e, ...t } }), o.push(t);
        });
      else
        for (let e = 0; e < n.length; e++) {
          var r = di(w, n[e], e, n);
          E((e) => a.push(e), { scope: { index: e, ...r } }), o.push(r);
        }
      let s = [],
        l = [],
        u = [],
        c = [];
      for (let e = 0; e < t.length; e++) {
        var d = t[e];
        -1 === a.indexOf(d) && u.push(d);
      }
      t = t.filter((e) => !u.includes(e));
      let f = 'template';
      for (let e = 0; e < a.length; e++) {
        var p = a[e],
          _ = t.indexOf(p),
          h,
          v;
        -1 === _
          ? (t.splice(e, 0, p), s.push([f, e]))
          : _ !== e
          ? ((h = t.splice(e, 1)[0]),
            (v = t.splice(_ - 1, 1)[0]),
            t.splice(e, 0, v),
            t.splice(_, 0, h),
            l.push([h, v]))
          : c.push(p),
          (f = p);
      }
      for (let e = 0; e < u.length; e++) {
        var m = u[e];
        i[m]._x_effects && i[m]._x_effects.forEach(k),
          i[m].remove(),
          (i[m] = null),
          delete i[m];
      }
      for (let r = 0; r < l.length; r++) {
        var [g, x] = l[r];
        let e = i[g],
          t = i[x],
          n = document.createElement('div');
        M(() => {
          t.after(n),
            e.after(t),
            t._x_currentIfEl && t.after(t._x_currentIfEl),
            n.before(e),
            e._x_currentIfEl && e.after(e._x_currentIfEl),
            n.remove();
        }),
          F(t, o[a.indexOf(x)]);
      }
      for (let n = 0; n < s.length; n++) {
        var [y, b] = s[n];
        let e = 'template' === y ? A : i[y];
        e._x_currentIfEl && (e = e._x_currentIfEl);
        var y = o[b],
          b = a[b];
        let t = document.importNode(A.content, !0).firstElementChild;
        B(t, O(y), A),
          M(() => {
            e.after(t), Ge(t);
          }),
          'object' == typeof b &&
            qe(
              'x-for key cannot be an object, it must be a string or an integer',
              A
            ),
          (i[b] = t);
      }
      for (let e = 0; e < c.length; e++) F(i[c[e]], o[a.indexOf(c[e])]);
      A._x_prevKeys = a;
    });
  }
  function ci(e) {
    var r = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
      i = /^\s*\(|\)\s*$/g,
      t;
    let o = e.match(/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/);
    if (o) {
      let e = {};
      e.items = o[2].trim();
      let t = o[1].replace(i, '').trim(),
        n = t.match(r);
      return (
        n
          ? ((e.item = t.replace(r, '').trim()),
            (e.index = n[1].trim()),
            n[2] && (e.collection = n[2].trim()))
          : (e.item = t),
        e
      );
    }
  }
  function di(t, n, e, r) {
    let i = {};
    if (/^\[.*\]$/.test(t.item) && Array.isArray(n)) {
      let e = t.item
        .replace('[', '')
        .replace(']', '')
        .split(',')
        .map((e) => e.trim());
      e.forEach((e, t) => {
        i[e] = n[t];
      });
    } else if (
      /^\{.*\}$/.test(t.item) &&
      !Array.isArray(n) &&
      'object' == typeof n
    ) {
      let e = t.item
        .replace('{', '')
        .replace('}', '')
        .split(',')
        .map((e) => e.trim());
      e.forEach((e) => {
        i[e] = n[e];
      });
    } else i[t.item] = n;
    return (
      t.index && (i[t.index] = e), t.collection && (i[t.collection] = r), i
    );
  }
  function fi(e) {
    return !Array.isArray(e) && !isNaN(e);
  }
  function pi() {}
  function _i(t, n, r) {
    ve(n, (e) =>
      qe(
        `You can't use [x-${n}] without first installing the "${t}" plugin here: https://alpinejs.dev/plugins/${r}`,
        e
      )
    );
  }
  (on.inline = (e, { modifiers: t }, { cleanup: n }) => {
    t.includes('self') ? (e._x_ignoreSelf = !0) : (e._x_ignore = !0),
      n(() => {
        t.includes('self') ? delete e._x_ignoreSelf : delete e._x_ignore;
      });
  }),
    ve('ignore', on),
    ve('effect', (e, { expression: t }, { effect: n }) => n(re(e, t))),
    ve(
      'model',
      (t, { modifiers: n, expression: r }, { effect: e, cleanup: i }) => {
        let o = t;
        n.includes('parent') && (o = t.parentNode);
        let a = re(o, r),
          s;
        s =
          'string' == typeof r
            ? re(o, `${r} = __placeholder`)
            : 'function' == typeof r && 'string' == typeof r()
            ? re(o, `${r()} = __placeholder`)
            : () => {};
        let l = () => {
            let t;
            return a((e) => (t = e)), si(t) ? t.get() : t;
          },
          u = (e) => {
            let t;
            a((e) => (t = e)),
              si(t) ? t.set(e) : s(() => {}, { scope: { __placeholder: e } });
          };
        n.includes('fill') &&
          t.hasAttribute('value') &&
          (null === l() || '' === l()) &&
          u(t.value),
          'string' == typeof r &&
            'radio' === t.type &&
            M(() => {
              t.hasAttribute('name') || t.setAttribute('name', r);
            });
        var c =
            'select' === t.tagName.toLowerCase() ||
            ['checkbox', 'radio'].includes(t.type) ||
            n.includes('lazy')
              ? 'change'
              : 'input',
          c = xt
            ? () => {}
            : Jr(t, c, n, (e) => {
                u(ri(t, n, e, l()));
              });
        if (
          (t._x_removeModelListeners || (t._x_removeModelListeners = {}),
          (t._x_removeModelListeners.default = c),
          i(() => t._x_removeModelListeners.default()),
          t.form)
        ) {
          let e = Jr(t.form, 'reset', [], (e) => {
            tt(() => t._x_model && t._x_model.set(t.value));
          });
          i(() => e());
        }
        (t._x_model = {
          get() {
            return l();
          },
          set(e) {
            u(e);
          },
        }),
          (t._x_forceModelUpdate = (e) => {
            void 0 === (e = void 0 === e ? l() : e) &&
              'string' == typeof r &&
              r.match(/\./) &&
              (e = ''),
              (window.fromModel = !0),
              M(() => At(t, 'value', e)),
              delete window.fromModel;
          }),
          e(() => {
            var e = l();
            (n.includes('unintrusive') &&
              document.activeElement.isSameNode(t)) ||
              t._x_forceModelUpdate(e);
          });
      }
    ),
    ve('cloak', (e) =>
      queueMicrotask(() => M(() => e.removeAttribute(pe('cloak'))))
    ),
    He(() => `[${pe('init')}]`),
    ve(
      'init',
      yt(
        (e, { expression: t }, { evaluate: n }) =>
          ('string' != typeof t || !!t.trim()) && n(t, {}, !1)
      )
    ),
    ve('text', (t, { expression: e }, { effect: n, evaluateLater: r }) => {
      let i = r(e);
      n(() => {
        i((e) => {
          M(() => {
            t.textContent = e;
          });
        });
      });
    }),
    ve('html', (t, { expression: e }, { effect: n, evaluateLater: r }) => {
      let i = r(e);
      n(() => {
        i((e) => {
          M(() => {
            (t.innerHTML = e),
              (t._x_ignoreSelf = !0),
              Ge(t),
              delete t._x_ignoreSelf;
          });
        });
      });
    }),
    je(Ae(':', pe('bind:'))),
    ve(
      'bind',
      (
        t,
        { value: n, modifiers: r, expression: i, original: o },
        { effect: a }
      ) => {
        if (n) {
          if ('key' === n) return li(t, i);
          let e = re(t, i);
          a(() =>
            e((e) => {
              void 0 === e && 'string' == typeof i && i.match(/\./) && (e = ''),
                M(() => At(t, n, e, r));
            })
          );
        } else {
          var a = {};
          Kt(a);
          let e = re(t, i);
          e(
            (e) => {
              Vt(t, e, o);
            },
            { scope: a }
          );
        }
      }
    ),
    We(() => `[${pe('data')}]`),
    ve(
      'data',
      yt((e, { expression: t }, { cleanup: n }) => {
        t = '' === t ? '{}' : t;
        var r = {};
        G(r, e);
        var i = {};
        Zt(i, r);
        let o = ne(e, t, { scope: i });
        (void 0 !== o && !0 !== o) || (o = {}), G(o, e);
        let a = O(o);
        H(a);
        let s = B(e, a);
        a.init && ne(e, a.init),
          n(() => {
            a.destroy && ne(e, a.destroy), s();
          });
      })
    ),
    ve('show', (t, { modifiers: n, expression: e }, { effect: r }) => {
      let i = re(t, e);
      t._x_doHide ||
        (t._x_doHide = () => {
          M(() => {
            t.style.setProperty(
              'display',
              'none',
              n.includes('important') ? 'important' : void 0
            );
          });
        }),
        t._x_doShow ||
          (t._x_doShow = () => {
            M(() => {
              1 === t.style.length && 'none' === t.style.display
                ? t.removeAttribute('style')
                : t.style.removeProperty('display');
            });
          });
      let o = () => {
          t._x_doHide(), (t._x_isShown = !1);
        },
        a = () => {
          t._x_doShow(), (t._x_isShown = !0);
        },
        s = () => setTimeout(a),
        l = dt(
          (e) => (e ? a : o)(),
          (e) => {
            'function' == typeof t._x_toggleAndCascadeWithTransitions
              ? t._x_toggleAndCascadeWithTransitions(t, e, a, o)
              : (e ? s : o)();
          }
        ),
        u,
        c = !0;
      r(() =>
        i((e) => {
          (!c && e === u) ||
            (n.includes('immediate') && (e ? s : o)(), l(e), (u = e), (c = !1));
        })
      );
    }),
    ve('for', (e, { expression: t }, { effect: n, cleanup: r }) => {
      let i = ci(t),
        o = re(e, i.items),
        a = re(e, e._x_keyExpression || 'index');
      (e._x_prevKeys = []),
        (e._x_lookup = {}),
        n(() => ui(e, i, o, a)),
        r(() => {
          Object.values(e._x_lookup).forEach((e) => e.remove()),
            delete e._x_prevKeys,
            delete e._x_lookup;
        });
    }),
    (pi.inline = (e, { expression: t }, { cleanup: n }) => {
      let r = Ke(e);
      r._x_refs || (r._x_refs = {}),
        (r._x_refs[t] = e),
        n(() => delete r._x_refs[t]);
    }),
    ve('ref', pi),
    ve('if', (t, { expression: e }, { effect: n, cleanup: r }) => {
      let i = re(t, e),
        o = () => {
          if (t._x_currentIfEl) return t._x_currentIfEl;
          let e = t.content.cloneNode(!0).firstElementChild;
          return (
            B(e, {}, t),
            M(() => {
              t.after(e), Ge(e);
            }),
            (t._x_currentIfEl = e),
            (t._x_undoIf = () => {
              Ie(e, (e) => {
                e._x_effects && e._x_effects.forEach(k);
              }),
                e.remove(),
                delete t._x_currentIfEl;
            }),
            e
          );
        },
        a = () => {
          t._x_undoIf && (t._x_undoIf(), delete t._x_undoIf);
        };
      n(() =>
        i((e) => {
          (e ? o : a)();
        })
      ),
        r(() => t._x_undoIf && t._x_undoIf());
    }),
    ve('id', (t, { expression: e }, { evaluate: n }) => {
      let r = n(e);
      r.forEach((e) => Hr(t, e));
    }),
    je(Ae('@', pe('on:'))),
    ve(
      'on',
      yt((e, { value: t, modifiers: n, expression: r }, { cleanup: i }) => {
        let o = r ? re(e, r) : () => {};
        'template' === e.tagName.toLowerCase() &&
          (e._x_forwardEvents || (e._x_forwardEvents = []),
          e._x_forwardEvents.includes(t) || e._x_forwardEvents.push(t));
        let a = Jr(e, t, n, (e) => {
          o(() => {}, { scope: { $event: e }, params: [e] });
        });
        i(() => a());
      })
    ),
    _i('Collapse', 'collapse', 'collapse'),
    _i('Intersect', 'intersect', 'intersect'),
    _i('Focus', 'trap', 'focus'),
    _i('Mask', 'mask', 'mask'),
    Qt.setEvaluator(ae),
    Qt.setReactivityEngine({ reactive: Rr, effect: Ln, release: Tn, raw: Dr });
  var hi,
    Yn = Qt;
  function vi(e) {
    e.directive(
      'intersect',
      (
        e,
        { value: t, expression: n, modifiers: r },
        { evaluateLater: i, cleanup: o }
      ) => {
        let a = i(n);
        var n = { rootMargin: xi(r), threshold: mi(r) };
        let s = new IntersectionObserver((e) => {
          e.forEach((e) => {
            e.isIntersecting !== ('leave' === t) &&
              (a(), r.includes('once') && s.disconnect());
          });
        }, n);
        s.observe(e),
          o(() => {
            s.disconnect();
          });
      }
    );
  }
  function mi(e) {
    if (e.includes('full')) return 0.99;
    if (e.includes('half')) return 0.5;
    if (!e.includes('threshold')) return 0;
    var e = e[e.indexOf('threshold') + 1];
    return '100' === e ? 1 : '0' === e ? 0 : Number(`.${e}`);
  }
  function gi(e) {
    var e = e.match(/^(-?[0-9]+)(px|%)?$/);
    return e ? e[1] + (e[2] || 'px') : void 0;
  }
  function xi(t) {
    var e,
      n = '0px 0px 0px 0px',
      r = t.indexOf('margin');
    if (-1 === r) return n;
    let i = [];
    for (let e = 1; e < 5; e++) i.push(gi(t[r + e] || ''));
    return (
      (i = i.filter((e) => void 0 !== e)), i.length ? i.join(' ').trim() : n
    );
  }
  var on = vi,
    yi = (e, t, n) => (n.addEventListener(e, t), n);
  function bi(e, t, n) {
    return n.setAttribute(e, t), n;
  }
  var wi = (e, t) => 'true' === t.getAttribute(e);
  function Ei(t) {
    return function (e) {
      var e;
      e
        ? ((e = window.scrollY),
          t.setAttribute('data-save-scroll', e),
          (document.documentElement.style.position = 'fixed'),
          (document.body.style.marginTop = '-' + e + 'px'))
        : ((document.documentElement.style.position = 'static'),
          (document.body.style.marginTop = 'auto'),
          window.scrollTo(0, parseInt(t.getAttribute('data-save-scroll'))));
    };
  }
  function Si(e) {
    var t = wi('aria-expanded', e.currentTarget),
      n = document.getElementById(
        e.currentTarget.getAttribute('aria-controls')
      );
    bi('aria-expanded', !t, e.currentTarget),
      bi('data-menu-open', !t, n),
      Ei(n)(!t);
  }
  function Ai(e) {
    yi('click', Si, e);
  }
  var Oi = (e, t) => 'true' === e.getAttribute(t);
  function ki(e) {
    const t = document.getElementById(
      e.currentTarget.getAttribute('aria-controls')
    );
    if (t) {
      var n = !Oi(t, 'data-popup-hidden'),
        r;
      return (
        t.setAttribute('data-popup-hidden', n),
        n
          ? ((document.documentElement.style.position = 'static'),
            (document.body.style.marginTop = 'auto'),
            document.body.classList.remove('sc-popup__open'),
            window.scrollTo(0, parseInt(t.getAttribute('data-popup-scroll'))))
          : ((r = window.scrollY),
            t.setAttribute('data-popup-scroll', r),
            (document.documentElement.style.position = 'fixed'),
            (document.documentElement.style.width = '100%'),
            (document.body.style.marginTop = '-' + r + 'px'),
            document.body.classList.add('sc-popup__open')),
        n
      );
    }
    return e;
  }
  function $i([e, ...t]) {
    return { previous: [], current: e, after: t };
  }
  function ji(e) {
    if (Li(e)) return { ...e };
    const { previous: t, current: n, after: r } = e;
    if (0 === t.length) return { previous: t, current: n, after: r };
    var i = n,
      e = t.pop();
    return r.unshift(i), { previous: t, current: e, after: r };
  }
  function Ci(e) {
    if (Li(e)) return { ...e };
    const { previous: t, current: n, after: r } = e;
    if (0 === r.length) return { previous: t, current: n, after: r };
    var i = n,
      e = r.shift();
    return t.push(i), { previous: t, current: e, after: r };
  }
  function Li(e) {
    var { previous: t, current: n, after: e } = e;
    return 0 === t.length && void 0 === n && 0 === e.length;
  }
  function Ti({ previous: e }) {
    return e.length;
  }
  var Ni = 'https://js.stripe.com/v3',
    Mi = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
    Pi =
      'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used',
    Ri = function e() {
      for (
        var t = document.querySelectorAll('script[src^="'.concat(Ni, '"]')),
          n = 0;
        n < t.length;
        n++
      ) {
        var r = t[n];
        if (Mi.test(r.src)) return r;
      }
      return null;
    },
    Ii = function e(t) {
      var n = t && !t.advancedFraudSignals ? '?advancedFraudSignals=false' : '',
        t = document.createElement('script');
      t.src = ''.concat(Ni).concat(n);
      var n = document.head || document.body;
      if (!n)
        throw new Error(
          'Expected document.body not to be null. Stripe.js requires a <body> element.'
        );
      return n.appendChild(t), t;
    },
    qi = function e(t, n) {
      t &&
        t._registerWrapper &&
        t._registerWrapper({
          name: 'stripe-js',
          version: '1.11.0',
          startTime: n,
        });
    },
    Di = null,
    zi = function e(r) {
      return null !== Di
        ? Di
        : (Di = new Promise(function (e, t) {
            if ('undefined' != typeof window)
              if ((window.Stripe && r && console.warn(Pi), window.Stripe))
                e(window.Stripe);
              else
                try {
                  var n = Ri();
                  n && r ? console.warn(Pi) : (n = n || Ii(r)),
                    n.addEventListener('load', function () {
                      window.Stripe
                        ? e(window.Stripe)
                        : t(new Error('Stripe.js not available'));
                    }),
                    n.addEventListener('error', function () {
                      t(new Error('Failed to load Stripe.js'));
                    });
                } catch (e) {
                  return void t(e);
                }
            else e(null);
          }));
    },
    Bi = function e(t, n, r) {
      if (null === t) return null;
      var n = t.apply(void 0, n);
      return qi(n, r), n;
    },
    Fi = Promise.resolve().then(function () {
      return zi(null);
    }),
    Ui = !1;
  Fi.catch(function (e) {
    Ui || console.warn(e);
  });
  var Wi = function e() {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
      Ui = !0;
      var i = Date.now();
      return Fi.then(function (e) {
        return Bi(e, n, i);
      });
    },
    Ae = document.querySelector('.menu-button'),
    Hi,
    Ki;
  Ae && Ai(Ae),
    document
      .querySelectorAll('[data-action-popup]')
      .forEach((e) => e.addEventListener('click', ki));
  var Vi = () =>
      (Ki = Ki || Wi(websharp_globals.GATSBY_STRIPE_PUBLISHABLE_KEY)),
    Yi = async (e) => {
      e.preventDefault();
      const t = e.currentTarget;
      t.disabled = !0;
      var e = t.getAttribute('data-stripe-action');
      if (e) {
        const n = await Vi();
        var { error: e } = await n.redirectToCheckout({
          mode: 'subscription',
          lineItems: [{ price: e, quantity: 1 }],
          successUrl: `${websharp_globals.url}/payment-success`,
          cancelUrl: `${websharp_globals.url}/bookkeeping`,
        });
        e && (console.warn('Error:', e), (t.disabled = !1));
      }
    },
    Ji;
  function Zi(e) {
    var t = new RegExp('(\\+?\\$?)([0-9]*.?[0-9]*)([a-zA-z]?)'),
      [n, e, t] = e.trim().match(t);
    return [e, parseInt(t)];
  }
  function Gi({ el: t, start: n, end: r, duration: i, prefix: o = '' }) {
    let a = null;
    const s = (e) => {
      a = a || e;
      var e = Math.min((e - a) / i, 1);
      (t.innerHTML = `${o}${Math.floor(e * (r - n) + n).toLocaleString(
        'en-US'
      )}`),
        e < 1 && window.requestAnimationFrame(s);
    };
    window.requestAnimationFrame(s);
  }
  document
    .querySelectorAll('[data-stripe-action]')
    .forEach((e) => e.addEventListener('click', Yi)),
    (window.Alpine = Yn).data('collapse', () => ({
      expanded: null,
      init() {
        const e = this.$refs.content;
        (e.hidden = !0), e.classList.add('collapse__content');
      },
      toggle() {
        const e = this.$refs.content;
        this.expanded
          ? ((this.expanded = !1),
            (e.hidden = !0),
            e.style.removeProperty('--collapse-height'))
          : ((e.hidden = !1),
            (this.expanded = !0),
            e.style.setProperty('--collapse-height', `${e.scrollHeight}px`));
      },
      updateHeight() {
        if (this.expanded) {
          const e = this.$refs.content;
          e.style.setProperty('--collapse-height', `${e.scrollHeight}px`);
        }
      },
    })),
    Yn.data('countUp', () => ({
      duration: 2e3,
      run() {
        var [e, t] = Zi(this.$el.innerHTML);
        Gi({
          el: this.$el,
          start: 0,
          end: t,
          duration: this.duration,
          prefix: e,
        });
      },
    }));
  var Qi = {
      single: [0, 10275, 41775, 89075, 170050, 215950, 539900],
      hoh: [0, 14650, 55900, 89050, 170050, 215950, 539900],
      mfj: [0, 20550, 83550, 178150, 340100, 431900, 647850],
      mfs: [0, 10275, 41775, 89075, 170050, 215950, 323925],
      widow: [0, 20550, 83550, 178150, 340100, 431900, 647850],
    },
    Xi = [0.1, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37];
  function eo({ status: e, earnings: i }) {
    const o = Qi[e];
    var e = o.reduce((e, t, n) => {
      if (t < i) {
        var r = n + 1;
        return r >= o.length || i < o[r]
          ? e + (i - t) * Xi[n]
          : e + (o[r] - t) * Xi[n];
      }
      return e;
    }, 0);
    const t = e / i;
    return [
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(e),
      t.toFixed(2),
    ];
  }
  Yn.data('taxes', () => ({
    status: 'single',
    earnings: 0,
    payment: null,
    effectiveRate: null,
    estimate() {
      var [e, t] = eo({ status: this.status, earnings: this.earnings });
      console.log(e, t),
        (this.payment = e),
        (this.effectiveRate = t),
        console.log(this);
    },
  })),
    Yn.data('showable', () => {
      function t(e) {
        let t = e.target.value.replace(/\D/g, '');
        var n = t.match(/^(\d{3})(\d{3})(\d{4})$/);
        console.log(n), n && (e.target.value = `(${n[1]}) ${n[2]}-${n[3]}`);
      }
      return {
        init() {
          (this._show = !0),
            setTimeout(() => {
              this._show = !1;
            }, 1e3);
        },
        toggle() {
          this._show = !this._show;
        },
        hide() {
          this._show = !1;
          const e = this.$refs.parent.querySelector("[name='phone-1']");
          e && e.removeEventListener('blur', t);
        },
        show() {
          this.$refs.parent.classList.remove('!sr-only'),
            this.$refs.child.classList.remove('!sr-only'),
            (this._show = !0);
          const e = this.$refs.parent.querySelector("[name='phone-1']");
          console.log(e), e && e.addEventListener('blur', t);
        },
        isShowing() {
          return !0 === this._show;
        },
      };
    }),
    Yn.data('slider', () => ({
      init() {
        (this.slides = $i(
          Array.from(this.$refs.wrapper.children).filter(
            (e) => (
              console.log(e.tagName), 'noscript' !== e.tagName.toLowerCase()
            )
          )
        )),
          this.slides.current.classList.remove('hidden');
      },
      next() {
        this.slides.current.classList.add('hidden'),
          (this.slides = Ci(this.slides)),
          this.slides.current.classList.remove('hidden');
      },
      prev() {
        this.slides.current.classList.add('hidden'),
          (this.slides = ji(this.slides)),
          this.slides.current.classList.remove('hidden');
      },
      currentCount() {
        return Ti(this.slides) + 1;
      },
    })),
    Yn.data('replayable', () => ({
      restart() {
        (this.$refs.video.currentTime = 0),
          (this.$refs.video.muted = !1),
          (this.$refs.video.controls = !0),
          this.$el.classList.add('hidden');
      },
    })),
    Yn.plugin(on),
    Yn.start();
})();
