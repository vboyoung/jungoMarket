import classNames from "classnames"
import { useState } from "react"
import Recents from "./_components/Recents"
import AutoComplate from "./_components/AutoComplate"
import { addRecentKeyword } from "@/utils/localstorage"
import { useRouter } from "next/router"


export default function Search() { 

    const router = useRouter();
    const [search, setSearch] = useState('')
    const [isFocused, setIsFoucused] = useState(false)

    return(

        <div className="relative flex-1">
            <div className="w-full border-2 border-red-500 px-4 py-2">
                <form className="flex justify-between"
                      onSubmit={(e) => {
                        e.preventDefault()
                        //최근 검색어 추가
                        addRecentKeyword(search)
                        router.push(`/search?query=${encodeURIComponent(search)}`)
                      }}
                >
                    <input 
                    className="w-full"
                    type="text" 
                    placeholder="상품명, 상점명 입력"
                    value={search}
                    onChange={ e => setSearch(e.target.value)}
                    onClick={() => setIsFoucused(true)}
                    onFocus={() =>  setIsFoucused(true)}
                    />
                    <button className="flex justify-center items-center">
                        <span className="material-symbols-outlined">search</span>                
                    </button>
                </form>
            </div>
            <div
            className={classNames(
                'w-full border border-gray-300 h-96 absolute bg-white my-2',
                {
                    hidden: !isFocused,
                }
            )}
            >

            {!search ? <Recents handleClose={() => setIsFoucused(false)}  /> : 
            <AutoComplate query={search} handleClose={() => setIsFoucused(false)} />}
            </div>
        </div>
    ) 
}