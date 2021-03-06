var ps = [
	{productId:1234,name:"Breadmaker 1234",price:"$123.45",image:"images/breadmaker1.jpg"},
	{productId:1236,name:"Breadmaker 1235",price:"$423.45",image:"images/breadmaker2.jpg"},
	{productId:1236,name:"Breadmaker 1236",price:"$623.45",image:"images/breadmaker3.jpg"}
];
var styProductBox = {
	border: '1px solid black',
  // height: '200px',
  width: '330px',
  margin: '0px 0px 15px 0px',
  padding: '10px',
  borderRadius: '5px'
}
var styProductImage  = {
  width: "300px",
  margin: 'auto'
}
var styProductTitle  = {
  margin: '0px 0px 5px 0px'
}
var styProductPrice  = {
  margin: '0px 0px 5px 0px',
  align: 'center',
  fontSize: 'large'
}

//usage <Product productId:p.productId, name:p.name, price:p.price, image:p.image></Product>
var Product = React.createClass({
  render: function() {
    return (
      <div style= {styProductBox} >
        <img src={this.props.image} style={styProductImage}  />
        <p style={styProductTitle} >{this.props.name} {this.props.productId}</p>
        <p style={styProductPrice} >{this.props.price}</p>
        <button onClick={this.props.onClick}>Buy</button>
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
    var that = this;
  	var pl = this.state.ps.map(function(p) {
  		console.log(p);
      	 return(<Product productId={ps[0].productId} name={p.name} price={p.price} image={p.image} 
                onClick={that.buyItem.bind(null, p)}  >
      	 	    </Product>);
  	});
      return (
        <div>
        	<input style={stySearchBox} type=text /> <button onClick={this.props.onClick}>Search</button>
        	{pl}
        </div>
      );
  }
  buyItem: function(product) {
    alert("Adding to card "+product.name);
  }
  /****
  deletePerson: function (person) {
      this.state.people.splice(this.state.people.indexOf(person), 1);
      this.setState({people: this.state.people});
  }
  ***/
});

React.render(<App />, document.getElementById('container'));

