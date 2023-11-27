import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ChiangRaiCard() {
    return (

        <Card style={{ width: '18rem', height:'25.5rem', borderStyle: 'none', borderRadius: '25px', padding: '0', marginRight: '1rem' }}>
            {/* Bangkok */}
            <Card.Img className='imageCard' variant="top" src="./images/BangkokCard.png" style={{ borderTopLeftRadius: '25px', borderTopRightRadius: '25px' }} />
            <Card.Body style={{textAlign:'center'}}>
                <Card.Title>Bangkok, Thailand</Card.Title>
                <Card.Text>
                    Wat Arun Ratchawararam Ratchawaramahawihan
                </Card.Text>
                <Button variant="primary" style={{ width: '100%', borderStyle: 'none', backgroundColor: '#6750A3' }}>Read More</Button>
            </Card.Body>
        </Card>
    );
}

export default ChiangRaiCard;

