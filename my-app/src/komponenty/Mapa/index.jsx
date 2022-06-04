import React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL from 'react-map-gl';
import './style.css';
/*import ReactMapGL, { Marker } from 'react-map-gl';*/
import spendlikUrl from './../../img/spendlik.svg';

export const Mapa = (props) => {
  const [viewport, setViewport] = React.useState({
    latitude: 50.0814464,
    longitude: 14.4312725,
    zoom: 15,
  });
  const mapStyle = {
    version: 8,
    sources: {
      'raster-tiles': {
        type: 'raster',
        tiles: ['https://mapserver.mapy.cz/base-m/{z}-{x}-{y}'],
        tileSize: 256,
        attribution:
          'Mapové podklady od <a target="_top" rel="noopener" href="https://mapy.cz/">Seznam.cz</a> a <a target="_top" rel="noopener" href="http://openstreetmap.org">OpenStreetMap</a>.',
      },
    },
    layers: [
      {
        id: 'simple-tiles',
        type: 'raster',
        source: 'raster-tiles',
        minzoom: 0,
        maxzoom: 18,
      },
    ],
  };

  return (
    <div className="mapa">
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle={mapStyle}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        {/*<Marker
          offsetLeft={-25}
          offsetTop={-50}
          latitude={50.0814464}
          longitude={14.4312725}
        >
          <img src={spendlikUrl} width={50} height={50} alt="Czechitas" />
  </Marker>*/}
      </ReactMapGL>
    </div>
  );
};
