import "./collab.scss"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import kft from "../../../pictures/kft.png"
import mercy from "../../../pictures/mercy-resized.jpg"

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Collab() {
    return (
        <div className="collab">
            <div className="container">
                <h1>Collaborations</h1>
                <div className="collab-container">  
                    <div className="kft">
                        <a href="https://kungfutea.com/">
                            <img src={kft} alt="" />
                        </a>
                        <span>Use our referall code HUSHCREW for 15%</span>
                    </div>
                    <div className="mercy">
                        <a href="https://mercycosmetics.com/">
                            <img src={mercy} alt="" />
                        </a>
                        <span>Use our refsdfsdfdW</span>
                    </div>
                    <div className="farrah">
                        farrah
                    </div>
                    <div className="last">
                        last
                    </div>
                </div>
            </div>
        </div>
    )
}
