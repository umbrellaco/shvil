root = exports ? this

cities = [
    {
        "geometry": {
            "type": "Point",
            "coordinates": [
                34.974339,
                32.83036
            ]
        },
        "properties": {
            "title": "חיפה",
            "id": 1
        }
    },
    {
        "geometry": {
            "type": "Point",
            "coordinates": [
                34.655316,
                31.80438
            ]
        },
        "properties": {
            "title": "אשדוד",
            "id": 14
        }
    },
    {
        "geometry": {
            "type": "Point",
            "coordinates": [
                34.791464,
                31.252972
            ]
        },
        "properties": {
            "title": "באר שבע",
            "id": 8
        }
    },
    {
        "geometry": {
            "type": "Point",
            "coordinates": [
                34.907612,
                32.178194
            ]
        },
        "properties": {
            "title": "כפר סבא",
            "id": 5
        }
    },
    {
        "geometry": {
            "type": "Point",
            "coordinates": [
                34.824787,
                32.068423
            ]
        },
        "properties": {
            "title": "רמת גן",
            "id": 11
        }
    },
    {
        "geometry": {
            "type": "Point",
            "coordinates": [
                34.787386,
                32.015832
            ]
        },
        "properties": {
            "title": "חולון",
            "id": 1
        }
    },
    {
        "geometry": {
            "type": "Point",
            "coordinates": [
                34.777821,
                32.066157
            ]
        },
        "properties": {
            "title": "תל אביב-יפו",
            "id": 3
        }
    },
    {
        "geometry": {
            "type": "Point",
            "coordinates": [
                34.92088,
                32.442784
            ]
        },
        "properties": {
            "title": "חדרה",
            "id": 6
        }
    },
    {
        "geometry": {
            "type": "Point",
            "coordinates": [
                34.871328,
                32.18478
            ]
        },
        "properties": {
            "title": "רעננה",
            "id": 10
        }
    },
    {
        "geometry": {
            "type": "Point",
            "coordinates": [
                34.80705,
                31.961544
            ]
        },
        "properties": {
            "title": "ראשון לציון",
            "id": 7
        }
    },
    {
        "geometry": {
            "type": "Point",
            "coordinates": [
                35.213711,
                31.768318
            ]
        },
        "properties": {
            "title": "ירושלים",
            "id": 2
        }
    },
    {
        "geometry": {
            "type": "Point",
            "coordinates": [
                34.808873,
                32.072175
            ]
        },
        "properties": {
            "title": "גבעתיים",
            "id": 16
        }
    },
    {
        "geometry": {
            "type": "Point",
            "coordinates": [
                34.811274,
                31.89277199999999
            ]
        },
        "properties": {
            "title": "רחובות",
            "id": 15
        }
    },
    {
        "geometry": {
            "type": "Point",
            "coordinates": [
                34.887764,
                32.08404
            ]
        },
        "properties": {
            "title": "פתח תקווה",
            "id": 13
        }
    },
    {
        "geometry": {
            "type": "Point",
            "coordinates": [
                34.853197,
                32.321457
            ]
        },
        "properties": {
            "title": "נתניה",
            "id": 9
        }
    },
    {
        "geometry": {
            "type": "Point",
            "coordinates": [
                34.844677,
                32.162412
            ]
        },
        "properties": {
            "title": "הרצליה",
            "id": 12
        }
    }
]

class City extends Backbone.Model
    

$ ->
    israelExtent = new MM.Extent(33.6006300456776,   # north
                                 33.9, # west
                                 29.223819169667124, # south
                                 36.1) # east

    root.map = mapbox.map('map')

    root.baseLayerLocalized = mapbox.layer().id('idan.map-468vpvim').composite(false)
    root.baseLayerEnglish = mapbox.layer().id('idan.map-b25l9lse').composite(false)
    map.addTileLayer(root.baseLayerLocalized)
    map.addTileLayer(root.baseLayerEnglish.disable())
    root.cityMarkerLayer = mapbox.markers.layer()
        .features(cities)
        .key((f) ->
            return f.properties.id
        )
    mapbox.markers.interaction(cityMarkerLayer)
    map.addLayer(cityMarkerLayer)
    map.ui.zoomer.add()
    map.addCallback('drawn', (map) ->
        console.log(map.getExtent())
    )
    map.setPanLimits(israelExtent)
    map.setExtent(cityMarkerLayer.extent())


    root.localize = (localized) ->
        if localized
            root.baseLayerEnglish.disable()
            root.baseLayerLocalized.enable()
        else
            root.baseLayerEnglish.enable()
            root.baseLayerLocalized.disable()

# Map extents:
# {north: 33.6006300456776, south: 29.223819169667124, east: 35.824406078124994, west: 34.313785960937516}