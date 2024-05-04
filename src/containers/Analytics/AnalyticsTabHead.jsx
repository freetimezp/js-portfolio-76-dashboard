/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Button, Typography } from "@mui/material";


const AnalyticsTabHead = ({ title, value, icon, subtitle, children, onClick }) => {
    return (
        <Button onClick={onClick} sx={styles.container}>
            <Typography sx={styles.tabTitle}>
                {title}
            </Typography>

            <Box sx={styles.tabValueRow}>
                <Typography sx={styles.tabValue}>
                    {value}
                </Typography>
                {icon}
            </Box>

            <Typography sx={styles.tabSubTitle}>
                {subtitle}
            </Typography>

            {children}
        </Button>
    );
}

const styles = {
    tabSubTitle: {
        fontSize: '0.6rem',
        fontStyle: 'italic',
        textTransform: 'lowercase',
        display: {
            xs: 'none',
            md: 'inline',
        },
    },
    tabValue: {
        fontSize: {
            xs: '1rem',
            md: '1.5rem'
        },
        color: 'neutral.main',
        mr: 1,
    },
    tabValueRow: {
        display: 'flex',
        alignItems: 'center',
    },
    tabTitle: {
        fontSize: '0.8rem',
        fontWeight: 500,
    },
    container: {
        display: 'flex',
        alignSelf: 'center',
        flexDirection: 'column',
        color: 'neutral.normal',
        textTransform: 'capitalize',
        py: 2,
        border: 1,
        borderColor: 'neutral.medium',
        flexGrow: 1,
    },
}

export default AnalyticsTabHead;
