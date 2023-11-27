import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Swal from 'sweetalert2';

function ButtonHomeAlert() {
    const handleButtonClick = () => {
        Swal.fire({
            title: "Login Required",
            html: "You must log in to access function : <br/> Arrange the best trip for you by AI",
            icon: "warning",
            showCancelButton: false,
            confirmButtonColor: "#6750A3",
            customClass: {
                confirmButton: 'custom-confirm-button-class',
            }
        })
    };

    const styles = `
        .custom-confirm-button-class {
            width: 200px; /* Adjust the width as needed */
        }
    `;

    return (
        <div className="d-grid gap-2">
            <style>{styles}</style>
            <Button
                className="buttonHomeQS"
                style={{ backgroundColor: '#7B69D6' }}
                size="lg"
                onClick={handleButtonClick}
            >
                <h2>Arrange the best trip for you by AI</h2>
            </Button>
        </div>
    );
}

export default ButtonHomeAlert;
