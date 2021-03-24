import React from 'react';
import Loader from './Loader/Loader';

function LoaderHOC(Component) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isActive: false
            }
        }

        setIsLoaderActive(val) {
            this.setState({isActive: val});
        }

        render() {
            return (
                <>
                    {this.state.isActive ? <Loader /> : ''}
                    <Component startLoader={() => this.setIsLoaderActive.call(this, true)} stopLoader={() => this.setIsLoaderActive.call(this, false)} />
                </>
            )
        }
    }
}

export default LoaderHOC;