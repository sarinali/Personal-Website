import React, {useState} from 'react'
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
      temperature: 0, 
      streaming: true, 
      callbacks: [
      {
        handleLLMNewToken(token: string) {
          // process.stdout.write(token);
          console.log(token)
        },
      },
    ], 
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

export default function Answer({question}) {
const [answer, setAnswer] = useState('');

  return (
    <div>
        <div>{answer}</div>
        <button onClick={async () => {
            console.log(chain.memory)
            const response = await chain.call({
                input: {question}
            })
            setAnswer(response.response)
        }}>Submit</button>
    </div>
  )
}

