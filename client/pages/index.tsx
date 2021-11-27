import React from 'react'
import { withUrqlClient } from 'next-urql';
const index = () => {
    return (
        <div>

        </div>
    )
}

export default withUrqlClient(() => ({ url: 'http://localhost:5000/' }))(index);
