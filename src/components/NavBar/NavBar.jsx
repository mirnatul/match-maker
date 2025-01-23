import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
    const leftNavLink = ["Chat", "Partnership", "Blog"];
    const rightNavLink = ["Log In", "Sign UP"]
    const all = [...leftNavLink, ...rightNavLink];


    return (
        <nav className="bg-white py-0 flex items-center h-[70px] border-[3px] border-black">
            <div className="md:flex items-center pr-6 relative h-full hidden">
                {leftNavLink.map((item, index) => (
                    <a
                        key={index}
                        className="text-gray-600 hover:bg-red-400 hover:text-white font-semibold transition duration-700 border-r-[3px] border-black h-full flex items-center justify-center w-24 lg:w-32"
                    >
                        {item}
                    </a>
                ))}

            </div>

            <div className="ml-2 md:ml-0 md:flex-1 md:text-center md:relative md:h-full flex justify-between mr-2 items-center md:justify-center w-full">
                <h1 className='font-medium text-4xl bebas-neue-regular tracking-wider'><span className='text-[#ffbabf]'>Match</span>Maker</h1>

                {/* <div className="text-end md:hidden"><RxHamburgerMenu className="text-2xl hover:text-3xl transition duration-700"></RxHamburgerMenu></div> */}
                <div className="dropdown dropdown-bottom dropdown-end md:hidden">
                    <div tabIndex={0} role="button" className="btn m-1 bg-pink-100 hover:bg-[#ff9e9a]"><div className="text-end md:hidden"><RxHamburgerMenu className="text-2xl"></RxHamburgerMenu></div></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-pink-100 rounded-sm z-[1] w-52 p-2 shadow">
                        {
                            all.map(all => <li><a>{all}</a></li>)
                        }
                    </ul>
                </div>
            </div>

            <div className="md:flex items-center h-full hidden pl-6">
                {rightNavLink.map((item, index) => (
                    <a
                        key={index}
                        className="text-black font-bold bg-[#ffbabf] transition duration-200  border-l-[3px] border-black h-full flex items-center justify-center w-24 lg:w-32"
                    >
                        {item}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default NavBar;