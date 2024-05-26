module.exports = {
    '*.{js,ts,tsx}': ['eslint --fix', 'eslint'],
    '**/*.ts?(x)': () => 'npm run check-types',
    '*.{css,json,yaml}': ['prettier --write'],
};
