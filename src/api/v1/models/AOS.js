module.exports = (sequelize, Sequelize) => {
    const AOS = sequelize.define('AOS', {
        commodityCode: {
            type: Sequelize.STRING
        },
        makeOrBuy: {
            type: Sequelize.CHAR
        },
        partNumber: {
            type: Sequelize.STRING
        },
        issuingSLoc: {
            type: Sequelize.STRING
        },
        receivingSLoc: {
            type: Sequelize.STRING
        },
        huNumber: {
            type: Sequelize.BIGINT
        },
        plantCode: {
            type: Sequelize.INTEGER
        },
        currBike: {
            type: Sequelize.INTEGER
        },
        highBike: {
            type: Sequelize.INTEGER
        },
        rackNumber: {
            type: Sequelize.INTEGER
        },
        productionDate: {
            type: Sequelize.DATEONLY
        }
    });

    return AOS;
};