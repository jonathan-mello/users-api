import express from 'express'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient();
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET

router.post('/register', async (req, res) => {

    try {
        const user = req.body

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(user.password, salt)

        const userDB = await prisma.user.create({
            data: {
                email: user.email,
                name: user.name,
                password: hashPassword,
            },
        })
        res.status(201).json({message: 'Cadastro feito com sucesso!'})
    } catch (err) {
        res.status(500).json({ message: 'Caiu a casa' });
    }
})

router.post('/login', async (req, res) => {

    try {
        const userInfo = req.body

        const user = await prisma.user.findUnique({
            where: { email: userInfo.email },
        })
        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado" })
        }

        const isMatch = await bcrypt.compare(userInfo.password, user.password)

        if(!isMatch) {
            return res.status(400).json({message: 'Senha inválida'})
        }

        const token = jwt.sign({ id: user.id}, JWT_SECRET, { expiresIn: '1m'})

        res.status(200).json({message: 'Login feito com sucesso!'})
        console.log(token)

    } catch (err) {
        res.status(500).json({ message: 'Erro no servidor' });

    }

})

export default router
