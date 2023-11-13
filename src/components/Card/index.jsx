import {createElement, memo, useEffect, useRef, useState} from 'react'
import {classNames} from '@crossfox/utils'

import './card.scss';

function Card(props) {
    const [style, setStyle] = useState({});
    useEffect(() => {
        setStyle({'--lx': ref.current.offsetLeft+'px'});
    }, []);
    const ref = useRef();
    const {children, radius = false, tagName = 'div', ...rest} = props;
    rest.className = classNames(rest.className, 'card', radius && 'radius');

    rest.ref = ref;
    return createElement(tagName, rest, <>
            {children}
            <div className="overlay" style={style}/>
        </>
    );

}

export default memo(Card);