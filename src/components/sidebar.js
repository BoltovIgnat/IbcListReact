import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,ButtonGroup,Button,Card,ListGroup,ListGroupItem} from 'react-bootstrap';

class Sidebar extends React.Component{

    constructor(props) {
      super(props);
  
      this.state = {
        comment: ''
      };
   
      this.handleClear = this.handleClear.bind(this);
    }
  
    
  
    handleClear(e) {
      e.preventDefault();
      this.setState({comment :''});
  
    }
    
    render() {
      return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
      )
    }
    
  }
  export default Sidebar;