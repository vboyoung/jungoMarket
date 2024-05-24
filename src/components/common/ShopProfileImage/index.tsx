import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";



interface Props {
    imageUrl?: string
    className?: string
}


export default function ShopProfileImage({imageUrl, className}:Props){ 
    return(
       <>
        {imageUrl ? (
            <div className={
                classNames(
                    className,
                    'rounded-full w-14 h-14 bg-cover bg-center'
                )} 
                style={{ backgroundImage: `url(${imageUrl})`}}
            />
        ) : (
            <div className={classNames(
            className,
            'rounded-full bg-slate-200 w-14 h-14 flex justify-center items-center'
            )}>
            <span className="material-symbols-outlined text-slate-500">storefront</span>
            </div>
        ) 
        }  
        </>
    )
}


