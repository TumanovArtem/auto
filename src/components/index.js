import './index.css';

function LabelAndSelect(props) {
    return (
        <label htmlFor="" className="label-and-select">
            <span>{props.label}:</span>
            <select name="" id="">
                {props.options.map((item) => {
                    return <option value={item} key={item}>{item}</option>
                })}
            </select>
        </label>
    );
}

function LabelAndSplittedSelect(props) {
    return (
        <label htmlFor="" className="label-and-splitted-select">
            <span>{props.label}</span>
            <div className="splitted-select">
                <select name="" id="">
                    {props.options.map((item) => {
                        return <option value={item} key={item}>{item}</option>
                    })}
                </select>
                <span className="separator">-</span>
                <select name="" id="">
                    {props.options.map((item) => {
                        return <option value={item} key={item}>{item}</option>
                    })}
                </select>
            </div>
        </label>
    )
}

export {LabelAndSelect, LabelAndSplittedSelect};