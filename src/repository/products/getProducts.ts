
import { Product } from "@/types"
import { getMockProductData, timeout } from "@/utils/mock"


type Params = {
    fromPage?: number
    toPage?: number
}

export default async function getProducts({
    fromPage = 0,
    toPage = 1,
}: Params ): Promise<{data: Product[]}>{

    if(fromPage > 5) {
        return Promise.resolve({data: []})
    }
    const data: Product[] = Array.from({length: (toPage - fromPage) * 10  
    }).map(() => getMockProductData({purchaseBy: null}))
    await timeout()
    return Promise.resolve({data})
}