import React, { useState } from "react";

interface TextInputProps {
    label: string;
    onTextSubmit: (text: string) => void;
}


export default function TextInput(props: TextInputProps) {
    const { label, onTextSubmit } = props;
    const [text, setText] = useState("");
    
    
    const createPhrase = () => {
        onTextSubmit(text);
        setText("");
    }

    return (
        <>
        <div className="form-group">
            <label>
            {label}
            <input
                type="text"
                name={label}
                value={text}
                onChange={e => setText(e.target.value)}
                className="form-control"
            />
            <button onClick={createPhrase}>Submit</button>
            </label>
        </div>
        </>
    );
    }