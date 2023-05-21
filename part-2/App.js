const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const App = () => (
    <div className="container">
        <Tweet
            username="Xindref"
            message="Man oh man is this React stuff confusing at first,
            but it's so cool once you get the syntax down! 💪"
        />
        <Tweet
            username="Xindref"
            message="Getting the date/time down was interesting too,
            but the implementation turned out pretty cool!"
        />
        <Tweet
            username="Xindref"
            message="Alright now to just wrap it up with some styling..
            I don't think Colt went over that much but we'll see what I can do!"
        />
    </div>
);

root.render(<App />);