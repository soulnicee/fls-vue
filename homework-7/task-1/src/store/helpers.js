export function transformCategory(score) {
  if (score >= 10) return 5
  else if (score >= 7) return 4
  else if (score >= 4) return 3
  else return 2
}