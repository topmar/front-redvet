import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { sendCounter } from './lib/actions'
import { NextRequest } from 'next/server'

// export default createMiddleware(routing)

const nextIntlMiddleware = createMiddleware(routing)

export function middleware(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') ?? 'unknown'
  const pathname = request.nextUrl.pathname

  sendCounter(ip, pathname)

  return nextIntlMiddleware(request)
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
}
