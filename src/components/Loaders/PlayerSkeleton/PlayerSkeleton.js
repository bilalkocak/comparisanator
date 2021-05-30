import React from 'react';
import PropTypes from 'prop-types';
import ContentLoader from "react-content-loader";

const PlayerSkeleton = props => {
    const array = ['', '', '', '', '', '', '', '', '', '', '']
    return (
        <>
            {
                array.map((item, index) =>
                    <div key={`player-skeleton-key-${index}`}>
                        <ContentLoader
                            key={'player-skeleton-' + index}
                            speed={2}
                            width={400}
                            height={200}
                            viewBox="0 0 400 200"
                            backgroundColor="#ffffff"
                            foregroundColor="#f3f3f3"
                        >
                            <circle cx="80" cy="80" r="80"/>
                            <rect x="170" y="50" rx="5" ry="5" width="25" height="20"/>
                            <rect x="170" y="80" rx="5" ry="5" width="25" height="20"/>
                            <rect x="220" y="65" rx="5" ry="5" width="220" height="20"/>
                        </ContentLoader>
                    </div>
                )
            }
        </>
    );
};

PlayerSkeleton.propTypes = {};

export default PlayerSkeleton;
