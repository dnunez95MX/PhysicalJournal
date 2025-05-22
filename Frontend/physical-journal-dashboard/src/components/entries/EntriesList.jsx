import logo from '../../logo.svg';
import '../../App.css';
import axios_instance from '../../helpers/apiconfig';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Dashboard = () => {
    const [entries, setEntries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getEntries();
    }, []);

    async function getEntries() {
        setLoading(true);
        try{
            await axios_instance.get('/entries').then((res) => {
                if (res.status !== 200) {
                    throw new Error('Failed to fetch items');
                }        
            setEntries(res.data.entries);
            setLoading(false);
            }).catch((err) => console.error(err));; 
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    return <>
        {loading ? <div className="App"><img src={logo} className="App-logo" alt="logo" /></div> : null}
        <div style={{width: "80%"}}>
        {entries.length > 0 ? (
            <div>
                <ul>
                    {entries.map((entry, index) => (
                        <li key={index}>
                            <p>{entry.date}</p>
                            <p>{entry.weight}</p>
                        </li>
                    ))}
                </ul>
            </div>
        ) : null}
        </div>
        <div style={{width: '20%', float: "right"}}>
            <Link to='/entries'>Manage Entries</Link>
        </div>
    </>
}

export default Dashboard