import React from 'react';
import {Link} from "react-router-dom";
import './Home.css';
import CategoryCard from "../../Category/CategoryCard/CategoryCard";
import categoryService from "../../services/category";
import LoaderHOC from "../LoaderHOC";
import Title from "../Title";
import {BrowserView, MobileView} from 'react-device-detect';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: []
        };
    }

    componentDidMount() {
        this.getCategories();
    }

    getCategories() {
        this.props.startLoader();
        categoryService.getAll()
            .then(categories => {
                this.setState({
                    categories
                });
                this.props.stopLoader();
            });
    }

    renderGuest() {
        return (
            <>
                <h1>Welcome to best quiz game</h1>
                <p><Link to="user/login">Login</Link> | <Link to="user/register">Register</Link></p>
                <BrowserView>
                    <img src="images/home-page-orange.png" style={{width: "70%"}} className="home-image"/>
                </BrowserView>
                <MobileView>
                    <img src="images/home-page-mobile.png" style={{width: "70%"}} className="home-image"/>
                </MobileView>
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
                <Title>Quiz</Title>
                {this.props.isLogged ? this.renderUser() : this.renderGuest()}
            </main>
        );
    }
}

export default LoaderHOC(Home);