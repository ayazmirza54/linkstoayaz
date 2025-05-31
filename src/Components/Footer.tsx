import React from "react";

const Footer = () => { return ( <footer className="relative p-[2px] rounded-lg ">
            <p className="bg-black rounded-lg p-4 h-full hover:bg-black/90 transition-all">
                <div className="footer flex flex-col sm:flex-row justify-center items-center gap-2 text-sm">
                    Built with <p className="text-red-500 inline">❤️</p> and <p className="text-orange-500 inline">⚡</p> by Ayaz
                </div>
            </p>
        </footer> ); };

export default Footer;
