import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ko'
import Link from 'next/link'

import Text from '../Text'

interface Props { 
  title: string
  price: number
  createdAt: string
  imageUrl: string
  isSoldOut?: boolean
}

dayjs.extend(relativeTime).locale('ko')

export default function Product ({
    title,
    price,
    createdAt,
    imageUrl,
    isSoldOut
}: Props) {
    return(   
        <div className="group relative">
            {
                isSoldOut && (
                    <div className="absolute top-0 left-0 w-full h-full bg-slate-900 opacity-70 flex justify-center items-center">
                 
                    </div>
                )
            }   
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:asepect-none group-hover:opacity-75 lg:h-80">
                <img src={imageUrl} alt={title} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>

            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700 text-ellipsis overflow-hidden whitespace-nowrap block truncate">{title} </h3>
                    <p className="mt-1 text-xs text-gray-500">{dayjs(createdAt).fromNow()}</p> 
                </div>

                <p className="text-sm text-gray-900">{`${price} 원`} </p> 
            </div>
        </div>
    )
}