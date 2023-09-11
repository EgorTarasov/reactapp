import {
    Box,
    Grid,
    Autocomplete,
    TextField,
    Button,
    Stack,
} from "@mui/material";

type hackTag = {
    tag: string;
};

interface IndexHackCardProps {
    imageUrl: string;
    hackName: string;
    hackEndRegistrationDate: string;
    hackPrize: number;
    hackTags: hackTag[];
    hackTeamMinimumSize: number;
    hackTeamMaximumSize: number;
}

export default function IndexHackCard(props: IndexHackCardProps) {
    const {
        imageUrl,
        hackName,
        hackEndRegistrationDate,
        hackPrize,
        hackTags,
        hackTeamMinimumSize,
        hackTeamMaximumSize,
    } = props;

    // const imageUrl = "/images/image-17.png";
    // const hackName = "GAME DEV ХАКАТОН СИНЕУС";
    // const hackEndRegistrationDate = " 22 сентября 07:59";
    // const hackPeople = " от 1 до 5 участников";
    // const hackPrize = " 1 000 000 ₽";

    return (
        <>
            <Box
                sx={{
                    width: 303,
                    height: 331,
                    borderRadius: 4,
                    background: "#ffffff1f",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    alignItems: "start",
                    p: 2.5,
                }}
            >
                <Box
                    sx={{
                        width: 263,
                        height: 150,
                    }}
                >
                    <img src={imageUrl} />
                </Box>
                <Box>
                    <p
                        style={{
                            width: 263,
                            color: "#c059ff",
                            fontSize: 20,
                            fontStyle: "normal",
                            fontWeight: 700,
                            lineHeight: "normal",
                            marginTop: 20,
                            marginBottom: 12,
                        }}
                    >
                        {hackName}
                    </p>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "start",
                        flexDirection: "column"
                    }}
                >
                    <p
                        style={{
                            marginTop: 0,
                            marginBottom: 8,
                            width: 223,
                            color: "#fff",
                            fontSize: 14,
                            fontStyle: "normal",
                            fontWeight: 600,
                            lineHeight: "normal",
                        }}
                    >
                        Регистрация до:{hackEndRegistrationDate}
                    </p>
                    <p
                    style={{
                        marginTop: 0,
                        marginBottom: 8,
                        width: 223,
                        color: "#fff",
                        fontSize: 14,
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "normal",
                    }}>
                        Команда: от {hackTeamMinimumSize} до{" "}
                        {hackTeamMaximumSize} участников
                    </p>
                    <p
                    style={{
                        marginTop: 0,
                        marginBottom: 8,
                        width: 223,
                        color: "#fff",
                        fontSize: 14,
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "normal",
                    }}>Призы: {hackPrize} ₽</p>
                </Box>
                <Box
                sx = {{
                    display: "flex",
                    justifyContent: "center"

                }}>
                    {hackTags.map((tag) => {
                         return (
                            <Box sx = {{
                                borderRadius:2,
                                border:1,
                                borderColor: "#c059ffcc",
                                background: "#c059ff29",
                                dispay: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginRight: 1,
                                paddingTop:0.5,
                                paddingBottom: 0.5,
                                paddingRight: 1,
                                paddingLeft:1
                                }}
                            >
                            <p
                                style = {{
                                color: "#fff",
                                textAlign: "center",
                                fontSize: 12,
                                fontStyle: "normal",
                                fontWeight: 400,
                                lineHeight: "normal"
                            }}>{tag.tag}</p>
                            </Box>
                         );
                     })}
                </Box>
            </Box>
        </>
    );
}

// <div className="hack-card">
//                 <div className="hack-card-photo">
//                     <img src={imageUrl} />
//                 </div>
//                 <div className="hack-card-main-text">
//                     <p>{hackName}</p>
//                 </div>
//                 <div className="hack-card-conditions">
//                     <p>Регистрация до:{hackEndRegistrationDate}</p>
//                     <p>
//                         Команда: от {hackTeamMinimumSize} до{" "}
//                         {hackTeamMaximumSize} участников
//                     </p>
//                     <p>Призы: {hackPrize} ₽</p>
//                 </div>
//                 <div className="hack-card-tags">
//                     {/* TODO: Спросить как динамически всё это выстраивать */}
//                     {hackTags.map((tag) => {
//                         return (
//                             <div className="hack-card-tag">
//                                 <p>{tag.tag}</p>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>
