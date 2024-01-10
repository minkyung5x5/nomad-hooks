const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = event => {
        const {
            target: { value }
        } = event;
        let willUpdate = true;
        if (typeof validator === "function") {
            willUpdate = validator(value);
        }
        if (willUpdate) {
            setValue(value);
        }
    };
    return { props: { value, onChange }, utils: { setValue } };
};

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
