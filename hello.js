var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
const path = require('path');
 
var app = http.createServer(function(request,response){

    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url,true).pathname;
    
    // var title = queryData.id;
    // console.log("queryData.id : " + queryData.id + "| pathname :" + pathname);
    // console.log("=================");
    
    //pathname의 경로가 아무것도 없을 때 
    try{
      if(pathname === '/'){
        //querydata.id 의 값으로 아무것도 들어오지 않았을 때 
        if(queryData.id === undefined  || queryData.id === 'accountView'){
          // accountView.html 을 URl로 지정한다.
          _url = './accountView.html';
        }

        // queryData.id의 값으로 signupAgreeView 입력됐을 떄 
        else if(queryData.id === 'signupAgreeView'){
          // singupAgreeView.html 을 URL로 지정한다.
          _url = './signupAgreeView.html';
        }

        // queryData.id의 값으로 signupInputView 입력됐을 떄 
        else if(queryData.id === 'signupInputView'){
          // singupAgreeView.html 을 URL로 지정한다.
          _url = './signupInputView.html';
        }

        // queryData.id의 값으로 find_accountView 입력됐을 떄 
        else if(queryData.id === 'find_accountView'){
          // singupAgreeView.html 을 URL로 지정한다.
          _url = './find_accountView.html';
        }

        // queryData.id의 값으로 find_PasswordView 입력됐을 떄 
        else if(queryData.id === 'find_PasswordView'){
          // singupAgreeView.html 을 URL로 지정한다.
          _url = './find_PasswordView.html';
        }

        // queryData.id의 값으로 signupEndView 입력됐을 떄 
        else if(queryData.id === 'signupEndView'){
          // singupEndView.html 을 URL로 지정한다.
          _url = './signupEndView.html';
          var body='';

          //데이터 계속 전송을 받고 있을 때 - data를 통해서
          request.on('data',function(data){
            body = body + data;
          });

        
          //데이터 전송이 종료됐을 떄
          request.on('end',function(){
            var post = qs.parse(body);
            console.log(post);
          });

          // 데이터 잘 넘어오는지 확인할 때 처리했던 것
          // response.writeHead(200);
          // response.end('Success');
        }

        // _URL에 따라 해당 파일을 읽어오고 클라이언트에게 보내준다.
        fs.readFile(_url,'utf8',function(err,data){
          response.writeHead(200, { 'Content-Type' :'text/html'});
          response.write(data);
          response.end();
        });
      }


      // pathName이 달라졌을때 용으로 만들어 본 것 
      // else if(pathname === '/account'){
 
      // }
      // else{
      //   response.writeHead(404);
      //   response.end('Not found');
      // }
      
    } catch (err){
      console.log(err);
      throw new Error("Error!!!");
    }

});
app.listen(3000);
