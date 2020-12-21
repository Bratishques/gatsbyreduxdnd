import React, { useEffect, useRef, useState } from "react"
import { connect } from "react-redux"

const PostAdder = ({addPost, threadId, focusedThread}) => {
  const [postAdding, setPostAdding] = useState(false)
  const [name, setName] = useState("")
  const inputRef = useRef(null)

  const clickHandler = () => {
    
    if (postAdding && name.length > 0) {
        addPost(name, threadId)
    }
    setPostAdding(!postAdding)
    setName("")
    const wrapper = document.getElementById("wrapper").focus()
  }

  const handleSubmit = (e) => {
      if (e.key === "Enter") {
        clickHandler()
      }
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
            onKeyPress={handleSubmit}
          ></input>
        )}
      </div>
      <button id={`add${threadId}`} onClick={clickHandler} onKeyPress={clickHandler}>Add Post</button>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    focusedThread : state.focusedThread
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(PostAdder)
