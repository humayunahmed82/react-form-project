import React from "react";
import Data from "../data";
import Card from "./Card";

const Netflix = () => {
    return (
        <Card
            key={Data[1].id}
            imgsrc={Data[1].imgsrc}
            title={Data[1].title}
            subTitle={Data[1].subTitle}
            text={Data[1].text}
            link={Data[1].link}
        />
    );
};

export default Netflix;
