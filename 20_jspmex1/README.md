# Initial JSPM Example and Setup

## Quick Ex1 - this directory

1. CREDITS to: http://egorsmirnov.me/2015/10/11/react-and-es6-part5.html

* Global
	npm install -g jspm
	This warns: Running jspm globally, it is advisable to locally install jspm via npm install jspm --save-dev.


* In project dir # some need npm: or github: - but common packages registry simplifies
	$ jspm init
	$ jspm install jsx=npm:jspm-loader-jsx  #config.js would have jspm-loader-jsx named as jsx
	$ jspm install react react-dom
	$ jspm install css  # then can: import "./pathto/style.css!"


* index.html - has container for React DOM, and the system.js/config.js and top module app.jsx
	<div class="root"></div>

* app.jsx
	import React from 'react';
	import ReactDOM from 'react-dom';
	import CartItem from './cartItem.jsx!';

	const order = {
	    title: 'Fresh fruits package',
	    image: 'http://images.all-free-download.com/images/graphiclarge/citrus_fruit_184416.jpg',
	    initialQty: 3,
	    price: 8
	};

	ReactDOM.render(
	    <CartItem title={order.title} image={order.image} initialQty={order.initialQty} price={order.price}/>,
	    document.querySelector('.root')
	);


* cartItem.jsx
	import React from 'react';

	export default class CartItem extends React.Component {

	    static propTypes = {
	        title: React.PropTypes.string.isRequired,
	        price: React.PropTypes.number.isRequired,
	        initialQty: React.PropTypes.number
	    };

	    static defaultProps = {
	        title: 'Undefined Product',
	        price: 100,
	        initialQty: 0
	    };

	    state = {
	        qty: this.props.initialQty,
	        total: 0
	    };
	    
	    constructor(props) {
	        super(props);
	    }

	    componentWillMount() {
	        this.recalculateTotal();
	    }

	    increaseQty() {
	        this.setState({qty: this.state.qty + 1}, this.recalculateTotal);
	    }

	    decreaseQty() {
	        let newQty = this.state.qty > 0 ? this.state.qty - 1 : 0;
	        this.setState({qty: newQty}, this.recalculateTotal);
	    }

	    recalculateTotal() {
	        this.setState({total: this.state.qty * this.props.price});
	    }

	    render() {
	        return <article className="row large-4">
	            <figure className="text-center">
	                <p>
	                    <img src={this.props.image}/>
	                </p>
	                <figcaption>
	                    <h2>{this.props.title}</h2>
	                </figcaption>
	            </figure>
	            <p className="large-4 column"><strong>Quantity: {this.state.qty}</strong></p>

	            <p className="large-4 column">
	                <button onClick={this.increaseQty.bind(this)} className="button success">+</button>
	                <button onClick={this.decreaseQty.bind(this)} className="button alert">-</button>
	            </p>

	            <p className="large-4 column"><strong>Price per item:</strong> ${this.props.price}</p>

	            <h3 className="large-12 column text-center">
	                Total: ${this.state.total}
	            </h3>

	        </article>;
	    }
	}



* Run it ..
	$ http-server -p 7777
	W> http://localhost:7777/

* Production bundling
	$ jspm bundle-sfx app.jsx! app.js --skip-source-maps --minify


## Quickstart
*
	$ npm install -g jspm
	$ jspm init
	$ npm install <something from anywhere> 
	W> load system.js & config.js in your index.HTML
	  - import your entry file and relax..

## Concepts

1. packaging and modules system (via SystemJS) 
	* 
	- setup package.json, , config.js, babel as transpiler
	- jspm_packages 
		- stores dependencies from MULTIPLE sources git, npm, bower 


2. Dependencies - config.js setup
	*
	- all dependences treated equally 
	- JSPM plugins get injected in dependency order
	-  you are able to rename your packages to the name you like the most.
		$ jspm install npm:jspm-loader-jsx  #config.js would have jspm-loader-jsx named as default name
		$ jspm uninstall jspm-loader-jsx    #config.js removes this
		$ jspm install jsx=npm:jspm-loader-jsx  #config.js would have jspm-loader-jsx named as jsx
		# config.js changes .. 
		map: {  // "jspm-loader-jsx": "npm:jspm-loader-jsx@0.0.7"
		    "jsx": "npm:jspm-loader-jsx@0.0.7"
		}

* Versioning/Mgt
	> jspm CLI implements shortest-path fork reduction during installs, while ensuring targets are at their latest patch versions to reduce bugs. The version solution is created within the project configuration file, and can be checked-in to version control to lock dependencies.


2b. Precompile JSX to JS
	- In JS code just do
		import jsx   // but don't need as jspm-loader-jsx as JSPM plugin gets injected in dependency order

3. Strong ES6 Support
	* Add following to customize babel .. support all the experimental features like class properties.
	* This seems to be default .. except for stage : 0
		babelOptions: {
		    "stage": 0,
		    "optional": [
		      "runtime",
		      "optimisation.modules.system"
		    ]
		  }

4. Dynamic Module Loading top down
	- SystemJS looks at config.js and allows import of top module and its own dependenciess
	<script src="jspm_packages/system.js"></script>
	<script src="config.js"></script>
	<script> System.import('app.jsx!'); </script>

	NOTE: the ! sign in app.jsx!. This is a convention used in JSPM for loading non-JavaScript files.


5. MULTIPLE File and Module formats supported - require.js also
	https://github.com/systemjs/systemjs/blob/master/docs/module-formats.md

6. Multiple files supported all through import only
* In HTML use script system.js
	<script> System.import('app.jsx!'); </script> 
* In JS use import xxxx
	- .js is default import
	- .jsx!
	- .css!     import "./pathto/style.css!"


7. Building for production - concatenate & minify
	- JSPM understands css, js, etc and handles them specially 
	jspm bundle-sfx app.jsx! app.js --skip-source-maps --minify

	For JSPM production workflow SEE: https://github.com/jspm/jspm-cli/blob/master/docs/production-workflows.md



## Official and Resources

* JSPM.IO

* https://github.com/jspm/jspm-cli/wiki

* https://github.com/jspm


## JSPM Packages, Modules Management

* Tutes Package Management for ES6 Modules JSConf 2014 presentation introducing jspm by Guy Bedford
https://www.youtube.com/watch?v=szJjsduHBQQ

SystemJS: https://github.com/systemjs/systemjs
	Module Loaders - https://github.com/systemjs/systemjs/blob/master/docs/module-formats.md

* REGISTRY - Common JSPM names packages registry simplifies install 
	- https://github.com/jspm/registry
	https://github.com/jspm/jspm-cli/blob/master/docs/installing-packages.md

	$jspm install jquery # vs jspm install github:components/jquery

JSPM plugins https://github.com/jspm/jspm-cli/blob/master/docs/plugins.md

JSPM production workflow https://github.com/jspm/jspm-cli/blob/master/docs/production-workflows.md


## Tutorials

Getting Started official JSPM http://jspm.io/docs/getting-started.html

JavaScript Modules and Dependencies with jspm tutorial by Jack Franklin 
http://javascriptplayground.com/blog/2014/11/js-modules-jspm-systemjs/

d http://egorsmirnov.me/2015/10/11/react-and-es6-part5.html

http://www.joezimjs.com/javascript/simplifying-the-es6-workflow-with-jspm/

http://blog.developsuperpowers.com/jspm-superpowered-es6-development/

https://gitter.im/jspm/jspm

