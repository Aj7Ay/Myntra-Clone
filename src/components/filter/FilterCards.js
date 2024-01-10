import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { fullArr } from './filter'

function FilterCards({ brandFilter, priceFilter, discFilter }) {

    const arr = fullArr.filter((val, ind) => {
        if (!brandFilter) {
            return val
        } else if (val.brand === brandFilter) {
            console.log(val.brand)
            return val
        } else {
            return null
        }
    })
    // console.log(arr);


    return (
        <div className='row'>
            <div className='p-3 col ms-5 position-relative justify-content-start'>
                {arr.map((val, ind) => {
                    return <Card
                        sx={{ maxWidth: 345 }}
                        className='d-inline-block m-4 col-3'
                        key={ind}
                    >
                        <CardActionArea  >
                            <CardMedia
                                component="img"
                                height="200"
                                image={val.img}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div"
                                    style={{ textAlign: 'left' }}>
                                    {val.brand}
                                </Typography>
                                <Typography variant="body2" style={{ textAlign: 'left' }}>
                                        <span className='text-secondary'>{val.size}</span>
                                        <span style={{ fontWeight: 'bold', fontSize: '15px', marginRight: '2px' }}>{`Rs.${val.offerPrice}`}</span>
                                        <strike className='text-secondary'>{` Rs.${val.actualPrice}`}</strike>
                                        <span style={{ color: '#FF6633', marginLeft: '2px' }}>{`(${val.offerPer}%OFF)`}</span>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                })}

            </div>
        </div>
    )
}

export default FilterCards