/* SAHNE 3 — SON İKİ BASAMAK (28–46 s) */
(function (LI) {
  'use strict';
  const KD = LI.KD, F = () => LI.Film;
  function camera(t, env) { return LI.Camera.breathe(KD.cam(env, { zoom: 1 }), t, 0.4); }
  function render(ctx, lt, env, t) { F().base(ctx, env, t, camera(t, env), () => LI.world(ctx, env, t)); }
  LI.registerScene({ id: 3, start: 28, end: 46, name: 'Last two digits', nameTr: 'Son iki basamak', concept: 'Divisible by 4', conceptTr: '4 ile bölünebilme', render });
})(window.LI = window.LI || {});
