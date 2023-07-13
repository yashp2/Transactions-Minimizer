import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
function Transactions(props) {
    return(
        <Button variant="primary" href="upi://pay?pa=9145135230@upi&pn=%20&mc=0000&mode=02&purpose=00&cu=INR&am=1 ">Primary</Button>
        
    )
}

export default Transactions;