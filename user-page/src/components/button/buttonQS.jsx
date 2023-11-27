import React from 'react'
import Button from 'react-bootstrap/Button';
import './buttonQS.css'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


function ButtonHomeQS() {
    return (
        <div className="d-grid gap-2">
            <Button className='buttonHomeQS' style={{backgroundColor:"#7B69D6"}} size="lg" href="/quiz">
                <h2>Arrange the best trip for you by AI</h2>
            </Button>
        </div>
    )
}

export default ButtonHomeQS