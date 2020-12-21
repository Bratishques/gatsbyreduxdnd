import React from "react"
import { Draggable } from "react-beautiful-dnd"
import Posts from "./posts"

const Thread = ({ thread, index, focusedThread }) => {

  
  return (
    <Draggable draggableId={thread.id} index={index}>
      {provided => (
        <div className={`thread ${focusedThread === thread.id && "focused"}`} ref = {provided.innerRef} {...provided.draggableProps}>
          <div className="thread-top" {...provided.dragHandleProps}>{thread.name}</div>
          <div className="thread-middle">
            <Posts threadId={thread.id} posts={thread.posts} />
          </div>
          <div className="thread-bottom">Posts: {thread.posts.length}</div>
        </div>
      )}
    </Draggable>
  )
}


export default Thread
