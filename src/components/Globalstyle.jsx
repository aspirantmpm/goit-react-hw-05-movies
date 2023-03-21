import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import 'modern-normalize';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

/*
 * Стили компонента App
 */
.App {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
}
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const MovieLink = styled(Link)`
  font-size: 24px;
  color: black;
  text-decoration: none;
  transition: color 200ms ease-out;
  &:hover,
  &:focus {
    color: #ff7b00;
  }
`;
export const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
  color: #ff7b00;
  margin-bottom: 30px;
`;

export const HomeWrapper = styled.div`
  margin-top: 30px;
`;
export const ProfileImg = styled.img`
  width: 130px;
`;

export const Cast = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 30px 0;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc((100% - 100px) / 5);
  padding: 10px;
  box-shadow: rgba(247, 161, 3, 0.12) 0px 1px 3px, rgb(228, 138, 2) 0px 1px 2px;
`;
export const Name = styled.p`
  margin-top: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  color: #ff7b00;
`;
export const Character = styled.p`
  margin-top: 10px;
  text-align: center;
  font-weight: 500;
`;

export const CastEmpty = styled.p`
  font-size: 30px;
  text-align: center;
`;

export const LinkBack = styled(Link)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px 0;
  padding: 5px 0;
  max-width: 100px;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  background-color: #242424;
  border: solid 1px black;
  transition: background-color 250ms ease-out;
  &:hover,
  &:focus {
    background-color: #ff7b00;
  }
`;

export const Username = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
  color: #ff7b00;
`;

export const Reviews = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 30px;
  margin: 30px 0;
`;

export const ItemReviews = styled.li`
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgba(247, 161, 3, 0.12) 0px 1px 3px, rgb(228, 138, 2) 0px 1px 2px;
`;

export const EmptyReviews = styled.p`
  font-size: 30px;
  text-align: center;
`;

export const Message = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 90px;
  font-weight: 500;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-left: 30px;
`;

export const NavHeader = styled.header`
  background-color: #242424;
`;

export const Wrapper = styled.div`
  display: flex;
`;
export const Container = styled.div`
  max-width: 1230px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const Info = styled.div`
  display: flex;

  border-radius: 3px;
  padding: 20px;
  box-shadow: rgba(247, 161, 3, 0.12) 0px 1px 3px, rgb(228, 138, 2) 0px 1px 2px;
`;

export const SubInfo = styled.div`
  display: flex;
  gap: 30px;
  margin: 30px 0 0 50px;
`;

export const Img = styled.img`
  width: 300px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  margin-left: 30px;
  max-width: 100%;
`;

export const Text = styled.p`
  margin-top: 10px;
  font-size: 25px;
`;

export const AdditionalLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  min-width: 100px;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  background-color: #242424;
  border-radius: 7px;
  border: solid 1px black;
  transition: all 200ms ease-out;
  transform: scale(1);
  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: #ff7b00;
  }
`;

export const MovieName = styled.h1`
  font-size: 40px;
  color: #ff7b00;
`;

export const TitleInfo = styled.h2`
  font-size: 30px;
  color: #ff7b00;
`;

export const Label = styled.label`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  font-size: 26px;
`;
export const Input = styled.input`
  font-size: 24px;
  font-weight: 400;
`;

export const Form = styled.form`
  display: flex;
  margin: 22px 0;
`;

export const Button = styled.button`
  display: block;
  cursor: pointer;
  background-color: #fff;
  border: none;
  border-radius: 2px;
  background-color: #ff7b00;
  transition: all 250ms ease-out;
  svg {
    fill: #fff;
  }
  &:hover,
  &:focus {
    background-color: #3a3a3a;
    svg {
      fill: #ff7b00;
    }
  }
`;

export const LinkHeader = styled(NavLink)`
  padding: 16px 0;
  font-size: 35px;
  color: #fff;
  text-decoration: none;
  &.active {
    color: #ff7b00;
  }
`;
