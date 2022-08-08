const compactor = Intl.NumberFormat("en", { notation: "compact" });

// 1100 -> 1.1k
export const compactNumber = (num: number) => compactor.format(num)