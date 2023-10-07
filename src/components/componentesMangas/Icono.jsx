import icon from "public/img/icon.webp"

const ChatIcon = ({ onClick, isVisible }) => {
    return (

        <div className={`chat-icon z-50 ${isVisible ? 'hidden' : ''}`} onClick={onClick}>
            <img src={icon} alt="" />
        </div>
    );
};

export default ChatIcon;