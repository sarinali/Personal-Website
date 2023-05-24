import React from 'react'
 

type MyState = {
    question: string,
    answer: string
};
  

class GPT extends React.Component<MyState> {
    state: MyState = {
        question: '',
        answer: ''
    };

    constructor(props) {
        super(props);
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        // this.setState({value: event.target.value});
        this.setState({value: event.target.question})
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