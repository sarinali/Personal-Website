import React from 'react'
import { ChatOpenAI } from "langchain/chat_models/openai";
import {
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
  ChatPromptTemplate,
  MessagesPlaceholder
} from "langchain/prompts";
import { ConversationChain } from "langchain/chains";
import { BufferMemory } from "langchain/memory";

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
        console.log(process.env.REACT_APP_OPENAI_API_KEY)
      }
    
      handleChange(event) {
        this.setState({question: event.target.value})
        console.log(event.target.value)
      }
    
      async handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        console.log(this.state.question)
        
        // console.log(response)
        event.preventDefault();
      }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
            <label>
              Prompt:
              <input type="text" value={this.state.question} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
            </div>
        )
    }
}

export default GPT;