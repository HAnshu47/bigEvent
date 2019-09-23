var user={
    /**
     * 
     * @param {*} userName 用户名
     * @param {*} passWord 密码
     * @param {*} callBack 回调函数
     */
    // 用户登录
    login:function(userName,passWord,callBack){
        $.post(
            UrlList.user_login,
            {
                user_name:userName,
                password:passWord
            },
            function(res){
                callBack(res)
            }
        );
    },
    // 用户退出
    logout:function(callBack){
        $.post(UrlList.user_logout,function(res){
            callBack(res);
        })
    },
    // 获取用户信息
    getInfo:function(callBack){
        $.get(UrlList.user_getInfo,function(res){
            callBack(res)
        })
    }
}