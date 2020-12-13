import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = (props) => {
  const footerText: string = `© ${new Date().getFullYear()} Pixegami`;
  return (
    <div>
      <footer>
        <div className="mt-6 mb-6 text-center text-gray-500">{footerText}</div>
      </footer>
    </div>
  );
};

export default Footer;
