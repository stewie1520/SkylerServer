const router = require("express").Router();
const { validateRequest } = require("middlewares/validateRequest");
const { getPresignedUrlController } = require("controllers/upload/getPresignedUrl");

/**
 * @swagger
 * /uploads/presignedUrl:
 *   post:
 *     summary: Return the presigned url and header params to upload image
 *     description: Received filename and filetype from client, api will return a presigned url and header params to upload image. The url will be expired in 15 minutes
 *     tags:
 *       - upload
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               filename:
 *                 type: string
 *                 required: true
 *               filetype:
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
 *                     postUrl:
 *                       type: string
 *                       description: The url used to upload image
 *                     formData:
 *                       type: object
 *                       properties:
 *                         bucket:
 *                           type: string
 *                           description: bucket name where the image will be stored
 *                         key:
 *                           type: string
 *                           description: name of the image
 *                         'Content-Type':
 *                           type: string
 *                           description: mime type of the image
 *                         'x-amz-date':
 *                           type: string
 *                           description: amz s3 stuff
 *                         'x-amz-algorithm':
 *                           type: string
 *                           description: amz s3 stuff
 *                         'x-amz-credential':
 *                           type: string
 *                           description: amz s3 stuff
 *                         policy:
 *                           type: string
 *                           description: amz s3 stuff
 *                         'x-amz-signature':
 *                           type: string
 *                           description: amz s3 stuff
 *                 message:
 *                   type: string
 *                   description: if success is false, this will be the error message api returns
 */
router.post("/presignedUrl", validateRequest, getPresignedUrlController);
module.exports = router;
