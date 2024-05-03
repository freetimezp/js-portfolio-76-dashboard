/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Box } from "@mui/material";


const TabPanel = ({ children, value, index, mt = 4 }) => {
    return (
        <div hidden={value !== index} id={`simple-tabpanel-${index}`}>
            {value === index && (
                <Box sx={{ mt }}>
                    {children}
                </Box>
            )}
        </div>
    )
}

export default TabPanel;
