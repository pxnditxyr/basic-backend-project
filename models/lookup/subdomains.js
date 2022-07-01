import { DataTypes } from 'sequelize';
import { db } from '../../db/connection.js';

export const Subdomains = db.define( 'subdomains', {
    subdomainId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING( 50 ),
        allowNull: true
    },
    detail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    observation: {
        type: DataTypes.STRING,
        allowNull: true
    },
    lvl: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
