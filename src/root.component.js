import React from "react";
import { links } from "./root.helper.js";
import { Link } from "@reach/router";

export default function Root(props) {
  return (
    <div>
      <div>
        {links.map((link) => {
          return (
            <Link key={link.href} to={link.href}>
              {link.name}
            </Link>
          );
        })}
      </div>
      <div>
        <a href="https://github.com/react-microfrontends">Github project</a>
      </div>
    </div>
  );
}
