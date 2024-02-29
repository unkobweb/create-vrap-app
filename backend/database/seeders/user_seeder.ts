import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    const users = await User.all()

    if (users.length === 0) {
      await User.createMany([
        {
          email: 'sieg.alexandre@gmail.com',
          password: '123456',
        },
      ])
    }
  }
}