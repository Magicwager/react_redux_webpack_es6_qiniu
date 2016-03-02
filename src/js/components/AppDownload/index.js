import React from 'react';

require('./css/');

class AppDownload extends React.Component {
  constructor() {
    super()
    this.hide = this.hide.bind(this)
    this.state = {
      display: 'block'
    }
  }
  hide() {
    this.setState({
      display: 'none'
    })
  }
  download() {
    //统计点击量
    const ApiUrl = global.default.ApiUrl
    const signParams = global.default.signParams

    var params = {
      trackId: '56d68c9b2db23d2049e5a219',
      trackType: 'EVENT',
      referrer: document.referrer,
      current: location.href,
      source: device.toUpperCase()
    };
    $.ajax({
      url: ApiUrl + '/v1.1/insights/trackers',
      data: params,
      async: true,
      type: 'POST',
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Sign", signParams(params))
      },
      success: function (data) {
        //todo
      }
    });

    window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.boqii.petlifehouse&ckey=CK1323968426615';
  }
  render() {
    const Display = this.state.display;
    return (
      <div className='appDownload posRelative floatL' style={{display: Display}}>
        <img src='/js/components/AppDownload/img/freeService_04.jpg' />
        <span className='close' onClick={this.hide}>&nbsp;</span>
        <span className='download' onClick={this.download}>&nbsp;</span>
      </div>
    )
  }
}

export default AppDownload
