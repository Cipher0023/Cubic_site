import express from 'express'
import {PrismaClient } from '@prisma/client'

// Initialize Express Router and Prisma Client
const router = express.Router()
const prisma = new PrismaClient()

/**
 * GET /listar-usuarios
 * Lists all users from the database
 * @route GET /listar-usuarios
 * @returns {Object} 200 - Success response with users array
 * @returns {Object} 500 - Server error
 */
router.get('/listar-usuarios', async (req, res) => {
    try{
        const users = await prisma.user.findMany()
        res.status(200).json({message: 'Usuários listados com sucesso', users})
    }
    catch(err) {
        console.log(err)
        res.status(500).json({message: 'Erro no servidor, tente novamente mais tarde'})
    }
})

export default router
