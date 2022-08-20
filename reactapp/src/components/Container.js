// Socket io bağlanma, mesajların listelenmesi,aynı zamanda bir input formu olacak vs bu kısımda tanım yapılacak
import {useEffect} from 'react';
import ChatList from "./ChatList";
import ChatForm from "./ChatForm";
import "./styles.css";
import {useChat} from "../context/ChatContext"
import {init, subscriberGetChat, subscriberGetAllMessage} from "../socketApi";
import ScrollableFeed from "react-scrollable-feed";

//Backend bağlantım


function Container(props) {
    const {setMessages} = useChat();
    useEffect(() => {
        init();//ComponentDidMount anında(Component oluşunca) gittim init fonksiyonmla socket.io backendime baglandım
        // [] bu component demek

        // subscriberGetAllMessage((getAllMessage)=>{
        //     //console.log(getAllMessage);
        //     setMessages(getAllMessage);
        //
        // });
        subscriberGetChat((message) => {//component render edildiginde message stateti al true ekle
            setMessages((prevState) => [...prevState, {message, fromMe: true}]);//mesaj benden mi true değer göneriyorum
        });
    }, [])
    return (
        <div>
            <div className="casing">

                <div className="window">
                    <div className="header">Alper ÖNER Multiple Messages</div>

                        <ChatList></ChatList>


                </div>

                <ChatForm></ChatForm>

                <div className="home-btn">
                    <div className="hb-square"></div>
                </div>

            </div>


        </div>
    );
}

export default Container;