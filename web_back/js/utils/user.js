var user={
    /**
     * 
     * @param {*} userName 用户名
     * @param {*} password 密码
     * @param {*} callBack 回调函数
     */
    login:function(userName,password,callBack){
        $.post(
            UrlList.user_login,
            {
                user_name:userName,
                password:password
            },
            function(res){
                callBack(res)
            }
        );
    },
    logout:function(callBack){
        $.post(UrlList.user_logout,function(res){
            callBack(res);
        })
    },
    getInfo:function(callBack){
        $.get(UrlList.user_grtInfo,function(res){
            callBack(res)
        })
    }
}