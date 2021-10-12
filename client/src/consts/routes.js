import { lazy } from 'react'

const Authentication = lazy(() => import('pages/Authentication'))
const Main = lazy(() => import('pages/Main'))
const AdMore = lazy(() => import('pages/AdMore'))
const Liked = lazy(() => import('pages/Liked'))
const AdCreate = lazy(() => import('pages/AdCreate'))
const Profile = lazy(() => import('pages/Profile'))
const AdEdit = lazy(() => import('pages/AdEdit'))
const AdPersonalMore = lazy(() => import('pages/AdPersonalMore'))

export const PAGE_MAIN = '/'

export const PAGE_LOGIN = '/login'

export const PAGE_AD_CREATE = '/ad/create'
export const PAGE_AD_EDIT = (id) => `/ad/edit/${id}`
export const PAGE_AD = (id) => `/ad/${id}/`
export const PAGE_AD_PERSONAL = (id) => `/id/${id}/my/`

export const PAGE_PROFILE = '/profile'
export const PAGE_SAVED = '/user/saved'

export const PUBLIC_ROUTES = [{ path: PAGE_LOGIN, component: Authentication }]

export const ROUTES = [
    { path: PAGE_MAIN, component: Main },
    { path: PAGE_AD(':id'), component: AdMore },
]

export const PRIVATE_ROUTES = [
    { path: PAGE_AD_CREATE, component: AdCreate },
    { path: PAGE_AD_EDIT(':id'), component: AdEdit },
    { path: PAGE_PROFILE, component: Profile },
    { path: PAGE_SAVED, component: Liked },
    { path: PAGE_AD_PERSONAL(':id'), component: AdPersonalMore },
]
