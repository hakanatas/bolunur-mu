/* SAHNE 1 — HANGİSİNE BÖLÜNÜR? (0–10 s)  4 356 and seven divisors.
   The whole film's drawing lives in LI.world(t); each scene only sets the camera. */
(function (LI) {
  'use strict';
  const { seg, outBack } = LI.E;
  const KD = LI.KD, F = () => LI.Film, A = LI.Ang;
  const END = (t) => 1 - seg(t, 90.4, 91.4);

  /** verdicts on the board: divisor → [time, divisible?] */
  const VERDICT = { 2: [22.8, true], 5: [23.6, false], 10: [24.4, false], 4: [41.4, true], 9: [60.0, true], 3: [60.8, true], 6: [71.0, true] };

  function win(t, a, b, fi = 0.4, fo = 0.4) { return seg(t, a, a + fi) * (1 - seg(t, b - fo, b)); }
  /** timed lines at one place: [start, end, text, amber?, hotTail k, hot from] */
  function lines(ctx, t, P, list) {
    const f = F();
    list.forEach(([a, b, s, hot, k, h0]) => {
      const al = win(t, a, b); if (al <= 0) return;
      if (k) { f.hotTail(ctx, s, P.x, P.y, P.s, k, seg(t, h0, h0 + 0.5), { alpha: al, halo: true }); return; }
      f.fit(ctx, s, P.x, P.y, P.s, P.w, Object.assign({ alpha: al, halo: true, p: seg(t, a, a + 1.2) }, hot ? f.AMB : {}));
    });
  }
  const at = (W, k) => ({ x: W.x, y: W.y[k], s: W.s, w: W.w });
  /** x where a centred line's text ends (for a tick after it) */
  function endX(ctx, P, s) { const f = F(), m = f.width(ctx, s, P.s); return P.x + Math.min(m, P.w) / 2; }

  /** a row of multiples with a label; the last `k` digits of each glow; optional digit sums under them */
  function row(ctx, env, t, y, label, nums, t0, hk, h0, a, sums) {
    if (a <= 0) return;
    const f = F(), s = env.V ? 42 : 50, gap = env.V ? 92 : 112, lw = f.width(ctx, label, s * 0.8);
    const tot = lw + 40 + (nums.length - 1) * gap + 50, x0 = (env.V ? 0 : 100) - tot / 2;
    f.T(ctx, label, x0 + lw, y, { size: s * 0.8, alpha: a * seg(t, t0, t0 + 0.4), align: 'right', halo: true });
    nums.forEach((n, i) => {
      const k = seg(t, t0 + 0.2 + i * 0.12, t0 + 0.6 + i * 0.12); if (k <= 0) return;
      const x = x0 + lw + 65 + i * gap, str = String(n);
      f.hotTail(ctx, str, x, y - 14 * (1 - outBack(k)), s, hk || 0, hk ? seg(t, h0 + i * 0.08, h0 + 0.4 + i * 0.08) : 0, { alpha: a * k });
      if (sums) { const g = seg(t, sums + i * 0.3, sums + 0.4 + i * 0.3); if (g > 0) {
        f.T(ctx, str.split('').join('+'), x, y + 52, { size: s * 0.55, alpha: a * g * 0.8 });
        f.T(ctx, String(str.split('').reduce((u, d) => u + +d, 0)), x, y + 96, Object.assign({ size: s * 0.8, alpha: a * g }, f.AMB)); } }
    });
  }

  function number(ctx, env, t) {
    const L = KD.L(env), f = F(), a = seg(t, 4.2, 4.6) * END(t);
    const hot = (i) => Math.max(i === 3 ? win(t, 17.8, 28.0) : 0, i >= 2 ? win(t, 36.4, 46.0) : 0, win(t, 56.8, 66.0), win(t, 72.8, 79.8));
    f.bigNum(ctx, L.NUM, a, seg(t, 4.2, 6.0), hot);
    f.board(ctx, L.BD, t, END(t), VERDICT);
  }

  function context(ctx, env, t) {
    lines(ctx, t, KD.L(env).CX, [
      [4.4, 10.3, '4 356 hangi sayılara tam bölünür?'],
      [10.6, 16.8, 'Varsayım: katların son basamağında bir örüntü var mı?', true],
      [17.0, 22.4, 'Neden yalnızca birler basamağına bakıyoruz?'],
      [22.6, 27.8, 'Birler basamağı karar verir: 2, 5 ve 10'],
      [28.2, 34.2, 'Varsayım: son basamak 4’e bölünüyorsa sayı da bölünür mü?', true],
      [34.6, 41.0, '100, 4’ün katı: son iki basamağa bakalım'],
      [41.2, 45.8, 'Son iki basamak 4’ün katıysa sayı 4’e bölünür', true],
      [46.4, 56.4, '9’un katlarında rakamları toplayalım'],
      [56.6, 65.8, '3 ve 9 için: rakamlar toplamına bak'],
      [66.4, 71.8, '6 için: hem 2’ye hem 3’e bölünmeli'],
      [72.2, 79.8, 'Bu kurallar ne zaman işe yarar?'],
    ]);
  }

  function work(ctx, env, t) {
    const L = KD.L(env), W = L.W, f = F();
    // 2, 5, 10: multiples and their last digits
    const ra = win(t, 10.6, 16.9);
    row(ctx, env, t, W.y[0], '10’un katları', [10, 20, 30, 40, 50, 60, 70], 10.8, 1, 15.0, ra);
    row(ctx, env, t, W.y[1] + 20, '5’in katları', [5, 10, 15, 20, 25, 30, 35], 12.4, 1, 15.3, ra);
    row(ctx, env, t, W.y[2] + 40, '2’nin katları', [2, 4, 6, 8, 10, 12, 14], 14.0, 1, 15.6, ra);
    lines(ctx, t, at(W, 0), [[17.2, 27.8, '4 356 = 4 350 + 6', false, 1, 18.0], [30.0, 34.2, '14: son basamak 4'], [34.6, 45.8, '100 = 4 × 25'],
      [56.8, 65.8, '4 + 3 + 5 + 6 = 18', false, 2, 57.6], [66.6, 71.8, '4 356, 2’ye bölünür'], [72.4, 79.8, '4 356 kalem 9 kutuya eşit dağılır mı?']]);
    lines(ctx, t, at(W, 1), [[18.6, 27.8, '4 350, 10’un katı: 2’ye de 5’e de bölünür'], [31.0, 34.2, 'ama 14 = 4 × 3 + 2: bölünmez', true],
      [36.0, 45.8, '4 356 = 4 300 + 56', false, 2, 36.6], [58.4, 65.8, '18 = 9 × 2 ve 18 = 3 × 6'], [67.8, 71.8, '4 356, 3’e bölünür'],
      [73.6, 79.8, '4 + 3 + 5 + 6 = 18: evet, her kutuya 484 kalem']]);
    lines(ctx, t, at(W, 2), [[20.6, 27.8, 'Karar birler basamağında: 6', true], [38.2, 45.8, '56 = 4 × 14', true],
      [61.4, 65.8, 'Rakamlar toplamı 3’ün katıysa 3’e, 9’un katıysa 9’a bölünür', true],
      [69.2, 71.8, '6 = 2 × 3: o hâlde 6’ya da bölünür', true], [76.2, 79.8, '7 için böyle kısa bir kural yok: bölmeyi yaparız']]);
    lines(ctx, t, at(W, 3), [[22.6, 27.8, '6 çift: 2 evet · 0 ya da 5 değil: 5 ve 10 hayır']]);
    // 9: multiples and digit sums, then why
    row(ctx, env, t, W.y[0], '9’un katları', [18, 27, 36, 45, 54, 63, 72], 46.6, 0, 0, win(t, 46.4, 56.4), 48.0);
    lines(ctx, t, at(W, 2), [[52.0, 56.4, '10 = 9 + 1 · 100 = 99 + 1 · 1000 = 999 + 1']]);
    lines(ctx, t, at(W, 3), [[53.6, 56.4, 'Her basamaktan geriye rakamın kendisi kalır', true]]);
    // ticks and crosses beside the lines
    const tk = (k, s, t0, t1) => { const P = at(W, k), p = seg(t, t0, t0 + 0.5) * (1 - seg(t, t1 - 0.4, t1)); if (p > 0) f.tick(ctx, endX(ctx, P, s) + 24, P.y, seg(t, t0, t0 + 0.5), 1 - seg(t, t1 - 0.4, t1)); };
    tk(2, '56 = 4 × 14', 39.2, 45.8); tk(0, '4 356, 2’ye bölünür', 67.2, 71.8); tk(1, '4 356, 3’e bölünür', 68.6, 71.8);
    const cr = seg(t, 32.4, 32.9) * (1 - seg(t, 33.8, 34.2));
    if (cr > 0) { const P = at(W, 0); f.crossInk(ctx, endX(ctx, P, '14: son basamak 4') + 40, P.y, 18, seg(t, 32.4, 32.9), 1 - seg(t, 33.8, 34.2)); }
  }

  function summary(ctx, env, t) {
    if (t < 80.4) return;
    const L = KD.L(env), S = L.SUM, f = F(), a = END(t);
    [['2 · 5 · 10: son basamak', 80.6], ['4: son iki basamak', 81.6], ['3 · 9: rakamlar toplamı', 82.6], ['6: hem 2’ye hem 3’e', 83.6, true]].forEach(([s, t0, hot], i) => {
      const al = seg(t, t0, t0 + 0.4) * a; if (al <= 0) return;
      f.fit(ctx, s, S.x, S.y[i], S.s, S.w, Object.assign({ alpha: al, halo: true, p: seg(t, t0, t0 + 1.2) }, hot ? f.AMB : {}));
    });
  }

  LI.fireworks = function (ctx, env, t) {
    const k = seg(t, 84.4, 86.4);
    if (k <= 0 || t >= 91) return;
    const n = F().nokta(t, env), C = [n.x, n.y - 170];
    [30, 60, 90, 120, 150].forEach((d, i) => {
      const r = 150 + 30 * Math.sin(t * 2 + i);
      A.arc(ctx, C, r, d - 12, d + 12, { p: seg(k, i * 0.12, i * 0.12 + 0.4), alpha: 0.8 * (1 - seg(t, 90.2, 91)), w: 6, seed: 80 + i });
    });
  };

  LI.world = function (ctx, env, t) { context(ctx, env, t); number(ctx, env, t); work(ctx, env, t); summary(ctx, env, t); };

  function camera(t, env) {
    const L = KD.L(env);
    return LI.Camera.breathe(LI.Camera.track([
      [0, KD.cam(env, { x: L.nx, y: env.V ? 380 : 140, zoom: 1.6 })],
      [3.0, KD.cam(env, { x: L.nx, y: env.V ? 380 : 140, zoom: 1.6 })],
      [4.8, KD.cam(env, { zoom: 1 })],
    ], t), t, 0.5);
  }
  function render(ctx, lt, env, t) { F().base(ctx, env, t, camera(t, env), () => LI.world(ctx, env, t)); }
  LI.registerScene({ id: 1, start: 0, end: 10, name: 'Which ones?', nameTr: 'Hangisine bölünür?', concept: '4 356 and seven divisors', conceptTr: '4 356 ve yedi bölen', render });
})(window.LI = window.LI || {});
