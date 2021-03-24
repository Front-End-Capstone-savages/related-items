import axios from "axios";
import React, { Component } from "react";
import token from '../config/config';

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

      axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products', {headers: {
        "Access-Control-Allow-Origin" : "*",
        "Content-type": "Application/json",
        "Authorization": ` ${token}`
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
