export const getAppDate = {
	initializated: state => state.app.initializated,
};
export const getProfileDate = {
	profile: state => state.profilePage.profile,
	status: state => state.profilePage.status,
};

export const getAuthDate = {
	userId: state => state.auth.userId,
}