<template>
  <div class="hello">
    
     <div class="main-col ftco-animate">
      <div class="main-card">
        <a>
          <img alt="產品照片1" class="picon" src="./images/key_i.png" />
          <div class="main-card-info">
            <div id="Drone1">{{ msg }}</div>
            <div id="Drone1LendPerson">----</div>
            <div id="Drone1LendDate">可預約</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.picon {
  margin-top: 15px;
  width: 100%;
  margin-bottom: 10%;
}
.main-card {
  padding-top: 0;
  margin-top: 20px;
  margin-bottom: 40px;
  margin-left: 8%;
  margin-right: auto;
  padding: auto;
  width: 140px;
  height: 175px;
  opacity: 90%;
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #e9e9e7;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 1rem;
  float: left;
  transition: all 0.3s ease;
}

.main-card-info {
  font-size: 12px;;
  line-height: 15px;
  text-align: center;
  margin-bottom: 4%;
}

.main-card:hover {
  background-color: #C3C3C3;
  color: aliceblue;
  transition: all 0.3s ease;
}

.main-card:hover .pic-hover {
  visibility: visible;
  transition: all 0.3s ease;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
