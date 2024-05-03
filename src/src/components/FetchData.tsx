import {useEffect, useState} from "react";

const FetchData = (props: any) => {
    const [data, setData] = useState<any>();

    useEffect(() => {
        fetch(
            props.endpoint
        )
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch(() => console.log("error"));
    }, [props.city]);

    return data;
};

export default FetchData;