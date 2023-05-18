import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import CalculateIcon from "@mui/icons-material/Calculate";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CarRentalIcon from "@mui/icons-material/CarRental";
import NewspaperIcon from "@mui/icons-material/Newspaper";

import { Link } from "react-router-dom";

export const mainListItems = (
	<React.Fragment>
		<Link
			to="/LoanCal"
			style={{ textDecoration: "none", color: "inherit" }}
		>
			<ListItemButton>
				<ListItemIcon>
					<AccountBalanceIcon />
				</ListItemIcon>
				<ListItemText primary="Loan calculate" />
			</ListItemButton>
		</Link>
		<Link
			to="/LeaseCal"
			style={{ textDecoration: "none", color: "inherit" }}
		>
			<ListItemButton>
				<ListItemIcon>
					<CarRentalIcon />
				</ListItemIcon>
				<ListItemText primary="Lease calculate" />
			</ListItemButton>
		</Link>
		<Link to="/EduCal" style={{ textDecoration: "none", color: "inherit" }}>
			<ListItemButton>
				<ListItemIcon>
					<CalculateIcon />
				</ListItemIcon>
				<ListItemText primary="Education loan calculator" />
			</ListItemButton>
		</Link>
		<Link to="/1" style={{ textDecoration: "none", color: "inherit" }}>
			<ListItemButton>
				<ListItemIcon>
					<NewspaperIcon />
				</ListItemIcon>
				<ListItemText primary="Articles" />
			</ListItemButton>
		</Link>
	</React.Fragment>
);
