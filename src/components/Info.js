import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from 'react';
import { filterByCode } from "../config";

const Wrapper = styled.section`
    margin-top: 3rem;
    width: 100%;
    min-width: 350px;
    display: grid;
    grid-template-columns: 100%;
    gap: 2rem;

    @media (min-width: 767px){
        grid-template-columns: minmax(100px, 400px) 1fr;
        align-items: center;
        gap: 5rem;
    }
    @media (min-width: 1024px){
        grid-template-columns: minmax(400px, 600px) 1fr;
    }
`;

const InfoImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const InfoTitle = styled.h1`
    margin: 0;
    font-weight: var(--fw-normal);
`;

const ListGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: 1024px){
        flex-direction: row;
        gap: 4rem;
    }
`;

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const ListItem = styled.li`
    line-height: 1.8;

    & > b {
        font-weight: var(--fw-bold);
    }
`;

const Meta = styled.div`
    margin-top: 3rem;
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    align-items: flex-start;

    & > b {
        font-weight: var(--fw-bold);
      }

    @media (min-width: 767px) {
        flex-direction: row;
        align-items: center;
    }
`;

const TagGroup = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`;

const Tag = styled.span`
    padding: 0 1rem;
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);
    line-height: 1.5;
    cursor: pointer;
`;

const Info = (props) => {

    const navigate = useNavigate();

    const {
        name,
        nativeName,
        flag,
        capital,
        population,
        region,
        subregion,
        topLevelDomain = [],
        currencies = [],
        languages = [],
        borders = [],
    } = props;

    const [neighbors, setNeighbors] = useState([]);

    useEffect(()=>{
        if(borders.length)
        axios.get(filterByCode(borders))
        .then(({data}) => setNeighbors(data.map(country => country.name)))

    }, [borders])

    return (
        <Wrapper>
            <InfoImg src={flag} alt={name} />
            <div>
                <InfoTitle>{name}</InfoTitle>
                <ListGroup>
                    <List>
                        <ListItem>
                            <b>Native name:</b> {nativeName}
                        </ListItem>
                        <ListItem>
                            <b>Population:</b> {population}
                        </ListItem>
                        <ListItem>
                            <b>Region:</b> {region}
                        </ListItem>
                        <ListItem>
                            <b>Sub region:</b> {subregion}
                        </ListItem>
                        <ListItem>
                            <b>Capital:</b> {capital}
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                            <b>Top Level Domain:</b> {topLevelDomain.map(domain => ( <span key={domain}>{domain}</span> ))}
                        </ListItem>
                        <ListItem>
                            <b>Сurrencies:</b> {currencies.map(currencie => ( <span key={currencie.code}>{currencie.name}</span> ))}
                        </ListItem>
                        <ListItem>
                            <b>Languages:</b> {languages.map(language => ( <span key={language.iso639_1}>{language.name}</span> ))}
                        </ListItem>
                    </List>
                </ListGroup>
                <Meta>
                    <b>Border Countries:</b>
                    {!borders.length ? (
                        <span>There is no border countries</span>
                    ) : (
                        <TagGroup>
                            {neighbors.map(item => (
                                <Tag key={item} onClick={() => navigate(`/country/${item}`)}>{item}</Tag>
                            ))}
                        </TagGroup>
                    )}
                </Meta>
            </div>
        </Wrapper>
    )
}

export default Info;