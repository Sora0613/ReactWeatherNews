import { useEffect, useState } from "react";

const FetchData = (props: any) => {
    const [data, setData] = useState<any>();

    useEffect(() => {
        fetch(props.endpoint)
            .then((res) => res.json())
            .then((json) => {
                if (json.cod === "404") {
                    alert("その都市は存在しません。");
                } else {
                    setData(json);
                }
            })
            .catch(() => console.log("error"));
    }, [props.endpoint]);

    return data;
};

export default FetchData;