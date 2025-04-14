import logo from '../../logo.svg';
import '../../App.css';
import axios_instance from '../../helpers/apiconfig';
import { useEffect, useState } from 'react';

const Dashboard = () => {
    const [entries, setEntries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getEntries();
    }, []);

    async function getEntries() {
        setLoading(true);
        try{
            const response = await axios_instance.get('/pokemon');
            setEntries(response.data.results);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    return <>
        {loading ? <div className="App"><img src={logo} className="App-logo" alt="logo" /></div> : null}
        {entries.length > 0 ? (
            <div>
                <ul>
                    {entries.map((entry, index) => (
                        <li key={index}>
                            {entry.name}
                        </li>
                    ))}
                </ul>
            </div>
        ) : null}
    </>
}

export default Dashboard