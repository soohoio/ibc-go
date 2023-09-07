(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{644:function(e,t,n){"use strict";n.r(t);var r=n(0),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"relayer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#relayer"}},[e._v("#")]),e._v(" Relayer")]),e._v(" "),n("h2",{attrs:{id:"pre-requisites-readings"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisites-readings"}},[e._v("#")]),e._v(" Pre-requisites Readings")]),e._v(" "),n("ul",[n("li",{attrs:{prereq:""}},[n("RouterLink",{attrs:{to:"/ibc/overview.html"}},[e._v("IBC Overview")])],1),e._v(" "),n("li",{attrs:{prereq:""}},[n("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/docs/core/08-events.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Events"),n("OutboundLink")],1)])]),e._v(" "),n("h2",{attrs:{id:"events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" Events")]),e._v(" "),n("p",[e._v("Events are emitted for every transaction processed by the base application to indicate the execution\nof some logic clients may want to be aware of. This is extremely useful when relaying IBC packets.\nAny message that uses IBC will emit events for the corresponding TAO logic executed as defined in\nthe "),n("RouterLink",{attrs:{to:"/ibc/events.html"}},[e._v("IBC events document")]),e._v(".")],1),e._v(" "),n("p",[e._v("In the SDK, it can be assumed that for every message there is an event emitted with the type "),n("code",[e._v("message")]),e._v(",\nattribute key "),n("code",[e._v("action")]),e._v(", and an attribute value representing the type of message sent\n("),n("code",[e._v("channel_open_init")]),e._v(" would be the attribute value for "),n("code",[e._v("MsgChannelOpenInit")]),e._v("). If a relayer queries\nfor transaction events, it can split message events using this event Type/Attribute Key pair.")]),e._v(" "),n("p",[e._v("The Event Type "),n("code",[e._v("message")]),e._v(" with the Attribute Key "),n("code",[e._v("module")]),e._v(" may be emitted multiple times for a single\nmessage due to application callbacks. It can be assumed that any TAO logic executed will result in\na module event emission with the attribute value "),n("code",[e._v("ibc_<submodulename>")]),e._v(" (02-client emits "),n("code",[e._v("ibc_client")]),e._v(").")]),e._v(" "),n("h3",{attrs:{id:"subscribing-with-tendermint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#subscribing-with-tendermint"}},[e._v("#")]),e._v(" Subscribing with Tendermint")]),e._v(" "),n("p",[e._v("Calling the Tendermint RPC method "),n("code",[e._v("Subscribe")]),e._v(" via "),n("a",{attrs:{href:"https://docs.tendermint.com/main/rpc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint's Websocket"),n("OutboundLink")],1),e._v(" will return events using\nTendermint's internal representation of them. Instead of receiving back a list of events as they\nwere emitted, Tendermint will return the type "),n("code",[e._v("map[string][]string")]),e._v(" which maps a string in the\nform "),n("code",[e._v("<event_type>.<attribute_key>")]),e._v(" to "),n("code",[e._v("attribute_value")]),e._v(". This causes extraction of the event\nordering to be non-trivial, but still possible.")]),e._v(" "),n("p",[e._v("A relayer should use the "),n("code",[e._v("message.action")]),e._v(" key to extract the number of messages in the transaction\nand the type of IBC transactions sent. For every IBC transaction within the string array for\n"),n("code",[e._v("message.action")]),e._v(", the necessary information should be extracted from the other event fields. If\n"),n("code",[e._v("send_packet")]),e._v(" appears at index 2 in the value for "),n("code",[e._v("message.action")]),e._v(", a relayer will need to use the\nvalue at index 2 of the key "),n("code",[e._v("send_packet.packet_sequence")]),e._v(". This process should be repeated for each\npiece of information needed to relay a packet.")]),e._v(" "),n("h2",{attrs:{id:"example-implementations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-implementations"}},[e._v("#")]),e._v(" Example Implementations")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/cosmos/relayer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Golang Relayer"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/informalsystems/ibc-rs/tree/master/crates/relayer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hermes"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);