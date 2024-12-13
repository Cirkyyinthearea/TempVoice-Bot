const config = {
    "token": "TOKEN",
    "guild": "772442903716560926",
    "HUBtxtChannelID": "1308455597301301259",
    "HUBvcChannelID": "1308456208742617160",
    "DefaultRoleID": "772442903716560926",
    "categoryID": "1308454930486530089",
    "status": "cirkyy is here",
    "enable_slash": true,
    "prefix": "!",
    "owners": [
        "722584544175194154"
    ]
}
//use env
config.token = process.env.TOKEN || ''
config.guild = process.env.SERVER_ID || ''
config.HUBvcChannelID = process.env.HUB_ID || ''
config.DefaultRoleID = process.env.ROLE_ID || ''
config.categoryID = process.env.CATEGORY_ID || ''
config.prefix = process.env.PREFIX || ']'
config.owners = process.env.OWNERS ? process.env.OWNERS.split(',') : null || ['']

module.exports = { config }
