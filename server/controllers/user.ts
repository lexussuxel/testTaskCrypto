const {Transactions, User} = require('../models/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateJWT = (id:any, email:any, role:any)=>{
    return jwt.sign(
        {id: id, email: email, role: role},
        process.env.SECRET_KEY)
}

class UserController {
    async registration(req:any, res:any){
        const {email, password, role} = req.body;
        if (!email || !password){
            return res.json({message:'no password or email'})
        }
        const candidate = await User.findOne({where:{email:email}})
        if (candidate){
            return res.json({message:'user exists'})
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, password: hashPassword, role: role || 'user'})
        const token = generateJWT(user.id, email, role)
        req.user = user
        return res.json({token})
    }

    async logIn(req:any, res:any) {
        const {email, password} = req.body;
        if (!email || !password){
            return res.json({message:'no password or email'})
        }
        const candidate = await User.findOne({where:{email:email}})
        let comparePassword = bcrypt.compareSync(password, candidate.password)
        if(comparePassword){
            const token = generateJWT(candidate.id, candidate.email, candidate.role)
            req.user = candidate
            return res.json({token})
        }else res.json({message:'wrong password'})
    }

    async getAllTransactions(req:any, res:any){
        const {id} = req.params
        const transactions = await Transactions.findAll({where: {userId: id}})
        return res.json(transactions)
    }

    async changeRole(req:any, res:any){
        const {userId, role} = req.body
        const changedUser = await User.update({role}, {where: {id: userId}})
        return res.json(changedUser)
    }

    async getAllUsers(req:any, res:any){
        console.log('get')
        const users = await User.findAll()
        return res.json(users)
    }

    async add_to_wallet(req:any, res:any){
        const {id, count} = req.body
        const transaction = await Transactions.create({
            userId: req.user.id,
            currencyId: parseInt(id),
            count: parseFloat(count)
        })
        return res.json(transaction)
    }

    async check(req:any, res:any){
        const {id} = req.params
        const user = await User.findOne({where:{id}})
        const token = generateJWT(user.id, user.email, user.role)
        return res.json({token})
    }
}

module.exports = new UserController()
export {}