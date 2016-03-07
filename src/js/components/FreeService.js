import React from 'react'
require('../../css/FreeService')

const device = global.device
class FreeService extends React.Component {
  constructor() {
    super()
    this.goService = this.goService.bind(this)
    this.goShare = this.goShare.bind(this)

    const isWeixin = global.isWeixin
    this.state = {
      wechat: isWeixin || device === 'app',
      showShareHint: 'none'
    }
  }
  goService() {
    //统计点击量
    global.count('56d7fc0f050f31b53b65a0d0');

    const isIphone = global.isIphone
    const ipad = global.ipad
    const isAndroid = global.isAndroid

    if (device == 'h5') {
      window.location.href = 'http://v.boqii.com/merchants/0/a//o/?cityId=3201';
    } else {
      if (isIphone || ipad) {
        var apiurl = encodeURIComponent("boqii://BQMerchantListViewController/bqh5");

        $("#forms").attr("action", apiurl).submit();
      } else if (isAndroid) {
        var param = 'INDEX=' + 4;
        var path = "com.boqii.petlifehouse.activities.NewNearListActivity";
        Boqii.Jump(path, param);
      }
    }
  }
  goShare() {
    //统计点击量
    global.count('56d7fc4ef1936ed23bf40e70');

    let status = this.state.showShareHint == 'none' ? 'block' : 'none'
    this.setState({
      showShareHint: status
    })
  }
  render() {
    return (
      <div className='freeService'>
        <img src={require('../../img/freeService_05.jpg')} />
        <img src={require('../../img/freeService_06.jpg')} />
        <img src={require('../../img/freeService_07.jpg')} />
        <div className='posRelative floatL'>
          {
            this.state.wechat ?
              <div>
                <img src={require('../../img/freeService_share.jpg')} />
                <span className='goService' onClick={this.goService}>&nbsp;</span>
                <span className='goShare' onClick={this.goShare}>&nbsp;</span>
              </div>
            :
              <div>
                <img src={require('../../img/freeService_noshare.jpg')} />
                <span className='goService_noshare' onClick={this.goService}>&nbsp;</span>
              </div>
          }
        </div>
        <img src={require('../../img/freeService_08.jpg')} />
        <img src={require('../../img/freeService_09.jpg')} />
        <img src={require('../../img/freeService_10.jpg')} />
        <img src={require('../../img/freeService_11.jpg')} />
        <img src={require('../../img/freeService_12.jpg')} />
        <img src={require('../../img/freeService_13.jpg')} />
        <div className='clear'></div>
        <div className='shareHint' style={{display: this.state.showShareHint}}>
          <div className='posRelative'>
            <img src={require('../../img/share_hint.png')} />
            <span className='close' onClick={this.goShare}>&nbsp;</span>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = FreeService
