
import Container from "@/components/layout/Container";
import JggtLayout from "@/components/layout/JggtLayout" ;
import { Product as TProduct } from "@/types";
import Wrapper from "@/components/layout/Wrapper";
import ProductList from "./_components/ProductList";
import Banner from "./_components/Banner";




export default function Home() {


//  useEffect(() => {
//     getProduct('id').then(({data}) => setProduct(data))
//  },[])




  return ( 
    <>
    <JggtLayout>
        <Wrapper>
            <Container>
              {/* {JSON.stringify(products)} */}
              <Banner />
              <ProductList />
 
            </Container>
        </Wrapper>
    </JggtLayout>
    </>
  )
}
