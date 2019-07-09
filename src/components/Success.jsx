import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";

class FormUserDetails extends Component {
	startAgain = input => {
		this.props.reset();
	};

	render() {
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Thank You!" />
					<div style={{ marginTop: 30 }}>
						<h1>
							Thank you for your input. <br />
							This was just a demo Form created using Material UI <br />
						</h1>
						<h2>Don't worry we did not save any information</h2>
						<a href="www.materialui.com">Material UI</a>
						<RaisedButton
							label="Start Again"
							primary={true}
							style={styles.button}
							onClick={this.startAgain}
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
