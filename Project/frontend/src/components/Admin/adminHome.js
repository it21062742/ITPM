import React, { Component, useEffect, useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useRef } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
export default function AdminHome({ userData }) {
	//setting state
	const [data, setData] = useState([]);
	const [limit, setLimit] = useState(5);
	const [pageCount, setPageCount] = useState(1);
	const currentPage = useRef();

	useEffect(() => {
		currentPage.current = 1;
		// getAllUser();
		getPaginatedUsers();
	}, []);

	//fetching all user
	const getAllUser = () => {
		fetch("http://localhost:5000/getAllUser", {
			method: "GET",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data, "userData");
				setData(data.data);
			});
	};

	//logout
	const logOut = () => {
		window.localStorage.clear();
		window.location.href = "./login";
	};

	//deleting user
	const deleteUser = (id, name) => {
		if (window.confirm(`Are you sure you want to delete ${name}`)) {
			fetch("http://localhost:5000/deleteUser", {
				method: "POST",
				crossDomain: true,
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
					"Access-Control-Allow-Origin": "*",
				},
				body: JSON.stringify({
					userid: id,
				}),
			})
				.then((res) => res.json())
				.then((data) => {
					alert(data.data);
					getAllUser();
				});
		} else {
		}
	};

	//pagination
	function handlePageClick(e) {
		console.log(e);
		currentPage.current = e.selected + 1;
		getPaginatedUsers();
	}
	function changeLimit() {
		currentPage.current = 1;
		getPaginatedUsers();
	}

	function getPaginatedUsers() {
		fetch(
			`http://localhost:5000/paginatedUsers?page=${currentPage.current}&limit=${limit}`,
			{
				method: "GET",
			}
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data, "userData");
				setPageCount(data.pageCount);
				setData(data.result);
			});
	}

	return (
		<>
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
			<div className="auth-inner" style={{ width: "auto" }}>
				<h3 style={{ textAlign: "center" }}>Welcom Admin</h3>
				<table>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>User Type</th>
						<th>Delete</th>
					</tr>
					{data.map((i) => {
						return (
							<tr>
								<td>{i.fname}</td>
								<td>{i.email}</td>
								<td>{i.userType}</td>
								<td>
									<FontAwesomeIcon
										icon={faTrash}
										onClick={() =>
											deleteUser(i._id, i.fname)
										}
									/>
								</td>
							</tr>
						);
					})}
				</table>
			</div>
		</>
	);
}
