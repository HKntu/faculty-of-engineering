var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3152416791415822
      },
      "linkHotspots": [
        {
          "yaw": 0.38104249878912455,
          "pitch": -0.1841517771391068,
          "rotation": 7.0685834705770345,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7648651968794766,
          "pitch": 0.07559132032826454,
          "title": "The Engineering Entrance",
          "text": "This way lead to Engineering Auditorium"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.95744217540628,
          "pitch": 0.05298528787047729,
          "rotation": 3.9269908169872414,
          "target": "0-along-engineering-drive-1"
        },
        {
          "yaw": 0.0973788195395926,
          "pitch": 0.021013434942048548,
          "rotation": 0,
          "target": "2-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1914261326547724,
          "pitch": -0.17675075864831769,
          "title": "Statue",
          "text": "Not sure what is this statue about =)))"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.7296901993657627,
        "pitch": 0.09416190652596157,
        "fov": 1.3152416791415822
      },
      "linkHotspots": [
        {
          "yaw": 3.1343840500327946,
          "pitch": 0.04295072264740085,
          "rotation": 0,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.0252834749948985,
          "pitch": -0.11172836335357061,
          "title": "Coffee shop",
          "text": "This coffee shop has been changed to a new brand =)))"
        },
        {
          "yaw": -0.030124003656037956,
          "pitch": -0.2196220755620768,
          "title": "Way to Block E1A",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Faculty of Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
