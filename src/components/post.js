import React from "react"
import { Draggable } from "react-beautiful-dnd"
import "./post.css"

const Post = ({ name, provided, index, post }) => {
  return (
    <Draggable draggableId={post.id} index={index}>
      {provided => (
        <div
          className="post-wrap"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {name}
        </div>
      )}
    </Draggable>
  )
}

export default Post
