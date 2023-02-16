import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface RespostasInterface extends Model {
    id: number,
    idPergunta: number,
    resposta: string
}

export const Resposta = sequelize.define<RespostasInterface>('Resposta', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idPergunta: {
        type: DataTypes.INTEGER
    },
    resposta: {
        type: DataTypes.STRING,
    }
}, {
    timestamps: false,
    tableName: 'respostas'
});