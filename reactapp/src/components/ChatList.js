//Gönderilen mesajların listeleneceği kısım ///Contex içinde varolan mesajları burada listeleyecegiz
//Context nasıl bagalanacgız
import React, { useEffect, useRef } from 'react'
import {useChat} from "../context/ChatContext";
import ChatItem from "./ChatItem";
import ScrollableFeed from 'react-scrollable-feed'; //mesajı ekledigimizde scroll en aşagı gelmesi için
// npm install --save react-scrollable-feed diyerek projeye dahil ettim (yarn add react-scrollable-feed)

function ChatList(props) {
    const {messages} = useChat();//gelen mesajları contexten aldım aşagıda listeleyecegım
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    });

    return (

        <div className="chats">
            <div>
                {
                    messages.map((item, key) => (<ChatItem key={key} item={item}/>))
                }
                <div ref={messagesEndRef} />
            </div>

            {/*<span className="u1 chat">Hey sam, whats up?</span>*/}
            {/*<span className="u2 chat">nothing here how 'bout u?</span>*/}
            {/*<span*/}
            {/*    className="u1 chat">I'm just heading up to your neck of the woods for some work related stuff.</span>*/}
            {/*<span className="u1 chat">driveing through mcdonalds right now</span>*/}
            {/*<span className="u2 chat">cool! where exactly will you be?</span>*/}
            {/*<span className="u1 chat">up in the ridgway, mt. horab area</span>*/}
        </div>



    );
}

export default ChatList;