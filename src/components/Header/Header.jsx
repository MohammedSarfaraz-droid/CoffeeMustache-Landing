import React from "react";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 w-full bg-transparent text-foreground z-50 mb-4 sm:mb-6">
            <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-5">
                <div className="flex items-center justify-between flex-wrap gap-y-2 w-full">
                    <Logo />
                    <DesktopNav />
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

export default Header;
