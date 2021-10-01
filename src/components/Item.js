import React from 'react';

class Items extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            text: this.props.name,
            editActive: false,
        }
    }

    render() { 
        const {name, id} = this.props;
        if(this.state.editActive){
            return( <input id={"item-" + name}/>);
        }else{
            return( <div className="top5-item" id={id}>{name}</div>);
        }
    }
}
 
export default Items;