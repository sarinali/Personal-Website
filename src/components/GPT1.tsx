import React, {useState, useId} from 'react'
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


export default function GPT1(props) {
    const [question, setQuestion] = useState(props?.value ?? '');
    const [answer, setAnswer] = useState(props?.value ?? '');
    const id = useId();
    const chat = new ChatOpenAI({ 
        openAIApiKey: process.env.REACT_APP_OPENAI_API_KEY,
          temperature: 0, 
          streaming: true, 
          callbacks: [
          {
            handleLLMNewToken(token: string) {
              // process.stdout.write(token);
              console.log(answer + token)
              setAnswer(answer + token)
            },
          },
        ], 
    });
    
    const chatPrompt = ChatPromptTemplate.fromPromptMessages([
        SystemMessagePromptTemplate.fromTemplate(
            "You are a friendly AI chatbot who is chatty"
        ),
        new MessagesPlaceholder("history"),
        HumanMessagePromptTemplate.fromTemplate("{text}"),
        ]
    );
        
    const chain = new ConversationChain({
        memory: new BufferMemory({ returnMessages: true, memoryKey: "history" }),
        prompt: chatPrompt,
        llm: chat,
      }
    );

    return (
        <div className='gpt-body'>
            <form onSubmit={async e => {
                // add the gpt code here (api call)
                e.preventDefault()
                const response = await chain.call({
                    text: question
                })
                setAnswer(response.response)
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
