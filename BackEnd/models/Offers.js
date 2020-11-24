import Sequelize from "sequelize"
export class Offers extends Sequelize.Model{
    title;
    description;
    offer_date;
    price


    static init (sequelize,DataTypes){
        return super.init({
            
            title:{
                type:DataTypes.STRING,
                allowNull:false,
                },
                description:{
                    type:DataTypes.TEXT,
                    allowNull:false
                },
                offer_date:{
                    type:DataTypes.DATE,
                    allowNull:false
                },
                price:{
                    type:DataTypes.DECIMAL(10,2),
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