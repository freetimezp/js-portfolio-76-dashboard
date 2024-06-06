import { AppBar, Badge, Box, IconButton, Toolbar } from "@mui/material";
import { useProSidebar } from "react-pro-sidebar";

import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = () => {
    const { collapseSidebar, toggleSidebar, broken } = useProSidebar();

    return (
        <AppBar sx={styles.appBar} position="sticky">
            <Toolbar>
                <IconButton
                    color="secondary"
                    sx={styles.headerIcon}
                    onClick={() => broken ? toggleSidebar() : collapseSidebar()}
                >
                    <MenuTwoToneIcon />
                </IconButton>

                <Box sx={styles.appLogo}>
                    Dashboard
                </Box>

                <Box sx={{ flexGrow: 1 }} />

                <IconButton title="Notifications" color="secondary" sx={styles.headerIcon}>
                    <Badge badgeContent={14} color="primary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>

                <IconButton title="Settings" color="secondary" sx={styles.headerIcon}>
                    <SettingsIcon />
                </IconButton>
                <IconButton title="Logout" color="secondary" sx={styles.headerIcon}>
                    <LogoutIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

const styles = {
    headerIcon: {
        "&:hover": {
            color: "#000",
        }
    },
    appBar: {
        bgcolor: 'neutral.main'
    },
    appLogo: {
        borderRadius: 2,
        width: 80,
        ml: 2,
        cursor: 'pointer',
    }
};

export default Header;
