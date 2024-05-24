import Container from "@/components/layout/Container";
import Wrapper from "@/components/layout/Wrapper";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Product as TProduct } from "@/types";
import getProductsByKeyword from "@/repository/products/getProductsByKeyword";
import Text from "@/components/common/Text";
import Product from "@/components/common/Product";
import { getProductsByKeyordCount } from "@/repository/products/getProductsByKeywordCount";
import Pagination from "@/components/common/Pagination";


export default function search({
    products, 
    query,
    count
}: InferGetServerSidePropsType<typeof getServerSideProps>){
    return(
        <Wrapper>
            <Container>
                <div className="my-7">
                    <Text size="lg" color="red">
                        {query}
                    </Text>
                    <Text size="lg">의  검색 결과</Text>
                </div>
                <div className="grid grid-cols-4 gap-4 my-3">
                    {products.length === 0 ? ( <Text>검색 결과가 없습니다.</Text>) :  
                    (products.map(({id, title, price, createdAt, imageUrls}) => (
                        <div key={id}>
                            <Product 
                                title={title}
                                price={price}
                                createdAt={createdAt}
                                imageUrl={imageUrls[0]}
                            />
                        </div>)))}
                </div>
                <Pagination currentPage={1} count={count} handlePageChange={() => {}} />
            </Container>
        </Wrapper>
     )
}


export const getServerSideProps: GetServerSideProps<{
    products: TProduct[]
    query: string
    count: number
}> = async (context) => {

    const originalQuery = context.query.query as string | undefined
    if(!originalQuery){
        throw new Error('검색어가 없습니다')
    }

    const query = decodeURIComponent(originalQuery)
    const {data: products} = await getProductsByKeyword({
        query,
        fromPage: 0,
        toPage: 1,
    })
    const {data: count} = await getProductsByKeyordCount(query)

    return {props: {products, query, count}}
}