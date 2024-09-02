import React, { useContext, useState, useEffect} from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';



const LatestCollection = () => {
  const { products } = useContext(ShopContext); // useContext is used here
  const [latestProducts,setLatestProducts] = useState([]);

  useEffect(()=>{
    if (products.length>0){
        setLatestProducts(products.slice(0,10));

    }
  },[products])
 

  return (
    <div className='my-10'>
       <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTION'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        </div>  
           {/* Rendering Products   */}
            <div className='grid grid-cols2 sm:grid-cols-3 md:grid-cols4 lg:grid-cols-5 gap-4 gap-y-6'>
             {
              latestProducts.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
              ))
             }
            </div>


    </div>
  );
}

export default LatestCollection;



