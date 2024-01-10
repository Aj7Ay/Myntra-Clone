import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <div className='col mt-4 d-flex justify-content-left'>
            <hr />
            <div className='col-2 d-inline-block'>
                <p style={{ textAlign: 'left' }}><b>ONLINE SHOPPING</b></p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>Men</p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>Women</p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>Kids</p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>Home & Living</p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>Beauty</p>
            </div>

            <div className='col-2 d-inline-block'>
                <p style={{ textAlign: 'left' }}><b>USEFULL LINKS</b></p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>Contact Us</p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>FAQ</p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>T&C</p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>Terms of use</p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>Track order</p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>Shopping</p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>Cancelation</p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>Return</p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>Whitehat</p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>Blog</p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>Careers</p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>Privacy Policy</p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>Site Map</p>
            </div>

            <div className='col-4 d-inline-block '>
                <p style={{ textAlign: 'left' }}><b>EXPERIENCE MYNTRA APP ON MOBILE</b></p>

                <a href='https://play.google.com/store/apps/details?id=com.myntra.android&hl=en_IN&gl=US'>
                    <img className='col-6'
                        src='https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png' alt='Google play' />
                </a>

                <a href='https://apps.apple.com/in/developer/myntra-com/id784440582'>
                    <img className='col-6'
                        src='https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png' alt='Google play' />
                </a>

                <p style={{ textAlign: 'left', marginTop: '10px' }}><b>KEEP IN TOUCH</b></p>
                <div style={{ textAlign: 'left' }}>
                    <a href='https://www.facebook.com/myntra/'>
                        <FacebookIcon style={{ fontSize: '35px', marginRight: '10px' }} className='text-secondary' />
                    </a>
                    <a href='https://twitter.com/myntra?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'>
                        <TwitterIcon style={{ fontSize: '35px', marginRight: '10px' }} className='text-secondary' />
                    </a>
                    <a href='https://www.youtube.com/channel/UCMlJjMRSKaUQhXQ_9XjCGpg'>
                        <YouTubeIcon style={{ fontSize: '35px', marginRight: '10px' }} className='text-secondary' />
                    </a>
                    <a href='https://www.instagram.com/myntra/?hl=en'>
                        <InstagramIcon style={{ fontSize: '35px', marginRight: '10px' }} className='text-secondary' />
                    </a>
                </div>
            </div>


            <div className='col-4 d-inline-block text-left'>

                <img width={'100px'} style={{ paddingBottom:'20px' }}
                    src='https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png' alt='original' />
                <p className='d-inline-block col-7' style={{ textAlign: 'left', fontSize: '20px' }}>
                <b>100% ORIGINAL</b> guarantee for all products at myntra.com</p><br/>


                <img width={'70px'} style={{ paddingBottom:'20px', marginRight: '10px' }}
                    src='https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png' alt='original' />
                <p className='d-inline-block col-7' style={{ textAlign: 'left', fontSize: '20px' }}><b>Return within 30days</b> of receiving your order</p>

            </div>

            <hr />
        </div>
    )
}

export default Footer