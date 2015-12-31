var App = React.createClass({
  getInitialState: function() {
    return {
      date:'1/1/2015'
    }
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
