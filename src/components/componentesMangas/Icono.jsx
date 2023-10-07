

const ChatIcon = ({ onClick, isVisible }) => {
    return (

        <div className={`chat-icon z-50 h-12 w-12 bg-blue-500 ${isVisible ? 'hidden' : ''}`} onClick={onClick}>

        </div>
    );
};

export default ChatIcon;