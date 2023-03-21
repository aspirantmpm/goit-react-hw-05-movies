import { Nav, LinkHeader, NavHeader, Wrapper, Container } from './Globalstyle';
import { GiFilmProjector } from 'react-icons/gi';

export const Header = () => {
  return (
    <NavHeader>
      <Container>
        <Wrapper>
          <GiFilmProjector fill="#fff" size={60} />
          <Nav>
            <LinkHeader to="/">Home</LinkHeader>
            <LinkHeader to="/movies">Movies</LinkHeader>
          </Nav>
        </Wrapper>
      </Container>
    </NavHeader>
  );
};
