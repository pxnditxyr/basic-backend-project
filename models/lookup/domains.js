import { DataTypes } from 'sequelize';
import { db } from '../../db/connection.js';

export const Domains = db.define( 'domains', {
    domainId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING( 50 ),
        allowNull: true
    },
    detail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdBy: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    updatedBy: {
        type: DataTypes.BIGINT,
        allowNull: true
    }
});
