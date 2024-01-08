const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue)
    const onChange = (e) => {
        const {
            target: { value }
        } = e
        let willUpdate = true
        if (typeof validator === 'function') {
            willUpdate = validator(value)
        }
        if (willUpdate) {
            setValue(value)
        }
    }
    return { value, onChange }
}

export default useInput;

const App = () => {
    const maxLen = value => value.length < 10;
    const name = useInput("Mr.", maxLen);
    return (
        <div>
        	// name의 value, onChange가 shadowing 된다.
            <input {...name} />
        </div>
    );
};
