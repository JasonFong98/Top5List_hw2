import React from "react";
import Item from "./Item";

export default class Workspace extends React.Component {


    render() {
        const {currentList, editItemName, onStartDrag, onDropped} = this.props;
        if(currentList == null){
        return (
            <div id="top5-workspace">
                <div id="workspace-edit">
                    <div id="edit-numbering">
                        <div className="item-number">1.</div>
                        <div className="item-number">2.</div>
                        <div className="item-number">3.</div>
                        <div className="item-number">4.</div>
                        <div className="item-number">5.</div>
                    </div>
                </div>
            </div>
        )}
        else{
            return(
                <div id="top5-workspace">
                <div id="workspace-edit">
                    <div id="edit-numbering">
                        <div className="item-number">1.</div>
                        <div className="item-number">2.</div>
                        <div className="item-number">3.</div>
                        <div className="item-number">4.</div>
                        <div className="item-number">5.</div>
                    </div>
                    <div id="edit-items" onDrop={onDropped} onDragStart={onStartDrag}>
                        {console.log(currentList.items)}
                        {currentList.items.map((name, id) => (
                            <Item
                                name={name}
                                key={currentList.items[id]+id} 
                                id={id}
                                editItemName = {editItemName}
                            />
                        ))}
                    </div>
                </div>
            </div>
            )
        }
    }
}