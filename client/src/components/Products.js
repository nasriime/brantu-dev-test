import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchProducts } from '../actions/productActions'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 800px;
  margin: auto;
`;
const Heading = styled.h1`
  text-align: center;
`;
const NoResult = styled.p`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;
const ProductsWrapper = styled.div`
  width: 100%;
`;
const ProductContainer = styled.div`
  overflow:hidden;
  background-color: #fff;
  margin-bottom: 20px;
  box-shadow: 5px 10px #e4e4e4;
  padding:10px 15px;
}
`;
const ProductSubContainer = styled.div`
  display: flex;
`;
const ProductImage = styled.img`
  max-height: 150px;
  padding: 15px;
`;
const ProductDetails = styled.div`
  display: flex;
  flex-flow: column
`;
const Span = styled.span`
  font-weight: 700;
  min-width: 200px;
`;

class Products extends Component {
  componentWillMount(){
    this.props.fetchProducts();
  }
    
  render() {
    const productItems = this.props.products.map( (product, index) => (
      <ProductContainer key = {index}>
        <h3>{ product.name }</h3>
        <ProductSubContainer>
          <ProductImage src={ product.image} />
          <ProductDetails>
            <p><Span>Brand:</Span> { product.brand }</p>
            <p><Span>Category:</Span> { product.category.name }</p>
            <p><Span>Price:</Span> ${ product.price }</p>
          </ProductDetails>
        </ProductSubContainer>
      </ProductContainer>
    ));
    
    return (
      <Container>
        <Heading>Products</Heading>
        <ProductsWrapper>
          {productItems.length > 0 ?  productItems : <NoResult> No results found!</NoResult>}
        </ProductsWrapper>
      </Container>
    )
  }
}

Products.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  products: state.products.items
})

export default connect(mapStateToProps, { fetchProducts })(Products);