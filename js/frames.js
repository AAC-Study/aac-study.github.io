/* Рамки для аватарок: Frames.list, Frames.render(), Frames.picker().
   Все анимации — только CSS (transform/opacity), см. css/frames.css.
   Пишем на ES5/ES2017 без ?. и ?? — для старых телефонов. */
(function () {
  'use strict';

  /* ---------- маленькие SVG-украшения (viewBox 0 0 100 100, центр 50,50) ---------- */
  function pt(deg, r) {
    var a = deg * Math.PI / 180;
    return [50 + r * Math.sin(a), 50 - r * Math.cos(a)];
  }
  function f(n) { return Math.round(n * 100) / 100; }
  function svg(inner) {
    return '<svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">' + inner + '</svg>';
  }
  /* Четырёхлучевая звёздочка-искра */
  function sparkle(x, y, s, fill, extra) {
    return '<path d="M' + f(x) + ',' + f(y - s) + 'Q' + f(x) + ',' + f(y) + ' ' + f(x + s) + ',' + f(y) +
      'Q' + f(x) + ',' + f(y) + ' ' + f(x) + ',' + f(y + s) + 'Q' + f(x) + ',' + f(y) + ' ' + f(x - s) + ',' + f(y) +
      'Q' + f(x) + ',' + f(y) + ' ' + f(x) + ',' + f(y - s) + 'Z" fill="' + fill + '"' + (extra || '') + '/>';
  }
  /* Детерминированный «случайный» генератор, чтобы звёзды стояли всегда одинаково */
  function rng(seed) {
    var s = seed;
    return function () { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  }

  function pearlsSvg() {
    var out = '', n = 34, i, p;
    for (i = 0; i < n; i++) {
      p = pt(i * 360 / n, 45.7);
      out += '<circle cx="' + f(p[0]) + '" cy="' + f(p[1]) + '" r="3.55" fill="' + (i % 2 ? '#f6f1fd' : '#efe7fb') +
        '" stroke="#b9a9d9" stroke-opacity=".55" stroke-width=".5"/>';
      out += '<circle cx="' + f(p[0] - 1.05) + '" cy="' + f(p[1] - 1.1) + '" r="1.15" fill="#fff" fill-opacity=".95"/>';
    }
    return svg(out);
  }

  function oceanSvg() {
    return svg('<circle cx="50" cy="50" r="48.6" fill="none" stroke="#2bb8e0" stroke-width="1.7" stroke-linecap="round" stroke-dasharray="0.1 5.2"/>' +
      '<circle cx="50" cy="50" r="48.6" fill="none" stroke="#7fe3f5" stroke-opacity=".5" stroke-width=".6" stroke-dasharray="6 9" stroke-dashoffset="3"/>');
  }

  function laurelSvg() {
    /* правая ветка; левая — зеркальная копия */
    var leaves = '', i, n = 8, deg, r = 44.6, p, dir, nx, ny, ang, len, w, tilt, k, side;
    leaves += '<path d="M' + pt(172, r).map(f).join(',') + ' A' + r + ',' + r + ' 0 0 0 ' + pt(26, r).map(f).join(',') +
      '" fill="none" stroke="#3d8a52" stroke-width=".9" stroke-linecap="round"/>';
    for (i = 0; i < n; i++) {
      deg = 164 - i * (134 / (n - 1));
      len = 10.5 - i * 0.55; w = 4.6 - i * 0.22;
      for (k = 0; k < 2; k++) {
        side = k === 0 ? 1 : -1;                       // 1 — наружу, -1 — внутрь
        p = pt(deg + (k ? 5 : 0), r);
        dir = [-Math.cos(deg * Math.PI / 180), -Math.sin(deg * Math.PI / 180)]; // к макушке
        nx = Math.sin(deg * Math.PI / 180); ny = -Math.cos(deg * Math.PI / 180); // наружу
        ang = Math.atan2(dir[1], dir[0]) * 180 / Math.PI;
        tilt = 30;
        var a1 = ang + tilt, a2 = ang - tilt;
        var d1 = Math.cos(a1 * Math.PI / 180) * nx + Math.sin(a1 * Math.PI / 180) * ny;
        ang = (side > 0) === (d1 > 0) ? a1 : a2;
        var L = side > 0 ? len : len * 0.78;
        leaves += '<path transform="translate(' + f(p[0]) + ',' + f(p[1]) + ') rotate(' + f(ang) + ')" d="M0,0 Q' + f(L / 2) + ',' + f(-w) + ' ' + f(L) + ',0 Q' + f(L / 2) + ',' + f(w) + ' 0,0Z" fill="' +
          ((i + k) % 2 ? '#4fae66' : '#2f8a4c') + '"/>';
        leaves += '<path transform="translate(' + f(p[0]) + ',' + f(p[1]) + ') rotate(' + f(ang) + ')" d="M.6,0 L' + f(L * 0.85) + ',0" stroke="#bfe7b9" stroke-opacity=".55" stroke-width=".35"/>';
      }
    }
    var tip = pt(26, r);
    leaves += '<path transform="translate(' + f(tip[0]) + ',' + f(tip[1]) + ') rotate(-70)" d="M0,0 Q3.5,-2.6 7,0 Q3.5,2.6 0,0Z" fill="#4fae66"/>';
    var berry = '';
    [120, 74].forEach(function (d) { var b = pt(d, 40.6); berry += '<circle cx="' + f(b[0]) + '" cy="' + f(b[1]) + '" r="1.25" fill="#e8b93c"/>'; });
    var g = leaves + berry;
    /* золотая лента снизу */
    var ribbon = '<path d="M44.5,96.8 L50,93.2 L55.5,96.8 L53.6,100 L50,97.6 L46.4,100Z" fill="#d9a521"/>' +
      '<circle cx="50" cy="94.6" r="2.4" fill="#f3c94b" stroke="#b9861a" stroke-width=".5"/>';
    return svg('<g>' + g + '</g><g transform="translate(100,0) scale(-1,1)">' + g + '</g>' + ribbon);
  }

  function gemSvg() {
    var a = pt(42, 47), b = pt(222, 46.5);
    return svg(sparkle(a[0], a[1], 5.4, '#ffffff', ' fill-opacity=".95"') + sparkle(b[0], b[1], 3.2, '#f3e9ff', ' fill-opacity=".85"'));
  }

  function flower(cx, cy, s, rot) {
    var out = '', i;
    for (i = 0; i < 5; i++) {
      out += '<ellipse cx="' + f(cx) + '" cy="' + f(cy - s * 0.52) + '" rx="' + f(s * 0.36) + '" ry="' + f(s * 0.56) + '" transform="rotate(' + f(rot + i * 72) + ' ' + f(cx) + ' ' + f(cy) + ')" fill="' + (i % 2 ? '#ff9cc0' : '#ffb3cf') + '" stroke="#f07aa6" stroke-opacity=".45" stroke-width=".35"/>';
    }
    out += '<circle cx="' + f(cx) + '" cy="' + f(cy) + '" r="' + f(s * 0.22) + '" fill="#ffd36b"/>';
    return out;
  }
  function sakuraSvg() {
    var out = '', spots = [[38, 46, 9.6, 10], [146, 46.5, 6.6, 40], [214, 46, 8.4, 20], [304, 46.5, 5.8, 0]];
    spots.forEach(function (s) { var p = pt(s[0], s[1]); out += flower(p[0], p[1], s[2], s[3]); });
    [[68, 47.5], [262, 47], [180, 47.2]].forEach(function (d, i) {
      var p = pt(d[0], d[1]);
      out += '<ellipse cx="' + f(p[0]) + '" cy="' + f(p[1]) + '" rx="1.3" ry="2.1" transform="rotate(' + (40 + i * 70) + ' ' + f(p[0]) + ' ' + f(p[1]) + ')" fill="#ffc2d8"/>';
    });
    return svg(out);
  }

  function starsSvg(seed, count, rMin, rMax, sparkles, color) {
    var R = rng(seed), out = '', i, p, s;
    for (i = 0; i < count; i++) {
      p = pt(i * 360 / count + R() * 9, rMin + R() * (rMax - rMin));
      out += '<circle cx="' + f(p[0]) + '" cy="' + f(p[1]) + '" r="' + f(0.45 + R() * 0.75) + '" fill="' + color + '" fill-opacity="' + f(0.55 + R() * 0.45) + '"/>';
    }
    for (i = 0; i < sparkles.length; i++) {
      s = sparkles[i];
      p = pt(s[0], s[1]);
      out += sparkle(p[0], p[1], s[2], s[3] || color);
    }
    return svg(out);
  }

  function goldenSvg() {
    var top = pt(0, 45.2), l = pt(270, 45.2), r = pt(90, 45.2), b = pt(180, 45.2), out = '';
    out += '<circle cx="' + f(top[0]) + '" cy="' + f(top[1]) + '" r="4.1" fill="#d61f5b" stroke="#fff1bf" stroke-width="1"/>' +
      '<circle cx="' + f(top[0] - 1.2) + '" cy="' + f(top[1] - 1.3) + '" r="1.2" fill="#fff" fill-opacity=".85"/>';
    [l, r].forEach(function (p) {
      out += '<rect x="' + f(p[0] - 2.5) + '" y="' + f(p[1] - 2.5) + '" width="5" height="5" rx=".6" transform="rotate(45 ' + f(p[0]) + ' ' + f(p[1]) + ')" fill="#7fd0ff" stroke="#fff1bf" stroke-width=".8"/>' +
        '<circle cx="' + f(p[0] - .8) + '" cy="' + f(p[1] - .9) + '" r=".8" fill="#fff"/>';
    });
    out += '<circle cx="' + f(b[0]) + '" cy="' + f(b[1]) + '" r="2.8" fill="#d61f5b" stroke="#fff1bf" stroke-width=".8"/>';
    return svg(out);
  }

  function orbitSparkles() {
    var a = pt(0, 47.2), b = pt(180, 47.2), c = pt(100, 47.8);
    return svg('<circle cx="' + f(a[0]) + '" cy="' + f(a[1]) + '" r="5.2" fill="#fff6d5" fill-opacity=".35"/>' +
      sparkle(a[0], a[1], 5.8, '#fffbe8', ' stroke="#e0a21c" stroke-width=".5"') + sparkle(b[0], b[1], 3.8, '#fff3c4', ' stroke="#c98ee8" stroke-width=".4"') +
      '<circle cx="' + f(c[0]) + '" cy="' + f(c[1]) + '" r="1" fill="#fff"/>');
  }

  /* ---------- праздничные украшения ---------- */
  function pumpkin(x, y, sz, face) {
    var o = '<g transform="translate(' + f(x) + ',' + f(y) + ')">' +
      '<path d="M-.6,' + f(-sz * .42) + ' q.3,' + f(-sz * .3) + ' ' + f(sz * .28) + ',' + f(-sz * .38) + '" stroke="#3f6b22" stroke-width="' + f(sz * .14) + '" stroke-linecap="round" fill="none"/>' +
      '<ellipse rx="' + f(sz * .58) + '" ry="' + f(sz * .44) + '" fill="#f47a12"/>' +
      '<ellipse rx="' + f(sz * .36) + '" ry="' + f(sz * .44) + '" fill="#ff9330"/>' +
      '<ellipse rx="' + f(sz * .12) + '" ry="' + f(sz * .43) + '" fill="#ffa64d"/>';
    if (face) o += '<path d="M' + f(-sz * .3) + ',' + f(-sz * .08) + 'l' + f(sz * .12) + ',' + f(-sz * .14) + 'l' + f(sz * .12) + ',' + f(sz * .14) + 'Z M' + f(sz * .06) + ',' + f(-sz * .08) + 'l' + f(sz * .12) + ',' + f(-sz * .14) + 'l' + f(sz * .12) + ',' + f(sz * .14) + 'Z' +
      ' M' + f(-sz * .3) + ',' + f(sz * .1) + 'q' + f(sz * .3) + ',' + f(sz * .22) + ' ' + f(sz * .6) + ',0 l' + f(-sz * .1) + ',' + f(sz * .05) + 'l' + f(-sz * .1) + ',' + f(-sz * .05) + 'l' + f(-sz * .1) + ',' + f(sz * .05) + 'l' + f(-sz * .1) + ',' + f(-sz * .05) + 'l' + f(-sz * .1) + ',' + f(sz * .05) + 'Z" fill="#ffe27a" class="fr-glowface"/>';
    return o + '</g>';
  }
  function leaf(x, y, L, rot, fill) {
    return '<path transform="translate(' + f(x) + ',' + f(y) + ') rotate(' + f(rot) + ')" d="M0,0 Q' + f(L * .5) + ',' + f(-L * .42) + ' ' + f(L) + ',0 Q' + f(L * .5) + ',' + f(L * .42) + ' 0,0Z" fill="' + fill + '"/>';
  }
  function pumpkinSvg() {
    var out = '', a = pt(152, 44), b = pt(208, 44.5), c = pt(180, 46), d = pt(35, 45.5);
    out += leaf(a[0] - 3, a[1] + 1, 11, 200, '#b5541c') + leaf(b[0] + 3, b[1] + 1, 11, -20, '#d9822b');
    out += pumpkin(a[0], a[1], 13, false) + pumpkin(b[0], b[1], 12, false) + pumpkin(c[0], c[1] + 1, 16, false) + pumpkin(d[0], d[1], 10, false);
    var l = pt(325, 46); out += leaf(l[0], l[1], 10, 60, '#e0a03a') + leaf(l[0], l[1], 9, 150, '#c4621f') + leaf(l[0], l[1], 8, 250, '#b5541c');
    return svg(out);
  }
  function webSvg() {
    var cx = pt(42, 44)[0], cy = pt(42, 44)[1], out = '', i, k, r, pts, web = '';
    for (i = 0; i < 8; i++) { var a = (i * 45 + 10) * Math.PI / 180; web += '<line x1="' + f(cx) + '" y1="' + f(cy) + '" x2="' + f(cx + Math.cos(a) * 16) + '" y2="' + f(cy + Math.sin(a) * 16) + '"/>'; }
    for (k = 1; k <= 3; k++) {
      r = k * 5; pts = [];
      for (i = 0; i <= 8; i++) { var b = (i * 45 + 10) * Math.PI / 180; pts.push(f(cx + Math.cos(b) * r) + ',' + f(cy + Math.sin(b) * r)); }
      web += '<polyline points="' + pts.join(' ') + '"/>';
    }
    out += '<g fill="none" stroke="#2a1640" stroke-opacity=".35" stroke-width="1.1">' + web + '</g><g fill="none" stroke="#f3efff" stroke-opacity=".95" stroke-width=".5">' + web + '</g>';
    var sp = pt(222, 40);
    out += '<line x1="' + f(sp[0]) + '" y1="' + f(sp[1] - 6) + '" x2="' + f(sp[0]) + '" y2="' + f(sp[1] + 6) + '" stroke="#f3efff" stroke-width=".5"/>';
    out += '<g transform="translate(' + f(sp[0]) + ',' + f(sp[1] + 9) + ') scale(1.6)">';
    [-1, 1].forEach(function (d) { [-1.6, -.4, .8].forEach(function (yy) { out += '<path d="M0,' + yy + ' q' + (d * 2.2) + ',-1.6 ' + (d * 3.4) + ',.6" stroke="#1a1026" stroke-width=".5" fill="none"/>'; }); });
    out += '<ellipse rx="1.9" ry="2.4" fill="#1a1026" stroke="#e6dcff" stroke-width=".3"/><circle cy="-2.4" r="1.2" fill="#1a1026" stroke="#e6dcff" stroke-width=".3"/><circle cx="-.45" cy="-2.6" r=".3" fill="#ff4d4d"/><circle cx=".45" cy="-2.6" r=".3" fill="#ff4d4d"/></g>';
    return svg(out);
  }
  function ghost(x, y, sz) {
    var h = sz / 2;
    return '<g transform="translate(' + f(x) + ',' + f(y) + ')"><path d="M' + f(-h) + ',' + f(h) + ' L' + f(-h) + ',' + f(-h * .1) + ' A' + f(h) + ',' + f(h) + ' 0 0 1 ' + f(h) + ',' + f(-h * .1) + ' L' + f(h) + ',' + f(h) +
      ' l' + f(-sz / 6) + ',' + f(-sz / 7) + ' l' + f(-sz / 6) + ',' + f(sz / 7) + ' l' + f(-sz / 6) + ',' + f(-sz / 7) + ' l' + f(-sz / 6) + ',' + f(sz / 7) + ' l' + f(-sz / 6) + ',' + f(-sz / 7) + ' Z" fill="#f7f5ff" stroke="#b9b0e8" stroke-width=".4"/>' +
      '<ellipse cx="' + f(-h * .35) + '" cy="' + f(-h * .15) + '" rx="' + f(sz * .08) + '" ry="' + f(sz * .12) + '" fill="#2a2140"/><ellipse cx="' + f(h * .35) + '" cy="' + f(-h * .15) + '" rx="' + f(sz * .08) + '" ry="' + f(sz * .12) + '" fill="#2a2140"/>' +
      '<ellipse cy="' + f(h * .3) + '" rx="' + f(sz * .09) + '" ry="' + f(sz * .07) + '" fill="#2a2140"/></g>';
  }
  function bat(x, y, sz, rot) {
    var k = sz / 10;
    return '<path transform="translate(' + f(x) + ',' + f(y) + ') rotate(' + f(rot || 0) + ') scale(' + f(k) + ')" d="M0,-1.5 C1,-3 2,-1 2.5,-.5 C4,-3 7,-3 9,-1 C7,-1 6.5,0 6.6,1.6 C5.6,.6 4.4,.6 3.8,2 C3,1 1.6,.8 0,2.6 C-1.6,.8 -3,1 -3.8,2 C-4.4,.6 -5.6,.6 -6.6,1.6 C-6.5,0 -7,-1 -9,-1 C-7,-3 -4,-3 -2.5,-.5 C-2,-1 -1,-3 0,-1.5Z" fill="#1d1030"/>';
  }
  function hauntedSvg() { var a = pt(35, 45), b = pt(215, 45.5), c = pt(125, 47); return svg(ghost(a[0], a[1], 15) + ghost(b[0], b[1], 12) + ghost(c[0], c[1], 8)); }
  function batsSvg() { var a = pt(60, 49), b = pt(250, 50), c = pt(300, 48.5); return svg(bat(a[0], a[1], 13, 150) + bat(b[0], b[1], 10, 270) + bat(c[0], c[1], 11, 20)); }
  function jackSvg() { var a = pt(180, 44), b = pt(140, 46), c = pt(220, 46); return svg(pumpkin(b[0], b[1], 9, false) + pumpkin(c[0], c[1], 9, false) + pumpkin(a[0], a[1], 19, true)); }

  function hollyLeaf(x, y, L, rot) {
    var w = L * .3;
    return '<path transform="translate(' + f(x) + ',' + f(y) + ') rotate(' + f(rot) + ')" d="M0,0 L' + f(L * .18) + ',' + f(-w) + ' L' + f(L * .36) + ',' + f(-w * .55) + ' L' + f(L * .54) + ',' + f(-w * 1.05) + ' L' + f(L * .72) + ',' + f(-w * .55) + ' L' + f(L * .88) + ',' + f(-w * .8) + ' L' + f(L) + ',0' +
      ' L' + f(L * .88) + ',' + f(w * .8) + ' L' + f(L * .72) + ',' + f(w * .55) + ' L' + f(L * .54) + ',' + f(w * 1.05) + ' L' + f(L * .36) + ',' + f(w * .55) + ' L' + f(L * .18) + ',' + f(w) + 'Z" fill="#1f8a3c" stroke="#14692b" stroke-width=".4"/>' +
      '<path transform="translate(' + f(x) + ',' + f(y) + ') rotate(' + f(rot) + ')" d="M.5,0 L' + f(L * .9) + ',0" stroke="#7fd08f" stroke-width=".35"/>';
  }
  function berries(x, y) {
    return [[0, 0], [2.6, .6], [1.1, 2.3]].map(function (d) { return '<circle cx="' + f(x + d[0] - 1.2) + '" cy="' + f(y + d[1] - 1) + '" r="1.75" fill="#e0182d" stroke="#9e0f1e" stroke-width=".35"/><circle cx="' + f(x + d[0] - 1.7) + '" cy="' + f(y + d[1] - 1.5) + '" r=".5" fill="#fff" fill-opacity=".8"/>'; }).join('');
  }
  function hollySvg() {
    var a = pt(325, 46), b = pt(145, 46.5), out = '';
    out += hollyLeaf(a[0], a[1], 16, 200) + hollyLeaf(a[0], a[1], 16, 290) + berries(a[0], a[1]);
    out += hollyLeaf(b[0], b[1], 13, 20) + hollyLeaf(b[0], b[1], 13, 110) + berries(b[0], b[1]);
    return svg(out);
  }
  function bowSvg() {
    var b = pt(180, 46.5);
    return svg('<g transform="translate(' + f(b[0]) + ',' + f(b[1]) + ')"><path d="M0,0 L-7,-4.5 L-7,4.5Z M0,0 L7,-4.5 L7,4.5Z" fill="#1f9a46" stroke="#137033" stroke-width=".5"/>' +
      '<path d="M-1,1 L-4,7.5 L-2,7 L-1,8.5Z M1,1 L4,7.5 L2,7 L1,8.5Z" fill="#17803a"/><circle r="2.2" fill="#25b052" stroke="#137033" stroke-width=".5"/></g>' +
      sparkle(pt(40, 47)[0], pt(40, 47)[1], 3.2, '#fff'));
  }
  function garlandSvg() {
    var out = '<circle cx="50" cy="50" r="47" fill="none" stroke="#123d22" stroke-width=".8"/>', n = 16, i, p, cols = ['#ff3b4e', '#ffd23f', '#3fd0ff', '#5be37d'];
    for (i = 0; i < n; i++) {
      p = pt(i * 360 / n + 11, 47);
      out += '<circle class="fr-bulb fr-bulb--' + (i % 2) + '" cx="' + f(p[0]) + '" cy="' + f(p[1]) + '" r="2.1" fill="' + cols[i % 4] + '" stroke="#0d2b17" stroke-width=".35"/>';
    }
    return svg(out);
  }
  function flake(x, y, r, op) {
    var o = '', i, a;
    for (i = 0; i < 3; i++) { a = i * 60; o += '<line x1="' + f(-r) + '" y1="0" x2="' + f(r) + '" y2="0" transform="translate(' + f(x) + ',' + f(y) + ') rotate(' + a + ')"/>'; }
    return '<g stroke="#2f6fb0" stroke-opacity=".35" stroke-width="1.6" stroke-linecap="round">' + o + '</g><g stroke="#ffffff" stroke-width=".8" stroke-linecap="round" stroke-opacity="' + (op || 1) + '">' + o + '</g>';
  }
  function snowSvg() {
    var out = '', spots = [[20, 46, 5.2], [95, 47, 3.4], [160, 46, 4.6], [235, 47, 3.6], [300, 46.4, 4.8]];
    spots.forEach(function (s2) { var p = pt(s2[0], s2[1]); out += flake(p[0], p[1], s2[2]); });
    return svg(out);
  }
  function snowSvg2() {
    var R = rng(5), out = '', i, p;
    for (i = 0; i < 14; i++) { p = pt(i * 360 / 14 + R() * 10, 42.5 + R() * 6); out += '<circle cx="' + f(p[0]) + '" cy="' + f(p[1]) + '" r="' + f(.5 + R() * .7) + '" fill="#fff"/>'; }
    return svg(out);
  }
  /* искры для улучшенных анимаций */
  function glintsSvg(color) {
    var a = pt(45, 47), b = pt(165, 46.5), c = pt(285, 47.2);
    return svg('<g class="fr-glint">' + sparkle(a[0], a[1], 4.2, color || '#fff') + '</g><g class="fr-glint fr-glint--2">' + sparkle(b[0], b[1], 3, color || '#fff') + '</g><g class="fr-glint fr-glint--3">' + sparkle(c[0], c[1], 3.6, color || '#fff') + '</g>');
  }
  function embersSvg() {
    var out = '', i, p, R = rng(17);
    for (i = 0; i < 9; i++) { p = pt(-70 + i * 17.5 + R() * 6, 46 + R() * 3); out += '<circle class="fr-ember fr-ember--' + (i % 3) + '" cx="' + f(p[0]) + '" cy="' + f(p[1]) + '" r="' + f(.7 + R() * .7) + '" fill="' + (i % 2 ? '#ffd25a' : '#ff8a1f') + '"/>'; }
    return svg(out);
  }
  function neonDashSvg() {
    return svg('<circle cx="50" cy="50" r="48.4" fill="none" stroke="#ffffff" stroke-width="1.1" stroke-linecap="round" stroke-dasharray="10 294" class="fr-dash"/>' +
      '<circle cx="50" cy="50" r="48.4" fill="none" stroke="#45f0ff" stroke-width="2.2" stroke-opacity=".5" stroke-linecap="round" stroke-dasharray="10 294" style="filter:blur(.8px)"/>');
  }

  /* ---------- список рамок ---------- */
  var list = [
    { id: 'none', name: { he: 'בלי מסגרת', ru: 'Без рамки', en: 'No frame' }, animated: false, unlockLevel: 0 },
    /* статичные */
    { id: 'classic', name: { he: 'קלאסית', ru: 'Классика', en: 'Classic' }, animated: false, unlockLevel: 0 },
    { id: 'mint', name: { he: 'מנטה', ru: 'Мята', en: 'Mint' }, animated: false, unlockLevel: 2 },
    { id: 'sunset', name: { he: 'שקיעה', ru: 'Закат', en: 'Sunset' }, animated: false, unlockLevel: 5 },
    { id: 'pearls', name: { he: 'פנינים', ru: 'Жемчуг', en: 'Pearls' }, animated: false, unlockLevel: 8, svg: pearlsSvg },
    { id: 'ocean', name: { he: 'אוקיינוס', ru: 'Океан', en: 'Ocean' }, animated: false, unlockLevel: 12, svg: oceanSvg },
    { id: 'laurel', name: { he: 'זר דפנה', ru: 'Лавровый венок', en: 'Laurel' }, animated: false, unlockLevel: 16, svg: laurelSvg },
    { id: 'amethyst', name: { he: 'אמטיסט', ru: 'Аметист', en: 'Amethyst' }, animated: false, unlockLevel: 20, svg: gemSvg },
    { id: 'sakura', name: { he: 'סאקורה', ru: 'Сакура', en: 'Sakura' }, animated: false, unlockLevel: 25, svg: sakuraSvg },
    { id: 'starry', name: { he: 'ליל כוכבים', ru: 'Звёздная ночь', en: 'Starry night' }, animated: false, unlockLevel: 30,
      svg: function () { return starsSvg(7, 22, 42.6, 48.6, [[28, 46, 3.4, '#ffe9a3'], [152, 45.6, 2.6], [236, 46, 3], [318, 45.8, 2.2, '#ffe9a3']], '#ffffff'); } },
    { id: 'golden', name: { he: 'זהב מלכותי', ru: 'Королевское золото', en: 'Royal gold' }, animated: false, unlockLevel: 40, svg: goldenSvg },
    /* анимированные */
    { id: 'aurora', name: { he: 'זוהר צפוני', ru: 'Северное сияние', en: 'Aurora' }, animated: true, unlockLevel: 10, svg2: function () { return glintsSvg('#eafff6'); } },
    { id: 'pulse', name: { he: 'הילה פועמת', ru: 'Пульс', en: 'Pulse' }, animated: true, unlockLevel: 15 },
    { id: 'orbit', name: { he: 'מסלול', ru: 'Орбита', en: 'Orbit' }, animated: true, unlockLevel: 22 },
    { id: 'shimmer', name: { he: 'נצנוץ כסוף', ru: 'Серебряный блеск', en: 'Silver shimmer' }, animated: true, unlockLevel: 28, svg2: function () { return glintsSvg('#ffffff'); } },
    { id: 'neon', name: { he: 'ניאון', ru: 'Неон', en: 'Neon' }, animated: true, unlockLevel: 35, svg: neonDashSvg },
    { id: 'rainbow', name: { he: 'קשת', ru: 'Радуга', en: 'Rainbow' }, animated: true, unlockLevel: 45 },
    { id: 'flame', name: { he: 'להבה', ru: 'Пламя', en: 'Flame' }, animated: true, unlockLevel: 55, svg: embersSvg },
    { id: 'galaxy', name: { he: 'גלקסיה', ru: 'Галактика', en: 'Galaxy' }, animated: true, unlockLevel: 65,
      svg: function () { return starsSvg(3, 26, 42.4, 48.8, [[60, 46, 2.8], [200, 45.6, 2.2, '#ffd6fb']], '#ffffff'); },
      svg2: function () { return starsSvg(11, 0, 0, 0, [[20, 46.2, 3.6, '#fff'], [135, 46, 2.8, '#c9e6ff'], [255, 46.4, 3.2, '#ffd6fb']], '#fff'); } },
    { id: 'ripple', name: { he: 'גלים', ru: 'Волны', en: 'Ripples' }, animated: true, unlockLevel: 75 },
    { id: 'celestial', name: { he: 'שמימית', ru: 'Небесная', en: 'Celestial' }, animated: true, unlockLevel: 90, svg: orbitSparkles, svg2: function () { return glintsSvg('#fff3c4'); } },
    /* Хэллоуин */
    { id: 'pumpkins', season: 'halloween', name: { he: 'דלעות', ru: 'Тыквы', en: 'Pumpkins' }, animated: false, unlockLevel: 3, svg: pumpkinSvg },
    { id: 'spiderweb', season: 'halloween', name: { he: 'קורי עכביש', ru: 'Паутина', en: 'Spider web' }, animated: false, unlockLevel: 7, svg: webSvg },
    { id: 'haunted', season: 'halloween', name: { he: 'רוחות רפאים', ru: 'Привидения', en: 'Ghosts' }, animated: true, unlockLevel: 12, svg: hauntedSvg },
    { id: 'jackolantern', season: 'halloween', name: { he: 'פנס דלעת', ru: 'Тыква-фонарь', en: 'Jack-o\'-lantern' }, animated: true, unlockLevel: 18, svg: jackSvg, svg2: batsSvg },
    /* Рождество */
    { id: 'candycane', season: 'christmas', name: { he: 'מקל סוכר', ru: 'Леденец', en: 'Candy cane' }, animated: false, unlockLevel: 4, svg: bowSvg },
    { id: 'holly', season: 'christmas', name: { he: 'הולי', ru: 'Остролист', en: 'Holly' }, animated: false, unlockLevel: 9, svg: hollySvg },
    { id: 'garland', season: 'christmas', name: { he: 'שרשרת אורות', ru: 'Гирлянда', en: 'Fairy lights' }, animated: true, unlockLevel: 14, svg: garlandSvg },
    { id: 'snowfall', season: 'christmas', name: { he: 'שלג', ru: 'Снегопад', en: 'Snowfall' }, animated: true, unlockLevel: 20, svg: snowSvg, svg2: snowSvg2 }
  ];

  var byId = {};
  list.forEach(function (fr) { byId[fr.id] = fr; });
  var svgCache = {};
  function decoHtml(fr, key) {
    var fn = fr[key];
    if (!fn) return '';
    var c = fr.id + ':' + key;
    if (!svgCache[c]) svgCache[c] = fn();
    return svgCache[c];
  }

  /* ---------- инициалы ---------- */
  var GRADS = [
    ['#7b6cff', '#4fc3ff'], ['#ff7a8a', '#ffb36b'], ['#12b5a6', '#5ee6a8'], ['#a86cff', '#ff6fd8'],
    ['#4f8cff', '#12c2e9'], ['#ff9f43', '#ff6b6b'], ['#5f6cff', '#a86cff'], ['#1fa2ff', '#12d8a3']
  ];
  function initials(name) {
    var parts = String(name || '').trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return '?';
    var first = function (w) { return Array.from(w)[0] || ''; };
    var a = first(parts[0]), b = parts.length > 1 ? first(parts[parts.length - 1]) : '';
    return (a + b).toUpperCase();
  }
  function gradFor(name) {
    var s = String(name || ''), h = 0, i;
    for (i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
    var g = GRADS[Math.abs(h) % GRADS.length];
    return 'linear-gradient(135deg,' + g[0] + ',' + g[1] + ')';
  }

  function span(cls, html) {
    var n = document.createElement('span');
    n.className = cls;
    if (html) n.innerHTML = html;
    return n;
  }

  /* ---------- render ---------- */
  function render(opts) {
    opts = opts || {};
    var size = Math.max(16, Math.round(+opts.size || 44));
    var fr = byId[opts.frame] || byId.none;
    var root = span('fr fr--' + fr.id + (fr.animated ? ' fr--anim' : '') + (size <= 40 ? ' fr--s' : '') + (size >= 120 ? ' fr--l' : ''));
    root.style.width = size + 'px';
    root.style.height = size + 'px';
    root.style.fontSize = size + 'px';
    root.setAttribute('role', 'img');
    root.setAttribute('aria-label', opts.name ? String(opts.name) : '');
    root.setAttribute('data-frame', fr.id);

    if (fr.id !== 'none') {
      root.appendChild(span('fr__fx'));
      root.appendChild(span('fr__ring'));
    }
    var face = span('fr__face');
    function showInitials() {
      face.innerHTML = '';
      var ini = span('fr__ini');
      ini.textContent = initials(opts.name);
      ini.style.background = gradFor(opts.name);
      face.appendChild(ini);
    }
    if (opts.img) {
      var img = document.createElement('img');
      img.alt = '';
      img.decoding = 'async';
      img.draggable = false;
      img.onerror = showInitials;
      img.src = opts.img;
      face.appendChild(img);
    } else {
      showInitials();
    }
    root.appendChild(face);
    if (fr.id !== 'none') {
      root.appendChild(span('fr__deco', decoHtml(fr, 'svg')));
      if (fr.svg2) root.appendChild(span('fr__deco2', decoHtml(fr, 'svg2')));
    }
    return root;
  }

  function isUnlocked(id, level) {
    var fr = byId[id];
    if (!fr) return false;
    return (level || 0) >= fr.unlockLevel;
  }

  /* ---------- picker ---------- */
  function picker(opts) {
    opts = opts || {};
    var level = Math.max(0, +opts.level || 0);
    var current = byId[opts.current] ? opts.current : 'none';
    var me = null;
    try { me = window.Store && Store.auth && Store.auth.current ? Store.auth.current() : null; } catch (e) { me = null; }
    var img = opts.img !== undefined ? opts.img : (me ? me.avatar : null);
    var name = opts.name !== undefined ? opts.name : (me ? me.name : '');
    var tt = window.t || function (k) { return k; };
    var tr = window.U && U.tr ? U.tr : function (o) { return o.en; };
    var lockSvg = window.Icons ? Icons.get('lock') : '';
    var checkSvg = window.Icons ? Icons.get('check') : '';
    var sparkSvg = window.Icons ? Icons.get('spark') : '';

    var root = document.createElement('div');
    root.className = 'frp';
    var buttons = [];

    function item(fr) {
      var locked = level < fr.unlockLevel;
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'frp__item' + (locked ? ' is-locked' : '') + (fr.id === current ? ' is-current' : '');
      b.setAttribute('data-id', fr.id);
      b.setAttribute('aria-pressed', fr.id === current ? 'true' : 'false');
      var label = tr(fr.name) + (locked ? ' — ' + tt('locked_until', { n: fr.unlockLevel }) : '');
      b.setAttribute('aria-label', label);
      if (locked) b.setAttribute('aria-disabled', 'true');

      var prev = span('frp__prev');
      prev.appendChild(render({ img: img, name: name, frame: fr.id, size: 64 }));
      if (locked) prev.appendChild(span('frp__lock', lockSvg));
      if (fr.animated) prev.appendChild(span('frp__anim', sparkSvg));
      prev.appendChild(span('frp__check', checkSvg));
      b.appendChild(prev);
      var nm = span('frp__name'); nm.textContent = tr(fr.name); b.appendChild(nm);
      if (locked) {
        var lk = span('frp__req'); lk.textContent = tt('locked_until', { n: fr.unlockLevel }); b.appendChild(lk);
      }
      b.addEventListener('click', function () {
        if (locked) {
          if (window.U && U.toast) U.toast(tt('locked_until', { n: fr.unlockLevel }));
          return;
        }
        if (current === fr.id) return;
        current = fr.id;
        buttons.forEach(function (x) {
          var on = x.getAttribute('data-id') === current;
          x.classList.toggle('is-current', on);
          x.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        if (typeof opts.onPick === 'function') opts.onPick(fr.id);
      });
      buttons.push(b);
      return b;
    }

    function group(title, frames) {
      var h = document.createElement('div');
      h.className = 'frp__head';
      h.textContent = title;
      root.appendChild(h);
      var grid = document.createElement('div');
      grid.className = 'frp__grid';
      frames.forEach(function (fr) { grid.appendChild(item(fr)); });
      root.appendChild(grid);
    }
    group(tt('fr_static'), list.filter(function (x) { return !x.animated && !x.season; }));
    group(tt('fr_animated'), list.filter(function (x) { return x.animated && !x.season; }));
    group('🎃 ' + tt('fr_halloween'), list.filter(function (x) { return x.season === 'halloween'; }));
    group('🎄 ' + tt('fr_christmas'), list.filter(function (x) { return x.season === 'christmas'; }));
    return root;
  }

  window.Frames = {
    list: list,
    get: function (id) { return byId[id] || byId.none; },
    isUnlocked: isUnlocked,
    render: render,
    picker: picker,
    initials: initials
  };

  if (window.I18N) I18N.add({
    he: { fr_halloween: 'האלווין', fr_christmas: 'חג המולד', fr_static: 'מסגרות', fr_animated: 'מסגרות מונפשות', fr_animated_hint: 'מונפשת', fr_selected: 'נבחרה' },
    ru: { fr_halloween: 'Хэллоуин', fr_christmas: 'Рождество', fr_static: 'Рамки', fr_animated: 'Анимированные рамки', fr_animated_hint: 'Анимированная', fr_selected: 'Выбрана' },
    en: { fr_halloween: 'Halloween', fr_christmas: 'Christmas', fr_static: 'Frames', fr_animated: 'Animated frames', fr_animated_hint: 'Animated', fr_selected: 'Selected' }
  });
})();
