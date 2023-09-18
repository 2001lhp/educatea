export type List = {
    id: number
    name: string
    labelList: {
        id: number
        name: string
    }[]
}

export type PageConfig = {
    current: number
    size: number
    categoryId?: number
}

export type Data = {
    id: number
    imageUrl: string | null
    nickName: string
    summary: string
    thumhup: number
    title: string
    updateDate: string
    userId: number
    viewCount: number
}


export type HomePageConfig = {
    current: number
    size: number
    sort?: string
    isFree?:number
}