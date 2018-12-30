# react-refresher

# React

React is a javascript library for building UI for a variety of platform. React give you a mental model to work with and helps you build UI in a declarative and component driven way. React uses components as a primary unit for building with.

Components encapsulates unit of functionality and data (props and state) to render UI as output. Some components also provide a set of life cycle methods that you can hook into.

React applications can target several environments (react-dom, react-native, react-vr,...).
![React environment platform](./docsimg/appcode.jpg 'Env. Platform')

## Virtual DOM

Virtual DOM is a data structure or collection of data structure that mimics the Browser Document Object Model (DOM). React's virtual DOM handles change detection in data as well as translating browser events into events that react components can understand. Virtual DOM also has some performance benefit. React determines difference between the actual and in-memory DOM, then it performs an efficient update to the Browser DOM (diff and patch)

## Components

The tow types of components:
Stateless components or functional components do not inherit from the React.Component class and therefore do not have access to the component state or lifecycle methods. These components does not have backing instance.

```javascript
const MyComponent = () => {
  return <div>Hello</div>
}
```

Stateful components are components that extend the React.Component class.

```javascript
class MyComponent extends React.Component {
  render() {
    return <div>Hello</div>
  }
}
```

The `render` method is required and it needs to return a react component.
In this type of component the persistent state is available to the entire component, because react creates a "backing instance".

### State

What is state?
All the information a program has access to at a given instance. Generally there are two types of state.

- Mutable, can change after creation
- Immutable, cannot change after creation

In React there are two primary ways you can work with state.

- props
- state

Props are the primary way to pass immutable data. Any component can receive props and used them in the ir constructor,m render and lifecycle methods. Props are passed to React components from parent of from the defaultProps static method on the component itself.

Data that needs to be mutable often comes from user input, or network request. To keep track of user interactions with form elements you need to provide an initial state, and then change that state overtime. You can use the constructor tof the component to set the initial state for your component.

```javascript
class CreateComment extends React.Component{
  constructor(){
    super(props)
    this.state={
      content:'',
      user:''
    }
  }
  render(){...}
}
```

To update the state that you initialize in the constructor you need to use a special method [`setState(updater [, callback])`](https://reactjs.org/docs/react-component.html#setstate). _setState_ takes a function used to set the new state for the component and an optional callback function.

```javascript
this.setState(() => ({ content: 'this post is awesome' }))
```

## One way data flow

Data biding is the process that establishes a connection between UI data, and other data. UI is tha data projected into a view and when the data changes the view changes.
In React, data flows top-down, as an input from parents to children. When you create composite components you pass information to child components via props and make use of it in the child components. The child component pass data back up the hierarchy via callback. When the parent receives the callback, it can change that data and sent the changed data back down to the child component.

## PropTypes

The prop-types library provides a set of validators that will you let you specify what props your component needs or expects. When using PropTypes, you need to add a `propTypes` property to the React.Component class via a static class property of by assignment after the class definition.

```javascript
import PropTypes from 'prop-types'
...
Post.propTypes={
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}
```

## DefaultProps

defaultProps provides default props to your component. This is helpful to ensure that required attributes have value when it is used.

```javascript
Spinner.defaultProps = {
  message: 'Loading...'
}
```

## Lifecycle method

Lifecycle methods are special methods attached to a class-based React component that will execute at specific points in a component existance.

![React 16.4 Lifecycle](./docsimg/lifecycle.png)[_React 16.4 Lifecycle_](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

1. `componentDidMount` have access to the state, props and knows if the component is ready. This is a good place to update component with data coming from network request.
2. `componentDidUpdate` also good place to update component with data from network request. sometimes you need to use this method because `componentDidMount` is only invoked once, however checks current props to previous props, since you should no update if props did not change.
3. `componentWillUnmount` use this method to clean up things when a component is being removed (close socket, end connection...).

More about component lifecycle [here](https://reactjs.org/docs/state-and-lifecycle.html)

### Error boundaries

if an unchaught exception is thrown within a component constructor, render, or lifecycle method, React will unmount the component and its children from the DOM.
`componentDidCatch` gives you access to the the error being thrown and an error message. With this info you can ensure your component handles this error appropriately.

## Forms elements and events

React lets you interact with events like you would in a regular DOM.. It lets you listen for events like clicks, focus, scroll, and others.
Event handlers receive a _SyntheticEvent_ as an argument and have access to a number of properties. React translates the browser events into something you can work with in your react components. You will listen for the event, and when it is emitted, you will extract the value from the event and update the component state

### Synthetic event

```
boolean bubbles
boolean cancelable
DOMEventTarget currentTarget
boolean defaultPrevented
number eventPhase
boolean isTrusted
DOMEvent nativeEvent
void preventDefault()
boolean isDefaultPrevented()
void stopPropagation()
boolean isPropagationStopped()
DOMEventTarget target
number timeStamp
string type
```

More about _SyntheticEvent_ [here](https://reactjs.org/docs/events.html)

### Controlled vs Uncontrolled

| Controlled                                                                     | Uncontrolled                                   |
| ------------------------------------------------------------------------------ | ---------------------------------------------- |
| components are updated by using events and event handlers to update the state. | the component maintain its own internal state. |
| `<textarea onChange={this.handleUpdate} value={this.state.comment}/>`          | `<textarea onChange={this.handleChange}/>`     |

## Ref

Ref is a way react gives you access to the underlying DOM node.
You might need to use ref to:

- interact with media elements like `<video>`
- trigger animations
- interact with third-party libraries that use DOM outside react

### How to use ref

We create _ref_ instance in the constructor, then we pass instance as attribute to the JSX element.

```javascript
class ImageCard extends React.Component {
  constructor(props) {
    super(props)
    this.imageRef = React.createRef()
  }
  render() {
    return <img ref={this.imageRef} alt="avatar" />
  }
}
```

## Appendix

### Books

- [React in Action](https://www.manning.com/books/react-in-action)

### Courses

- [Modern React with Redux](https://www.udemy.com/react-redux)

### Style Guide

- https://codeburst.io/5-javascript-style-guides-including-airbnb-github-google-88cbc6b2b7aa

### How to structure React/Redux app?

- https://levelup.gitconnected.com/structure-your-react-redux-project-for-scalability-and-maintainability-618ad82e32b7
- https://hackernoon.com/my-journey-toward-a-maintainable-project-structure-for-react-redux-b05dfd999b5
- https://dev.to/nylas/structuring-a-complex-reactredux-project-4mbg
- https://medium.com/ottofellercom/how-to-structure-large-react-apps-440b0e012d80
- https://github.com/markerikson/react-redux-links/blob/master/project-structure.md
- https://github.com/gothinkster/react-redux-realworld-example-app

### Cheat sheet

- http://www.developer-cheatsheets.com/react
- https://levelup.gitconnected.com/react-cheatsheet-this-setstate-8bc12c5f40f5
- http://jamesknelson.com/react-cheatsheet.pdf
- https://devhints.io/react
- https://devhints.io/redux
- https://devhints.io/es6
- https://medium.freecodecamp.org/modern-frontend-hacking-cheatsheets-df9c2566c72a
