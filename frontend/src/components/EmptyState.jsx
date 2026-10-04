
const EmptyState = () => {
    return (
        <div className="weather-card">

            <div className="empty-state">

                <div className="empty-icon">
                    🌤️
                </div>

                <h2>
                    Search for a city
                </h2>

                <p>
                    Enter a city name above to see the current weather
                </p>

            </div>

        </div>
    );
};

export default EmptyState;