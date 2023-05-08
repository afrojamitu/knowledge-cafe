import React from 'react';

const BlogPost = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold my-5'>Common Question-Answer about React.js</h1>
            {/* Question 1 */}
            <div className='text-start bg-slate-100 p-4 md:p-12 rounded-lg my-5'>
                <h1 className='text-4xl mb-4'>1. What are the difference between Props and State?</h1>

                <p className='text-2xl'><span className='text-2xl font-medium'>Answer: </span> 
                 In React, both Props and State are used to manage and update the data that is used to render components. However, there are some important differences between the two:<br></br><br></br>

<span className='text-2xl font-medium'>Props: </span>
Props (short for properties) are used to pass data from a parent component to a child component. They are read-only, meaning that they cannot be changed by the child component. Props are typically used to configure or customize a component and to pass down data that is needed to render it.<br></br><br></br>

<span className='text-2xl font-medium'>State: </span>
State is used to manage data within a component. It is mutable, meaning that it can be changed by the component itself. State is typically used to store data that is internal to a component and is used to keep track of things like user input, user interface state, or any data that is expected to change over time.<br></br><br></br>

<span className='text-2xl font-medium'>In summary </span> Props are used to pass data from a parent to a child component, while State is used to manage data within a component. Both Props and State are important concepts in React and are used extensively to create dynamic and interactive user interfaces.
                </p>
            </div>

            {/* question 2 */}
            <div className='text-start bg-slate-100 p-4 md:p-12 rounded-lg my-5'>
                <h1 className='text-4xl mb-4'>2. How does useState work?</h1>

                <div className='text-2xl'><span className='text-2xl font-medium'>Answer: </span> 
                The useState hook is used to add state to functional components. Here's how it works:<br></br><br></br>

<span className='text-2xl font-medium'>i. Importing the Hook: </span>
To use the useState hook, we first need to import it from the 'react' library.
<br></br><br></br>

<span className='text-2xl font-medium'>ii. Setting the Initial State: </span>
Next, we need to set the initial state for our component using the useState hook. We do this by calling useState and passing in the initial value for our state. For example, to set an initial state of 0.<br></br><br></br>

Here, we're using array destructuring to capture the current value of our state (count) and a function that we can use to update the state (setCount). The useState hook returns an array with two values, the current state value and a function to update it.
<br></br><br></br>

<span className='text-2xl font-medium'>iii. Updating the State: </span> To update the state, we simply call the function returned by the useState hook and pass in the new value for our state. For example, to increment our count state.<br></br><br></br>

<span className='text-2xl font-medium'>iv. Accessing the State: </span> To access the current value of our state, we simply refer to the state variable that we defined earlier. For example, to display the current value of our count state.
                </div>
            </div>

            {/* question 3 */}
            <div className='text-start bg-slate-100 p-4 md:p-12 rounded-lg my-5'>
                <h1 className='text-4xl mb-4'>3. What is the Purpose of useEffect other than fetching data?</h1>

                <p className='text-2xl'><span className='text-2xl font-medium'>Answer: </span> 
                The useEffect hook in React allows us to perform side effects in functional components. Side effects are any actions that are not directly related to rendering a component, such as updating the document title, interacting with external APIs or libraries, setting up event listeners, and more.<br></br><br></br>

 While fetching data is a common use case for the useEffect hook, it can also be used to perform a wide variety of other side effects in our components, such as updating the document title, setting up event listeners, performing animations, and more.
                </p>
            </div>

            {/* question 4 */}
            <div className='text-start bg-slate-100 p-4 md:p-12 rounded-lg my-5'>
                <h1 className='text-4xl mb-4'>4. How Does React work?</h1>

                <p className='text-2xl'><span className='text-2xl font-medium'>Answer: </span> 
                React is a JavaScript library for building user interfaces, and it works by allowing developers to write reusable components that can be combined together to create complex applications. Here's a general overview of how React works:<br></br><br></br>

<span className='text-2xl font-medium'>i. Component-Based Architecture: </span>
React is based on a component-based architecture, which means that the UI is broken down into small, reusable pieces called components. Each component represents a part of the UI, such as a button, a form, or a menu. Components can be combined together to create more complex components and to build the overall UI of an application.<br></br><br></br>

<span className='text-2xl font-medium'>ii. Virtual DOM: </span>
React uses a virtual DOM (Document Object Model) to manage the state of the UI. The virtual DOM is a lightweight copy of the actual DOM that React can update and manipulate much more efficiently than the real DOM. When the state of a component changes, React updates the virtual DOM and then compares it to the previous version to determine what needs to be changed in the actual DOM.<br></br><br></br>

<span className='text-2xl font-medium'>iii. One-Way Data Flow: </span>
React uses a one-way data flow to manage the flow of data between components. Data flows from parent components down to child components via props (short for properties). When a component needs to update its state, it calls a function that was passed down from its parent component via props. This ensures that the data is always kept in sync and that there are no conflicts between different parts of the UI.<br></br><br></br>

<span className='text-2xl font-medium'>iv. Declarative Programming: </span>
React uses a declarative programming model, which means that developers write code that describes what the UI should look like, rather than how it should be created. This makes it easier to reason about the code and to maintain it over time.<br></br><br></br>

<span className='text-2xl font-medium'>v. Efficient Rendering: </span>
React is designed to be highly efficient and to minimize the amount of work that needs to be done when the UI changes. By using the virtual DOM and by only updating the parts of the UI that need to be changed, React can render UI updates very quickly and with minimal overhead.<br></br>

                </p>
            </div>
        </div>
    );
};

export default BlogPost;