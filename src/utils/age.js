/**
 * @param {string} isoDate - YYYY-MM-DD
 * @param {Date} [now]
 * @returns {Date}
 */
export function parseISODate(isoDate, now = new Date()) {
  const [y, m, d] = isoDate.split('-').map(Number)
  const date = new Date(y, m - 1, d)
  return Number.isNaN(date.getTime()) ? now : date
}

/**
 * Whole days between two dates (UTC-safe for calendar days in local TZ).
 * @param {Date} from
 * @param {Date} [to]
 */
export function daysOld(from, to = new Date()) {
  const start = new Date(from.getFullYear(), from.getMonth(), from.getDate())
  const end = new Date(to.getFullYear(), to.getMonth(), to.getDate())
  return Math.max(0, Math.round((end - start) / 86400000))
}

/**
 * @param {string} isoDate
 * @param {Date} [now]
 */
export function daysOldFromISO(isoDate, now = new Date()) {
  return daysOld(parseISODate(isoDate, now), now)
}

/**
 * Friendly string like "5 months" (approximate).
 * @param {string} isoDate
 * @param {Date} [now]
 */
export function approximateAgeLabel(isoDate, now = new Date()) {
  const birth = parseISODate(isoDate, now)
  let months =
    (now.getFullYear() - birth.getFullYear()) * 12 +
    (now.getMonth() - birth.getMonth())
  if (now.getDate() < birth.getDate()) months -= 1
  months = Math.max(0, months)
  const years = Math.floor(months / 12)
  const rem = months % 12
  if (years === 0) return rem === 0 ? 'Brand new' : `${rem} month${rem === 1 ? '' : 's'}`
  if (rem === 0) return `${years} year${years === 1 ? '' : 's'}`
  return `${years}y ${rem}m`
}
