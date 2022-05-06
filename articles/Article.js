const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");

const Article = connection.define('articles',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Category.hasMany(Article); // Relacionamento 1 p M Uma categoria tem muitos asrtigos
Article.belongsTo(Category); // relacionamento 1 p -  1 Um Artigo pertence a uma categoria.

//Article.sync({force: true});

module.exports = Article;