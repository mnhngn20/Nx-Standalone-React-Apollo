module.exports = {
  '*.{js,jsx,ts,tsx,json,css,scss,md}': filesArray => {
    const files = filesArray.join();
    return [
      `nx format:write --files=${files}`,
      `nx affected --target=lint --fix --files=${files}`,
      // `nx affected --target=test --bail --files=${files}`,
    ];
  },
};
