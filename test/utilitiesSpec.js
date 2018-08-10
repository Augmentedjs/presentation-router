describe('Given Utilities', () => {
	it('is defined', () => {
		expect(Router.serialize).to.not.be.undefined;
	});

	describe('Given an object', () => {
		it('can serialize to url string', () => {
			const url = Router.serialize({ "cool": "yes", "stupid": "no" });
			expect(url).to.equal("cool=yes&stupid=no");
		});
	});
});
