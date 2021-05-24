import { keyframes } from '@emotion/react';

const wave = keyframes`
  from {
    transform: rotate(5deg);
  }
  to {
    transform: rotate(-5deg);
  }`;

const resize = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(.8);
  }`;

export default {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#D94862',
    second: '#F26849',
    third: '#D98218',
    dark: '#344973',
    five: '#fffcd9',
    transparent: 'transparent',
  },
  text: {
    default: {
      fontSize: 3,
      color: 'dark',
      textTransform: 'uppercase',
    },
    subtext: {
      fontSize: 3,
      color: 'dark',
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
  },

  input: {
    borderColor: 'gray',
    width: '250px',
    '&:focus': {
      borderColor: 'primary',
      boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
      outline: 'none',
    },
  },
  images: {
    logo: {
      animation: `${wave} 0.5s linear alternate infinite`,
      '&:hover': {
        cursor: 'pointer',
      },
    },
    titleLogo: {
      animation: `${resize} 0.5s linear forwards`,
    },
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'second',
      },
    },
    secondary: {
      marginTop: '10px',
      fontWeight: 'bold',
      color: 'white',
      bg: 'orange',
      '&:hover': {
        bg: 'dark',
        cursor: 'pointer',
      },
    },
  },
};
