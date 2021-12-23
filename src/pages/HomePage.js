import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Controls from '../components/Controls';
import List from '../components/List';
import Card from '../components/Card';
import { ALL_COUNTRIES } from '../config';

const HomePage = ({countries, setCountries}) => {
    const [filtredCountries, setFiltredCountries] = useState(countries);    
    const navigate = useNavigate();

    const handlerSearch = (search, region)=>{
        let data = [...countries];

        if(region){
            data = data.filter(item => item.region.includes(region));
        }
        if(search){
            data = data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        }

        setFiltredCountries(data)
    }

    useEffect(() => {
        if(!countries.length)
        axios.get(ALL_COUNTRIES)
        .then(({ data }) => setCountries(data))
        // eslint-disable-next-line
    }, [])

    useEffect(()=>{
        handlerSearch()
        // eslint-disable-next-line
    }, [countries])
    return (
        <><Controls onSearch={handlerSearch}/>
            <List>
                {filtredCountries.map(country => {
                    const countryinfo = {
                        img: country.flags.png,
                        name: country.name,
                        info: [
                            {
                                title: 'Population',
                                description: country.population.toLocaleString(),
                            },
                            {
                                title: 'Region',
                                description: country.region.toLocaleString(),
                            },
                            {
                                title: 'Capital',
                                description: country.capital.toLocaleString(),
                            },
                        ]
                    };

                    return (
                        <Card key={country.name} onClick={()=> navigate(`/country/${country.name}`)} {...countryinfo} />
                    )
                })}
            </List></>
    )
}

export default HomePage;