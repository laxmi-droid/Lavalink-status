module.exports = {
  token: process.env.token || "", // Ensure this env variable is set
  channelId: process.env.channelId || "1461708151651831934",

  webMonitor: true, // Set to false if you don't want a website
  expressPort: process.env.expressPort || 3000,

  nodes: [
    {
      host: "172.96.140.62", // Your lavalink host address 
      password: "sameer", // Your lavalink password
      port: 8561, // Your lavalink port
      identifier: "Node", // Name for your lavalink
      secure: false, // set to true if your lavalink has SSL
      reconnectTimeout: 300000,
      reconnectTries: 100,
    },
  ],
};
