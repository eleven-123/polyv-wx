//index.js
import polyv from '../../utils/polyv.js';

Page({
  data: {
    src: '',
  },

  onReady: function() {
    let vid = '3828390191faee6d7d4f9b9acb8b646d_3';

    /*获取视频数据*/
    let obj = {
      vid: vid,
      viewerInfo: {
        viewerId: '38770077709', // 播放观看日志学员ID
        viewerName: 'polyv' // 播放观看日志学员昵称
      },
      callback: videoInfo => {
        if (videoInfo.type === 'error') {
          console.log('videoInfo', videoInfo);
          return;
        }

        this.setData({
          src: videoInfo.src[0],
        });
      }
    };

    this.player = polyv.getVideo(obj);
    // setInterval(() => {
    //   const data = this.player.j2s_realPlayStatus();
    //   console.info(data, '---data---');
    // }, 3000);
  },

  timeupdate: function(e) {
    this.player.timeUpdate(e);
  },

  onUnload: function() {
    this.player.destroy();
  }
});


