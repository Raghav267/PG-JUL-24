import React, { useState } from 'react'

const useToggle = (initailValue = true) => {

    const [value, setValue] = useState(initailValue)

    const toggle = () => {
        setValue(!value);
    }
    return [value, toggle]
}

export default useToggle
