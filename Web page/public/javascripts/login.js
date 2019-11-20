var code;
        var username=$('.Name');
        var password=$('.password');
        var rname=$('.rname');
        var rpwd=$('.rpwd');
        var btn=document.getElementById('btn');

        function createCode(){
            code='';
            var codeLength=4;
            var checkCode=document.getElementById('code');
            var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
            for(var i=0; i<codeLength;i++){
                var ix=Math.floor(Math.random()*36);
                code+=random[ix];
            }
            checkCode.value=code;
            document.getElementById('code').innerHTML=code
            
        }
        createCode()
        function validate(){
            var inputCode=document.getElementById('input').value.toUpperCase();
            if (inputCode.length<=0){
                alert('请输入验证码!');
            }else if(inputCode != code){
                alert('验证码错误!');
                createCode()
                document.getElementById('input').value='';
                return;
            }else{
                return true;
            }
        }
        function Login(){
            succss.on('click', function () {
            $('.c1').css({
                display: 'none'
            })
            $('.c2').css({
                display: 'none'
            })


        })
        }

        btn.onclick=function(){
            
            if(validate()){
                Login()
            }
            
            console.log(password.val());
            $.ajax({
                url:'/denglu.do',
                type:'get',
                data:{
                    'username':username.val(),
                    'password':password.val()
                },
                success:(data)=>{
                
                if(data[0].user_name){
                    let text = data[0].user_name;
                $('.login').html(text+'您好');
                $('.register').html('退出');
                sessionStorage.setItem('code',data[0].user_name)
                }else{
                    alert(data)
                }


                

                    
                }
            })
        }
        // console.log($('#reg'));


        $(window).on('load',function(){
            if(sessionStorage.getItem('code')){
                let text=sessionStorage.getItem('code')
                $('.login').html(text+'您好');
                $('.register').html('退出');
            }
        })
        $('.register').on('click',function(){
            sessionStorage.removeItem('code')
            window.location.reload()
        })

        $('#reg').on('click',function(){
            console.log(111);
            
            
            $.ajax({
                url:'/reg.do',
                type:'get',
                data:{
                    'username':rname.val(),
                    'password':rpwd.val()
                },
                success:(data)=>{
                    alert(data)
                    console.log(data);
                    
                }
            })
        })