import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const cards = [
	{
		id: 1,
		image: "https://cdn.dribbble.com/users/2424774/screenshots/14408700/media/51ae6714e92315e17839d1cc53a20e19.jpg?compress=1&resize=400x300&vertical=top",
		buttonText: "Expense Tracker",
		buttonLink: "/home",
	},
	{
		id: 2,
		image: "https://img.freepik.com/free-vector/calculator-concept-illustration_114360-1239.jpg?w=2000",
		buttonText: "Purchase High Value Items",
		buttonLink: "/loancal",
	},
	{
		id: 3,
		image: "https://img.freepik.com/free-vector/online-article-concept-illustration_114360-5321.jpg?w=2000",
		buttonText: "Articles",
		buttonLink: "/Articles",
	},
];

const theme = createTheme();

export default function Album() {
	const handleViewClick = (buttonLink) => {
		window.location.href = buttonLink;
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppBar position="relative">
				<Toolbar>
					<Typography variant="h8" color="inherit" noWrap>
						HelpMe
					</Typography>
				</Toolbar>
			</AppBar>
			<main>
				{/* Hero unit */}
				<Box
					sx={{
						bgcolor: "background.paper",
						pt: 4,
						pb: 8,
					}}
				>
					<Container maxWidth="sm">
						<Typography
							component="h1"
							variant="h2"
							align="center"
							color="text.primary"
							gutterBottom
						>
							Welcome to HelpMe
						</Typography>
					</Container>
				</Box>
				<Container sx={{ py: 1 }}>
					{/* End hero unit */}
					<Grid container spacing={2}>
						{cards.map((card) => (
							<Grid item key={card.id} md={4}>
								<Card
									sx={{
										height: "100%",
										display: "flex",
										flexDirection: "column",
									}}
								>
									<CardMedia
										component="img"
										image={card.image}
										alt="Card image"
									/>

									<CardContent sx={{ flexGrow: 1 }}>
										<Typography gutterBottom variant="h5">
											{card.title}
										</Typography>
									</CardContent>
									<CardActions>
										<Button
											fullWidth
											onClick={() =>
												handleViewClick(card.buttonLink)
											}
										>
											{card.buttonText}
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</main>
		</ThemeProvider>
	);
}
