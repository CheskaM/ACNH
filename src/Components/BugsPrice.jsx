import { useState, useEffect } from 'react';

export default function BugsPrice() {
    const [bugName, setBugName] = useState("");
    const [error, setError] = useState("");
    const [matchMessage, setMatchMessage] = useState("");
    const [bugs, setBugs] = useState([]);

    const apiKey = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        const fetchBugs = async () => {
            try {
                const response = await fetch('https://api.nookipedia.com/nh/bugs', {
                    headers: {
                        'X-API-KEY': apiKey,
                        'Accept-Version': '1.7.0',
                        'Cache-Control': 'no-cache',
                        'Pragma': 'no-cache'
                    }
                });

                if (!response.ok) throw new Error('API key is not working!');
                const data = await response.json();
                setBugs(data);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchBugs();
    }, []);

    const checkBug = (name) => {
        if (!name.trim()) {
            setMatchMessage("");
            return;
        }

        const match = bugs.find(
            (bug) => bug.name.toUpperCase() === name.toUpperCase()
        );

        if (match) {
            const diff = match.sell_flick - match.sell_nook;
            setMatchMessage(
                `${match.name} — Nook: ${match.sell_nook} bells VS. Flick: ${match.sell_flick} bells (Difference: ${diff} bells)`
            );
        } else {
            setMatchMessage("No bug found with this name.");
        }
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setBugName(value);
        setError("");
        checkBug(value);
    };

    return (
        <article className='bug-container'  style={{ maxWidth: 500, margin: "auto" }}>
            <input
                type="text"
                placeholder="Enter bug name"
                value={bugName}
                onChange={handleChange}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            {matchMessage && <p style={{ color: "white" }}>{matchMessage}</p>}
        </article>
    );
}
