var app = angular.module('playthenext', ['ui.router', 'ngAnimate']);

app.constant('YT_event', {
    STOP: 0, 
    PLAY: 1,
    PAUSE: 2,
    NEXT: 3,
    STATUS_CHANGE: 4,
    SET: 5
});

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'MainCtrl'
    });
    
    $urlRouterProvider.otherwise('home');
}]);

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

app.factory('transitions', [function(){
    var o = {
        gif: [
            {url: 'http://i.giphy.com/KYOD96tSm8Ovm.gif', playerStatus: "NOT PLAYING"},
            {url: 'http://i.giphy.com/MYHKbrINiwOrK.gif', playerStatus: "NOT PLAYING"},
            {url: 'http://i.giphy.com/10BbmRxI3vEvYI.gif', playerStatus: "NOT PLAYING"},
            {url: 'http://i.giphy.com/WFGW9xik06wtG.gif', playerStatus: "NOT PLAYING"},
            {url: 'http://i.giphy.com/8AireQ5HNdLYQ.gif', playerStatus: "NOT PLAYING"},
            {url: 'http://i.giphy.com/Ns0Wq8qAA3aI8.gif', playerStatus: "NOT PLAYING"},
            {url: 'http://i.giphy.com/lhN4K3aHjcucM.gif', playerStatus: "NOT PLAYING"},
            {url: 'http://i.giphy.com/aARIdLTrIgU48.gif', playerStatus: "NOT PLAYING"}
    ]};
    return o;
}]);

app.controller('MainCtrl', function($scope, $http, $sce, tracks, transitions, YT_event) {
  
    shuffle = function(input) {
        var out = [];
     
        // Perform shallow copy of the array
        angular.forEach(input, function(value) {
            out.push(value);
        });
        
        // Perform Fisher-Yates shuffle
        for (var i = input.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1)),
                temp = out[i];
        
            out[i] = out[j];
            out[j] = temp;
        }
        
        return out;
    };
    
     // Shuffle video and vransitions arrays
    currentTrackID = 0;
    $scope.tracks = shuffle(tracks.tracks);

    transitionID = 0;
    $scope.playGif = shuffle(transitions.gif)[transitionID];
    
    // Initialize current track
    $scope.currentTrack = $scope.tracks[currentTrackID];
    $scope.id = $scope.currentTrack.id;
    
    // Settings
    $scope.isPlaying = false;
    $scope.showPlaylist = false;
    $scope.YT_event = YT_event;

    $scope.sendControlEvent = function (ctrlEvent, data) {
        console.log('Action: ' + ctrlEvent);
        
        if (ctrlEvent == YT_event.NEXT) {
            interruptPlay();
            setCurrentTrack('random');
        } else if (ctrlEvent == YT_event.SET) {
            interruptPlay;
            setCurrentTrack(data);
        } else {
            
        }

        this.$broadcast(ctrlEvent);
    };
    
    interruptPlay = function () {
        transitionID = Math.floor(Math.random()*transitions.gif.length);
        $scope.playGif = transitions.gif[transitionID];
        $scope.isPlaying = false;
    };
    
    setCurrentTrack = function (data) {
        
        if (data == 'random') {
            currentTrackID = ++currentTrackID;
            if (currentTrackID >= tracks.tracks.length) {
                currentTrackID = 0;
                $scope.currentTrack = tracks.tracks[currentTrackID];
                console.log('if random, ID: ' + $scope.currentTrack.id);
            } else {
                $scope.currentTrack = tracks.tracks[currentTrackID];
                console.log('if random, ID: ' + $scope.currentTrack.id);
            }
        } else {
            $scope.currentTrack = data;
            console.log('if selected, ID: ' + data.id);
        }
        
        $scope.id = $scope.currentTrack.id;
        return;
    };
    
    $scope.$on(YT_event.STATUS_CHANGE, function(event, data) {
        console.log('STATUS CHANGE: ' + data);
        $scope.currentTrack.playerStatus = data;
        
        switch($scope.currentTrack.playerStatus) {
                case "PLAYING":
                  $scope.isPlaying = true;
                  $scope.showPlaylist = false;
                  console.log('PlayerStatusUpdated. Should show pause button');
                  break;
                case "PAUSED":
                case "BUFFERING":
                case "CUED":
                case "NOT PLAYING":
                  interruptPlay();
                  break;
                case "ENDED":
                  interruptPlay();
                  setCurrentTrack('random');
                  this.$broadcast(ctrlEvent);
        }
        
    });
    
    key('space', function() {
        console.log('space pressed');
        togglePlay();
    });
    
    key('right', function() {
        console.log('next pressed');
        $scope.sendControlEvent(YT_event.NEXT);
    });
    
    togglePlay = function() {
        if ($scope.isPlaying) {
            $scope.sendControlEvent(YT_event.PAUSE);
        } else {
            $scope.sendControlEvent(YT_event.PLAY);
        }
    };
    
    
    
});


// YouTube Angular Directive based off http://blog.oxrud.com/posts/creating-youtube-directive/
app.directive('youtube', function($window, YT_event) {
  return {
    restrict: "E",

    scope: {
      height: "@",
      width: "@",
      videoid: "@"
    },

    template: '<div></div>',

    link: function(scope, element) {
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player;

      $window.onYouTubeIframeAPIReady = function() {

        player = new YT.Player(element.children()[0], {
          playerVars: {
            autoplay: 1,
            modesbranding: 0,
            iv_load_policy: 3,
            showinfo: 1,
            controls: 0
          },

          height: scope.height,
          width: scope.width,
          videoId: scope.videoid, 
          
          events: {
            'onStateChange': function(event) {
              
              var message = {
                event: YT_event.STATUS_CHANGE,
                data: ""
              };
              
              switch(event.data) {
                case YT.PlayerState.PLAYING:
                  message.data = "PLAYING";
                  break;
                case YT.PlayerState.ENDED:
                  message.data = "ENDED";
                  break;
                case YT.PlayerState.UNSTARTED:
                  message.data = "NOT PLAYING";
                  break;
                case YT.PlayerState.PAUSED:
                  message.data = "PAUSED";
                  break;
                case YT.PlayerState.BUFFERING:
                  message.data = "BUFFERING";
                  break;
                case YT.PlayerState.CUED:
                  message.data = "CUED";
                  player.playVideo();
              }
              
              console.log('Switch CASE: ' + message.data);

              scope.$apply(function() {
                scope.$emit(message.event, message.data);
              });
            }
          }            
        });
      };

      scope.$watch('videoid', function(newValue, oldValue) {
        if (newValue == oldValue) {
          return;
        }

        player.cueVideoById(scope.videoid);

      }); 

      scope.$watch('height + width', function(newValue, oldValue) {
        if (newValue == oldValue) {
          return;
        }

        player.setSize(scope.width, scope.height);

      });

      scope.$on(YT_event.STOP, function () {
        player.seekTo(0);
        player.stopVideo();
      });

      scope.$on(YT_event.PLAY, function () {
        player.playVideo();
      }); 

      scope.$on(YT_event.PAUSE, function () {
        player.pauseVideo();
        console.log('Control set: PAUSE');
      }); 
      
      scope.$on(YT_event.NEXT, function (event, data) {
        player.cueVideoById(data);
      });
      
      scope.$on(YT_event.SET, function (event, data) {
        player.cueVideoById(data);
      });
    }  
  };
});