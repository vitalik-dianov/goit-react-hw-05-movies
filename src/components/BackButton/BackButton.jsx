import { useLocation, useNavigate } from 'react-router-dom';

export const BackButton = () => {
  const navigateBack = useNavigate();
  const location = useLocation();
  const backHref = location.state?.from ?? '/'
  const handleClick = () => {
    navigateBack(`/${backHref}` );
  };
  console.log(location);
  return <button type="button" onClick={handleClick}>Go Back</button>;
};
