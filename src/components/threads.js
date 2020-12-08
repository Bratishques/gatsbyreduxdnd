import React from "react"
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import { connect } from "react-redux"
import Thread from "./thread"
import "./thread.css"

const Threads = ({ count, dispatch, threads }) => {
  console.log(threads)
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
      <DragDropContext onDragEnd={(e)=>{console.log(e)}}>
      <div className="threads-wrapper">
        {threads.map((thread, i) => {
          return (
            <Droppable droppableId={thread.id} key={i}>
            {provided => (
              <Thread thread={thread}  provided = {provided} innerRef = {provided.innerRef}/>
            )}
            
            </Droppable>
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

function mapDispatchToProps(state) {}

export default connect(mapStateToProps)(Threads)
