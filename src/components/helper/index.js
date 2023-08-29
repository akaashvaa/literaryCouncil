const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const images = {
  winter: 'snowflake.png',
  summer: 'none',
  monsoon: 'water-drop.png',
  autumn: ' maple-leaf.png',
}
const WeatherSeason = {
  winter: ['December', 'January', 'February'],
  summer: ['March', 'April', 'May'],
  monsoon: ['June', 'July', 'August', 'September'],
  autumn: ['October', 'November'],
}

const getSeasonByMonth = () => {
  const month = new Date().getUTCMonth()
  const monthName = monthNames[month]

  let currentSeason = 'winter'

  Object.entries(WeatherSeason).forEach(([season, months]) => {
    if (months.includes(monthName)) {
      currentSeason = season
    }
  })
  return images[currentSeason]
}

export default getSeasonByMonth
