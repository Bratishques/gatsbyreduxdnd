import React from "react"
import Posts from "./posts"

const Thread = ({thread, provided}) => {
    return (
        <div className="thread">
            <div className="thread-top">
            {thread.name}
            </div>
            <div className = "thread-middle" ref={provided.innerRef} {...provided.droppableProps}>
            <Posts threadId = {thread.id} posts = {thread.posts} provided={provided}/>
            
            </div>
            <div className = "thread-bottom">
            Posts: {thread.posts.length}
            </div>
        </div>
    )
}

export default Thread