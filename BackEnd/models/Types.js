import Sequelize from "sequelize"
export class Types extends Sequelize.Model{
    name;
   

    static init (sequelize,DataTypes){
        return super.init({
            
            name:{
                type:DataTypes.STRING,
                allowNull:false,
                unique:true
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