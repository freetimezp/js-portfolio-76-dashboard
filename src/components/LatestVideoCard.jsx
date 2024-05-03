import { Box, Card, CardContent, Typography } from "@mui/material";

import thumbnailImg from '../../src/assets/images/thumbnail.jpg';

const LatestVideoCard = (props) => {
    return (
        <Card {...props}>
            <CardContent>
                <Typography variant="cardTitle">
                    Latest Video Perfomance
                </Typography>

                <Box sx={styles.latestVideoContainer}>
                    <Box sx={styles.latestVideoThumbnail} component={'img'} src={thumbnailImg} />
                    <Typography sx={styles.latestVideoTitle}>
                        React JS Searchbar in 5 minutes
                    </Typography>
                </Box>

                <Typography sx={styles.latestVideoTimeLabel} variant="h7">
                    First 6 hours:
                </Typography>

                <Box sx={styles.latestVideoStatsRow}>
                    <Typography variant="h7">Views</Typography>
                    <Typography variant="h7">225</Typography>
                </Box>
                <Box sx={styles.latestVideoStatsRow}>
                    <Typography variant="h7">Watch Time</Typography>
                    <Typography variant="h7">38</Typography>
                </Box>
                <Box sx={styles.latestVideoStatsRow}>
                    <Typography variant="h7">Likes</Typography>
                    <Typography variant="h7">23</Typography>
                </Box>

                <Typography sx={styles.cardAction} variant="link">
                    Go To Video Analytics
                </Typography>
                <Typography sx={styles.cardAction} variant="link">
                    See Comments (12)
                </Typography>
            </CardContent>
        </Card>
    );
}

const styles = {
    latestVideoContainer: {
        width: '100%',
        position: 'relative'
    },
    latestVideoThumbnail: {
        width: '100%',
        mt: 1,
        filter: 'brightnes(20%)',
        display: 'block'
    },
    latestVideoTitle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1rem',
        color: 'neutral.light',
        mb: 2,
        backgroundColor: "rgba(0,0,0,.3)",
        p: 1
    },
    latestVideoTimeLabel: {
        display: 'block',
        color: 'neutral.normal',
        my: 2
    },
    latestVideoStatsRow: {
        display: 'flex',
        justifyContent: 'space-between',
        mt: 1
    },
    cardAction: {
        mt: 2,
        textTransform: "uppercase",
    },
}

export default LatestVideoCard;
