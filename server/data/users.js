import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Dino Gayton',
        email: 'dino@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Clare Busetto',
        email: 'clare@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users;