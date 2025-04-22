import { ContactFormValues } from "@/types/contact"
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
export const fetchGoogleRating = async () => {
  const res = await fetch(ENDPOINTS.GOOGLE_RATING, {
    next: { revalidate: CACHE_TTL }
  })
  if (!res.ok) {
    throw new Error(ERROR_MESSAGES.FETCH_GOOGLE_RATING)
  }
  return res.json()
}
export const fetchGoogleReviews = async () => {
  const res = await fetch(ENDPOINTS.GOOGLE_REVIEWS, {
    next: { revalidate: CACHE_TTL }
  })
  if (!res.ok) {
    throw new Error(ERROR_MESSAGES.FETCH_GOOGLE_REVIEWS)
  }
  return res.json()
}
export const fetchNews = async (locale: string) => {
  const res = await fetch(ENDPOINTS.NEWS, {
    next: { revalidate: CACHE_TTL },
    headers: {
      'Accept-Language': locale
    }
  })
  if (!res.ok) {
    throw new Error(ERROR_MESSAGES.FETCH_NEWS)
  }
  return res.json()
}

//client request
export const sendContactForm = async (values: ContactFormValues) => {
  const res = await fetch(ENDPOINTS.CONTACT_SEND, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values)
  })

  if (!res.ok) throw new Error(ERROR_MESSAGES.FETCH_CONTACT_SEND)
}
