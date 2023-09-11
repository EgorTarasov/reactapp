import { Box, Button, Grid, Stack } from "@mui/material";
import RegisteredNavBar from "../components/RegisteredNavBar";
import { UserRole } from "../features/user/authSlice";
import { useEffect, useState } from "react";
import IndexHackCard from "../components/IndexHackCard";
import axios from "axios";
import { Hackathon, ApiResponse } from "../types";
import API_HOST from "../app/api/api.ts";

function HackEnrollmentCard(props: { hack: ApiResponse }) {
    const members = [
        {
            telegramId: "tarasov_egor",
            role: "Full-stack",
            is_capitan: true,
        },
        {
            telegramId: "yogenyslav",
            role: "Full-stack",
            is_capitan: true,
        },
        {
            telegramId: "artem2203",
            role: "Full-stack",
            is_capitan: true,
        },
        {
            telegramId: "dvij_designer",
            role: "Лиза",
            is_capitan: true,
        },
    ];

    function handleLookUpRequests() {
        console.log("Смотрим запросы");
    }
    function handleCancelParticipation() {
        console.log("Отказаться от участия");
    }
    function handleDeleteTeam() {}
    return (
        <Box
            sx={{
                background: "#ffffff14",
                justifyContent: "flex-start",
                p: 2,
                borderRadius: 4,
            }}
        >
            <h3
                style={{
                    color: "#ffffff",
                    fontSize: "20px",
                }}
            >
                Команда:{"   "}
                <span style={{ fontWeight: "bold" }}>{props.hack.title}</span>
            </h3>

            <Grid container direction={"column"} spacing={2} p={2}>
                {members.map((item, i) => {
                    return (
                        <Grid
                            item
                            container
                            direction={"row"}
                            gap={3}
                            justifyContent={"flex-start"}
                        >
                            <Grid item>
                                <Box
                                    key={i}
                                    sx={{
                                        width: "100%",
                                        textAlign: "center",
                                        fontSize: "12px",
                                        fontWeight: 400,
                                        color: "#fff",
                                        background: "#c059ff29",
                                        border: "1px solid #c059ffcc",
                                        borderColor: "#c059ffcc",
                                        borderRadius: 2,
                                        px: 1.5,
                                    }}
                                >
                                    @{item.telegramId}
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box
                                    key={i}
                                    sx={{
                                        textAlign: "center",
                                        fontSize: "12px",
                                        fontStyle: "normal",
                                        fontWeight: 400,
                                        lineHeight: "normal",
                                        color: "#fff",
                                    }}
                                >
                                    {item.role}
                                </Box>
                            </Grid>
                        </Grid>
                    );
                })}
            </Grid>

            <Stack direction={"column"} spacing={2}>
                <Button
                    onClick={handleLookUpRequests}
                    sx={{
                        width: "100%",
                        fontSize: "14px",
                        background: "#ffffff29",
                        borderRadius: 2,
                        border: "2 px solid #ffffff80",
                        color: "#ffffff",
                    }}
                >
                    Посмотреть запросы в команду
                </Button>
                <Button
                    onClick={handleCancelParticipation}
                    sx={{
                        width: "100%",
                        fontSize: "14px",
                        background: "#ff6d8829",
                        borderRadius: 2,
                        border: "2 px solid #FF6D88",
                        color: "#FF6D88",
                    }}
                >
                    Отказаться от участия
                </Button>
                <Button
                    onClick={handleDeleteTeam}
                    sx={{
                        width: "100%",
                        fontSize: "14px",
                        background: "transparent",
                        borderRadius: 2,
                        border: "2px solid #FF6D88",
                        color: "#FF6D88",
                    }}
                >
                    Удалить команду
                </Button>
            </Stack>
        </Box>
    );
}

export default function RecomendationsPage() {
    const [myHacks, setMyhacks] = useState<ApiResponse[]>([]);
    const [currentHacks, setCurrentHacks] = useState<Hackathon[]>([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        axios
            .get(API_HOST + "/api/v1/hackathons/teams/my", config)
            .then((response) => {
                console.log(response.data);
                setMyhacks([response.data, response.data, response.data]);
            });
        axios
            .get(API_HOST + "/api/v1/hackathons/upcoming", config)
            .then((response) => {
                console.log(response.data);
                setCurrentHacks(response.data);
            });
    }, []);

    useEffect(() => {}, [myHacks]);
    useEffect(() => {}, [currentHacks]);

    return (
        <>
            <RegisteredNavBar />
            <Box px={5} width={"100%"}>
                <h1
                    style={{
                        fontSize: "32px",
                        fontWeight: "500",
                        color: "#ffffff",
                        textAlign: "left",
                    }}
                >
                    Твои команды на ближайшие хакатоны
                </h1>
                {myHacks.length > 0 && (
                    <Grid container spacing={4} lg={12}>
                        {myHacks.map((hack) => {
                            return (
                                <Grid item xs={12} lg={3}>
                                    <HackEnrollmentCard hack={hack} />
                                </Grid>
                            );
                        })}
                    </Grid>
                )}
                <h1
                    style={{
                        fontSize: "32px",
                        fontWeight: "500",
                        color: "#ffffff",
                        textAlign: "left",
                    }}
                >
                    Сейчас набирают команды для участия в этих хакатонах:
                </h1>
                {currentHacks.length > 0 && (
                    <Grid container spacing={4} lg={12}>
                        {currentHacks.map((hack, i) => {
                            console.log(i, hack);
                            return (
                                <Grid item xs={12} lg={3}>
                                    <IndexHackCard hack={hack} findTeam />
                                </Grid>
                            );
                        })}
                    </Grid>
                )}
            </Box>
        </>
    );
}
