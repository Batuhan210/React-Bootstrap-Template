import './container.style.scss';

const Home = () => {
    return (
    <div className="container">
        <div className='container-description'>
            <h2>
                A warm welcome!
            </h2>
            <p>
            Bootstrap utility classes are used to create this jumbotron since the old component
            has been removed from the framework. Why create custom CSS when you can use utilities?
            </p>
            <button className="btn">Call to action </button>
        </div>
    </div>
    );
};
export default Home;