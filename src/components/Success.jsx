import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import { grey, green } from "@material-ui/core/colors";

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
						<h1 style={{ color: "grey" }}>
							Thank you for your input. <br />
							This was just a demo Form created using Material UI <br />
						</h1>
						<h2 style={{ fontWeight: "normal", color: "grey" }}>
							Don't worry we did not save any information
						</h2>
						<a href="www.materialui.com">Check Material UI website</a> <br />
						<div style={{ marginTop: 30, marginBottom: 20 }}>
							Check the <code>CODE</code> for this Form on GitHub{" "}
							<a
								href="https://github.com/ShubhamDeshkar/Quick-multi-page-form-using-React"
								target="_blank"
								rel="noopener noreferrer"
							>
								here
							</a>
						</div>
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
