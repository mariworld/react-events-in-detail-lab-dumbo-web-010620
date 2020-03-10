// Code DelayedButton Component Here
 import React, { Component } from 'react'
 
 export class DelayedButton extends Component {
    forClick = (event) => {
        event.persist();
        setTimeout(() => {this.props.onDelayedClick(event),
            this.props.delay
    })
}
    render() {
         return (
             <div>
                 <button onClick={this.forClick}
        
                     
                      ></button>
             </div>
         )
     }
 }
 
 export default DelayedButton
 