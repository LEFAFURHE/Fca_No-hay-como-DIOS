ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:21818").setExtent([378555.237193, 987271.091491, 379222.445597, 987590.134889]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Curvas_Nivel_2m_1 = new ol.format.GeoJSON();
var features_Curvas_Nivel_2m_1 = format_Curvas_Nivel_2m_1.readFeatures(json_Curvas_Nivel_2m_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21818'});
var jsonSource_Curvas_Nivel_2m_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curvas_Nivel_2m_1.addFeatures(features_Curvas_Nivel_2m_1);
var lyr_Curvas_Nivel_2m_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Curvas_Nivel_2m_1, 
                style: style_Curvas_Nivel_2m_1,
                popuplayertitle: 'Curvas_Nivel_2m',
                interactive: true,
    title: 'Curvas_Nivel_2m<br />\
    <img src="styles/legend/Curvas_Nivel_2m_1_0.png" /> 92,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_2m_1_1.png" /> 94,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_2m_1_2.png" /> 96,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_2m_1_3.png" /> 98,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_2m_1_4.png" /> 100,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_2m_1_5.png" /> 102,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_2m_1_6.png" /> 104,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_2m_1_7.png" /> 106,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_2m_1_8.png" /> 108,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_2m_1_9.png" /> 110,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_2m_1_10.png" /> 112,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_2m_1_11.png" /> 114,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_2m_1_12.png" /> 116,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_2m_1_13.png" /> 118,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_2m_1_14.png" /> 120,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_2m_1_15.png" /> 122,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_2m_1_16.png" /> 124,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_2m_1_17.png" /> 126,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_2m_1_18.png" /> 128,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_2m_1_19.png" /> 130,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_2m_1_20.png" /> 132,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_2m_1_21.png" /> 134,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_2m_1_22.png" /> 136,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_2m_1_23.png" /> 138,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_2m_1_24.png" /> 140,000000000000000<br />\
    <img src="styles/legend/Curvas_Nivel_2m_1_25.png" /> 142,000000000000000<br />' });
var format_Monteria_Veredas_2 = new ol.format.GeoJSON();
var features_Monteria_Veredas_2 = format_Monteria_Veredas_2.readFeatures(json_Monteria_Veredas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21818'});
var jsonSource_Monteria_Veredas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monteria_Veredas_2.addFeatures(features_Monteria_Veredas_2);
var lyr_Monteria_Veredas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monteria_Veredas_2, 
                style: style_Monteria_Veredas_2,
                popuplayertitle: 'Monteria_Veredas',
                interactive: false,
                title: '<img src="styles/legend/Monteria_Veredas_2.png" /> Monteria_Veredas'
            });
var format_Iguana_3 = new ol.format.GeoJSON();
var features_Iguana_3 = format_Iguana_3.readFeatures(json_Iguana_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21818'});
var jsonSource_Iguana_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Iguana_3.addFeatures(features_Iguana_3);
var lyr_Iguana_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Iguana_3, 
                style: style_Iguana_3,
                popuplayertitle: 'Iguana',
                interactive: true,
                title: '<img src="styles/legend/Iguana_3.png" /> Iguana'
            });
var format_Otro_4 = new ol.format.GeoJSON();
var features_Otro_4 = format_Otro_4.readFeatures(json_Otro_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21818'});
var jsonSource_Otro_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Otro_4.addFeatures(features_Otro_4);
var lyr_Otro_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Otro_4, 
                style: style_Otro_4,
                popuplayertitle: 'Otro',
                interactive: true,
                title: '<img src="styles/legend/Otro_4.png" /> Otro'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Curvas_Nivel_2m_1.setVisible(true);lyr_Monteria_Veredas_2.setVisible(true);lyr_Iguana_3.setVisible(true);lyr_Otro_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Curvas_Nivel_2m_1,lyr_Monteria_Veredas_2,lyr_Iguana_3,lyr_Otro_4];
lyr_Curvas_Nivel_2m_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Monteria_Veredas_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DPTOMPIO': 'DPTOMPIO', 'CODIGO_VER': 'CODIGO_VER', 'NOM_DEP': 'NOM_DEP', 'NOMB_MPIO': 'NOMB_MPIO', 'NOMBRE_VER': 'NOMBRE_VER', 'VIGENCIA': 'VIGENCIA', 'FUENTE': 'FUENTE', 'DESCRIPCIO': 'DESCRIPCIO', 'SEUDONIMOS': 'SEUDONIMOS', 'AREA_HA': 'AREA_HA', 'COD_DPTO': 'COD_DPTO', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Iguana_3.set('fieldAliases', {'id': 'id', 'Área': 'Área', 'M2': 'M2', });
lyr_Otro_4.set('fieldAliases', {'id': 'id', 'Área': 'Área', });
lyr_Curvas_Nivel_2m_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV': 'TextEdit', });
lyr_Monteria_Veredas_2.set('fieldImages', {'OBJECTID': 'Range', 'DPTOMPIO': 'TextEdit', 'CODIGO_VER': 'TextEdit', 'NOM_DEP': 'TextEdit', 'NOMB_MPIO': 'TextEdit', 'NOMBRE_VER': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FUENTE': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'SEUDONIMOS': 'TextEdit', 'AREA_HA': 'TextEdit', 'COD_DPTO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Iguana_3.set('fieldImages', {'id': 'TextEdit', 'Área': 'TextEdit', 'M2': '', });
lyr_Otro_4.set('fieldImages', {'id': 'TextEdit', 'Área': 'TextEdit', });
lyr_Curvas_Nivel_2m_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'inline label - always visible', });
lyr_Monteria_Veredas_2.set('fieldLabels', {'OBJECTID': 'no label', 'DPTOMPIO': 'no label', 'CODIGO_VER': 'no label', 'NOM_DEP': 'inline label - visible with data', 'NOMB_MPIO': 'no label', 'NOMBRE_VER': 'hidden field', 'VIGENCIA': 'no label', 'FUENTE': 'no label', 'DESCRIPCIO': 'no label', 'SEUDONIMOS': 'no label', 'AREA_HA': 'no label', 'COD_DPTO': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Iguana_3.set('fieldLabels', {'id': 'hidden field', 'Área': 'inline label - always visible', 'M2': 'inline label - visible with data', });
lyr_Otro_4.set('fieldLabels', {'id': 'hidden field', 'Área': 'hidden field', });
lyr_Otro_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});