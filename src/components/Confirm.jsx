import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
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
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Are you sure you want to confirm?" />
					<div style={{ marginTop: 30 }}>
						<RaisedButton
							label="Go Back"
							primary={false}
							style={styles.button}
							onClick={this.back}
						/>
						<RaisedButton
							label="Confirm"
							primary={true}
							style={styles.button}
							onClick={this.continue}
						/>
					</div>
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
