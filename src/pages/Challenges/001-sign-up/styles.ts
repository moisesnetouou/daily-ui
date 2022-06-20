import { styled } from '../../../../stitches.config';
// import medusaImg from '../../../assets/images/medusa.jpg';

export const SignUpContainer = styled('main', {
  display: 'flex',
  backgroundColor: '$gray200',
  height: '100vh',

  '.form-container': {
    width: '50%',
  },
});

export const ApresentationContainer = styled('div', {
  width: '50%',
  height: '100%',
  backgroundImage: 'url(../../../assets/images/medusa.jpg)',
  flexDirection: 'column',
  display: 'flex',
  justifyContent: 'center',
});

export const ApresentationContent = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  height: '80%',
  flexDirection: 'column',
  margin: '0 auto',

  '.apresentation-header': {},

  '.apresentation-signin': {},
});

export const FormContainer = styled('div', {
  width: '50%',
  height: '100%',
});
