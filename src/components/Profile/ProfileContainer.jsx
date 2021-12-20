
import React from 'react';
import { connect } from 'react-redux';
import { getProfile } from './../../redux/profileReducer';
import Profile from './Profile';
import jobIcon from './../../assets/img/looking.jpg';

import facebook from './../../assets/social_icon/3259376_facebook_media_social_icon.svg';
import website from './../../assets/social_icon/1873909_world_social media_earth_website_world wide web_icon.svg';
import vk from './../../assets/social_icon/6214529_logo_vk_vkontakte_icon.svg';
import twitter from './../../assets/social_icon/1249999_social media_twitter_network_message_interaction_icon.svg';
import instagram from './../../assets/social_icon/3259424_instagram_social media_social_icon.svg';
import youtube from './../../assets/social_icon/3259396_media_social_youtube_icon.svg';
import github from './../../assets/social_icon/3259374_github_media_social_icon.svg';
import mainLink from './../../assets/social_icon/3171663_link_share_icon.svg';
import other from './../../assets/social_icon/social-media.png';

import { withRouter } from 'react-router-dom';
import avatarUser from './../../assets/img/user3.jpg';
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

	componentDidMount() {
		this.props.getProfile(this.props.match.params.userId)
	}
	render() {



		const social = (this.props.profile) ?
			(Object.entries(this.props.profile.contacts)
				.filter(el => el[1])
				.map(el => ({
					name: el[0],
					url: (el[1].startsWith('https://') || el[1].startsWith('http://')) ?
						el[1] : 'https://' + el[1],
					img: (el[0] in this.props.profile.contacts) ?
						this.props.socialIcon[el[0]] : this.props.socialIcon.other,
				}))) : [];

		return <Profile {...this.props} profile={this.props.profile} social={social} />
	}

}

const mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	avatarUser,
	jobIcon,
	socialIcon: { facebook, website, vk, twitter, instagram, youtube, github, mainLink, other, },
})

export default compose(
	connect(mapStateToProps, { getProfile }),
	withRouter,
	withAuthRedirect
)(ProfileContainer);

// const withRedirect = withAuthRedirect(ProfileContainer)
// const WithRoterProfileContainer = withRouter(withRedirect);

// export default connect(mapStateToProps, { getProfile })(WithRoterProfileContainer)