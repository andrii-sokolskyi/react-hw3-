import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Pagination from '../pagination';
import { HOUSES_PER_PAGE, HOUSES_COUNT } from '../../constants';
import { goToNextPage, goToPrevPage, getHouse } from '../../actions';
import HousesList from '../houses-list';
import { House } from '../../models/house';

interface HousesPageProps {
    pageNumber: number;
    data: {
        [key: number]: House[];
    };
    goToNextPage: Function;
    goToPreviousPage: Function;
    getHouse: Function;
}
interface HousesPageState {}

const mapStateToProps = (state: any) => ({
    ...state.housesReducer
});

const mapDispatchToProps = (dispatch: any) => ({
    goToNextPage: () => dispatch(goToNextPage()),
    goToPreviousPage: () => dispatch(goToPrevPage()),
    getHouse: (pageNumber: number) => dispatch(getHouse(pageNumber))
})

class HousesPage extends Component<HousesPageProps, HousesPageState> {

    cancel: any = null;
    CancelToken = axios.CancelToken;

    constructor(props: any) {
        super(props);

        this.props.getHouse(this.props.pageNumber);
    }

    componentDidUpdate(oldProps: any) {
        const prevPageNumber = oldProps.pageNumber;
        const currentPageNumber = this.props.pageNumber;

        if ((prevPageNumber !== currentPageNumber) && !this.props.data[currentPageNumber]) {
            this.props.getHouse(currentPageNumber);
        }
    }

    onNext() {
        this.props.goToNextPage();
    }
    onPrev() {
        this.props.goToPreviousPage();
    }

    render () {
        const isPrevDisabled = this.props.pageNumber === 1;
        const lastPageNumber = Math.trunc(HOUSES_COUNT / HOUSES_PER_PAGE);
        const isNextDisabled = this.props.pageNumber === lastPageNumber;
        const currentPageData = this.props.data[this.props.pageNumber];

        return (
            <div>
                <HousesList housesList={currentPageData} />
                <Pagination
                    isPrevDisabled={isPrevDisabled} isNextDisabled={isNextDisabled}
                    onNext={this.onNext.bind(this)} onPrev={this.onPrev.bind(this)}
                />
                <div>This is houses page {this.props.pageNumber}</div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HousesPage);