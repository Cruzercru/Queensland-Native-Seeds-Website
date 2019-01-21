import { title } from "assets/material-kit-react.jsx";
import imageStyles from "assets/imagesStyles.jsx";

const plantProfileStyle = {
    section: {
        padding: "70px 0",
        textAlign: "left"
    },
    pageContainer: {
        paddingRight: "30px",
        paddingLeft: "30px",
        width: "100%",
        "@media (max-width: 576px)" : {
            paddingRight: "5px",
            paddingLeft: "5px"
        }
    },
    pageTitle: {
        ...title,
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none",
        textAlign: 'center'
    },
    text: {
        color: "#000"
    },
    textBold: {
        color: "#000",
        fontWeight: 700
    },
    alignCenter: {
        textAlign: 'center'
    },
    inLineImageContainer: {
        position: "relative"
    },
    inLineImage: {
        ...imageStyles.imgRounded,
        ...imageStyles.imgRaised
    },
    inLineImageShadow: {
        position: "absolute !important",
        transform: "scale(0.94)",
        filter: "blur(12px)",
        top: "10px",
        width: "100%",
        height: "100%",
        zIndex: "-1"
    }
};

export default plantProfileStyle;