const { getPresignedUrl } = require("../../services/getPresignedUrl");

expect.extend({
	toBeNonEmptyStringOrNull(received) {
		if (received === null) {
			return {
				message: () => `expected ${received} to be null value`,
				pass: true,
			};
		}

		if (typeof received === "string" && received) {
			return {
				message: () => `expected ${received} to be non empty string`,
				pass: true,
			};
		}

		return {
			message: () => `expected ${received} to be non empty string or null value`,
			pass: false,
		}
	}
});

test("getPresignedUrl()", async () => {
	const data = await getPresignedUrl({ filename: 'test', filetype: 'jpg' });
	expect(data).toBeNonEmptyStringOrNull();
});
