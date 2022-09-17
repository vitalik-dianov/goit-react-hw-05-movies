import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Box } from 'services/Box';
import { Header } from './SharedLayouts.styled';


export const SharedLayout = () => {
  return (
    <Box minWidth={8} maxWidth={10} ml="auto" mr="auto" pl={7} pr={7}>
      <Header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
