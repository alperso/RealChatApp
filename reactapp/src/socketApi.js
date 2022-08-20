import io from "socket.io-client"; //npm instal socket.io-client ile çalıştırdım

let socket;

//bağlantımızı gerçekleştirrecek initialization method
export const init = () => {
    console.log("Connecting....Alper");
    socket = io("http://localhost:3000", {
        transports: ["websocket"],
    });
    socket.on("connect", () => console.log("Connected...ALper")); //on ile connect baglatımdan 'connect' oldugu durumu bekledim ve ekrana yazdırdım

};
//Backende socket.io ya mesajların iletilmesini yapacagız----------------
export const sendMessage = (gonderilenmessage) => {
    //eğer soket varsa kanalına göndrecegim //beklenen kanal
    if (socket) socket.emit("new-message", gonderilenmessage); //bu kanala mesajımı gönderdim
}

//Backend ile diğer clientlerda mesaj yazdıgında diğerlerinede veri aktarılma işlemi
//mesajları dinleyecek bir tanıma ihtiyacımız var -receive-message kanalını dinleyerek mesajları alalaım

export const subscriberGetChat = (cb) => {
    if (!socket) return; //soket yoksa bıraksın

    socket.on("receive-message", (sokettekimesajlar) => {
        console.log("Yeni Mesaj var", sokettekimesajlar);
        cb(sokettekimesajlar);
    });
};

export const subscriberGetAllMessage=(cb)=>{
    if (!socket) return; //soket yoksa bıraksın

    socket.on("message-list", (allMessage) => {
        console.log("İnitial:", allMessage);
        cb(allMessage);
    });
}