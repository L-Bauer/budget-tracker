import React, { Fragment } from "react";
import {
  Nav,
  NavLink,
  NavMenu,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
  
        <NavMenu>
          <NavLink to='../ListBudget.jsx' activeStyle>
            Budget
          </NavLink>
          <NavLink to='../transaction/Transaction.jsx' activeStyle>
            Transactions
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;