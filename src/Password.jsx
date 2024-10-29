import React, { useState } from 'react'

export const Password = () => {
    const [length, setLength] = useState(8);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);

    const [password, setPassword] = useState("");

    const generatePassword = () => {
        let charset = "";
        if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
        if (includeNumbers) charset += "0123456789";
        if (includeSymbols) charset += "!@#$%^&*-=+";
        let generatedpassword = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            generatedpassword += charset[randomIndex];
        }
        setPassword(generatedpassword);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        alert("Password copied")
    }

    return (
        <div className="password-generator">
            <h2>Strong Password Generator</h2>
            <div className="input-group">
                <label htmlFor="num">Password Length: </label>
                <input type="number" id="num" value={length} onChange={(e) =>
                    setLength(parseInt(e.target.value))} />
            </div>
            <div className="checkbox-group">
                <input type="checkbox" id='upper' checked={includeUppercase}
                    onChange={(e) => setIncludeUppercase(e.target.checked)} />
                <label htmlFor="upper"> Include Uppercase</label>
            </div>
            <div className="checkbox-group">
                <input type="checkbox" id='lower' checked={includeLowercase}
                    onChange={(e) => setIncludeLowercase(e.target.checked)} />
                <label htmlFor="upper"> Include Lowercase</label>
            </div>

            <div className="checkbox-group">
                <input type="checkbox" id='numbers' checked={includeNumbers}
                    onChange={(e) => setIncludeNumbers(e.target.checked)} />
                <label htmlFor="numbers"> Include Numbers</label>
            </div>

            <div className="checkbox-group">
                <input type="checkbox" id='symbol' checked={includeSymbols}
                    onChange={(e) => setIncludeSymbols(e.target.checked)} />
                <label htmlFor="symbol"> Include Symbol</label>
            </div>
            <button className='generate-btn' onClick={generatePassword}>Generate Password </button>

            <div className="generate-password">
                <input type="text" readOnly value={password} />
                <button className='copy-btn' onClick={copyToClipboard}> Copy </button>
            </div>

        </div>
    )
}
