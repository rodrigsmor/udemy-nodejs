const { check, validationResult } = require("express-validator");

module.exports = {
    user: (app, req, res) => {
        let errors = validationResult(req);

        if(!errors.isEmpty()) {
            app.utils.error.send(errors, req, res);
            return false;
        }
    },
    checkUser: () => {
        return [
            check('name', 'O nome é obrigatório!').notEmpty(),
            check('email', 'O e-mail está inválido!').notEmpty().isEmail(),
            check('password', 'A senha não pode está vazia!').notEmpty(),
        ];
    }
}