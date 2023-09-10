import { Box, Grid } from "@mui/material";

export default function RegisteredNavBar(props: { selectedTab: string }) {
    const tabs = [
        "Мой профиль",
        "Рекомендации",
        "Моя команда",
        "Комьюнити",
        "Анонсы и новости",
    ];
    return (
        <Box>
            {/* navbar */}
            <Grid container>
                {/* navbar */}
                {tabs.map((tab) => (
                    <Grid item xs={1.5}>
                        <Box
                            key={tab}
                            onClick={() => {
                                // FIXME: navigation
                            }}
                        >
                            <p
                                style={{
                                    borderBottom:
                                        tab === props.selectedTab
                                            ? "2px solid #C059FF"
                                            : "2px solid #1E1D1C",
                                    color:
                                        tab === props.selectedTab
                                            ? "#FFF"
                                            : "#FFFFFF52",
                                    padding: "0 0 10px 0",
                                }}
                            >
                                {tab}
                            </p>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
