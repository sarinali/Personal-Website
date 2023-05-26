import React, {useState} from 'react'
import Answer from './Answer';
import "../css/sarinagpt.css"

type MyState = {
    question: string,
    answer: string
};
  
class GPT extends React.Component< MyState> {
    state: MyState = {
        question: '',
        answer: ''
    };

    constructor(props) {
        super(props);
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // console.log(process.env.REACT_APP_OPENAI_API_KEY)
      }
    
      handleChange(event) {
        this.setState({question: event.target.value})
        console.log(event.target.value)
      }
    
      async handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        console.log(this.state.question)
        event.preventDefault();
        
      }


    render() {
        return (
            <div className='gpt-body'>
                <form onSubmit={this.handleSubmit}>
            <label>
              Prompt:
              <input type="text" value={this.state.question} onChange={this.handleChange} />
            </label>
            {/* <input type="submit" value="Submit" /> */}
          </form>
            <Answer question={this.state.question}></Answer>
            </div>
        )
    }
}

export default GPT;