import React, { Component } from 'react'
import PropTypes from 'prop-types';
import  { connect } from 'react-redux'
import styled from 'styled-components';
import { searchProducts } from '../actions/productActions'

const FormWrapper = styled.div`
    max-width: 600px;
    margin: 30px auto 20px;
`;

const Input = styled.input`
    width: 100%;
    padding: 5px;
`;

class SearchForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: ''
        }
        this.onChange =this.onChange.bind(this);
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
        this.props.searchProducts(this.state.searchTerm);
    }

  render() {
    return (
        <FormWrapper>
            <Input type="text" name="searchTerm" 
            onChange={this.onChange} placeholder="Search by product name"
            value={this.state.searchTerm} />
        </FormWrapper>
    )
  }
}

SearchForm.propTypes = {
    searchProducts: PropTypes.func.isRequired
}

export default connect(null, { searchProducts })(SearchForm);
