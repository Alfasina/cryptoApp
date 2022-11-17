import{GrNotification,GrSettingsOption} from 'react-icons/gr'
export const Navbar=()=>{
    return(<nav className="navBar">
        <div>Logo</div>
        <input type='text' placeholder='🔍search for details on coin'/> 
        <div><button className="btn"><GrNotification className='icon' /></button><button className="btn"><GrSettingsOption className='icon' /></button> </div>

    </nav>)
}