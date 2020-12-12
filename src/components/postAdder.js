import React, { useEffect, useRef, useState } from "react"
import { connect } from "react-redux"

const PostAdder = ({addPost, threadId}) => {
  const [postAdding, setPostAdding] = useState(false)
  const [name, setName] = useState("")
  const inputRef = useRef(null)

  const clickHandler = () => {
    if (postAdding && name.length > 0) {
        addPost(name, threadId)
    }
    setPostAdding(!postAdding)
    setName("")
  }

  useEffect(() => {
    if (postAdding) {
      inputRef.current.focus()
    }
  }, [postAdding])

  return (
    <div>
      <div>
        {postAdding && (
          <input
          ref={inputRef}
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
