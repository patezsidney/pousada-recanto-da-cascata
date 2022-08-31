import ReactWhatsapp from "react-whatsapp";

import FloatingWhatsApp from "react-floating-whatsapp";
import imagens from "../../assets/images"
export const WhatsApp = () => {
    return (
        <>
            <ReactWhatsapp element="div" number="+5519997647592" message="Olá em que posso ajudar?" />
            <FloatingWhatsApp 
            phoneNumber="5519997647592" 
            accountName="Pousada Recanto da Cascata" 
            statusMessage="online"
            chatMessage="Como posso te ajudar?"
            placeholder="Digite sua mensagem..."
            avatar="assets/images/LOGO_recanto-das-cascatas.png"
            />
        </>
    )
}