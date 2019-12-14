import React from 'react';
import HeaderLogo from './components/logo';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,ButtonGroup,Button,Card,ListGroup,ListGroupItem} from 'react-bootstrap';
import IbcWorkArea from './components/ibcworkarea';
import SideBar from './components/sidebar';
import './App.css';

class App extends React.Component{

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
      <div className="App">
        <Container>
          <Row>
            <Col md={12}>
              <HeaderLogo/>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <SideBar/>
            </Col>
            
            <Col md={8}> 
              <IbcWorkArea></IbcWorkArea>
            </Col>

          </Row>
        </Container>
      </div>
    )
  }
  
}

export default App;
