/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import TabPanel from "../../components/TabPanel";

import { DataGrid } from "@mui/x-data-grid";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";

const columns = [
    {
        field: 'thumbnail',
        headerName: 'Video',
        minWidth: 500,
        flex: 4,
        renderCell: (params) => {
            return (
                <Box sx={styles.videoColumn}>
                    <Box component="img" src={params.row.thumbnail} sx={styles.videoThumbnail} />

                    <Box sx={styles.videoDetails}>
                        <Typography sx={styles.videoTitle}>
                            Must Know JavaScript Interview Questions | Part 1
                        </Typography>
                        <Typography sx={styles.videoDescription}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
                            optio earum, eveniet ipsa excepturi nemo, in asperiores minima
                            cumque commodi totam aliquam fugiat accusantium nobis iure ab.
                            Debitis, dicta dolorem hic nemo repudiandae dolore esse nulla
                            sapiente expedita vero distinctio repellat fugiat ex minima ipsum.
                        </Typography>
                    </Box>
                </Box>
            )
        }
    },
    {
        field: 'visibility',
        headerName: 'Visibility',
        minWidth: 170,
        flex: 2,
        renderCell: (params) => {
            return (
                <Box sx={styles.iconColumn} style={{ height: '100%' }}>
                    <VisibilityOutlinedIcon />
                    <Typography sx={styles.iconColumnText}>
                        {params.row.visibility}
                    </Typography>
                </Box>
            )
        }
    },
    {
        field: 'monetization',
        headerName: 'Monetization',
        minWidth: 170,
        flex: 2,
        renderCell: (params) => {
            return (
                <Box sx={styles.iconColumn} style={{ height: '100%' }}>
                    <AttachMoneyOutlinedIcon />
                    <Typography sx={styles.iconColumnText}>
                        {params.row.monetization}
                    </Typography>
                </Box>
            )
        }
    },
    {
        field: 'views',
        headerName: 'Views',
        minWidth: 170,
        flex: 1,
    },
    {
        field: 'comments',
        headerName: 'Comments',
        minWidth: 170,
        flex: 1,
    },
]

const videos = [
    {
        id: 1,
        thumbnail: 'src/assets/images/idea.jpg',
        visibility: 'Public',
        monetization: 'On',
        views: 100,
        comments: 12,
    },
    {
        id: 2,
        thumbnail: 'src/assets/images/thumbnail2.jpg',
        visibility: 'Public',
        monetization: 'On',
        views: 100,
        comments: 12,
    },
];

const posts = [
    {
        id: 1,
        thumbnail: 'src/assets/images/thumbnail.jpg',
        visibility: 'Public',
        monetization: 'On',
        views: 345,
        comments: 14,
    },
    {
        id: 2,
        thumbnail: 'src/assets/images/idea.jpg',
        visibility: 'Public',
        monetization: 'On',
        views: 5,
        comments: 35,
    },
    {
        id: 3,
        thumbnail: 'src/assets/images/thumbnail2.jpg',
        visibility: 'Public',
        monetization: 'On',
        views: 47,
        comments: 2,
    },
];

const playlist = [
    {
        id: 1,
        thumbnail: 'src/assets/images/thumbnail.jpg',
        visibility: 'Public',
        monetization: 'On',
        views: 100,
        comments: 12,
    }
];

const lives = [

];

const Content = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Typography sx={styles.pageTitle} variant="h5">Content</Typography>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Videos" id="tab-0" />
                    <Tab label="Lives" id="tab-1" />
                    <Tab label="Posts" id="tab-2" />
                    <Tab label="Playlists" id="tab-3" />
                </Tabs>

                <TabPanel value={value} index={0}>
                    <DataGrid
                        rows={videos}
                        columns={columns}
                        pageSize={25}
                        rowsPerPageOptios={[25]}
                        checkboxSelection
                        autoHeight
                        rowHeight={150}
                    />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <DataGrid
                        rows={lives}
                        columns={columns}
                        pageSize={25}
                        rowsPerPageOptios={[25]}
                        checkboxSelection
                        autoHeight
                        rowHeight={150}
                    />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <DataGrid
                        rows={posts}
                        columns={columns}
                        pageSize={25}
                        rowsPerPageOptios={[25]}
                        checkboxSelection
                        autoHeight
                        rowHeight={150}
                    />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <DataGrid
                        rows={playlist}
                        columns={columns}
                        pageSize={25}
                        rowsPerPageOptios={[25]}
                        checkboxSelection
                        autoHeight
                        rowHeight={150}
                    />
                </TabPanel>
            </Box>
        </Box>
    );
}

const styles = {
    pageTitle: {
        mb: 2,
    },
    videoColumn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
    },
    videoThumbnail: {
        width: "300px !important",
        height: 'auto',
    },
    videoDetails: {
        ml: 2,
        py: 2,
    },
    videoTitle: {
        fontSize: '0.8rem',
        width: 490,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        '&:hover': {
            textDecoration: 'underline',
            cursor: 'pointer',
        }
    },
    videoDescription: {
        fontSize: '0.7rem',
        color: 'neutral.normal',
        width: 490,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    iconColumn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        lineHeight: 'calc(var(--height) - 1px)',
    },
    iconColumnText: {
        ml: 1,
        fontSize: '0.9rem',
    }
};

export default Content;
