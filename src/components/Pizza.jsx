import React from "react"

class MyPizza extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoaded: false,
        pizza: []
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:3000/products?pizza")
        .then(res => res.json())
        .then(
          (result) => { 
               
            this.setState({
              isLoaded: true,
              pizza: result.pizza
            });
          }
        )
    }
  
    render() {
      const {pizza} = this.state;
        return (
          <div>
{/*             <U /> */}
            {pizza.map(p => (
              <div key={p.id}>
                {p.name} {p.priceSizeSmall}
               <img src={p.image} /> 
              </div>
            ))}
          </div>
        );
    
    }
  }

export default MyPizza