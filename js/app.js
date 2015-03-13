var app = angular.module('playthenext', ['ui.router', 'ngAnimate']);

app.constant('YT_event', {
    STOP: 0, 
    PLAY: 1,
    PAUSE: 2,
    NEXT: 3,
    STATUS_CHANGE: 4
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
        tracks: [
            {url: 'https://www.youtube.com/watch?v=jYdaQJzcAcw', id: 'jYdaQJzcAcw', artist: 'J. Cole', title: 'She Knows ft. Amber Coffman, Cults', playerStatus: "NOT PLAYING"},
            {url: 'https://www.youtube.com/watch?v=aBn7bjy9c4U', id: 'aBn7bjy9c4U', artist: 'DJ Snake & AlunaGeorge', title: 'You Know You Like It', playerStatus: "NOT PLAYING"},
            {url: 'https://www.youtube.com/watch?v=FJt7gNi3Nr4', id: 'FJt7gNi3Nr4', artist: 'Kanye West', title: 'No Church In The Wild', playerStatus: "NOT PLAYING"},
            {url: 'https://www.youtube.com/watch?v=R5OtX2EnUTU', id: 'R5OtX2EnUTU', artist: 'Young Paris', title: 'THE HAUS', playerStatus: "NOT PLAYING"},
            {url: 'https://www.youtube.com/watch?v=07FYdnEawAQ', id: '07FYdnEawAQ', artist: 'Justin Timberlake', title: 'Tunnel Vision', playerStatus: "NOT PLAYING"},
            {url: 'https://www.youtube.com/watch?v=1lZfqFpjFM8', id: '1lZfqFpjFM8', artist: 'Daniel Johns', title: 'Aerial Love', playerStatus: "NOT PLAYING"},
            {url: 'https://www.youtube.com/watch?v=ZJPjSaOcVwg', id: 'ZJPjSaOcVwg', artist: 'LA Priest', title: 'OINO', playerStatus: 'NOT PLAYING'}
        
        ]
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
    
     // Randomize first video and GIF
    transitionID = Math.floor(Math.random()*transitions.gif.length);
    $scope.playGif = transitions.gif[transitionID];
    
    currentTrackID = Math.floor(Math.random()*tracks.tracks.length);
    
    $scope.tracks = tracks.tracks;
    $scope.currentTrack = tracks.tracks[currentTrackID];
    $scope.id = $scope.currentTrack.id;
    
    $scope.isPlaying = false;
    
    $scope.showPlaylist = false;

    $scope.YT_event = YT_event;
    
    $scope.sendControlEvent = function (ctrlEvent) {
        console.log('Action: ' + ctrlEvent);
        
        if (ctrlEvent == YT_event.NEXT) {
            interruptPlay();
            setCurrentTrack();
        }

        this.$broadcast(ctrlEvent);
    };
    
    interruptPlay = function () {
        transitionID = Math.floor(Math.random()*transitions.gif.length);
        $scope.playGif = transitions.gif[transitionID];
        $scope.isPlaying = false;
    };
    
    setCurrentTrack = function () {
        currentTrackID = currentTrackID + 1;
        if (currentTrackID >= tracks.tracks.length) {
            currentTrackID = 0;
            $scope.currentTrack = tracks.tracks[currentTrackID];
            
        } else {
            $scope.currentTrack = tracks.tracks[currentTrackID];
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
                  setCurrentTrack();
                  this.$broadcast(ctrlEvent);
        }
        
    });
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
    }  
  };
});