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
        <div className="container-fluid">
        <div className="col-md-6">
        <Card>
        <CardHeader tag="h3">Featured</CardHeader>
        <CardBody>
          <CardTitle>Special Title Treatment</CardTitle>
          <Weather />
        </CardBody>
        <CardFooter className="text-muted">Footer</CardFooter>
      </Card>
        </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Page2;
