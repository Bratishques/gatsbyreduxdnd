import React from "react"
import { Droppable } from "react-beautiful-dnd"
import Post from "./post"
import PostAdder from "./postAdder"

const Posts = ({ threadId, posts}) => {
  return (
    <Droppable droppableId={threadId}>
     {provided => (
    <div  ref={provided.innerRef} {...provided.droppableProps}>

      <div>
        {posts.map((post, i) => {
          return (
            <Post key={post.id} name={post.name} provided={provided} index={i} post={post} />
          )
        })}
      </div>
   
      {provided.placeholder}
      <PostAdder threadId={threadId} />
    </div>
     )}
    </Droppable>
  )
}

export default Posts
