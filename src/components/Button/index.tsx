import {memo} from 'react'

import './button.scss';

function Button(props) {
    const {children, htmlType = 'button', ...rest} = props;
    return (<button
        type={htmlType} {...rest}>
        {children}
    </button>)

}

export default memo(Button);