import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery'

const PlayerScore = ({rating}) => {
    useEffect(() => {
        $(".progress").each(function () {

            const value = rating / 10;
            const $bar = $(this).find(".bar");
            const perc = parseInt(value, 10);

            $({p: 0}).animate({p: perc}, {
                duration: 3000,
                easing: "swing",
                step: function (p) {
                    $bar.css({
                        transform: "rotate(" + (45 + (p * 1.8)) + "deg)",
                    });
                }
            });
        });
    }, [])


    return (
        <div className="progress">
            <div className="barOverflow">
                <div className="bar"/>
            </div>
            <span>{rating}</span>
            <h3>COMPARISANATOR <br/> INDEX</h3>
        </div>
    );
};

PlayerScore.propTypes = {
    rating: PropTypes.number
};

export default PlayerScore;
