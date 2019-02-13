import React, { Component } from 'react'
import DeckCard from './DeckCard';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDeck = styled.div`
  width: 200px;
  border: 1px solid black;
`;


export class Deck extends Component {
  render() {
    const renderCards = (cards) => {
      return cards.map((card) => (
        <DeckCard card={card} key= {card.id} selectCard={this.props.selectCard} />
      ));
    }
    
    return (
    <StyledDeck>
      { renderCards(this.props.deck) }
    </StyledDeck>
    );  
  }
}

Deck.propTypes = {
    deck: PropTypes.array.isRequired
}

export default Deck
