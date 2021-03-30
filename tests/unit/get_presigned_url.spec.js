const { getPresignedUrl } = require("../../services/getPresignedUrl");

test("getPresignedUrl()", async () => {
  const data = await getPresignedUrl({ filename: "test", filetype: "jpg" });
  expect(data).toMatchObject({
    postUrl: `${process.env.S3_ENDPOINT}/${S3_BUCKETNAME}`,
  });
});
