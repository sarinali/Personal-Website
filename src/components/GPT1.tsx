import React, {useState, useId, useEffect} from 'react'
// import "../css/sarinagpt.css"
import { ChatOpenAI } from "langchain/chat_models/openai";
import {
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
  ChatPromptTemplate,
  MessagesPlaceholder
} from "langchain/prompts";
import { ConversationChain } from "langchain/chains";
import { BufferMemory } from "langchain/memory";
import Mode from '../Mode'
import Constants from "../Constants"
import Banner from './Banner';

let generating = false;
const chat = new ChatOpenAI({ 
    openAIApiKey: process.env.REACT_APP_OPENAI_API_KEY,
      temperature: 0.9, 
      streaming: true, 
});
const chatPrompt = ChatPromptTemplate.fromPromptMessages([
    SystemMessagePromptTemplate.fromTemplate(
        Constants.SarinaGPTPrompt
    ),
    new MessagesPlaceholder("history"),
    HumanMessagePromptTemplate.fromTemplate("{input}"),
    ]
);
const chain = new ConversationChain({
    memory: new BufferMemory({ returnMessages: true, memoryKey: "history" }),
    prompt: chatPrompt,
    llm: chat,
  }
);

export default function GPT1(props) {
    const [question, setQuestion] = useState(props?.value ?? '');
    const [answer, setAnswer] = useState('');
    
    chat.callbacks = [
        {
            handleLLMNewToken(token: string) {
                    setAnswer(prevAnswer => prevAnswer.concat(token));
            },
        }
    ]
    return (
        <div className='answer-body-format'>
            <div>
                <div id="answerbody" className={`answer-body-${Mode.curMode}`}>
                    <Banner></Banner>
                    <div className='answer-text'>{answer}</div>
                </div>
                <form id="formbody" className={`form-body-${Mode.curMode}`} onSubmit={async e => {
                // get state of gpt

                e.preventDefault()
                setQuestion('')
                if (!generating) {
                    setAnswer('')
                    generating = true
                    console.log(generating)
                    await chain.call({
                        input: question
                    })
                    generating = false
                }
                
            }}>
        
                <input className={`ask-bar-${Mode.curMode}`}
                    placeholder='Ask a question about Sarina!'
                    id = "askbar"
                    value={question} 
                    // onChange={() => console.log(e)}
                    onInput={e => {
                        setQuestion((e.target as HTMLInputElement).value)
                    }}/>
                <input type="submit" value="Submit" className='submit-btn'/> 
            </form>
            </div>
        </div>
    )
}
