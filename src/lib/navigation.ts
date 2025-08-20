export const NAV_ITEMS = [
  { path: '/services'},
  { path: '/home-visit'},
  { path: '/prices'},
  { path: '/advices'},
  { path: '/book'}
] as const

export type NavPath = (typeof NAV_ITEMS)[number]['path']
