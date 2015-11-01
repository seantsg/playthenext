app.factory('tracks', [function(){
    var o = {
        tracks: [{
            url: 'https://www.youtube.com/watch?v=jYdaQJzcAcw',
            id: 'jYdaQJzcAcw', artist: 'J. Cole', title: 'She Knows ft. Amber Coffman, Cults',
            thumbnail: 'https://i.ytimg.com/vi/jYdaQJzcAcw/mqdefault.jpg',
            playerStatus: "NOT PLAYING"
            
        },{
            url: 'https://www.youtube.com/watch?v=aBn7bjy9c4U',
            id: 'aBn7bjy9c4U', artist: 'DJ Snake & AlunaGeorge', title: 'You Know You Like It',
            thumbnail: 'https://i.ytimg.com/vi/aBn7bjy9c4U/mqdefault.jpg',
            playerStatus: "NOT PLAYING"
            
        },{
            url: 'https://www.youtube.com/watch?v=FJt7gNi3Nr4',
            id: 'FJt7gNi3Nr4', artist: 'Kanye West', title: 'No Church In The Wild',
            thumbnail: 'https://i.ytimg.com/vi/FJt7gNi3Nr4/mqdefault.jpg',
            playerStatus: "NOT PLAYING"
            
        },{
            url: 'https://www.youtube.com/watch?v=R5OtX2EnUTU',
            id: 'R5OtX2EnUTU', artist: 'Young Paris', title: 'THE HAUS',
            thumbnail: 'https://i.ytimg.com/vi/R5OtX2EnUTU/mqdefault.jpg',
            playerStatus: "NOT PLAYING"
            
        },{
            url: 'https://www.youtube.com/watch?v=07FYdnEawAQ',
            id: '07FYdnEawAQ', artist: 'Justin Timberlake', title: 'Tunnel Vision',
            thumbnail: 'https://i.ytimg.com/vi/07FYdnEawAQ/mqdefault.jpg',
            playerStatus: "NOT PLAYING"
            
        },{
            url: 'https://www.youtube.com/watch?v=1lZfqFpjFM8',
            id: '1lZfqFpjFM8', artist: 'Daniel Johns', title: 'Aerial Love',
            thumbnail: 'https://i.ytimg.com/vi/1lZfqFpjFM8/mqdefault.jpg',
            playerStatus: "NOT PLAYING"
            
        },{
            url: 'https://www.youtube.com/watch?v=ZJPjSaOcVwg',
            id: 'ZJPjSaOcVwg', artist: 'LA Priest', title: 'OINO',
            thumbnail: 'https://i.ytimg.com/vi/ZJPjSaOcVwg/mqdefault.jpg',
            playerStatus: 'NOT PLAYING'
            
        },{
            url: 'https://www.youtube.com/watch?v=YqeW9_5kURI',
            id: 'YqeW9_5kURI', artist: 'Major Lazer & DJ Snake', title: 'Lean On (feat. MØ)',
            thumbnail: 'https://i.ytimg.com/vi/YqeW9_5kURI/mqdefault.jpg',
            playerStatus: 'NOT PLAYING'
        
        },{
            url: 'https://www.youtube.com/watch?v=_ABk7TmjnVk',
            id: '_ABk7TmjnVk', artist: 'Kanye West', title: 'All Day (Live At The 2015 BRIT Awards)',
            thumbnail: 'https://i.ytimg.com/vi/_ABk7TmjnVk/mqdefault.jpg',
            playerStatus: 'NOT PLAYING'
            
        },{
            url: 'https://www.youtube.com/watch?v=6c-RbGZBnBI',
            id: '6c-RbGZBnBI', artist: 'Röyksopp & Robyn', title: 'Monument',
            thumbnail: 'https://i.ytimg.com/vi/6c-RbGZBnBI/mqdefault.jpg',
            playerStatus: 'NOT PLAYING'
            
        },{
            url: 'https://www.youtube.com/watch?v=q_UaQu4UTQI',
            id: 'q_UaQu4UTQI', artist: 'Swiss Lips', title: 'Books',
            thumbnail: 'https://i.ytimg.com/vi/q_UaQu4UTQI/mqdefault.jpg',
            playerStatus: 'NOT PLAYING'
            
        },{
            url: 'https://www.youtube.com/watch?v=Q0csXw3syGs',
            id: 'Q0csXw3syGs', artist: 'Azekel', title: 'New Romance',
            thumbnail: 'https://i.ytimg.com/vi/Q0csXw3syGs/mqdefault.jpg',
            playerStatus: 'NOT PLAYING'
            
        },{
            url: 'https://www.youtube.com/watch?v=umy5HK5loig',
            id: 'umy5HK5loig', artist: 'Emika', title: 'My Heart Bleeds Melody',
            thumbnail: 'https://i.ytimg.com/vi/umy5HK5loig/mqdefault.jpg',
            playerStatus: 'NOT PLAYING'
        
        },{
            url: 'https://www.youtube.com/watch?v=bsPhot91XpQ',
            id: 'bsPhot91XpQ', artist: 'Theophilus London', title: 'Tribe (Feat. Jesse Boykins III)',
            thumbnail: 'https://i.ytimg.com/vi/bsPhot91XpQ/mqdefault.jpg',
            playerStatus: 'NOT PLAYING'
        
        },{
            url: 'https://www.youtube.com/watch?v=dIDekdv8Sio',
            id: 'dIDekdv8Sio', artist: 'GTA', title: 'Red Lips feat. Sam Bruno',
            thumbnail: 'https://i.ytimg.com/vi/dIDekdv8Sio/mqdefault.jpg',
            playerStatus: 'NOT PLAYING'
        
        },{
            url: 'https://www.youtube.com/watch?v=MCto5tBw37Y',
            id: 'MCto5tBw37Y', artist: 'Fyfe', title: 'For You',
            thumbnail: 'https://i.ytimg.com/vi/MCto5tBw37Y/mqdefault.jpg',
            playerStatus: 'NOT PLAYING'
        
        },{
            url: 'https://www.youtube.com/watch?v=zmY8mG4_3j4',
            id: 'zmY8mG4_3j4', artist: 'The Internet', title: 'Girl ft. KAYTRANADA',
            thumbnail: 'https://i.ytimg.com/vi/zmY8mG4_3j4/mqdefault.jpg',
            playerStatus: 'NOT PLAYING'

        },{
            url: 'https://www.youtube.com/watch?v=TN1BN4keamc',
            id: 'TN1BN4keamc', artist: 'Two Fingers', title: 'Vengeance Rhythm',
            thumbnail: 'https://i.ytimg.com/vi/TN1BN4keamc/mqdefault.jpg',
            playerStatus: 'NOT PLAYING'
        
        },{
            url: 'https://www.youtube.com/watch?v=wrX8SfcFRYY',
            id: 'wrX8SfcFRYY', artist: 'Doomtree', title: 'Beastface',
            thumbnail: 'https://i.ytimg.com/vi/wrX8SfcFRYY/mqdefault.jpg',
            playerStatus: 'NOT PLAYING'
        
        },{
            url: 'https://www.youtube.com/watch?v=aExVpKxWhts',
            id: 'aExVpKxWhts', artist: 'Spank Rock', title: 'Assassin (feat. Amanda Blank)',
            thumbnail: 'https://i.ytimg.com/vi/aExVpKxWhts/mqdefault.jpg',
            playerStatus: 'NOT PLAYING'
        
        },{
            url: 'https://www.youtube.com/watch?v=rYWOL4ZJLp4',
            id: 'rYWOL4ZJLp4', artist: 'BOMBOCLAT', title: 'TNGHT, 2Chainz, Iggy Azalea, Diplo, Nicki Minaj, Juicy J , T.I., Tinie (COMED Bootleg)',
            thumbnail: 'https://i.ytimg.com/vi/rYWOL4ZJLp4/mqdefault.jpg',
            playerStatus: 'NOT PLAYING'
        
        },{
            url: 'https://www.youtube.com/watch?v=GTyN-DB_v5M',
            id: 'GTyN-DB_v5M', artist: 'MNEK, Zara Larsson', title: 'Never Forget You',
            thumbnail: 'https://i.ytimg.com/vi/GTyN-DB_v5M/mqdefault.jpg',
            playerStatus: 'NOT PLAYING'
        
        },{
            url: 'https://www.youtube.com/watch?v=uuWQyfGa1yI',
            id: 'uuWQyfGa1yI', artist: 'Run The Jewels', title: 'Blockbuster Night Part 1',
            thumbnail: 'https://i.ytimg.com/vi/uuWQyfGa1yI/mqdefault.jpg',
            playerStatus: 'NOT PLAYING'
            
        },{
            url: 'https://www.youtube.com/watch?v=sSVdGh3iylc',
            id: 'sSVdGh3iylc', artist: 'Willow Smith', title: 'Why Don\'t You Cry',
            thumbnail: 'https://i.ytimg.com/vi/sSVdGh3iylc/mqdefault.jpg',
            playerStatus: 'NOT PLAYING'
        
        },{
            url: 'https://www.youtube.com/watch?v=PqRm35hgKu0',
            id: 'PqRm35hgKu0', artist: 'The White Stripes', title: 'Jolene',
            thumbnail: 'https://i.ytimg.com/vi/PqRm35hgKu0/mqdefault.jpg',
            playerStatus: 'NOT PLAYING'
        
        },{
            url: 'https://www.youtube.com/watch?v=b_KfnGBtVeA',
            id: 'b_KfnGBtVeA', artist: 'Disclosure', title: 'Magnets ft. Lorde',
            thumbnail: 'https://i.ytimg.com/vi/b_KfnGBtVeA/mqdefault.jpg',
            playerStatus: 'NOT PLAYING'
        
        },{
            url: 'https://www.youtube.com/watch?v=6kYnE1rx09Q',
            id: '6kYnE1rx09Q', artist: 'Craig David', title: 'Fill Me In (BBC Radio 1XTRA #SixtyMinutesLive Kurupt FM Takeover)',
            thumbnail: 'https://i.ytimg.com/vi/6kYnE1rx09Q/mqdefault.jpg',
            playerStatus: 'NOT PLAYING'
        
        },{
            url: 'https://www.youtube.com/watch?v=wu5iAgJ65dA',
            id: 'wu5iAgJ65dA', artist: 'Miley Cyrus', title: 'Dooo It!',
            thumbnail: 'https://i.ytimg.com/vi/wu5iAgJ65dA/mqdefault.jpg',
            playerStatus: 'NOT PLAYING'
        
        },{
            url: 'https://www.youtube.com/watch?v=koAtzvSBvfE',
            id: 'koAtzvSBvfE', artist: 'Sevdaliza', title: 'That Other Girl',
            thumbnail: 'https://i.ytimg.com/vi/koAtzvSBvfE/mqdefault.jpg',
            playerStatus: 'NOT PLAYING'
        
        },{
            url: 'https://www.youtube.com/watch?v=itFJBiyL0HE',
            id: 'itFJBiyL0HE', artist: 'Sevdaliza', title: 'The Valley',
            thumbnail: 'https://i.ytimg.com/vi/itFJBiyL0HE/mqdefault.jpg',
            playerStatus: 'NOT PLAYING'
        
        }]
    };
    return o;
}]);