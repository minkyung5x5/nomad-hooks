import dafaultAxios from "axios";
import { useState, useEffect } from "react";

const useAxios = (opts, axiosInstance = dafaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });
    const [trigger, setTrigger] = useState(0);
    const refetch = () => {
        setState({
            ...state,
            loading: true
        });
        setTrigger(Date.now());
        // trigger로 Date.now()를 사용한다!
    };
    useEffect(() => {
        axiosInstance(opts)
            .then((data) => {
                setState({
                    ...state,
                    loading: false,
                    data
                });
            })
            .catch(error => {
                setState({ ...state, loading: false, error });
            });
    }, [trigger]); // trigger가 바뀔때마다 useEffect가 실행된다.
    if (!opts.url) {
        return;
    }
    return { ...state, refetch };
};

export default useAxios;

const App = () => {
    const { loading, data, error, refetch } = useAxios({
        url: "https://yts.mx/api/v2/list_movies.json"
    });
    console.log(`loading: ${loading}\ndata: ${JSON.stringify(data)}\n`)
    return (
        <div className="App" style={{ height: "1000vh" }}>
            <h1>{data && data.status}</h1>
            <h2>{loading && "Loading"}</h2>
            <button onClick={refetch}>Refetch</button>
        </div>
    );
};