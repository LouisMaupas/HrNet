import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import style from "../utils/style";
import wealthHealthLogo from "../public/img/logo.jpg";
import AddIcon from "@mui/icons-material/Add";
import GroupsIcon from "@mui/icons-material/Groups";

// Styled components
const HeaderHeader = styled.header({
    margin: "0 0 1rem 0",
  }),
  HeaderNav = styled.nav({
    display: "flex",
    justifyContent: "center",
  }),
  HeaderTitle = styled.h1({
    display: "flex",
    justifyContent: "center",
  });

const NavbarLink = styled(Link)`
  display: flex;
  text-decoration: "none";
  color: black;
  margin: 0 1rem 0 1rem;
  &:hover {
    color: ${style.primaryColorDarker};
  }
  & > * {
    margin-right: 0.5rem;
  }
`;

/**
 * header component
 * @returns
 */
const Header = () => {
  return (
    <HeaderHeader>
      <HeaderTitle>
        <img src={wealthHealthLogo} alt="wealth Health logo" width="100px" />
        <span>Hrnet</span>
      </HeaderTitle>
      <HeaderNav>
        <NavbarLink to="/create">
          <AddIcon />
          Create Employee
        </NavbarLink>
        <NavbarLink to="/current">
          <GroupsIcon />
          Current Employees
        </NavbarLink>
      </HeaderNav>
    </HeaderHeader>
  );
};

export default Header;
