import bcrypt from 'bcrypt'         // For password hashing
import {PrismaClient} from '@prisma/client'  // Database ORM
import dotenv from 'dotenv'

dotenv.config();
const prisma = new PrismaClient();

export const registerUser = async (req, res) => {

    try{
        const {email, name, telephone, document_type, document_number, password, role, salary} = req.body;

        if (!email || !name || !telephone || !document_type || !document_number || !password || !role || !salary) {
            return res.status(400).json({message: 'Preencha todos os campos obrigatórios'});
        }
        // Check if the user already exists
        const existingUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        if (existingUser) {
            return res.status(400).json({message: 'Usuário já existe'});
        }

        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(password, salt);

        const newUser = await prisma.user.create({
            data: {
                email: email,
                name: name,
                password: hashpassword,
                telephone: telephone,
                document_type: document_type,
                document_number: document_number,
                role: role,
                salary: salary
            }
        });

        res.status(201).json(newUser);
    }

    catch(err){
        console.error('erro do servidor', err);
        res.status(500).json({message: 'Erro no servidor, tente novamente mais tarde'});
    }
}
