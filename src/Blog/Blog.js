import React from 'react';

const Blog = () => {
    return (
        <div className=''>
        <div className='bg-slate-200  pt-5 pb-16 px-5 w-4/5 text-primary mx-auto rounded-md'>
        <h2 className='text-3xl font-semibold text-center my-5 text-primary '>  How does prototypical inheritance work? </h2>
      <div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
          . What are the different ways to manage a state in a React application?
          </div>
          <div className="collapse-content">
            <p> Local (UI) state – Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook. For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs. Global (UI) state – Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application. 
              
            Server state – Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. </p>
          </div>
        </div>

    <br />  <br />

    

        <div
          tabIndex={1}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
          What is a unit test? Why should we write unit tests?
          </div>
          <div className="collapse-content">
          <p className='text-lg mb-6'>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
          </div>
        </div>

    <br /> <br />

        <div
          tabIndex={3}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
          React vs. Angular vs. Vue?
          </div>
          <div className="collapse-content">
          <p className='text-lg mb-6'><strong>React:</strong> React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. <strong>Angular: </strong>AngularJS is a discontinued free and open-source JavaScript-based web framework for developing single-page applications. It was maintained mainly by Google and a community of individuals and corporations. <strong>Vue : </strong> Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.</p>
          </div>
        </div>
         
      <br /> <br />

        <div
          tabIndex={4}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
          How does prototypical inheritance work?
          </div>
          <div className="collapse-content">
            <p> The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages. </p>
          </div>
        </div>

      </div>
     </div>  
    </div>
    );
};

export default Blog;