

const DropDownProfile = ({ onClose}) => {
      //dropdownClose
      const handleOnClose = (e) =>{
        if (e.target.id === "thing")
        onClose();
    };
    if(onClose) return null;
    return(

        <div id="thing" 
        onClick={handleOnClose}
        className="flex flex-col dropDownProfile">
            <ul className="flex flex-col gap-4 text-center text-cyan-700">
            <li className="hover:text-gray-600 hover:animate-bounce"><ion-icon name="person-circle-sharp" />  Profile</li>
                <li className="hover:text-gray-600 hover:animate-bounce"><ion-icon name="settings-sharp" className=""></ion-icon> Settings</li>
                <div className="border border-gray-400 rounded" ></div>
                <li className="hover:text-gray-600 hover:animate-bounce"><ion-icon name="log-out-sharp"></ion-icon> Logout</li>
            </ul>
        </div>
    )
}

export default DropDownProfile;