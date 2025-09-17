var wms_layers = [];

var format_WorldMap_0 = new ol.format.GeoJSON();
var features_WorldMap_0 = format_WorldMap_0.readFeatures(json_WorldMap_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WorldMap_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WorldMap_0.addFeatures(features_WorldMap_0);
var lyr_WorldMap_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WorldMap_0, 
                style: style_WorldMap_0,
                popuplayertitle: 'World Map',
                interactive: true,
                title: '<img src="styles/legend/WorldMap_0.png" /> World Map'
            });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_NewYorkCounties_2 = new ol.format.GeoJSON();
var features_NewYorkCounties_2 = format_NewYorkCounties_2.readFeatures(json_NewYorkCounties_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NewYorkCounties_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NewYorkCounties_2.addFeatures(features_NewYorkCounties_2);
var lyr_NewYorkCounties_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NewYorkCounties_2, 
                style: style_NewYorkCounties_2,
                popuplayertitle: 'New York Counties',
                interactive: true,
                title: '<img src="styles/legend/NewYorkCounties_2.png" /> New York Counties'
            });
var format_MentalHealthCenters_3 = new ol.format.GeoJSON();
var features_MentalHealthCenters_3 = format_MentalHealthCenters_3.readFeatures(json_MentalHealthCenters_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MentalHealthCenters_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MentalHealthCenters_3.addFeatures(features_MentalHealthCenters_3);
var lyr_MentalHealthCenters_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MentalHealthCenters_3, 
                style: style_MentalHealthCenters_3,
                popuplayertitle: 'Mental Health Centers',
                interactive: true,
                title: '<img src="styles/legend/MentalHealthCenters_3.png" /> Mental Health Centers'
            });
var format_ServesChildren_4 = new ol.format.GeoJSON();
var features_ServesChildren_4 = format_ServesChildren_4.readFeatures(json_ServesChildren_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServesChildren_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServesChildren_4.addFeatures(features_ServesChildren_4);
var lyr_ServesChildren_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServesChildren_4, 
                style: style_ServesChildren_4,
                popuplayertitle: 'Serves Children',
                interactive: true,
                title: '<img src="styles/legend/ServesChildren_4.png" /> Serves Children'
            });

lyr_WorldMap_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_NewYorkCounties_2.setVisible(true);lyr_MentalHealthCenters_3.setVisible(true);lyr_ServesChildren_4.setVisible(true);
var layersList = [lyr_WorldMap_0,lyr_OpenStreetMap_1,lyr_NewYorkCounties_2,lyr_MentalHealthCenters_3,lyr_ServesChildren_4];
lyr_WorldMap_0.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_NewYorkCounties_2.set('fieldAliases', {'NAME': 'NAME', 'ABBREV': 'ABBREV', 'GNIS_ID': 'GNIS_ID', 'FIPS_CODE': 'FIPS_CODE', 'SWIS': 'SWIS', 'NYSP_ZONE': 'NYSP_ZONE', 'POP1990': 'POP1990', 'POP2000': 'POP2000', 'POP2010': 'POP2010', 'POP2020': 'POP2020', 'DOS_LL': 'DOS_LL', 'DOSLL_DATE': 'DOSLL_DATE', 'NYC': 'NYC', 'CALC_SQ_MI': 'CALC_SQ_MI', 'DATEMOD': 'DATEMOD', });
lyr_MentalHealthCenters_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Agency': 'Agency', 'Website': 'Website', 'Population': 'Population', 'Hours': 'Hours', 'Insurances': 'Insurances', 'Phone': 'Phone', 'Floor': 'Floor', 'County': 'County', 'Region': 'Region', 'Address': 'Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'layer': 'layer', 'path': 'path', 'TrainStop': 'TrainStop', 'Busroute': 'Busroute', 'Provider': 'Provider', 'TrainLine': 'TrainLine', });
lyr_ServesChildren_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Provider_N': 'Provider_N', 'Program_Na': 'Program_Na', 'Agency_Nam': 'Agency_Nam', 'Website': 'Website', 'Population': 'Population', 'Hours_of_o': 'Hours_of_o', 'Insurances': 'Insurances', 'Young_surv': 'Young_surv', 'Has_negati': 'Has_negati', 'Program_Ph': 'Program_Ph', 'Program_Ad': 'Program_Ad', 'Program__1': 'Program__1', 'Program_Ci': 'Program_Ci', 'Program_St': 'Program_St', 'Program_Zi': 'Program_Zi', 'Program_Co': 'Program_Co', 'Program_Re': 'Program_Re', 'Full_Addre': 'Full_Addre', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_WorldMap_0.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_NewYorkCounties_2.set('fieldImages', {'NAME': 'TextEdit', 'ABBREV': 'Hidden', 'GNIS_ID': 'Hidden', 'FIPS_CODE': 'Hidden', 'SWIS': 'Hidden', 'NYSP_ZONE': 'Hidden', 'POP1990': 'Hidden', 'POP2000': 'Hidden', 'POP2010': 'Hidden', 'POP2020': 'Hidden', 'DOS_LL': 'Hidden', 'DOSLL_DATE': 'Hidden', 'NYC': 'Hidden', 'CALC_SQ_MI': 'Hidden', 'DATEMOD': 'Hidden', });
lyr_MentalHealthCenters_3.set('fieldImages', {'OBJECTID': 'Hidden', 'Name': 'TextEdit', 'Agency': 'TextEdit', 'Website': 'TextEdit', 'Population': 'TextEdit', 'Hours': 'TextEdit', 'Insurances': 'TextEdit', 'Phone': 'TextEdit', 'Floor': 'TextEdit', 'County': 'TextEdit', 'Region': 'TextEdit', 'Address': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'layer': 'Hidden', 'path': 'TextEdit', 'TrainStop': 'TextEdit', 'Busroute': 'TextEdit', 'Provider': 'TextEdit', 'TrainLine': 'TextEdit', });
lyr_ServesChildren_4.set('fieldImages', {'OBJECTID': 'Hidden', 'Provider_N': 'Hidden', 'Program_Na': 'Hidden', 'Agency_Nam': 'Hidden', 'Website': 'Hidden', 'Population': 'Hidden', 'Hours_of_o': 'Hidden', 'Insurances': 'Hidden', 'Young_surv': 'Hidden', 'Has_negati': 'Hidden', 'Program_Ph': 'Hidden', 'Program_Ad': 'Hidden', 'Program__1': 'Hidden', 'Program_Ci': 'Hidden', 'Program_St': 'Hidden', 'Program_Zi': 'Hidden', 'Program_Co': 'Hidden', 'Program_Re': 'Hidden', 'Full_Addre': 'Hidden', 'Location': 'Hidden', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_WorldMap_0.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_NewYorkCounties_2.set('fieldLabels', {'NAME': 'no label', });
lyr_MentalHealthCenters_3.set('fieldLabels', {'Name': 'header label - always visible', 'Agency': 'inline label - always visible', 'Website': 'inline label - always visible', 'Population': 'inline label - always visible', 'Hours': 'inline label - always visible', 'Insurances': 'no label', 'Phone': 'inline label - always visible', 'Floor': 'no label', 'County': 'inline label - always visible', 'Region': 'inline label - always visible', 'Address': 'inline label - always visible', 'path': 'no label', 'TrainStop': 'inline label - always visible', 'Busroute': 'inline label - always visible', 'Provider': 'inline label - always visible', 'TrainLine': 'inline label - always visible', });
lyr_ServesChildren_4.set('fieldLabels', {});
lyr_ServesChildren_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});