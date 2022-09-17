import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const BackButton = () => {
  const navigateBack = useNavigate();
  const location = useLocation();
  const [backHref, setBackHref] = useState('');
  // setQueryHref(location.state?.from)
  useEffect(() => {
    if (location.state?.from === backHref) {
      return;
    }
    if (location.state?.from) {
      setBackHref(location.state?.from);
    } else setBackHref('/');
  }, [backHref, location.state?.from]);
  // console.log(backHref);

  const handleClick = () => {
    navigateBack(`/${backHref}`);
  };
  return (
    <button type="button" onClick={handleClick}>
      Go Back
    </button>
  );
};
