
import Text from "@/components/common/Text"
import { addRecentKeyword, clearRecentKeyword, getRecentKeyword } from "@/utils/localstorage"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"


type Props = {
    handleClose: () => void
}

export default function Recents({handleClose}:Props) {
    
    const router = useRouter()
    const [recents, setRecents] = useState<string[]>([])

    useEffect( () => {
        const recents = getRecentKeyword()
        setRecents(recents)
    } ,[])

    return(
        <div className="flex flex-col h-full">
            
            <div className="h-full p-2">
                <div className="border-b border-red-500 pb-1 mb-2">
                    <Text size="sm" color="red" weight="bold">
                        최근 검색어
                    </Text>
                </div>

                {recents.length === 0 ? (
                    <div className="flex justify-center items-center h-full">
                        <Text size="sm">최근 검색어가 없습니다</Text>
                    </div> ) : 
                    <div className="h-full overflow-scroll pb-8"> 
                      {recents.map((recent, idx) => 
                         <Text 
                         size="sm" 
                         key={idx} 
                         className="block my-1 truncate cursor-pointer"
                         onClick={() => {
                            addRecentKeyword(recent)
                            router.push(`/search?query=${encodeURIComponent(recent)}`)
                         }}
                         >
                            {recent}
                         </Text>
                      )}
                    </div>
                }

            </div>
            <div className="flex justify-between bg-gray-100 px-2 py-1">
                <Text size="sm" onClick={clearRecentKeyword}>검색어 전체삭제</Text>
                <Text onClick={handleClose}>닫기</Text>
            </div>
        </div>
    )
} 