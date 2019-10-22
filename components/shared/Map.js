import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import baseTheme from '../../styles/baseTheme';
import MapMarker from './MapMarker';

const customStyles = [
  {
    featureType: 'administrative',
    elementType: 'geometry.fill',
    stylers: [{ visibility: 'on' }, { color: baseTheme.colors.black }],
  },
  {
    featureType: 'administrative',
    elementType: 'labels.text.fill',
    stylers: [{ color: baseTheme.colors.fonts.dark }],
  },
  {
    featureType: 'administrative',
    elementType: 'labels.icon',
    stylers: [{ hue: baseTheme.colors.primary }],
  },
  {
    featureType: 'administrative.province',
    elementType: 'geometry.stroke',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [{ color: baseTheme.colors.maps.landscape }],
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'labels',
    stylers: [{ saturation: '36' }],
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'road',
    elementType: 'all',
    stylers: [{ saturation: -100 }, { lightness: 45 }],
  },
  {
    featureType: 'road.highway',
    elementType: 'all',
    stylers: [{ visibility: 'simplified' }],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.icon',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'transit',
    elementType: 'all',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [{ color: baseTheme.colors.maps.water }, { visibility: 'on' }],
  },
];

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 42.49754,
      lng: -88.2722,
    },
    zoom: 13,
  };

  render() {
    return (
      <div
        style={{
          height: '300px',
          width: '100vw',
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.gmapsKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={{
            styles: customStyles,
          }}
        >
          <MapMarker lat={this.props.center.lat} lng={this.props.center.lng} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
