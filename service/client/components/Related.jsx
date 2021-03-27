import axios from "axios";
import React, { Component } from "react";
import token from "../config/config";
import Carousel from "./Carousel.jsx";
import Showcard from './Showcard.jsx'
import ShowCardDel from './ShowCardDel.jsx'

class Related extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      prodId: [],
      prodStyle: [],
      arrayId: [],
      error: "",
      timer: {0:null, 1: null}
    };
    this.getProductFromApi = this.getProductFromApi.bind(this);
  
    this.getProductIDFromApi = this.getProductIDFromApi.bind(this)

    this.getProductStyleFromApi = this.getProductStyleFromApi.bind(this)
  }
  componentDidMount() {
 
    this.getProductFromApi();
    this.getProductIDFromApi();
    this.getProductStyleFromApi();
  }

   getProductFromApi() {
     let t = new Date().getMilliseconds()
      axios
      .get("https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "Application/json",
          "Authorization": ` ${token}`
        },
      })
      .then((res) => {
        let b = new Date().getMilliseconds()
        
        this.setState({
          products: res.data,
          timer:{0: t, 1:b}
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
          "Access-Control-Allow-Origin": "*",
          "Content-type": "Application/json",
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
          "Access-Control-Allow-Origin": "*",
          "Content-type": "Application/json",
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
      <div >
    {/* <Carousel products={products} prodId={prodId} prodStyle={prodStyle} timer={this.state.timer}/>
      <div className="modal-container">
        <Popup>
          <h1>helloooooo</h1>
        </Popup>
      </div> */}
      <h1>hello</h1>
      <Showcard />
      <div className="del-card-container">
      <ShowCardDel />
      </div>
      </div>
    );
  }
}
export default Related