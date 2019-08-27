import React, { useState } from 'react';
import { House } from '../../models/house';
import './houses-list-item.scss';
import { Link } from 'react-router-dom';

interface HousesListItemProps {
    house: House
}

const HousesListItem: React.FC<HousesListItemProps> = ({house}) => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleItem = () => {
        setIsVisible(!isVisible);
    }

    const getMemberId = (url: string): string => {
        const urlParts = url.split('/');
        const partsCount = urlParts.length;

        return urlParts[partsCount - 1];
    }

    return (
        <div className="houses-list__item">
            <span onClick={toggleItem} className="houses-list__name">{house.name}</span>
            <div className={"info-holder " + (isVisible ? 'visible' :  '')} >
                <p><b>{house.coatOfArms}</b></p>
                <ul>
                    {house.swornMembers.map((member: string, index: number) => {
                        return (
                            <li key={index}> <Link to={'/character/' + getMemberId(member)}>{member}</Link></li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}

export default HousesListItem;