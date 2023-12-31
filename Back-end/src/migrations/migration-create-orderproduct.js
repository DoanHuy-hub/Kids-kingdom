'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Orderproducts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            orderDate: {
                type: Sequelize.STRING
            },
            orderDateSuccess: {
                type: Sequelize.STRING
            },
            receiverId: {
                type: Sequelize.INTEGER
            },
            statusId: {
                type: Sequelize.STRING
            },
            typeShipId: {
                type: Sequelize.INTEGER
            },
            voucherId: {
                type: Sequelize.INTEGER
            },
            note: {
                type: Sequelize.STRING
            },
            totalPayment: {
                type: Sequelize.BIGINT
            },
            isPaymentOnl: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Orderproducts');
    }
};