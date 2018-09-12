import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

  class weather extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }

      componentDidMount() {
        fetch("http://api.openweathermap.org/data/2.5/forecast?q=Halberstadt,de&appid=1359dd1a7c1922e2aa7d486c869f3b3c&units=metric")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.list,
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }      


//   render() {
//     return (
//       <div>
//         <h2>Line Example</h2>
//         <Line data={data} />
//       </div>
//     );
//   }

render() {
    const { error, isLoaded, items } = this.state;
    var Labels = [];
    var Temper = [];
    items.map(function(item, i){
        console.log(items[i].main.temp);
        Labels[i] = items[i].dt_txt;
        Temper[i] = items[i].main.temp
      })
    var tempData = {
    labels : Labels,
    datasets : [{
        fillColor             : "rgba(151,187,205,0.2)",
        strokeColor           : "rgba(151,187,205,1)",
        pointColor            : "rgba(151,187,205,1)",
        pointStrokeColor      : "#fff",
        pointHighlightFill    : "#fff",
        pointHighlightStroke  : "rgba(151,187,205,1)",
        data                  : Temper
    }]
    };
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
        <h2>Line Example</h2>
        <Line data={tempData} />
      </div>
      );
    }
  }
}

export default weather;