import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
	blockcount: [],
    blockchainInfo: {},
    miningInfo: {},
    peerInfo: {},
	blockhash: [],
	connectioncount: [],
	block: []
  };
  componentDidMount() {
	this.getBlockCount();
    this.getBlockchainInfo();
    this.getMiningInfo();
    this.getPeerInfo();
	this.getBlockHash();
	this.getConnectionCount();
	this.getBlock();
  }
  getBlockCount = () => {
    axios
      .get(`/api/getblockcount`)
      .then(res => {
        const data = res.data;
        const result = data.result;
        this.setState({ blockcount: result });
      })
      .catch(err => console.log(err));
  };
  getBlockchainInfo = () => {
    axios
      .get(`/api/getblockchaininfo`)
      .then(res => {
        const data = res.data;
        const result = data.result;
        this.setState({ blockchainInfo: result });
      })
      .catch(err => console.log(err));
  };
  getMiningInfo = () => {
    axios
      .get(`/api/getmininginfo`)
      .then(res => {
        const data = res.data;
        const result = data.result;
        this.setState({ miningInfo: result });
      })
      .catch(err => console.log(err));
  };
  getPeerInfo = () => {
    axios
      .get(`/api/getpeerinfo`)
      .then(res => {
        const data = res.data;
        const result = data.result;
        this.setState({ peerInfo: result });
      })
      .catch(err => console.log(err));
  };
  getBlockHash = () => {
    axios
      .get(`/api/getbestblockhash`)
      .then(res => {
        const data = res.data;
        const result = data.result;
        this.setState({ peerInfo: result });
      })
      .catch(err => console.log(err));
  };
  getConnectionCount = () => {
    axios
      .get(`/api/getconnectioncount`)
      .then(res => {
        const data = res.data;
        const result = data.result;
        this.setState({ peerInfo: result });
      })
      .catch(err => console.log(err));
  };
  getBlock = () => {
    axios
      .get(`/api/getblock/000000000000000000032cadd9cbf0cafe791df3e61fd42be7c09d067dc996e6`)
      .then(res => {
        const data = res.data;
        const result = data.result;
        this.setState({ peerInfo: result });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="App">
        <h1>Simple Bitcoin Explorer</h1>
        <p>Latest block: {this.state.blockcount}</p>
		<p>Block hash: {this.state.blockchainInfo.bestblockhash}</p>
        <p>Mining Difficulty: {this.state.miningInfo.difficulty}</p>
        <p>Number of Peers: {this.state.peerInfo.length}</p>
		
      </div>
    );
  }
}

export default App;
