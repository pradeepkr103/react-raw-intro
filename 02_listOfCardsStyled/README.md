# EXAAMPLE 02 List of Cards with Styling

## We want to display a list of Products 

*
	![](images/02_listcardstyled.png)


1. The HTML wrapper is the same - all the logic is in Javascript. This is one of the beauties of React.js - you can compose the application mostly architecturally in Javascript and Web components.

		. . . in the HTML
	<div id="container"></div>

		. . . in the JSX render the App into the container
	React.render(<App />, document.getElementById('container'));



2. Raw data - for now we hardwire the data for products ..

	```javascript
	var ps = [
		{productId:1234,name:"Breadmaker 1234",price:"$123.45",image:"images/breadmaker1.jpg"},
		{productId:1236,name:"Breadmaker 1235",price:"$423.45",image:"images/breadmaker2.jpg"},
		{productId:1236,name:"Breadmaker 1236",price:"$623.45",image:"images/breadmaker3.jpg"}
	];
	```


3. The Product web component 
	- This is a simple HTML template ith styles attached. 
	- The attributes are passed as this.props.*
	- Usage <Product productId:p.productId, name:p.name, price:p.price, image:p.image></Product>

	```javascript
	var Product = React.createClass({
	  render: function() {
	    return (
	      <div style= {styProductBox} >
	        <img src={this.props.image} style={styProductImage}  />
	        <p style={styProductTitle} >{this.props.name} {this.props.productId}</p>
	        <p style={styProductPrice} >{this.props.price}</p>
	      </div>
	    );
	  }
	});
	```



4. The Top level component needs to iterate over the Raw product data to create a list.
	- Note the standard JS array.map() function is used which requires for each product p a return of JSX
	- TIP: within the JSX attributes the only thing that works is name={p.name}, note name="{p.name}" or name="p.name"
	- Note the JS string pl is really JSX which is returned from the concatanation from the this.state.ps.map()
	       This is something a bit weird and you need to get used to.
	- Later on the render() function simply uses this as a JS expression {ps}

	```javascript
	var App = React.createClass({
	  displayName: 'App',
	  getInitialState: function() {
	    return {
	      ps:ps
	      //product:{productId:1234,name:"Breadmaker 1234",price:"$123.45",image:""}
	    }
	  },
	  render: function() {
		var pl = this.state.ps.map(function(p) {
			// console.log(p);
	    	 return(<Product productId={ps[0].productId} name={p.name} price={p.price} image={p.image} >
	    	 	    </Product>);
		});
	    return (
	      <div>
	      	<p>Product List</p>
	      	{pl}
	      </div>
	    );
	  }
	});
	```



5. Now lets style the items .. A few JSX things
	- The styles are "like CSS" but need to be each a JS object.
	- The style names with - e.g. border-radius will become camel case i.e. borderRadius.
	- The properties all have to be in quotes e.g. '5px'
	- In each use of the style refer it as ..

	```javascript
	<div style= {styProductBox} >

	var styProductBox = {
		border: '1px solid black',
	  // height: '200px',
	  width: '330px',
	  margin: '0px 0px 15px 0px',
	  padding: '10px',
	  borderRadius: '5px'
	}
	```



