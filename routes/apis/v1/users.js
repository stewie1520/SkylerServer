const router = require("express").Router();
const { registerController } = require("controllers/users/register");
const { loginController } = require("controllers/users/login");
const { validateBody } = require("middlewares/validateBody");
const userRegisterSchema = require("models/validateSchemas/users");
const userLoginSchema = require("models/validateSchemas/userLogin");
/**
 * @swagger
 * /apis/v1/users/register:
 *   post:
 *     summary: Register new user
 *     description: Register new user with email, fullname, password and phone number (optional)
 *     tags:
 *       - users
 *     produces:
 *       - applications/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *                 required: true
 *               email:
 *                 type: string
 *                 required: true
 *               phoneNumber:
 *                 type: string
 *               password:
 *                 type: string
 *                 required: true
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: indicate whether api is called successfully
 *                 payload:
 *                   type: object
 *                   description: if success is true, payload will be the data api return for you
 *                   properties:
 *                     fullName:
 *                       type: string
 *                       description: user's fullname
 *                     email:
 *                       type: string
 *                       description: user's email, used to login
 *                     numberPhone:
 *                       type: string
 *                       description: user's phone number
 *                 message:
 *                   type: string
 *                   description: if success is false, this will be the error message api returns
 */
router.post("/register", validateBody(userRegisterSchema), registerController);
/**
 * @swagger
 * /apis/v1/users/login:
 *   post:
 *     summary: Login as user
 *     description: Login as user with email and password
 *     tags:
 *       - users
 *     produces:
 *       - applications/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 required: true
 *               password:
 *                 type: string
 *                 required: true
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: indicate whether api is called successfully
 *                 payload:
 *                   type: object
 *                   description: if success is true, payload will be the data api return for you
 *                   properties:
 *                     accessToken:
 *                       type: string
 *                       description: user's accessToken, used this with request to access user's functions, expires in 15m
 *                     refreshToken:
 *                       type: string
 *                       description: user's refresh token, used to invoke a new accessToken when the current accessToken expires, expires in 30 days
 *                 message:
 *                   type: string
 *                   description: if success is false, this will be the error message api returns
 */
router.post("/login", validateBody(userLoginSchema), loginController);

module.exports = router;
