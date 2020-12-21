import React, { useEffect } from "react"
import { useState } from "react"
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import { connect } from "react-redux"
import Thread from "./thread"
import "./thread.css"

const Threads = ({ count, dispatch, threads, focusedThread}) => {
  const dragEndFunc = e => {
    if (e.type === "column" && e.source.droppableId === "ground") {
      dispatch({
        type: "MOVE_COLUMNS",
        payload: {
          ...e,
        }
      })
      return
    }
    dispatch({
      type: "MOVE_POST",
      payload: {
        ...e,
      },
    })
    return
  }


 

  return (
    <div>
      <div>Count : {count}</div>
      <button
        onClick={() => {
          dispatch({ type: "COUNT_PLUS" })
        }}
      >
        +
      </button>
      <DragDropContext onDragEnd={dragEndFunc} >
        <Droppable droppableId="ground" direction="horizontal" type="column">
          {provided => (
            <div

             
              className="threads-wrapper"
              ref={provided.innerRef}
              {...provided.droppableProps}

            >
              {threads.map((thread, i) => {
                return <Thread thread={thread} key={thread.id} index={i} focusedThread={focusedThread} />
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    focusedThread: state.focusedThread,
    count: state.count,
    threads: state.threads,
  }
}


export default connect(mapStateToProps)(Threads)
