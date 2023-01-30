import React from "react";
import Data from "../data";
import Card from "./Card";

const Amazon = () => {
    return (
        <Card
            key={Data[2].id}
            imgsrc={Data[2].imgsrc}
            title={Data[2].title}
            subTitle={Data[2].subTitle}
            text={Data[2].text}
            link={Data[2].link}
        />
    );
};

export default Amazon;
