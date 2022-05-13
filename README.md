## Cross Natter for [Natter Away](https://github.com/qasimabdullah404/natter-away)

#### A minimal service to start a cross natter on any natter.

Run:

```
npm install
npm start
```

### cURL requests

```
[POST] curl -d '{"crossNatter":"Awesome!"}' -H 'Content-Type: application/json' http://127.0.0.1:5001/natters/123/cross-natter
[GET]  curl -H 'Content-Type: application/json' http://127.0.0.1:5001/natters/123/cross-natter
```

###### NO DB IMPLEMENTATION YET!
