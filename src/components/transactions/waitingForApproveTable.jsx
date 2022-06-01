import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(date, business, spend, labels, user, userId) {
    return { date, business, spend, labels,user, userId };
}

const rows = [
    createData('2022-05-01', 'JetBrains', 100, 'Tech', 'Gal', 14567),
    createData('2022-04-28', 'Git', 200, 'Tech', 'Yakir', 76547)
];

const WaitingForApprovalTable = () =>  {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: '400px' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>date</TableCell>
                        <TableCell align="right">business</TableCell>
                        <TableCell align="right">spend&nbsp;</TableCell>
                        <TableCell align="right">labels&nbsp;</TableCell>
                        <TableCell align="right">user&nbsp;</TableCell>
                        <TableCell align="right">userId&nbsp;</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.date}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.date}
                            </TableCell>
                            <TableCell align="right">{row.business}</TableCell>
                            <TableCell align="right">{row.spend}</TableCell>
                            <TableCell align="right">{row.labels}</TableCell>
                            <TableCell align="right">{row.user}</TableCell>
                            <TableCell align="right">{row.userId}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default WaitingForApprovalTable;