//Her bir mesaj balonunun görnüneceği component
import React from 'react';

function ChatItem({item}) {
    return (

            <span className={`${item.fromMe ? 'u1' :'u2'} chat `}>{item.message}</span>


    );
}

export default ChatItem;