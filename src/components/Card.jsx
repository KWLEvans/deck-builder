import React, { Component } from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  width: 250px;
  height: 400px;
  border: 1px solid black;
  border-radius: 10px;
  .card-top {
    height: 180px;
  }
  .card-title {
    border-top: 1px solid black;
    border-bottom: 1px solid black;

    h1 {
      margin: 0;
      text-align: center;
    }
  }
  p {
    padding: 5px;
    text-align: center;
  }
`;

class Card extends Component {
  render() {
    const { id, title, description, type, cost, attackModifier, defenseModifier } = this.props.card;
    return (
      <StyledCard>
        <div className="card-top"></div>
        <div className="card-title"><h1>{title}</h1></div>
        <p>{description}</p>
      </StyledCard>
    );
  }
}

export default Card;
