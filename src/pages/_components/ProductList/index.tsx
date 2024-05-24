
import { useEffect, useState } from "react";
import getProducts from "@/repository/products/getProducts";
import { Product as TProduct} from "@/types";
import Product from "@/components/common/Product";
import { useInView } from 'react-intersection-observer';
import Spinner from "@/components/common/Spinner";

export default function ProductList() {

   const [products, setProducts] = useState<TProduct[]>([]);
   const {ref, inView} = useInView()
     
    
    const [isLoading, setIsLoading] = useState(false)
    const [isLastPage, setIsLastPage] = useState(false)

    const handleGetProducts = async ({
        fromPage,
        toPage
    }: {
        fromPage:number
        toPage:number
    }) => {
        try{
            setIsLoading(true)
            const {data} = await getProducts({fromPage, toPage})
            return data
        }finally{
            setIsLoading(false)
        }
    }

    
    const [page, setPage] = useState(2)
    
    
    useEffect(() => {
        //inViw가 true면 새로운 페이지 로딩
        if(inView){
           (async () => {
            const data = await handleGetProducts({fromPage: page, toPage: page + 1 })

            if(data.length === 0) {
                setIsLastPage(true)
                return
            }

            setProducts((products) => [...products, ...data])
            setPage(page + 1)
           })()
        }
    }, [inView])

    useEffect(() => {
        (async() => { 
          const {data} = await getProducts({ fromPage: 0, toPage: 2});
          setProducts(data)
        })()
        }, [])

    return (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products?.map(({id, title, price, imageUrls, createdAt}) => (
                    <div key={id}>
                    <Product 
                        key={id}
                        title={title}
                        price={price}
                        imageUrl={imageUrls[0]}
                        createdAt={createdAt}
                    />
                     </div>   
                ))}     
                   
            </div>


            {isLoading && (
                <div className="text-center mt-2">
                    <Spinner />
                </div>
            )}
            {!isLastPage && products.length > 0 && products.length < 100 && 
            ( <div ref={ref}  /> )
            }
        </div>
    )
}