module.exports = {
    uhq: "If you need help with this bot, join the discord.gg/uhq server or go to this link: https://gist.github.com/Nekros-dsc/a6f6238c1cfcbacff64e2a01d5a90edf",
    token: "", // Put token here
    color: "#FFFFFF", // Put color here
    owners: ["", ""], // Put owners ID here
    roleclient: "", // Put role client here

    ptero: {
        link: "", // Put url of panel here
       	key: "", // Put pterodactyl key here
        startup: {
            nodejs: '', // Put the nodejs startup here
            python: '' // Put the python startup here
        },

        docker_image: {
            nodejs: "", // Put the nodejs docker here
            python: "" // Put the python docker here
        },

        eggs: {
            nodejs: 0, // Put the id egg of nodejs here
            python: 0 // Put the id egg of python here
        },

        environnement: {
            PY_FILE: "app.py", // Put the main python file here
            MAIN_FILE: "index.js",// Put the main nodejs file here
            REQUIREMENTS_FILE: "requirements.txt"// Put the install requirements file here
        },

        limits: {
            memory: 0, // Put the memory here
            swap: 0, // Put the server swap here
            disk: 0, // Put the disk server space here
            io: 500, // Put the io server here
            cpu: 0 // Put the cpu here
        }
    }
}