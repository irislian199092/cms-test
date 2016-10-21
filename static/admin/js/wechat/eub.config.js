//define(function(require,exports,module){
var CONFIG = {
    REALMNAME:document.location.href.split('/')[2],
    MASS:{
        EDITOR:{
            CHOICE:'选择',
            TEXT:'文字',
            IMAGES:'图片', 
            VOICE:'语音',
            VIDEO:'视频',
            NEWS:'图文消息'
        },
        EDITOR_URL:{
            CHOICE:"http://" + document.location.href.split("/")[2] + "/wechat/material/editor?",//选择 图文 视频 音频 图片
            UPLOAD_URL:'data/data2.json'//上传路径
        }
    },
    MENU:{

    },
    MEDIA:{
        IMAGES:{
            EDITOR:'编辑',
            MOBILE_PACKET:'移动分组',
            IMAGES_DELETE:'删除'
        },
        MEDIA_URL:{
            
        }
    }
}
//})
