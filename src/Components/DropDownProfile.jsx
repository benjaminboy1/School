

const DropDownProfile = () =>{
    return(

        <div className="flex flex-col dropDownProfile">
            <ul className="flex flex-col gap-4 text-center text-cyan-700">
            <li className=""><ion-icon name="person-circle-sharp" className=""/>  Profile</li>
                <li><ion-icon name="settings-sharp"></ion-icon> Settings</li>
                <div className="border border-gray-400 rounded"></div>
                <li><ion-icon name="log-out-sharp"></ion-icon> Logout</li>
            </ul>
        </div>
    )
}

export default DropDownProfile;