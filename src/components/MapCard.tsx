import { Paper } from "@mui/material";

interface MapCardProps {
    fill: string;
    opacity: number;
    width?: number;
    height?: number;
}

export default function MapCard(props: MapCardProps) {
    const { fill, opacity } = props;

    // {
    //     position: "relative",
    //     padding: theme.spacing(2),
    //     marginBottom: theme.spacing(2),
    //     "&::before": {
    //         content: '""',
    //         position: "absolute",
    //         top: 0,
    //         left: 0,
    //         width: 0,
    //         height: 0,
    //         borderStyle: "solid",
    //         borderWidth: `${theme.spacing(2)}px ${theme.spacing(2)}px 0 0`,
    //         borderColor: `${theme.palette.background.paper} transparent transparent transparent`,
    //     },
    // },
    return (
        <>
            <Paper
                square
                className="mapItem"
                sx={{
                    background: fill,
                    width: props.width || 284,
                    height: props.height || 234,
                    position: "relative",
                    // borderRadius: 2,
                    borderTop: "2px solid #FFFFFF",
                    borderLeft: "2px solid #FFFFF",
                    // borderRight: "80px solid #FFFFFF",
                    // borderBottom: "60px solid #FFFFFF",
                    // boxShadow: 3,
                    // borderTop: "80px solid white",
                    // borderLeft: `80px solid ${fill}`,
                    // opacity: opacity,
                }}
            >
                {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={props.width || 284}
                    height={props.height || 234}
                    viewBox="0 0 284 234"
                    // fill="none"
                >
                    <path
                        d="M0 0.879912L284 0.879883V175.88L215 233.88H0V0.879912Z"
                        fill={fill}
                        fill-opacity={opacity}
                    />
                </svg> */}
            </Paper>
        </>
    );
}
