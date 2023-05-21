const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Dakotah" />
    </div>
);


root.render(<App />);