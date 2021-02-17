import { connect } from "react-redux";
import Products from "./Products/Products";
import React from 'react'
import {updateBasket } from "../../redux/basket-reducer";

class ProductsContainer extends React.Component {

    render() {
        return (
            <Products products={this.props.products} title={this.props.title} updateBasket = {this.props.updateBasket}
                      basket={this.props.basket} />
        )
    }
}

/* const mapDispatchToProps = (dispatch) => {
    return {
      addElemToBasket : () => {
          dispatch(addProductToBasketAC())
      }
    }
} */

export default ProductsContainer = connect(null, { updateBasket : updateBasket })(ProductsContainer);
