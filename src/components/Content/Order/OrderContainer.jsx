import React from 'react'
import { connect } from 'react-redux';
import Order from "./Order/Order";

class OrderContainer extends React.Component {
    render () {
        return (
            <Order basket={this.props.basket} />
        )
    }
}

export default OrderContainer = connect(null, {})(OrderContainer);