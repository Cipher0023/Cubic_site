import bcrypt from 'bcrypt'         // For password hashing
import jwt from 'jsonwebtoken'      // For authentication tokens
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;


export const loginUser = async (req, res) => {
    try{
        const {email, password} = req.body;

        const user = await prisma.user.findUnique({where: {email}});
        if (!user) {
            return res.status(404).json({message: 'Usuário não encontrado'});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch){
            return res.status(400).json({message:'senha incorreta'});
        }

        const token = jwt.sign({id:user.id},JWT_SECRET, {expiresIn: '7d'});
        res.status(200).json({token});

    }
    catch(err){
        res.status(500).json({ message: 'Erro no servidor, tente novamente mais tarde' });
    }

}