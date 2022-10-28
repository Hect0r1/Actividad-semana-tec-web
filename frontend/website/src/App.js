import {Link} from "react-router-dom";

function App(){
    return (
        <>
        <h1>Bienvenido</h1>

        <div style={{
            display: 'flex',
            alignItems: 'centlefter',
            justifyContent: 'left',
            height: '10vh'
        }}>
            <Link to="/user_me">
                <button type="button" className="btn btn-primary"> Go to my account</button>
            </Link>
        </div>
      
        <div>
            <Link to="/users">
                <button type="button" className="btn btn-primary"> Go to Users</button>
            </Link>
        </div >
        </>
    );
}

export default App;