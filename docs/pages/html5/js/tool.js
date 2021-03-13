let tool = {
  $: (id) => document.getElementById(id),
  $t: (tagName, parent) => {
      parent = parent || document;
      return parent.getElementsByTagName(tagName);
  },
  $c(c, p) {
      var t = this.$t("*", p),
          r = [];
      p = p || document;
      c = " " + c + " ";
      for (var i = 0; i < t.length; i++) {
          var e = t[i],
              cN = " " + e.className + " ";
          cN.indexOf(c) > -1 && r.push(e);
      }
      return r;
  },
  getElementPos: (el) => {
      var l = 0,
          t = 0;
      while (el.offsetParent) {
          l += el.offsetLeft;
          t += el.offsetTop;
          el = el.offsetParent;
      }
      return [l, t];
  },
  bind: (() =>
      window.addEventListener
          ? function (e, t, h) {
                e.addEventListener(t, h, false);
            }
          : function (e, t, h) {
                e.attachEvent("on" + t, h);
            })(),
  unbind: (() =>
      window.addEventListener
          ? function (e, t, h) {
                e.removeEventListerner(t, h, false);
            }
          : function (e, t, h) {
                e.detachEvent("on" + t, h);
            })(),
  getEvent: (ev) => ev || W.event,
  getTarget: function (ev) {
      ev = this.getEvent(ev);
      return ev.target || ev.srcElement;
  },
  preventDefault: function (ev) {
      ev.preventDefault ? ev.preventDefault() : (ev.returnValue = false);
  },
  getStyle: (() => {
      var b = document.body || document.documentElement;
      return b.currentStyle ? (e) => e.currentStyle : (e) => document.defaultView.getComputedStyle(e, null);
  })(),
  isUndefined: (x) => typeof x === "undefined",
  isArray: (elem) => Object.prototype.toString.call(elem) === "[object Array]",
  isObject: (elem) => elem === Object(elem),
  isString: (elem) => Object.prototype.toString.call(elem) === "[object String]",
  isNum: (elem) => Object.prototype.toString.call(elem) === "[object Number]",
  extend: function (a, b, c) {
      var U = this.isUndefined;
      U(c) && (c = true);
      for (var key in b) {
          if (c || U(a[key])) a[key] = b[key];
      }
      return a;
  },
  inherit: function (c, p) {
      var f = function () {};
      f.prototype = p.prototype;
      c.prototype = new f();
      c.prototype.constructor = c;
      c.prototype.parent = p;
  },
}