'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Voucher extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Voucher.belongsTo(models.TypeVoucher, { foreignKey: 'typeVoucherId', targetKey: 'id', as: 'typeVoucherOfVoucherData' })
            Voucher.hasMany(models.OrderProduct, { foreignKey: 'voucherId', as: 'voucherData' })
            Voucher.belongsToMany(models.User, { through: { model: models.VoucherUsed }, foreignKey: 'voucherId', as: 'VoucherOfUser' });
        }
    };
    Voucher.init({
        fromDate: DataTypes.STRING,
        toDate: DataTypes.STRING,
        typeVoucherId: DataTypes.INTEGER,
        number: DataTypes.INTEGER,
        numberUsed: DataTypes.INTEGER,
        codeVoucher: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Voucher',
    });
    return Voucher;
};