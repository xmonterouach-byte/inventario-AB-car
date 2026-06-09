var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_MapaAB_1 = new ol.format.GeoJSON();
var features_MapaAB_1 = format_MapaAB_1.readFeatures(json_MapaAB_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MapaAB_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MapaAB_1.addFeatures(features_MapaAB_1);
var lyr_MapaAB_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MapaAB_1, 
                style: style_MapaAB_1,
                popuplayertitle: 'Mapa AB',
                interactive: true,
    title: 'Mapa AB<br />\
    <img src="styles/legend/MapaAB_1_0.png" /> 0.001 - 0.0127<br />\
    <img src="styles/legend/MapaAB_1_1.png" /> 0.0127 - 0.02<br />\
    <img src="styles/legend/MapaAB_1_2.png" /> 0.02 - 0.038<br />\
    <img src="styles/legend/MapaAB_1_3.png" /> 0.038 - 0.057<br />\
    <img src="styles/legend/MapaAB_1_4.png" /> 0.057 - 0.0968<br />\
    <img src="styles/legend/MapaAB_1_5.png" /> 0.0968 - 0.375<br />\
    <img src="styles/legend/MapaAB_1_6.png" /> 0.375 - 1.57<br />\
    <img src="styles/legend/MapaAB_1_7.png" /> 1.57 - 10.98<br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_MapaAB_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_MapaAB_1];
lyr_MapaAB_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ESPECIE': 'ESPECIE', 'DN_cm': 'DN_cm', 'DB_cm': 'DB_cm', 'H': 'H', 'SF': 'SF', 'DN_m': 'DN_m', 'AB': 'AB', 'V': 'V', 'ESPECIE ': 'ESPECIE ', 'layer': 'layer', 'path': 'path', });
lyr_MapaAB_1.set('fieldImages', {'fid': '', 'ID': '', 'ESPECIE': '', 'DN_cm': '', 'DB_cm': '', 'H': '', 'SF': '', 'DN_m': '', 'AB': '', 'V': '', 'ESPECIE ': '', 'layer': '', 'path': '', });
lyr_MapaAB_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ESPECIE': 'no label', 'DN_cm': 'no label', 'DB_cm': 'no label', 'H': 'no label', 'SF': 'no label', 'DN_m': 'no label', 'AB': 'no label', 'V': 'no label', 'ESPECIE ': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_MapaAB_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});