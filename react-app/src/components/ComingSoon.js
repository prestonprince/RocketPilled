import { useHistory } from "react-router-dom";
function ComingSoon() {
    const history = useHistory();

    function goHome() {
        history.push('/')
    }

    return (
        <>
        <div className='comingSoonContainer'>
            <h2 className='comingSoon'>Feature Coming Soon!</h2>
            <button className="home-btn" onClick={goHome}>Home</button>
        </div>
        </>
    )
};


export default ComingSoon
