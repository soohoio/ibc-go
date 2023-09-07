(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{683:function(e,o,n){"use strict";n.r(o);var t=n(1),c=Object(t.a)({},(function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"localhost-connections"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#localhost-connections"}},[e._v("#")]),e._v(" Localhost connections")]),e._v(" "),n("p",[e._v("The 09-localhost light client module integrates with core IBC through a single sentinel localhost connection.\nThe sentinel "),n("code",[e._v("ConnectionEnd")]),e._v(" is stored by default in the core IBC store.")]),e._v(" "),n("p",[e._v("This enables channel handshakes to be initiated out of the box by supplying the localhost connection identifier ("),n("code",[e._v("connection-localhost")]),e._v(") in the "),n("code",[e._v("connectionHops")]),e._v(" parameter of "),n("code",[e._v("MsgChannelOpenInit")]),e._v(".")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("ConnectionEnd")]),e._v(" is created and set in store via the "),n("code",[e._v("InitGenesis")]),e._v(" handler of the 03-connection submodule in core IBC.\nThe "),n("code",[e._v("ConnectionEnd")]),e._v(" and its "),n("code",[e._v("Counterparty")]),e._v(" both reference the "),n("code",[e._v("09-localhost")]),e._v(" client identifier, and share the localhost connection identifier "),n("code",[e._v("connection-localhost")]),e._v(".")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ3JlYXRlU2VudGluZWxMb2NhbGhvc3RDb25uZWN0aW9uIGNyZWF0ZXMgYW5kIHNldHMgdGhlIHNlbnRpbmVsIGxvY2FsaG9zdCBjb25uZWN0aW9uIGVuZCBpbiB0aGUgSUJDIHN0b3JlLgpmdW5jIChrIEtlZXBlcikgQ3JlYXRlU2VudGluZWxMb2NhbGhvc3RDb25uZWN0aW9uKGN0eCBzZGsuQ29udGV4dCkgewogIGNvdW50ZXJwYXJ0eSA6PSB0eXBlcy5OZXdDb3VudGVycGFydHkoZXhwb3J0ZWQuTG9jYWxob3N0Q2xpZW50SUQsIGV4cG9ydGVkLkxvY2FsaG9zdENvbm5lY3Rpb25JRCwgY29tbWl0bWVudHR5cGVzLk5ld01lcmtsZVByZWZpeChrLkdldENvbW1pdG1lbnRQcmVmaXgoKS5CeXRlcygpKSkKICBjb25uZWN0aW9uRW5kIDo9IHR5cGVzLk5ld0Nvbm5lY3Rpb25FbmQodHlwZXMuT1BFTiwgZXhwb3J0ZWQuTG9jYWxob3N0Q2xpZW50SUQsIGNvdW50ZXJwYXJ0eSwgdHlwZXMuR2V0Q29tcGF0aWJsZVZlcnNpb25zKCksIDApCgogIGsuU2V0Q29ubmVjdGlvbihjdHgsIGV4cG9ydGVkLkxvY2FsaG9zdENvbm5lY3Rpb25JRCwgY29ubmVjdGlvbkVuZCkKfQo="}}),e._v(" "),n("p",[e._v("Note that connection handshakes are disallowed when using the "),n("code",[e._v("09-localhost")]),e._v(" client type.")])],1)}),[],!1,null,null,null);o.default=c.exports}}]);