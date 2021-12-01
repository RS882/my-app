import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from './../../redux/profileReducer';
import Profile from './Profile';
import jobIcon from './../../assets/img/looking.jpg';

import facebook from './../../assets/social_icon/3259376_facebook_media_social_icon.svg';
import website from './../../assets/social_icon/1873909_world_social media_earth_website_world wide web_icon.svg';
import vk from './../../assets/social_icon/6214529_logo_vk_vkontakte_icon.svg';
import twitter from './../../assets/social_icon/1249999_social media_twitter_network_message_interaction_icon.svg';
import instagram from './../../assets/social_icon/3259424_instagram_social media_social_icon.svg';
import youtube from './../../assets/social_icon/317714_video_youtube_icon.svg';
import github from './../../assets/social_icon/3259374_github_media_social_icon.svg';
import mainLink from './../../assets/social_icon/3171663_link_share_icon.svg';

// facebook": "facebook.com",
//     "website": null,
//     "vk": "vk.com/dimych",
//     "twitter": "https://twitter.com/@sdf",
//     "instagram": "instagra.com/sds",
//     "youtube": null,
//     "github": "github.com",
//     "mainLink"





class ProfileContainer extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
			.then(respons => {

				this.props.setUserProfile(respons.data)

			})
	}

	render() {

		return <Profile {...this.props} profile={this.props.profile} />
	}

}

const mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	jobIcon,
	socialIcon: { facebook, website, vk, twitter, instagram, youtube, github, mainLink, },
})

export default connect(mapStateToProps, { setUserProfile, })(ProfileContainer)