import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BackBtn } from './BackButton.styled';

export const BackButton = ({ children }) => {
  const navigateBack = useNavigate();
  const location = useLocation();
  const [backHref, setBackHref] = useState('');
  useEffect(() => {
    if (location.state?.from === backHref) {
      return;
    }
    if (location.state?.from) {
      setBackHref(location.state?.from);
    } else setBackHref('/');
  }, [backHref, location.state?.from]);
  const handleClick = () => {
    navigateBack(`/${backHref}`);
  };
  return (
    <BackBtn type="button" onClick={handleClick}>
      {children}
    </BackBtn>
  );
};
