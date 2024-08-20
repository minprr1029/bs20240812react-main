import { useState } from "react";

const Input = ({onClickEvent}) => {
    const [inputTitle, setInputTtile] = useState("");

    return (
    <div className="input-title">
        <div className="container" style={{padding: "10px"}}>
        <div className="input-group mb-3">
            <input value={inputTitle} onChange={onChangeTitle} type="text" className="form-control"/>
            <div className="input-group-append">
                <button className="btn btn-success" onClick={onClickEvent}>Save</button>
            </div>
        </div>
        </div>
    </div>
    );
}

// 대표 컴포넌트 하나만 모듈 등록
export default Input;

// const InputSub = () => {
//     return (<>

//     </>);
// }

// 여로 콤포넌트를 모듈로 등록 할때
// export {Input, InputSub};
// 불러올때 import {Input, InputSub} from "./Input"