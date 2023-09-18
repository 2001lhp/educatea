import type { HomePageConfig, PageConfig } from "@/types";
import http from "@/utils/http";

export const getList = () => {
    return http({
        url: 'article/api/category/label/list',
        method: 'get',
    })
}

export const search = (data: PageConfig) => {
    return http({
        url: 'article/api/article/search',
        method: 'post',
        data: data
    })
}

export const question = (tab: string, data: PageConfig) => {
    return http({
        url: `question/api/question/${tab}`,
        method: 'post',
        data: data
    })
}

export const banner = () => {
    return http({
        url: 'article/api/advert/show/1',
        method: 'get'
    })
}

export const homeSearch = (data: HomePageConfig) => {
    return http({
        url: 'course/api/course/search',
        method: 'post',
        data: data
    })
}

export const login = (data: { mobile: string, code: string }) => {
    return http({
        url: '/auth/login',
        method: 'post',
        data: data
    })
}

export const logout = (data: { accessToken: string }) => {
    return http({
        url: 'auth/logout',
        method: 'get',
        params: data
    })
}

export const orderList = () => {
    return http({
        url: 'pay/order/user/list',
        method: 'get',
    })
}

export const actionorder = (id: string, a: string) => {
    return http({
        url: `pay/order/cancel/${id}`,
        method: a
    })
}

export const balance = () => {
    return http({
        url: 'pay/user/balance',
        method: 'get'
    })
}

export const studylist = () => {
    return http({
        url: 'course/course/study/list',
        method: 'get'
    })
}
// question/api/question/11
export const questiondetail = (id: string) => {
    return http({
        url: `question/api/question/${id}`,
        method: 'get'
    })
}
export const questionlist = (id: string) => {
    return http({
        url: `question/api/reply/list/${id}`,
        method: 'get'
    })
}