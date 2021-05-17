import { useCallback, useEffect, useState } from 'react'
import MapGL, {
  Popup,
  NavigationControl,
  WebMercatorViewport,
  Marker,
} from 'react-map-gl'
import { PhoneIcon, MailIcon, XIcon } from '@heroicons/react/outline'
import { LocationMarkerIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'

const SIZE = 24

// Important for perf: the markers never change, avoid rerender when the map viewport changes
function Pins({ locations, onClick }) {
  return locations.map((location, index) => {
    return (
      <Marker
        key={`marker-${index}`}
        longitude={location.geo[1]}
        latitude={location.geo[0]}
      >
        <LocationMarkerIcon
          className="text-indigo-600"
          style={{
            width: SIZE,
            height: SIZE,
            cursor: 'pointer',
            transform: `translate(${-SIZE / 2}px,${-SIZE}px)`,
          }}
          onClick={() => onClick(location)}
        />
      </Marker>
    )
  })
}

const navStyle = {
  top: 0,
  left: 0,
  padding: '10px',
}

const scaleControlStyle = {
  bottom: 36,
  left: 0,
  padding: '10px',
}

function LocationInfo({ location: loc }) {
  const contact = loc.LocationContactList.LocationContact[0]
  return (
    <dl className="p-4" key={loc.LocationFacility}>
      <dt className="text-lg leading-6 font-medium text-gray-900">
        {loc.LocationCity}: {loc.LocationFacility}
      </dt>
      <dd className="text-base text-gray-600">
        <div className="mt-2">
          {loc.LocationCity}, {loc.LocationState}, {loc.LocationCountry},{' '}
          {loc.LocationZip}
        </div>

        <div className="mt-2">
          <div className="text-base">
            <p>Contact: {contact.LocationContactName}</p>
          </div>

          <div className="mt-3 flex">
            <div className="flex-shrink-0">
              <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
            </div>
            <div className="ml-3 text-base">
              <p>
                {contact.LocationContactPhone}{' '}
                {contact.LocationContactPhoneExt &&
                  ` ext ${contact.LocationContactPhoneExt}`}
              </p>
            </div>
          </div>
          <div className="mt-3 flex">
            <div className="flex-shrink-0">
              <MailIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
            </div>
            <div className="ml-3 text-base">
              <p>
                <a href="mailto:{contact.LocationContactEMail}">
                  {contact.LocationContactEMail}
                </a>
              </p>
            </div>
          </div>
        </div>
      </dd>
    </dl>
  )
}

function ControlPanel() {
  return (
    <div className="control-panel">
      <h3>Marker, Popup, NavigationControl and FullscreenControl </h3>
      <p>
        Map showing top 20 most populated cities of the United States. Click on
        a marker to learn more.
      </p>
      <p>
        Data source:{' '}
        <a href="https://en.wikipedia.org/wiki/List_of_United_States_cities_by_population">
          Wikipedia
        </a>
      </p>
      <div className="source-link">
        <a
          href="https://github.com/visgl/react-map-gl/tree/6.1-release/examples/controls"
          target="_new"
        >
          View Code ↗
        </a>
      </div>
    </div>
  )
}

// getBounds taken from: https://github.com/visgl/react-map-gl/issues/1246#issuecomment-738032023
const getBounds = ({ x, cornersLngLat, width = 800, height = 600 }) => {
  let padding = { top: 30, bottom: 30, left: 20, right: 20 }

  if (width >= 600) {
    padding = 40
  }

  if (width >= 800) {
    padding = { top: 60, bottom: 60, left: 40, right: 40 }
  }

  if (width >= 1200) {
    padding = { top: 90, bottom: 90, left: 60, right: 60 }
  }

  const viewport = new WebMercatorViewport({
    width,
    height,
  }).fitBounds(cornersLngLat, { padding })

  const { longitude, latitude, zoom } = viewport
  return { longitude, latitude, zoom, bearing: 0, pitch: 0 }
}

export default function LocationsMap({
  mapLocations: locations,
  mapCornersLngLat,
}) {
  const { push } = useRouter()
  const [viewport, setViewport] = useState(() =>
    getBounds({ cornersLngLat: mapCornersLngLat })
  )
  const [popupInfo, setPopupInfo] = useState(null)
  const onClick = useCallback(
    (location) => {
      push(`#${location.LocationState}`)
    },
    [push]
  )

  return (
    <div className="aspect-w-16 aspect-h-7">
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        mapStyle="mapbox://styles/mapbox/light-v10"
        onViewportChange={setViewport}
        scrollZoom={false}
        onResize={({ width, height }) => {
          setViewport((old) => ({
            ...old,
            ...getBounds({
              x: true,
              cornersLngLat: mapCornersLngLat,
              width,
              height,
            }),
          }))
        }}
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
      >
        <Pins locations={locations} onClick={onClick} />

        {popupInfo && (
          <Popup
            tipSize={5}
            anchor="top"
            longitude={popupInfo?.geo[1]}
            latitude={popupInfo?.geo[0]}
            closeButton={false}
            onClose={setPopupInfo}
          >
            <LocationInfo location={popupInfo} />
            <button
              className="w-4 h-4 absolute top-1 right-1"
              onClick={() => setPopupInfo(null)}
            >
              <XIcon />
            </button>
          </Popup>
        )}

        <NavigationControl style={navStyle} />
      </MapGL>

      {/* <ControlPanel /> */}
    </div>
  )
}
