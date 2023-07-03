import { Link } from "react-router-dom"
import styled from "styled-components";

export default function Header(){

    return(
        <HeaderLayout>
            <HeaderLogo>three.js</HeaderLogo>
            <HeaderNav>
                <li>
                    <StyledLink to='/'>메인</StyledLink>
                </li>
                <li>
                    <StyledLink to='/circle'>원</StyledLink>
                </li>
                <li>
                    <StyledLink to='/square'>사각형</StyledLink>
                </li>
            </HeaderNav>
        </HeaderLayout>
    )
}

const HeaderLayout = styled.header`
    display: flex;
`
const HeaderLogo = styled.h1`
    
`;
const HeaderNav = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    gap: 12px;
`
const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
`;