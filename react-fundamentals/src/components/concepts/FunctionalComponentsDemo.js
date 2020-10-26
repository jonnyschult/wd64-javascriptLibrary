import React from 'react';
import { Alert } from 'reactstrap';
// import Codepen from 'react-codepen';

const FunctionalComponentsDemo = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <Alert>WARNING YOU ABOUT TO LEARN SOMETHING!</Alert>
                <h1>Functional Component</h1>
                <p>function Components are the primary tool in React to build a small, modular piece of your page.</p>
                <dl>
                    <dt>Can use State</dt>
                    <dd>With the 'useState' hook, functional components can now both render a ispla to the page and update the information to be shown.</dd>
                    <dt>No 'this' Keyword</dt>
                    <dd>Older class components use 'this', functional components have not 'this' object.</dd>
                    <dt>Can use Effects</dt>
                    <dd>With the 'useEffect' hook, functional components can perform side effect with any props or state changes.</dd>
                    <dt>return()</dt>
                    <dd>Must return a single element, but this element may have nested elements inside.</dd>
                </dl>
                <h1>Functional Syntax versus Arrow Function</h1>
                <dl>
                    <dt>'this'</dt>
                    <dd>Regular functions don't handle 'this' lexically. The '=>' does. Therefor, the arrow function's 'this' always refers to the outer function.</dd>
                    <dt>Constructors</dt>
                    <dd>The arrow function cannot be used in a constructor.</dd>
                    <dt>Implicit return</dt>
                    <dd>The concise body in the arrow function has an implicit return.</dd>
                </dl>
                <hr/>
                <h1>Challenge</h1>
                <div className="challengeWrapper">
                    <HelloWorld />
                    <HelloWorldFatArrow/>
                </div>
                {/* <h1>Now for some Stoic Philosophy from White Badge!</h1>
                <Codepen user="jonny-n-b-schult" hash="bGpYwpV"></Codepen> */}
            </div>
        </div>
    )
}

export default FunctionalComponentsDemo;

const HelloWorld = function(){
    return(
        <div id="HelloWorld">
            <p>Hello World!</p>
        </div>
    )
}

const HelloWorldFatArrow = () => {
    return(
        <div id="HelloWorldFatArrow">
            <p>Hello => World!</p>
        </div>
    )
}