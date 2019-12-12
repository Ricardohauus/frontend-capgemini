import React from "react";
//import Button from "@material-ui/core/Button";
import { Button } from "reactstrap";
import AddIcon from "@material-ui/icons/Add";

export default class ButtonDev extends React.Component {
  render() {
    return (
      <div>
        <Button
          className="fas fa fa-plus"
          color="primary"
          href={this.props.href}
        >
          {" "}
          {this.props.label}
        </Button>
      </div>
    );
  }
}
