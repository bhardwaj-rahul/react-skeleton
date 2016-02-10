var React = require("react");
var ListItem = require("./ListItem.jsx");
var data = [{id:"1",text:"Rahul"},{id:"2",text:"Ashu"}];
var List = React.createClass({
  render:function(){


            var listItems = data.map(function(item){
              return <ListItem key={item.id} text = {item.text}></ListItem>
            });

        return( <ol>{listItems}</ol>);
  }
});

module.exports = List;
