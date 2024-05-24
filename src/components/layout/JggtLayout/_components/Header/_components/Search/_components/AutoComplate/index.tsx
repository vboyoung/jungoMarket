
import Text from "@/components/common/Text"
import getProductsByKeyword from "@/repository/products/getProductsByKeyword"
import { addRecentKeyword } from "@/utils/localstorage"
import { throttle } from "lodash"
import { useRouter } from "next/router"
import { useEffect, useMemo, useState } from "react"

type Props = {
    query: string
    handleClose:  () => void
}
export default function AutoComplate({query, handleClose}:Props) {
    
    const router = useRouter();
    const [keywords, setKeywords] = useState<string[]>([]);

    
    const handelSearch = useMemo(
        () => throttle(
            async (query: string) => {
                if(!keywords){
                    setKeywords([])
                    return
                }
                console.log('query', query)
               const {data} =  await getProductsByKeyword({
                    query, fromPage:0, toPage:2
                })
                setKeywords(data.map(({title})=>title))
            }
        ), [])

    useEffect( () => {
        handelSearch(query)
    }, [handelSearch, query])
    
    return(
        <div className="flex flex-col h-full">
            <div className="h-full p-2 overflow-hidden">
                <div className="border-b border-grey-300 pb-2 mb-1 flex items-center">
                    <span className="material-symbols-outlined shrink-0">storefront</span>
                    <Text size="sm" className="ml-1 shrink-0">상점검색 {'>'}</Text>
                    <Text className="mx-1 truncate">{query}</Text>
                    <Text size="sm" color="grey" className="shrink-0">
                        상점명으로 검색
                    </Text>
                </div>
                    {keywords.length === 0 ? (
                        <div className="flex justify-center items-center h-full">
                            <Text color="grey" size="sm">추천 검색어가 없습니다.</Text>
                        </div>
                    ) :
                    (
                        <div className="h-full overflow-scroll pb-8"> 
                       { keywords.map(keyword =>
                        
                            <Text 
                                size="sm" 
                                key={keyword} 
                                className="flex my-1"
                                onClick={() => 
                                 {   addRecentKeyword(keyword)
                                    router.push(`/search?query=${encodeURIComponent(keyword)}`)
                                }}
                            >
                                {keyword}
                            </Text>
                    
                     )}
                     </div>
                     )}
            </div>
            <div className="bg-gray-100 flex justify-end px-2 py-1">
                <Text onClick={handleClose} size="sm">닫기</Text>
            </div>
        </div>
    )
}