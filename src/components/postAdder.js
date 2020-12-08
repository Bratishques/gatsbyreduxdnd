import React, { useState } from "react"
import { connect } from "react-redux"

const PostAdder = ({addPost, threadId}) => {
  const [postAdding, setPostAdding] = useState(false)
  const [name, setName] = useState("")

  const clickHandler = () => {
    if (postAdding && name.length > 0) {
        addPost(name, threadId)
    }
    setPostAdding(!postAdding)
    setName("")
  }
  return (
    <div>
      <div>
        {postAdding && (
          <input
            value={name}
            onChange={e => {
              setName(e.target.value)
              console.log(e.target.value)
            }}
          ></input>
        )}
      </div>
      <button onClick={clickHandler}>Add Post</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addPost: (name, id) =>
      dispatch({
        type: "ADD_POST",
        payload: {
            threadId: id,
            postName: name
        }
      }),
  }
}

export default connect(null, mapDispatchToProps)(PostAdder)
