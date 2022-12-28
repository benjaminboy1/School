import React from "react";
import benja from "../Assets/Images/benja.jpg"



const Navbar = () => {
    const menuLinks = [
        { name: 'HOME',link: "#home"},
        { name: 'REGISTER', link: "#register"},
        { name: 'PAYEMENT', link: "#payement"},
        { name: 'REPORTER', link: "#reporter"},
       

    ];

    const social_media = [
    
        "logo-linkedin",
        "logo-twitter",
        "logo-facebook"
    ]


    return(
        <nav className="bg-gradient-to-r from-cyan-700 via-teal-500 to-slate-900">
            <div className="flex items-center justify-between">
                
                <div className="mx-7">
                    <h4 className="justify-start text-cyan-500 text-2xl font-bold">
                      BenmSchool
                    </h4>
                </div>
                <div>
                    <ul className="flex items-center py-2 gap-6 text-lg"> 
                        {
                            menuLinks?.map((menu,i)=>(
                                <li key={i} className="text-white hover:text-cyan-500">
                                <a href={menu?.link} className="">
                                    {menu?.name}
                                </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                
                <div className="flex items-center justify-between">
                <div className="flex items-center bg-white  py-1 rounded-lg">
                        <button className="p-1 "><ion-icon name="search-outline"></ion-icon></button>
                        <input type="text" placeholder="search" className="border-none"/>
                        <div className="">
                        <button>Students<ion-icon name="caret-down-circle-outline"></ion-icon></button>
                        </div> 
                </div>
                <div className="flex items-center text-white ">
                    {
                        social_media?.map(icon=>(
                            <div key={icon} className="flex items-center p-2 justify-between">
                            <ion-icon name={icon} ></ion-icon>
                        </div>
                        ))
                       
                    }
                    <div className="border-white border-2 rounded-full">
                        <img src={benja} alt="" className="w-8 h-8 rounded-full"/>
                    </div>
                
                </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;