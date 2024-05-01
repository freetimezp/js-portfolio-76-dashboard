import { Menu, Sidebar, useProSidebar } from "react-pro-sidebar";
import { Avatar, Box, MenuItem, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import StyleOutlinedIcon from "@mui/icons-material/StyleOutlined";
import SourceOutlinedIcon from "@mui/icons-material/SourceOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";

import avatarImage from '../assets/images/avatar.jpg';
import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
    const theme = useTheme();
    const { collapsed } = useProSidebar();

    const location = useLocation();

    return (
        <Sidebar
            style={{ height: '100%', top: 'auto' }}
            breakPoint="md"
            backgroundColor={theme.palette.neutral.light}
        >
            <Box sx={styles.avatarContainer}>
                <Avatar alt="avatar" src={avatarImage} sx={collapsed ? styles.avatarMobile : styles.avatar} />
                {!collapsed && (
                    <>
                        <Typography variant="body2" sx={styles.yourChannel}>
                            My Channel
                        </Typography>
                        <Typography variant="overline">
                            Keep Coding
                        </Typography>
                    </>
                )}
            </Box>

            <Menu>
                <MenuItem
                    component={Link}
                    active={location.pathname === "/" ? "true" : "false"}
                    to="/"
                    sx={styles.menuItem}
                >
                    <DashboardOutlinedIcon sx={collapsed ? styles.menuIconMobile : styles.menuIcon} />
                    {!collapsed && <Typography variant="body2" sx={styles.menuText}>Dashboard</Typography>}
                </MenuItem>

                <MenuItem
                    component={Link}
                    active={location.pathname === "/content" ? "true" : "false"}
                    to="/content"
                    sx={styles.menuItem}
                >
                    <StyleOutlinedIcon sx={collapsed ? styles.menuIconMobile : styles.menuIcon} />
                    {!collapsed && <Typography variant="body2" sx={styles.menuText}>Content</Typography>}
                </MenuItem>

                <MenuItem
                    component={Link}
                    active={location.pathname === "/analytics" ? "true" : "false"}
                    to="/analytics"
                    sx={styles.menuItem}
                >
                    <AnalyticsOutlinedIcon sx={collapsed ? styles.menuIconMobile : styles.menuIcon} />
                    {!collapsed && <Typography variant="body2" sx={styles.menuText}>Analytics</Typography>}
                </MenuItem>

                <MenuItem
                    component={Link}
                    active={location.pathname === "/customization" ? "true" : "false"}
                    to="/customization"
                    sx={styles.menuItem}
                >
                    <SourceOutlinedIcon sx={collapsed ? styles.menuIconMobile : styles.menuIcon} />
                    {!collapsed && <Typography variant="body2" sx={styles.menuText}>Customization</Typography>}
                </MenuItem>
            </Menu>
        </Sidebar >
    );
}

const styles = {
    menuItem: {
        display: 'flex',
        columnGap: '1rem',
        p: 2,
    },
    menuIcon: {
        fontSize: '1.5rem',
        transform: "translateX(0%)",
    },
    menuIconMobile: {
        fontSize: '2rem',
        transform: "translateX(20%)",
    },
    menuText: {
        fontSize: '1rem'
    },
    avatarContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        my: 5,
        borderBottom: "1px dashed #000",
        pb: 5,
    },
    avatar: {
        width: '100px',
        height: '100px',
        boxShadow: "0px 0px 15px rgba(0, 0, 0, .5)"
    },
    avatarMobile: {
        width: '60px',
        height: '60px',
        boxShadow: "0px 0px 15px rgba(0, 0, 0, .5)"
    },
    yourChannel: {
        mt: 1,
    }
}

export default SideNav;
