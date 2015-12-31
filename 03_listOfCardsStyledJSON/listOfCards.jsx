var ps = [
	{productId:1234,name:"Breadmaker 1234",price:"$123.45",image:""},
	{productId:1236,name:"Breadmaker 1235",price:"$423.45",image:""},
	{productId:1236,name:"Breadmaker 1236",price:"$623.45",image:""}
];
var styProduct = {
	border: '1px solid black'
}

//usage <Product productId:p.productId, name:p.name, price:p.price, image:p.image></Product>
var Product = React.createClass({
  render: function() {
    return (
      <div style= {styProduct} >
        <img src="this.props.image" />
        <p>{this.props.name}</p>
        <p>{this.props.price}</p>
      </div>
    );
  }
});

//usage <Product productId:p.productId, name:p.name, price:p.price, image:p.image></Product>
var ProductList = React.createClass({
  render: function() {
    return (
      <div style= {styProduct} >
        <img src="this.props.image" />
        <p>{this.props.name}</p>
        <p>{this.props.price}</p>
      </div>
    );
  }
});

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
		console.log(p);
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

React.render(<App />, document.getElementById('container'));

