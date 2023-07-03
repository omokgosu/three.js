import { Link } from "react-router-dom"

export default function Header(){

    return(
        <header className="header">
            <h2>헤더</h2>
            <ul>
                <li>
                    <Link to='/'>메인</Link>
                </li>
                <li>
                    <Link to='/circle'>원</Link>
                </li>
                <li>
                    <Link to='/square'>사각형</Link>
                </li>
            </ul>
        </header>
    )
}