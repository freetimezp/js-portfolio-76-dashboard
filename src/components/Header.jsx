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
                    onClick={() => broken ? toggleSidebar() : collapseSidebar()}
                >
                    <MenuTwoToneIcon />
                </IconButton>

                <Box sx={styles.appLogo}>
                    Dashboard
                </Box>

                <Box sx={{ flexGrow: 1 }} />

                <IconButton title="Notifications" color="secondary">
                    <Badge badgeContent={14} color="primary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>

                <IconButton title="Settings" color="secondary">
                    <SettingsIcon />
                </IconButton>
                <IconButton title="Logout" color="secondary">
                    <LogoutIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

const styles = {
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
