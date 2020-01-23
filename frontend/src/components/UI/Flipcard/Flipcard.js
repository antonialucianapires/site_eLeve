import React, { Component } from 'react';
import './Flipcard.css'

class Flipcard extends Component {
    render() {
        return (
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                    </div>
                    <div class="flip-card-back">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Flipcard;