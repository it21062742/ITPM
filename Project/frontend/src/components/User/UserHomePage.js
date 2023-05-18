import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

// Logout
const logOut = () => {
	window.localStorage.clear();
	window.location.href = "./login";
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Articlesdash() {
	const [open, setOpen] = React.useState(true);
	const toggleDrawer = () => {
		setOpen(!open);
	};

	return (
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline />
			<AppBar position="absolute">
				<Toolbar
					sx={{
						pr: "24px", // keep right padding when drawer closed
					}}
				>
					<Typography
						component="h1"
						variant="h6"
						color="inherit"
						noWrap
						sx={{ flexGrow: 1 }}
					>
						HelpMe
					</Typography>
					<IconButton color="inherit" onClick={logOut}>
						<LogoutIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Box sx={{ display: "flex" }}>
				<Box sx={{ width: "50%", p: 2 }}>
					{/* Add your first box content here */}
					<img src="image1.jpg" alt="Image 1" />
					<button>Button 1</button>
					<text>aaa</text>
				</Box>
				<Box sx={{ width: "50%", p: 2 }}>
					{/* Add your second box content here */}
					<img src="image2.jpg" alt="Image 2" />
					<button>Button 2</button>
				</Box>
			</Box>
		</ThemeProvider>
	);
}
