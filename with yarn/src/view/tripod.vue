<template>
  <div id="tripod" class="tripodBG">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->

    <div id="CardList">
      <!-- Icon + Text Disable -->
      <!-- <router-link    to="/AccountManagementList/userinfo"> -->
      {{userlist}}
      <div id="CardList" class="main-col ftco-animate" v-for="item in userlist" :key="item">
        <div v-if="item.disable" class="icon-card disable waves-effect">
          <div class="main-card">
            <a>
              <img alt="產品照片1" class="picon" src="./images/laptop_b.png" />
              <div class="main-card-info">
                <div>{{ item.title }}</div>
                <div>{{ item.userName }}</div>
                <div>{{ item.date }}</div>
              </div>
            </a>
          </div>
        </div>
        <div v-else class="icon-card waves-effect">
          <div class="main-card">
            <a>
              <img alt="產品照片1" class="picon" src="./images/tripod_i.png" />
              <div class="main-card-info">
                <div>{{ item.title }}</div>
                <div>----</div>
                <div>可預約</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <!-- </router-link> -->
    </div>

    <!-- loader -->
    <div id="ftco-loader" class="show fullscreen">
      <svg class="circular" width="48px" height="48px">
        <circle
          class="path-bg"
          cx="24"
          cy="24"
          r="22"
          fill="none"
          stroke-width="4"
          stroke="#eeeeee"
        />
        <circle
          class="path"
          cx="24"
          cy="24"
          r="22"
          fill="none"
          stroke-width="4"
          stroke-miterlimit="10"
          stroke="#F96D00"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "tripod",
  components: {},
  data() {
    return {
      seen: false,
       //userlist: this.$store.state.userlist,
       //userlist: null,
      userlist: [
        {
          title: "4406",
          userName: "sadguy",
          id: "1410622033",
          disable: true,
          date: "2019.12.23"
        },
        {
          title: "4407",
          userName: "許嘉哲",
          id: "0000",
          disable: false,
          date: "2019.12.23"
        },
        {
          title: "4408",
          userName: "YUI",
          id: "0000",
          disable: true, //借用
          date: "2019.12.22"
        },
        {
          title: "4410",
          userName: "",
          id: "0000",
          disable: false,
          date: "2019.12.23"
        },
        {
          title: "4411",
          userName: "",
          id: "0000",
          disable: false,
          date: "2019.12.23"
        },
        {
          title: "4418",
          userName: "",
          id: "0000",
          disable: false,
          date: "2019.12.23"
        },
        {
          title: "4419",
          userName: "",
          id: "0000",
          disable: false,
          date: "2019.12.23"
        },
      ]
    };
  },
  mounted: {},
  computed: {
    // username() {
    //   // 我们很快就会看到 `params` 是什么
    //   return this.$route.params.username;
    // }
    // getDB() {
    //   // this.$store.commit("getUser");
    //   return console.log("data", localStorage.getItem("userlist"));
    // }
  },
  watch: {
    todos() {},
    userlist() {}
  },
  created() {
    axios.get("http://localhost:3310/nutc/ad").then(response => {
      this.userlist = response.data.DB;
      this.loaded = true;
    });
    //請求並更新狀態
  },
  // created() {
  //   this.init_APP();

  //   // this.$store.commit("increment");
  //   // console.log(this.$store.state.userlist); // -> 1
  //   //    this.$store.commit("getUser");
  //   // console.log("data",localStorage.getItem("userlist"));
  //   // console.log(JSON.parse(  localStorage.getItem("userlist")));
  // },

  methods: {
    // getuserlist(){
    //         this.$store.commit("getUser");

    //    return this.$store.state.userlist
    // },
    // goBack() {
    //   window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    // },
    // toInfo(Names) {
    //   // this.$router.push({
    //   //   name: "userinfo",
    //   //   params: { userName: Names }
    //   // });
    //   this.$router.push({
    //     name: "userinfo",
    //     query: { userName: Names }
    //   });
    // },
    init_APP() {
      fetch("http://localhost:3310/nutc/ad", {
        method: "GET",
        mode: "cors",
        cache: "default"
      }).then(function(response) {
        // return response.json();
        this.userlist = response.json();
      });
      // .then(function(myJson) {
      //   this.userlist=myJson;
      // });
      // this.AppsArray++;
      // this.AppsArray.map(index=>{
      //     <div class="col m5-1">
      //       <div class="card icon-card disable waves-effect">
      //         <div class="card-image">
      //           <i class="hover_icon icon_app_none"></i>
      //         </div>
      //         <div class="card-content">{index.appName}</div>
      //       </div>
      //     </div>
      // })
      // window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  }
};
</script>

<style>
#CardList {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
#tripod {
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  background-color: #f5f5f5;
  background-attachment: fixed;
  background-image: url("./images/tripod_bg.png");
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
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
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  margin-bottom: 4%;
}

.main-card:hover {
  background-color: #c3c3c3;
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
