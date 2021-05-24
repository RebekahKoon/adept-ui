import withSession from '../../lib/session'
import client from '../../apollo/apolloClient'
import { LOGIN_USER } from '../../queries/login'

export default withSession(async (req, res) => {
  const { email, password } = await req.body
  try {
    const { data, errors } = await client.mutate({
      mutation: LOGIN_USER,
      variables: { email, password },
    })
    if (errors) {
      throw errors
    }
    const user = {
      isLoggedIn: true,
      userId: data.loginUser.user.userId,
      name: data.loginUser.user.name,
      email: data.loginUser.user.email,
      type: data.loginUser.user.type,
    }
    req.session.set('user', user)
    await req.session.save()
    return res.json(user)
  } catch (err) {
    // catch the error and return it as json
    const { graphQLErrors, networkError } = err
    return res
      .status(err.response?.status || 500)
      .json({ message: err.message })
  }
})
