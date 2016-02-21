angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.nakedWolvesIndonesia', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/nakedWolvesIndonesia.html',
        controller: 'nakedWolvesIndonesiaCtrl'
      }
    }
  })

  .state('tabsController.sparePart', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/sparePart.html',
        controller: 'sparePartCtrl'
      }
    }
  })

  .state('tabsController.terimaKasih', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/terimaKasih.html',
        controller: 'terimaKasihCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('rantai', {
    url: '/page5',
    templateUrl: 'templates/rantai.html',
    controller: 'rantaiCtrl'
  })

  .state('tabsController.laherBearing', {
    url: '/page6',
    views: {
      'tab2': {
        templateUrl: 'templates/laherBearing.html',
        controller: 'laherBearingCtrl'
      }
    }
  })

  .state('tabsController.busi', {
    url: '/page7',
    views: {
      'tab2': {
        templateUrl: 'templates/busi.html',
        controller: 'busiCtrl'
      }
    }
  })

  .state('tabsController.napGear', {
    url: '/page8',
    views: {
      'tab2': {
        templateUrl: 'templates/napGear.html',
        controller: 'napGearCtrl'
      }
    }
  })

  .state('tabsController.kabelSpeedometer', {
    url: '/page9',
    views: {
      'tab2': {
        templateUrl: 'templates/kabelSpeedometer.html',
        controller: 'kabelSpeedometerCtrl'
      }
    }
  })

  .state('tabsController.kabelKopling', {
    url: '/page10',
    views: {
      'tab2': {
        templateUrl: 'templates/kabelKopling.html',
        controller: 'kabelKoplingCtrl'
      }
    }
  })

  .state('tabsController.tuasKoplingDanRem', {
    url: '/page11',
    views: {
      'tab2': {
        templateUrl: 'templates/tuasKoplingDanRem.html',
        controller: 'tuasKoplingDanRemCtrl'
      }
    }
  })

  .state('tabsController.kampasRem', {
    url: '/page12',
    views: {
      'tab2': {
        templateUrl: 'templates/kampasRem.html',
        controller: 'kampasRemCtrl'
      }
    }
  })

  .state('tabsController.pilotMainJet', {
    url: '/page13',
    views: {
      'tab2': {
        templateUrl: 'templates/pilotMainJet.html',
        controller: 'pilotMainJetCtrl'
      }
    }
  })

  .state('tabsController.girDepan', {
    url: '/page14',
    views: {
      'tab2': {
        templateUrl: 'templates/girDepan.html',
        controller: 'girDepanCtrl'
      }
    }
  })

  .state('tabsController.koplingKampasPlatPer', {
    url: '/page15',
    views: {
      'tab2': {
        templateUrl: 'templates/koplingKampasPlatPer.html',
        controller: 'koplingKampasPlatPerCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});