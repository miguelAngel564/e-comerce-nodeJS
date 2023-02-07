// registro
// login
const { Router } = require("express");
const { register, login } = require("../controllers/auth.controller");

const router = Router();
/** 
 * @openapi
 * /api/v1/auth/register:
 *   post:
 *     summary: createa new user into application
 *     tags: [auth]
 *     requestBody: 
 *       description: Required fields to create a new user
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/register'
 *       responses:
 *        201:
 *          description: Created
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                  properites:
 *                    message:
 *                      type: string
 *                        example: validation error
 * /api/v1/auth/login:
 *   post:
 *     summary: Login an existing user into the app
 *     tags: [Auth]
 *     requestBody: 
 *        description: Required fields to login a existing user
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref:   "#/components/schemas/login"
 *      responses:
 *        200:
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                $ref:
 *         400:
 *           description: not found
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message: not found / something wrong / not password 
*/


router.post("/register", register);
router.post("/login", login);

module.exports = router; // ahorita lo usamos en app
