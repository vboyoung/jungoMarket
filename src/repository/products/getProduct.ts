import { Product } from "../../types";
import { getMockProductData } from "@/utils/mock";



export async function getProduct(id:string): Promise<{data: Product}>{
    // const data: Product = {
    //     id: 'id',
    //     title: 'title',
    //     price: 50_000,
    //     address: 'address',
    //     description: 'description',
    //     imageUrls: ['imageUrls'],
    //     isChangeable: true,
    //     isUsed: true,
    //     tags: ['tags'],
    //     createdAt: 'createdAt',
    //     createdBy: 'createdBy',
    //     purchaseBy: 'purchaseBy'
    // }

    const data: Product = getMockProductData({id});

    return Promise.resolve({data});
}  


 