import { useEffect, useState } from "react";
import pb from "../lib/pocketbase";
import { Button } from "@mui/material";

interface HomePageProps {
    onLogout: CallableFunction;
}

export default function HomePage(props: HomePageProps) {
    const { onLogout } = props;

    useEffect(() => {}, []);
    return (
        <>
            <iframe
                src="https://h5p.org/h5p/embed/617"
                width="1090"
                height="675"
                frameborder="0"
                allowfullscreen="allowfullscreen"
                allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"
                title="Interactive Video"
            ></iframe>
            <script
                src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js"
                charset="UTF-8"
            ></script>
            <Button onClick={onLogout}>logout</Button>
        </>
    );
}
