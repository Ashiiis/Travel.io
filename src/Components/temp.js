import React, { useEffect, useState } from 'react';

function DataProcessingComponent() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/model/api/')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    if (!data) return <div>Loading...</div>;

    return (
        <div>
            <h1>Data Processing Results</h1>
            <div>
                <h2>City Footfall</h2>
                <pre>{JSON.stringify(data.city_footfall, null, 2)}</pre>
            </div>
            <div>
                <h2>Average Footfall</h2>
                <pre>{JSON.stringify(data.avg_footfall, null, 2)}</pre>
            </div>
            <div>
                <h2>Average Rating</h2>
                <pre>{JSON.stringify(data.avg_rating, null, 2)}</pre>
            </div>
            <div>
                <h2>Locations by Type</h2>
                <pre>{JSON.stringify(data.location_by_type, null, 2)}</pre>
            </div>
        </div>
    );
}

export default DataProcessingComponent;
