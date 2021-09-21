import React from 'react';
import './Input.css';

export default class Input extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            messageList: []
        }

        this.author = React.createRef();
        this.message = React.createRef();
        this.messageList = [];
        this.bot = {
            author: 'Support Bot',
            message: 'Hello. This message was created by Support Bot. Do not reply.'
        }
    }
    componentDidUpdate() {
        setTimeout(() => {
            if (this.messageList[this.messageList.length - 1].author !== 'Support Bot') {
                this.messageList.push(this.bot)
            }
            this.forceUpdate();
        }, 1500)
    }
    submit = (event) => {
        event.preventDefault();

        let author = this.author.current.value;
        let message = this.message.current.value;
        let newPost = {
            author: author,
            message: message
        }
        this.messageList.push(newPost)
        this.setState({
            messageList: this.messageList
        })

    }

    render() {
        return <div>
            <div className="inputDiv">
                <form onSubmit={this.submit} className="inputDiv">
                    <div className="text">Enter username:</div>
                    <input ref={this.author} className="authorInput"></input>
                    <div className="text">Enter message:</div>
                    <input ref={this.message} className="messageInput"></input>
                    <button type="submit" className="button">Submit</button>
                </form>
            </div>
            <div className="outputDiv">
                {this.state.messageList.map(item => (
                    <div className="box">
                        <div className="authorOutput">{item.author}</div>
                        <div className="messageOutput">{item.message}</div>
                    </div>
                ))}
            </div>
        </div>
    };
}
