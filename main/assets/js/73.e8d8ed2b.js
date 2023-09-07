(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{637:function(e,t,a){"use strict";a.r(t);var o=a(1),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("p",[e._v("The Interchain Accounts module contains the following on-chain parameters, logically separated for each distinct submodule:")]),e._v(" "),a("h2",{attrs:{id:"controller-submodule-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#controller-submodule-parameters"}},[e._v("#")]),e._v(" Controller Submodule Parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Default Value")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("ControllerEnabled")])]),e._v(" "),a("td",[e._v("bool")]),e._v(" "),a("td",[a("code",[e._v("true")])])])])]),e._v(" "),a("h3",{attrs:{id:"controllerenabled"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#controllerenabled"}},[e._v("#")]),e._v(" ControllerEnabled")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("ControllerEnabled")]),e._v(" parameter controls a chains ability to service ICS-27 controller specific logic. This includes the sending of Interchain Accounts packet data as well as the following ICS-26 callback handlers:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("OnChanOpenInit")])]),e._v(" "),a("li",[a("code",[e._v("OnChanOpenAck")])]),e._v(" "),a("li",[a("code",[e._v("OnChanCloseConfirm")])]),e._v(" "),a("li",[a("code",[e._v("OnAcknowledgementPacket")])]),e._v(" "),a("li",[a("code",[e._v("OnTimeoutPacket")])])]),e._v(" "),a("h2",{attrs:{id:"host-submodule-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#host-submodule-parameters"}},[e._v("#")]),e._v(" Host Submodule Parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Default Value")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("HostEnabled")])]),e._v(" "),a("td",[e._v("bool")]),e._v(" "),a("td",[a("code",[e._v("true")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("AllowMessages")])]),e._v(" "),a("td",[e._v("[]string")]),e._v(" "),a("td",[a("code",[e._v('["*"]')])])])])]),e._v(" "),a("h3",{attrs:{id:"hostenabled"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hostenabled"}},[e._v("#")]),e._v(" HostEnabled")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("HostEnabled")]),e._v(" parameter controls a chains ability to service ICS-27 host specific logic. This includes the following ICS-26 callback handlers:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("OnChanOpenTry")])]),e._v(" "),a("li",[a("code",[e._v("OnChanOpenConfirm")])]),e._v(" "),a("li",[a("code",[e._v("OnChanCloseConfirm")])]),e._v(" "),a("li",[a("code",[e._v("OnRecvPacket")])])]),e._v(" "),a("h3",{attrs:{id:"allowmessages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#allowmessages"}},[e._v("#")]),e._v(" AllowMessages")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("AllowMessages")]),e._v(" parameter provides the ability for a chain to limit the types of messages or transactions that hosted interchain accounts are authorized to execute by defining an allowlist using the Protobuf message type URL format.")]),e._v(" "),a("p",[e._v("For example, a Cosmos SDK-based chain that elects to provide hosted Interchain Accounts with the ability of governance voting and staking delegations will define its parameters as follows:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"JnF1b3Q7cGFyYW1zJnF1b3Q7OiB7CiAgJnF1b3Q7aG9zdF9lbmFibGVkJnF1b3Q7OiB0cnVlLAogICZxdW90O2FsbG93X21lc3NhZ2VzJnF1b3Q7OiBbJnF1b3Q7L2Nvc21vcy5zdGFraW5nLnYxYmV0YTEuTXNnRGVsZWdhdGUmcXVvdDssICZxdW90Oy9jb3Ntb3MuZ292LnYxYmV0YTEuTXNnVm90ZSZxdW90O10KfQo="}}),e._v(" "),a("p",[e._v("There is also a special wildcard "),a("code",[e._v('"*"')]),e._v(" value which allows any type of message to be executed by the interchain account. This must be the only value in the "),a("code",[e._v("allow_messages")]),e._v(" array.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"JnF1b3Q7cGFyYW1zJnF1b3Q7OiB7CiAgJnF1b3Q7aG9zdF9lbmFibGVkJnF1b3Q7OiB0cnVlLAogICZxdW90O2FsbG93X21lc3NhZ2VzJnF1b3Q7OiBbJnF1b3Q7KiZxdW90O10KfQo="}})],1)}),[],!1,null,null,null);t.default=s.exports}}]);