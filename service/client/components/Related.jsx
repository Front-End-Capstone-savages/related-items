import axios from "axios";
import React, { Component } from "react";
import token from "../config/config";
import Card from "./Card.jsx";
import CardDelete from "./CardDelete.jsx";

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
  }

  getProductFromApi() {
    axios
      .get("https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products", {
        headers: {
          "Access-Control-Allow-Origin" : "*",
          "Content-type": "Application/json",
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

  render() {
    const {products} = this.state
    return (
      <div>
        {console.log("data", this.state)}

        <Card products={products} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

      
      </div>
    );
  }
}
