import type { PageConfig } from "@/types";
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