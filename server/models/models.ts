const sequelize = require("../db")
const {DataTypes} = require("sequelize")

const User = sequelize.define("user",{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role:{type:DataTypes.STRING, defaultValue:"user"},
})

const Transactions = sequelize.define( "transactions", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    currencyId: {type: DataTypes.INTEGER},
    count: {type: DataTypes.FLOAT, defaultValue: 0},
})

User.hasMany(Transactions)
Transactions.belongsTo(User)

module.exports = {
    User,
    Transactions
}