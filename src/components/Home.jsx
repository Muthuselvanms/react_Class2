import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FakeStore } from '../App2'

const Home = () => {
  const context = useContext(FakeStore)

  const [menImage, setmenImage] = useState("")
  const [womenImage, setwomenImage] = useState("")
  const [electronicsImage, setelectronicsImage] = useState("")
  const [jeweleryImage, setjeweleryImage] = useState("")

  return (
    <>
    <div>
      <Link to="/men">
      <img src="" height={100} width={100} />
      <h4>Men</h4>
      </Link>
      <Link to="/women">
      <img src="" height={100} width={100} />
      <h4>Women</h4>
      </Link>
      <Link to="/electronics">
      <img src="" height={100} width={100} />
      <h4>Electronics</h4>
      </Link>
      <Link to="/jewelery">
      <img src="" height={100} width={100} />
      <h4>Jewelery</h4>
      </Link>
    </div>
    </>
  )
}

export default Home