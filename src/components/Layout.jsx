import { NavLink, Link, Outlet } from "react-router-dom";
import "./Layout.css";
// import styled from "styled-components";
// import React from "react";
// import { Link } from "@chakra-ui/react";
// // import { Link as ReachLink } from "@reach/router";
// const Layout = () => {
//   return (
//     <div>
//       <Link href="/"> Home</Link>
//       <Link href="/about"> About</Link>
//       <Link href="/flashcard"> Flashcard</Link>
//       <Link href="/translate"> Translate</Link>
//     </div>
//   )
// }
// export default Layout
// const NavUnlisted = styled.ul`
//   display: flex;

//   a {
//     text-decoration: none;
//   }

//   li {
//     color: red;
//     margin: 0 0.8rem;
//     font-size: 1.3rem;
//     position: relative;
//     list-style: none;
//   }

//   .current {
//     li {
//       border-bottom: 2px solid black;
//     }
//   }
// `;

// export default function Layout() {
//   return (
//     <NavUnlisted>
//       <NavLink to="/" activeClassName="current" exact>
//         <li>Home</li>
//       </NavLink>
//       <NavLink to="/about" activeClassName="current" exact>
//         <li>About</li>
//       </NavLink>
//       <NavLink to="/translate" activeClassName="current" exact>
//         <li>Translate</li>
//       </NavLink>
//       <NavLink to="/flashcard" activeClassName="current" exact>
//         <li>Flashcard</li>
//       </NavLink>
//     </NavUnlisted>
//   );
// }

export default function Layout() {
  return (
    <>
      <nav>
        <ul className="navbar">
          <li>
            {/* <Link to="/">Home</Link> */}
            <Link className="nav-bar-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-bar-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="/flashcard">Flashcard</Link>
          </li>
          <li>
            <Link to="/translate">Translate</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
