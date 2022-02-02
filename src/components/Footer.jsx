import React from "react";

const today = new Date();
const year = today.getFullYear();

function Footer() {
  return (
    <footer>
      <p>© {year} Matheus</p>
    </footer>
  );
}

export default Footer;
