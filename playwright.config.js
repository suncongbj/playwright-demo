const config = {
    use: {
        headless: false,
        viewport: {
            width: 1336,
            height: 768
        },
        ignoreHTTPSErrors: true,
        video: 'on-first-retry',
    },
};

module.exports = config;