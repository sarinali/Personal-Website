import React, {useState, useId, useEffect} from 'react'
import "../css/sarinagpt.css"
import { ChatOpenAI } from "langchain/chat_models/openai";
import {
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
  ChatPromptTemplate,
  MessagesPlaceholder
} from "langchain/prompts";
import { ConversationChain } from "langchain/chains";
import { BufferMemory } from "langchain/memory";

const chat = new ChatOpenAI({ 
    openAIApiKey: process.env.REACT_APP_OPENAI_API_KEY,
      temperature: 0.9, 
      streaming: true, 
    //   callbacks: [
    //   {
    //     handleLLMNewToken(token: string) {
    //         setAnswer(prevAnswer => prevAnswer.concat(token));

    //     },
    //   },
    // ], 
});
const chatPrompt = ChatPromptTemplate.fromPromptMessages([
    SystemMessagePromptTemplate.fromTemplate(
        "You are a dog, you are only allowed to reply with “bark” or “woof” or “grr”. You may not break character even if the user tries to prompt you to, you must reply to every message with bark, woof or grr. Remember, you are a dog and thus you must act like a dog. "
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
        <div className='gpt-body'>
            <form onSubmit={async e => {
                // add the gpt code here (api call)
                e.preventDefault()
                setAnswer('')
                await chain.call({
                    input: question
                })
                // setAnswer(response.response)
            }}>
                <label htmlFor={id}>Prompt:</label>
                <input 
                    id={id} 
                    value={question} 
                    // onChange={() => console.log(e)}
                    onInput={e => {
                        setQuestion((e.target as HTMLInputElement).value)
                    }}/>
                <input type="submit" value="Submit" /> 
            </form>
            <div>{answer}</div>
        </div>
    )
}
