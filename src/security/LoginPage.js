import { Login } from 'react-admin'
import { Card, CardContent, Grid, Typography, useMediaQuery, Modal, Box, Link } from '@mui/material'
import { mainTheme } from '../haTheme'
import { positions } from '@mui/system'
import CompletePasswordPage from './CompletePasswordPage'
import authProvider from '../providers/authProvider'
import { useState } from 'react'
import ForgotPassword from './ForgotPassword'
import ConfirmForgotPassword from './ConfirmForgotPassword'

const aCard = (title, subtitle, description1, description2, course) => {
  const syllabus = 'https://drive.google.com/file/d/12Lc4o3jfQOFHIzazPToO2hnGZc8epU3I/view';
  return (
    <Card
      elevation={0} // Set elevation to 0 to remove shadows
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent white background
        borderRadius: '10px',
        padding: '15px',
        margin: '15px 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CardContent>
        <Typography variant='h3' color='primary' gutterBottom style={{ color: '#ffc107' }}>
          {title}
        </Typography>
        <Typography variant='h5' color='primary' gutterBottom style={{ color: '#ffffff' }}>
          {subtitle}
        </Typography>
        <Typography variant='body1' color='textSecondary' gutterBottom style={{ color: '#ffffff' }}>
          {description1}
          <br />
          {description2}
        </Typography>
        <Typography variant='body2' color='textSecondary'>
          <p>
            Cours :{' '}
            <a href={syllabus} style={{ color: '#ffffff' }}>
              {course}
            </a>
          </p>
        </Typography>
      </CardContent>
    </Card> 
    );
  };
  

const HaLoginPage = () => {
  const [username, setUsername] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [confirm, setConfirm] = useState(true);

  const displayFull = useMediaQuery('(min-width:1024px) and (min-height:768px)');
  const style = {
    position: 'absolute',
    top: '50%',
    right:'50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 30,
    p: 4,
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#fff',
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
  };

  const inputStyle = {
    height: 45,
    width: '100%',
    border: 'none',
    outline: 'none',
    borderRadius: 30,
    color: '#fff',
    padding: '0 20px',
    marginBottom: '15px',
    background: 'rgba(255, 255, 255, 0.1)',
    fontSize: 16,
  };

  const buttonStyle = {
    border: 'none',
    borderRadius: 30,
    fontSize: 15,
    height: 45,
    outline: 'none',
    width: '100%',
    background: 'rgba(255, 255, 255, 0.7)',
    cursor: 'pointer',
    transition: '0.3s',
    '&:hover': {
      boxShadow: '1px 5px 7px 1px rgba(0, 0, 0, 0.2)',
    },
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
          position={'absolute'}
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
          <Link href='#/login' color='#FFFF' onClick={() => setOpenModal(true)} align='center'>
            Mot de passe oublié?
          </Link>
        </Grid>
      </Grid>
    );
  };

  const ResponsiveCompletePassword = () => <CompletePasswordPage style={{ backgroundImage: 'inherit' }} />;
  const PasswordChangeableLogin = () => (authProvider.isTemporaryPassword() ? <ResponsiveCompletePassword /> : <ResponsiveLogin />);

  return (
    <div
    style={{
      backgroundImage: 'url(/login-bg100k.jpg)',
      backgroundSize: 'cover',
      position: 'fixed',
      padding: '0',
      margin: '0',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'right',
      alignItems: 'right',
    }}
    >
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box sx={style}>
          {confirm ? (
            <ConfirmForgotPassword username={username} setUsername={setUsername} setConfirm={setConfirm} />
          ) : (
            <ForgotPassword username={username} setOpenModal={setOpenModal} />
          )}
        </Box>
      </Modal>
      <div style={{ width: '100%', maxWidth: '1024px' }}>
        <Grid container spacing={2} style={{ paddingTop: '10%' }} theme={mainTheme}>
          <Grid item xs={4}>
            <Typography variant='h3' align='center' style={{ color: '#ffc107' }}>
              HEI
            </Typography>
            <Typography variant='h7' align='center' style={{ color: '#ffffff' }}>
              Une scolarité qui passe à l'échelle
            </Typography>
            <form>
              <div style={style}>
                <input type='text' className='input' style={inputStyle} placeholder='Username' required />
                <i className='bx bx-user' style={{ position: 'relative', top: '-31px', left: '20px', color: '#fff', fontSize: '24px' }} />
                <input type='password' className='input' style={inputStyle} placeholder='Password' required />
                <i className='bx bx-lock-alt' style={{ position: 'relative', top: '-31px', left: '20px', color: '#fff', fontSize: '24px' }} />
                <input type='submit' className='submit' value='Login' style={buttonStyle} />
                <div
                  className='bottom'
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    fontSize: 'small',
                    color: '#fff',
                    marginTop: '10px',
                  }}
                >
                  <div className='left' style={{ display: 'flex' }}>
                    <input type='checkbox' id='check' style={{ marginRight: '5px' }} />
                    <label htmlFor='check' style={{ color: '#fff', textDecoration: 'none' }}>
                      Remember Me
                    </label>
                  </div>
                  <div className='right' style={{ display: 'flex' }}>
                    <label>
                      <a href='#' style={{ color: '#fff', textDecoration: 'none' }}>
                        Forgot password?
                      </a>
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={1}>
              <Grid item xs={1} />
              <Grid item xs={5}>
                {aCard('0', "Coût à l'arrêt", 'Personne ne se connecte ?', 'Alors personne ne paie.', 'SYS-2')}
              </Grid>
              <Grid item xs={4}>
                {aCard('0', 'Vulnérabilité', 'Crashtest nous scanne,', 'mais ne trouve rien !', 'WEB-2')}
              </Grid>
              <Grid item xs={2} />

              <Grid item xs={1} />
              <Grid item xs={5}>
                {aCard('250,000,000', 'Utilisateurs', 'Onboarder tout Madagascar ?', 'Dix fois sans problème.', 'DONNEES-2')}
              </Grid>
              <Grid item xs={4}>
                {aCard('1', 'Seconde', 'Pire réponse de notre API', 'au percentile 97.', 'PROG-2')}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HaLoginPage;
