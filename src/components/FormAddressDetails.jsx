import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class FormPersonalDetails extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	};

	back = e => {
		e.preventDefault();
		this.props.prevStep();
	};

	render() {
		const { values, handleChange } = this.props;
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Enter Address Details" />
					<div style={{ minHeight: "50vh" }}>
						<TextField
							hintText="Enter address line 1"
							floatingLabelText="Address Line 1"
							onChange={handleChange("addressLine1")}
							defaultValue={values.addressLine1}
						/>{" "}
						<br />
						<TextField
							hintText="Enter address line 2"
							floatingLabelText="Address Line 2"
							onChange={handleChange("addressLine2")}
							defaultValue={values.addressLine2}
						/>{" "}
						<br />
						<TextField
							hintText="Enter city"
							floatingLabelText="City"
							onChange={handleChange("city")}
							defaultValue={values.city}
						/>{" "}
						<br />
						<TextField
							hintText="Enter your state"
							floatingLabelText="State"
							onChange={handleChange("state")}
							defaultValue={values.state}
						/>{" "}
						<br />
						<TextField
							hintText="Enter your zipcode"
							floatingLabelText="Zipcode"
							onChange={handleChange("zipCode")}
							defaultValue={values.zipCode}
						/>{" "}
						<br />
					</div>
					<RaisedButton
						label="Back"
						style={styles.button}
						onClick={this.back}
					/>
					<RaisedButton
						label="Continue"
						primary={true}
						style={styles.button}
						onClick={this.continue}
					/>
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}

const styles = {
	button: {
		margin: 15
	}
};

export default FormPersonalDetails;
