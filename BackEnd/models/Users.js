import Sequelize from "sequelize"
export class Users extends Sequelize.Model{
    mail;
    password;

    static init (sequelize,DataTypes){
        return super.init({
            
            mail:{
                type:DataTypes.STRING,
                allowNull:false,
                unique:true
            },
                password:{
                    type:DataTypes.STRING,
                    allowNull:false
                }
        },{
            sequelize,
            timestamps:true,
            createdAt:true,
            updatedAt:true,
            generateHash(password) {
                return bcrypt.hash(password, bcrypt.genSaltSync(8));
            },
            validPassword(password) {
                return bcrypt.compare(password, this.password);
            }
        }
        
        )
    }
    // static associate(models) {
    //     this.Demande = this.hasMany(models.Demande);
    //     this.Offers= this.belongsTo(models.Offers);
    // }
} 