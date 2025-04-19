const BACKEND_URL = `${process.env.PUBLIC_API_URL}/backend/api/web`

export const ENDPOINTS = {
  CONTACT: `${BACKEND_URL}/contact`,
  OPENING_TIME: `${BACKEND_URL}/time`
}
export const ERROR_MESSAGES = {
  FETCH_CONTACT: 'Failed to fetch contact',
  FETCH_OPENING_TIME: 'Failed to fetch opening time'
}
export const LINKS = {
  BOOK: '/book',
  SERVICES_VACCINATIONS: '/services/vaccinations',
  SERVICES_VETERINARY_CARE_AT_HOME: '/services/care-at-home',
  SERVICES_END_OF_LIFE_CARE: '/services/end-of-life'
}
