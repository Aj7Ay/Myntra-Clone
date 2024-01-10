import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { TextField } from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { withRouter } from 'react-router-dom';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navigation = (props) => {
  // const [menNav, setmenNav] = useState(false)
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" variant='elevation' color='inherit' className='p-3' >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            onClick={() => { props.history.push('/') }}
          >
            <img height={'70px'}
              src='data:image/jpeg;base64,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' alt='logo' />
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <img height={'70px'}
              src='data:image/jpeg;base64,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' alt='logo' />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <Button
              onClick={() => { props.history.push('/men') }}
              sx={{ my: 2, color: 'black', marginLeft: '30px', display: 'block', fontSize: '20px', paddingLeft: '10px', paddingRight: '10px' }}
            >
            MEN
            </Button>

            <Button
              onClick={() => { props.history.push('/women') }}
              sx={{ my: 2, color: 'black', display: 'block', fontSize: '20px', paddingLeft: '10px', paddingRight: '10px' }}
            >
              WOMEN
            </Button><Button
              onClick={() => { props.history.push('/kids') }}
              sx={{ my: 2, color: 'black', display: 'block', fontSize: '20px', paddingLeft: '10px', paddingRight: '10px' }}
            >
              KIDS
            </Button><Button
              onClick={() => { props.history.push('/homeandliving') }}
              sx={{ my: 2, color: 'black', display: 'block', fontSize: '20px', paddingLeft: '10px', paddingRight: '10px' }}
            >
              HOME & LIVING
            </Button>

            {/* <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'black', display: 'block', fontSize: '20px', paddingLeft: '10px', paddingRight: '10px' }}
            >
              BEAUTY
            </Button>

            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'black', display: 'block', fontSize: '20px', paddingLeft: '10px', paddingRight: '10px' }}
            >
              STUDIO
            </Button> */}

          </Box>

          <Box sx={{ flexGrow: 0 }} className='d-fixed'>
            <TextField style={{ marginTop: '10px' }} id="outlined-basic" label="Search" size='small' variant="outlined" />
            {/* <div className='d-inline-block '>       */}
            <div style={{ display: 'inline-block', textAlign: 'center', marginLeft: '20px' }}
              onClick={() => { props.history.push('/login') }}>
              <PermIdentityIcon className='m-auto'
                style={{ marginLeft: '30px', fontSize: '30px' }} />
              <p >Profile</p>
            </div>

            <div style={{ display: 'inline-block', textAlign: 'center', marginLeft: '20px' }}
              onClick={() => { props.history.push('/wishlist') }}>
              <FavoriteBorderOutlinedIcon className='m-auto' style={{ marginLeft: '30px', fontSize: '30px' }} />
              <p >Wishlist</p>
            </div>

            <div style={{ display: 'inline-block', textAlign: 'center', marginLeft: '20px' }}>
              <LocalMallOutlinedIcon className='m-auto' style={{ marginLeft: '30px', fontSize: '30px' }} />
              <p >Bag</p>
            </div>
            {/* </div> */}


            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

  );
};
export default withRouter(Navigation);
