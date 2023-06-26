import React, { Component } from 'react'
import Constant from './Constant'
import '../css/loadingbar.css'
export class LoadingBar extends Component {
  constructor() {
    super()
  }
  render() {
    var mobile = Constant.IsMobile()
    return (
      <div id='spinerFullWidth'>
        <div className="center" id="spinersection">
          {/* <Spinner animation="border" variant="white" style={{height:"60px",width:"60px"}} /> */}
          {/* simple spin */}
          {/* <div className="spin"></div> */}
          {/* effecttive load */}
          {/* <div class="load-1">
            <div class="l_line"></div>
            <div class="l_line"></div>
            <div class="l_line"></div>
          </div> */}
          {/* loaderanimation */}
          <div class="loader">
            <div class="l_dot"></div>
            <div class="l_dot"></div>
            <div class="l_dot"></div>
            <div class="l_dot"></div>
            <div class="l_dot"></div>
          </div>
        </div>
      </div>
    )
  }
}
export default LoadingBar
