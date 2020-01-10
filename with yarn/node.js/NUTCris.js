var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;

//http://localhost:3310/

// index.js 執行就建立連線  ORM
const url = 'mongodb://localhost:27017/NUTCris';
const dbName = 'NUTCris';
const client = new MongoClient(url, { useNewUrlParser: true });
client.connect()
  .then((connectedClient) => {
    console.log('NUTCris mongodb is connected');
  })
  .catch(error => {
    console.error(error);
  });
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('好吃的NUTCris底家啦');
});
/* GET home page. */
router.get('/profile', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('profile a resource');
});
///CreateCollection（新增集合）
router.post('/createCollection', function (req, res, next) {
  MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbase = db.db(dbName);
    dbase.createCollection('AD', function (err, res) {
      console.log("建立資料庫集合!");
      db.close();
    });
    res.json({
      state: "建立資料庫集合!",
    });
  });
});


///Create（新增資料）
router.post('/create', function (req, res, next) {
  let data;
  MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    console.error(err.stack);

    var dbase = db.db(dbName);
    dbase.createCollection(dbName, function (err, res) {
      console.log("建立集合!");
      db.close();
    });
    res.json({
      state: "建立集合!",
    });

  });
});

router.post('/addone', function (req, res, next) {
  MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    console.log(JSON.stringify(req.body))
    var dbo = db.db(dbName);
    // var myobj = { name: "菜鸟教程", url: "www.runoob" };
    var myobj = {
      "store": ["大元壽司"],
      "Sun": ["08:00", "22:30"],
      "Mon": ["08:00", "22:30"],
      "Tue": ["08:00", "22:30"],
      "Wed": ["08:00", "22:30"],
      "Thu": ["08:00", "22:30"],
      "Fri": ["08:00", "22:30"],
      "Sat": ["08:00", "22:30"]
    };
    dbo.collection(dbName).insertOne(req.body, function (err, res) {
      if (err) throw err;
      console.log("store插入成功");
      db.close();
    });
    res.json({
      state: "store插入成功!",
    });
  });
});

router.post('/add', function (req, res, next) {
  MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db(dbName);
    console.log(JSON.stringify(req.body))
    dbo.collection(dbName).insertMany(req.body, function (err, res) {
      if (err) throw err;
      // console.log("插入的文档数量为: " + res.insertedCount);
      db.close();
    });
    res.json({
      state: "文档插入成功!",
    });
  });
});
router.post('/addstore', function (req, res, next) {
  MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db(dbName);
    console.log(JSON.stringify(req.body))

    dbo.collection(dbName).insertMany(req.body, function (err, res) {
      if (err) throw err;
      // console.log("插入的文档数量为: " + res.insertedCount);
      db.close();
    });
    res.json({
      state: "文档插入成功!",
    });
  });
});



///Read（讀取）
router.get('/read', function (req, res, next) {
  let data;
  MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db(dbName);
    dbo.collection(dbName).find({}).toArray(function (err, result) { // 返回集合中所有数据
      data = result;
      console.log(result);
      db.close();
      res.json({
        result
      });
    });
  });
});


///Update（更新）
router.get('/update', function (req, res, next) {
  MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db(dbName);
    var whereStr = { "store": '大元壽司' };  // 查询条件
    var updateStr = { $set: { "store": "大元壽司" } };
    dbo.collection(dbName).updateOne(whereStr, updateStr, function (err, res) {
      if (err) throw err;
      console.log("store更新成功");
      db.close();
    });
    res.json({
      state: "store更新成功!",
    });
  });
});

///Set（管你有沒有都要更新）記得戴上所有資料
//https://www.docs4dev.com/docs/zh/mongodb/v3.6/reference/reference-method-db.collection.update.html#db.collection.updateOne
router.post('/set', function (req, res, next) {
  MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db(dbName);
    var whereStr = req.body.storeName;  // 查询条件
    var updateStr = {
      $set: req.body.newData
    };
    var upsert = { upsert: true };
    dbo.collection(dbName).updateOne(whereStr, updateStr, upsert, function (err, res) {
      if (err) throw err;
      console.log("使用upsert操作更新文檔，並確保創建不存在的文檔成功");
      db.close();
    });
    res.json({
      state: "使用upsert操作更新文檔，並確保創建不存在的文檔成功!",
    });
  });
});

///Delete（刪除）
//https://www.docs4dev.com/docs/zh/mongodb/v3.6/reference/crud.html#mongodb-crud-%E6%93%8D%E4%BD%9C
router.post('/delete', function (req, res, next) {
  MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db(dbName);
    // var whereStr = { "store": '大元壽司' };  // 查询条件
    console.log(JSON.stringify(req.body))
    dbo.collection(dbName).deleteMany(req.body, function (err, res) {
      if (err) throw err;
      db.close();
    });
    res.json({
      state: "store刪除成功!",
    });
  });
});








///Set（管你有沒有都要更新，沒有資料就建立）記得戴上所有資料
//https://www.docs4dev.com/docs/zh/mongodb/v3.6/reference/reference-method-db.collection.update.html#db.collection.updateOne
router.post('/ad', function (req, res, next) {
  MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db(dbName);
    var whereStr = {"title":req.body.title};  // 查询条件
    var updateStr = {
      $set: req.body
    };
    var upsert = { upsert: true };
    dbo.collection("AD").updateOne(whereStr, updateStr, upsert, function (err, res) {
      if (err) throw err;
      console.log("使用upsert操作更新文檔，並確保創建不存在的文檔成功");
      db.close();
    });
    res.json({
      state: "更新廣告成功"+req.body.title+"到期日"+req.body.expire_time,
    });
  });
});

///Read（讀取）
router.get('/ad', function (req, res, next) {
  let data;
  MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db(dbName);
    dbo.collection("AD").find({}).toArray(function (err, result) { // 返回集合中所有数据
      data = result;
      console.log(result);
      db.close();
      res.json(
        {
          "api": "廣告訊息",
          "excutionResult": "success",
          "DB": result
        });
    });
  });
});


module.exports = router;

  //CRUD 是Create（新增）, Read（讀取）, Update（更新） 跟Delete（刪除）
  // query : update的查询条件，类似sql update查询内where后面的。
  // update : update的对象和一些更新的操作符（如$,$inc...）等，也可以理解为sql -
  // update查询内set后面的
  // upsert : 可选，这个参数的意思是，如果不存在update的记录，是否插入objNew,true为插入，默认是false，不插入。
  // multi : 可选，mongodb 默认是false,只更新找到的第一条记录，如果这个参数为true,就把按条件查出来多条记录全部更新。
  // writeConcern :可选，抛出异常的级别。
