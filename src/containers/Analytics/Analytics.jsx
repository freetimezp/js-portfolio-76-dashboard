import { useState } from "react";
import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import TabPanel from "../../components/TabPanel";
import OverviewChart from "./OverviewChart";
import TopVideoList from "./TopVideoList";
import RealtimeChart from "./RealtimeChart";
import LatestVideoCard from "../../components/LatestVideoCard";



const Analytics = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Typography sx={styles.pageTitle} variant="h5">Analytics</Typography>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Overview" id="tab-0" />
                    <Tab label="Content" id="tab-1" />
                    <Tab label="Audience" id="tab-2" />
                    <Tab label="Revenue" id="tab-3" />
                </Tabs>
            </Box>

            <TabPanel value={value} index={0}>
                <Box sx={styles.overviewContainer}>
                    <Box sx={styles.statsContainer}>
                        <Typography variant="h5">
                            Your channel got 14,721 views in the last 28 days
                        </Typography>

                        <OverviewChart />

                        <Divider sx={styles.divider} />

                        <TopVideoList />
                    </Box>

                    <Box>
                        <RealtimeChart />
                        <LatestVideoCard />
                    </Box>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Add your content 2
            </TabPanel>
            <TabPanel value={value} index={2}>
                Add your content 3

            </TabPanel>
            <TabPanel value={value} index={3}>
                Add your content 4
            </TabPanel>
        </Box>
    );
}

const styles = {
    overviewContainer: {
        display: 'grid',
        gridTemplateColumns: {
            md: '1fr',
            lg: '1fr 400px',
        },
        gap: 2,
        justifyContent: 'center',
    },
    statsContainer: {
        backgroundColor: 'neutral.light',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    pageTitle: {
        mb: 2,
    },
    divider: {
        my: 4,
    }
}

export default Analytics;
