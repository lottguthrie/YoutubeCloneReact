import React, { useState } from 'react';

export const Search = props => {
    const [channelId, setChannelId] = useState('');
    return (
        <div>
            <div className="search">
                <input type="text" onChange={event => setChannelId(event.target.value)} placeholder="Search Youtube" />
                <button disabled={!channelId.length} onClick={() => props.setCurrentChannelId(channelId)}>Search</button>
            </div>
        </div>
    );
}