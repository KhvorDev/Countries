import styled from "styled-components";
import Select from 'react-select';

const CustomSelect = styled(Select).attrs({
    styles: {
        control: (provided)=>({
            ...provided,
            position: 'relative',
            backgroundColor: 'var(--colors-ui-base)',
            borderRadius: 'var(--b-radius)',
            padding: '0.25rem',
            border: 'none',
            boxShadow: 'var(--shadow)',
            height: '50px',
            minWidth: '300px',
        }),
        // singleValue: (provided) => ({
        //     position: 'absolute',
        //     top: '2px',
        //     left: '15px',
        //     color: 'var(--colors-text)',
        // }),
        option: (provided, state)=>({
            ...provided,
            cersor: 'pointer',
            color: 'var(--colors-text)',
            backgroundColor: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-ui-base)',
        }),
    }
})`
    border-radius: var(--b-radius);
    font-family: vfr(--family);
    border: none;

    & > * {
        box-shafow: var(--shadow);
    }
    & * {
        color: var(--colors-text) !important;
    }
    & > div[id]{
        background-color: var(--colors-ui-base);
    }
`;

export default CustomSelect;