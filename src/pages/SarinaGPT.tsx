import React from "react";
import PropTypes from 'prop-types'
import GPT1 from "../components/GPT1";
import "../css/sarinagpt.css"


class SarinaGPT extends React.Component {
    render() {
        return (
            <div className="gpt-body">
                <div className="feature-title">SarinaGPT</div>
                <p className="gpt-description">SarinaGPT is a chatbot that answers questions about me! It is a LLM trained on data about myself, feel free to ask about my education, employment history, side projects, contact information and personal interests!</p>
                <GPT1></GPT1>
            </div>
        )
    }
}

export default SarinaGPT;