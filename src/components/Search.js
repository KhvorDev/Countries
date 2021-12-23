import styled from "styled-components";
import { IoSearch } from 'react-icons/io5';

const InputContainer = styled.label`
    background-color: var(--colors-ui-base);
    padding: 1rem 2rem;
    display: flex;
    align-items: center;


    border-radius: var(--b-radius);
    box-shadow: var(--shadow);
    width: 100%;
    min-width: 300px;
    margin-bottom: 1.5rem;
    transition: var(--transition);

    @media(min-width: 767px){
        margin-bottom: 0;
        width: 300px;
    }
`;


const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search for a country...'
})`
    margin-left: 2rem;
    border: none;
    outline: none;
    background-color: var(--colors-bg);
    color: var(--colors-text);
`;



const Search = ({ search, setSearch }) => {
    return (
        <>

            <InputContainer>
                <IoSearch size={20} />
                <Input onChange={(e) => setSearch(e.target.value)} value={search} />
            </InputContainer>
        </>

    )
}

export default Search;