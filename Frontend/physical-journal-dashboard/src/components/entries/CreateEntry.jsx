import {useState} from 'react';
import axios_instance from '../../helpers/apiconfig';

const CreateEntry = () => {
    const [weightEntry, setWeightEntry] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(weightEntry);
        try{
            const resp = await axios_instance.post('/entries', {
                weight: weightEntry,
                date: Date.now()
            })
            console.log(resp.data)
        } catch(err){
            console.log(err);
        }
    }

    return <>
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setWeightEntry(e.target.value)} type='number'/>
                <button type='submit'>Add</button>
            </form>
        </div>
    </>
}

export default CreateEntry