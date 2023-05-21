const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const App = () => (
    <div>
        <Person
            name="Dakotah"
            age={29}
            hobbies={['struggling to code',
                'working himself to death',
                'having a ha-ha-hard time',
                'watching anime']} />
        <Person
            name="Sarah"
            age={29}
            hobbies={['spending time with her daughter',
                'tending to her home',
                'going to String Cheese concerts',
                'making tons of friends']} />
        <Person
            name="Ivy"
            age={9}
            hobbies={['being an absolute potato',
                'saying please for food',
                'barking at everyone constantly',
                'being an excellent girl']} />
    </div>
);

root.render(<App />);
