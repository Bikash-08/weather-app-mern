const SearchBox = ({
    city,
    setCity,
    getWeather,
    loading,
    setError
}) => {

    return (
        <div className="search-box">

            <input
                type="text"
                placeholder="Enter city name..."
                value={city}
                onChange={(e) => {
                    setCity(e.target.value);
                    setError("");
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        getWeather();
                    }
                }}
            />

            <button
                onClick={getWeather}
                disabled={loading}
            >
                {loading ? (
                    <span className="loading-content">
                        <span className="spinner"></span>
                        Loading...
                    </span>
                ) : (
                    "🔍 Get Weather"
                )}
            </button>

        </div>
    );
};

export default SearchBox;