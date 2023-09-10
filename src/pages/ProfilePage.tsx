import { Box, Button, Grid, Stack } from "@mui/material";
import RegisteredNavBar from "../components/RegisteredNavBar";
import DataBox from "../components/DataBox";
import ItSkillBlock from "../components/ItSkillBlock";
import BlockAchevements from "../components/BlockAchevements";

function BlockDataList(props: { title: string; projects: string[] }) {
    return (
        <Grid container sx={{ mt: 3, ml: 3, mr: 4 }}>
            <Grid item xs={6} lg={12}>
                <Box
                    sx={{
                        minWidth: "800px",
                        maxWidth: "1485px",
                        textAlign: "left",
                        minHeight: "150px",
                        backgroundColor: "#ffffff14",
                        borderRadius: 4,
                        p: 4,
                    }}
                    // sx={{
                    //     p: 3,
                    // }}
                >
                    <p
                        style={{
                            // borderBottom: "2px solid #C059FF",
                            paddingBottom: "2px",
                            fontWeight: "700",
                            margin: "8px",
                            marginBottom: "16px",
                            color: "#FFF",
                        }}
                    >
                        {props.title}
                    </p>
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            minWidth: "800px",
                            maxWidth: "1485px",
                        }}
                    >
                        {props.projects.map((project) => (
                            <Grid item xs={2} key={project}>
                                <DataBox text={project} fontSize={14} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    );
}

export default function ProfilePage() {
    const props = {
        user: {
            fio: "Тарасова Елизавета Юрьевна",
            level: 50,
            profileUrl: "/images/lisa.png",
            role: "UX/UI Designer",
            telegram: "@lisatarasova",
            course: "2 курс",
        },
    };

    return (
        <Box sx={{ px: 10, pt: 5 }}>
            <RegisteredNavBar selectedTab="Мой профиль" />
            <Grid flexWrap={"wrap"} container sx={{ mt: 3, ml: 3, mr: 4 }}>
                <Grid item xs={4} lg={5}>
                    {/* block profile  */}
                    <Box
                        sx={{
                            padding: 2,
                            backgroundColor: "#ffffff14",
                            minWidth: "320px",
                            maxWidth: "500px",
                            textAlign: "center",

                            borderRadius: 4,
                        }}
                    >
                        {/* add bottom border to h2 */}
                        <p
                            style={{
                                borderBottom: "2px solid #C059FF",
                                paddingBottom: "2px",
                                fontWeight: "700",

                                color: "#FFF",
                            }}
                        >
                            {props.user.fio}
                        </p>
                        <Grid container>
                            <Grid
                                item
                                xs={6}
                                sx={{
                                    minWidth: "150px",
                                    minHeight: "150px",
                                    p: 4,
                                }}
                            >
                                <img
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                    }}
                                    src={props.user.profileUrl}
                                    alt=""
                                />
                            </Grid>
                            <Grid item xs={6} sx={{ minWidth: "150" }}>
                                <Box>
                                    <p
                                        style={{
                                            color: "#FFF",
                                            fontWeight: "700",
                                            fontSize: "20px",
                                        }}
                                    >
                                        Level: {props.user.level}
                                    </p>
                                    <DataBox
                                        text={props.user.role}
                                        fontSize={14}
                                    />
                                    <DataBox
                                        text={props.user.telegram}
                                        fontSize={14}
                                    />
                                    <DataBox
                                        text={props.user.course}
                                        fontSize={14}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Button
                            sx={{
                                mt: 2,
                                padding: 2,
                                backgroundColor: "#ffffff14",
                                border: "1px solid #C059FF",
                                color: "#FFF",
                                width: "100%",
                                minWidth: "320px",
                                maxWidth: "500px",
                                fontSize: "14px",
                                borderRadius: 4,
                                "&:hover": {
                                    backgroundColor: "#C059FF",
                                },
                            }}
                        >
                            Отредактировать данные
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={4} lg={5}>
                    {/* block it */}
                    {/* It skills */}
                    <ItSkillBlock />
                    {/* It skills */}
                </Grid>
                <Grid item xs={4} lg={2}>
                    <BlockAchevements />
                </Grid>
            </Grid>
            <BlockDataList
                title="Мои проекты:"
                projects={["Сервис для поиска работы", "Шиза от банка"]}
            />
            <BlockDataList
                title="Пройденные хакатоны:"
                projects={["RLT-2023", "ЛЦТ-2023", "Код города 2023"]}
            />
        </Box>
    );
}
