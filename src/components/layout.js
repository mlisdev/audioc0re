import React from "react";
import { Link } from "gatsby";
// import "./layout.css"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <Link to="/">
          <h3>audioC0RE</h3>
        </Link>
        <ul>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/location/">Location</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}