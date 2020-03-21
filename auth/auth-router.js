const bcrypt = require("bcryptjs")
const model = require("./auth-model")
const { authenticate } = require("./authenticate-middleware")

const router = require('express').Router();

router.post('/register', async (req, res, next) => {
  try {
		const { username } = req.body
		const user = await model.findBy({ username }).first()

		if (user) {
			return res.status(409).json({
				message: "Username is already taken",
			})
		}

		res.status(201).json(await model.add(req.body))
	} catch(err) {
		next(err)
	}
});

router.post('/login', authenticate(), async (req, res, next) => {
  try {
		const { username, password } = req.body
		const user = await model.findBy({ username }).first()
		const passwordValid = await bcrypt.compare(password, user.password)

		if (!user || !passwordValid) {
			return res.status(401).json({
				message: "Invalid Credentials",
			})
		}

		req.session.user = user
		console.log("login user->",req.session.user)
		res.status(201).json({
			message: `Welcome ${user.username}!`,
		})
	} catch(err) {
		next(err)
	}
});

module.exports = router;
