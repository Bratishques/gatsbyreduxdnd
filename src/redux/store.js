import { v4 as uuidv4 } from "uuid"
import { crashReporter, logger } from "./logger"

const { createStore, applyMiddleware } = require("redux")

class Thread {
  constructor(name, id) {
    this.name = name
    this.id = id
    this.posts = []
  }
}

class Post {
  constructor(name, id) {
    this.name = name
    this.id = id
  }
}

const thread1 = new Thread("Duck", uuidv4())
const thread2 = new Thread("Dog", uuidv4())
const thread3 = new Thread("Helicopter", uuidv4())

const initialState = {
  count: 0,
  threads: [thread1, thread2, thread3],
}

function reducer(state, action) {
  switch (action.type) {
    case "COUNT_PLUS":
      return { ...state, count: state.count + 1 }

    case "ADD_POST":
      const post = new Post(action.payload.postName, uuidv4())
      let newThreads = state.threads.map(a => {
        if (action.payload.threadId === a.id) {
          a.posts.push(post)
        }
        return a
      })
      return {
        ...state,
        threads: newThreads,
      }

    case "REMOVE_POST":
      return {
        ...state,
      }

    case "MOVE_POST":
      const source = action.payload.source
      const target = action.payload.destination
      let indexPost

      state.threads.map(a => {
        if (a.id === source.droppableId) {
          indexPost = a.posts.find(
            indexPost => indexPost.id === action.payload.draggableId
          )
        }
        return a
      })
      if (source.droppableId !== target.droppableId) {
        newThreads = state.threads.map(a => {
          if (a.id === target.droppableId) {
            switch (target.index) {
              case 0:

                a.posts = [indexPost, ...a.posts]
                break
              case a.posts.length:

                a.posts = [...a.posts, indexPost]
                break

              default:
                const firstPart = a.posts.slice(0, target.index)
                const secondPart = a.posts.slice(target.index)
                console.log(firstPart, secondPart)
                a.posts = [...firstPart, indexPost, ...secondPart]
                break
            }
          }

          if (a.id === source.droppableId) {
            const sub = a.posts.filter((a, i) => i !== source.index)
            a.posts = sub
          }
          return a
        })

        return {
          ...state,
          threads: newThreads,
        }
      } else {

        newThreads = state.threads.map((a,i) => {
          if (a.id === source.droppableId) {
              a.posts.splice(source.index, 1)
              a.posts.splice(target.index, 0, indexPost)
          }
          return a
        })
        return {
          ...state,
          threads: newThreads,
        }
      }
    default:
      return state
  }
}

export const store = createStore(
  reducer,
  initialState,
  applyMiddleware(logger, crashReporter)
)
