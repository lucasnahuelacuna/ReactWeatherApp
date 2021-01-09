import React from 'react';
import CityInfo from './CityInfo';

export default {
    title: 'CityInfo',
    component: CityInfo,
}

export const CityExample = (args) => (
    <CityInfo {...args} />
)

CityExample.args = { city: "Buenos Aires", country: "Argentina"}