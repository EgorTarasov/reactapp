import { H5P } from "h5p-standalone";
import { useEffect, useState } from "react";

export default function H5pPlayer() {
    useEffect(() => {
        console.log(`useEffect `);

        const el = document.getElementById("h5p-iframe-wrapper");
        if (el) {
            console.log(`h5p-iframe-wrapper already loaded`);
        } else {
            createH5p();
        }
    }, []);

    const options = {
        h5pJsonPath: "../../data/test1",
        frameJs: "../../h5p/frame.bundle.js",
        frameCss: "../../h5p/styles/h5p.css",
    };

    function createH5p() {
        console.log("createH5p");
        const el = document.getElementById("h5p-container");
        new H5P(el, options);
    }
    return <div id="h5p-container"></div>;
}
