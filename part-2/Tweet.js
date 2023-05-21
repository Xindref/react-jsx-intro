const today = new Date();
const formattedDate = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

let hours = today.getHours();
let ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12 || 12;
const minutes = today.getMinutes();

const formattedTime = `${hours}:${minutes} ${ampm}`;

const Tweet = (props) => (
    <div className="tweet-component">
        <div className="tweet-header">
            <div className="tweet-username">@{props.username}</div>
            <div className="tweet-date">{formattedDate} @ {formattedTime}</div>
        </div>
        <p className="tweet-message">{props.message}</p>
    </div>
);