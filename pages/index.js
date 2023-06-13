import HeroBanner from '@/Components/HeroBanner'
import ProductCard from '@/Components/ProductCard'
import Wrapper from '@/Components/Wrapper'
import { fetchdataFromApi } from '@/UTILS/api'



const Home = ({products}) => {
  return (
    <main>
      <HeroBanner/>
   
      <Wrapper>
       {/* heading and paragaph start */}
       <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Cushioning for Your Miles
                    </div>
                    <div className="text-md md:text-xl">
                        A lightweight Nike ZoomX midsole is combined with
                        increased stack heights to help provide cushioning
                        during extended stretches of running.
                    </div>
                </div>
                {/* heading and paragaph end */}
                 {/* products grid start */}
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 my-14 px-3 md:px-0">
                  {products.data.map((product)=>(
                    <ProductCard key={product?.id} data={product}/>
                  ))}
                  {/* <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/> */}
                  </div>
                   {/* products grid end */}
      </Wrapper>
    </main>
  )
}

export default Home

export async function getStaticProps() {

  const products = await await fetchdataFromApi('/api/products?populate=*');

  return {
    props: {
      products,
    },
  };
}