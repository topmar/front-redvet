import { ENDPOINTS, ERROR_MESSAGES } from "./constants"
const CACHE_TTL = Number(process.env.CACHE_TTL_SECONDS) || 604800

export const fetchContact = async () => {
  const res = await fetch(ENDPOINTS.CONTACT, {
    next: { revalidate: CACHE_TTL }
  })
  if (!res.ok) {
    throw new Error(ERROR_MESSAGES.FETCH_CONTACT)
  }
  return res.json()
}
export const fetchOpeningTime = async (locale: string) => {
  const res = await fetch(ENDPOINTS.OPENING_TIME, {
    next: { revalidate: CACHE_TTL },
    headers: {
      'Accept-Language': locale
    }
  })
  if (!res.ok) {
    throw new Error(ERROR_MESSAGES.FETCH_OPENING_TIME)
  }
  return res.json()
}