import React from 'react';
import {Link} from "react-router-dom";
import './Home.css';
import CategoryCard from "../../Category/CategoryCard/CategoryCard";
import categoryService from "../../services/category";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: []
        };
    }

    componentDidMount() {
        categoryService.getAll()
            .then(categories => {
                this.setState({
                    categories
                })
            });
    }

    renderGuest() {
        return (
            <>
                <h1>Welcome to best quiz game</h1>
                <p><Link to="user/login">Login</Link> | <Link to="user/register">Register</Link></p>
            </>
        );
    }

    renderUser() {
        return (
            <>
                <h1>Select category</h1>
                <section className="quiz-themes">
                    {this.state.categories.map(category => {
                        return <CategoryCard key={category.id} name={category.name} id={category.id}/>
                    })}
                </section>
            </>
        );
    }

    render() {
        return (
            <main>
                {this.props.isLogged ? this.renderUser() : this.renderGuest()}
            </main>
        );
    }
}

export default Home;