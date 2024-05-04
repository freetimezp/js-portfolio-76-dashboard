/* eslint-disable no-unused-vars */
import { forwardRef, useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import AnalyticsTabHead from "./AnalyticsTabHead";

import { Line } from 'react-chartjs-2';

import ArrowDropDownCircleSharpIcon from "@mui/icons-material/ArrowDropDownCircleSharp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TabPanel from "../../components/TabPanel";

import { getMainChartData, mainChartOptions } from "./ChartConfig";

const ViewsTabHead = forwardRef((props, ref) => (
    <AnalyticsTabHead {...props} title="Views"
        icon={<ArrowDropDownCircleSharpIcon />}
        value="21.4K"
        subtitle={'700 less than usual'}
    />
));
ViewsTabHead.displayName = 'ViewsTabHead';

const WatchTimeTabHead = forwardRef((props, ref) => (
    <AnalyticsTabHead {...props} title="Watch Time"
        icon={<ArrowDropDownCircleSharpIcon color="green" sx={{ transform: 'rotate(180deg)' }} />}
        value="762"
        subtitle={'14 more than usual'}
    />
));
WatchTimeTabHead.displayName = 'WatchTimeTabHead';

const SubscribersTabHead = forwardRef((props, ref) => (
    <AnalyticsTabHead {...props} title="Subscribers"
        icon={<CheckCircleIcon color="green" />}
        value="+21"
        subtitle={'2 more than usual'}
    />
));
SubscribersTabHead.displayName = 'SubscribersTabHead';

const RevenueTabHead = forwardRef((props, ref) => (
    <AnalyticsTabHead {...props} title="Revenue"
        icon={<ArrowDropDownCircleSharpIcon color="green" sx={{ transform: 'rotate(180deg)' }} />}
        value="$354.40"
        subtitle={'keep working for best result..'}
    />
));
RevenueTabHead.displayName = 'RevenueTabHead';

const OverviewChart = () => {
    const [value, setValue] = useState(0);

    const handleChange = (_event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={styles.container}>
            <Tabs value={value} onChange={handleChange}>
                <Tab component={ViewsTabHead} id="tab-0" />
                <Tab component={WatchTimeTabHead} id="tab-1" />
                <Tab component={SubscribersTabHead} id="tab-2" />
                <Tab component={RevenueTabHead} id="tab-3" />
            </Tabs>

            <TabPanel value={value} index={0} mt={0}>
                <Box sx={styles.mainChart}>
                    <Line options={mainChartOptions} data={getMainChartData()} />
                </Box>
            </TabPanel>

            <TabPanel value={value} index={1} mt={0}>
                <Box sx={styles.mainChart}>
                    <Line options={mainChartOptions} data={getMainChartData()} />
                </Box>
            </TabPanel>

            <TabPanel value={value} index={2} mt={0}>
                <Box sx={styles.mainChart}>
                    <Line options={mainChartOptions} data={getMainChartData()} />
                </Box>
            </TabPanel>

            <TabPanel value={value} index={3} mt={0}>
                <Box sx={styles.mainChart}>
                    <Line options={mainChartOptions} data={getMainChartData()} />
                </Box>
            </TabPanel>
        </Box>
    );
}

const styles = {
    container: {
        mt: 4,
        width: '100%',
    },
    mainChart: {
        height: 350,
        border: 1,
        borderColor: 'neutral.medium',
        pt: 4,
        borderTop: 'none',
        borderRadius: 1,
    }
};

export default OverviewChart;
