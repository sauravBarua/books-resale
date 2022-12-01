import React from "react";

const Blog = () => {
  return (
    <div>
      <h4>
        {" "}
        What are the different ways to manage a state in a React application?
      </h4>
      <p>
        Ans: #1 – React State: useState and React State: useContext The initial
        state is taken as an argument in useState hook. Initially when the React
        component renders, and returns two values. useContext helps in passing
        the props down the components tree. React’s Context API helps in passing
        the props between the grandfather component to the grandchild component.
        #2 – React State: useReducer The idea of React’s useReducer has been
        taken from JavaScript Reducer. Generally, the current state is held by
        the Reducer along with action with payload and then it results out the
        new state. #3 – React State: Redux With Redux, the state can be managed
        globally by the use of an external force. The Redux Reducer’s work is to
        act upon two Redux actions and there is no dependency on the Redux
        Library.
      </p>
      <h4>How does prototypical inheritance work?</h4>
      <p>
        Ans: Simply put, prototypical inheritance refers to the ability to
        access object properties from another object. We use a JavaScript
        prototype to add new properties and methods to an existing object
        constructor. We can then essentially tell our JS code to inherit
        properties from a prototype.
      </p>
      <h4>What is a unit test? Why should we write unit tests?</h4>
      <p>
        Ans: The main objective of unit testing is to isolate written code to
        test and determine if it works as intended. Unit testing is an important
        step in the development process, because if done correctly, it can help
        detect early flaws in code which may be more difficult to find in later
        testing stages.
      </p>
      <h4>React vs. Angular vs. Vue?</h4>
      <p>
        Ans: Angular is a front-end framework with lots of components, services,
        and tools. On Angular’s site, you can see that they define Angular as:
        “The modern web developer’s platform” It is developed and maintained by
        Google developers, but curiously it is not used to implement any of
        their most common products such as Search or YouTube. React is
        considered a UI library. They define themselves as: “A JavaScript
        library for building user interfaces” Facebook developers are behind the
        development and maintenance of this library. And, in this case, most of
        Facebook’s products are made with React. Last but not least, Vue.js is,
        according to its site: “A progressive JavaScript framework” Vue.js is
        developed and led by a huge open-source community.
      </p>
    </div>
  );
};

export default Blog;
