import React, { Component } from 'react';


class Background extends Component {
    constructor() {
        super();
        this.state = {
            pictures: [],
        };
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=500')
        .then(results=>{
            return results.json();
        }).then(data => {
            let pictures = data.results.map((pic) => {
                return(
                    <div key={pic.results}>
                        <img src={pic.picture.medium} />
                    </div>
                )
            })
            this.setState({picturs: pictures})
            console.log("state", this.state.pictures)
        })

    }


    render(){
    return (
        <div className="container2">
        </div>
    );
    }
}

