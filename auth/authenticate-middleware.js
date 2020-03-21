
function authenticate() {
	return async (req, res, next) => {
	try {
    if (!req.session || !req.session.user) {
		console.log("in middleware error, user->",req.session.user)
		return res.status(401).json({ you: 'shall not pass!' });
	}
		console.log("middleware user->",req.session.user)
		next()
	} catch(err) {
		next(err)
  }
 }
}

function authCookie() {
	return async (req, res, next) => {
		console.log('cookie token', req.headers)
		try {
			if(!req.headers.authorization) {
				return res.status(401).json({ you: 'shall not pass! in cookie' });
			}
			next()
		} catch(err) {
			next(err)
		}
	}
}

module.exports = { authenticate, authCookie }