import type { SearchConfig } from "@/types";
import http from "@/utils/http";

export const getList = () => {
    return http({
        url: 'article/api/category/label/list',
        method: 'get',
    })
}

export const search = (data: SearchConfig) => {
    return http({
        url: 'article/api/article/search',
        method: 'post',
        data: data
    })
}