import React, { Component } from 'react';
import Deck from './components/Deck';
import CardPreviewPane from './components/CardPreviewPane';

import './styles/app.scss';

class App extends Component {
  state = {
    deck: [
      {
        id: 1,
        title: "test card",
        type: "trait",
        description: "Nam ac augue semper, eleifend tortor at, tristique mauris. Maecenas posuere, est vitae elementum eleifend, nibh neque rhoncus sapien, id sollicitudin metus felis id sapien. Nulla ullamcorper tellus ut odio pharetra.",
        cost: 0,
        attackModifier: 0,
        defenseModifier: 0
      },
      {
        id: 2,
        title: "Cleave",
        type: "attack",
        description: "Attack any 2 adjacent enemies.",
        cost: 2,
        attackModifier: 1,
        defenseModifier: 0
      },
      {
        id: 3,
        title: "test card3",
        type: "defend",
        description: "Nam ac augue semper, eleifend tortor at, tristique mauris. Maecenas posuere, est vitae elementum eleifend, nibh neque rhoncus sapien, id sollicitudin metus felis id sapien. Nulla ullamcorper tellus ut odio pharetra.",
        cost: 0,
        attackModifier: 0,
        defenseModifier: 0
      }
    ],
    activeCard: 1
  }

  selectCard = (id) => {
    this.setState({
      activeCard: id
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hiiiii</h1>
        <Deck deck={ this.state.deck } selectCard={this.selectCard} />
        <CardPreviewPane activeCard={this.state.deck.find(card => card.id === this.state.activeCard)} />
      </div>
    );
  }
}

export default App;

/**
 * Cards
 * - Id
 * - Title
 * - Description
 * - Image
 * - Type
 * -- If Combat
 * --- Cost
 * --- AttackModifier
 * --- DefenseModifier
 */