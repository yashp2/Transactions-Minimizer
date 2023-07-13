import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
function Transactions(props) {
    return(
        <Button variant="primary" href="upi://pay?pa=9145135230@upi&amp;pn=yy &amp;cu=INR">Primary</Button>
        
    )
}

export default Transactions;