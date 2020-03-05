import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
    margin: 14px;
  }
`;

export const OptionsContainer = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const HamburgerMenu = styled.div`
  @media screen and (min-width: 800px) {
    display: none;
  }
  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;
export const HamburgerIcon = styled.div`
  height: 100%;
  width: 70px;
  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;
