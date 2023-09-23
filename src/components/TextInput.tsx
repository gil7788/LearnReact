import React, { useEffect, useState } from "react";

export default function TextInput(props: any) {
    const { label } = props;
    const [text, setText] = useState("");
    const [phrase, setPhrase] = useState("");
    // const [isFocused, setIsFocused] = useState(false);
    // const [isTouched, setIsTouched] = useState(false);
    // const [isDirty, setIsDirty] = useState(false);
    
    const createPhrase = () => {
        setPhrase(text);
        setText("");
    }

    useEffect(() => {
        console.log("TextInput useEffect called. text:", text);
        console.log("text: ", text);
    } , [text]);

    useEffect(() => {
        console.log("TextInput useEffect called. phrase:", phrase);
        console.log("phrase: ", phrase);
    }, [phrase]);

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