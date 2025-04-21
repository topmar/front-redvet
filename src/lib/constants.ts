const BACKEND_URL = `${process.env.PUBLIC_API_URL}/backend/api/web`
const CLIENT_URL = `${process.env.NEXT_PUBLIC_API_URL}/backend/api/web`

export const ENDPOINTS = {
  CONTACT: `${BACKEND_URL}/contact`,
  OPENING_TIME: `${BACKEND_URL}/time`,
  GOOGLE_RATING: `${BACKEND_URL}/rating`,
  GOOGLE_REVIEWS: `${BACKEND_URL}/opinions`,
  CONTACT_SEND: `${CLIENT_URL}/formtest`,
  NEWS: `${BACKEND_URL}/news`
}
export const ERROR_MESSAGES = {
  FETCH_CONTACT: 'Failed to fetch contact',
  FETCH_OPENING_TIME: 'Failed to fetch opening time',
  FETCH_GOOGLE_RATING: 'Failed to fetch google rating',
  FETCH_GOOGLE_REVIEWS: 'Failed to fetch google reviews',
  FETCH_CONTACT_SEND: 'Failed to submit form',
  FETCH_NEWS: 'Failed to fetch news'
}
export const LINKS = {
  BOOK: '/book',
  SERVICES_VACCINATIONS: '/services/vaccinations',
  SERVICES_VETERINARY_CARE_AT_HOME: '/services/care-at-home',
  SERVICES_END_OF_LIFE_CARE: '/services/end-of-life'
}
