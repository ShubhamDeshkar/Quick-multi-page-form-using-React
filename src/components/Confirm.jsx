import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";

class FormUserDetails extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	};

	render() {
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Are you sure you want to confirm?" />
					<div style={{ marginTop: 30 }}>
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
