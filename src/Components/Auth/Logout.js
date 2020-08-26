import React from 'react';
import { logOut } from '../../store/actions/authActions'
import { connect } from 'react-redux';


class Logout extends React.Component {
    componentDidMount = () => {
        this.props.logOut();
    }

    render() {
        return (
            <div>
                {
                    this.props.loginStatus ?
                        <div>Logout fail</div> :
                        <div>Logout succesful</div>
                }
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        loginStatus: !state.firebase.auth.isEmpty
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => {
            dispatch(logOut());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
