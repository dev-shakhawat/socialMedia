const express = require("express"); 
const register = require("../../../controllers/auth/register");

const authRouter = express.Router();


/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: User Authentication Endpoints
 */


/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fName:
 *                 type: string
 *               lName:
 *                 type: string
 *               userName:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               gender:
 *                 type: string
 *               bDay:
 *                 type: string
 *               bMonth:
 *                 type: string
 *               bYear:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully , Please verify your email
 *       400:
 *         description: Bad request
 */
authRouter.post("/register" , register)






module.exports = authRouter