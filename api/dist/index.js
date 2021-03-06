"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("./config"));
// Constants
const PORT = config_1.default.PORT;
const HOST = config_1.default.HOST;
const dbHost = process.env.MYSQL_HOST;
const dbPort = process.env.MYSQL_PORT;
const databaseName = process.env.MYSQL_DATABASE;
const dbUsername = process.env.MYSQL_USER;
const dbPassword = process.env.MYSQL_PASSWORD;
const dbConnectString = `mysql://${dbUsername}:${dbPassword}@${dbHost}:${dbPort}/${databaseName}`;
const sequelize = new sequelize_1.Sequelize(dbConnectString);
sequelize
    .authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
})
    .catch(err => {
    console.error('Unable to connect to the database:', err);
});
class Post extends sequelize_1.Model {
}
Post.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    description: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    url: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: true,
    },
}, {
    tableName: 'Posts',
    sequelize: sequelize,
});
// App
const app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
app.get("/", (req, res) => {
    Post.findAll().then(results => res.json({ posts: results }));
});
app.get("/:postId", (req, res) => {
    const postId = req.params.postId;
    Post.findByPk(postId).then(result => res.json({ post: result }));
});
app.post("/", (req, res) => {
    const postTitle = req.body.title;
    const postDescr = req.body.description;
    const postURL = req.body.url;
    Post.create({ title: postTitle, description: postDescr, url: postURL })
        .then(newPost => {
        res.json({ post: newPost });
    })
        .catch(err => { res.json({ error: err }); });
});
app.put("/:postId", (req, res) => {
    const postId = req.params.postId;
    const postTitle = req.body.title;
    const postDescr = req.body.description;
    const postURL = req.body.url;
    Post.update({ title: postTitle, description: postDescr, url: postURL }, {
        where: {
            id: postId
        }
    }).then((postUpdate) => {
        res.json({ post: postUpdate });
    })
        .catch(err => { res.json({ error: err }); });
});
app.delete("/:postId", (req, res) => {
    const postId = req.params.postId;
    Post.destroy({ where: { id: postId } }).then(() => res.json({ post: { id: postId } }));
});
app.listen(PORT, HOST);
// tslint:disable-next-line:no-console
console.log(`Running on http://${HOST}:${PORT}`);
//# sourceMappingURL=index.js.map