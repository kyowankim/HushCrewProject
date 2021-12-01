import "./contact.scss"
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';


export default function Contact() {
    
    return (
        <div className="contact">
            <div className="sections">
                <div className="container">
                    <div className="left">
                        <img src="https://res.cloudinary.com/duffol2tp/image/upload/v1638376220/hushCrewLogo_azmodu.jpg" alt="" />
                    </div>
                    <div className="right">
                        <div className="outline">
                            <div className="wrapper">
                                <h1>Contact Us!</h1>
                                <TextField 
                                id="outlined-basic" label="Name" variant="outlined" className="text name"/>
                                <TextField 
                                id="outlined-basic" label="Your email" variant="outlined" className="text email"  />
                                <TextField 
                                id="outlined-basic" label="Title" variant="outlined" className="text title"/>
                                <TextField 
                                id="message" label="Message" variant="outlined" className="text message" multiline rows={10}/>
                                <Button variant="outlined" className="button">Send</Button> 
                            </div>            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
