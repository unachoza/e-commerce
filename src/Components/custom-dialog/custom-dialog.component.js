import React, { Component } from 'react';
import Dialog from 'react-dialog';
import CustomButton from '../custom-button/custom-button.component';
import './custom-dialog.styles.scss';

class CustomDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDialogOpen: false,
    };
  }

  openDialog = () => this.setState({ isDialogOpen: true });

  handleClose = () => this.setState({ isDialogOpen: false });

  render() {
    return (
      <div className="container">
        <CustomButton onClick={this.openDialog}>What's My Size</CustomButton>

        {this.state.isDialogOpen && (
          <Dialog
            title="Dialog Title"
            modal={true}
            onClose={this.handleClose}
            buttons={[
              {
                text: 'Close',
                onClick: () => this.handleClose(),
              },
            ]}
          >
        <div style={{ width: "100%", flexDirection : 'column'}}>Dialog Content
            More Content. Anything goes here</div>
          </Dialog>
        )}
      </div>
    );
  }
}

export default CustomDialog;
