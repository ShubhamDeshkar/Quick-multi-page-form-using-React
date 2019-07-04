import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class FormUserDetails extends Component {
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
					<AppBar title="Enter User Details" />
					{/* <TextField
						hintText="Enter your password"
						floatingLabelText="Password"
						onChange={handleChange("password")}
						defaultValue={values.password}
                    /> */}
					<TextField
						hintText="Enter your password"
						floatingLabelText="Password"
						onChange={handleChange("password")}
						// defaultValue={values.password}
						type="password"
					/>{" "}
					<br />
					<TextField
						hintText="Confirm your password"
						floatingLabelText="Password"
						onChange={handleChange("password")}
						// defaultValue={values.confirmPassword}
						type="password"
					/>{" "}
					<br />
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

export default FormUserDetails;
