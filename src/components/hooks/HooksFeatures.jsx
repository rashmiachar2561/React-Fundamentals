import React, { Component, useContext } from 'react';
import {CountryContext} from '../../App';
function HooksFeatures({}) {
    const [count, setCount] = React.useState(0);
    const {country, setCountry} = React.useContext(CountryContext);

    return (
        <>
            <button onClick={() => {
                let tut = setCount(count + 1)
                setCountry('QA')

            }}>Increment with render from HooksFeatures</button>
            <div>
                Count : {count}
            </div>
            <div>
                Country : {country}
            </div>

        </>
    )
}

export function Timer() {
    const [count1, setCount1] = React.useState(0);
    const [count, setCount] = React.useState(0);
    const [handleSubmitStatus, sethandleSubmitStatus] = React.useState('');
    const [formdata, setFormdata] = React.useState({});

    React.useEffect(() => {
        setCount(count1 + 2)
    }, [count1]);

    const handleSubmit = (e) => {
        setCount(count + 2)
        sethandleSubmitStatus('submitted ' + count)
    }
    return (
        <>
            <HooksFeatures />
            <button onClick={() => {
                let tut = setCount1(count1 + 1)

            }}>Increment with render from Timer</button>
            <div>
                count:{count1}
            </div>
            {/* <div>
                count2:{count}
            </div> */}
            <button onClick={handleSubmit}>Submit</button>
            <p>{handleSubmitStatus}</p>


            <form>
                <input type='text' onChange={e => { setFormdata({ ...formdata, username: e.target.value }) }}></input>
                <input type='password' onChange={e => { setFormdata({ ...formdata, password: e.target.value }) }}></input>
                <button onClick={e => {
                    e.preventDefault()
                }}>submit</button>
            </form>

        </>
    )
}

export default HooksFeatures
