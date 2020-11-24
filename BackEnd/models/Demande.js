import Sequelize from "sequelize"
export class Demande extends Sequelize.Model{
    title;
    description;
    offer_date;


    static init (sequelize,DataTypes){
        return super.init({
            
            title:{
                type:DataTypes.STRING,
                allowNull:false,
                
            },
                description:{
                    type:DataTypes.STRING,
                    allowNull:false
                },
                offer_date:{
                    type:DataTypes.DATEONLY,
                    allowNull:false
                }
        },{
            sequelize,
            timestamps:true,
            createdAt:true,
            updatedAt:true,
        } 
        
        )
    }
    static associate(models) {
        this.users = this.belongsTo(models.User);
        this.types= this.belongsTo(models.Types);
        this.types= this.belongsTo(models.Cities)
    }
} 