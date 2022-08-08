const compactor = Intl.NumberFormat("en", { notation: "compact" });
export function compactNumber(num: number) {
  return compactor.format(num)
}