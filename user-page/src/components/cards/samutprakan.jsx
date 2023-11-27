import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SamutpraKan() {
    return (

        <Card style={{ width: '18rem', height: '25.5rem', borderStyle: 'none', borderRadius: '25px', padding: '0', marginRight: '1rem' }}>
            {/* Bangkok */}
            <Card.Img className='imageCard' variant="top" src="./images/SamutPrakanCard.png" style={{ borderTopLeftRadius: '25px', borderTopRightRadius: '25px' }} />
            <Card.Body style={{ textAlign: 'center' }}>
                <Card.Title>Samut Prakan, Thailand</Card.Title>
                <Card.Text>
                    Samut Prakan Ancient City

                </Card.Text>
                <Button variant="primary" style={{ width: '100%', borderStyle: 'none', backgroundColor: '#6750A3', marginTop:'1.5rem' }}>Read More</Button>
            </Card.Body>
        </Card>
    );
}

export default SamutpraKan;

