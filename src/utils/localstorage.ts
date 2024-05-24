
const RECENT_KEYWORDS_KEY = 'recent_keyword_[]'

const getArray = (key: string) => {
    try{
        const items = localStorage.getItem(key)
        if(items) {
            return JSON.parse(items)
        }
        return []
    }catch {
        return []
    } 
}

const setArray = (key: string, value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value))
}


export const getRecentKeyword = (): string[] => getArray(RECENT_KEYWORDS_KEY)

export const addRecentKeyword = (keyword: string) => {

    const items = getRecentKeyword()
    const existItems = items.find((item) => item === keyword)

     //기존 keyword랑 겹치면 제외하고 push 
     if(existItems){
        const prevItems = items.filter((item) => item !== keyword)
        setArray(RECENT_KEYWORDS_KEY, [keyword, ...prevItems])
     }else {
        setArray(RECENT_KEYWORDS_KEY, [keyword, ...items])
     }
} 

export const clearRecentKeyword = () => {
    localStorage.removeItem(RECENT_KEYWORDS_KEY)
}