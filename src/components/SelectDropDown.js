import React from 'react'
import Select from 'react-dropdown-select';

const SelectDropDown = ({ options }) => {
    console.log(options)
    return (
        <Select 
        options={options} 
        onChange={(values) => console.log(values)} />
    )
}

export default SelectDropDown