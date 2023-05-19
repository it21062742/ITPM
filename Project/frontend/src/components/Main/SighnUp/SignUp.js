/**
 * The above function is a React component that renders a sign-up form with fields for first name, last
 * name, email, password, and a checkbox for receiving promotional emails.
 * @param props - The `props` parameter in the `Copyright` function is an object that contains any
 * props passed down to the component when it is used. In this case, it is used to pass down the
 * `variant`, `color`, and `align` props to the `Typography` component.
 * @returns The code is exporting a functional component called `SignUp` which returns a form for user
 * sign up. The form includes fields for first name, last name, email, password, and a checkbox for
 * receiving promotional emails. The form also includes a submit button and a link to the login page.
 * The component is wrapped in a `ThemeProvider` and includes some MUI components such as `Avatar`,
 * `Button
 */
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { Radio } from "@mui/material";

function Copyright(props) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{"Copyright © "}
			<Link color="inherit" href="http://localhost:3000">
				HelpMe
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const theme = createTheme();

export default function SignUp() {
	const [fname, setFname] = useState("");
	const [lname, setLname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [userType, setUserType] = useState("");
	const [secretKey, setSecretKey] = useState("");

	const handleSubmit = (e) => {
		if (userType == "Admin" && secretKey != "1234") {
			e.preventDefault();
			alert("Invalid Admin");
		} else {
			e.preventDefault();
			if (email === "" || password === "") {
				e.preventDefault();
				alert("Please check the email address and password");
			} else {
				e.preventDefault();
			}

			console.log(fname, lname, email, password);
			fetch("http://localhost:5000/register", {
				method: "POST",
				crossDomain: true,
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
					"Access-Control-Allow-Origin": "*",
				},
				body: JSON.stringify({
					fname,
					email,
					lname,
					password,
					userType,
				}),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data, "userRegister");
					if (data.status == "ok") {
						alert("Registration Successful");
					} else {
						alert("Something went wrong");
					}
				});
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign up
					</Typography>
					<Box
						component="form"
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 3 }}
					>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									autoComplete="given-name"
									name="firstName"
									required
									fullWidth
									id="firstName"
									label="First Name"
									autoFocus
									onChange={(e) => setFname(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id="lastName"
									label="Last Name"
									name="lastName"
									autoComplete="family-name"
									onChange={(e) => setLname(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name="email"
									label="email"
									type="email"
									id="email"
									autoComplete="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="new-password"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
							</Grid>
							<Grid item xs={12}>
								<FormControlLabel
									control={
										<Radio
											value="allowExtraEmails"
											color="primary"
										/>
									}
									label="I want to receive inspiration, marketing promotions and updates via email."
								/>
							</Grid>
						</Grid>
						<Grid></Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign Up
						</Button>
						<Grid container justifyContent="flex-end">
							<Grid item>
								<Link href="/login" variant="body2">
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Copyright sx={{ mt: 5 }} />
			</Container>
		</ThemeProvider>
	);
}
