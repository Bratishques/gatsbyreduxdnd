import { v4 as uuidv4 } from 'uuid';

const { createStore } = require("redux")


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
        const newThreads = state.threads.map((a) => {
            if (action.payload.threadId === a.id) {
                a.posts.push(post)
            }
            return a
        })
      return {
        ...state,
        threads: newThreads
      }

    default:
      return state
  }
}

export const store = createStore(reducer, initialState)
