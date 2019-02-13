import React, { Component } from 'react'
import Card from './Card';

export class CardPreviewPane extends Component {
  render() {
    return (
      <div>
        <Card card={this.props.activeCard} />
      </div>
    )
  }
}

export default CardPreviewPane
