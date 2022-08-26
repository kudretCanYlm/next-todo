import { useRef, useCallback } from "react"

export default function AddTodoCard({ onClick = f => f }) {

    const text = useRef();

    const callBack = useCallback((e) => {
        if (e.key == "Enter")
            onClick(text.current.value);
    }, [text])

    return (
        <div className="add-todo-card">
            <input ref={text} onKeyDown={callBack} placeholder="enter todo" type={"text"} />
        </div>
    )
}