import { Checkbox, FormControl, FormControlLabel, FormGroup, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'
import { catArr, discArr, gendArr, priceArr, brandArr } from './filter';
import FilterCards from './FilterCards'

function FilterMen() {
    const [brandFilter, setbrandFilter] = useState('');
    const [genFilter, setgenFilter] = useState('');
    const [priceFilter, setpriceFilter] = useState(null);
    const [discFilter, setdiscFilter] = useState(0);
    const [catFilter, setcatFilter] = useState('');


    const handleBrand = (e) => {
        console.log(e.target.value);
        if (e.target.checked) {
            setbrandFilter(e.target.value)
        } else {
            setbrandFilter('')
        }
    }

    const handleGen = (e) => {
        console.log(e.target.value);
        if (e.target.checked) {
            setgenFilter(e.target.value)
        } else {
            setgenFilter('')
        }
    }

    const handlePrice = (e) => {
        console.log(e.target.value);
        if (e.target.checked) {
            setpriceFilter(e.target.value)
        } else {
            setpriceFilter(null)
        }
    }

    const handleDisc = (e) => {
        console.log(e.target.value);
        if (e.target.checked) {
            setdiscFilter(e.target.value)
        } else {
            setdiscFilter(null)
        }
    }

    const handleCat = (e) => {
        console.log(e.target.value);
        if (e.target.checked) {
            setcatFilter(e.target.value)
        } else {
            setcatFilter(null)
        }
    }


    return (
        <>
            <p
                style={{ fontSize: '23px', fontWeight: 'bold', marginBottom: '25px', paddingLeft: '15px', marginTop: '20px' }}
                className=' d-flex justify-content-start'
            >Myntra Fashion store</p>
            <div className='d-flex'>
                <div className='col-3'
                    style={{ textAlign: 'left' }}>
                    <p
                        style={{ fontSize: '20px', fontWeight: 'bold', marginRight: '60px', paddingLeft: '15px' }}
                        className='d-inline-block'
                    >FILTER</p>

                    <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#ff0066' }}
                        className='d-inline-block'
                        onClick={() => {
                            setbrandFilter('')
                        }}
                    >CLEAR ALL</p>

                    <div className='filterBorder'>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                                className='mb-2'
                            >
                                {gendArr.map((val, ind) => {
                                    return <FormControlLabel
                                        key={ind}
                                        onClick={handleGen}
                                        style={{ marginLeft: '10px', marginBottom: '-10px' }}
                                        value={val.value} control={<Radio style={{ color: '#ff0066' }} />}
                                        label={val.lable} />
                                })}
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='filterBorder'>
                        <p
                            style={{ fontSize: '18px', fontWeight: 'bold', marginRight: '60px', marginTop: '10px', paddingLeft: '15px' }}
                        >CATEGORIES</p>
                        <FormGroup className='mb-3'>
                            {catArr.map((val, ind) => {
                                return <FormControlLabel
                                    key={ind}
                                    style={{ marginLeft: '10px', marginBottom: '-10px' }}
                                    control={<Checkbox style={{ color: '#ff0066' }} />}
                                    label={val}
                                    value={val}
                                    onClick={handleCat}
                                />
                            })
                            }
                        </FormGroup>
                    </div>

                    <div className='filterBorder'>
                        <p
                            style={{ fontSize: '18px', fontWeight: 'bold', marginRight: '60px', marginTop: '10px', paddingLeft: '15px' }}
                        >BRANDS</p>

                        <FormGroup className='mb-3'>
                            {brandArr.map((val, ind) => {
                                return <FormControlLabel
                                    key={ind}
                                    style={{ marginLeft: '10px', marginBottom: '-10px' }}
                                    control={<Checkbox
                                        style={{ color: '#ff0066' }}
                                        value={val} />}
                                    label={val}
                                    value={val}
                                    onClick={handleBrand}
                                />
                            })}

                        </FormGroup>
                    </div>

                    <div className='filterBorder'>
                        <p
                            style={{ fontSize: '18px', fontWeight: 'bold', marginRight: '60px', marginTop: '10px', paddingLeft: '15px' }}
                        >PRICE</p>

                        <FormGroup
                            className='mb-3'>
                            {priceArr.map((val, ind) => {
                                return <FormControlLabel
                                    key={ind}
                                    style={{ marginLeft: '10px', marginBottom: '-10px' }}
                                    control={<Checkbox style={{ color: '#ff0066' }}
                                        onClick={handlePrice}
                                        value={val.price}
                                    />}
                                    label={val.lable} />
                            })}
                        </FormGroup>
                    </div>


                    <div className='filterBorder'>
                        <p
                            style={{ fontSize: '18px', fontWeight: 'bold', marginRight: '60px', marginTop: '10px', paddingLeft: '15px' }}
                        >DISCOUNT</p>

                        <FormGroup className='mb-4'>
                            {discArr.map((val, ind) => {
                                return <FormControlLabel
                                    key={ind}
                                    style={{ marginLeft: '10px', marginBottom: '-10px' }}
                                    control={<Checkbox style={{ color: '#ff0066' }} />}
                                    label={val.lable}
                                    value={val.disc}
                                    onClick={handleDisc}
                                />
                            })}
                        </FormGroup>
                    </div>

                </div>

                <div className='col-9 m-auto'>
                    <FilterCards brandFilter={brandFilter}
                        genFilter={genFilter}
                        priceFilte={priceFilter}
                        discFilter={discFilter}
                    />
                </div>
            </div>


        </>
    )
}

export default FilterMen