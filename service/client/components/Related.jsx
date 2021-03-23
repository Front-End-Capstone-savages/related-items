import axios from "axios";
import React, { Component } from "react";

export default class Related extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      error : ''
    };
    this.getProductFromApi = this.getProductFromApi.bind(this);
  }
  componentDidMount() {
      this.getProductFromApi();
  }

  getProductFromApi() {
      const token = 'd01bf77fd26f047a94bd305495be89b050d8aba9';

      axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products', {headers: {
        "Access-Control-Allow-Origin" : "*",
        "Content-type": "Application/json",
        "Authorization": `Bearer ${token}`
        }   
    }
       
      ).then((res)=> {
          
          this.setState({
              products:res.data
          })
      }).catch((err)=> {
        this.setState({
            error:err.message
        })
      })
  }
  render() {
    return (
      <div>
          {console.log('data', this.state)}
        <h1>hello Related component </h1>
      </div>
    );
  }
}
