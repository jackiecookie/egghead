import React from 'react'
import { PropTypes } from 'prop-types';

export function TodoItem(props) {
    return (
        <li>
               <input type="checkbox" defaultChecked={props.isComplete}/>{props.name}
        </li>
    )
}

TodoItem.PropTypes = {
    isComplete: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
}


