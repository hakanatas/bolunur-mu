/* Shared layout + Nokta helpers for "Bölünür mü?". */
(function (LI) {
  'use strict';
  const { clamp } = LI.E;
  LI.KD = {
    /** positions for 16:9 and 9:16 */
    L(env) {
      return env.V
        ? {
          CX: { x: 0, y: -740, s: 44, w: 960 },
          NUM: { x: 0, y: -580, s: 150 },
          W: { x: 0, y: [-400, -300, -200, -100], s: 48, w: 960, sum: 58 },
          BD: { x: 0, y: 50, gap: 124, r: 44, vy: 125 },
          SUM: { x: 0, y: [-420, -325, -230, -135], s: 54, w: 960 },
          nx: -360, gy: 560, s: 1.15 }
        : {
          CX: { x: 60, y: -440, s: 50, w: 1300 },
          NUM: { x: 60, y: -320, s: 150 },
          W: { x: 100, y: [-180, -95, -10, 75], s: 54, w: 1250, sum: 58 },
          BD: { x: 130, y: 205, gap: 124, r: 44, vy: 282 },
          SUM: { x: 100, y: [-190, -105, -20, 65], s: 58, w: 1250 },
          nx: -800, gy: 262, s: 1.15 };
    },
    cam(env, o = {}) { return Object.assign({ x: env.V ? 0 : -60, y: env.V ? 60 : 0, zoom: 1, rot: 0, tilt: 1 }, o); },
    /** pupils + face toward a world point */
    look(p, target) {
      const e = LI.Nokta.eyes(p)[0];
      const dx = target[0] - e[0], dy = target[1] - e[1], d = Math.hypot(dx, dy) || 1;
      p.lookX = clamp(dx / d * 1.1, -1, 1); p.lookY = clamp(dy / d * 1.1, -1, 1);
      p.turn = clamp(dx / 900, -0.5, 0.5);
      return p;
    },
    /** a short ground stroke under Nokta */
    ground(ctx, env, x, gy) { LI.Ambient.ground(ctx, x - 360, x + 360, gy + 6, { alpha: 0.32 }); },
  };
})(window.LI = window.LI || {});
