import React from 'react';
import { connect } from 'react-redux';
import './loader.scss';

const mapStateToProps = (state: any) => state.loaderReducer;
function Loader (props: any) {

    if (!props.loadingCounter) {
        return null;
    }
    return (
        <div className="loader-modal">
            <div className="loader-modal__container">Data is loading {JSON.stringify(props.loadingCounter)}</div>
        </div>
    )
}

export default connect(mapStateToProps)(Loader);