export function dateConvert() {
  const d = new Date().getDate();
  const m = new Date().getMonth() + 1;
  const y = new Date().getFullYear();

  const date = d + '/' + m + '/' + y;
  return date;
}
