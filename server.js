var http = require('http');
var fs = require('fs');
var url = require('url');
 
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(queryData.id);
    var title = queryData.id;
    if(_url == '/'){
      _url = '/accountView.html';
      fs.readFile(_url,'UTF-8',function(err,data){
        response.writeHead(200);
        response.write(data);
        response.end();
      });
    }

    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    console.log(_url);
    var template =`
    <html>
    <head>
        <meta charset="utf-8" content="HTML, CSS, JavaScript">

        <style>

          label{
            display:flex;
            
            flex-direction:row;
            align-items: center;
            margin-bottom:3%;
            margin-top:3%;
          }
          textarea{
            width: 100%;
            height: 10em;                       
            border: solid 1px;
            resize: none;
          }

          #logoBox{
            display: flex;
            margin-top:10%;
            margin-bottom:5%;
            align-items: center;
            flex-direction: column;
          }
          .inputContain{
            display:flex;
            width:80%;
            flex-direction: column;
            padding-left: 10%;
            padding-right: 10%;
          }

          .inputContain_birth{
            display:flex;
            flex-direction:row;
            justify-content: space-between;
            align-content: space-around;
          }


          .logoImg{
            width:30%;
          }
          .label_tag{
            font-size:3em;
          }

          .label_tag_input{
            height:6em;
          }
          #accountYear{
            width:30%;
          }
          #accountMonth{
            width:30%;
          }
          #accountDay{
            width:30%;
          }
        </style>
        <script>
            function openImg(tagId){
              var image =document.getElementById(tagId.id);
              console.log(image.checked)
              if(image.checked == true){
                  console.log("true");
                  image.style.backgroundImage = "url('./Data/unchecked.png')";
              }else {
                  console.log("false");
                  image.style.backgroundImage = "url('./Data/checked.png')";
              }
            }
            
            function nextpage(){
              
            }
        </script>
    </head>
    <body>
    
    <title>${title}</title>
    
      <div id="flame">
        <div id="container">
          <div id="logoBox">
            <img class="logoImg" src="./Data/team_logo.png">
          </div>

          <form action="/form_post_receiver" method='POST' class="contain"className="checkForm">
            <div class="inputContain">
              <label class="label_tag" for="accountId" >아아디</label>
              <input class="label_tag_input" text="text" name='accountId' id="accountId">
            </div>

            <div class="inputContain">
              <label class="label_tag"for="accountId">비밀번호</label>
              <input class="label_tag_input" text="text" name='accountPw' id="accountPw">
            </div>
            
            <div class="inputContain">
              <label class="label_tag"for="accountId">비밀번호 재확인</label>
              <input class="label_tag_input" text="text" id="accountPwRe">
            </div>

            <div class="inputContain">
              <label class="label_tag"for="accountId">이름</label>
              <input class="label_tag_input" text="text" id="accountName">
            </div>
            
            <div class="inputContain">
              <label class="label_tag"for="accountId">생년월일</label>
              <div class="inputContain_birth">
                <input class="label_tag_input" type="text" value="년도" text="text" id="accountYear">
                <label for="accountMonth"></label>
                <select id="accountMonth">
                  <option value="1month" >1월</option>
                  <option value="2month" >2월</option>
                  <option value="3month" >3월</option>
                  <option value="4month" >4월</option>
                  <option value="5month" >5월</option>
                  <option value="6month" >6월</option>
                  <option value="7month" >7월</option>
                  <option value="8month" >8월</option>
                  <option value="9month" >9월</option>
                  <option value="10month" >10월</option>
                  <option value="11month" >11월</option>
                  <option value="12month" >12월</option>
                </select>
                <input class="label_tag_input" type="text" value="년도" text="text" id="accountDay">
              </div>
            </div>

            <div class="inputContain">
              <label class="label_tag"for="accountId">이메일</label>
              <input class="label_tag_input" text="text" id="accountName">
            </div>
              
          </form>
        </div>
      </div>
    </body>
</html>
    `
    response.end(template);
 
});
app.listen(3000);