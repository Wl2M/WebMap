import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';
import markers from '../data/Shop';

const Map = () => {
  const mapContainerRef = useRef(null);
  const [activeTags, setActiveTags] = useState([]);

  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1Ijoid2wybSIsImEiOiJjbHBqdHcxcXIwMzlmMmtteTJudTVhdXN3In0.XeKu7LOHJ1dU5bdfVH3aog";
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/wl2m/clq3a5p3l00bd01pl301lhxfr",
      center: [100.49630632746363 , 13.65166333879658],
      zoom: 20,
    });

    

   
  

    markers.forEach((markerInfo) => {
      const { lng , lat , popupImg , name , time , Tag , ImageIcon } = markerInfo;
      /*------------------------------------------*/
      if (!activeTags.length || activeTags.some(tag => Tag.includes(tag))) {
        var popupcard = '<div class="popcard">';
        popupcard += '<img class="popcard-Img" src="' + popupImg + '">';
        popupcard += '<p class="popcard-Name">' + name + '</p>';
        popupcard += '<p class="popcard-Times">' + time + '</p>';
        popupcard += '<p class="popcard-Category">' + Tag + '</p>';
        popupcard += '<div class="popcard-BoxButton"><p class="popcard-Button"><button>รายละเอียดเพิ่มเติม</button></p></div>';
        popupcard += '</div>';
      /*------------------------------------------*/
    // Create a marker
    const MarkerIcon = new Image(25,80);
    MarkerIcon.src = ImageIcon;
    const marker = new mapboxgl.Marker({ element:MarkerIcon })
      .setLngLat([lng,lat])
      .addTo(map);

    // Create a popup
    const popup = new mapboxgl.Popup({ offset: 25 })
      .setHTML(popupcard);

    // Attach popup to marker on click
    marker.setPopup(popup);
      }
  });
    
    return () => map.remove();
  }, [activeTags]);

  const handleCategoryClick = (tags) => {
    // Set the active tags when a category is clicked
    setActiveTags(tags);
  };

  return (
    <div>
      <div className="category-head">
        {/* Add your category images here and call handleCategoryClick on click */}
        <div className='category-images'>
          <h3>GinNaiDee</h3>
        </div>
        <div className='category-images'>
          <img className='FoodCate' src="/images/FoodCate.png" alt="Food" onClick={() => handleCategoryClick(['Food'])} />
          <img className='FoodCate' src="/images/DrinkCate.png" alt="Drink" onClick={() => handleCategoryClick(['Drink'])} />
          <img className='FoodCate' src="/images/DessertCate.png" alt="Dessert" onClick={() => handleCategoryClick(['Dessert','Bakery'])} />
          <img className='FoodCate' src="/images/CafeCate.png" alt="Cafe" onClick={() => handleCategoryClick(['Cafe'])} />
        </div>
        {/* Add more category images as needed */}
      </div>
      <div ref={mapContainerRef} style={{ height: '95vh', width: '100%' }} />
    </div>
  );
};




export default Map;
