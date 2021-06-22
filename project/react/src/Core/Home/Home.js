import React from 'react';
import './Home.css';
import CategoryCard from "../../Category/CategoryCard/CategoryCard";
import categoryService from "../../services/category";
import LoaderHOC from "../LoaderHOC";
import Title from "../Title";
import {BrowserView, MobileView} from 'react-device-detect';
import {withRouter} from "react-router";
import {withTranslation} from "react-i18next";
import i18n from "../../i18n";

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
        console.log(i18n.language);
        return (
            <>
                <h1 style={{fontFamily: "Caveat", fontSize: "42pt", textTransform: "uppercase"}}>
                    {this.props.t('welcome-to-game')}
                </h1>
                <div className="flex-btn">
                    <button className="btn pointer" onClick={() => this.props.history.push('user/login')}>
                        {this.props.t('login-verb')}
                    </button>
                    <button className="btn pointer" onClick={() => this.props.history.push('user/register')}>
                        {this.props.t('register-verb')}
                    </button>
                </div>
                <BrowserView>
                    {i18n.language === 'en' ?
                        <img src="images/home-page-orange.png" style={{width: "60%"}} className="home-image"/> : ""}
                    {i18n.language === 'ge' ?
                        <img src="images/home-page-ge.png" style={{width: "60%"}} className="home-image"/> : ""}
                </BrowserView>
                <MobileView>
                    <img src="images/home-page-mobile.png" style={{width: "60%"}} className="home-image"/>
                </MobileView>
                <div className="wrapper">
                    <hr/>
                </div>
                <section className="game-details wrapper">
                    <div>
                        <h3>Quiz</h3>
                        <ul>
                            <li><span className="bold">Easy</span> to play</li>
                            <li><span className="bold">Different</span> questions in <span
                                className="bold">different</span> categories
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Quiz</h3>
                        <ul>
                            <li>a</li>
                        </ul>
                    </div>
                </section>
                <div className="wrapper">
                    <hr/>
                </div>
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

export default withTranslation()(LoaderHOC(withRouter(Home)));