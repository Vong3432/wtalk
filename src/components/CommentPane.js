import React from 'react'
import './comment.css'

function CommentPane(props) {  
  
  return (
    <div className="comment-container">

      {/* 
        get username, content from database 
        display the name and content to the comment--username and comment--content
      */}
      {console.log(props.username)}
      <p className="comment--username">{props.username}</p>
      <p className="comment--content">{props.content}</p>
    </div>
  )
}

export default CommentPane
