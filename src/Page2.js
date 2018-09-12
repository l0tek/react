import React, { Component } from 'react';
import Navigation from './components/Navigation'; 
import Line from './components/line';
import Weather from './components/weather';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';

class Page2 extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          open: true
        };
    }

  render() {
    return (
        <div>
            <Navigation />
      <div>
        <div className="container-fluid pt-3">
        <div className="col-md-6">
        <Card>
        <CardHeader tag="h3">Wetter Halberstadt 5 Tage Vorschau</CardHeader>
        <CardBody>
          <Weather />
        </CardBody>
        <CardFooter className="text-muted"></CardFooter>
      </Card>
      <p>Hallo Rainer</p>
        </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Page2;
