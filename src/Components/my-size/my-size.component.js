import React, { Component } from 'react';
import './my-size.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import CustomDialog from '../custom-dialog/custom-dialog.component'


const dialogContent = {
  title: "We help you find the right size", 
  content: "We calculate the perfect fit based on your unique measurements"
}
class MySize extends Component {
  constructor() {
    super();
    this.state = {
      height: null,
      weight: null,
      preference: null,
    };
  }

  handleChange = () => {
    console.log('clicked');
  };
  render() {
    const { handleChange } = this;
    return (
      <div>
        <div className="mysize-title">
          <div>MY SIZE</div>
      
       <CustomDialog dialogContent={dialogContent}>
            <div className="uclw-form">
              
       <div>MEASUREMENTS</div>
          <FormInput type="text" label="Height" value="" onChange={handleChange} label="height" required />
          <FormInput type="text" label="weigth" value="" onChange={handleChange} label="Weight" required />
          <FormInput type="text" label="Preference" value="" onChange={handleChange} label="Preference" required />
        </div>
      </CustomDialog>
      </div>
      
        {/* // onclick to model open to size "quiz" */}
      
      </div>
    );
  }
}

export default MySize;

/* <img
      src="https://static.zara.net/stdstatic/1.142.1-b.3/images/size-recommend.svg"
      classlabel="size-recommend-icon _size-recommend-icon"
      alt="Find Size"
    /> */
