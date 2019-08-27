import React from 'react';

const Pagination = (props: any) => {
    return (
        <div>
            <button disabled={props.isPrevDisabled} onClick={props.onPrev}>Prev</button>
            <button disabled={props.isNextDisabled} onClick={props.onNext}>Next</button>
        </div>
    )
};

export default Pagination;