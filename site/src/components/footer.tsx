import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <div>
      <footer
        style={{
          marginTop: `2rem`,
        }}
      >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  );
};

export default Footer;
