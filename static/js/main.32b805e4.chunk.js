(window["webpackJsonpcryptocurrency-ticker-app"]=window["webpackJsonpcryptocurrency-ticker-app"]||[]).push([[0],{18:function(e,t,n){e.exports=n(44)},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(16),i=n.n(r),o=(n(23),n(24),n(2)),u=n(3),l=n(5),s=n(4),p=n(6),h=(n(25),n(26),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.id,n=e.name,c=e.symbol,r=e.price_usd,i=e.percent_change_1h,o=e.percent_change_24h,u=e.percent_change_7d;return a.a.createElement("li",{className:"cryptocurrency "+t},a.a.createElement("p",{className:"cryptocurrency-name"},n,"(",c,")"),a.a.createElement("h1",null,"$",(+r).toFixed(2)),a.a.createElement("p",null,i,"% 1hr"),a.a.createElement("p",null,o,"% 24hrs"),a.a.createElement("p",null,u,"% 7days"))}}]),t}(c.Component)),m=n(17),d=n.n(m),y=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).state={data:[{id:"bitcoin",name:"Bitcoin",symbol:"BTC",price_usd:"1",percent_change_1h:"0",percent_change_24h:"0",percent_change_7d:"0"},{id:"ethereum",name:"Ethereum",symbol:"ETH",price_usd:"1",percent_change_1h:"0",percent_change_24h:"0",percent_change_7d:"0"},{id:"litecoin",name:"Litecoin",symbol:"LTC",price_usd:"1",percent_change_1h:"0",percent_change_24h:"0",percent_change_7d:"0"}]},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.fetchCryptocurrencyData(),this.interval=setInterval(function(){return e.fetchCryptocurrencyData()},6e4)}},{key:"fetchCryptocurrencyData",value:function(){var e=this;d.a.get("https://api.coinmarketcap.com/v1/ticker/?limit=10").then(function(t){var n=["bitcoin","ethereum","litecoin"],c=t.data.filter(function(e){return n.includes(e.id)});e.setState({data:c})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state.data.map(function(e){return a.a.createElement(h,{data:e,key:e.id})});return a.a.createElement("div",{className:"tickers-container"},a.a.createElement("ul",{className:"tickers"},e),a.a.createElement("p",null,"Information updated every minute courtesy of coinmarketcap.com"))}}]),t}(c.Component);var _=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"App-header"},a.a.createElement("h2",null,"Cryptocurrency Ticker")),a.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.32b805e4.chunk.js.map