import React from 'react'
import { imgMenArr, imgWomenArr, imgWomenOfferArr, offerImg } from '../body/imgUrl'

function WomenBody() {
  return (
    <div className='col text-center'>
    <img className='col-10 mt-4'
      src='https://i.pinimg.com/originals/d9/26/5e/d9265e0a753874943cf6b9a289105629.jpg'
      height={'350px'} alt='banner' />

    <img className='col-11 mt-4 m-4'
      src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/d153ee75-3464-44f7-9041-4afd29d95a751646993148101-Unbelievable-Deals.jpg'
      height={'150px'} alt='banner' />

    <div className='col-12 p-2'>
      {imgWomenArr.map(val => {
        console.log(val)
        return <img src={val.img} className='col-2' alt='shradda' />
      })}
    </div>

    <img className='col-11 mt-4 m-4'
      src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/85891451-b148-4e95-b9f2-0bf42e82e51a1646993148063-Don_t-Miss-These-Offers.jpg'
      height={'100px'} alt='banner' />

    <div className='col-12 p-2'>
      {imgWomenOfferArr.map(val => {
        console.log(val)
        return <img src={val.img} className='col-2' alt='shradda' />
      })}
    </div>


    <img className='col-11 mt-4 m-4'
      src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/d153ee75-3464-44f7-9041-4afd29d95a751646993148101-Unbelievable-Deals.jpg'
      height={'150px'} alt='banner' />

    <div className='col-12 p-2'>
      {imgWomenArr.map(val => {
        console.log(val)
        return <img src={val.img} className='col-2' alt='shradda' />
      })}
    </div>
  </div>
  )
}

export default WomenBody