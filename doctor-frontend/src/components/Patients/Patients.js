import React from 'react';
import { Container } from '@material-ui/core';
import NewPatients from './NewPatients';


function Patients() {
    return (
        <Container maxWidth='lg'>
            <NewPatients />
        </Container>
    )
}

export default Patients
