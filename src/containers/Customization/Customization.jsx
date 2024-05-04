import { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import TabPanel from "../../components/TabPanel";

import ColorText from '../../components/ColorText';
import SlowMotionVideoRoundedIcon from "@mui/icons-material/SlowMotionVideoRounded";
import { MovieFilterRounded } from "@mui/icons-material";

const Customization = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Typography sx={styles.pageTitle} variant="h5">Customization</Typography>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Layout" id="tab-0" />
                    <Tab label="Branding" id="tab-1" />
                    <Tab label="Basic Info" id="tab-2" />
                </Tabs>
            </Box>

            <TabPanel value={value} index={0}>
                <Typography variant="h6">Video spotlight</Typography>
                <Typography variant="h7">
                    <ColorText color="neutral.normal">
                        Add a video to top of your channel
                    </ColorText>
                </Typography>
                <Box sx={styles.rowContainer}>
                    <SlowMotionVideoRoundedIcon sx={styles.rowIcon} />
                    <Box sx={styles.secondColumn}>
                        <Typography variant="h6">Video trailer for people who have not subscribed</Typography>
                        <Typography variant="h7">
                            <ColorText color="neutral.normal">
                                Share a preview on youtube
                            </ColorText>
                        </Typography>
                    </Box>
                    <Typography sx={styles.rowLink} variant="link">
                        Add
                    </Typography>
                </Box>
                <Box sx={styles.rowContainer}>
                    <MovieFilterRounded sx={styles.rowIcon} />
                    <Box sx={styles.secondColumn}>
                        <Typography variant="h6">Video trailer for people who have already subscribed</Typography>
                        <Typography variant="h7">
                            <ColorText color="neutral.normal">
                                Share a preview on youtube
                            </ColorText>
                        </Typography>
                    </Box>
                    <Typography sx={styles.rowLink} variant="link">
                        Add
                    </Typography>
                </Box>
            </TabPanel>

            <TabPanel value={value} index={1}>
                <Typography>Add something by yourself.. 2</Typography>
            </TabPanel>

            <TabPanel value={value} index={2}>
                <Typography>Add something by yourself.. 3</Typography>
            </TabPanel>
        </Box>
    );
}

const styles = {
    rowContainer: {
        width: '100%',
        maxWidth: 900,
        border: 1,
        borderColor: 'neutral.medium',
        borderRadius: 1,
        mt: 2,
        p: 2,
        display: 'flex',
        alignItems: 'flex-start',
    },
    rowIcon: {
        fontSize: 40,
        color: 'neutral.normal',
    },
    secondColumn: {
        ml: 1,
    },
    rowLink: {
        ml: 'auto',
        textTransform: 'uppercase',
    },
    pageTitle: {
        mb: 2,
    },
};

export default Customization;
