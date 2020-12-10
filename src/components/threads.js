import React from "react"
import { useState } from "react"
import { DragDropContext, Droppable, resetServerContext } from "react-beautiful-dnd"
import { connect } from "react-redux"
import Thread from "./thread"
import "./thread.css"

const Threads = ({ count, dispatch, threads }) => {



  
  const dragEndFunc = (e) => {
    console.log(e)
    dispatch({
      type: "MOVE_POST",
      payload: {
        ...e
      },
    })

    
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
      <DragDropContext onDragEnd={dragEndFunc}>
      <div className="threads-wrapper">
        {threads.map((thread, i) => {
          return (

              <Thread thread={thread}   key={thread.id}/>


            )
        })}
      </div>
      </DragDropContext>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    count: state.count,
    threads: state.threads,
  }
}

function mapDispatchToProps(state) {

}

export default connect(mapStateToProps)(Threads)
