import React, { Component } from "react";
import FormPersonalDetails from "./FormAddressDetails";
import FormUserDetails from "./FormUserDetails";
import Password from "./Password";

class Form extends Component {
	constructor() {
		super();
		this.state = {
			step: 1,
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
			addressLine1: "",
			addressLine2: "",
			city: "",
			state: "",
			zipCode: "",
			phone: "",
			dob: ""
		};
	}

	// next step
	nextStep = () => {
		const { step } = this.state;
		this.setState({
			step: step + 1
		});
	};

	// prev step
	prevStep = () => {
		const { step } = this.state;
		this.setState({
			step: step - 1
		});
	};

	// handle change
	handleChange = input => e => {
		this.setState({
			[input]: e.target.value
		});
	};

	render() {
		const { step } = this.state;
		const {
			firstName,
			lastName,
			email,
			password,
			confirmPassword,
			addressLine1,
			addressLine2,
			city,
			state,
			zipCode,
			phone,
			dob
		} = this.state;

		const values = {
			firstName,
			lastName,
			email,
			password,
			confirmPassword,
			addressLine1,
			addressLine2,
			city,
			state,
			zipCode,
			phone,
			dob
		};

		switch (step) {
			case 1:
				return (
					<FormUserDetails
						nextStep={this.nextStep}
						handleChange={this.handleChange}
						values={values}
					/>
				);
			case 2:
				return (
					<FormPersonalDetails
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						handleChange={this.handleChange}
						values={values}
					/>
				);
			case 3:
				return (
					<Password
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						handleChange={this.handleChange}
						values={values}
					/>
				);
			case 4:
				return <h1>Success!</h1>;
			default:
		}
	}
}

export default Form;
