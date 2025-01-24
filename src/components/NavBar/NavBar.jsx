import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
    const leftNavLink = ["Chat", "Partnership", "Blog"];
    const rightNavLink = ["Log In", "Sign UP"]
    const all = [...leftNavLink, ...rightNavLink];


    return (
        <nav className="bg-white py-0 flex items-center h-[80px] border-[3px] border-black">
            <div className="lg:flex items-center pr-6 relative h-full hidden">
                {leftNavLink.map((item, index) => (
                    <a
                        key={index}
                        className="text-gray-600 hover:bg-[#ffc7cb] font-semibold transition duration-700 border-r-[3px] border-black h-full flex items-center justify-center w-24 lg:w-32"
                    >
                        {item}
                    </a>
                ))}

            </div>

            <div className="ml-2 lg:ml-0 lg:flex-1 lg:text-center lg:relative lg:h-full flex justify-between mr-2 items-center lg:justify-center w-full">
                <h1 className='font-medium text-3xl lg:text-4xl bebas-neue-regular tracking-wider'><span className='text-[#ffc7cb]'>Match</span>Maker</h1>
                <div className="dropdown dropdown-bottom dropdown-end lg:hidden">
                    <div tabIndex={0} role="button" className="btn m-1 bg-pink-100 hover:bg-[#ffc7cb]"><div className="text-end lg:hidden"><RxHamburgerMenu className="text-2xl"></RxHamburgerMenu></div></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-pink-100 rounded-sm z-[1] w-52 p-2 shadow">
                        {
                            all.map(all => <li className="border-b-2 border-pink-400 hover:bg-pink-400 hover:text-white hover:font-bold"><a className="py-4 px-6">{all}</a></li>)
                        }
                    </ul>
                </div>
            </div>

            <div className="lg:flex items-center h-full hidden pl-6">
                {rightNavLink.map((item, index) => (
                    <a
                        key={index}
                        className="text-black font-bold bg-[#ffbabf] first:bg-[#ffe3e5] transition duration-200  border-l-[3px] border-black h-full flex items-center justify-center w-24 lg:w-[192px]"
                    >
                        {item}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default NavBar;