import axios from "axios";
import React, { Component } from "react";
import token from "../config/config";
import Card from "./Card.jsx";


export default class Related extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      error: "",
    };
    this.getProductFromApi = this.getProductFromApi.bind(this);
  }
  componentDidMount() {
    this.getProductFromApi();
    this.myProductsdata()
  }

  getProductFromApi() {
    axios
      .get("https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products", {
        headers: {
          // "Access-Control-Allow-Origin": "*",
          // "Content-type": "Application/json",
          "Authorization": ` ${token}`
        },
      })
      .then((res) => {
        this.setState({
          products: res.data,
        });
      })
      .catch((err) => {
        this.setState({
          error: err.message,
        });
      });
  }

  myProductsdata() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products').then((res)=> {
      console.log(res.data)
    }).catch((err)=> {
      console.log(err.message)
    })
  }

  render() {
    const { products } = this.state;
    
    return (
      <div className='container'>
        <div className="row ">
         <div className="col-3 "> <Card /> </div>
         <div className="col-3 "> <Card /> </div>
         <div className="col-3 "> <Card /> </div>
         <div className="col-3 "> <Card /> </div>

         </div>
      
          
        
       
       
      </div>
    );
  }
}
