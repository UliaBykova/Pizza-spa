import { connect } from "react-redux";
import Products from "./Products/Products";
import React from 'react'
import { addProductToBasketAC, updateBasket } from "../../redux/basket-reducer";

class ProductsContainer extends React.Component {

    render() {
        return (
            <Products products={this.props.products} title={this.props.title} addProductToBasket={this.props.addProductToBasket} updateBasket = {this.props.updateBasket}
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

export default ProductsContainer = connect(null, { addProductToBasket: addProductToBasketAC , updateBasket : updateBasket })(ProductsContainer);
