import React from 'react';

export default class AsyncComponent extends React.Component {
    state = {
        component: null
    }
    componentDidMount() {
        this.props.loader((componentModule) => {
          this.setState({
              component: componentModule.default
          });
        });
    }
    renderPlaceholder() {
      return <div>Loading</div>;
    }
    render() {
        if (this.state.component) {
            return <this.state.component/>
        }
        return (this.props.renderPlaceholder || this.renderPlaceholder)();
    }
}

AsyncComponent.propTypes = {
    loader: React.PropTypes.func.isRequired,
    renderPlaceholder: React.PropTypes.func
};
