import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


export default function TopContentCarousel({topContentArray}){
    
         const jsxArray=topContentArray.map(item=>
            <Carousel.Item key={item.img}>
        <Card style={{height:'40%'}}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                {item.body}
                </Card.Text>
                
            </Card.Body>
          </Card>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          
        </Carousel.Item>

    )
        return(
    <div className='container mx-auto'>
        <h2>Heading of carousel</h2>

        {topContentArray.map}

        <Carousel controls={true} >
        {jsxArray}
       
        </Carousel>
        </div>
      
    )
}

