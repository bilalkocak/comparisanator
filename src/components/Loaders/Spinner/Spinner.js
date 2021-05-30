import React from 'react';
import PropTypes from 'prop-types';
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = ({color, loading}) => {
    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', height: 400, alignItems: 'center'}}>
            <ClipLoader color={color} loading={loading} css={{backgroundColor: 'red', display: 'block'}}
                        size={150}/>
        </div>
    );
};

Spinner.propTypes = {
    color: PropTypes.string,
    loading: PropTypes.bool
};

Spinner.defaultProps = {
    color: '#29B7FD',
    loading: true
};

export default Spinner;
