import React, { useState } from 'react';
import { House } from '../../models/house';
import './houses-list.scss';
import HousesListItem from '../houses-list-item';

interface HousesListProps {
    housesList: object[]
}

const HousesList: React.FC<HousesListProps> = ({ housesList = [] }) => {
    return (
        <div className='houses-list'>
            {housesList.map((house: House, index) => {
                return (
                    <HousesListItem house={house} key={index} />
                )
            })}
        </div>
    )
}

export default HousesList;