import {useState} from 'react';
//İnputa bir şey girildiği anda stateımza aktarılmalı
import {sendMessage} from "../socketApi";

import {useChat} from "../context/ChatContext";//Mesajların ekranda listelenmesi için useChat Hookunu buraya import ettim

function ChatForm(props) {
    const [message, setMessage] = useState("");
    const {setMessages}=useChat();//mesajların tamamını aldım default olan Selam vs
    const handleSubmit = (e) => {
        e.preventDefault();//submit olmasını yani sayfanın yenilenmesini engelliyoruz
        //form submit oldugunda
        console.log("Gönderilen MEsaj : "+message);

        setMessages((prevState)=>[...prevState,{message}]);//önceki mesajlarıda aldım ekledim yoksa yeni yazdıgım
        // tek başına sayfada gözzüküp diğerleri gidecekti
        
        sendMessage(message);//yazmış oldugum mesaj ne ise onu gönderecegim
        setMessage('');//form gönderildigi anda messajı boşa çekebiliriz.


    }

    return (
        <div className="new-chat">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="message"
                    placeholder="Mesajınızı buraya yazabilirsiniz..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                {/*<button id="send">Gönder</button>*/}
            </form>

        </div>
    );
}

export default ChatForm;