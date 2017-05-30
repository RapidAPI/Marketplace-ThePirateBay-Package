[![](https://scdn.rapidapi.com/RapidAPI_banner.png)](https://rapidapi.com/package/ThePirateBay/functions?utm_source=RapidAPIGitHub_PirateBayFunctions&utm_medium=button&utm_content=RapidAPI_GitHub)

# ThePirateBay Package
Filter torrents from the Pirate Bay API by user or category.

## ThePirateBay.search
Search different torrents on the Pirate Bay

| Field         | Type       | Description
|---------------|------------|----------
| query         | String     | The search term.
| category      | String     | Torrent category ie. 'all', 'audio', 'video', 'xxx', 'applications', 'games', 'other'
| verified      | String     | Verified torrent: true or false
| page          | String     | Page of results
| orderBy       | String     | Fields to order results by ie. name, date, size, seeds, leeches
| sortBy        | String     | asc or desc

## ThePiratebay.getTorrent
Get a single torrent by ID

| Field         | Type       | Description
|---------------|------------|----------
| id            | String     | Pirate Bay torrent ID or torrent link

## Pratebay.getTopTorrents
Get top 100 torrents by category

| Field         | Type       | Description
|---------------|------------|----------
| category      | String     | Category number ie. 100, 200, 300, 400, 500

## ThePirateBay.getRecentTorrents
Get the most recent uploaded torrents

## ThePirateBay.getUserTorrents
Get a specific user's torrents

| Field        | Type       | Description
|--------------|------------|----------
| username     | String     | PirateBay username
| page         | String     | page number
| sortBy       | String     | Fields to order results by ie. name, date, size, seeds, leeches
| orderBy      | String     | asc or desc

## ThePirateBay.getCategories
Get all PirateBay's categories and sub-categories

