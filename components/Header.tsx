import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <div>
        <Link href="/">
          <h1>Indra's Blog</h1>
        </Link>
        <p>Welcome to my tech blog. 💻</p>
        <br />
      </div>
    </header>
  );
};

export default Header;
