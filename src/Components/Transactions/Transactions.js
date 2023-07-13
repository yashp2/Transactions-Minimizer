import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
function Transactions(props) {
    return(
        <Button variant="primary" href="upi://pay?pa=9145135230@axl&pn=******5320&mc=0000&mode=02&purpose=00">Primary</Button>
        
    )
}

export default Transactions;