export default function isIranMobile (raw) {
  const v = String(raw || "").replace(/[\s\-()]/g, "");
  const re0 = /^09(?:0|1|2|3|9)\d{8}$/;
  const rePlus = /^\+989(?:0|1|2|3|9)\d{8}$/;
  const re0098 = /^00989(?:0|1|2|3|9)\d{8}$/;
  return re0.test(v) || rePlus.test(v) || re0098.test(v);
};
