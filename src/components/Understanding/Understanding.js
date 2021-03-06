import React, { Component } from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';
import '../Feeling/Feeling.css';
// import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Understanding extends Component {
    state = {
        understanding: '',
    }

    handleButtonClick = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'SET_UNDERSTANDING', payload: this.state.understanding })
        this.setState({
            understanding: '',
        })
        this.props.history.push('support');
    }

    handleChangeFor = event => {
        this.setState({
            understanding: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <h1>How well did you understand today's material?</h1>
                <br />
                <label htmlFor="understanding">Understanding?</label>
                <br />
                <input value={this.state.understanding} onChange={this.handleChangeFor} id="understanding" type="number"></input>
                <br />
                <div className="nextButton">
                    <button onClick={this.handleButtonClick}>Next</button>
                </div>
                <br />
                <h3>Feelings: {this.props.feelingsReducer} </h3>
                <h3>Understanding: {this.props.understandingReducer}</h3>
                <h3>Support: </h3>
                <h3>Comments: </h3>
                <button type="button" disabled>Incomplete</button>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Understanding);
