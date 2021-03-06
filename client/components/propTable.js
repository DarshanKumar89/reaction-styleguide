import React, { Component } from "react";
import { Select, Switch, TextField } from "./";
import showdown from "showdown";

const converter = new showdown.Converter();

class PropTable extends Component {

  handleSelectChange = (value, name) => {
    this.props.onPropChange(value, name)
  }

  handleSwitchChange = (event, value, name) => {
    this.props.onPropChange(value, name)
  }

  handleTextChange = (event, value, name) => {
    this.props.onPropChange(value, name)
  }

  renderControl(property) {
    const { control } = property;

    if (control) {
      const value = this.props.exampleProps[property.name];


      if (control.type === "text") {
        return (
          <TextField
            value={value}
            name={property.name}
            onChange={this.handleTextChange}
          />
        )
      }

      if (control.type === "select") {
        return (
          <Select
            name={property.name}
            onChange={this.handleSelectChange}
            options={control.options}
            value={this.props.exampleProps[property.name]}
          />
        )
      }

      if (control.type === "switch") {
        return (
          <Switch
            checked={value}
            name={property.name}
            onChange={this.handleSwitchChange}
          />
        )
      }
    }

    return null;
  }

  createMarkup(text) {
    return {
      __html: converter.makeHtml(text)
    }
  }

  renderRows() {
    if (Array.isArray(this.props.componentProps)) {
      return this.props.componentProps.map((prop, index) => {
        return (
          <tr key={index}>
            <td className="sg-prop-name">{prop.name}</td>
            <td>{prop.type}</td>
            <td><div dangerouslySetInnerHTML={this.createMarkup(prop.description)} /></td>
            <td>{this.renderControl(prop)}</td>
          </tr>
        )
      });
    }

    return null;
  }

  render() {
    return (
      <div className="sg-proptable">
        <h3>{"Properties"}</h3>
        <table className="table sg-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default PropTable;
