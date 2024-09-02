

 import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';


const Product = () => {
  const { productId } = useParams();
  const { products, currency,addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size,setSize] = useState('');
   

  const fetchProductData = async () => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
      
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);



  
  const handleSizeSelection = (selectedSize) => {
    setSize(selectedSize);
    console.log(`Selected size: ${selectedSize}`);
  };

  const handleAddToCart = () => {
    if (!size) {
      console.log('Please select a size before adding to the cart.');
      return;
    }
    addToCart(productData._id, size);
    console.log(`Adding product ${productData._id} with size ${size} to cart.`);
  };





  return productData ? (

    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
     
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-auto '>
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                alt=''
                onClick={() => setImage(item)} 
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
           <img className='w-5/6 px-4 py-5 h-auto  ' src={image} alt='' /> 
          
          </div>

          <div className='flex-1'>
                  <h1 className='font-medium text-1xl mt-2'>{productData.name}</h1>
                  <div className='flex items-center gap-1 mt-2'>
                  <img src= {assets.star_icon}alt='' className="w-3 5"/>
                  <img src={assets.star_icon} alt='' className="w-3 5"/>
                  <img src={assets.star_icon} alt='' className="w-3 5"/>
                  <img src={assets.star_dull_icon} alt='' className="w-3 5"/>
                     <p className='pl-2'>(122)</p>
                  </div>
                  <p className='mt-5 text-3xl font-medium w-full'>{currency}{productData.price}</p>
                  <p className='mt-5 text-gray-500 md:w-4/5  w-auto'>{productData.description}</p>

                  <div className='flex mt-5 gap-2 '  >
                  {productData.sizes.map((item,index)=>(
                     <button onClick={()=>setSize(item)}  className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500': ''}`} key={index}>{item}</button>

                  ))}
                  </div>
                  
                  <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white mt-4 ms-4 px-2 py-3 text-sm active:bg-gray-700'>ADD TO CART </button>
                  <hr className='mt-8 sm:w-4/5' />

                  <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                           <p>100% Original product.</p>
                           <p>Cash on delivary is available on this product.</p>
                           <p>Easy Return policy and exchange is available on this product.</p>
                  </div>
          </div>
           
        </div>

      </div>
   

      <div className='mt-20'>
                  <div className='flex' >
                    <b className='border px-5 py-3 text-sm'>Description</b>
                      <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
                  </div>

                  <div className='flex flex-col gap-4 border px-4 py-4 text-sm text-gray-500'>
                        <p>E-commerce is a gigantic $5.5 trillion industry riding on the back of three letters SMS. But only a few businesses with the right eCommerce SMS templates get the most profit.  </p>
                        <p>Imagine texting your customers throughout their shopping experience, only to lose those customers to your competitors. </p>
                  </div>

                </div>


               
            <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : (
    <div className='opacity-0'></div>
  );
};

export default Product; 

