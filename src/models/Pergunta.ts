import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg'

export interface PerguntaInterface extends Model {
    id: number,
    titulo: string,
    descricao: string,
    resposta: string
}

export const Pergunta = sequelize.define<PerguntaInterface>('Perguntas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING
    },
    descricao: {
        type: DataTypes.STRING
    },
    resposta: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'perguntas',
    timestamps: false
});