import React from 'react';


function Footer(){
  const year=new Date().getFullYear();
  return(
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center ">
    <div className="container mx-auto">
    <p>CopyRights &copy; {year}. All Rights Reserved</p>
    </div>
    </footer>
  );
};

export default Footer;
