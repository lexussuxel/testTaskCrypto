const jwt = require('jsonwebtoken')

module.exports = function(role:any){
    return function(req:any, res:any, next:any){
        if(req.method === "OPTIONS")
            next()
        try{
            const token = req.headers.authorization.split(" ")[1]
            console.log(req.user)
            if (!token){
                console.log('not auth')
                return res.status(401).json({message: "not auth"})
            }
            const decoded =jwt.verify(token, process.env.SECRET_KEY)
            if(decoded.role !== role){
                console.log('no perm' )
                res.status(403).json({message: "no permissions:any"})
            }
            next()
        }catch(e){
            console.log('not auth')
            return res.status(401).json({message: "not auth"})
        }

    }

}

export{}