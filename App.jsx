import React from 'react';
import './Input.css';
import { Grid, Button, TextField, Box } from '@material-ui/core';
import { Layout } from './components/Layout/Layout';
import { Sidebar } from './Sidebar/Sidebar';


export default class App extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            messageList: []
        }

        this.focus = true
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
            this.setState({
                messageList: this.messageList
            })

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
        this.author.current.value = '';
        this.message.current.value = '';
        this.message.current.focus()
    }

    render() {
        return (<div>
            <Grid container>
                <Grid item xs={8}>
                    <Layout sx={{
                        height: '100vh',
                        margin: '0',
                        padding: '0'
                    }}>
                        <Box sx={{
                            height: '30vh',
                            backgroundColor: 'rgb(108, 191, 224)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column'
                        }}>
                            <div >
                                <form onSubmit={this.submit} sx={{
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <TextField label="Enter username" variant="outlined" inputRef={this.author} />
                                    <TextField label="Enter message" variant="outlined" inputRef={this.message} autoFocus={this.focus} />
                                    <Button type="submit" variant="outlined" >Submit</Button>
                                </form>
                            </div>
                        </Box>
                        <Box sx={{
                            height: '70vh',
                            backgroundColor: 'rgb(223, 141, 116)',
                        }}>
                            <Grid container spacing={5} >
                                {this.state.messageList.map((item, indx) => (
                                    <Grid item xs={2} key={indx}>
                                        <Box sx={{
                                            borderRadius: '50px',
                                            background: 'transparent',
                                            border: '1px solid black',
                                            padding: '20px'
                                        }} >
                                            <h2>{item.author}</h2>
                                            <h4>{item.message}</h4>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Layout >
                </Grid>
                <Grid item xs={4} >
                    <Box sx={{ bgcolor: 'rgb(150, 150, 224)', height: "100vh", display: 'flex', alignItems: 'center' }}>
                        <Sidebar />
                    </Box>
                </Grid>
            </Grid>
        </div>)
    };
}
