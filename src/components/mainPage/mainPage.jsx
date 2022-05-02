import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {Typography, Zoom} from "@mui/material";
import TransactionControlImage from "../../assets/images/TransactionControl.png";
import MachineControlImage from "../../assets/images/MachineControl.png";
import VisibilityImage from "../../assets/images/Visibility.png";
import Fade from '@mui/material/Fade';

const MainPage = () => {
    return(
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                opacity: [0.9, 0.9, 0.9],
                '& > :not(style)': {
                    m: 1,
                    width: 128 * 2,
                    height: 128 * 3.25,
                },
            }}
        >
            <Fade in={true}  style={{ transitionDelay: '30ms'}}>
                <Paper elevation={12} style ={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', alignContent: 'center', alignItems: "center"}}>
                    <img alt={'CoPayLogo'} src={TransactionControlImage} style={{ width:'150px', height:'150px'}}></img>

                    <Typography variant={"h5"}>
                        Transaction Level Controls
                    </Typography>
                    <Typography variant={"body2"} style={{padding:'10%'}}>
                        Transaction level controls allow you to define when, <br/>where and how the virtual cards can be used. You can set and define it according to your company’s policies or preferences and manage your spending more effectively.
                    </Typography>

                </Paper>
            </Fade >

            <Fade in={true} style={{ transitionDelay: '150ms'}}>
                <Paper elevation={12} style ={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', alignContent: 'center', alignItems: "center"}}>
                    <img alt={'CoPayLogo'} src={VisibilityImage} style={{ width:'150px', height:'150px'}}></img>

                    <Typography variant={"h5"}>
                        Transaction Level Controls
                    </Typography>
                    <Typography variant={"body2"} style={{padding:'10%'}}>
                        Gain access to up-to-date information for your reconciliation, monitor key suppliers’ spending or generate reports such as your company’s spending pattern.
                    </Typography>

                </Paper>
            </Fade>

            <Fade in={true} style={{ transitionDelay: '300ms'}}>
                <Paper elevation={12} style ={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', alignContent: 'center', alignItems: "center"}}>
                    <img alt={'CoPayLogo'} src={MachineControlImage} style={{ width:'150px', height:'150px'}}></img>
                    <Typography variant={"h5"}>
                        Easy to control
                    </Typography>
                    <Typography variant={"body2"} style={{padding:'10%'}}>
                        Connect to sap.
                    </Typography>
                </Paper>
            </Fade>
        </Box>)
}

export default MainPage;

