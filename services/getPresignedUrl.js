const Minio = require("minio");
const moment = require("moment");
const mime = require("mime-types");

const getPresignedUrl = async ({ filename, filetype }) => {
	const minioClient = new Minio.Client({
		endPoint: process.env.S3_ENDPOINT,
		useSSL: true,
		accessKey: process.env.S3_ACCESSKEY,
		secretKey: process.env.S3_SECRETKEY,
	});

	const policy = minioClient.newPostPolicy();
	policy.setBucket(process.env.S3_BUCKETNAME);
	policy.setKey(filename);
	policy.setExpires(moment().add(15, 'minutes').toDate());
	policy.setContentType(mime.lookup(filetype));
	policy.setContentLengthRange(1024, 5 * 1024 * 1024); // 1kb - 5mb

	return await minioClient.presignedPostPolicy(policy);
};

module.exports = { getPresignedUrl };
