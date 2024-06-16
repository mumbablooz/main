"use client";
import React from "react";

import styles from "./styles.module.css";
import ShowIcon from "../ShowIcon/ShowIcon";
import GetWindowSize from "../GetWindowSize";

type Props = {
    text: boolean;
    color: string;
};

export default function TelButton({ text, color }: Props) {
    const windowSize = GetWindowSize();
    let fontSize = windowSize
        ? windowSize.width < 1280
            ? "28"
            : "35"
        : "30";
    const telefonName = process.env.NEXT_PUBLIC_CONTACT_TEL_NAME;
    const telefonTitel = process.env.NEXT_PUBLIC_CONTACT_TEL_TITEL;

    return (
        <a href={"tel:" + telefonName}>
            <li
                className={"button " + styles.TelButton}
                style={{ marginRight: "0.4rem", height: "100%" }}
            >
                <ShowIcon color={color} iconName={"tel"} size={fontSize} />

                {text && (
                    <p
                        style={{

                            marginLeft: "0.2rem",
                            // fontSize: fontSize,
                        }}
                    >
                        {telefonTitel}
                    </p>
                )}
            </li>
        </a>
    );
}
