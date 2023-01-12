import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
    const {total} = useSelector((state) => state);

    return(
        <div>
            <h2>halaman result</h2>
        <h1>{total}</h1>
        </div>
    );
};

export default Result;