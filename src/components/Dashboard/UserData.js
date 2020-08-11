import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

import { connect } from 'react-redux'


// const useStyles = makeStyles((theme) => ({
//     seeMore: {
//         marginTop: theme.spacing(3),
//     },
// }));

function Orders(props) {

    return (
        <React.Fragment>
            <Title>All user Data</Title>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email Id</TableCell>
                        <TableCell >City</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.loginData && props.loginData.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell >{row.city}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        loginData: state.loginData
    };
};


export default connect(
    mapStateToProps,
    null
)(Orders);