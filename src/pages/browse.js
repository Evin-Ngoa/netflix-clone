import React, { useContext } from "react";
import { useContent } from '../hooks';
import { selectionFilter } from '../utils';
import { BrowseContainer } from '../containers/browse';

export default function Browse() {

    // Implement series and the films
    const { series } = useContent('series');
    const { films } = useContent('films');

    // Implement slides
    const slides = selectionFilter({ series, films });

    // pass to the browse container
    return <BrowseContainer slides={slides} />
}