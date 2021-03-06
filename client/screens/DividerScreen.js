import React, { Component } from "react";
import { Divider, Section, ExampleBlock } from "../components";
import * as PTD from "../../lib/propTypeDefinitions";

const componentProps = [
  PTD.i18nKeyLabel,
  PTD.label,
];

class DividerScreen extends Component {
  render() {
    return (
      <Section title="Divider">
        <Section>
          <Divider />
          <Divider label="Text In Middle" />
        </Section>


        <ExampleBlock
          componentProps={componentProps}
          importStatement={{
            named: ["Divider"],
            path: "core/ui/client/components",
            source: "/imports/plugins/core/ui/client/components/divider/divider.js"
          }}
        >
          <Divider />
        </ExampleBlock>
      </Section>
    )
  }
}

export default DividerScreen;
