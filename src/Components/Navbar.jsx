import React from "react";
import benja from "../Assets/Images/benja.jpg"
import { BsFillSunFill, BsMoonStarsFill} from 'react-icons/bs';
import { useEffect, useState } from "react";



const Navbar = () => {
    const menuLinks = [
        { name: 'HOME',link: "#home"},
        { name: 'REGISTER', link: "#register"},
        { name: 'PAYEMENT', link: "#payement"},
        { name: 'REPORTER', link: "#reporter"},
       

    ];

    const social_media = [
    
        "logo-linkedin",
        "logo-twitter"
        
    ]
    //var darkmode
    const [ theme, setTheme ] = useState("light");

     useEffect(()=>{
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
     }, [theme]);

     //dark systeme
     useEffect(()=> {
        if(window.matchMedia('(prefers-color-scheme: dark').matches){
            setTheme("dark");
        } else { 
            setTheme("light");
        }
     }, [])

    //le function de la connexion
    const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
}

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
                                <li key={i} className="text-white hover:text-cyan-300">
                                <a href={menu?.link} className="">
                                    {menu?.name}
                                </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                
                <div className="flex items-center justify-between">
                <div className="flex items-center bg-white rounded-lg">

                <label class="relative block">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                        <ion-icon name="search-sharp"></ion-icon>
                        </span>
                    <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-none  sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
                </label>

                       <div className="">
                        <button className="text-gray-700">Students<ion-icon name="caret-down-circle-outline"></ion-icon></button>
                        </div> 
                </div>
                <div className="flex flex justify-around  items-center text-white ">
                    {
                        social_media?.map(icon=>(
                            <div key={icon} className="flex items-center p-2 justify-between">
                            <ion-icon name={icon} ></ion-icon>
                        </div>
                        ))
                       
                    }
                    <button onClick={handleThemeSwitch} className="left-px">
                        {theme === 'light' ?  <BsMoonStarsFill/> : <BsFillSunFill/>}
                    </button>
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