import React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
/*import ReactMapGL from 'react-map-gl';*/
import './style.css';
import './marker-button.css';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import spendlikUrl from './../../img/spendlik.svg';
import { Button } from './Button/button';
import react from 'react';

export const Mapa = ({ latitude, longitude }) => {
  const [viewport, setViewport] = React.useState({
    latitude: latitude,
    longitude: longitude,
    zoom: 15,
  });
  const [popupOtevren, setPopupOtevren] = React.useState(false);
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

  React.useEffect(() => {
    setViewport({
      latitude: latitude,
      longitude: longitude,
      zoom: 15,
    });
  }, [latitude, longitude]);

  return (
    <div className="mapa">
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle={mapStyle}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        <Marker
          offsetLeft={-25}
          offsetTop={-50}
          latitude={latitude}
          longitude={longitude}
        >
          <button
            className="marker-button"
            onClick={() => setPopupOtevren(true)}
          >
            <img src={spendlikUrl} width={50} height={50} alt="Czechitas" />
          </button>
          {popupOtevren && (
            <Popup
              offsetLeft={-25}
              offsetTop={-50}
              latitude={latitude}
              longitude={longitude}
              onClose={() => setPopupOtevren(false)}
            >
              <Button />
            </Popup>
          )}
        </Marker>
      </ReactMapGL>
    </div>
  );
};
