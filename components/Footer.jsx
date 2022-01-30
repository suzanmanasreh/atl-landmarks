import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto p-4">
      <hr />
      <p className="flex justify-center m-5 text-gray-600 text-sm">
        Made by&nbsp;
        <a href="https://github.com/suzm10" className="footerlink">
          Suzan
        </a>
        &nbsp;and&nbsp;
        <a href="https://github.com/SanaR511" className="footerlink">
          Sana
        </a>
        &nbsp;for&nbsp;
        <a
          href="https://atlanta.techtogether.io/#portfolio"
          className="footerlink"
        >
          Techtogether Atlanta
        </a>
      </p>
    </footer>
  );
};

export default Footer;
