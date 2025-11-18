import { useState } from "react";

function App() {
    const [toDo, setToDo] = useState("");

    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(toDo);
        if (toDo === "") {
            return;
        }
        setTodos([...toDos, toDo]);
        setToDo("");
    };

    // 여러 개의 toDo를 저장할 수 있는 array 생성
    const [toDos, setTodos] = useState([]);

    return (
        <div>
            <h1>My ToDo ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    value={toDo}
                    onChange={onChange}
                    type={"text"}
                    placeholder={"Write your to do ..."}
                />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
