import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface RespostasInterface extends Model {
    id: number,
    resposta: string
}

export const Pergunta = sequelize.define<RespostasInterface>('Resposta', {
    id: {
        type: DataTypes.NUMBER
    },
    resposta: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false,
    tableName: 'respostas'
});