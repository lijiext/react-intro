import React, { Component, Fragment } from "react";
import { CSSTransition } from "react-transition-group";

import './style.css'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        };
    }
    render() {
        return (
            <Fragment>
                <CSSTransition
                    in={this.state.show}
                    timeout={1000}
                    classNames="fade"
                    unmountOnExit
                    onEntered={(el) => {el.style.color = 'red'}}
                    appear={true}
                >
                    <div>Hello</div>
                </CSSTransition>
                <button onClick={this.handleToggle.bind(this)}>toggle</button>
                
            </Fragment>
        )
    }
    handleToggle() {
        this.setState({
            show: !this.state.show
        })
    }
}
export default App;