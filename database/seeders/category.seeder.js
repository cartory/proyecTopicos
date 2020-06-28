const { Category } = require('../../src/models/category');

module.exports = {
    seed: async function () {
        const newCate = {
            name: "category",
            description: "category"
        };

        await Category.instance.create(newCate);
    },
};