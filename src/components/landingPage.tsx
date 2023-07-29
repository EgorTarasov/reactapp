import { Box } from "@mui/material";

import LandingData from "../assets/LandingData.svg";

export default function LandingPage() {
    return (
        <Box>
            <img
                src={LandingData}
                alt="landing_page"
                width="632"
                height="503"
                style={{ margin: 16 }}
            ></img>
        </Box>
    );
}
