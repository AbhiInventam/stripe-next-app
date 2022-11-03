import mapboxgl from 'mapbox-gl'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

const mapbox = () => {
  // const [pageIsMounted, setPageIsMounted] = useState(false)

  useEffect(() => {
    // setPageIsMounted(true)
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN;
    const map = new mapboxgl.Map({
      container: "my-map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-77.02, 38.887], // washington
      // center: [72.8311, 21.1702], // surat
      zoom: 12.5,
      pitch: 45,
      // maxBounds: [
      //   [-77.875588, 38.50705], // Southwest coordinates
      //   [-76.15381, 39.548764], // Northeast coordinates
      // ],
    });
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );
  }, [])

  return (
    <div>
      <Head>
        <title>Map box</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>

      <div
        style={{
          display: 'flex',
          // width: '100vh',
          // height: '100vh',
          backgroundColor: '#393e46',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20
        }}>
        <div style={{
          fontWeight: 600,
          color: 'white',
          fontSize: '36px'

        }}
        >Next Js Mapbox</div>

        <main>
          <div id="my-map" style={{
            width: '100vh',
            height: '100vh',
            borderRadius: '20px'
          }} />
          <div style={{ backgroundColor: '#b6e1e0', borderRadius: '20px' }}>
            {/* <p style={{ marginTop: '20px' }}>
            Add filter
            Add trip location (From to TO)
            Display Path and distance
            display details of current location
          </p> */}
          </div>
        </main>
      </div>
    </div>

  )
}

export default mapbox;