import axios from "axios";
import React, { Component } from "react";
import token from "../config/config";
import Card from "./Card.jsx";
import Carousel3 from "./Carousel3.jsx";


export default class Related extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      prodId: [],
      prodStyle: [],
      arrayId: [],
      error: "",
    };
    this.getProductFromApi = this.getProductFromApi.bind(this);
  }
  componentDidMount() {
      
    this.getProductFromApi();
    this.getProductIDFromApi();
    this.getProductStyleFromApi();
  }

   getProductFromApi() {
     
      axios
      .get("https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "Application/json",
          "Authorization": ` ${token}`
        },
      })
      .then((res) => {
        this.setState({
          products: res.data,
        });
      }).catch((err)=> {
        this.setState({
          error:err.message
        })
      })
     }
    
 

  getProductIDFromApi() {
    axios
      .get("https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11001", {
        headers: {
          // "Access-Control-Allow-Origin": "*",
          // "Content-type": "Application/json",
          "Authorization": ` ${token}`
        },
      })
      .then((res) => {
        this.setState({
          prodId: res.data,
        });
      })
      .catch((err) => {
        this.setState({
          error: err.message,
        });
      });
  }
  
  getProductStyleFromApi() {
    axios
      .get("https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11001/styles", {
        headers: {
          // "Access-Control-Allow-Origin": "*",
          // "Content-type": "Application/json",
          "Authorization": ` ${token}`
        },
      })
      .then((res) => {
         this.setState( {
          prodStyle: res.data,
        });
      })
      .catch((err) => {
        this.setState({
          error: err.message,
        });
      });
  }
  
  

  render() {
    const { products, prodId, prodStyle } = this.state;
    
    return (
      <div>

      <div className="container">
      <div className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" style={{height:"100em"}}>
          <div className=" carousel-item active">
            <div className="row">
            <div className="col-3 d-block w-100"><Card  /></div>
            <div className="col-3 d-block w-100"><Card /></div>
            <div className="col-3 d-block w-100"><Card /></div>
            <div className="col-3 d-block w-100"><Card /></div>
            </div>
          </div>
          <div className=" carousel-item ">
            {/* <div className="row">
            <div className="col-3 d-block w-100"><Card /></div>
            <div className="col-3 d-block w-100"><Card /></div>
            <div className="col-3 d-block w-100"><Card /></div>
            <div className="col-3 d-block w-100"><Card /></div>
            </div> */}
          </div>
          <div className=" carousel-item ">
            {/* <div className="row">
            <div className="col-3 d-block w-100"><Card /></div>
            <div className="col-3 d-block w-100"><Card /></div>
            <div className="col-3 d-block w-100"><Card /></div>
            <div className="col-3 d-block w-100"><Card /></div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    <Carousel3 />
    <Card products={products}  prodId={prodId} prodStyle={prodStyle}/>
      </div>
    );
  }
}
