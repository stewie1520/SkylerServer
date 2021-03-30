const { verifyToken } = require("../../services/tokens/verify");
const { createToken } = require("../../services/tokens/create");

test("verifyToken({ token, secret })", async () => {
  const token = await createToken({
    payload: { foo: 2 },
    secretKey: process.env.SECRET_PASSWORD_HASH,
    options: { expiresIn: "15 minutes" },
  });

  const data = await verifyToken({
    token,
    secretKey: process.env.SECRET_PASSWORD_HASH,
  });

  expect(data).toMatchObject({ foo: 2 });
});
