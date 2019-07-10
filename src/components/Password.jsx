import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Checkbox from "@material-ui/core/Checkbox";

class FormUserDetails extends Component {
	constructor() {
		super();
		this.state = {
			showPassword: ""
		};
	}

	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	};

	back = e => {
		e.preventDefault();
		this.props.prevStep();
	};

	handleShowPassword = (e, isShow) => {
		this.setState({
			showPassword: isShow
		});
	};

	render() {
		const { handleChange } = this.props;
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Setup your Password" />
					<div style={{ minHeight: "50vh" }}>
						<TextField
							hintText="Enter your password"
							floatingLabelText="Password"
							onChange={handleChange("password")}
							type={this.state.showPassword ? "text" : "password"}
						/>
						<br />
						<TextField
							hintText="Confirm your password"
							floatingLabelText="Confirm Password"
							onChange={handleChange("confirmPassword")}
							type={this.state.showPassword ? "text" : "password"}
						/>{" "}
						<br />
						<div style={{ marginLeft: 0 }}>
							<Checkbox color="default" onChange={this.handleShowPassword} />
							<div>Show Password</div>
						</div>
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

export default FormUserDetails;
