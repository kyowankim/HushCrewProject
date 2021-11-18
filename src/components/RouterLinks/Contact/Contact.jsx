import "./contact.scss"
import shake from "../../../pictures/shake.svg"
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';


export default function Contact() {
    
    return (
        <div className="sections">
            <div className="contact">
                <div className="left">
                    <img src={shake} alt="" />
                </div>
                <div className="right">
                    <div className="outline">
                        <h1>Contact Us!</h1>
                        <div className="fullname">
                            <TextField 
                            id="filled-basic" label="First Name" variant="standard" className="text basic" size='large'  />
                            <TextField 
                            id="filled-basic" label="Last Name" variant="standard" className="text basic" size='large'  />
                        </div>
                        <TextField 
                        id="filled-basic" label="Your email" variant="standard" className="text email" size='large' />
                        <TextField 
                        id="filled-basic" label="Title" variant="standard" className="text title" size='large'/>
                        <TextField 
                        id="message" label="Message" variant="filled" className="text message" size='large' multiline rows={10} />
                        <Button variant="outlined" className="button">Send</Button>             
                    </div>
                </div>
            </div>
        </div>
    )
}
