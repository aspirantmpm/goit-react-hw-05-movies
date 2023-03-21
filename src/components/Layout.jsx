import { Header } from './Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from './Globalstyle';
export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};
