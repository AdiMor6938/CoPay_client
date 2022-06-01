import * as React from 'react';
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import WaitingForApprovalTable from "./waitingForApproveTable";
import Button from "@mui/material/Button";

const TransactionsPage = ({isAdmin=false}) => {
    return (
        <Grid container direction={"row"} spacing={2} alignItems={"top"} style={{fontColor:'white', minHeight:'500px'}} >
            <Grid xs={4} >
                <Paper elevation={12} style={{height:'100%'}}>
                    <Typography>
                        Request: 4
                    </Typography>
                    <Typography>
                        Approved: 4
                    </Typography>
                </Paper>
            </Grid>
            <Grid xs={isAdmin ? 8 : 4} >
                <Paper elevation={12} style={{height:'100%'}}>
                    <Typography> Total spend : 466,477$  </Typography>
                    <Typography>  Total transactions: 7  </Typography>
                    <Typography>  Common Label : Tech  </Typography>
                    <Typography>  Connected users : 5   </Typography>
                    <Typography>  Total transactions: 7  </Typography>
                    <Typography> Common Label : Tech  </Typography>
                    <Typography> Connected users : 5  </Typography>
                </Paper>
            </Grid>
            {!isAdmin &&
                <Grid xs={4} style={{backgroundColor:'green'}}>
                    <Paper elevation={12} style={{height:'100%'}}>
                        <Typography style={{fontWeight:600 }}> Add receips:  </Typography>
                        <Typography>
                            <Button>
                                From mobile
                            </Button>
                            <Button>
                                From email
                            </Button>
                            <Button>
                                Upload file
                            </Button>
                        </Typography>
                    </Paper>
                </Grid>}
            <Grid xs={12} style={{backgroundColor:'blueviolet'}}>
                Waiting for approve: <br/>
                <WaitingForApprovalTable />
            </Grid>
            <Grid xs={12} style={{backgroundColor:'blueviolet'}}>
                Last transactions: <br/>
                <WaitingForApprovalTable />
            </Grid>
        </Grid>
    )
}

export default TransactionsPage;

