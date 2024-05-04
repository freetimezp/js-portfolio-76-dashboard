import { Box, Card, CardContent, Divider, Typography } from "@mui/material";

import Circleicon from "@mui/icons-material/Circle";
import ColorText from '../../components/ColorText';
import { Bar } from "react-chartjs-2";
import { realtimeChartData, realtimeChartOptions } from "./ChartConfig";

const RealtimeChart = () => {
    return (
        <Card sx={styles.realtimeStatsCard}>
            <CardContent>
                <Box>
                    <Typography variant={"cardTitle"}>Realtime</Typography>

                    <Box sx={styles.updateLiveRow}>
                        <Circleicon sx={styles.dotIcon} />

                        <Typography variant="h7">
                            <ColorText color="neutral.normal">Updating Live</ColorText>
                        </Typography>
                    </Box>

                    <Divider sx={styles.divider} />

                    <Typography sx={styles.valueText}>4,144</Typography>
                    <Typography variant="h7">
                        <ColorText color="neutral.normal">Subscribers</ColorText>
                    </Typography>

                    <Divider sx={styles.divider} />

                    <Typography sx={styles.valueText}>1,786</Typography>
                    <Typography variant="h7">
                        <ColorText color="neutral.normal">Views Last 72 hours</ColorText>
                    </Typography>

                    <Box sx={styles.realtimeChart}>
                        <Bar options={realtimeChartOptions} data={realtimeChartData} />
                    </Box>

                    <Typography variant="link">View More</Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

const styles = {
    realtimeStatsCard: {
        mb: 2,
    },
    updateLiveRow: {
        display: 'flex',
        alignItems: 'center',
    },
    dotIcon: {
        width: 10,
        color: 'primary.normal',
        mr: 1,
    },
    divider: {
        my: 2,
    },
    valueText: {
        fontSize: '1.3rem',
        fontWeight: 400,
    },
    realtimeChart: {
        height: 70,
        mt: 4,
    }
};

export default RealtimeChart;
