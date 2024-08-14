"use client";

import React, { PropsWithChildren } from "react";

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
    return(
        <>
            {children}
        </>
    );
};