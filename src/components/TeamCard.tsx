import { Box,  Button } from "@mui/material";
import RegisteredNavBar from "../components/RegisteredNavBar";

type TeamMember = {
    telegramId: string;
    role: string;
    isCapitan: boolean;
};

interface TeamCardProps {
    teamName: string;
    about: string;
    members: any[];
    lookingFor: string;
}

export default function TeamCard(props: TeamCardProps) {
    const { teamName, about, members, lookingFor } = props;

    return (
        <>
            <Box
                sx={{
                    background: "#ffffff1f",
                    width: 310,
                    height: 374,
                    borderRadius: "16px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    alignItems: "start",
                    padding: "20px",
                }}
            >
                <p
                    style={{
                        fontSize: "20px",
                        color: "#C059FF",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "normal",
                    }}
                >
                    {teamName}
                </p>
                <p
                    style={{
                        color: "#fff",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "norm",
                        marginTop: "12px"
                    }}
                >
                    О команде: {about}
                </p>
                <p
                    style={{
                        color: "#fff",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "norm",
                        marginTop: "12px"
                    }}
                >
                    Команда:
                </p>
                <Box sx = {{
                    display: "flex",
                    flexDirection: "column"
                }}>
                    {/* {members.map((v) => <Box>v.telegramId<Box/>)} */}
                    {members.map((item, i) => {
                        return (
                        <>
                        <Box sx = {{
                            display: "flex",
                            flexDirection: "row"
                        }}>
                            <Box key={i} sx = {{
                                textAlign: "center",
                                fontSize: "12px",
                                fontStyle: "normal",
                                fontWeight: 400,
                                lineHeight: "normal",
                                color: "#fff", 
                                background: "#c059ff29",
                                border: "1px",
                                borderColor: "#c059ffcc",
                                paddingLeft: "8px",
                                paddingRight: "8px",
                                borderRadius: "8px",
                                marginRight: "12px",
                                marginTop: "12px"
                            }}>@{item.telegramId}</Box>
                            <Box key={i}
                              sx = {{
                                textAlign: "center",
                                fontSize: "12px",
                                fontStyle: "normal",
                                fontWeight: 400,
                                lineHeight: "normal",
                                color: "#fff",
                                marginTop: "12px"
                            }}>{item.role}</Box>
                        </Box>
                        </>);
                    })}
                </Box>
                <Box>
                    <p style= {{
                        color: "#fff",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "norm",
                        marginTop: "12px"
                    }}>
                        Кого мы ищем: {lookingFor}
                    </p>
                </Box>
                <Box sx= {{
                    marginTop: "10px"
                }}>
                    <Button sx= {{
                        background: "#ffffff29",
                        width: 270,
                        height: 33
                    }}>
                        <p
                            style={{
                                color: "#fff",
                                fontSize: "14px",
                                fontStyle: "normal",
                                fontWeight: 600,
                                lineHeight: "normal",   
                            }}
                        >
                            Вступить в команду
                        </p>
                    </Button>
                </Box>
            </Box>
        </>
    );
}

TeamCard.defaultProps = {
    teamName: "HilbertSpace",
    about: "тут будет смешной текст. Напишу его, как проснусь окончательно.",
    members: [
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
    ],
    lookingFor: "просто хорошего человека",
};
