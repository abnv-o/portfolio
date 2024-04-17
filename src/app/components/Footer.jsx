import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        {/* left */}
        <div>
        <h1 className="text-3xl font-bold tracking-widest">ABHINAV O</h1>
        <h1>Crafting to perfection</h1>
        </div>
        {/* right */}
        <div className="flex justify-center items-center">
        <p className="text-slate-600"></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
