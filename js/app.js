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