import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import React, { Component } from "react";
import Options from "./Options";
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";

export default class DataTable extends Component {
  getMuiTheme = () =>
    createMuiTheme({
      palette: {
        primary: blue,
        secondary: green
      },
      overrides: {
        MUIDataTableBodyCell: {
          root: {}
        },
        MuiIconButton: {
          sizeSmall: {
            // Adjust spacing to reach minimal touch target hitbox
            marginLeft: 2,
            marginRight: 2,
            padding: 6
          }
        }
      },
      props: {
        MuiButton: {
          size: "small"
        },
        MuiFilledInput: {
          margin: "dense"
        },
        MuiFormControl: {
          margin: "dense"
        },
        MuiFormHelperText: {
          margin: "dense"
        },
        MuiIconButton: {
          size: "small"
        },
        MuiInputBase: {
          margin: "dense"
        },
        MuiInputLabel: {
          margin: "dense"
        },
        MuiListItem: {
          dense: true
        },
        MuiOutlinedInput: {
          margin: "dense"
        },
        MuiFab: {
          size: "small"
        },
        MuiTable: {
          size: "small"
        },
        MuiTextField: {
          margin: "dense"
        },
        MuiToolbar: {
          variant: "dense"
        }
      }
    });

  render() {
    return (
      <MuiThemeProvider theme={this.getMuiTheme()}>
        <MUIDataTable
          title={this.props.title}
          data={this.props.data}
          columns={this.props.columns}
          options={Options}
        />
      </MuiThemeProvider>
    );
  }
}
