import { useTheme } from '@mui/material/styles';

export const Logo = () => {
  const theme = useTheme();
  const fillColor = theme.palette.primary.main;

  return (
    <img src='../../../apple-touch-icon.png'
     alt='Logo' 
     style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  );
};
