import React, { useState, useEffect } from 'react';

export function useGetData(defaultValue , url) {
    const [data, setData] = useState(defaultValue);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + url, {
            method: "get", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            }
        }).then(async (response) => {
            let data = await response.json();
            // console.log(data);
            setData(data)
        });
    }, [url]);

    return data;
}