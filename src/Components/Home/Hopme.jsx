import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Hopme = () => {
    const data = useLoaderData();
    return (
        <div>
            <h1>this is my home: {data.length}</h1>
        </div>
    );
};

export default Hopme;