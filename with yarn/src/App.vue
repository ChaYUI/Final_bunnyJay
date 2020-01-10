<template>
<div id="app">
  <head>
    <title>BunnyJay</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  </head>

  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <card msg="多媒體設計系系辦"/>

  <HelloWorld msg="多媒體設計系系辦
租借項目 App" /> -->

  <div id="frame">
    <aside id="colorlib-aside" role="complementary" class="js-fullheight">
      <nav id="colorlib-main-menu" role="navigation">
        <div class="rowcolorlib-aside">
          <!-- 照片組1 -->

          <div class="col">
            <!--<div class="card">-->
            <div class="bunnylogo">
              <div class="bunnyword">
                多媒體設計系&nbsp;&nbsp;系辦
                <br />
                <span>租借項目</span>
              </div>
              <a href="index.html">
                <img alt="Logo" src="./view/images/Bunny_s.png" />
              </a>
              <!--Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></a>-->
            </div>
            <div class="pic-hover">
              <h4>HOME</h4>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <div class="card-title-text">教室鑰匙</div>
              <div class="card-title-wrap">Key</div>
              <!-- <a href="key.html"> -->
                <router-link    to="/key">
                <img alt="產品照片1" src="./view/images/key.png" />
                <a>&nbsp;</a>
                <button class="card-text" type="submit" id="KeyLend">快速預借</button>
                <div class="pic-hover">
                  <h4 id="KeyRemain">剩餘10台</h4>
                </div>
              <!-- </a> -->
                </router-link>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <div class="card-title-text">相機</div>
              <div class="card-title-wrap">Camera</div>
              <!-- <a href="camera.html"> -->
                                <router-link    to="/camera">

                <img alt="產品照片1" src="./view/images/camera.png" />
                <a>&nbsp;</a>
                <button
                  class="card-text"
                  type="submit"
                  id="CameraLend"
                  onclick="location.href='index.html'"
                >快速預借</button>
                <div class="pic-hover">
                  <h4 id="CameraRemain">剩餘10台</h4>
                </div>
                                </router-link>
              <!-- </a> -->
              
            </div>
          </div>

          <div class="col">
            <div class="card">
              <div class="card-title-text">腳架</div>
              <div class="card-title-wrap">Tripod</div>
              <!--<a href="tripod.html">-->
                     <router-link    to="/tripod">
                <img alt="產品照片1" src="./view/images/triopod.png" />

                
                <button class="card-text" type="submit" id="TripodLend">快速預借</button>
                <div class="pic-hover">
                  <h4 id="TripodRemain">剩餘10台</h4>
                </div>
              <!--</a>-->
                     </router-link>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <div class="card-title-text">筆記型電腦</div>
              <div class="card-title-wrap">Laptop</div>
              <!--<a href="laptop.html">-->
                        <router-link    to="/laptop">
                <img alt="產品照片1" src="./view/images/laptop.png" />
                <a>&nbsp;</a>
                <button class="card-text" type="submit" id="LaptopLend">快速預借</button>
                <div class="pic-hover">
                  <h4 id="LaptopRemain">剩餘10台</h4>
                </div>
                </router-link>
              <!--</a>-->
            </div>
          </div>

          <div class="col">
            <div class="card">
              <div class="card-title-text">平板電腦</div>
              <div class="card-title-wrap">Pad</div>
              <!--<a href="pad.html">-->
                <router-link to="/pad">
                <img alt="產品照片1" src="./view/images/pad.png" />
                <a>&nbsp;</a>
                <button class="card-text" type="submit" id="PadLend">快速預借</button>
                <div class="pic-hover">
                  <h4 id="PadRemain">剩餘10台</h4>
                </div>
              <!--</a>-->
                </router-link>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <div class="card-title-text">電腦繪圖版</div>
              <div class="card-title-wrap">WACOM</div>
              <!--<a href="wacom.html">-->
                <router-link to="/Wacom">
                <img alt="產品照片1" src="./view/images/digiboard.png" />
                <a>&nbsp;</a>
                <button class="card-text" type="submit" id="WacomLend">快速預借</button>
                <div class="pic-hover">
                  <h4 id="WacomRemain">剩餘10台</h4>
                </div>
              <!--</a>-->
                </router-link>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <div class="card-title-text">Arduino</div>
              <div class="card-title-wrap">Development Board</div>
              <!--<a href="arduino.html">-->
                <router-link to='/Arduino'>
                <img alt="產品照片1" src="./view/images/arduino.png" />
                <a>&nbsp;</a>
                <button class="card-text" type="submit" id="ArduinoLend">快速預借</button>
                <div class="pic-hover">
                  <h4>剩餘10台</h4>
                </div>
              <!--</a>-->
                </router-link>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <div class="card-title-text">VR頭戴裝置</div>
              <div class="card-title-wrap">VR headset</div>
              <!--<a href="vr.html">-->
                <router-link to='/VR'>
                <img alt="產品照片1" src="./view/images/VR.png" />
                <a>&nbsp;</a>
                <button class="card-text" type="submit" id="VRLend">快速預借</button>
                <div class="pic-hover">
                  <h4 id="VRRemain">剩餘10台</h4>
                </div>
              <!--</a>-->
                </router-link>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <div class="card-title-text">空拍機</div>
              <div class="card-title-wrap">Drone</div>
              <!--<a href="drone.html">-->
                <router-link to='/drone'>
                <img alt="產品照片1" src="./view/images/drone.png" />
                <a>&nbsp;</a>
                <button class="card-text" type="submit" id="DroneLend">快速預借</button>
                <div class="pic-hover">
                  <h4 id="DroneRemain">剩餘10台</h4>
                </div>
              <!--</a>-->
                </router-link>
            </div>
          </div>
        </div>
      </nav>
    </aside>
   
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view style="  display: flex; width: 100% ;" />
  </div>
  <footer>
    <div
      class="page-footer footer-fixed"
      style=" color:#FFF; text-align: center; background-color: #2c3e50;"
    >
      <div class="container full">
        <div class="footer-wrapper">
          Version：1.0
          <div class="right">
            多媒體設計系系辦
            租借項目 App
            <i class="hover_icon icon_connect right bg-green" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import card from "./components/card.vue";

export default {
  name: "app",
  components: {
    // HelloWorld,
    // card
  }
};
</script>

<style>
#frame {
  display: flex;
  flex-direction: row;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
