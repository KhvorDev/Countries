import styled from 'styled-components';
import Container from './Container';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { IoMoon } from 'react-icons/io5';


const HeaderElement = styled.header`
    box-shadow: var(--shadow);
    background-color: var(--colors-ui-base);
    transition: var(--transition);
    min-width: 350px;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: ctnter;
    padding: 20px 0px;
`;

const Title = styled(Link).attrs({
    to: '/',
})`
    color: var(--colors-text);
    font-size: (--fs-sm);
    text-decoration: none;
    font-weight: var(--fw-bold);
    transition: var(--transition);
`;

const ThemeSwitcher = styled.div`
    cursor: pointer;
    color: var(--colors-text);
   // font-size: (--fs-sm);
    font-weight: var(--fw-bold);
    text-transform: capitalize;
    transition: var(--transition);
`;


function Header() {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => { theme === 'light' ? setTheme('dark') : setTheme('light') };

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme]);

    return (
        <HeaderElement>
            <Container>
                <Wrapper>
                    <Title>Where is the world?</Title>
                    <ThemeSwitcher onClick={toggleTheme}>
                        <IoMoon size='14px'/>
                        <span style={{marginLeft: '0.75rem'}}>{theme === 'light' ? 'dark' : 'light'} Theme</span>
                    </ThemeSwitcher>
                </Wrapper>
            </Container>
        </HeaderElement>
    )
}

export default Header;