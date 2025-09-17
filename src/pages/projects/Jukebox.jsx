import React from "react";
import {Link} from "react-router-dom";

const Jukebox = () => {
    return (
        <section className="max-w-4xl mx-auto py-20 text-center">
            <h2 className="text-3xl font-bold">Project "Jukebox" coming soon!</h2>
            <Link to="/" className="text-blue-600 underline mt-4 block">
                Back to Projects
            </Link>
        </section>
    );
};

export default Jukebox;
