import React from "react";

const Navbar = () => {
    const menuLinks = [
        { name: 'HOME',link: "#home"},
        { name: 'REGISTER', link: "#register"},
        { name: 'PAYEMENT', link: "#payement"},
        { name: 'REPORTER', link: "#reporter"},
       

    ];


    return(
        <nav>
            <div className="flex items-center justify-around">
                
                <div className="mx-7">
                    <h4 className="text-cyan-500 text-2xl font-bold">
                      BenmSchool
                    </h4>
                </div>
                <div>
                    <ul className="flex items-center py-2 gap-6 text-lg"> 
                        {
                            menuLinks?.map((menu,i)=>(
                                <li key={i} className="hover:text-cyan-500">
                                <a href={menu?.link}>
                                    {menu?.name}
                                </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                        <input type="text" placeholder="search" />
                </div>
            </div>

        </nav>
    )
}

export default Navbar;