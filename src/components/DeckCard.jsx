import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDeckCard = styled.div`
    height: 2.75em;
    border: 2px solid red;
    border-radius: 10px 10px 0px 0px;
    margin-top: -10px;
    background-color: #FFF;
    &:last-child {
      height: 2em;
    }
    h1 {
      margin: 0;
      text-align: center;
    }
`;

export class DeckCard extends Component {
  render() {
    const { id, title } = this.props.card;
    return (
      <StyledDeckCard onClick={this.props.selectCard.bind(this, id)}>
        <h1>{ title }</h1>
      </StyledDeckCard>
    )
  }
}

DeckCard.propTypes = {
    card: PropTypes.object.isRequired
}

export default DeckCard
