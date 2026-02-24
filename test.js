const fs = require('fs');

async function test() {
    try {
        const res = await fetch('https://twitter-cx55.onrender.com/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: 'query { getAllTweets { id content } }' })
        });
        const data = await res.json();
        fs.writeFileSync('output.json', JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
        console.error("Fetch failed:", error);
    }
}

test();
