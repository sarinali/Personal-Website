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

const chat = new ChatOpenAI({ 
    openAIApiKey: process.env.REACT_APP_OPENAI_API_KEY,
      temperature: 0.9, 
      streaming: true, 
});
const chatPrompt = ChatPromptTemplate.fromPromptMessages([
    SystemMessagePromptTemplate.fromTemplate(
        "You are a friendly chatty AI !"
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
    const id = useId();

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
                <div className={`answer-body-${Mode.curMode}`}>
                    <div>{answer}</div>
                </div>
                <form className="form-body" onSubmit={async e => {
                // add the gpt code here (api call)
                e.preventDefault()
                setAnswer('')
                await chain.call({
                    input: question
                })
            }}>
        
                <input className='ask-bar'
                    id={id} 
                    value={question} 
                    // onChange={() => console.log(e)}
                    onInput={e => {
                        setQuestion((e.target as HTMLInputElement).value)
                    }}/>
                <input type="submit" value="Submit" /> 
            </form>
            </div>
        </div>
    )
}
