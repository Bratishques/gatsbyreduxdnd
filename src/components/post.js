import React from "react"
import "./post.css"

const Post = ({name, provided}) => {

    return (

        <div className="post-wrap" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            {name}
        </div>
    )
}

export default Post