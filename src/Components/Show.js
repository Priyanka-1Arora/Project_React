import React from 'react'
import { useState } from 'react'
import Spinner from './Spinner'
import { useEffect } from 'react'

export default function Show(props) {
    const[loading,setLoading]=useState(false)
    const[location,setLocation]=useState({})
    const[condition,setCondition]=useState({})
    const[current,setCurrent]=useState({})
    useEffect(() => {
        data();
      }, [props]);
    const data=async ()=>{
        setLoading(true)
        let url=`https://api.weatherapi.com/v1/current.json?key=456e762c38964f989a275944232210&q=${props.text}`
        let j=await fetch(url)
        let parse=await j.json();
        setLocation(parse.location)
        setCondition(parse.current.condition)
        setCurrent(parse.current)
        setLoading(false)
    }
    const weatherStyle={
        border:"2px solid black",
        padding:"14px",
        backgroundColor:"rgb(238, 152, 152)",
        boxShadow:"10px 13px gray",
        borderRadius:"25px",
        fontSize:"20px",
        fontWeight:"600"
    }
  return (
    <div>
      <h1>{loading && <Spinner />}</h1>
      {!loading && <div id="container-fluid">
        <div className="row p-4">
            <div className="col-sm-12 col-md-8 col-lg-7 mx-auto" style={weatherStyle}>
            <div className='text-center'>
                    <img className="img-fluid" src={condition.icon} ></img>
                </div>
                <h5 className="text-center">Location: {location.name}</h5>
                {location.region && <div className='text-center'>Region: {location.region}</div>}
                <div className='text-center'>Condition: {condition.text}</div>
                <div className='text-center'>Temperature: {current.temp_c}&deg;C</div>
                <div className='text-center'>Wind: {current.wind_kph}km/h</div>
                <div className='text-center'>Humidity: {current.humidity}%</div>
                <div className='text-center'>Precipitation: {current.precip_mm}mm</div>
                <div className='text-center'>Last Updated: {current.last_updated}</div>
            </div>
        </div>
      </div>}
    </div>
  )
}
