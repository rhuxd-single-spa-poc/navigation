import React from "react";
// import { BrowserRouter, Redirect, Route } from "react-router-dom";
// import { links } from "./root.helper.js";
// import { Link } from "@reach/router";

export default function Root(props) {
  return (
    <BrowserRouter basename="/">
      <div>
        This is the navigation component.
        {/* {links.map((link) => {
          return (
            <Link key={link.href} to={link.href}>
              {link.name}
            </Link>
          );
        })} */}
      </div>
      {/* <Route exact path="/">
        <Redirect to="/apicuriostudio" />
      </Route> */}
    </BrowserRouter>
  );
}
