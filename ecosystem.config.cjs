module.exports = {
    apps: [
      {
        name: 'NuxtTopSpeed',
        port: '3000',
        exec_mode: 'cluster',    // Enables cluster mode
        instances: 'max',        // Spawns one instance per CPU core (you can adjust this)
        script: './.output/server/index.mjs'
      }
    ]
  }  

  //pm2 start ecosystem.config.cjs
  //pm2 save 
  //pm2 startup