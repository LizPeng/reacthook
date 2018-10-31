// import the useState from React. It lets us keep local state in a function component
import React, {useState, useEffect} from 'react';

// React function components
export function Example() {
  /**
   * State Hook
   * It lets us add local state to React function components
   * When we declare a state variable with useState, 
   * it returns a pair — an array with two items, to which we give names.
   * The first item is the current value
   * the second is a function that lets us update it.
   */
  const [count, setCount] = useState(0)
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  /**
   * Effect Hook 
   * lets you perform side effects in function components:
   * Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.
   * you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
   */
  // Effects without cleanup网络请求，更改dom，登录
  // Effects with    cleanup
  // n a React class, you would typically set up a subscription in componentDidMount, and clean it up in componentWillUnmount
  // If your effect returns a function, React will run it when it is time to clean up:

  
  // This is because in many cases we want to perform the same side effect regardless of whether the component just mounted, or if it has been updated. Conceptually, we want it to happen after every render — but React class components don’t have a method like this. We could extract a separate method but we would still have to call it in two places.
  //  you might find it easier to think that effects happen “after render”. React guarantees the DOM has been updated by the time it runs the effects.
  useEffect( () => { // 对比class components didMount didUpdate
    document.title = `You clicked ${count} times`;
  })
  return (
    <div>
      <p>You clicked {count} times, {fruit}, {todos.map(_ => _.text)}</p>
      {/* call setCount with a new value */}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}