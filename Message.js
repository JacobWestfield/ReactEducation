import './Message.css';

//вызываю обращение к пропсам через их название data в index.js и уже к свойствам объекта которые в пропсах и находится
function Message(props) {
    return (
        <div className="Message">
            <header className="Message-header">
                {props.data.header}
            </header>
            <div className="Message-text">{props.data.text}</div>
        </div>
    );
}

export default Message;