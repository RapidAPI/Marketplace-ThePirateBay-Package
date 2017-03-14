"use strict";

module.exports.do = function(req, res){
    res.status(200).send({
        'package': 'ThePirateBay',
        "tagline": "Get torrents from the Pirate Bay",
        "description": "Filter torrents from the Pirate Bay API by user or category",
        "image": "https://thepiratebay.org/static/img/tpb.jpg",
        "repo": "https://github.com/RapidAPI/Marketplace-ThePirateBay-Package",
        "keywords": ["torrents", "movies", "audio", "files"],
        'blocks'      : [{
            "name":"search",
            "args":[
                {name:"query", type:"String", info:"The search term", required: true},
                {name:"category", type:"String", info:"Torrent category ie. 'all', 'audio', 'video', 'xxx', 'applications', 'games', 'other'", required: false},
                {name:"verified", type:"String", info:"Verified torrent: true or false", required: false},
                {name:"page", type:"String", info:"Page of results", required: false},
                {name:"orderBy", type:"String", info:"Fields to order results by ie. name, date, size, seeds, leeches", required: false},
                {name:"sortBy", type:"String", info:"asc or desc", required: false}

            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Search different torrents on the Pirate Bay"
        },
        {
            "name":"getTorrent",
            "args":[
                {name:"id", type:"String", info:"Pirate Bay torrent ID or torrent link", required: true}

            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Get a single torrent by ID"
        },
        {
            "name":"getTopTorrents",
            "args":[
                {name:"category", type:"String", info:"Category number ie. 100, 200, 300, 400, 500", required: false}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Get top 100 torrents by category"
        },
        {
            "name":"getRecentTorrents",
            "args":[],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Get the most recent uploaded torrents"
        },
        {
            "name":"getUserTorrents",
            "args":[
              {name:"username", type:"String", info:"PirateBay username", required: true},
              {name:"page", type:"String", info:"page number", required: false},
              {name:"orderBy", type:"String", info:"Fields to order results by ie. name, date, size, seeds, leeches", required: false},
              {name:"sortBy", type:"String", info:"asc or desc", required: false}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Get a specific user's torrents"
        },
        {
            "name":"getCategories",
            "args":[
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Get all PirateBay's categories and sub-categories"
        }]
    });
};
