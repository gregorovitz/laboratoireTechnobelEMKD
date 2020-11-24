import Sequelize from "sequelize"
export class Cities extends Sequelize.Model{
    name;

    static init (sequelize,DataTypes){
        return super.init({
            
            name:{
                type:DataTypes.STRING,
                allowNull:false,
            }
        },{
            sequelize,
            timestamps:true,
            createdAt:true,
            updatedAt:true,
        }
        
        )
    }
    // static associate(models) {
    //     this.Demande = this.hasMany(models.Demande);
    //     this.Offers= this.belongsTo(models.Offers);
    // }
} 