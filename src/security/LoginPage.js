import { Login } from 'react-admin';
import { Card, CardContent, Grid, Typography, useMediaQuery, Modal, Box, Link } from '@mui/material';
import CompletePasswordPage from './CompletePasswordPage';
import authProvider from '../providers/authProvider';
import { useState } from 'react';
import ForgotPassword from './ForgotPassword';
import ConfirmForgotPassword from './ConfirmForgotPassword';

const HaLoginPage = () => {
  const [username, setUsername] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [confirm, setConfirm] = useState(true);

  const displayFull = useMediaQuery('(min-width:1024px) and (min-height:768px)');
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    height: '430px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    margin: 'auto',
    padding: '40px',
    borderRadius: '5px',
    boxShadow: '0 0 10px #000',
  };

  const ResponsiveLogin = () => {
    return (
      <Grid container xs={12}>
        <Grid
          xs={displayFull ? 4 : 12}
          sx={{
            width: 'inherit',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Login backgroundImage={null} style={{ backgroundImage: 'inherit', position: 'relative' }} />
        </Grid>
        <Grid
          xs={displayFull ? 4 : 12}
          sx={{
            width: 'inherit',
            display: 'flex',
            justifyContent: 'center',
            bottom: 100,
          }}
          position={'absolute'}
        >
          <Link href='#/login' color='#FFFFFF' onClick={() => setOpenModal(true)} align='center'>
            Mot de passe oublié?
          </Link>
        </Grid>
      </Grid>
    );
  };

  const ResponsiveCompletePassword = () => <CompletePasswordPage style={{ backgroundImage: 'inherit' }} />;
  const PasswordChangeableLogin = () =>
    authProvider.isTemporaryPassword() ? <ResponsiveCompletePassword /> : <ResponsiveLogin />;

  return (
    <div
      style={{
        backgroundImage: 'url(https://i.postimg.cc/8cnYLpfc/ddddd.jpg)',
        backgroundSize: 'cover',
        position: 'fixed',
        padding: '0',
        margin: '0',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box sx={style}>
          <div className="form-box">
            <div className="header-text">Login Form</div>
            <input placeholder="Your Email Address" type="text" />
            <input placeholder="Your Password" type="password" />
            <input id="terms" type="checkbox" />
            <label htmlFor="terms"></label>
            <span>
              Agree with <a href="#">Terms & Conditions</a>
            </span>
            <button>login</button>
          </div>
        </Box>
      </Modal>
      {displayFull ? (
        <Grid container spacing={2} style={{ paddingTop: '10%' }}>
          <Grid item xs={4}>
            <Typography variant='h3' align='center'>
              <div style={{ color: '#ffc107' }}>HEI</div>
            </Typography>
            <Typography variant='h7' align='center'>
              <div style={{ color: '#ffffff' }}>Une scolarité qui passe à l'échelle</div>
            </Typography>{' '}
            <PasswordChangeableLogin />
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={1}>
              <Grid item xs={1} />
              <Grid item xs={5}>
                {/* Your card components here */}
              </Grid>
              <Grid item xs={4}>
                {/* Your card components here */}
              </Grid>
              <Grid item xs={2} />

              <Grid item xs={1} />
              <Grid item xs={5}>
                {/* Your card components here */}
              </Grid>
              <Grid item xs={4}>
                {/* Your card components here */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <PasswordChangeableLogin />
      )}
    </div>
  );
};

export default HaLoginPage;
