import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
import Constants from '../variables/Constants'



// IP info access tocken 7d336261dbe2f2

class Scanner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      delay: 2000,
      result: ' ',
      statusUrl: 'https://cdn.dribbble.com/users/1221795/screenshots/5127790/main-gif-drrible.gif',
      isPresent: false,
      details: '',
      displayMessage: "Scan the QR code by placing the product QR code in front of the camera",
      dialogColor: 'gray',
      productDetails: {},
      modileCameraCardDisplay: "",
      displayvalidationCard: "none"
    }
    // https://dribbble.com/shots/3576821-Scan-and-Climb
    this.handleScan = this.handleScan.bind(this);
    this.okClickHandler = this.okClickHandler.bind(this);
  }


  handleScan(res) {
    console.log('----')
    this.setState({
      result: res,
    })

    // Backend data
    var data = {
      'data': this.state.result,
      'lat': sessionStorage.getItem('lat'),
      'long': sessionStorage.getItem('long')
    }

    const { DOMAIN_URL, VALIDITY_API_PATH } = Constants

    {/*
      Check the length of string  like "this.state.result.length === 64"  
      so that the unwanted strings  reaching server can be avoided
    */}

    if (this.state.result !== null && this.state.result.length === 64) {

      fetch(DOMAIN_URL + VALIDITY_API_PATH, {
        method: 'POST',
        body: JSON.stringify(data)
      }).then((data) => data.json())
        .then((json) => {
          // Response from backend
          console.log("json.isPresent", json.isPresent);
          console.log("json.data", json.data.data.productname);
          //console.log(json.details.data.productname);

          this.setState({
            isPresent: json.isPresent,
            details: json.details,
            productDetails: json.data.data
          })
          if (json.isPresent === true) {
            this.setState({
              statusUrl: 'https://cdn.dribbble.com/users/900431/screenshots/2346622/green-check.gif',
              displayMessage: 'The product is authenticated. It is a valid product and safe to use',
              isPresent: json.isPresent,
              dialogColor: 'green',
              modileCameraCardDisplay: "none",
              displayvalidationCard: " "
            })

          }

          else if (json.isPresent === false) {
            this.setState({
              statusUrl: 'https://cdn.dribbble.com/users/179979/screenshots/1747462/warning_skull.gif',
              displayMessage: 'The product seems to be counterfeit it is adviced not to use this product',
              isPresent: json.isPresent,
              dialogColor: 'orange',
              modileCameraCardDisplay: "none",
              displayvalidationCard: " "
            })
          }

          else {  // Default display GIF
            this.setState({
              statusUrl: 'https://cdn.dribbble.com/users/1221795/screenshots/5127790/main-gif-drrible.gif',
              dialogColor: 'black',
              displayMessage: "Scan the QR code by placing the product QR code in front of the camera",
              displayvalidationCard: "none"
            })
          }
        })
        .catch((err) => console.log(err))
    }
    else {
      console.log('waiting')
    }


  }

  handleError(err) {
    console.error(err)
  }

  okClickHandler(event) {
    this.setState({
      statusUrl: 'https://cdn.dribbble.com/users/1221795/screenshots/5127790/main-gif-drrible.gif',
      dialogColor: 'gray',
      displayMessage: "Scan the QR code by placing the product QR code in front of the camera",
      productDetails: {},
      modileCameraCardDisplay: " ",
      displayvalidationCard: "none"
    })
  }



  render() {
    // Styling for Scanner
    const previewStyle = {
      height: 400,
      width: 420,
    }
    return (

<<<<<<< HEAD:validity-check/src/AppComponents/Scanner.jsx
      <div>
            <QrReader
=======
      <div class="columns">
        {/**First column For Computers*/}
        <div class="column hide_block">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title ">
                Scan the QR Code
              </p>
              <a href="#" class="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </a>
            </header>
            <div class="card-content">
              <div class="content">
                {/*Scanner block*/}
                <QrReader
>>>>>>> d095b7df9f60915656bd27b45bcfb0e22161ba9a:validity-check/src/components/Scanner.jsx
                  delay={this.state.delay}
                  style={previewStyle}
                  onError={this.handleError}
                  onScan={this.handleScan}
                  facingMode="rear"
                />
<<<<<<< HEAD:validity-check/src/AppComponents/Scanner.jsx
      {this.state.result}
=======
                <table class="table is-striped is-bordered">
                  <thead>
                    <th>ID</th>
                    <th>Valid</th>
                    <th>Details</th>
                  </thead>
                  <tr>
                    <td>{this.state.result}</td>
                    <td>{this.state.isPresent}</td>
                    <td>{this.state.details}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/** For Mobile devices */}
        <div class="column hide_desktop_block">
          <div class="card" style={{ display: this.state.modileCameraCardDisplay }}>
            <header class="card-header">
              <p class="card-header-title ">
                Scan the QR Code
              </p>
              <a href="#" class="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </a>
            </header>
            <div class="card-content">
              <div class="content">
                {/*Scanner block*/}
                <QrReader
                  delay={this.state.delay}
                  style={previewStyle}
                  onError={this.handleError}
                  onScan={this.handleScan}
                  facingMode="rear"
                />
                <table class="table is-striped is-bordered">
                  <thead>
                    <th>ID</th>
                    <th>Valid</th>
                    <th>Details</th>
                  </thead>
                  <tr>
                    <td>{this.state.result}</td>
                    <td>{this.state.isPresent}</td>
                    <td>{this.state.details}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>


        <div class="column hide_block">
          <div>
            <Validationcard
              statusUrlImage={this.state.statusUrl}
              displayMessage={this.state.displayMessage}
              dialogColor={this.state.dialogColor}
              isPresent={this.state.isPresent}
              resultCode={this.state.result}
              productDetails={this.state.productDetails}
            />
            <br />
            <a class="button is-link is-rounded" onClick={this.okClickHandler}>OK</a>
          </div>
        </div>


        <div class="column hide_desktop_block">
          <div style={{ display: this.state.displayvalidationCard }}>
            <Validationcard
              statusUrlImage={this.state.statusUrl}
              displayMessage={this.state.displayMessage}
              dialogColor={this.state.dialogColor}
              isPresent={this.state.isPresent}
              resultCode={this.state.result}
              productDetails={this.state.productDetails}
            />
            <br />
            <a class="button is-link is-rounded" onClick={this.okClickHandler}>OK</a>
          </div>
        </div>
>>>>>>> d095b7df9f60915656bd27b45bcfb0e22161ba9a:validity-check/src/components/Scanner.jsx
      </div>

    )
  }
}
export default Scanner;