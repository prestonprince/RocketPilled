import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const MatchesNav = ({ setType }) => {
    const history = useHistory()

    useEffect(() => {
        setType('all')
    }, [])

    const teamsButton = () => {
        history.push('/teams')
    }

    const handleType = (type, e) => {
        e.stopPropagation()
        setType(type)
    };

    return (
        <div>
            <div>
                <div>
                    <span onClick={(e) => handleType('all', e)}>ALL</span>
                </div>
                <div>
                    <span onClick={(e) => handleType('Solo', e)}>SOLO</span>
                </div>
                <div>
                    <span onClick={(e) => handleType('Duo', e)}>DUO</span>
                </div>
                <div>
                    <span onClick={(e) => handleType('Squad', e)}>SQUAD</span>
                </div>
            </div>
            <div>
                <button onClick={teamsButton}>Teams</button>
                <div>
                    <button>Create Match</button>
                    {/* on button click, show drop down below */}
                    {/* <div>
                        <span>Solo</span>
                        <span>Duo</span>
                        <span>Squad</span>
                    </div> */}
                </div>
            </div>
        </div>
    )
};

export default MatchesNav;
