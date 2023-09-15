import { useContext } from "react"
import { AuthContext } from "./security/AuthContext"

function FooterComponent(){
    const authContext = useContext(AuthContext)
    
    return (
        <footer className="Footer">
            <div className='container'>
            <hr/>Footer
            </div>
             
            
        </footer>
    )
}

export default FooterComponent