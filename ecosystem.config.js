module.exports = {
  apps: [
    {
      name: "stuurkracht-api",
      script: "./dist/main.js",
      instances: 1,
      args: "start",
      watch: true,
      exp_backoff_restart_delay: 100,
    },
  ],
};
