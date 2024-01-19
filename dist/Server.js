"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_1 = __importDefault(require("koa"));
var koa_bodyparser_1 = __importDefault(require("koa-bodyparser")); // pour parser le corps des requêtes
var Routes_1 = __importDefault(require("./Routes"));
var app = new koa_1.default();
// Utilisation du bodyParser pour parser le corps des requêtes en JSON
app.use((0, koa_bodyparser_1.default)());
// Utilisation des routes définies dans routes.ts
app.use(Routes_1.default.routes());
app.use(Routes_1.default.allowedMethods());
// Définir le port sur lequel le serveur doit écouter
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Le serveur est lanc\u00E9 sur le port ".concat(PORT));
});
exports.default = app;
