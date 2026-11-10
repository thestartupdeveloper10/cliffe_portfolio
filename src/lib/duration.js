/* Months elapsed since a 'YYYY-MM' start, rendered as "14 months" or
   "2 yr 8 mo". Computed at render time so the split's central claim — that the
   right column is older than the left — never goes stale in the source. */
export function monthsSince(yyyymm, now = new Date()) {
  const [y, m] = yyyymm.split('-').map(Number)
  return Math.max(0, (now.getFullYear() - y) * 12 + (now.getMonth() + 1 - m))
}

export function formatDuration(yyyymm, now = new Date()) {
  const months = monthsSince(yyyymm, now)
  if (months < 24) return `${months} month${months === 1 ? '' : 's'}`
  const years = Math.floor(months / 12)
  const rest = months % 12
  return rest === 0 ? `${years} years` : `${years} yr ${rest} mo`
}
