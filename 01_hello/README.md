# EXAAMPLE 01 hello example Notes


## Basic Hello World example 

* This example shows the following 

	![](images/01_hello.png)

1. a. The container where React output is rendered
   b. The lib are core libraries that are in head, 
   c. But the jsx for ReactJS components are put at end of body
   d. The document.getElementById('container') has to occur after the element parsed in DOM i.e. body
	
	```html
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Hello1</title>
		<script src="../lib/JSXTransformer.js"></script>
		<script src="../lib/react-with-addons.js"></script>
	</head>
	<body>
		<h1>Helo</h1>
		<div id="container"></div>
		<script src="hello1.jsx"  type="text/jsx"></script>
	</body>
	</html>
	```


2. hello1.jsx introduces basic component for an App page

	```javascript
	var App = React.createClass({
	  getInitialState: : function() {
	    return {
	      date:'1/1/2015'
	    },
	  render: function() {
	    return (
	      <div>
	        Hello {this.props.name} on {this.state.date}
	      </div>
	    );
	  }
	});
	React.render(<App name="Pradeep" />, document.getElementById('container'));
	```

3. Web Components - attribute passed parameters
	The core building block of React.js is to use attribute passed parameters as in following
		<App name="Pradeep" />


4. PROPS. The attribute parameters, in turn are accessed by this.props.name. 

5. STATE. You can access the state for a component. 
	{this.state.date}


6. render property of a component 
The core is to 

7. JSX-isms - here we have glossed over the JSX which allows DOM tree creation using XML with embedded javascript and styling (also as JS objects). More on this in next example.

	- JSX only handles one component at a time - so if you return multiple, wrap them in a div:
		<div> <Component1 /> <Component2 /> </div>

	- Any javascript expressions have to be escaped in braces {this.props.name}

* Debugging/Tools Tip - Look in browser console for errors. This is harder due to heavy weight of JSFiddle/JSBin, etc.

	Uncaught Error: Parse Error: Line 2: Unexpected token :
	    at http://localhost:8080/aPKJ-react-intro/01_hello/hello1.jsx:2:undefined
	getInitialState: : function() {


* Future-wise note
	- ReactDOM.render is used in more recent libraries.

	- The container can support SPA by mapping views there - look at react-router for that.
