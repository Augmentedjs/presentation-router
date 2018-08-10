class TestView {
	constructor() {
	};
	render() {
		return this;
	};

	remove() {
		return this;
	};
};

class MyRouter extends Router.Router {
	constructor() {
		super({
			"routes": {
				"test": () => {
									return true;
								},
				"test2": "test2"
				},
				"name": "test"
			});
	};
	test2() {
		return this.name;
	};
};

describe('Given Augmented Router', () => {
	it('is defined', () => {
		expect(Router.Router).to.not.be.undefined;
	});
	let router = null;

	beforeEach(() => {
		router = new MyRouter();
	});

	afterEach(() => {
		router = null;
	});

	/*
	loadView
	*/
	describe('Given an instance of router', () => {
		it('is defined', () => {
			expect(router).to.not.be.undefined;
		});

		it('is a router', () => {
			expect(router instanceof Router.Router).to.be.true;
		});

		it('can "navigate" to a route, inline function', () => {
			router.startHistory();
			expect(router.navigate("test").routes.test).to.not.be.undefined;
		});

		it('can "navigate" to a route, reference function', () => {
			router.startHistory();
			expect(router.navigate("test2").routes.test2).to.not.be.undefined;
		});

		it('can "navigate" to a route and reroute', () => {
			router.startHistory();
			router.navigate("test");
			expect(router.navigate("test2").routes.test2).to.not.be.undefined;
		});

		describe('Given a test view', () => {
			let	view = null;

			beforeEach(() => {
				view = new TestView();
			});
			afterEach(() => {
				view.remove();
				view = null;
			});

			it('can load a view', () => {
				router.loadView(view);
				expect(router._view).to.not.be.undefined;
				router._view = null;
			});

			it('can cleanup a view', () => {
				router._view = view;
				expect(router._view).to.not.be.undefined;
				router.cleanup();
				expect(router._view).to.be.null;
			});
		});
	});
});
