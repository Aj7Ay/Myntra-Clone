import React from 'react'
import { imgKidsArr, imgWomenArr, imgWomenOfferArr } from '../body/imgUrl'

function KidsBody() {
    return (
        <div className='col'>
            <img className='col-12 mt-4'
                src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/12/7/bc993d6c-2cf7-4c5d-b20c-d8cddff8caee1638869622654-Cutecumber_Desk_Banner.jpg'
                height={'350px'} alt='banner' />

            <img className='col-11 mt-4 m-4'
                src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/d153ee75-3464-44f7-9041-4afd29d95a751646993148101-Unbelievable-Deals.jpg'
                height={'150px'} alt='banner' />

            <div className='col-12 p-2'>
                {imgKidsArr.map(val => {
                    console.log(val)
                    return <img src={val.img} className='col-2' alt='shradda' />
                })}
            </div>

            <img className='col-11 mt-4 m-4'
                src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/85891451-b148-4e95-b9f2-0bf42e82e51a1646993148063-Don_t-Miss-These-Offers.jpg'
                height={'100px'} alt='banner' />

            <div className='col-12 d-flex'>
                <img className='col-6 mt-4 d-inline-block p-2'
                    src='https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/cd843509-16fe-4437-a814-90f3eea6bb4b1604906586922-41-Banner-AllOrganic.jpg'
                    height={'700px'} alt='banner' />
                <img className='col-6 mt-4 d-inline-block p-2'
                    src='https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/d878e27a-f64d-45c9-bd9b-ee257b49894f1604906586980-42-Banner-EssentialStore.jpg'
                    height={'700px'} alt='banner' />
            </div>

            <img className='col-11 mt-4 m-4'
                src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/d153ee75-3464-44f7-9041-4afd29d95a751646993148101-Unbelievable-Deals.jpg'
                height={'150px'} alt='banner' />

            <div className='col-12 p-2'>
                {imgKidsArr.map(val => {
                    console.log(val)
                    return <img src={val.img} className='col-2' alt='shradda' />
                })}
            </div>
        </div>
    )
}

export default KidsBody