const e = (e, n) => {
    for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
    return e;
  },
  n = (n, t, r) => {
    var i = e(
      {
        minFontSize: -1 / 0,
        maxFontSize: 1 / 0,
        container: n,
      },
      r
    );
    const o = function (e) {
      const n = t || 1,
        r = function () {
          e.style.fontSize =
            Math.max(
              Math.min(
                (i?.container?.clientWidth || 0) / (10 * n),
                parseFloat(i.maxFontSize)
              ),
              parseFloat(i.minFontSize)
            ) + "px";
        };
      if ((r(), "ResizeObserver" in window == 0)) {
        const e = import("./p-6bd72be5.js").then(() => {
          (window.ResizeObserver = e.ResizeObserver),
            new ResizeObserver(r).observe(i.container);
        });
      } else new ResizeObserver(r).observe(i.container);
    };
    if (n.length) for (let e = 0; e < n.length; e++) o(n[e]);
    else o(n);
    return n;
  };
export { n as f };
