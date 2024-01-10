import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { imgMenArr, offerImg } from '../body/imgUrl'

function HomeAndLiving() {
    return (
        <div className='col'>
            <img className='col-12 mt-4'
                src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/6/8/eff01060-f706-468d-b97c-95cdf43174f91528443826867-Desktop-Home-Banner.jpg'
                height={'350px'} alt='banner' />

            {/* <img className='col-11 mt-4 m-4'
      src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/d153ee75-3464-44f7-9041-4afd29d95a751646993148101-Unbelievable-Deals.jpg'
      height={'150px'} alt='banner' /> */}

            <h3 className='m-4'>NICE TO SEE YOU HERE, COME ON IN!</h3>
            <div className='col'>
                <Card className='m-4 col-5 d-inline-block'>
                    <CardMedia
                        component="img"
                        height="400"
                        image="https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563660020-bed.jpg"
                        alt="green iguana"

                    />
                </Card>

                <Card className='m-4 col-5 d-inline-block'>
                    <CardMedia
                        component="img"
                        height="400"
                        image="https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563782565-furnishings.jpg"
                        alt="green iguana"

                    />
                </Card>
            </div>


            <div className='col'>
                <Card className='m-4 col-5 d-inline-block'>
                    <CardMedia
                        component="img"
                        height="400"
                        image="https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563810789-art-n-decor.jpg"
                        alt="green iguana"

                    />
                </Card>

                <Card className='m-4 col-5 d-inline-block'>
                    <CardMedia
                        component="img"
                        height="400"
                        image="https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563866590-lamps.jpg"
                        alt="green iguana"

                    />
                </Card>
            </div>

        </div>
    )
}

export default HomeAndLiving