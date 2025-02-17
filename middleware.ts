// middleware.ts
import { DEFAULT_LOCALE, LOCALES } from '@/lib/optimizely/utils/language'
import { createUrl, leadingSlashUrlPath } from '@/lib/utils'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const COOKIE_NAME_LOCALE = '__LOCALE_NAME'
const HEADER_KEY_LOCALE = 'X-Locale'

function shouldExclude(path: string) {
  return (
    path.startsWith('/static') || path.includes('/api/') || path.includes('.')
  )
}

function getLocale(request: NextRequest, locales: string[]): string {
  const cookieLocale = request.cookies.get(COOKIE_NAME_LOCALE)?.value
  return cookieLocale && locales.includes(cookieLocale)
    ? cookieLocale
    : DEFAULT_LOCALE
}

function updateLocaleCookies(
  request: NextRequest,
  response: NextResponse,
  locale?: string
): void {
  const cookieLocale = request.cookies.get(COOKIE_NAME_LOCALE)?.value
  const newLocale = locale || null

  if (newLocale !== cookieLocale) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    newLocale
      ? response.cookies.set(COOKIE_NAME_LOCALE, newLocale)
      : response.cookies.delete(COOKIE_NAME_LOCALE)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  newLocale
    ? response.headers.append(HEADER_KEY_LOCALE, newLocale)
    : response.headers.delete(HEADER_KEY_LOCALE)
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  let response = NextResponse.next()

  if (shouldExclude(pathname)) {
    return response
  }

  const localeInPathname = LOCALES.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (localeInPathname) {
    const pathnameWithoutLocale = pathname.replace(`/${localeInPathname}`, '')
    const newUrl = createUrl(
      `/${localeInPathname}${leadingSlashUrlPath(pathnameWithoutLocale)}`,
      request.nextUrl.searchParams
    )

    response = NextResponse.rewrite(new URL(newUrl, request.url))
    updateLocaleCookies(request, response, localeInPathname)
    return response
  }

  const locale = getLocale(request, LOCALES)
  const newUrl = createUrl(
    `/${locale}${leadingSlashUrlPath(pathname)}`,
    request.nextUrl.searchParams
  )

  response =
    locale === DEFAULT_LOCALE
      ? NextResponse.rewrite(new URL(newUrl, request.url))
      : NextResponse.redirect(new URL(newUrl, request.url))

  updateLocaleCookies(request, response, locale)

  return response
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
