import React from 'react'
import CommentPane from './CommentPane'
import CommentInput from './CommentInput'

class Posts extends React.Component {
    
    constructor(props)
    {
        super(props)
        this.state = {
            comments: [
                {
                    username:"Steve",
                    content:"Hello from Other"
                },
                {
                    username:"Jimmy",
                    content:"Hello from Jimmy"
                },
            ],
            input: ''
        }

        this.sendComment = this.sendComment.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    sendComment(e)
    {
        e.preventDefault();       
        const newContent = this.state.input;
        const comment = {'username':'default','content':newContent};

        this.setState({
            comments: [...this.state.comments,comment]
        })
        console.log(this.state.comments)
    }

    handleChange(e)
    {
        this.setState({
            input: e.target.value
        })
    }

    displayComments = ({username, content}) => {
        return <CommentPane username={username} content={content} />
    }

    render()
    {
        return (
            <div className="col-sm-6 mb-2">
                <div className="card">
                    <div className="card-body">                        
                            <div className="card-top d-flex flex-row">
                                    <img src={require(`../images/${this.props.user_image}`)} className="card--userProfile" alt="user"/>
                                    <span className="pl-3">
                                        <h5 className="card-title">{this.props.name}</h5>
                                        <p className="small">{this.props.location}</p>
                                    </span>
                            </div>
                            <p className="card-text py-2">
                                {this.props.text}
                            </p>
        
                            {/* 
                                1.fetch data from databse
                                2.pass it as prop to the CommentPane.js
                            */}

                            {this.state.comments.map(this.displayComments)}
                                                                                                         
                            <CommentInput input={this.state.input} handleChange={this.handleChange} sendComment={this.sendComment} />                                           
                    </div>
                </div>
            </div>
          )
    }
  
}

export default Posts
