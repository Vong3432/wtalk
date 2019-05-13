import React from 'react'

function CommentInput( props ) {

  const styling = {
    flex:2
  }

  return (
    <>        
      <div className="container d-flex flex-wrap">
          <div className="input-group mb-3">
            <input className="form-control" type="text" value={props.input} name="content" onChange={props.handleChange}/>
            <div className="input-group-append">
              <button onClick={props.sendComment} className="btn secondaryBTN" type="button" id="button-addon2">Send</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default CommentInput
