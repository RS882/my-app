import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';

import { addRedirectLoginUrl } from '../../redux/authReducer';


export const withAuthRedirect = (Component) => {
	const RedirectComponent = (props) => {
		const url = useLocation();
		useEffect(() => (!props.isAuth) && props.addRedirectLoginUrl(url.pathname))
		if (!props.isAuth) return <Redirect to='/login' />
		return <Component {...props} />
	}

	const mapStateToPropsForRedirect = (state) => ({
		isAuth: state.auth.isAuth,
	})

	return connect(mapStateToPropsForRedirect, { addRedirectLoginUrl })(RedirectComponent)

}