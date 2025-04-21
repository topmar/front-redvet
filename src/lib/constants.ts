const BACKEND_URL = `${process.env.PUBLIC_API_URL}/backend/api/web`
const CLIENT_URL = `${process.env.NEXT_PUBLIC_API_URL}/backend/api/web`

export const ENDPOINTS = {
  CONTACT: `${BACKEND_URL}/contact`,
  OPENING_TIME: `${BACKEND_URL}/time`,
  GOOGLE_RATING: `${BACKEND_URL}/rating`,
  CONTACT_SEND: `${CLIENT_URL}/formtest`
}
export const ERROR_MESSAGES = {
  FETCH_CONTACT: 'Failed to fetch contact',
  FETCH_OPENING_TIME: 'Failed to fetch opening time',
  FETCH_GOOGLE_RATING: 'Failed to fetch google rating',
  FETCH_CONTACT_SEND: 'Failed to submit form'
}
export const LINKS = {
  BOOK: '/book',
  SERVICES_VACCINATIONS: '/services/vaccinations',
  SERVICES_VETERINARY_CARE_AT_HOME: '/services/care-at-home',
  SERVICES_END_OF_LIFE_CARE: '/services/end-of-life'
}
