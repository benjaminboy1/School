import React from "react";
import benja from "../Assets/Images/benja.jpg"
import { BsFillSunFill, BsMoonStarsFill} from 'react-icons/bs';
import { AiOutlineMenuFold, AiOutlineMenuUnfold} from 'react-icons/ai';
import { useEffect, useState } from "react";
import DropDownProfile from "./DropDownProfile";





const Navbar = () => {
    

    const menuLinks = [
        { name: 'Home',link: "#home"},
        { name: 'Register', link: "#register"},
        { name: 'Payement', link: "#payement"},
        { name: 'Reporter', link: "#reporter"},
       

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
    //dropdown state
    const [openProfile, setOpenProfile] = useState(false);

    //menu drower
    const [menu, setMenu] = useState(false);

   
    return(
        <nav className="bg-gradient-to-r from-cyan-700 via-teal-500 to-slate-900">
            <div className="flex items-center justify-between">
                
                <div className="mx-7 ">
                    <h4 className=" justify-start text-cyan-100 text-lg ">
                      BenmSchool
                    </h4>
                </div>
                
                <div className=" md:block hidden ">
                    <ul className="flex items-center py-2 gap-8"> 
                        {
                            menuLinks?.map((menu,i)=>(
                                <li key={i} className="text-white hover:text-cyan-300 ">
                                <a href={menu?.link} className="">
                                    {menu?.name}
                                </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                
                <div className="flex items-center justify-between ">
                <div className="flex items-center bg-white rounded-lg md:block hidden">

                <label class="relative block">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                        <ion-icon name="search-sharp"></ion-icon>
                        </span>
                    <input className="text-cyan-400 placeholder:italic placeholder:text-slate-400 block bg-white w-full rounded-md py-1 pl-9 pr-2 shadow-sm focus:outline-none focus:ring-none sm:text-sx" placeholder="Search..." type="text" name="search"/>
                </label>

                       <div className="">
                        <button className="md:block hidden text-gray-700 right-1 text-xs">Students</button>
                        </div> 
                </div>


                <div 
                onClick={() => setMenu(!menu)}               
                className={`z-[999] btnmenu ${
                    menu ? "text-cyan-100" : "text-cyan-100"
                } lg:hidden`}>
                    {
                        menu ? <AiOutlineMenuUnfold className="text-lg"/> : <AiOutlineMenuFold className="text-lg"/>
                    }
                    
                </div>

                <div className={`md:hidden text-cyan-300 absolute w-2/3 min-h-screen px-2 font-medium
                 py-2 bg-gradient-to-r from-cyan-700 to-cyan-900 top-0 duration-200
                ${
                    menu ? "right-0" : "right-[-100%]"
                }`}>

                <div>
                     <button onClick={handleThemeSwitch}>
                        {theme === "dark" ? <BsFillSunFill/>  :  <BsMoonStarsFill/>}
                    </button>               
                </div>    

                <ul className="flex flex-col items-center h-full py-10 gap-10">
                    {menuLinks?.map((menu,i)=>(
                        <li className="hover:text-cyan-600">
                            <li href={menu?.name}>
                            <a >{menu?.name}</a>
                            </li>
                            
                            
                        </li>
                    ))}
                </ul>
                    
              


                </div>
               

                <div className="flex  text-white  ">
                    {
                        social_media?.map(icon=>(
                            <div key={icon} className="flex items-center p-2 md:block hidden">
                            <ion-icon name={icon} ></ion-icon>
                        </div>
                        ))
                       
                    }
                    <button onClick={handleThemeSwitch} className="p-2 md:block hidden">
                        {theme === 'light' ?  <BsMoonStarsFill/> : <BsFillSunFill/>}
                    </button>
                
                </div>
           
                
                </div>
                <div  className="md:block hidden border-white border-2 rounded-full cursor-pointer profili" onClick={() => setOpenProfile
                        ((prev) => !prev)}>
                        {
                            openProfile && <DropDownProfile />
                        }
                        <img src={benja}  alt="" className="w-7 h-7 rounded-full "/>
                        
                    </div>
                        

               
            </div>
            
           
        </nav>
    )
}

export default Navbar;