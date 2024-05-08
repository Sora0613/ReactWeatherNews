import React, {useState} from "react";

interface SearchBarProps {
    onSearch: (cityName: string) => void;
}

const SearchBar = (props: SearchBarProps) => {
    const [cityName, setCityName] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCityName(e.target.value);
    };

    const handleClick = () => {
        props.onSearch(cityName);
        setCityName("");
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="都市名"
                value={cityName}
                onChange={handleChange}
            />
            <button onClick={handleClick}>検索</button>
        </div>
    );
};

export default SearchBar;
