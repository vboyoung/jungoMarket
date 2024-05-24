import classNames from "classnames"
import ShopProfileImage from "../ShopProfileImage"
import { title } from "process"
import Text from "../Text"


interface Props {
    name: string
    profileImageUrl?: string
    productCount: number
    followerCount: number
    type?: 'row' | 'column'
    handleClickTitle?: () => void
    handleClickProfileImage?: () => void
    handleClickProductCount?: () => void
    handleClickFollowerCount?: () => void
}



export default function Shop({
    name,
    profileImageUrl,
    productCount,
    followerCount,
    handleClickTitle,
    handleClickProfileImage,
    handleClickProductCount,
    handleClickFollowerCount,
    type = 'row'
}: Props){
    return(
        <div className={
            classNames(
                'flex',
                {
                    'flex-row items-center gap-x-4' : type === 'row',
                    'flex-col' : type === 'column',
                },
                type === 'column' && 'gap-y-2 items-center'
            )
        }>
           
            <div className={classNames(
               'w-14',
               handleClickProfileImage && 'cursor-pointer'
            )}
             onClick={handleClickProfileImage}
            >
                <ShopProfileImage imageUrl={profileImageUrl} />
            </div>
            <div className={classNames(
                'overflow-hidden',
                 {'text-center': type === 'column'}
            )}>
                <h3 onClick={handleClickTitle}
                className="text-sm text-gray-700 truncate">{name}</h3>
                <ul className={classNames(
                    'flex', 'text-sm', 'text-gray-400',
                    type === 'column' && 'justify-items-center' 
                )}
                >
                    <li onClick={handleClickProductCount}>상품 {productCount}</li>
                    <span className="material-symbols-outlined rotate-90 text-gray-400">remove</span>
                    <li onClick={handleClickFollowerCount}>팔로워 {followerCount}</li>
                </ul>  
            </div>
        </div> 
    )
}