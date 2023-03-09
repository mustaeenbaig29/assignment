import React, { useState } from 'react'
import './Global.css'
import {CiFilter} from 'react-icons/ci'
import {AiOutlineSearch} from 'react-icons/ai'
import Developers from './DeveloperTeam'
import Designers from './DesignersTeam'
import ProductDesgin from './ProductDesgin'
import Hr from './HR'
import Marketing from './Marketing'
import Editors from './Editors'


const Sitings = () => {

  const [searchTerm, setSearchTerm] = useState("")

  return (
  <div className='container'>
    <div className='filters'>
        <input placeholder='Search' onChange={event => {setSearchTerm(event.target.value)}}/>
        <AiOutlineSearch className='search'/>
        </div>
    <div className='cards'>
        <div className='card'>
            <div className='seatings'>
                {
                  Developers.filter((val) => {
                    if(searchTerm == "") {
                      return val
                    } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                      return val
                    }
                  }).map((curElem) => {
                    return <div className='seats'>
                       <div className='content'>
                        <div className='img_and_txt'>
                          <img src={curElem.img}/>
                          <h4>{curElem.name}</h4>
                        </div>
                        <div className='employees_info'>
                          <h3>{curElem.position}</h3>
                         <div className='employee_info_1'>
                         <h4>Team</h4>
                          <h4>{curElem.project}</h4>
                         </div>
                         <div className='employee_info_1'>
                         <h4>Current Project</h4>
                          <h4>{curElem.project_name}</h4>
                         </div>
                        </div>
                  </div>
                    </div>
                  })
                }
            </div>
            <div className='table1'>
              <h4>Developers Team</h4>
            </div>
        </div>
        <div className='card'>
          <div className='seatings'>
                {
                  Designers.filter((val) => {
                    if(searchTerm == "") {
                      return val
                    } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                      return val
                    }
                  }).map((curElem) => {
                    return <div className='seats'>
                       <div className='content'>
                        <div className='img_and_txt'>
                          <img src={curElem.img}/>
                          <h4>{curElem.name}</h4>
                        </div>
                        <div className='employees_info'>
                          <h3>{curElem.position}</h3>
                         <div className='employee_info_1'>
                         <h4>Team</h4>
                          <h4>{curElem.project}</h4>
                         </div>
                         <div className='employee_info_1'>
                         <h4>Current Project</h4>
                          <h4>{curElem.project_name}</h4>
                         </div>
                        </div>
                  </div>
                    </div>
                  })
                }
            </div>
            <div className='table2'>
            <h4>Designers Team</h4>
            </div>
        </div>
        <div className='card'>
        <div className='seatings'>
                {
                  ProductDesgin.filter((val) => {
                    if(searchTerm == "") {
                      return val
                    } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                      return val
                    }
                  }).map((curElem) => {
                    return <div className='seats'>
                      <div className='content'>
                        <div className='img_and_txt'>
                          <img src={curElem.img}/>
                          <h4>{curElem.name}</h4>
                        </div>
                        <div className='employees_info'>
                          <h3>{curElem.position}</h3>
                         <div className='employee_info_1'>
                         <h4>Team</h4>
                          <h4>{curElem.project}</h4>
                         </div>
                         <div className='employee_info_1'>
                         <h4>Current Project</h4>
                          <h4>{curElem.project_name}</h4>
                         </div>
                        </div>
                  </div>
                    </div>
                  })
                }
            </div>
            <div className='table3'>
            <h4>Product Desgin Team</h4>
            </div>
        </div>
        <div className='card'>
        <div className='seatings'>
                {
                  Hr.filter((val) => {
                    if(searchTerm == "") {
                      return val
                    } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                      return val
                    }
                  }).map((curElem) => {
                    return <div className='seats'>
                     <div className='content'>
                        <div className='img_and_txt'>
                          <img src={curElem.img}/>
                          <h4>{curElem.name}</h4>
                        </div>
                        <div className='employees_info'>
                          <h3>{curElem.position}</h3>
                         <div className='employee_info_1'>
                         <h4>Team</h4>
                          <h4>{curElem.project}</h4>
                         </div>
                         <div className='employee_info_1'>
                         <h4>Current Project</h4>
                          <h4>{curElem.project_name}</h4>
                         </div>
                        </div>
                  </div>
                    </div>
                  })
                }
            </div>
            <div className='table4'>
            <h4>HR's Team</h4>
            </div>
        </div>
        <div className='card'>
        <div className='seatings'>
                {
                  Marketing.filter((val) => {
                    if(searchTerm == "") {
                      return val
                    } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                      return val
                    }
                  }).map((curElem) => {
                    return <div className='seats'>
                      <div className='content'>
                        <div className='img_and_txt'>
                          <img src={curElem.img}/>
                          <h4>{curElem.name}</h4>
                        </div>
                        <div className='employees_info'>
                          <h3>{curElem.position}</h3>
                         <div className='employee_info_1'>
                         <h4>Team</h4>
                          <h4>{curElem.project}</h4>
                         </div>
                         <div className='employee_info_1'>
                         <h4>Current Project</h4>
                          <h4>{curElem.project_name}</h4>
                         </div>
                        </div>
                  </div>
                    </div>
                  })
                }
            </div>
            <div className='table5'>
            <h4>Marketing Team</h4>
            </div>
        </div>
        <div className='card'>
        <div className='seatings'>
                {
                  Editors.filter((val) => {
                    if(searchTerm == "") {
                      return val
                    } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                      return val
                    }
                  }).map((curElem) => {
                    return <div className='seats'>
                    <div className='content'>
                        <div className='img_and_txt'>
                          <img src={curElem.img}/>
                          <h4>{curElem.name}</h4>
                        </div>
                        <div className='employees_info'>
                          <h3>{curElem.position}</h3>
                         <div className='employee_info_1'>
                         <h4>Team</h4>
                          <h4>{curElem.project}</h4>
                         </div>
                         <div className='employee_info_1'>
                         <h4>Current Project</h4>
                          <h4>{curElem.project_name}</h4>
                         </div>
                        </div>
                  </div>
                    </div>
                  })
                }
            </div>
            <div className='table6'>
            <h4>Editors Team</h4>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Sitings
