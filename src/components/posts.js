import React from "react"
import { Draggable } from "react-beautiful-dnd"
import Post from "./post"
import PostAdder from "./postAdder"

const Posts = ({ threadId, posts, provided }) => {
  return (
    <div>
      <div>
        {posts.map((a, i) => {
          return (
            <Draggable draggableId={a.id} key={i} index={i}>
              {provided => <Post name={a.name}  provided={provided}  />}
            </Draggable>
          )
        })}
      </div>
      {provided.placeholder}
      <PostAdder threadId={threadId} />
    </div>
  )
}

export default Posts
