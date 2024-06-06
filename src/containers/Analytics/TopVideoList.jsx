import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

import video1Img from "../../assets/images/video-1.jpg";
import video2Img from "../../assets/images/video-2.jpg";
import video3Img from "../../assets/images/video-3.jpg";

const rows = [
    {
        thumbnail: video1Img,
        name: 'Title 1',
        averageViewDuration: '2:25 (41.00%)',
        views: 2567
    },
    {
        thumbnail: video2Img,
        name: 'Title 2',
        averageViewDuration: '17:45 (27.05%)',
        views: 1541
    },
    {
        thumbnail: video3Img,
        name: 'Title 3',
        averageViewDuration: '31:40 (20.41%)',
        views: 3528
    },
    {
        thumbnail: video1Img,
        name: 'Title 4',
        averageViewDuration: '07:45 (12.42%)',
        views: 2857
    },
    {
        thumbnail: video2Img,
        name: 'Title 5',
        averageViewDuration: '41:00 (37.95%)',
        views: 9852
    },
    {
        thumbnail: video3Img,
        name: 'Title 6',
        averageViewDuration: '12:10 (35.75%)',
        views: 2158
    }
];

const TopVideoList = () => {
    return (
        <Box sx={styles.container}>
            <Typography variant="h6">Your top content in this period</Typography>

            <TableContainer sx={styles.tableContainer} component={Paper}>
                <Table>
                    <TableHead sx={styles.tableRowHead}>
                        <TableRow>
                            <TableCell>Content</TableCell>
                            <TableCell align="right">Average view duration</TableCell>
                            <TableCell align="right">Views</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.name} sx={styles.tableRow}>
                                <TableCell component={"th"} sx={styles.contentCell}>
                                    <Box sx={styles.videoThumbnail} component="img" src={row.thumbnail} />
                                </TableCell>
                                <TableCell align="right">{row.averageViewDuration}</TableCell>
                                <TableCell align="right">{row.views}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

const styles = {
    tableRowHead: {
        backgroundColor: "rgba(0,0,0,.11)",
        boxShadow: "0 0 5px rgba(0,0,0,.11)",
    },
    tableRow: {
        "&:hover": {
            backgroundColor: "rgba(0,0,0,.1)",
        }
    },
    container: {
        mt: 4,
        width: '100%',
        textAlign: 'center',
    },
    tableContainer: {
        mt: 8,
    },
    contentCell: {
        display: 'flex',
        alignItems: 'center',
    },
    videoThumbnail: {
        width: '100%',
        maxWidth: 100,
        mr: 1,
    }
};

export default TopVideoList;
