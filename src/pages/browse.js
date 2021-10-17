import React from "react";
import { useContent } from '../hooks';

export default function Browse() {
    // Need series and the films
    const { series } = useContent('series');
    const { films } = useContent('films');
    
    // Need slides
    // pass to the browse container

    return (
        <p>
            Hello From Browse.
        </p>
    );
}