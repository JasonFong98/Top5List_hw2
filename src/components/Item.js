import React from "react";

class Items extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.name,
      editActive: false,
    };
  }
  handleClick = (event) => {
    if (event.detail === 2) {
      this.handleToggleEdit(event);
    }
  };

  handleToggleEdit = (event) => {
    this.setState({
      editActive: !this.state.editActive,
    });
  };

  handleEnter = (event) => {
    if (event.code === "Enter") {
      this.handleBlur();
    }
  };

  handleUpdate = (event) => {
    this.setState({ text: event.target.value });
  };

  handleBlur = (event) => {
    let id = this.props.id;
    let textValue = this.state.text;
    this.props.editItemName(id, textValue);
    this.handleToggleEdit(event);
  };

  render() {
    const {id } = this.props;
    if (this.state.editActive) {
      return (
        <input
          id={"item-" + id}
          className="top5-item"
          type="text"
          onKeyPress={this.handleEnter}
          onBlur={this.handleBlur}
          onChange={this.handleUpdate}
          defaultValue={this.state.text} 
        />
      );
    } else {
      return (
        <div className="top5-item" id={id} onClick={this.handleClick}>
          {this.state.text}
        </div>
      );
    }
  }
}

export default Items;
