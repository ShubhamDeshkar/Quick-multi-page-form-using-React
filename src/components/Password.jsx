import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

// import IconButton from "@material-ui/core/IconButton";
import { RemoveRedEye } from "@material-ui/icons";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
// import { Input } from "@material-ui/core";

class FormUserDetails extends Component {
	constructor() {
		super();
		this.state = {
			showPassword: false
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

	handleClickShowPassword = () => {
		this.setState({
			showPassword: !this.state.showPassword
		});
	};

	render() {
		const { values, handleChange } = this.props;
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Setup your Password" />
					<div style={{ minHeight: "50vh" }}>
						<TextField
							hintText="Enter your password"
							floatingLabelText="Password"
							onChange={handleChange("password")}
							defaultValue={values.password}
							type={this.state.showPassword ? "text" : "password"}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<RemoveRedEye
											aria-label="Toggle password visibility"
											onClick={this.handleClickShowPassword}
										>
											{values.showPassword ? <Visibility /> : <VisibilityOff />}
										</RemoveRedEye>
									</InputAdornment>
								)
							}}
						/>
						{/* <Input
						hintText="Enter your password"
						floatingLabelText="Password"
						onChange={handleChange("password")}
						defaultValue={values.password}
						type={this.state.showPassword ? "text" : "password"}
						endAdornment={
							<InputAdornment position="start">
								<IconButton
									aria-label="Toggle password visibility"
									onClick={this.handleClickShowPassword}
								>
									{values.showPassword ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
						}
					/> */}
						<br />
						<TextField
							hintText="Confirm your password"
							floatingLabelText="Confirm Password"
							onChange={handleChange("confirmPassword")}
							// defaultValue={values.confirmPassword}
							type="password"
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

export default FormUserDetails;
