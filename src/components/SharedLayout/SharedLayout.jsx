import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Box } from 'services/Box';
import { Header, NavigateLink } from './SharedLayouts.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Box
          as="nav"
          display="flex"
          gridGap={5}
          maxWidth={10}
          minWidth={8}
          pr={7}
          pl={7}
          mr="auto"
          ml="auto"
          height={3}
          alignItems="center"
        >
          <NavigateLink to="/">Home</NavigateLink>
          <NavigateLink to="/movies">Movies</NavigateLink>
        </Box>
      </Header>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
