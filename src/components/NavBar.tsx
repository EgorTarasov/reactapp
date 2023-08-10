import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import CircularProgressWithLabel from "./CircularProgressWithLabel";
import { Stack } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { NavLink, useNavigate } from "react-router-dom";
import { getUser, logout } from "../lib/api";

export default function NavBar() {
    const navigate = useNavigate();
    const navLinks = [
        ["Вселенная", "/"],
        ["Генератор заданий", "/task"],
        ["Активность", "/activity"],
    ];
    const [userExperience, setUserExperience] = React.useState(0);
    const [userCoins, setUserCoins] = React.useState(0);

    // set UserExperience and UserCoins from server
    React.useEffect(() => {
        const user = getUser();

        console.log(`data: ${user?.experience} ${user?.coins}`);

        setUserExperience(user?.experience);
        setUserCoins(user?.coins);
    }, []);

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null,
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        // make AppBar fixed and add some styles such as background color white

        <AppBar position="static" color="inherit">
            <Container maxWidth="xl" sx={{}}>
                <Toolbar disableGutters>
                    <AdbIcon
                        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        LOGO
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        ></Menu>
                    </Box>
                    <AdbIcon
                        sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        <Stack direction={"row"}>
                            {navLinks.map(([name, link]) => {
                                console.log(name, link);
                                return (
                                    <NavLink
                                        to={link}
                                        key={name}
                                        style={({ isActive }) => {
                                            return isActive
                                                ? { color: "black" }
                                                : { color: "gray" };
                                        }}
                                    >
                                        <Button
                                            sx={{
                                                color: "inherit",
                                                textDecoration: "none",
                                            }}
                                            onClick={() => navigate(link[1])}
                                        >
                                            {name}
                                        </Button>
                                    </NavLink>
                                );
                            })}
                        </Stack>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        {/* logout button */}
                        <Button
                            variant="outlined"
                            sx={{
                                color: "inherit",
                                borderColor: "inherit",
                                textDecoration: "none",
                            }}
                            onClick={() => {
                                logout();
                                navigate("/auth");
                            }}
                        >
                            Выйти
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <Avatar
                                alt="Remy Sharp"
                                src="/static/images/avatar/2.jpg"
                            />
                        </Tooltip>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Typography> {userCoins}</Typography>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <CircularProgressWithLabel value={userExperience} />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
