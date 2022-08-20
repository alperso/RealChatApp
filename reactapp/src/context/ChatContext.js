import {createContext, useContext, useState} from 'react';
// Bu context mesajları listeleyecek ve istedigim componentte (sarmallanmış olan tabiki) aktarmış olacagım
//Mesajları Listeledğimiz Context------------------------------------------
const ChatContext=createContext();//Contextimi oluşturdum

export const ChatProvider=({children})=>{//Sarmallanan kısım children içine düşecek
    const [messages,setMessages]=useState([]);//boş bir state oluşturuyorum mesajlarımı alacagım



    const values={//obje olarak gönderiyorum
        messages,
        setMessages
    }//dışarıdan bu mesajlara erişmek için value olarak provider içine value parametresine tanımladım
    return <ChatContext.Provider value={values}>
        {children}
    </ChatContext.Provider>
}
export const useChat=()=> useContext(ChatContext);
//export default ChatContext;//dışardan erişmek için export yaptım