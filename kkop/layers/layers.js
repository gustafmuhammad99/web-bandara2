var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Aboy_finalshp_1 = new ol.format.GeoJSON();
var features_Aboy_finalshp_1 = format_Aboy_finalshp_1.readFeatures(json_Aboy_finalshp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aboy_finalshp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aboy_finalshp_1.addFeatures(features_Aboy_finalshp_1);
var lyr_Aboy_finalshp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aboy_finalshp_1, 
                style: style_Aboy_finalshp_1,
                popuplayertitle: 'Aboy_final.shp',
                interactive: true,
    title: 'Aboy_final.shp<br />\
    <img src="styles/legend/Aboy_finalshp_1_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Aboy_finalshp_1_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Aboy_finalshp_1_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Aboy_finalshp_1_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Aboy_finalshp_1_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Akimuga_finalshp_2 = new ol.format.GeoJSON();
var features_Akimuga_finalshp_2 = format_Akimuga_finalshp_2.readFeatures(json_Akimuga_finalshp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Akimuga_finalshp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Akimuga_finalshp_2.addFeatures(features_Akimuga_finalshp_2);
var lyr_Akimuga_finalshp_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Akimuga_finalshp_2, 
                style: style_Akimuga_finalshp_2,
                popuplayertitle: 'Akimuga_final.shp',
                interactive: true,
    title: 'Akimuga_final.shp<br />\
    <img src="styles/legend/Akimuga_finalshp_2_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Akimuga_finalshp_2_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Akimuga_finalshp_2_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Akimuga_finalshp_2_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Akimuga_finalshp_2_4.png" /> PERMUKAAN UTAMA<br />' });
var format_alama_finalshp_3 = new ol.format.GeoJSON();
var features_alama_finalshp_3 = format_alama_finalshp_3.readFeatures(json_alama_finalshp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_alama_finalshp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_alama_finalshp_3.addFeatures(features_alama_finalshp_3);
var lyr_alama_finalshp_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_alama_finalshp_3, 
                style: style_alama_finalshp_3,
                popuplayertitle: 'alama_final.shp',
                interactive: true,
    title: 'alama_final.shp<br />\
    <img src="styles/legend/alama_finalshp_3_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/alama_finalshp_3_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/alama_finalshp_3_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/alama_finalshp_3_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/alama_finalshp_3_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Anggi_finalshp_4 = new ol.format.GeoJSON();
var features_Anggi_finalshp_4 = format_Anggi_finalshp_4.readFeatures(json_Anggi_finalshp_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anggi_finalshp_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anggi_finalshp_4.addFeatures(features_Anggi_finalshp_4);
var lyr_Anggi_finalshp_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anggi_finalshp_4, 
                style: style_Anggi_finalshp_4,
                popuplayertitle: 'Anggi_final.shp',
                interactive: true,
    title: 'Anggi_final.shp<br />\
    <img src="styles/legend/Anggi_finalshp_4_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Anggi_finalshp_4_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Anggi_finalshp_4_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Anggi_finalshp_4_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Anggi_finalshp_4_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Apalapsili_finalshp_5 = new ol.format.GeoJSON();
var features_Apalapsili_finalshp_5 = format_Apalapsili_finalshp_5.readFeatures(json_Apalapsili_finalshp_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Apalapsili_finalshp_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Apalapsili_finalshp_5.addFeatures(features_Apalapsili_finalshp_5);
var lyr_Apalapsili_finalshp_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Apalapsili_finalshp_5, 
                style: style_Apalapsili_finalshp_5,
                popuplayertitle: 'Apalapsili_final.shp',
                interactive: true,
    title: 'Apalapsili_final.shp<br />\
    <img src="styles/legend/Apalapsili_finalshp_5_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Apalapsili_finalshp_5_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Apalapsili_finalshp_5_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Apalapsili_finalshp_5_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Apalapsili_finalshp_5_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Ayawasi_finalshp_6 = new ol.format.GeoJSON();
var features_Ayawasi_finalshp_6 = format_Ayawasi_finalshp_6.readFeatures(json_Ayawasi_finalshp_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ayawasi_finalshp_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ayawasi_finalshp_6.addFeatures(features_Ayawasi_finalshp_6);
var lyr_Ayawasi_finalshp_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ayawasi_finalshp_6, 
                style: style_Ayawasi_finalshp_6,
                popuplayertitle: 'Ayawasi_final.shp',
                interactive: true,
    title: 'Ayawasi_final.shp<br />\
    <img src="styles/legend/Ayawasi_finalshp_6_0.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Ayawasi_finalshp_6_1.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Ayawasi_finalshp_6_2.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Ayawasi_finalshp_6_3.png" /> PERMUKAAN UTAMA<br />' });
var format_Babo_finalshp_7 = new ol.format.GeoJSON();
var features_Babo_finalshp_7 = format_Babo_finalshp_7.readFeatures(json_Babo_finalshp_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Babo_finalshp_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Babo_finalshp_7.addFeatures(features_Babo_finalshp_7);
var lyr_Babo_finalshp_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Babo_finalshp_7, 
                style: style_Babo_finalshp_7,
                popuplayertitle: 'Babo_final.shp',
                interactive: true,
    title: 'Babo_final.shp<br />\
    <img src="styles/legend/Babo_finalshp_7_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Babo_finalshp_7_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Babo_finalshp_7_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Babo_finalshp_7_3.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/Babo_finalshp_7_4.png" /> KAWASAN KEMUNGKINAN BAHAYA KECELAKAAN<br />\
    <img src="styles/legend/Babo_finalshp_7_5.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Babo_finalshp_7_6.png" /> PERMUKAAN UTAMA<br />' });
var format_Bade_finalshp_8 = new ol.format.GeoJSON();
var features_Bade_finalshp_8 = format_Bade_finalshp_8.readFeatures(json_Bade_finalshp_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bade_finalshp_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bade_finalshp_8.addFeatures(features_Bade_finalshp_8);
var lyr_Bade_finalshp_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bade_finalshp_8, 
                style: style_Bade_finalshp_8,
                popuplayertitle: 'Bade_final.shp',
                interactive: true,
    title: 'Bade_final.shp<br />\
    <img src="styles/legend/Bade_finalshp_8_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Bade_finalshp_8_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Bade_finalshp_8_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Bade_finalshp_8_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Bade_finalshp_8_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Batom_finalshp_9 = new ol.format.GeoJSON();
var features_Batom_finalshp_9 = format_Batom_finalshp_9.readFeatures(json_Batom_finalshp_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batom_finalshp_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batom_finalshp_9.addFeatures(features_Batom_finalshp_9);
var lyr_Batom_finalshp_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batom_finalshp_9, 
                style: style_Batom_finalshp_9,
                popuplayertitle: 'Batom_final.shp',
                interactive: true,
    title: 'Batom_final.shp<br />\
    <img src="styles/legend/Batom_finalshp_9_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Batom_finalshp_9_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Batom_finalshp_9_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Batom_finalshp_9_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Batom_finalshp_9_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Beoga_finalshp_10 = new ol.format.GeoJSON();
var features_Beoga_finalshp_10 = format_Beoga_finalshp_10.readFeatures(json_Beoga_finalshp_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Beoga_finalshp_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beoga_finalshp_10.addFeatures(features_Beoga_finalshp_10);
var lyr_Beoga_finalshp_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Beoga_finalshp_10, 
                style: style_Beoga_finalshp_10,
                popuplayertitle: 'Beoga_final.shp',
                interactive: true,
    title: 'Beoga_final.shp<br />\
    <img src="styles/legend/Beoga_finalshp_10_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Beoga_finalshp_10_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Beoga_finalshp_10_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Beoga_finalshp_10_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Beoga_finalshp_10_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Bilai_finalshp_11 = new ol.format.GeoJSON();
var features_Bilai_finalshp_11 = format_Bilai_finalshp_11.readFeatures(json_Bilai_finalshp_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bilai_finalshp_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bilai_finalshp_11.addFeatures(features_Bilai_finalshp_11);
var lyr_Bilai_finalshp_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bilai_finalshp_11, 
                style: style_Bilai_finalshp_11,
                popuplayertitle: 'Bilai_final.shp',
                interactive: true,
    title: 'Bilai_final.shp<br />\
    <img src="styles/legend/Bilai_finalshp_11_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Bilai_finalshp_11_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Bilai_finalshp_11_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Bilai_finalshp_11_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Bilai_finalshp_11_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Bilorai_finalshp_12 = new ol.format.GeoJSON();
var features_Bilorai_finalshp_12 = format_Bilorai_finalshp_12.readFeatures(json_Bilorai_finalshp_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bilorai_finalshp_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bilorai_finalshp_12.addFeatures(features_Bilorai_finalshp_12);
var lyr_Bilorai_finalshp_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bilorai_finalshp_12, 
                style: style_Bilorai_finalshp_12,
                popuplayertitle: 'Bilorai_final.shp',
                interactive: true,
    title: 'Bilorai_final.shp<br />\
    <img src="styles/legend/Bilorai_finalshp_12_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Bilorai_finalshp_12_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Bilorai_finalshp_12_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Bilorai_finalshp_12_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Bilorai_finalshp_12_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Bintuni_finalshp_13 = new ol.format.GeoJSON();
var features_Bintuni_finalshp_13 = format_Bintuni_finalshp_13.readFeatures(json_Bintuni_finalshp_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bintuni_finalshp_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bintuni_finalshp_13.addFeatures(features_Bintuni_finalshp_13);
var lyr_Bintuni_finalshp_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bintuni_finalshp_13, 
                style: style_Bintuni_finalshp_13,
                popuplayertitle: 'Bintuni_final.shp',
                interactive: true,
    title: 'Bintuni_final.shp<br />\
    <img src="styles/legend/Bintuni_finalshp_13_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Bintuni_finalshp_13_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Bintuni_finalshp_13_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Bintuni_finalshp_13_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Bintuni_finalshp_13_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Bokondini_finalshp_14 = new ol.format.GeoJSON();
var features_Bokondini_finalshp_14 = format_Bokondini_finalshp_14.readFeatures(json_Bokondini_finalshp_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bokondini_finalshp_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bokondini_finalshp_14.addFeatures(features_Bokondini_finalshp_14);
var lyr_Bokondini_finalshp_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bokondini_finalshp_14, 
                style: style_Bokondini_finalshp_14,
                popuplayertitle: 'Bokondini_final.shp',
                interactive: true,
    title: 'Bokondini_final.shp<br />\
    <img src="styles/legend/Bokondini_finalshp_14_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Bokondini_finalshp_14_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Bokondini_finalshp_14_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Bokondini_finalshp_14_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Bokondini_finalshp_14_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Bomakia_finalshp_15 = new ol.format.GeoJSON();
var features_Bomakia_finalshp_15 = format_Bomakia_finalshp_15.readFeatures(json_Bomakia_finalshp_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bomakia_finalshp_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bomakia_finalshp_15.addFeatures(features_Bomakia_finalshp_15);
var lyr_Bomakia_finalshp_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bomakia_finalshp_15, 
                style: style_Bomakia_finalshp_15,
                popuplayertitle: 'Bomakia_final.shp',
                interactive: true,
    title: 'Bomakia_final.shp<br />\
    <img src="styles/legend/Bomakia_finalshp_15_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Bomakia_finalshp_15_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Bomakia_finalshp_15_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Bomakia_finalshp_15_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Bomakia_finalshp_15_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Borme_finalshp_16 = new ol.format.GeoJSON();
var features_Borme_finalshp_16 = format_Borme_finalshp_16.readFeatures(json_Borme_finalshp_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Borme_finalshp_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Borme_finalshp_16.addFeatures(features_Borme_finalshp_16);
var lyr_Borme_finalshp_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Borme_finalshp_16, 
                style: style_Borme_finalshp_16,
                popuplayertitle: 'Borme_final.shp',
                interactive: true,
    title: 'Borme_final.shp<br />\
    <img src="styles/legend/Borme_finalshp_16_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Borme_finalshp_16_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Borme_finalshp_16_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Borme_finalshp_16_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Borme_finalshp_16_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Dabra_finalshp_17 = new ol.format.GeoJSON();
var features_Dabra_finalshp_17 = format_Dabra_finalshp_17.readFeatures(json_Dabra_finalshp_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dabra_finalshp_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dabra_finalshp_17.addFeatures(features_Dabra_finalshp_17);
var lyr_Dabra_finalshp_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dabra_finalshp_17, 
                style: style_Dabra_finalshp_17,
                popuplayertitle: 'Dabra_final.shp',
                interactive: true,
    title: 'Dabra_final.shp<br />\
    <img src="styles/legend/Dabra_finalshp_17_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Dabra_finalshp_17_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Dabra_finalshp_17_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Dabra_finalshp_17_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Dabra_finalshp_17_4.png" /> PERMUKAAN UTAMA<br />' });
var format_DomineEdwardOsok_finalshp_18 = new ol.format.GeoJSON();
var features_DomineEdwardOsok_finalshp_18 = format_DomineEdwardOsok_finalshp_18.readFeatures(json_DomineEdwardOsok_finalshp_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DomineEdwardOsok_finalshp_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DomineEdwardOsok_finalshp_18.addFeatures(features_DomineEdwardOsok_finalshp_18);
var lyr_DomineEdwardOsok_finalshp_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DomineEdwardOsok_finalshp_18, 
                style: style_DomineEdwardOsok_finalshp_18,
                popuplayertitle: 'Domine Edward Osok_final.shp',
                interactive: true,
    title: 'Domine Edward Osok_final.shp<br />\
    <img src="styles/legend/DomineEdwardOsok_finalshp_18_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/DomineEdwardOsok_finalshp_18_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/DomineEdwardOsok_finalshp_18_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/DomineEdwardOsok_finalshp_18_3.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/DomineEdwardOsok_finalshp_18_4.png" /> STRIP LANDAS PACU<br />\
    <img src="styles/legend/DomineEdwardOsok_finalshp_18_5.png" /> KAWASAN KEMUNGKINAN BAHAYA KECELAKAAN<br />' });
var format_DouwAturure_finalshp_19 = new ol.format.GeoJSON();
var features_DouwAturure_finalshp_19 = format_DouwAturure_finalshp_19.readFeatures(json_DouwAturure_finalshp_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DouwAturure_finalshp_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DouwAturure_finalshp_19.addFeatures(features_DouwAturure_finalshp_19);
var lyr_DouwAturure_finalshp_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DouwAturure_finalshp_19, 
                style: style_DouwAturure_finalshp_19,
                popuplayertitle: 'Douw Aturure_final.shp',
                interactive: true,
    title: 'Douw Aturure_final.shp<br />\
    <img src="styles/legend/DouwAturure_finalshp_19_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/DouwAturure_finalshp_19_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/DouwAturure_finalshp_19_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/DouwAturure_finalshp_19_3.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/DouwAturure_finalshp_19_4.png" /> KAWASAN KEMUNGKINAN BAHAYA KECELAKAAN<br />\
    <img src="styles/legend/DouwAturure_finalshp_19_5.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/DouwAturure_finalshp_19_6.png" /> PERMUKAAN UTAMA<br />' });
var format_Elelim_finalshp_20 = new ol.format.GeoJSON();
var features_Elelim_finalshp_20 = format_Elelim_finalshp_20.readFeatures(json_Elelim_finalshp_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Elelim_finalshp_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elelim_finalshp_20.addFeatures(features_Elelim_finalshp_20);
var lyr_Elelim_finalshp_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elelim_finalshp_20, 
                style: style_Elelim_finalshp_20,
                popuplayertitle: 'Elelim_final.shp',
                interactive: true,
    title: 'Elelim_final.shp<br />\
    <img src="styles/legend/Elelim_finalshp_20_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Elelim_finalshp_20_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Elelim_finalshp_20_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Elelim_finalshp_20_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Elelim_finalshp_20_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Enarotali_finalshp_21 = new ol.format.GeoJSON();
var features_Enarotali_finalshp_21 = format_Enarotali_finalshp_21.readFeatures(json_Enarotali_finalshp_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Enarotali_finalshp_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Enarotali_finalshp_21.addFeatures(features_Enarotali_finalshp_21);
var lyr_Enarotali_finalshp_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Enarotali_finalshp_21, 
                style: style_Enarotali_finalshp_21,
                popuplayertitle: 'Enarotali_final.shp',
                interactive: true,
    title: 'Enarotali_final.shp<br />\
    <img src="styles/legend/Enarotali_finalshp_21_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Enarotali_finalshp_21_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Enarotali_finalshp_21_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Enarotali_finalshp_21_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Enarotali_finalshp_21_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Ewer_finalshp_22 = new ol.format.GeoJSON();
var features_Ewer_finalshp_22 = format_Ewer_finalshp_22.readFeatures(json_Ewer_finalshp_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ewer_finalshp_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ewer_finalshp_22.addFeatures(features_Ewer_finalshp_22);
var lyr_Ewer_finalshp_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ewer_finalshp_22, 
                style: style_Ewer_finalshp_22,
                popuplayertitle: 'Ewer_final.shp',
                interactive: true,
    title: 'Ewer_final.shp<br />\
    <img src="styles/legend/Ewer_finalshp_22_0.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Ewer_finalshp_22_1.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Ewer_finalshp_22_2.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Ewer_finalshp_22_3.png" /> PERMUKAAN UTAMA<br />' });
var format_Fawi_finalshp_23 = new ol.format.GeoJSON();
var features_Fawi_finalshp_23 = format_Fawi_finalshp_23.readFeatures(json_Fawi_finalshp_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fawi_finalshp_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fawi_finalshp_23.addFeatures(features_Fawi_finalshp_23);
var lyr_Fawi_finalshp_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fawi_finalshp_23, 
                style: style_Fawi_finalshp_23,
                popuplayertitle: 'Fawi_final.shp',
                interactive: true,
    title: 'Fawi_final.shp<br />\
    <img src="styles/legend/Fawi_finalshp_23_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Fawi_finalshp_23_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Fawi_finalshp_23_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Fawi_finalshp_23_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Fawi_finalshp_23_4.png" /> PERMUKAAN UTAMA<br />' });
var format_FransKaisiepo_finalshp_24 = new ol.format.GeoJSON();
var features_FransKaisiepo_finalshp_24 = format_FransKaisiepo_finalshp_24.readFeatures(json_FransKaisiepo_finalshp_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FransKaisiepo_finalshp_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FransKaisiepo_finalshp_24.addFeatures(features_FransKaisiepo_finalshp_24);
var lyr_FransKaisiepo_finalshp_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FransKaisiepo_finalshp_24, 
                style: style_FransKaisiepo_finalshp_24,
                popuplayertitle: 'Frans Kaisiepo_final.shp',
                interactive: true,
    title: 'Frans Kaisiepo_final.shp<br />\
    <img src="styles/legend/FransKaisiepo_finalshp_24_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/FransKaisiepo_finalshp_24_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/FransKaisiepo_finalshp_24_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/FransKaisiepo_finalshp_24_3.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/FransKaisiepo_finalshp_24_4.png" /> KAWASAN KEMUNGKINAN BAHAYA KECELAKAAN<br />\
    <img src="styles/legend/FransKaisiepo_finalshp_24_5.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/FransKaisiepo_finalshp_24_6.png" /> PERMUKAAN UTAMA<br />' });
var format_Ilaga_finalshp_25 = new ol.format.GeoJSON();
var features_Ilaga_finalshp_25 = format_Ilaga_finalshp_25.readFeatures(json_Ilaga_finalshp_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ilaga_finalshp_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ilaga_finalshp_25.addFeatures(features_Ilaga_finalshp_25);
var lyr_Ilaga_finalshp_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ilaga_finalshp_25, 
                style: style_Ilaga_finalshp_25,
                popuplayertitle: 'Ilaga_final.shp',
                interactive: true,
    title: 'Ilaga_final.shp<br />\
    <img src="styles/legend/Ilaga_finalshp_25_0.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Ilaga_finalshp_25_1.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Ilaga_finalshp_25_2.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Ilaga_finalshp_25_3.png" /> PERMUKAAN UTAMA<br />' });
var format_Ilu_finalshp_26 = new ol.format.GeoJSON();
var features_Ilu_finalshp_26 = format_Ilu_finalshp_26.readFeatures(json_Ilu_finalshp_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ilu_finalshp_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ilu_finalshp_26.addFeatures(features_Ilu_finalshp_26);
var lyr_Ilu_finalshp_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ilu_finalshp_26, 
                style: style_Ilu_finalshp_26,
                popuplayertitle: 'Ilu_final.shp',
                interactive: true,
    title: 'Ilu_final.shp<br />\
    <img src="styles/legend/Ilu_finalshp_26_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Ilu_finalshp_26_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Ilu_finalshp_26_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Ilu_finalshp_26_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Ilu_finalshp_26_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Inanwatan_finalshp_27 = new ol.format.GeoJSON();
var features_Inanwatan_finalshp_27 = format_Inanwatan_finalshp_27.readFeatures(json_Inanwatan_finalshp_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inanwatan_finalshp_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inanwatan_finalshp_27.addFeatures(features_Inanwatan_finalshp_27);
var lyr_Inanwatan_finalshp_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Inanwatan_finalshp_27, 
                style: style_Inanwatan_finalshp_27,
                popuplayertitle: 'Inanwatan_final.shp',
                interactive: true,
    title: 'Inanwatan_final.shp<br />\
    <img src="styles/legend/Inanwatan_finalshp_27_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Inanwatan_finalshp_27_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Inanwatan_finalshp_27_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Inanwatan_finalshp_27_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Inanwatan_finalshp_27_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Jila_finalshp_28 = new ol.format.GeoJSON();
var features_Jila_finalshp_28 = format_Jila_finalshp_28.readFeatures(json_Jila_finalshp_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jila_finalshp_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jila_finalshp_28.addFeatures(features_Jila_finalshp_28);
var lyr_Jila_finalshp_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jila_finalshp_28, 
                style: style_Jila_finalshp_28,
                popuplayertitle: 'Jila_final.shp',
                interactive: true,
    title: 'Jila_final.shp<br />\
    <img src="styles/legend/Jila_finalshp_28_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Jila_finalshp_28_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Jila_finalshp_28_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Jila_finalshp_28_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Jila_finalshp_28_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Jita_finalshp_29 = new ol.format.GeoJSON();
var features_Jita_finalshp_29 = format_Jita_finalshp_29.readFeatures(json_Jita_finalshp_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jita_finalshp_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jita_finalshp_29.addFeatures(features_Jita_finalshp_29);
var lyr_Jita_finalshp_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jita_finalshp_29, 
                style: style_Jita_finalshp_29,
                popuplayertitle: 'Jita_final.shp',
                interactive: true,
    title: 'Jita_final.shp<br />\
    <img src="styles/legend/Jita_finalshp_29_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Jita_finalshp_29_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Jita_finalshp_29_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Jita_finalshp_29_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Jita_finalshp_29_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Kabare_finalshp_30 = new ol.format.GeoJSON();
var features_Kabare_finalshp_30 = format_Kabare_finalshp_30.readFeatures(json_Kabare_finalshp_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kabare_finalshp_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kabare_finalshp_30.addFeatures(features_Kabare_finalshp_30);
var lyr_Kabare_finalshp_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kabare_finalshp_30, 
                style: style_Kabare_finalshp_30,
                popuplayertitle: 'Kabare_final.shp',
                interactive: true,
    title: 'Kabare_final.shp<br />\
    <img src="styles/legend/Kabare_finalshp_30_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Kabare_finalshp_30_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Kabare_finalshp_30_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Kabare_finalshp_30_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Kabare_finalshp_30_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Kambuaya_finalshp_31 = new ol.format.GeoJSON();
var features_Kambuaya_finalshp_31 = format_Kambuaya_finalshp_31.readFeatures(json_Kambuaya_finalshp_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kambuaya_finalshp_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kambuaya_finalshp_31.addFeatures(features_Kambuaya_finalshp_31);
var lyr_Kambuaya_finalshp_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kambuaya_finalshp_31, 
                style: style_Kambuaya_finalshp_31,
                popuplayertitle: 'Kambuaya_final.shp',
                interactive: true,
    title: 'Kambuaya_final.shp<br />\
    <img src="styles/legend/Kambuaya_finalshp_31_0.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Kambuaya_finalshp_31_1.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Kambuaya_finalshp_31_2.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Kambuaya_finalshp_31_3.png" /> PERMUKAAN UTAMA<br />' });
var format_Kamur_finalshp_32 = new ol.format.GeoJSON();
var features_Kamur_finalshp_32 = format_Kamur_finalshp_32.readFeatures(json_Kamur_finalshp_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kamur_finalshp_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kamur_finalshp_32.addFeatures(features_Kamur_finalshp_32);
var lyr_Kamur_finalshp_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kamur_finalshp_32, 
                style: style_Kamur_finalshp_32,
                popuplayertitle: 'Kamur_final.shp',
                interactive: true,
    title: 'Kamur_final.shp<br />\
    <img src="styles/legend/Kamur_finalshp_32_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Kamur_finalshp_32_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Kamur_finalshp_32_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Kamur_finalshp_32_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Kamur_finalshp_32_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Karubaga_finalshp_33 = new ol.format.GeoJSON();
var features_Karubaga_finalshp_33 = format_Karubaga_finalshp_33.readFeatures(json_Karubaga_finalshp_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Karubaga_finalshp_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Karubaga_finalshp_33.addFeatures(features_Karubaga_finalshp_33);
var lyr_Karubaga_finalshp_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Karubaga_finalshp_33, 
                style: style_Karubaga_finalshp_33,
                popuplayertitle: 'Karubaga_final.shp',
                interactive: true,
    title: 'Karubaga_final.shp<br />\
    <img src="styles/legend/Karubaga_finalshp_33_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Karubaga_finalshp_33_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Karubaga_finalshp_33_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Karubaga_finalshp_33_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Karubaga_finalshp_33_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Kebo_finalshp_34 = new ol.format.GeoJSON();
var features_Kebo_finalshp_34 = format_Kebo_finalshp_34.readFeatures(json_Kebo_finalshp_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kebo_finalshp_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kebo_finalshp_34.addFeatures(features_Kebo_finalshp_34);
var lyr_Kebo_finalshp_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kebo_finalshp_34, 
                style: style_Kebo_finalshp_34,
                popuplayertitle: 'Kebo_final.shp',
                interactive: true,
    title: 'Kebo_final.shp<br />\
    <img src="styles/legend/Kebo_finalshp_34_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Kebo_finalshp_34_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Kebo_finalshp_34_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Kebo_finalshp_34_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Kebo_finalshp_34_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Kelila_finalshp_35 = new ol.format.GeoJSON();
var features_Kelila_finalshp_35 = format_Kelila_finalshp_35.readFeatures(json_Kelila_finalshp_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kelila_finalshp_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kelila_finalshp_35.addFeatures(features_Kelila_finalshp_35);
var lyr_Kelila_finalshp_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kelila_finalshp_35, 
                style: style_Kelila_finalshp_35,
                popuplayertitle: 'Kelila_final.shp',
                interactive: true,
    title: 'Kelila_final.shp<br />\
    <img src="styles/legend/Kelila_finalshp_35_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Kelila_finalshp_35_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Kelila_finalshp_35_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Kelila_finalshp_35_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Kelila_finalshp_35_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Kenyam_finalshp_36 = new ol.format.GeoJSON();
var features_Kenyam_finalshp_36 = format_Kenyam_finalshp_36.readFeatures(json_Kenyam_finalshp_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kenyam_finalshp_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kenyam_finalshp_36.addFeatures(features_Kenyam_finalshp_36);
var lyr_Kenyam_finalshp_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kenyam_finalshp_36, 
                style: style_Kenyam_finalshp_36,
                popuplayertitle: 'Kenyam_final.shp',
                interactive: true,
    title: 'Kenyam_final.shp<br />\
    <img src="styles/legend/Kenyam_finalshp_36_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Kenyam_finalshp_36_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Kenyam_finalshp_36_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Kenyam_finalshp_36_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Kenyam_finalshp_36_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Kepi_finalshp_37 = new ol.format.GeoJSON();
var features_Kepi_finalshp_37 = format_Kepi_finalshp_37.readFeatures(json_Kepi_finalshp_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kepi_finalshp_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kepi_finalshp_37.addFeatures(features_Kepi_finalshp_37);
var lyr_Kepi_finalshp_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kepi_finalshp_37, 
                style: style_Kepi_finalshp_37,
                popuplayertitle: 'Kepi_final.shp',
                interactive: true,
    title: 'Kepi_final.shp<br />\
    <img src="styles/legend/Kepi_finalshp_37_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Kepi_finalshp_37_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Kepi_finalshp_37_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Kepi_finalshp_37_3.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/Kepi_finalshp_37_4.png" /> KAWASAN KEMUNGKINAN BAHAYA KECELAKAAN<br />\
    <img src="styles/legend/Kepi_finalshp_37_5.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Kepi_finalshp_37_6.png" /> PERMUKAAN UTAMA<br />' });
var format_Kimaam_finalshp_38 = new ol.format.GeoJSON();
var features_Kimaam_finalshp_38 = format_Kimaam_finalshp_38.readFeatures(json_Kimaam_finalshp_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kimaam_finalshp_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kimaam_finalshp_38.addFeatures(features_Kimaam_finalshp_38);
var lyr_Kimaam_finalshp_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kimaam_finalshp_38, 
                style: style_Kimaam_finalshp_38,
                popuplayertitle: 'Kimaam_final.shp',
                interactive: true,
    title: 'Kimaam_final.shp<br />\
    <img src="styles/legend/Kimaam_finalshp_38_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Kimaam_finalshp_38_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Kimaam_finalshp_38_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Kimaam_finalshp_38_3.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/Kimaam_finalshp_38_4.png" /> KAWASAN KEMUNGKINAN BAHAYA KECELAKAAN<br />\
    <img src="styles/legend/Kimaam_finalshp_38_5.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Kimaam_finalshp_38_6.png" /> PERMUKAAN UTAMA<br />' });
var format_Kiwirok_finalshp_39 = new ol.format.GeoJSON();
var features_Kiwirok_finalshp_39 = format_Kiwirok_finalshp_39.readFeatures(json_Kiwirok_finalshp_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kiwirok_finalshp_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kiwirok_finalshp_39.addFeatures(features_Kiwirok_finalshp_39);
var lyr_Kiwirok_finalshp_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kiwirok_finalshp_39, 
                style: style_Kiwirok_finalshp_39,
                popuplayertitle: 'Kiwirok_final.shp',
                interactive: true,
    title: 'Kiwirok_final.shp<br />\
    <img src="styles/legend/Kiwirok_finalshp_39_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Kiwirok_finalshp_39_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Kiwirok_finalshp_39_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Kiwirok_finalshp_39_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Kiwirok_finalshp_39_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Kobakma_finalshp_40 = new ol.format.GeoJSON();
var features_Kobakma_finalshp_40 = format_Kobakma_finalshp_40.readFeatures(json_Kobakma_finalshp_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kobakma_finalshp_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kobakma_finalshp_40.addFeatures(features_Kobakma_finalshp_40);
var lyr_Kobakma_finalshp_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kobakma_finalshp_40, 
                style: style_Kobakma_finalshp_40,
                popuplayertitle: 'Kobakma_final.shp',
                interactive: true,
    title: 'Kobakma_final.shp<br />\
    <img src="styles/legend/Kobakma_finalshp_40_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Kobakma_finalshp_40_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Kobakma_finalshp_40_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Kobakma_finalshp_40_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Kobakma_finalshp_40_4.png" /> PERMUKAAN UTAMA<br />' });
var format_KorowaiBatu_finalshp_41 = new ol.format.GeoJSON();
var features_KorowaiBatu_finalshp_41 = format_KorowaiBatu_finalshp_41.readFeatures(json_KorowaiBatu_finalshp_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KorowaiBatu_finalshp_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KorowaiBatu_finalshp_41.addFeatures(features_KorowaiBatu_finalshp_41);
var lyr_KorowaiBatu_finalshp_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KorowaiBatu_finalshp_41, 
                style: style_KorowaiBatu_finalshp_41,
                popuplayertitle: 'Korowai Batu_final.shp',
                interactive: true,
    title: 'Korowai Batu_final.shp<br />\
    <img src="styles/legend/KorowaiBatu_finalshp_41_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/KorowaiBatu_finalshp_41_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/KorowaiBatu_finalshp_41_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/KorowaiBatu_finalshp_41_3.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/KorowaiBatu_finalshp_41_4.png" /> KAWASAN KEMUNGKINAN BAHAYA KECELAKAAN<br />\
    <img src="styles/legend/KorowaiBatu_finalshp_41_5.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/KorowaiBatu_finalshp_41_6.png" /> PERMUKAAN UTAMA<br />' });
var format_Manggelum_finalshp_42 = new ol.format.GeoJSON();
var features_Manggelum_finalshp_42 = format_Manggelum_finalshp_42.readFeatures(json_Manggelum_finalshp_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manggelum_finalshp_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manggelum_finalshp_42.addFeatures(features_Manggelum_finalshp_42);
var lyr_Manggelum_finalshp_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Manggelum_finalshp_42, 
                style: style_Manggelum_finalshp_42,
                popuplayertitle: 'Manggelum_final.shp',
                interactive: true,
    title: 'Manggelum_final.shp<br />\
    <img src="styles/legend/Manggelum_finalshp_42_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Manggelum_finalshp_42_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Manggelum_finalshp_42_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Manggelum_finalshp_42_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Manggelum_finalshp_42_4.png" /> PERMUKAAN UTAMA<br />' });
var format_mapanduma_finalshp_43 = new ol.format.GeoJSON();
var features_mapanduma_finalshp_43 = format_mapanduma_finalshp_43.readFeatures(json_mapanduma_finalshp_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mapanduma_finalshp_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mapanduma_finalshp_43.addFeatures(features_mapanduma_finalshp_43);
var lyr_mapanduma_finalshp_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mapanduma_finalshp_43, 
                style: style_mapanduma_finalshp_43,
                popuplayertitle: 'mapanduma_final.shp',
                interactive: true,
    title: 'mapanduma_final.shp<br />\
    <img src="styles/legend/mapanduma_finalshp_43_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/mapanduma_finalshp_43_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/mapanduma_finalshp_43_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/mapanduma_finalshp_43_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/mapanduma_finalshp_43_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Mararena_finalshp_44 = new ol.format.GeoJSON();
var features_Mararena_finalshp_44 = format_Mararena_finalshp_44.readFeatures(json_Mararena_finalshp_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mararena_finalshp_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mararena_finalshp_44.addFeatures(features_Mararena_finalshp_44);
var lyr_Mararena_finalshp_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mararena_finalshp_44, 
                style: style_Mararena_finalshp_44,
                popuplayertitle: 'Mararena_final.shp',
                interactive: true,
    title: 'Mararena_final.shp<br />\
    <img src="styles/legend/Mararena_finalshp_44_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Mararena_finalshp_44_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Mararena_finalshp_44_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Mararena_finalshp_44_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Mararena_finalshp_44_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Marinda_finalshp_45 = new ol.format.GeoJSON();
var features_Marinda_finalshp_45 = format_Marinda_finalshp_45.readFeatures(json_Marinda_finalshp_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Marinda_finalshp_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Marinda_finalshp_45.addFeatures(features_Marinda_finalshp_45);
var lyr_Marinda_finalshp_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Marinda_finalshp_45, 
                style: style_Marinda_finalshp_45,
                popuplayertitle: 'Marinda_final.shp',
                interactive: true,
    title: 'Marinda_final.shp<br />\
    <img src="styles/legend/Marinda_finalshp_45_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Marinda_finalshp_45_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Marinda_finalshp_45_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Marinda_finalshp_45_3.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/Marinda_finalshp_45_4.png" /> KAWASAN KEMUNGKINAN BAHAYA KECELAKAAN<br />\
    <img src="styles/legend/Marinda_finalshp_45_5.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Marinda_finalshp_45_6.png" /> PERMUKAAN UTAMA<br />' });
var format_Merdey_finalshp_46 = new ol.format.GeoJSON();
var features_Merdey_finalshp_46 = format_Merdey_finalshp_46.readFeatures(json_Merdey_finalshp_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Merdey_finalshp_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Merdey_finalshp_46.addFeatures(features_Merdey_finalshp_46);
var lyr_Merdey_finalshp_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Merdey_finalshp_46, 
                style: style_Merdey_finalshp_46,
                popuplayertitle: 'Merdey_final.shp',
                interactive: true,
    title: 'Merdey_final.shp<br />\
    <img src="styles/legend/Merdey_finalshp_46_0.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Merdey_finalshp_46_1.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Merdey_finalshp_46_2.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Merdey_finalshp_46_3.png" /> PERMUKAAN UTAMA<br />' });
var format_Mindiptana_finalshp_47 = new ol.format.GeoJSON();
var features_Mindiptana_finalshp_47 = format_Mindiptana_finalshp_47.readFeatures(json_Mindiptana_finalshp_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mindiptana_finalshp_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mindiptana_finalshp_47.addFeatures(features_Mindiptana_finalshp_47);
var lyr_Mindiptana_finalshp_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mindiptana_finalshp_47, 
                style: style_Mindiptana_finalshp_47,
                popuplayertitle: 'Mindiptana_final.shp',
                interactive: true,
    title: 'Mindiptana_final.shp<br />\
    <img src="styles/legend/Mindiptana_finalshp_47_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Mindiptana_finalshp_47_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Mindiptana_finalshp_47_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Mindiptana_finalshp_47_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Mindiptana_finalshp_47_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Moanemani_finalshp_48 = new ol.format.GeoJSON();
var features_Moanemani_finalshp_48 = format_Moanemani_finalshp_48.readFeatures(json_Moanemani_finalshp_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Moanemani_finalshp_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Moanemani_finalshp_48.addFeatures(features_Moanemani_finalshp_48);
var lyr_Moanemani_finalshp_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Moanemani_finalshp_48, 
                style: style_Moanemani_finalshp_48,
                popuplayertitle: 'Moanemani_final.shp',
                interactive: true,
    title: 'Moanemani_final.shp<br />\
    <img src="styles/legend/Moanemani_finalshp_48_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Moanemani_finalshp_48_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Moanemani_finalshp_48_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Moanemani_finalshp_48_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Moanemani_finalshp_48_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Molof_finalshp_49 = new ol.format.GeoJSON();
var features_Molof_finalshp_49 = format_Molof_finalshp_49.readFeatures(json_Molof_finalshp_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Molof_finalshp_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Molof_finalshp_49.addFeatures(features_Molof_finalshp_49);
var lyr_Molof_finalshp_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Molof_finalshp_49, 
                style: style_Molof_finalshp_49,
                popuplayertitle: 'Molof_final.shp',
                interactive: true,
    title: 'Molof_final.shp<br />\
    <img src="styles/legend/Molof_finalshp_49_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Molof_finalshp_49_1.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Molof_finalshp_49_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/Molof_finalshp_49_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Molof_finalshp_49_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Mopah_finalshp_50 = new ol.format.GeoJSON();
var features_Mopah_finalshp_50 = format_Mopah_finalshp_50.readFeatures(json_Mopah_finalshp_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mopah_finalshp_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mopah_finalshp_50.addFeatures(features_Mopah_finalshp_50);
var lyr_Mopah_finalshp_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mopah_finalshp_50, 
                style: style_Mopah_finalshp_50,
                popuplayertitle: 'Mopah_final.shp',
                interactive: true,
    title: 'Mopah_final.shp<br />\
    <img src="styles/legend/Mopah_finalshp_50_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Mopah_finalshp_50_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Mopah_finalshp_50_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Mopah_finalshp_50_3.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/Mopah_finalshp_50_4.png" /> KAWASAN KEMUNGKINAN BAHAYA KECELAKAAN<br />\
    <img src="styles/legend/Mopah_finalshp_50_5.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Mopah_finalshp_50_6.png" /> PERMUKAAN UTAMA<br />' });
var format_Mugi_finalshp_51 = new ol.format.GeoJSON();
var features_Mugi_finalshp_51 = format_Mugi_finalshp_51.readFeatures(json_Mugi_finalshp_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mugi_finalshp_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mugi_finalshp_51.addFeatures(features_Mugi_finalshp_51);
var lyr_Mugi_finalshp_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mugi_finalshp_51, 
                style: style_Mugi_finalshp_51,
                popuplayertitle: 'Mugi_final.shp',
                interactive: true,
    title: 'Mugi_final.shp<br />\
    <img src="styles/legend/Mugi_finalshp_51_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Mugi_finalshp_51_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Mugi_finalshp_51_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Mugi_finalshp_51_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Mugi_finalshp_51_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Mulia_finalshp_52 = new ol.format.GeoJSON();
var features_Mulia_finalshp_52 = format_Mulia_finalshp_52.readFeatures(json_Mulia_finalshp_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mulia_finalshp_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mulia_finalshp_52.addFeatures(features_Mulia_finalshp_52);
var lyr_Mulia_finalshp_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mulia_finalshp_52, 
                style: style_Mulia_finalshp_52,
                popuplayertitle: 'Mulia_final.shp',
                interactive: true,
    title: 'Mulia_final.shp<br />\
    <img src="styles/legend/Mulia_finalshp_52_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Mulia_finalshp_52_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Mulia_finalshp_52_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Mulia_finalshp_52_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Mulia_finalshp_52_4.png" /> PERMUKAAN UTAMA<br />' });
var format_NopGoliatDekai_finalshp_53 = new ol.format.GeoJSON();
var features_NopGoliatDekai_finalshp_53 = format_NopGoliatDekai_finalshp_53.readFeatures(json_NopGoliatDekai_finalshp_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NopGoliatDekai_finalshp_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NopGoliatDekai_finalshp_53.addFeatures(features_NopGoliatDekai_finalshp_53);
var lyr_NopGoliatDekai_finalshp_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NopGoliatDekai_finalshp_53, 
                style: style_NopGoliatDekai_finalshp_53,
                popuplayertitle: 'Nop Goliat Dekai_final.shp',
                interactive: true,
    title: 'Nop Goliat Dekai_final.shp<br />\
    <img src="styles/legend/NopGoliatDekai_finalshp_53_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/NopGoliatDekai_finalshp_53_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/NopGoliatDekai_finalshp_53_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/NopGoliatDekai_finalshp_53_3.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/NopGoliatDekai_finalshp_53_4.png" /> KAWASAN KEMUNGKINAN BAHAYA KECELAKAAN<br />\
    <img src="styles/legend/NopGoliatDekai_finalshp_53_5.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/NopGoliatDekai_finalshp_53_6.png" /> PERMUKAAN UTAMA<br />' });
var format_Numfor_finalshp_54 = new ol.format.GeoJSON();
var features_Numfor_finalshp_54 = format_Numfor_finalshp_54.readFeatures(json_Numfor_finalshp_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Numfor_finalshp_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Numfor_finalshp_54.addFeatures(features_Numfor_finalshp_54);
var lyr_Numfor_finalshp_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Numfor_finalshp_54, 
                style: style_Numfor_finalshp_54,
                popuplayertitle: 'Numfor_final.shp',
                interactive: true,
    title: 'Numfor_final.shp<br />\
    <img src="styles/legend/Numfor_finalshp_54_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Numfor_finalshp_54_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Numfor_finalshp_54_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Numfor_finalshp_54_3.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/Numfor_finalshp_54_4.png" /> KAWASAN KEMUNGKINAN BAHAYA KECELAKAAN<br />\
    <img src="styles/legend/Numfor_finalshp_54_5.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Numfor_finalshp_54_6.png" /> PERMUKAAN UTAMA<br />' });
var format_Okaba_finalshp_55 = new ol.format.GeoJSON();
var features_Okaba_finalshp_55 = format_Okaba_finalshp_55.readFeatures(json_Okaba_finalshp_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Okaba_finalshp_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Okaba_finalshp_55.addFeatures(features_Okaba_finalshp_55);
var lyr_Okaba_finalshp_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Okaba_finalshp_55, 
                style: style_Okaba_finalshp_55,
                popuplayertitle: 'Okaba_final.shp',
                interactive: true,
    title: 'Okaba_final.shp<br />\
    <img src="styles/legend/Okaba_finalshp_55_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Okaba_finalshp_55_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Okaba_finalshp_55_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Okaba_finalshp_55_3.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/Okaba_finalshp_55_4.png" /> KAWASAN KEMUNGKINAN BAHAYA KECELAKAAN<br />\
    <img src="styles/legend/Okaba_finalshp_55_5.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Okaba_finalshp_55_6.png" /> PERMUKAAN UTAMA<br />' });
var format_Oksibil_finalshp_56 = new ol.format.GeoJSON();
var features_Oksibil_finalshp_56 = format_Oksibil_finalshp_56.readFeatures(json_Oksibil_finalshp_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Oksibil_finalshp_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Oksibil_finalshp_56.addFeatures(features_Oksibil_finalshp_56);
var lyr_Oksibil_finalshp_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Oksibil_finalshp_56, 
                style: style_Oksibil_finalshp_56,
                popuplayertitle: 'Oksibil_final.shp',
                interactive: true,
    title: 'Oksibil_final.shp<br />\
    <img src="styles/legend/Oksibil_finalshp_56_0.png" /> PERMUKAAN UTAMA<br />\
    <img src="styles/legend/Oksibil_finalshp_56_1.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Oksibil_finalshp_56_2.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Oksibil_finalshp_56_3.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />' });
var format_Paro_finalshp_57 = new ol.format.GeoJSON();
var features_Paro_finalshp_57 = format_Paro_finalshp_57.readFeatures(json_Paro_finalshp_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paro_finalshp_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paro_finalshp_57.addFeatures(features_Paro_finalshp_57);
var lyr_Paro_finalshp_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paro_finalshp_57, 
                style: style_Paro_finalshp_57,
                popuplayertitle: 'Paro_final.shp',
                interactive: true,
    title: 'Paro_final.shp<br />\
    <img src="styles/legend/Paro_finalshp_57_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Paro_finalshp_57_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Paro_finalshp_57_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Paro_finalshp_57_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Paro_finalshp_57_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Potowaiburu_finalshp_58 = new ol.format.GeoJSON();
var features_Potowaiburu_finalshp_58 = format_Potowaiburu_finalshp_58.readFeatures(json_Potowaiburu_finalshp_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Potowaiburu_finalshp_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Potowaiburu_finalshp_58.addFeatures(features_Potowaiburu_finalshp_58);
var lyr_Potowaiburu_finalshp_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Potowaiburu_finalshp_58, 
                style: style_Potowaiburu_finalshp_58,
                popuplayertitle: 'Potowaiburu_final.shp',
                interactive: true,
    title: 'Potowaiburu_final.shp<br />\
    <img src="styles/legend/Potowaiburu_finalshp_58_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Potowaiburu_finalshp_58_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Potowaiburu_finalshp_58_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Potowaiburu_finalshp_58_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Potowaiburu_finalshp_58_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Senggeh_finalshp_59 = new ol.format.GeoJSON();
var features_Senggeh_finalshp_59 = format_Senggeh_finalshp_59.readFeatures(json_Senggeh_finalshp_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Senggeh_finalshp_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Senggeh_finalshp_59.addFeatures(features_Senggeh_finalshp_59);
var lyr_Senggeh_finalshp_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Senggeh_finalshp_59, 
                style: style_Senggeh_finalshp_59,
                popuplayertitle: 'Senggeh_final.shp',
                interactive: true,
    title: 'Senggeh_final.shp<br />\
    <img src="styles/legend/Senggeh_finalshp_59_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Senggeh_finalshp_59_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Senggeh_finalshp_59_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Senggeh_finalshp_59_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Senggeh_finalshp_59_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Senggo_finalshp_60 = new ol.format.GeoJSON();
var features_Senggo_finalshp_60 = format_Senggo_finalshp_60.readFeatures(json_Senggo_finalshp_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Senggo_finalshp_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Senggo_finalshp_60.addFeatures(features_Senggo_finalshp_60);
var lyr_Senggo_finalshp_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Senggo_finalshp_60, 
                style: style_Senggo_finalshp_60,
                popuplayertitle: 'Senggo_final.shp',
                interactive: true,
    title: 'Senggo_final.shp<br />\
    <img src="styles/legend/Senggo_finalshp_60_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Senggo_finalshp_60_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Senggo_finalshp_60_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Senggo_finalshp_60_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Senggo_finalshp_60_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Siboru_finalshp_61 = new ol.format.GeoJSON();
var features_Siboru_finalshp_61 = format_Siboru_finalshp_61.readFeatures(json_Siboru_finalshp_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Siboru_finalshp_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Siboru_finalshp_61.addFeatures(features_Siboru_finalshp_61);
var lyr_Siboru_finalshp_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Siboru_finalshp_61, 
                style: style_Siboru_finalshp_61,
                popuplayertitle: 'Siboru_final.shp',
                interactive: true,
    title: 'Siboru_final.shp<br />\
    <img src="styles/legend/Siboru_finalshp_61_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Siboru_finalshp_61_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Siboru_finalshp_61_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Siboru_finalshp_61_3.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/Siboru_finalshp_61_4.png" /> KAWASAN KEMUNGKINAN BAHAYA KECELAKAAN<br />\
    <img src="styles/legend/Siboru_finalshp_61_5.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Siboru_finalshp_61_6.png" /> PERMUKAAN UTAMA<br />' });
var format_Sinak_finalshp_62 = new ol.format.GeoJSON();
var features_Sinak_finalshp_62 = format_Sinak_finalshp_62.readFeatures(json_Sinak_finalshp_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sinak_finalshp_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sinak_finalshp_62.addFeatures(features_Sinak_finalshp_62);
var lyr_Sinak_finalshp_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sinak_finalshp_62, 
                style: style_Sinak_finalshp_62,
                popuplayertitle: 'Sinak_final.shp',
                interactive: true,
    title: 'Sinak_final.shp<br />\
    <img src="styles/legend/Sinak_finalshp_62_0.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Sinak_finalshp_62_1.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Sinak_finalshp_62_2.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Sinak_finalshp_62_3.png" /> PERMUKAAN UTAMA<br />' });
var format_StevanusRumbewas_finalshp_63 = new ol.format.GeoJSON();
var features_StevanusRumbewas_finalshp_63 = format_StevanusRumbewas_finalshp_63.readFeatures(json_StevanusRumbewas_finalshp_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StevanusRumbewas_finalshp_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StevanusRumbewas_finalshp_63.addFeatures(features_StevanusRumbewas_finalshp_63);
var lyr_StevanusRumbewas_finalshp_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StevanusRumbewas_finalshp_63, 
                style: style_StevanusRumbewas_finalshp_63,
                popuplayertitle: 'Stevanus Rumbewas_final.shp',
                interactive: true,
    title: 'Stevanus Rumbewas_final.shp<br />\
    <img src="styles/legend/StevanusRumbewas_finalshp_63_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/StevanusRumbewas_finalshp_63_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/StevanusRumbewas_finalshp_63_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/StevanusRumbewas_finalshp_63_3.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/StevanusRumbewas_finalshp_63_4.png" /> KAWASAN KEMUNGKINAN BAHAYA KECELAKAAN<br />\
    <img src="styles/legend/StevanusRumbewas_finalshp_63_5.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/StevanusRumbewas_finalshp_63_6.png" /> PERMUKAAN UTAMA<br />' });
var format_TanahMerah_finalshp_64 = new ol.format.GeoJSON();
var features_TanahMerah_finalshp_64 = format_TanahMerah_finalshp_64.readFeatures(json_TanahMerah_finalshp_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TanahMerah_finalshp_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TanahMerah_finalshp_64.addFeatures(features_TanahMerah_finalshp_64);
var lyr_TanahMerah_finalshp_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TanahMerah_finalshp_64, 
                style: style_TanahMerah_finalshp_64,
                popuplayertitle: 'Tanah Merah_final.shp',
                interactive: true,
    title: 'Tanah Merah_final.shp<br />\
    <img src="styles/legend/TanahMerah_finalshp_64_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/TanahMerah_finalshp_64_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/TanahMerah_finalshp_64_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/TanahMerah_finalshp_64_3.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/TanahMerah_finalshp_64_4.png" /> KAWASAN KEMUNGKINAN BAHAYA KECELAKAAN<br />\
    <img src="styles/legend/TanahMerah_finalshp_64_5.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/TanahMerah_finalshp_64_6.png" /> PERMUKAAN UTAMA<br />' });
var format_Teminabuan_finalshp_65 = new ol.format.GeoJSON();
var features_Teminabuan_finalshp_65 = format_Teminabuan_finalshp_65.readFeatures(json_Teminabuan_finalshp_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Teminabuan_finalshp_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Teminabuan_finalshp_65.addFeatures(features_Teminabuan_finalshp_65);
var lyr_Teminabuan_finalshp_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Teminabuan_finalshp_65, 
                style: style_Teminabuan_finalshp_65,
                popuplayertitle: 'Teminabuan_final.shp',
                interactive: true,
    title: 'Teminabuan_final.shp<br />\
    <img src="styles/legend/Teminabuan_finalshp_65_0.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Teminabuan_finalshp_65_1.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Teminabuan_finalshp_65_2.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Teminabuan_finalshp_65_3.png" /> PERMUKAAN UTAMA<br />' });
var format_Teraplu_finalshp_66 = new ol.format.GeoJSON();
var features_Teraplu_finalshp_66 = format_Teraplu_finalshp_66.readFeatures(json_Teraplu_finalshp_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Teraplu_finalshp_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Teraplu_finalshp_66.addFeatures(features_Teraplu_finalshp_66);
var lyr_Teraplu_finalshp_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Teraplu_finalshp_66, 
                style: style_Teraplu_finalshp_66,
                popuplayertitle: 'Teraplu_final.shp',
                interactive: true,
    title: 'Teraplu_final.shp<br />\
    <img src="styles/legend/Teraplu_finalshp_66_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Teraplu_finalshp_66_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Teraplu_finalshp_66_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Teraplu_finalshp_66_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Teraplu_finalshp_66_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Timika_finalshp_67 = new ol.format.GeoJSON();
var features_Timika_finalshp_67 = format_Timika_finalshp_67.readFeatures(json_Timika_finalshp_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Timika_finalshp_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Timika_finalshp_67.addFeatures(features_Timika_finalshp_67);
var lyr_Timika_finalshp_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Timika_finalshp_67, 
                style: style_Timika_finalshp_67,
                popuplayertitle: 'Timika_final.shp',
                interactive: true,
    title: 'Timika_final.shp<br />\
    <img src="styles/legend/Timika_finalshp_67_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Timika_finalshp_67_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Timika_finalshp_67_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Timika_finalshp_67_3.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/Timika_finalshp_67_4.png" /> KAWASAN KEMUNGKINAN BAHAYA KECELAKAAN<br />\
    <img src="styles/legend/Timika_finalshp_67_5.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Timika_finalshp_67_6.png" /> PERMUKAAN UTAMA<br />' });
var format_Tiom_finalshp_68 = new ol.format.GeoJSON();
var features_Tiom_finalshp_68 = format_Tiom_finalshp_68.readFeatures(json_Tiom_finalshp_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tiom_finalshp_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tiom_finalshp_68.addFeatures(features_Tiom_finalshp_68);
var lyr_Tiom_finalshp_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tiom_finalshp_68, 
                style: style_Tiom_finalshp_68,
                popuplayertitle: 'Tiom_final.shp',
                interactive: true,
    title: 'Tiom_final.shp<br />\
    <img src="styles/legend/Tiom_finalshp_68_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Tiom_finalshp_68_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Tiom_finalshp_68_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Tiom_finalshp_68_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Tiom_finalshp_68_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Torea_finalshp_69 = new ol.format.GeoJSON();
var features_Torea_finalshp_69 = format_Torea_finalshp_69.readFeatures(json_Torea_finalshp_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Torea_finalshp_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Torea_finalshp_69.addFeatures(features_Torea_finalshp_69);
var lyr_Torea_finalshp_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Torea_finalshp_69, 
                style: style_Torea_finalshp_69,
                popuplayertitle: 'Torea_final.shp',
                interactive: true,
    title: 'Torea_final.shp<br />\
    <img src="styles/legend/Torea_finalshp_69_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Torea_finalshp_69_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Torea_finalshp_69_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Torea_finalshp_69_3.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/Torea_finalshp_69_4.png" /> KAWASAN KEMUNGKINAN BAHAYA KECELAKAAN<br />\
    <img src="styles/legend/Torea_finalshp_69_5.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Torea_finalshp_69_6.png" /> PERMUKAAN UTAMA<br />' });
var format_Towehitam_finalshp_70 = new ol.format.GeoJSON();
var features_Towehitam_finalshp_70 = format_Towehitam_finalshp_70.readFeatures(json_Towehitam_finalshp_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Towehitam_finalshp_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Towehitam_finalshp_70.addFeatures(features_Towehitam_finalshp_70);
var lyr_Towehitam_finalshp_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Towehitam_finalshp_70, 
                style: style_Towehitam_finalshp_70,
                popuplayertitle: 'Towehitam_final.shp',
                interactive: true,
    title: 'Towehitam_final.shp<br />\
    <img src="styles/legend/Towehitam_finalshp_70_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Towehitam_finalshp_70_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Towehitam_finalshp_70_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Towehitam_finalshp_70_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Towehitam_finalshp_70_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Tsinga_finalshp_71 = new ol.format.GeoJSON();
var features_Tsinga_finalshp_71 = format_Tsinga_finalshp_71.readFeatures(json_Tsinga_finalshp_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tsinga_finalshp_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tsinga_finalshp_71.addFeatures(features_Tsinga_finalshp_71);
var lyr_Tsinga_finalshp_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tsinga_finalshp_71, 
                style: style_Tsinga_finalshp_71,
                popuplayertitle: 'Tsinga_final.shp',
                interactive: true,
    title: 'Tsinga_final.shp<br />\
    <img src="styles/legend/Tsinga_finalshp_71_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Tsinga_finalshp_71_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Tsinga_finalshp_71_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Tsinga_finalshp_71_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Tsinga_finalshp_71_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Utarom_finalshp_72 = new ol.format.GeoJSON();
var features_Utarom_finalshp_72 = format_Utarom_finalshp_72.readFeatures(json_Utarom_finalshp_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Utarom_finalshp_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Utarom_finalshp_72.addFeatures(features_Utarom_finalshp_72);
var lyr_Utarom_finalshp_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Utarom_finalshp_72, 
                style: style_Utarom_finalshp_72,
                popuplayertitle: 'Utarom_final.shp',
                interactive: true,
    title: 'Utarom_final.shp<br />\
    <img src="styles/legend/Utarom_finalshp_72_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Utarom_finalshp_72_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Utarom_finalshp_72_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Utarom_finalshp_72_3.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/Utarom_finalshp_72_4.png" /> KAWASAN KEMUNGKINAN BAHAYA KECELAKAAN<br />\
    <img src="styles/legend/Utarom_finalshp_72_5.png" /> PERMUKAAN UTAMA<br />' });
var format_Wamena_finalshp_73 = new ol.format.GeoJSON();
var features_Wamena_finalshp_73 = format_Wamena_finalshp_73.readFeatures(json_Wamena_finalshp_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wamena_finalshp_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wamena_finalshp_73.addFeatures(features_Wamena_finalshp_73);
var lyr_Wamena_finalshp_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wamena_finalshp_73, 
                style: style_Wamena_finalshp_73,
                popuplayertitle: 'Wamena_final.shp',
                interactive: true,
    title: 'Wamena_final.shp<br />\
    <img src="styles/legend/Wamena_finalshp_73_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Wamena_finalshp_73_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Wamena_finalshp_73_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Wamena_finalshp_73_3.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/Wamena_finalshp_73_4.png" /> KAWASAN KEMUNGKINAN BAHAYA KECELAKAAN<br />\
    <img src="styles/legend/Wamena_finalshp_73_5.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Wamena_finalshp_73_6.png" /> PERMUKAAN UTAMA<br />' });
var format_Wangbe_finalshp_74 = new ol.format.GeoJSON();
var features_Wangbe_finalshp_74 = format_Wangbe_finalshp_74.readFeatures(json_Wangbe_finalshp_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wangbe_finalshp_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wangbe_finalshp_74.addFeatures(features_Wangbe_finalshp_74);
var lyr_Wangbe_finalshp_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wangbe_finalshp_74, 
                style: style_Wangbe_finalshp_74,
                popuplayertitle: 'Wangbe_final.shp',
                interactive: true,
    title: 'Wangbe_final.shp<br />\
    <img src="styles/legend/Wangbe_finalshp_74_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Wangbe_finalshp_74_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Wangbe_finalshp_74_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Wangbe_finalshp_74_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Wangbe_finalshp_74_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Wanghete_finalshp_75 = new ol.format.GeoJSON();
var features_Wanghete_finalshp_75 = format_Wanghete_finalshp_75.readFeatures(json_Wanghete_finalshp_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wanghete_finalshp_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wanghete_finalshp_75.addFeatures(features_Wanghete_finalshp_75);
var lyr_Wanghete_finalshp_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wanghete_finalshp_75, 
                style: style_Wanghete_finalshp_75,
                popuplayertitle: 'Wanghete_final.shp',
                interactive: true,
    title: 'Wanghete_final.shp<br />\
    <img src="styles/legend/Wanghete_finalshp_75_0.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Wanghete_finalshp_75_1.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Wanghete_finalshp_75_2.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Wanghete_finalshp_75_3.png" /> PERMUKAAN UTAMA<br />' });
var format_Wasior_finalshp_76 = new ol.format.GeoJSON();
var features_Wasior_finalshp_76 = format_Wasior_finalshp_76.readFeatures(json_Wasior_finalshp_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wasior_finalshp_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wasior_finalshp_76.addFeatures(features_Wasior_finalshp_76);
var lyr_Wasior_finalshp_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wasior_finalshp_76, 
                style: style_Wasior_finalshp_76,
                popuplayertitle: 'Wasior_final.shp',
                interactive: true,
    title: 'Wasior_final.shp<br />\
    <img src="styles/legend/Wasior_finalshp_76_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Wasior_finalshp_76_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Wasior_finalshp_76_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Wasior_finalshp_76_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Wasior_finalshp_76_4.png" /> PERMUKAAN UTAMA<br />' });
var format_Yaniruma_finalshp_77 = new ol.format.GeoJSON();
var features_Yaniruma_finalshp_77 = format_Yaniruma_finalshp_77.readFeatures(json_Yaniruma_finalshp_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yaniruma_finalshp_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yaniruma_finalshp_77.addFeatures(features_Yaniruma_finalshp_77);
var lyr_Yaniruma_finalshp_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Yaniruma_finalshp_77, 
                style: style_Yaniruma_finalshp_77,
                popuplayertitle: 'Yaniruma_final.shp',
                interactive: true,
    title: 'Yaniruma_final.shp<br />\
    <img src="styles/legend/Yaniruma_finalshp_77_0.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Yaniruma_finalshp_77_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Yaniruma_finalshp_77_2.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Yaniruma_finalshp_77_3.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Yaniruma_finalshp_77_4.png" /> PERMUKAAN UTAMA<br />' });
var format_AABereTallo_finalshp_78 = new ol.format.GeoJSON();
var features_AABereTallo_finalshp_78 = format_AABereTallo_finalshp_78.readFeatures(json_AABereTallo_finalshp_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AABereTallo_finalshp_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AABereTallo_finalshp_78.addFeatures(features_AABereTallo_finalshp_78);
var lyr_AABereTallo_finalshp_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AABereTallo_finalshp_78, 
                style: style_AABereTallo_finalshp_78,
                popuplayertitle: 'A.A. Bere Tallo_final.shp',
                interactive: true,
    title: 'A.A. Bere Tallo_final.shp<br />\
    <img src="styles/legend/AABereTallo_finalshp_78_0.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/AABereTallo_finalshp_78_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/AABereTallo_finalshp_78_2.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/AABereTallo_finalshp_78_3.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/AABereTallo_finalshp_78_4.png" /> PERMUKAAN UTAMA<br />\
    <img src="styles/legend/AABereTallo_finalshp_78_5.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/AABereTallo_finalshp_78_6.png" /> KAWASAN KEMUNGKINAN BAHAYA KECELAKAAN<br />' });
var format_DCSaudale_finalshp_79 = new ol.format.GeoJSON();
var features_DCSaudale_finalshp_79 = format_DCSaudale_finalshp_79.readFeatures(json_DCSaudale_finalshp_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DCSaudale_finalshp_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DCSaudale_finalshp_79.addFeatures(features_DCSaudale_finalshp_79);
var lyr_DCSaudale_finalshp_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DCSaudale_finalshp_79, 
                style: style_DCSaudale_finalshp_79,
                popuplayertitle: 'D. C. Saudale_final.shp',
                interactive: true,
    title: 'D. C. Saudale_final.shp<br />\
    <img src="styles/legend/DCSaudale_finalshp_79_0.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/DCSaudale_finalshp_79_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/DCSaudale_finalshp_79_2.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/DCSaudale_finalshp_79_3.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/DCSaudale_finalshp_79_4.png" /> PERMUKAAN UTAMA<br />\
    <img src="styles/legend/DCSaudale_finalshp_79_5.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/DCSaudale_finalshp_79_6.png" /> KAWASAN KEMUNGKINAN BAHAYA KECELAKAAN<br />' });
var format_DCSaudale_finalshp_80 = new ol.format.GeoJSON();
var features_DCSaudale_finalshp_80 = format_DCSaudale_finalshp_80.readFeatures(json_DCSaudale_finalshp_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DCSaudale_finalshp_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DCSaudale_finalshp_80.addFeatures(features_DCSaudale_finalshp_80);
var lyr_DCSaudale_finalshp_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DCSaudale_finalshp_80, 
                style: style_DCSaudale_finalshp_80,
                popuplayertitle: 'D.C. Saudale_final.shp',
                interactive: true,
    title: 'D.C. Saudale_final.shp<br />\
    <img src="styles/legend/DCSaudale_finalshp_80_0.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/DCSaudale_finalshp_80_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/DCSaudale_finalshp_80_2.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/DCSaudale_finalshp_80_3.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/DCSaudale_finalshp_80_4.png" /> PERMUKAAN UTAMA<br />\
    <img src="styles/legend/DCSaudale_finalshp_80_5.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/DCSaudale_finalshp_80_6.png" /> KAWASAN KEMUNGKINAN BAHAYA KECELAKAAN<br />' });
var format_Eltari_finalshp_81 = new ol.format.GeoJSON();
var features_Eltari_finalshp_81 = format_Eltari_finalshp_81.readFeatures(json_Eltari_finalshp_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Eltari_finalshp_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Eltari_finalshp_81.addFeatures(features_Eltari_finalshp_81);
var lyr_Eltari_finalshp_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Eltari_finalshp_81, 
                style: style_Eltari_finalshp_81,
                popuplayertitle: 'El tari_final.shp',
                interactive: true,
    title: 'El tari_final.shp<br />\
    <img src="styles/legend/Eltari_finalshp_81_0.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Eltari_finalshp_81_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Eltari_finalshp_81_2.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Eltari_finalshp_81_3.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/Eltari_finalshp_81_4.png" /> PERMUKAAN UTAMA<br />\
    <img src="styles/legend/Eltari_finalshp_81_5.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Eltari_finalshp_81_6.png" /> KAWASAN KEMUNGKINAN BAHAYA KECELAKAAN<br />' });
var format_FransSalesLega_finalshp_82 = new ol.format.GeoJSON();
var features_FransSalesLega_finalshp_82 = format_FransSalesLega_finalshp_82.readFeatures(json_FransSalesLega_finalshp_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FransSalesLega_finalshp_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FransSalesLega_finalshp_82.addFeatures(features_FransSalesLega_finalshp_82);
var lyr_FransSalesLega_finalshp_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FransSalesLega_finalshp_82, 
                style: style_FransSalesLega_finalshp_82,
                popuplayertitle: 'Frans Sales Lega_final.shp',
                interactive: true,
    title: 'Frans Sales Lega_final.shp<br />\
    <img src="styles/legend/FransSalesLega_finalshp_82_0.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/FransSalesLega_finalshp_82_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/FransSalesLega_finalshp_82_2.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/FransSalesLega_finalshp_82_3.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/FransSalesLega_finalshp_82_4.png" /> PERMUKAAN UTAMA<br />\
    <img src="styles/legend/FransSalesLega_finalshp_82_5.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/FransSalesLega_finalshp_82_6.png" /> KAWASAN KEMUNGKINAN BAHAYA KECELAKAAN<br />' });
var format_FransSeda_finalshp_83 = new ol.format.GeoJSON();
var features_FransSeda_finalshp_83 = format_FransSeda_finalshp_83.readFeatures(json_FransSeda_finalshp_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FransSeda_finalshp_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FransSeda_finalshp_83.addFeatures(features_FransSeda_finalshp_83);
var lyr_FransSeda_finalshp_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FransSeda_finalshp_83, 
                style: style_FransSeda_finalshp_83,
                popuplayertitle: 'Frans Seda_final.shp',
                interactive: true,
    title: 'Frans Seda_final.shp<br />\
    <img src="styles/legend/FransSeda_finalshp_83_0.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/FransSeda_finalshp_83_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/FransSeda_finalshp_83_2.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/FransSeda_finalshp_83_3.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/FransSeda_finalshp_83_4.png" /> PERMUKAAN UTAMA<br />\
    <img src="styles/legend/FransSeda_finalshp_83_5.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/FransSeda_finalshp_83_6.png" /> KAWASAN KEMUNGKINAN BAHAYA KECELAKAAN<br />' });
var format_Gewayantana_finalshp_84 = new ol.format.GeoJSON();
var features_Gewayantana_finalshp_84 = format_Gewayantana_finalshp_84.readFeatures(json_Gewayantana_finalshp_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gewayantana_finalshp_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gewayantana_finalshp_84.addFeatures(features_Gewayantana_finalshp_84);
var lyr_Gewayantana_finalshp_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gewayantana_finalshp_84, 
                style: style_Gewayantana_finalshp_84,
                popuplayertitle: 'Gewayantana_final.shp',
                interactive: true,
    title: 'Gewayantana_final.shp<br />\
    <img src="styles/legend/Gewayantana_finalshp_84_0.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Gewayantana_finalshp_84_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Gewayantana_finalshp_84_2.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Gewayantana_finalshp_84_3.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/Gewayantana_finalshp_84_4.png" /> PERMUKAAN UTAMA<br />\
    <img src="styles/legend/Gewayantana_finalshp_84_5.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Gewayantana_finalshp_84_6.png" /> KAWASAN KEMUNGKINAN BAHAYA KECELAKAAN<br />' });
var format_HHasanAroeboesman_finalshp_85 = new ol.format.GeoJSON();
var features_HHasanAroeboesman_finalshp_85 = format_HHasanAroeboesman_finalshp_85.readFeatures(json_HHasanAroeboesman_finalshp_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HHasanAroeboesman_finalshp_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HHasanAroeboesman_finalshp_85.addFeatures(features_HHasanAroeboesman_finalshp_85);
var lyr_HHasanAroeboesman_finalshp_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HHasanAroeboesman_finalshp_85, 
                style: style_HHasanAroeboesman_finalshp_85,
                popuplayertitle: 'H. Hasan Aroeboesman_final.shp',
                interactive: true,
    title: 'H. Hasan Aroeboesman_final.shp<br />\
    <img src="styles/legend/HHasanAroeboesman_finalshp_85_0.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/HHasanAroeboesman_finalshp_85_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/HHasanAroeboesman_finalshp_85_2.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/HHasanAroeboesman_finalshp_85_3.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/HHasanAroeboesman_finalshp_85_4.png" /> PERMUKAAN UTAMA<br />\
    <img src="styles/legend/HHasanAroeboesman_finalshp_85_5.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/HHasanAroeboesman_finalshp_85_6.png" /> KAWASAN KEMUNGKINAN BAHAYA KECELAKAAN<br />' });
var format_IgustiNgurahRai_finalshp_86 = new ol.format.GeoJSON();
var features_IgustiNgurahRai_finalshp_86 = format_IgustiNgurahRai_finalshp_86.readFeatures(json_IgustiNgurahRai_finalshp_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IgustiNgurahRai_finalshp_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IgustiNgurahRai_finalshp_86.addFeatures(features_IgustiNgurahRai_finalshp_86);
var lyr_IgustiNgurahRai_finalshp_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IgustiNgurahRai_finalshp_86, 
                style: style_IgustiNgurahRai_finalshp_86,
                popuplayertitle: 'Igusti Ngurah Rai_final.shp',
                interactive: true,
    title: 'Igusti Ngurah Rai_final.shp<br />\
    <img src="styles/legend/IgustiNgurahRai_finalshp_86_0.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/IgustiNgurahRai_finalshp_86_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/IgustiNgurahRai_finalshp_86_2.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/IgustiNgurahRai_finalshp_86_3.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/IgustiNgurahRai_finalshp_86_4.png" /> PERMUKAAN UTAMA<br />\
    <img src="styles/legend/IgustiNgurahRai_finalshp_86_5.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/IgustiNgurahRai_finalshp_86_6.png" /> KAWASAN KEMUNGKINAN BAHAYA KECELAKAAN<br />' });
var format_Kabir_finalshp_87 = new ol.format.GeoJSON();
var features_Kabir_finalshp_87 = format_Kabir_finalshp_87.readFeatures(json_Kabir_finalshp_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kabir_finalshp_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kabir_finalshp_87.addFeatures(features_Kabir_finalshp_87);
var lyr_Kabir_finalshp_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kabir_finalshp_87, 
                style: style_Kabir_finalshp_87,
                popuplayertitle: 'Kabir_final.shp',
                interactive: true,
    title: 'Kabir_final.shp<br />\
    <img src="styles/legend/Kabir_finalshp_87_0.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Kabir_finalshp_87_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Kabir_finalshp_87_2.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Kabir_finalshp_87_3.png" /> PERMUKAAN UTAMA<br />\
    <img src="styles/legend/Kabir_finalshp_87_4.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />' });
var format_LedeKalumbang_finalshp_88 = new ol.format.GeoJSON();
var features_LedeKalumbang_finalshp_88 = format_LedeKalumbang_finalshp_88.readFeatures(json_LedeKalumbang_finalshp_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LedeKalumbang_finalshp_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LedeKalumbang_finalshp_88.addFeatures(features_LedeKalumbang_finalshp_88);
var lyr_LedeKalumbang_finalshp_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LedeKalumbang_finalshp_88, 
                style: style_LedeKalumbang_finalshp_88,
                popuplayertitle: 'Lede Kalumbang_final.shp',
                interactive: true,
    title: 'Lede Kalumbang_final.shp<br />\
    <img src="styles/legend/LedeKalumbang_finalshp_88_0.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/LedeKalumbang_finalshp_88_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/LedeKalumbang_finalshp_88_2.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/LedeKalumbang_finalshp_88_3.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/LedeKalumbang_finalshp_88_4.png" /> PERMUKAAN UTAMA<br />\
    <img src="styles/legend/LedeKalumbang_finalshp_88_5.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/LedeKalumbang_finalshp_88_6.png" /> KAWASAN KEMUNGKINAN BAHAYA KECELAKAAN<br />' });
var format_MSalahuddin_finalshp_89 = new ol.format.GeoJSON();
var features_MSalahuddin_finalshp_89 = format_MSalahuddin_finalshp_89.readFeatures(json_MSalahuddin_finalshp_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSalahuddin_finalshp_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSalahuddin_finalshp_89.addFeatures(features_MSalahuddin_finalshp_89);
var lyr_MSalahuddin_finalshp_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSalahuddin_finalshp_89, 
                style: style_MSalahuddin_finalshp_89,
                popuplayertitle: 'M. Salahuddin_final.shp',
                interactive: true,
    title: 'M. Salahuddin_final.shp<br />\
    <img src="styles/legend/MSalahuddin_finalshp_89_0.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/MSalahuddin_finalshp_89_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/MSalahuddin_finalshp_89_2.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/MSalahuddin_finalshp_89_3.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/MSalahuddin_finalshp_89_4.png" /> PERMUKAAN UTAMA<br />\
    <img src="styles/legend/MSalahuddin_finalshp_89_5.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/MSalahuddin_finalshp_89_6.png" /> KAWASAN KEMUNGKINAN BAHAYA KECELAKAAN<br />' });
var format_Soa_finalshp_90 = new ol.format.GeoJSON();
var features_Soa_finalshp_90 = format_Soa_finalshp_90.readFeatures(json_Soa_finalshp_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Soa_finalshp_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Soa_finalshp_90.addFeatures(features_Soa_finalshp_90);
var lyr_Soa_finalshp_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Soa_finalshp_90, 
                style: style_Soa_finalshp_90,
                popuplayertitle: 'Soa_final.shp',
                interactive: true,
    title: 'Soa_final.shp<br />\
    <img src="styles/legend/Soa_finalshp_90_0.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Soa_finalshp_90_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Soa_finalshp_90_2.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Soa_finalshp_90_3.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/Soa_finalshp_90_4.png" /> PERMUKAAN UTAMA<br />\
    <img src="styles/legend/Soa_finalshp_90_5.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/Soa_finalshp_90_6.png" /> KAWASAN KEMUNGKINAN BAHAYA KECELAKAAN<br />' });
var format_SultanMuhammadKaharuddin_finalshp_91 = new ol.format.GeoJSON();
var features_SultanMuhammadKaharuddin_finalshp_91 = format_SultanMuhammadKaharuddin_finalshp_91.readFeatures(json_SultanMuhammadKaharuddin_finalshp_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SultanMuhammadKaharuddin_finalshp_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SultanMuhammadKaharuddin_finalshp_91.addFeatures(features_SultanMuhammadKaharuddin_finalshp_91);
var lyr_SultanMuhammadKaharuddin_finalshp_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SultanMuhammadKaharuddin_finalshp_91, 
                style: style_SultanMuhammadKaharuddin_finalshp_91,
                popuplayertitle: 'Sultan Muhammad Kaharuddin_final.shp',
                interactive: true,
    title: 'Sultan Muhammad Kaharuddin_final.shp<br />\
    <img src="styles/legend/SultanMuhammadKaharuddin_finalshp_91_0.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/SultanMuhammadKaharuddin_finalshp_91_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/SultanMuhammadKaharuddin_finalshp_91_2.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/SultanMuhammadKaharuddin_finalshp_91_3.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/SultanMuhammadKaharuddin_finalshp_91_4.png" /> PERMUKAAN UTAMA<br />\
    <img src="styles/legend/SultanMuhammadKaharuddin_finalshp_91_5.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/SultanMuhammadKaharuddin_finalshp_91_6.png" /> KAWASAN KEMUNGKINAN BAHAYA KECELAKAAN<br />' });
var format_Tardamu_finalshp_92 = new ol.format.GeoJSON();
var features_Tardamu_finalshp_92 = format_Tardamu_finalshp_92.readFeatures(json_Tardamu_finalshp_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tardamu_finalshp_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tardamu_finalshp_92.addFeatures(features_Tardamu_finalshp_92);
var lyr_Tardamu_finalshp_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tardamu_finalshp_92, 
                style: style_Tardamu_finalshp_92,
                popuplayertitle: 'Tardamu_final.shp',
                interactive: true,
    title: 'Tardamu_final.shp<br />\
    <img src="styles/legend/Tardamu_finalshp_92_0.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Tardamu_finalshp_92_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Tardamu_finalshp_92_2.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Tardamu_finalshp_92_3.png" /> PERMUKAAN UTAMA<br />\
    <img src="styles/legend/Tardamu_finalshp_92_4.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />' });
var format_UmbuMehangKunda_finalshp_93 = new ol.format.GeoJSON();
var features_UmbuMehangKunda_finalshp_93 = format_UmbuMehangKunda_finalshp_93.readFeatures(json_UmbuMehangKunda_finalshp_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UmbuMehangKunda_finalshp_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UmbuMehangKunda_finalshp_93.addFeatures(features_UmbuMehangKunda_finalshp_93);
var lyr_UmbuMehangKunda_finalshp_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UmbuMehangKunda_finalshp_93, 
                style: style_UmbuMehangKunda_finalshp_93,
                popuplayertitle: 'Umbu Mehang Kunda_final.shp',
                interactive: true,
    title: 'Umbu Mehang Kunda_final.shp<br />\
    <img src="styles/legend/UmbuMehangKunda_finalshp_93_0.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/UmbuMehangKunda_finalshp_93_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/UmbuMehangKunda_finalshp_93_2.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/UmbuMehangKunda_finalshp_93_3.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/UmbuMehangKunda_finalshp_93_4.png" /> PERMUKAAN UTAMA<br />\
    <img src="styles/legend/UmbuMehangKunda_finalshp_93_5.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/UmbuMehangKunda_finalshp_93_6.png" /> KAWASAN KEMUNGKINAN BAHAYA KECELAKAAN<br />' });
var format_Wunopitu_finalshp_94 = new ol.format.GeoJSON();
var features_Wunopitu_finalshp_94 = format_Wunopitu_finalshp_94.readFeatures(json_Wunopitu_finalshp_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wunopitu_finalshp_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wunopitu_finalshp_94.addFeatures(features_Wunopitu_finalshp_94);
var lyr_Wunopitu_finalshp_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wunopitu_finalshp_94, 
                style: style_Wunopitu_finalshp_94,
                popuplayertitle: 'Wunopitu_final.shp',
                interactive: true,
    title: 'Wunopitu_final.shp<br />\
    <img src="styles/legend/Wunopitu_finalshp_94_0.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/Wunopitu_finalshp_94_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/Wunopitu_finalshp_94_2.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/Wunopitu_finalshp_94_3.png" /> PERMUKAAN UTAMA<br />\
    <img src="styles/legend/Wunopitu_finalshp_94_4.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />' });
var format_ZainuddinAM_finalshp_95 = new ol.format.GeoJSON();
var features_ZainuddinAM_finalshp_95 = format_ZainuddinAM_finalshp_95.readFeatures(json_ZainuddinAM_finalshp_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZainuddinAM_finalshp_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZainuddinAM_finalshp_95.addFeatures(features_ZainuddinAM_finalshp_95);
var lyr_ZainuddinAM_finalshp_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZainuddinAM_finalshp_95, 
                style: style_ZainuddinAM_finalshp_95,
                popuplayertitle: 'Zainuddin AM_final.shp',
                interactive: true,
    title: 'Zainuddin AM_final.shp<br />\
    <img src="styles/legend/ZainuddinAM_finalshp_95_0.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL DALAM<br />\
    <img src="styles/legend/ZainuddinAM_finalshp_95_1.png" /> KAWASAN DI BAWAH PERMUKAAN KERUCUT<br />\
    <img src="styles/legend/ZainuddinAM_finalshp_95_2.png" /> KAWASAN ANCANGAN PENDARATAN DAN LEPAS LANDAS<br />\
    <img src="styles/legend/ZainuddinAM_finalshp_95_3.png" /> KAWASAN DI BAWAH PERMUKAAN HORIZONTAL LUAR<br />\
    <img src="styles/legend/ZainuddinAM_finalshp_95_4.png" /> PERMUKAAN UTAMA<br />\
    <img src="styles/legend/ZainuddinAM_finalshp_95_5.png" /> KAWASAN DI BAWAH PERMUKAAN TRANSISI<br />\
    <img src="styles/legend/ZainuddinAM_finalshp_95_6.png" /> KAWASAN KEMUNGKINAN BAHAYA KECELAKAAN<br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Aboy_finalshp_1.setVisible(true);lyr_Akimuga_finalshp_2.setVisible(true);lyr_alama_finalshp_3.setVisible(true);lyr_Anggi_finalshp_4.setVisible(true);lyr_Apalapsili_finalshp_5.setVisible(true);lyr_Ayawasi_finalshp_6.setVisible(true);lyr_Babo_finalshp_7.setVisible(true);lyr_Bade_finalshp_8.setVisible(true);lyr_Batom_finalshp_9.setVisible(true);lyr_Beoga_finalshp_10.setVisible(true);lyr_Bilai_finalshp_11.setVisible(true);lyr_Bilorai_finalshp_12.setVisible(true);lyr_Bintuni_finalshp_13.setVisible(true);lyr_Bokondini_finalshp_14.setVisible(true);lyr_Bomakia_finalshp_15.setVisible(true);lyr_Borme_finalshp_16.setVisible(true);lyr_Dabra_finalshp_17.setVisible(true);lyr_DomineEdwardOsok_finalshp_18.setVisible(true);lyr_DouwAturure_finalshp_19.setVisible(true);lyr_Elelim_finalshp_20.setVisible(true);lyr_Enarotali_finalshp_21.setVisible(true);lyr_Ewer_finalshp_22.setVisible(true);lyr_Fawi_finalshp_23.setVisible(true);lyr_FransKaisiepo_finalshp_24.setVisible(true);lyr_Ilaga_finalshp_25.setVisible(true);lyr_Ilu_finalshp_26.setVisible(true);lyr_Inanwatan_finalshp_27.setVisible(true);lyr_Jila_finalshp_28.setVisible(true);lyr_Jita_finalshp_29.setVisible(true);lyr_Kabare_finalshp_30.setVisible(true);lyr_Kambuaya_finalshp_31.setVisible(true);lyr_Kamur_finalshp_32.setVisible(true);lyr_Karubaga_finalshp_33.setVisible(true);lyr_Kebo_finalshp_34.setVisible(true);lyr_Kelila_finalshp_35.setVisible(true);lyr_Kenyam_finalshp_36.setVisible(true);lyr_Kepi_finalshp_37.setVisible(true);lyr_Kimaam_finalshp_38.setVisible(true);lyr_Kiwirok_finalshp_39.setVisible(true);lyr_Kobakma_finalshp_40.setVisible(true);lyr_KorowaiBatu_finalshp_41.setVisible(true);lyr_Manggelum_finalshp_42.setVisible(true);lyr_mapanduma_finalshp_43.setVisible(true);lyr_Mararena_finalshp_44.setVisible(true);lyr_Marinda_finalshp_45.setVisible(true);lyr_Merdey_finalshp_46.setVisible(true);lyr_Mindiptana_finalshp_47.setVisible(true);lyr_Moanemani_finalshp_48.setVisible(true);lyr_Molof_finalshp_49.setVisible(true);lyr_Mopah_finalshp_50.setVisible(true);lyr_Mugi_finalshp_51.setVisible(true);lyr_Mulia_finalshp_52.setVisible(true);lyr_NopGoliatDekai_finalshp_53.setVisible(true);lyr_Numfor_finalshp_54.setVisible(true);lyr_Okaba_finalshp_55.setVisible(true);lyr_Oksibil_finalshp_56.setVisible(true);lyr_Paro_finalshp_57.setVisible(true);lyr_Potowaiburu_finalshp_58.setVisible(true);lyr_Senggeh_finalshp_59.setVisible(true);lyr_Senggo_finalshp_60.setVisible(true);lyr_Siboru_finalshp_61.setVisible(true);lyr_Sinak_finalshp_62.setVisible(true);lyr_StevanusRumbewas_finalshp_63.setVisible(true);lyr_TanahMerah_finalshp_64.setVisible(true);lyr_Teminabuan_finalshp_65.setVisible(true);lyr_Teraplu_finalshp_66.setVisible(true);lyr_Timika_finalshp_67.setVisible(true);lyr_Tiom_finalshp_68.setVisible(true);lyr_Torea_finalshp_69.setVisible(true);lyr_Towehitam_finalshp_70.setVisible(true);lyr_Tsinga_finalshp_71.setVisible(true);lyr_Utarom_finalshp_72.setVisible(true);lyr_Wamena_finalshp_73.setVisible(true);lyr_Wangbe_finalshp_74.setVisible(true);lyr_Wanghete_finalshp_75.setVisible(true);lyr_Wasior_finalshp_76.setVisible(true);lyr_Yaniruma_finalshp_77.setVisible(true);lyr_AABereTallo_finalshp_78.setVisible(true);lyr_DCSaudale_finalshp_79.setVisible(true);lyr_DCSaudale_finalshp_80.setVisible(true);lyr_Eltari_finalshp_81.setVisible(true);lyr_FransSalesLega_finalshp_82.setVisible(true);lyr_FransSeda_finalshp_83.setVisible(true);lyr_Gewayantana_finalshp_84.setVisible(true);lyr_HHasanAroeboesman_finalshp_85.setVisible(true);lyr_IgustiNgurahRai_finalshp_86.setVisible(true);lyr_Kabir_finalshp_87.setVisible(true);lyr_LedeKalumbang_finalshp_88.setVisible(true);lyr_MSalahuddin_finalshp_89.setVisible(true);lyr_Soa_finalshp_90.setVisible(true);lyr_SultanMuhammadKaharuddin_finalshp_91.setVisible(true);lyr_Tardamu_finalshp_92.setVisible(true);lyr_UmbuMehangKunda_finalshp_93.setVisible(true);lyr_Wunopitu_finalshp_94.setVisible(true);lyr_ZainuddinAM_finalshp_95.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Aboy_finalshp_1,lyr_Akimuga_finalshp_2,lyr_alama_finalshp_3,lyr_Anggi_finalshp_4,lyr_Apalapsili_finalshp_5,lyr_Ayawasi_finalshp_6,lyr_Babo_finalshp_7,lyr_Bade_finalshp_8,lyr_Batom_finalshp_9,lyr_Beoga_finalshp_10,lyr_Bilai_finalshp_11,lyr_Bilorai_finalshp_12,lyr_Bintuni_finalshp_13,lyr_Bokondini_finalshp_14,lyr_Bomakia_finalshp_15,lyr_Borme_finalshp_16,lyr_Dabra_finalshp_17,lyr_DomineEdwardOsok_finalshp_18,lyr_DouwAturure_finalshp_19,lyr_Elelim_finalshp_20,lyr_Enarotali_finalshp_21,lyr_Ewer_finalshp_22,lyr_Fawi_finalshp_23,lyr_FransKaisiepo_finalshp_24,lyr_Ilaga_finalshp_25,lyr_Ilu_finalshp_26,lyr_Inanwatan_finalshp_27,lyr_Jila_finalshp_28,lyr_Jita_finalshp_29,lyr_Kabare_finalshp_30,lyr_Kambuaya_finalshp_31,lyr_Kamur_finalshp_32,lyr_Karubaga_finalshp_33,lyr_Kebo_finalshp_34,lyr_Kelila_finalshp_35,lyr_Kenyam_finalshp_36,lyr_Kepi_finalshp_37,lyr_Kimaam_finalshp_38,lyr_Kiwirok_finalshp_39,lyr_Kobakma_finalshp_40,lyr_KorowaiBatu_finalshp_41,lyr_Manggelum_finalshp_42,lyr_mapanduma_finalshp_43,lyr_Mararena_finalshp_44,lyr_Marinda_finalshp_45,lyr_Merdey_finalshp_46,lyr_Mindiptana_finalshp_47,lyr_Moanemani_finalshp_48,lyr_Molof_finalshp_49,lyr_Mopah_finalshp_50,lyr_Mugi_finalshp_51,lyr_Mulia_finalshp_52,lyr_NopGoliatDekai_finalshp_53,lyr_Numfor_finalshp_54,lyr_Okaba_finalshp_55,lyr_Oksibil_finalshp_56,lyr_Paro_finalshp_57,lyr_Potowaiburu_finalshp_58,lyr_Senggeh_finalshp_59,lyr_Senggo_finalshp_60,lyr_Siboru_finalshp_61,lyr_Sinak_finalshp_62,lyr_StevanusRumbewas_finalshp_63,lyr_TanahMerah_finalshp_64,lyr_Teminabuan_finalshp_65,lyr_Teraplu_finalshp_66,lyr_Timika_finalshp_67,lyr_Tiom_finalshp_68,lyr_Torea_finalshp_69,lyr_Towehitam_finalshp_70,lyr_Tsinga_finalshp_71,lyr_Utarom_finalshp_72,lyr_Wamena_finalshp_73,lyr_Wangbe_finalshp_74,lyr_Wanghete_finalshp_75,lyr_Wasior_finalshp_76,lyr_Yaniruma_finalshp_77,lyr_AABereTallo_finalshp_78,lyr_DCSaudale_finalshp_79,lyr_DCSaudale_finalshp_80,lyr_Eltari_finalshp_81,lyr_FransSalesLega_finalshp_82,lyr_FransSeda_finalshp_83,lyr_Gewayantana_finalshp_84,lyr_HHasanAroeboesman_finalshp_85,lyr_IgustiNgurahRai_finalshp_86,lyr_Kabir_finalshp_87,lyr_LedeKalumbang_finalshp_88,lyr_MSalahuddin_finalshp_89,lyr_Soa_finalshp_90,lyr_SultanMuhammadKaharuddin_finalshp_91,lyr_Tardamu_finalshp_92,lyr_UmbuMehangKunda_finalshp_93,lyr_Wunopitu_finalshp_94,lyr_ZainuddinAM_finalshp_95];
lyr_Aboy_finalshp_1.set('fieldAliases', {'fid': 'fid', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'NAME': 'NAME', 'ZONA': 'ZONA', });
lyr_Akimuga_finalshp_2.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_alama_finalshp_3.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Anggi_finalshp_4.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Apalapsili_finalshp_5.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Ayawasi_finalshp_6.set('fieldAliases', {'fid': 'fid', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'NAME': 'NAME', 'ZONA': 'ZONA', });
lyr_Babo_finalshp_7.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Bade_finalshp_8.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Batom_finalshp_9.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Beoga_finalshp_10.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Bilai_finalshp_11.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Bilorai_finalshp_12.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Bintuni_finalshp_13.set('fieldAliases', {'fid': 'fid', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'NAME': 'NAME', 'ZONA': 'ZONA', });
lyr_Bokondini_finalshp_14.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Bomakia_finalshp_15.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Borme_finalshp_16.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Dabra_finalshp_17.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_DomineEdwardOsok_finalshp_18.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_DouwAturure_finalshp_19.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Elelim_finalshp_20.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Enarotali_finalshp_21.set('fieldAliases', {'fid': 'fid', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'NAME': 'NAME', 'ZONA': 'ZONA', });
lyr_Ewer_finalshp_22.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Fawi_finalshp_23.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_FransKaisiepo_finalshp_24.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Ilaga_finalshp_25.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Ilu_finalshp_26.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Inanwatan_finalshp_27.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Jila_finalshp_28.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Jita_finalshp_29.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Kabare_finalshp_30.set('fieldAliases', {'fid': 'fid', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'NAME': 'NAME', 'ZONA': 'ZONA', });
lyr_Kambuaya_finalshp_31.set('fieldAliases', {'fid': 'fid', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'NAME': 'NAME', 'ZONA': 'ZONA', });
lyr_Kamur_finalshp_32.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Karubaga_finalshp_33.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Kebo_finalshp_34.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Kelila_finalshp_35.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Kenyam_finalshp_36.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Kepi_finalshp_37.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Kimaam_finalshp_38.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Kiwirok_finalshp_39.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Kobakma_finalshp_40.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_KorowaiBatu_finalshp_41.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Manggelum_finalshp_42.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_mapanduma_finalshp_43.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Mararena_finalshp_44.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Marinda_finalshp_45.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Merdey_finalshp_46.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Mindiptana_finalshp_47.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Moanemani_finalshp_48.set('fieldAliases', {'fid': 'fid', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'NAME': 'NAME', 'ZONA': 'ZONA', });
lyr_Molof_finalshp_49.set('fieldAliases', {'fid': 'fid', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'NAME': 'NAME', 'ZONA': 'ZONA', });
lyr_Mopah_finalshp_50.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Mugi_finalshp_51.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Mulia_finalshp_52.set('fieldAliases', {'fid': 'fid', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'NAME': 'NAME', 'ZONA': 'ZONA', });
lyr_NopGoliatDekai_finalshp_53.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Numfor_finalshp_54.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Okaba_finalshp_55.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Oksibil_finalshp_56.set('fieldAliases', {'fid': 'fid', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'NAME': 'NAME', 'ZONA': 'ZONA', });
lyr_Paro_finalshp_57.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Potowaiburu_finalshp_58.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Senggeh_finalshp_59.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Senggo_finalshp_60.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Siboru_finalshp_61.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Sinak_finalshp_62.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_StevanusRumbewas_finalshp_63.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_TanahMerah_finalshp_64.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Teminabuan_finalshp_65.set('fieldAliases', {'fid': 'fid', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'NAME': 'NAME', 'ZONA': 'ZONA', });
lyr_Teraplu_finalshp_66.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Timika_finalshp_67.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Tiom_finalshp_68.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Torea_finalshp_69.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Towehitam_finalshp_70.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Tsinga_finalshp_71.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Utarom_finalshp_72.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Wamena_finalshp_73.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Wangbe_finalshp_74.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Wanghete_finalshp_75.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Wasior_finalshp_76.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Yaniruma_finalshp_77.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_AABereTallo_finalshp_78.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_DCSaudale_finalshp_79.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_DCSaudale_finalshp_80.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Eltari_finalshp_81.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_FransSalesLega_finalshp_82.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_FransSeda_finalshp_83.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Gewayantana_finalshp_84.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_HHasanAroeboesman_finalshp_85.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_IgustiNgurahRai_finalshp_86.set('fieldAliases', {'fid': 'fid', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'NAME': 'NAME', 'ZONA': 'ZONA', });
lyr_Kabir_finalshp_87.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_LedeKalumbang_finalshp_88.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_MSalahuddin_finalshp_89.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Soa_finalshp_90.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_SultanMuhammadKaharuddin_finalshp_91.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Tardamu_finalshp_92.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_UmbuMehangKunda_finalshp_93.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Wunopitu_finalshp_94.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_ZainuddinAM_finalshp_95.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'PROVINSI': 'PROVINSI', 'ERROR': 'ERROR', 'ZONA': 'ZONA', });
lyr_Aboy_finalshp_1.set('fieldImages', {'fid': '', 'PROVINSI': '', 'ERROR': '', 'NAME': '', 'ZONA': '', });
lyr_Akimuga_finalshp_2.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_alama_finalshp_3.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Anggi_finalshp_4.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Apalapsili_finalshp_5.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Ayawasi_finalshp_6.set('fieldImages', {'fid': '', 'PROVINSI': '', 'ERROR': '', 'NAME': '', 'ZONA': '', });
lyr_Babo_finalshp_7.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Bade_finalshp_8.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Batom_finalshp_9.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Beoga_finalshp_10.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Bilai_finalshp_11.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Bilorai_finalshp_12.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Bintuni_finalshp_13.set('fieldImages', {'fid': '', 'PROVINSI': '', 'ERROR': '', 'NAME': '', 'ZONA': '', });
lyr_Bokondini_finalshp_14.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Bomakia_finalshp_15.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Borme_finalshp_16.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Dabra_finalshp_17.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_DomineEdwardOsok_finalshp_18.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_DouwAturure_finalshp_19.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Elelim_finalshp_20.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Enarotali_finalshp_21.set('fieldImages', {'fid': '', 'PROVINSI': '', 'ERROR': '', 'NAME': '', 'ZONA': '', });
lyr_Ewer_finalshp_22.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Fawi_finalshp_23.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_FransKaisiepo_finalshp_24.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Ilaga_finalshp_25.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Ilu_finalshp_26.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Inanwatan_finalshp_27.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Jila_finalshp_28.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Jita_finalshp_29.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Kabare_finalshp_30.set('fieldImages', {'fid': '', 'PROVINSI': '', 'ERROR': '', 'NAME': '', 'ZONA': '', });
lyr_Kambuaya_finalshp_31.set('fieldImages', {'fid': '', 'PROVINSI': '', 'ERROR': '', 'NAME': '', 'ZONA': '', });
lyr_Kamur_finalshp_32.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Karubaga_finalshp_33.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Kebo_finalshp_34.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Kelila_finalshp_35.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Kenyam_finalshp_36.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Kepi_finalshp_37.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Kimaam_finalshp_38.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Kiwirok_finalshp_39.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Kobakma_finalshp_40.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_KorowaiBatu_finalshp_41.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Manggelum_finalshp_42.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_mapanduma_finalshp_43.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Mararena_finalshp_44.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Marinda_finalshp_45.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Merdey_finalshp_46.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Mindiptana_finalshp_47.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Moanemani_finalshp_48.set('fieldImages', {'fid': '', 'PROVINSI': '', 'ERROR': '', 'NAME': '', 'ZONA': '', });
lyr_Molof_finalshp_49.set('fieldImages', {'fid': '', 'PROVINSI': '', 'ERROR': '', 'NAME': '', 'ZONA': '', });
lyr_Mopah_finalshp_50.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Mugi_finalshp_51.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Mulia_finalshp_52.set('fieldImages', {'fid': '', 'PROVINSI': '', 'ERROR': '', 'NAME': '', 'ZONA': '', });
lyr_NopGoliatDekai_finalshp_53.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Numfor_finalshp_54.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Okaba_finalshp_55.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Oksibil_finalshp_56.set('fieldImages', {'fid': '', 'PROVINSI': '', 'ERROR': '', 'NAME': '', 'ZONA': '', });
lyr_Paro_finalshp_57.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Potowaiburu_finalshp_58.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Senggeh_finalshp_59.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Senggo_finalshp_60.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Siboru_finalshp_61.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Sinak_finalshp_62.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_StevanusRumbewas_finalshp_63.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_TanahMerah_finalshp_64.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Teminabuan_finalshp_65.set('fieldImages', {'fid': '', 'PROVINSI': '', 'ERROR': '', 'NAME': '', 'ZONA': '', });
lyr_Teraplu_finalshp_66.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Timika_finalshp_67.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Tiom_finalshp_68.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Torea_finalshp_69.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Towehitam_finalshp_70.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Tsinga_finalshp_71.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Utarom_finalshp_72.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Wamena_finalshp_73.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Wangbe_finalshp_74.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Wanghete_finalshp_75.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Wasior_finalshp_76.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Yaniruma_finalshp_77.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_AABereTallo_finalshp_78.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_DCSaudale_finalshp_79.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_DCSaudale_finalshp_80.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Eltari_finalshp_81.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_FransSalesLega_finalshp_82.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_FransSeda_finalshp_83.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Gewayantana_finalshp_84.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_HHasanAroeboesman_finalshp_85.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_IgustiNgurahRai_finalshp_86.set('fieldImages', {'fid': '', 'PROVINSI': '', 'ERROR': '', 'NAME': '', 'ZONA': '', });
lyr_Kabir_finalshp_87.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_LedeKalumbang_finalshp_88.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_MSalahuddin_finalshp_89.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Soa_finalshp_90.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_SultanMuhammadKaharuddin_finalshp_91.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Tardamu_finalshp_92.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_UmbuMehangKunda_finalshp_93.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Wunopitu_finalshp_94.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_ZainuddinAM_finalshp_95.set('fieldImages', {'fid': '', 'NAME': '', 'PROVINSI': '', 'ERROR': '', 'ZONA': '', });
lyr_Aboy_finalshp_1.set('fieldLabels', {'fid': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'NAME': 'no label', 'ZONA': 'no label', });
lyr_Akimuga_finalshp_2.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_alama_finalshp_3.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Anggi_finalshp_4.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Apalapsili_finalshp_5.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Ayawasi_finalshp_6.set('fieldLabels', {'fid': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'NAME': 'no label', 'ZONA': 'no label', });
lyr_Babo_finalshp_7.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Bade_finalshp_8.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Batom_finalshp_9.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Beoga_finalshp_10.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Bilai_finalshp_11.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Bilorai_finalshp_12.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Bintuni_finalshp_13.set('fieldLabels', {'fid': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'NAME': 'no label', 'ZONA': 'no label', });
lyr_Bokondini_finalshp_14.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Bomakia_finalshp_15.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Borme_finalshp_16.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Dabra_finalshp_17.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_DomineEdwardOsok_finalshp_18.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_DouwAturure_finalshp_19.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Elelim_finalshp_20.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Enarotali_finalshp_21.set('fieldLabels', {'fid': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'NAME': 'no label', 'ZONA': 'no label', });
lyr_Ewer_finalshp_22.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Fawi_finalshp_23.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_FransKaisiepo_finalshp_24.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Ilaga_finalshp_25.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Ilu_finalshp_26.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Inanwatan_finalshp_27.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Jila_finalshp_28.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Jita_finalshp_29.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Kabare_finalshp_30.set('fieldLabels', {'fid': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'NAME': 'no label', 'ZONA': 'no label', });
lyr_Kambuaya_finalshp_31.set('fieldLabels', {'fid': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'NAME': 'no label', 'ZONA': 'no label', });
lyr_Kamur_finalshp_32.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Karubaga_finalshp_33.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Kebo_finalshp_34.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Kelila_finalshp_35.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Kenyam_finalshp_36.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Kepi_finalshp_37.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Kimaam_finalshp_38.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Kiwirok_finalshp_39.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Kobakma_finalshp_40.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_KorowaiBatu_finalshp_41.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Manggelum_finalshp_42.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_mapanduma_finalshp_43.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Mararena_finalshp_44.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Marinda_finalshp_45.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Merdey_finalshp_46.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Mindiptana_finalshp_47.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Moanemani_finalshp_48.set('fieldLabels', {'fid': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'NAME': 'no label', 'ZONA': 'no label', });
lyr_Molof_finalshp_49.set('fieldLabels', {'fid': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'NAME': 'no label', 'ZONA': 'no label', });
lyr_Mopah_finalshp_50.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Mugi_finalshp_51.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Mulia_finalshp_52.set('fieldLabels', {'fid': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'NAME': 'no label', 'ZONA': 'no label', });
lyr_NopGoliatDekai_finalshp_53.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Numfor_finalshp_54.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Okaba_finalshp_55.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Oksibil_finalshp_56.set('fieldLabels', {'fid': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'NAME': 'no label', 'ZONA': 'no label', });
lyr_Paro_finalshp_57.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Potowaiburu_finalshp_58.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Senggeh_finalshp_59.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Senggo_finalshp_60.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Siboru_finalshp_61.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Sinak_finalshp_62.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_StevanusRumbewas_finalshp_63.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_TanahMerah_finalshp_64.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Teminabuan_finalshp_65.set('fieldLabels', {'fid': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'NAME': 'no label', 'ZONA': 'no label', });
lyr_Teraplu_finalshp_66.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Timika_finalshp_67.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Tiom_finalshp_68.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Torea_finalshp_69.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Towehitam_finalshp_70.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Tsinga_finalshp_71.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Utarom_finalshp_72.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Wamena_finalshp_73.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Wangbe_finalshp_74.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Wanghete_finalshp_75.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Wasior_finalshp_76.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Yaniruma_finalshp_77.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_AABereTallo_finalshp_78.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_DCSaudale_finalshp_79.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_DCSaudale_finalshp_80.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Eltari_finalshp_81.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_FransSalesLega_finalshp_82.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_FransSeda_finalshp_83.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Gewayantana_finalshp_84.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_HHasanAroeboesman_finalshp_85.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_IgustiNgurahRai_finalshp_86.set('fieldLabels', {'fid': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'NAME': 'no label', 'ZONA': 'no label', });
lyr_Kabir_finalshp_87.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_LedeKalumbang_finalshp_88.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_MSalahuddin_finalshp_89.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Soa_finalshp_90.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_SultanMuhammadKaharuddin_finalshp_91.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Tardamu_finalshp_92.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_UmbuMehangKunda_finalshp_93.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_Wunopitu_finalshp_94.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_ZainuddinAM_finalshp_95.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'PROVINSI': 'no label', 'ERROR': 'no label', 'ZONA': 'no label', });
lyr_ZainuddinAM_finalshp_95.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});