import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'
import hash from '@adonisjs/core/services/hash'

export default class AuthController {
    async login({ request, auth, response }: HttpContext) {
        const { email, password } = request.only(['email', 'password'])

        const user = await User.findBy('email', email)

        if (!user) {
            return response.status(401).json({ message: 'Invalid credentials' })
        }

        if (!(await hash.verify(user.password, password))) {
            return response.status(401).json({ message: 'Invalid credentials' })
        }

        const token = await User.accessTokens.create(user)

        return response.json({ type: 'bearer', value: token.value!.release() })
    }

    async getUser({ auth, response }: HttpContext) {
        const user = auth.use('api').user

        return response.json({ user })
    }
}