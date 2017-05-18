import React, { Component } from "react";
import { Button, FlatButton, IconButton, Divider, Highlight, Section } from "../components"
import Radium from "radium"

const details = {
  flat: {
    title: "Flat Buttons",
    description: "Buttons with no background or border"
  },
  solid: {
    title: "Solid Buttons",
    description: "Buttons with a solid background color"
  },
  outline: {
    title: "Outline Buttons",
    description: "Buttons with an outline, for Admin primarily"
  }
}

const statusNames = [
  "primary",
  "default",
  "info",
  "warning",
  "danger",
]

const bezelStyles = [
  "flat",
  "solid",
  "outline"
]

class ButtonsScreen extends Component {

  renderButtons() {
    return bezelStyles.map((bezelStyle) => {
      const detail = details[bezelStyle];

      const family = statusNames.map((statusName) => {
        return (
          <div style={{display: "flex", padding: 5}}>
            <Button
              label="Button"
              bezelStyle={bezelStyle}
              status={statusName}
            />
          </div>
        )
      })

      return (
        <div>
          <h3>{detail.title}</h3>
          <p>{detail.description}</p>
          <div style={{display: "flex"}}>
            {family}
          </div>
          <Divider />
          <div>
            <Highlight className="html">
              <Button
                label="Button"
                bezelStyle="solid"
                status="primary"
              />
            </Highlight>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <Section title="Buttons">
        {this.renderButtons()}
      </Section>
    )
  }
}

export default ButtonsScreen