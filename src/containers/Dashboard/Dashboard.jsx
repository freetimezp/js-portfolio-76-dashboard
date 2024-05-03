import { Avatar, Box, Card, CardContent, Divider, Typography } from "@mui/material";
import LatestVideoCard from "../../components/LatestVideoCard";

import avatarImg from '../../../src/assets/images/avatar.jpg';
import userImg1 from '../../../src/assets/images/user-1.jpg';
import thumbnailImg2 from '../../../src/assets/images/thumbnail2.jpg';
import ideaImg from '../../../src/assets/images/idea.jpg';


import ColorText from "../../components/ColorText";

const Dashboard = () => {
    return (
        <Box>
            <Typography sx={styles.pageTitle} variant="h5">
                Channel Dashboard
            </Typography>

            <Box sx={styles.columnsContainer}>
                <LatestVideoCard sx={styles.item} />

                <Card sx={styles.item}>
                    <CardContent>
                        <Typography variant="cardTitle">Latest Post</Typography>

                        <Box sx={styles.postAuthorSection}>
                            <Avatar sx={styles.avatar} src={avatarImg} />
                            <Typography sx={styles.postMeta}>React with US,</Typography>
                            <Typography sx={styles.postMeta}>Jan 18, 2024</Typography>
                        </Box>

                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
                            expedita at delectus aut dolorum sunt fugit ut natus nam pariatur
                            maxime, voluptas nulla aspernatur quas rerum modi autem sequi aliquam
                            saepe? Nihil veritatis reprehenderit magni eius minus facere repellat
                            ducimus.
                        </Typography>

                        <Divider sx={styles.divider} />

                        <Box sx={styles.postStats}>
                            <Typography variant="body2">Likes</Typography>
                            <Typography variant="body2">Comments</Typography>
                            <Typography variant="h6">12</Typography>
                            <Typography variant="h6">6</Typography>
                        </Box>

                        <Typography sx={styles.cardAction} variant="link">GO TO COMMUNITY</Typography>

                    </CardContent>
                </Card>

                <Card sx={styles.item}>
                    <CardContent>
                        <Typography variant="cardTitle">Channel Analytics</Typography>
                        <Typography variant="h7">Current Subscribers</Typography>
                        <Typography variant="h4">4,144</Typography>
                        <Typography variant="h7">
                            <ColorText color={'green.main'}>+92</ColorText>
                            <ColorText color={'neutral.normal'}> in last 28 days</ColorText>
                        </Typography>

                        <Divider sx={styles.divider} />

                        <Typography variant="h6">Summary</Typography>
                        <Typography variant="h8">
                            <ColorText color={'neutral.normal'}>Last 28 days</ColorText>
                        </Typography>

                        <Box sx={styles.videoStatsRow}>
                            <Typography variant="h7">Views</Typography>
                            <Typography variant="h7">225</Typography>
                        </Box>
                        <Box sx={styles.videoStatsRow}>
                            <Typography variant="h7">Watch Time (hours)</Typography>
                            <Typography variant="h7">31.7</Typography>
                        </Box>
                        <Box sx={styles.videoStatsRow}>
                            <Typography variant="h7">Estimated Revenue</Typography>
                            <Typography variant="h7">$ 450</Typography>
                        </Box>

                        <Divider sx={styles.divider} />

                        <Typography variant="h6">Top Videos</Typography>
                        <Typography variant="h8">
                            <ColorText color={'neutral.normal'}>Last 48 days . Views</ColorText>
                        </Typography>

                        <Box sx={styles.videoStatsRow}>
                            <Typography variant="h7">How to become a App developer in 2024</Typography>
                            <Typography variant="h7">450</Typography>
                        </Box>
                        <Box sx={styles.videoStatsRow}>
                            <Typography variant="h7">CSS & HTML: tutorial</Typography>
                            <Typography variant="h7">287</Typography>
                        </Box>
                        <Box sx={styles.videoStatsRow}>
                            <Typography variant="h7">API data easy learning: practical guide</Typography>
                            <Typography variant="h7">130</Typography>
                        </Box>

                        <Typography sx={styles.cardAction} variant="link">Go To Video Analytics</Typography>

                    </CardContent>
                </Card>

                <Card sx={styles.item}>
                    <CardContent>
                        <Typography variant="cardTitle">Latest Comments</Typography>
                        <Typography variant="h7">
                            <ColorText color={'neutral.normal'}>
                                Channel comments I haven`t responded
                            </ColorText>
                        </Typography>

                        <Box sx={styles.commentRow}>
                            <Avatar sx={styles.avatar} src={userImg1} />

                            <Box>
                                <Box sx={styles.commentDetailsSection}>
                                    <Typography sx={styles.postMeta}>PHP with Our tour</Typography>
                                    <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                                </Box>
                                <Typography sx={styles.commentText}>
                                    Get tips from a successfull creators on how to
                                    learn PHP and turn it into business
                                </Typography>
                            </Box>

                            <Box component={'img'} sx={styles.videoThumbnail} src={thumbnailImg2} />
                        </Box>

                        <Divider sx={styles.divider} />

                        <Box sx={styles.commentRow}>
                            <Avatar sx={styles.avatar} src={userImg1} />

                            <Box>
                                <Box sx={styles.commentDetailsSection}>
                                    <Typography sx={styles.postMeta}>PHP with Our tour</Typography>
                                    <Typography sx={styles.postMeta}>3 weeks ago</Typography>
                                </Box>
                                <Typography sx={styles.commentText}>
                                    Please, help me with this tutorial...
                                </Typography>
                            </Box>

                            <Box component={'img'} sx={styles.videoThumbnail} src={thumbnailImg2} />
                        </Box>

                        <Divider sx={styles.divider} />

                        <Box sx={styles.commentRow}>
                            <Avatar sx={styles.avatar} src={userImg1} />

                            <Box>
                                <Box sx={styles.commentDetailsSection}>
                                    <Typography sx={styles.postMeta}>PHP with Our tour</Typography>
                                    <Typography sx={styles.postMeta}>7 weeks ago</Typography>
                                </Box>
                                <Typography sx={styles.commentText}>
                                    Thanks..
                                </Typography>
                            </Box>

                            <Box component={'img'} sx={styles.videoThumbnail} src={thumbnailImg2} />
                        </Box>

                        <Typography sx={styles.cardAction} variant="link">View All</Typography>
                    </CardContent>
                </Card>

                <Card sx={styles.item}>
                    <CardContent sx={styles.ideaContent}>
                        <Box>
                            <Typography variant="cardTitle">Ideas For You</Typography>
                            <Typography sx={styles.ideasQuestion}>Read to get business in safe..</Typography>
                            <Typography variant="h7">
                                How to use your youtube channel with success
                            </Typography>
                            <Typography sx={styles.cardAction} variant="link">
                                Get Started
                            </Typography>
                        </Box>
                        <Box component="img" sx={styles.ideaImage} src={ideaImg} />
                    </CardContent>
                </Card>

                <Card sx={styles.item}>
                    <CardContent>
                        <Typography variant="cardTitle">Insider Info</Typography>
                        <Box sx={styles.insiderContent}>
                            <Box component="img" sx={styles.insiderImage} src={ideaImg} />

                            <Box>
                                <Typography sx={styles.ideasQuestion}>Ready to boost your skills?</Typography>
                                <Typography variant="h7">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Explicabo nihil, ea illum eaque laboriosam id.
                                </Typography>
                            </Box>

                        </Box>
                        <Typography sx={styles.cardAction} variant="link">
                            Watch on Youtube
                        </Typography>
                    </CardContent>
                </Card>

            </Box>

        </Box>
    );
}

const styles = {
    insiderContent: {
        display: 'flex',
    },
    insiderImage: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        mr: 5,
    },
    ideasQuestion: {
        fontSize: '0.9rem',
        fonteight: 500,
        my: 1,
    },
    ideaImage: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        ml: 5,
    },
    ideaContent: {
        display: 'flex',
    },
    commentRow: {
        display: 'flex',
        alignItems: 'flex-start',
        mt: 1,
    },
    commentDetailsSection: {
        display: 'flex',
        alignItems: 'center',

    },
    commentText: {
        fontSize: "0.8rem",
        mt: 0.5,
        mr: 2,
    },
    videoThumbnail: {
        width: 80,
        ml: 'auto',
    },
    pageTitle: {
        mb: 2,
    },
    columnsContainer: {
        columns: "320px 3",
        maxWidth: 1400,
    },
    item: {
        mb: 2,
    },
    postAuthorSection: {
        display: 'flex',
        alignItems: 'center',
        my: 3,
    },
    avatar: {
        width: '40px',
        height: 'auto',
        mr: 1,
    },
    postMeta: {
        mr: 1,
        fontSize: '0.8rem',
        color: 'neutral.normal',
    },
    divider: {
        my: 2,
    },
    postStats: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        my: 3,
    },
    cardAction: {
        mt: 3,
    },
    videoStatsRow: {
        display: 'flex',
        justifyContent: 'space-between',
        mt: 1,
        '&:hover': {
            color: 'primary.main',
            cursor: 'pointer',
        }
    }
}

export default Dashboard;
