import logo from '../../logo.svg';
import '../../App.css';
import axios_instance from '../../helpers/apiconfig';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Dashboard = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // getEntries();
    }, []);

    return <>
        {loading ? <div className="App"><img src={logo} className="App-logo" alt="logo" /></div> : null}
        <div style={{width: "80%"}}>
        </div>
        <div style={{width: '20%', float: "right"}}>
            <Link to='/entries'>Manage Entries</Link>
            <Link to='/add-entry'>Add Entry</Link>
        </div>
    </>
}

export default Dashboard