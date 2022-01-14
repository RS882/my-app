import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { addRedirectLoginUrl } from '../../redux/authReducer';


export const withAuthRedirect = (Component) => {
	class RedirectComponent extends React.Component {
		render() {

			if (!this.props.isAuth) {
				this.props.addRedirectLoginUrl(this.props.match.url)
				return <Redirect to='/login' />
			}
			return <Component {...this.props} />
		}
	}
	const mapStateToPropsForRedirect = (state) => ({
		isAuth: state.auth.isAuth,
	})


	return compose(
		connect(mapStateToPropsForRedirect, { addRedirectLoginUrl }),
		withRouter
	)(RedirectComponent)


}