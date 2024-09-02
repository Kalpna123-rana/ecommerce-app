import React from 'react'
import Title from '../components/Title';
import {assets} from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';


const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
            <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='' />
               <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
               <p>Forever was born out of passion for innovation and a desire to revolution, explore and purchase a wide range of product from the comfort of their home, In the publishing and printing industry, designers often use Lorem Ipsum when creating layouts for books, magazines, brochures, and other printed materials.</p>
               <p>Since our inception, we've tirelessly to curate a diverse selection, we offer an extensive collection sourced from trusted brand and supplie, Designers can focus on the layout, typography, and overall aesthetics of the design before the final content is ready.  </p>
               <b className='text-gray-800'>Our Mission</b>
               <p>Presentations and Templates: Lorem Ipsum is also useful in creating presentation templates. When designing presentation slides, professionals can use placeholder text to demonstrate how the text will appear on the slides. This helps in designing visually appealing and balanced slides. </p>
               </div>

      </div>
               <div className='text-xl py-4'>
                    <Title text1={'MY'} text2={'CHOOSE US'} />
               </div>

               <div className='flex flex-col md:flex-row text-sm mb-20 '>
                    <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                       <b>Quality Assurance:</b>
                       <p className='text-gray-600'> We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
                    </div>
                
                    <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                       <b>Convenience:</b>
                       <p className='text-gray-600'> We our user friendly interface and hassle-free ordering process,shoping has been never easier .</p>
                    </div>
                    <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                       <b>Exceptional Customer Service:</b>
                       <p className='text-gray-600'> We Our team of dedicated professional is here to assist you the way, ensuring you satisfaction is our top priority. </p>
                    </div>
               </div>




               <NewsletterBox />

    </div>
  )
}

export default About;
