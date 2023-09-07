(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{714:function(e,a,t){"use strict";t.r(a);var l=t(1),c=Object(l.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"interfaces"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interfaces"}},[e._v("#")]),e._v(" Interfaces")]),e._v(" "),t("p",[e._v("The callbacks middleware requires certain interfaces to be implemented by the underlying IBC applications and the secondary application. If you're simply wiring up the callbacks middleware to an existing IBC application stack and a secondary application such as "),t("code",[e._v("icacontroller")]),e._v(" and "),t("code",[e._v("x/wasm")]),e._v(", you can skip this section.")]),e._v(" "),t("h2",{attrs:{id:"interfaces-for-developing-the-underlying-ibc-application"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interfaces-for-developing-the-underlying-ibc-application"}},[e._v("#")]),e._v(" Interfaces for developing the Underlying IBC Application")]),e._v(" "),t("h3",{attrs:{id:"packetdataunmarshaler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#packetdataunmarshaler"}},[e._v("#")]),e._v(" "),t("code",[e._v("PacketDataUnmarshaler")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gUGFja2V0RGF0YVVubWFyc2hhbGVyIGRlZmluZXMgYW4gb3B0aW9uYWwgaW50ZXJmYWNlIHdoaWNoIGFsbG93cyBhIG1pZGRsZXdhcmUgdG8KLy8gcmVxdWVzdCB0aGUgcGFja2V0IGRhdGEgdG8gYmUgdW5tYXJzaGFsZWQgYnkgdGhlIGJhc2UgYXBwbGljYXRpb24uCnR5cGUgUGFja2V0RGF0YVVubWFyc2hhbGVyIGludGVyZmFjZSB7CiAgLy8gVW5tYXJzaGFsUGFja2V0RGF0YSB1bm1hcnNoYWxzIHRoZSBwYWNrZXQgZGF0YSBpbnRvIGEgY29uY3JldGUgdHlwZQogIFVubWFyc2hhbFBhY2tldERhdGEoW11ieXRlKSAoaW50ZXJmYWNle30sIGVycm9yKQp9Cg=="}}),e._v(" "),t("p",[e._v("The callbacks middleware "),t("strong",[e._v("requires")]),e._v(" the underlying ibc application to implement the "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.3.0/modules/core/05-port/types/module.go#L142-L147",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("PacketDataUnmarshaler")]),t("OutboundLink")],1),e._v(" interface so that it can unmarshal the packet data bytes into the appropriate packet data type. This allows usage of interface functions implemented by the packet data type. The packet data type is expected to implement the "),t("code",[e._v("PacketDataProvider")]),e._v(" interface (see section below), which is used to parse the callback data that is currently stored in the packet memo field for "),t("code",[e._v("transfer")]),e._v(" and "),t("code",[e._v("ica")]),e._v(" packets as a JSON string. See its implementation in the "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.3.0/modules/apps/transfer/ibc_module.go#L303-L313",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("transfer")]),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.3.0/modules/apps/27-interchain-accounts/controller/ibc_middleware.go#L258-L268",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("icacontroller")]),t("OutboundLink")],1),e._v(" modules for reference.")]),e._v(" "),t("p",[e._v("If the underlying application is a middleware itself, then it can implement this interface by simply passing the function call to its underlying application. See its implementation in the "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.3.0/modules/apps/29-fee/ibc_middleware.go#L368-L378",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("fee middleware")]),t("OutboundLink")],1),e._v(" for reference.")]),e._v(" "),t("h3",{attrs:{id:"packetdataprovider"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#packetdataprovider"}},[e._v("#")]),e._v(" "),t("code",[e._v("PacketDataProvider")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gUGFja2V0RGF0YVByb3ZpZGVyIGRlZmluZXMgYW4gb3B0aW9uYWwgaW50ZXJmYWNlcyBmb3IgcmV0cmlldmluZyBjdXN0b20gcGFja2V0IGRhdGEgc3RvcmVkIG9uIGJlaGFsZiBvZiBhbm90aGVyIGFwcGxpY2F0aW9uLgovLyBBbiBleGlzdGluZyBwcm9ibGVtIGluIHRoZSBJQkMgbWlkZGxld2FyZSBkZXNpZ24gaXMgdGhlIGluYWJpbGl0eSBmb3IgYSBtaWRkbGV3YXJlIHRvIGRlZmluZSBpdHMgb3duIHBhY2tldCBkYXRhIHR5cGUgYW5kIGluc2VydCBwYWNrZXQgc2VuZGVyIHByb3ZpZGVkIGluZm9ybWF0aW9uLgovLyBBIHNob3J0IHRlcm0gc29sdXRpb24gd2FzIGludHJvZHVjZWQgaW50byBzZXZlcmFsIGFwcGxpY2F0aW9uJ3MgcGFja2V0IGRhdGEgdG8gdXRpbGl6ZSBhIG1lbW8gZmllbGQgdG8gY2FycnkgdGhpcyBpbmZvcm1hdGlvbiBvbiBiZWhhbGYgb2YgYW5vdGhlciBhcHBsaWNhdGlvbi4KLy8gVGhpcyBpbnRlcmZhY2VzIHN0YW5kYXJkaXplcyB0aGF0IGJlaGF2aW91ci4gVXBvbiByZWFsaXphdGlvbiBvZiB0aGUgYWJpbGl0eSBmb3IgbWlkZGxld2FyZSdzIHRvIGRlZmluZSB0aGVpciBvd24gcGFja2V0IGRhdGEgdHlwZXMsIHRoaXMgaW50ZXJmYWNlIHdpbGwgYmUgZGVwcmVjYXRlZCBhbmQgcmVtb3ZlZCB3aXRoIHRpbWUuCnR5cGUgUGFja2V0RGF0YVByb3ZpZGVyIGludGVyZmFjZSB7CiAgLy8gR2V0Q3VzdG9tUGFja2V0RGF0YSByZXR1cm5zIHRoZSBwYWNrZXQgZGF0YSBoZWxkIG9uIGJlaGFsZiBvZiBhbm90aGVyIGFwcGxpY2F0aW9uLgogIC8vIFRoZSBuYW1lIHRoZSBpbmZvcm1hdGlvbiBpcyBzdG9yZWQgdW5kZXIgc2hvdWxkIGJlIHByb3ZpZGVkIGFzIHRoZSBrZXkuCiAgLy8gSWYgbm8gY3VzdG9tIHBhY2tldCBkYXRhIGV4aXN0cyBmb3IgdGhlIGtleSwgbmlsIHNob3VsZCBiZSByZXR1cm5lZC4KICBHZXRDdXN0b21QYWNrZXREYXRhKGtleSBzdHJpbmcpIGludGVyZmFjZXt9Cn0K"}}),e._v(" "),t("p",[e._v("The callbacks middleware also "),t("strong",[e._v("requires")]),e._v(" the underlying ibc application's packet data type to implement the "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.3.0/modules/core/exported/packet.go#L43-L52",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("PacketDataProvider")]),t("OutboundLink")],1),e._v(" interface. This interface is used to retrieve the callback data from the packet data (using the memo field in the case of "),t("code",[e._v("transfer")]),e._v(" and "),t("code",[e._v("ica")]),e._v("). For example, see its implementation in the "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.3.0/modules/apps/transfer/types/packet.go#L85-L105",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("transfer")]),t("OutboundLink")],1),e._v(" module.")]),e._v(" "),t("p",[e._v("Since middlewares do not have packet types, they do not need to implement this interface.")]),e._v(" "),t("h3",{attrs:{id:"packetdata"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#packetdata"}},[e._v("#")]),e._v(" "),t("code",[e._v("PacketData")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gUGFja2V0RGF0YSBkZWZpbmVzIGFuIG9wdGlvbmFsIGludGVyZmFjZSB3aGljaCBhbiBhcHBsaWNhdGlvbidzIHBhY2tldCBkYXRhIHN0cnVjdHVyZSBtYXkgaW1wbGVtZW50Lgp0eXBlIFBhY2tldERhdGEgaW50ZXJmYWNlIHsKICAvLyBHZXRQYWNrZXRTZW5kZXIgcmV0dXJucyB0aGUgc2VuZGVyIGFkZHJlc3Mgb2YgdGhlIHBhY2tldCBkYXRhLgogIC8vIElmIHRoZSBwYWNrZXQgc2VuZGVyIGlzIHVua25vd24gb3IgdW5kZWZpbmVkLCBhbiBlbXB0eSBzdHJpbmcgc2hvdWxkIGJlIHJldHVybmVkLgogIEdldFBhY2tldFNlbmRlcihzb3VyY2VQb3J0SUQgc3RyaW5nKSBzdHJpbmcKfQo="}}),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.3.0/modules/core/exported/packet.go#L36-L41",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("PacketData")]),t("OutboundLink")],1),e._v(" is an optional interface that can be implemented by the underlying ibc application's packet data type. It is used to retrieve the packet sender address from the packet data. The callbacks middleware uses this interface to retrieve the packet sender address and pass it to the callback function during a source callback. If this interface is not implemented, then the callbacks middleware passes and empty string as the sender address. For example, see its implementation in the "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.3.0/modules/apps/transfer/types/packet.go#L74-L83",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("transfer")]),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.3.0/modules/apps/27-interchain-accounts/types/packet.go#L78-L92",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("ica")]),t("OutboundLink")],1),e._v(" module.")]),e._v(" "),t("p",[e._v("This interface was added so that secondary applications can retrieve the packet sender address to perform custom authorization logic if needed.")]),e._v(" "),t("p",[e._v("Since middlewares do not have packet types, they do not need to implement this interface.")]),e._v(" "),t("h2",{attrs:{id:"interfaces-for-developing-the-secondary-application"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interfaces-for-developing-the-secondary-application"}},[e._v("#")]),e._v(" Interfaces for developing the Secondary Application")]),e._v(" "),t("h3",{attrs:{id:"contractkeeper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contractkeeper"}},[e._v("#")]),e._v(" "),t("code",[e._v("ContractKeeper")])]),e._v(" "),t("p",[e._v("The callbacks middleware requires the secondary application to implement the "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.3.0/modules/apps/callbacks/types/expected_keepers.go#L11-L83",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("ContractKeeper")]),t("OutboundLink")],1),e._v(" interface. The contract keeper will be invoked at each step of the packet lifecycle. When a packet is sent, if callback information is provided, the contract keeper will be invoked via the "),t("code",[e._v("IBCSendPacketCallback")]),e._v(". This allows the contract keeper to prevent packet sends when callback information is provided, for example if the sender is unauthroized to perform callbacks on the given information. If the packet send is successful, the contract keeper on the destination (if present) will be invoked when a packet has been received and the acknowledgement is written, this will occur via "),t("code",[e._v("IBCReceivePacketCallback")]),e._v(". At the end of the packet lifecycle, when processing acknowledgements or timeouts, the source contract keeper will be invoked either via "),t("code",[e._v("IBCOnAcknowledgementPacket")]),e._v(" or "),t("code",[e._v("IBCOnTimeoutPacket")]),e._v(". Once a packet has been sent, each step of the packet lifecycle can be processed given that a relayer sets the gas limit to be more than or equal to the required "),t("code",[e._v("CommitGasLimit")]),e._v(". State changes performed in the callback will only be committed upon successful execution.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ29udHJhY3RLZWVwZXIgZGVmaW5lcyB0aGUgZW50cnkgcG9pbnRzIGV4cG9zZWQgdG8gdGhlIFZNIG1vZHVsZSB3aGljaCBpbnZva2VzIGEgc21hcnQgY29udHJhY3QKdHlwZSBDb250cmFjdEtlZXBlciBpbnRlcmZhY2UgewoJLy8gSUJDU2VuZFBhY2tldENhbGxiYWNrIGlzIGNhbGxlZCBpbiB0aGUgc291cmNlIGNoYWluIHdoZW4gYSBQYWNrZXRTZW5kIGlzIGV4ZWN1dGVkLiBUaGUKCS8vIHBhY2tldFNlbmRlckFkZHJlc3MgaXMgZGV0ZXJtaW5lZCBieSB0aGUgdW5kZXJseWluZyBtb2R1bGUsIGFuZCBtYXkgYmUgZW1wdHkgaWYgdGhlIHNlbmRlciBpcwoJLy8gdW5rbm93biBvciB1bmRlZmluZWQuIFRoZSBjb250cmFjdCBpcyBleHBlY3RlZCB0byBoYW5kbGUgdGhlIGNhbGxiYWNrIHdpdGhpbiB0aGUgdXNlciBkZWZpbmVkCgkvLyBnYXMgbGltaXQsIGFuZCBoYW5kbGUgYW55IGVycm9ycywgb3IgcGFuaWNzIGdyYWNlZnVsbHkuCgkvLyBUaGlzIGVudHJ5IHBvaW50IGlzIGNhbGxlZCB3aXRoIGEgY2FjaGVkIGNvbnRleHQuIElmIGFuIGVycm9yIGlzIHJldHVybmVkLCB0aGVuIHRoZSBjaGFuZ2VzIGluCgkvLyB0aGlzIGNvbnRleHQgd2lsbCBub3QgYmUgcGVyc2lzdGVkLCBhbmQgdGhlIGVycm9yIHdpbGwgYmUgcHJvcGFnYXRlZCB0byB0aGUgdW5kZXJseWluZyBJQkMKCS8vIGFwcGxpY2F0aW9uLCByZXN1bHRpbmcgaW4gYSBwYWNrZXQgc2VuZCBmYWlsdXJlLgoJLy8KCS8vIEltcGxlbWVudGF0aW9ucyBhcmUgcHJvdmlkZWQgd2l0aCB0aGUgcGFja2V0U2VuZGVyQWRkcmVzcyBhbmQgTUFZIGNob29zZSB0byB1c2UgdGhpcyB0byBwZXJmb3JtCgkvLyB2YWxpZGF0aW9uIG9uIHRoZSBvcmlnaW4gb2YgYSBnaXZlbiBwYWNrZXQuIEl0IGlzIHJlY29tbWVuZGVkIHRvIHBlcmZvcm0gdGhlIHNhbWUgdmFsaWRhdGlvbgoJLy8gb24gYWxsIHNvdXJjZSBjaGFpbiBjYWxsYmFja3MgKFNlbmRQYWNrZXQsIEFja25vd2xlZGdlbWVudFBhY2tldCwgVGltZW91dFBhY2tldCkuIFRoaXMKCS8vIGRlZmVuc2l2ZWx5IGd1YXJkcyBhZ2FpbnN0IGV4cGxvaXRzIGR1ZSB0byBpbmNvcnJlY3RseSB3aXJlZCBTZW5kUGFja2V0IG9yZGVyaW5nIGluIElCQyBzdGFja3MuCglJQkNTZW5kUGFja2V0Q2FsbGJhY2soCgkJY2FjaGVkQ3R4IHNkay5Db250ZXh0LAoJCXNvdXJjZVBvcnQgc3RyaW5nLAoJCXNvdXJjZUNoYW5uZWwgc3RyaW5nLAoJCXRpbWVvdXRIZWlnaHQgY2xpZW50dHlwZXMuSGVpZ2h0LAoJCXRpbWVvdXRUaW1lc3RhbXAgdWludDY0LAoJCXBhY2tldERhdGEgW11ieXRlLAoJCWNvbnRyYWN0QWRkcmVzcywKCQlwYWNrZXRTZW5kZXJBZGRyZXNzIHN0cmluZywKCSkgZXJyb3IKCS8vIElCQ09uQWNrbm93bGVkZ2VtZW50UGFja2V0Q2FsbGJhY2sgaXMgY2FsbGVkIGluIHRoZSBzb3VyY2UgY2hhaW4gd2hlbiBhIHBhY2tldCBhY2tub3dsZWRnZW1lbnQKCS8vIGlzIHJlY2VpdmVkLiBUaGUgcGFja2V0U2VuZGVyQWRkcmVzcyBpcyBkZXRlcm1pbmVkIGJ5IHRoZSB1bmRlcmx5aW5nIG1vZHVsZSwgYW5kIG1heSBiZSBlbXB0eSBpZgoJLy8gdGhlIHNlbmRlciBpcyB1bmtub3duIG9yIHVuZGVmaW5lZC4gVGhlIGNvbnRyYWN0IGlzIGV4cGVjdGVkIHRvIGhhbmRsZSB0aGUgY2FsbGJhY2sgd2l0aGluIHRoZQoJLy8gdXNlciBkZWZpbmVkIGdhcyBsaW1pdCwgYW5kIGhhbmRsZSBhbnkgZXJyb3JzLCBvciBwYW5pY3MgZ3JhY2VmdWxseS4KCS8vIFRoaXMgZW50cnkgcG9pbnQgaXMgY2FsbGVkIHdpdGggYSBjYWNoZWQgY29udGV4dC4gSWYgYW4gZXJyb3IgaXMgcmV0dXJuZWQsIHRoZW4gdGhlIGNoYW5nZXMgaW4KCS8vIHRoaXMgY29udGV4dCB3aWxsIG5vdCBiZSBwZXJzaXN0ZWQsIGJ1dCB0aGUgcGFja2V0IGxpZmVjeWNsZSB3aWxsIG5vdCBiZSBibG9ja2VkLgoJLy8KCS8vIEltcGxlbWVudGF0aW9ucyBhcmUgcHJvdmlkZWQgd2l0aCB0aGUgcGFja2V0U2VuZGVyQWRkcmVzcyBhbmQgTUFZIGNob29zZSB0byB1c2UgdGhpcyB0byBwZXJmb3JtCgkvLyB2YWxpZGF0aW9uIG9uIHRoZSBvcmlnaW4gb2YgYSBnaXZlbiBwYWNrZXQuIEl0IGlzIHJlY29tbWVuZGVkIHRvIHBlcmZvcm0gdGhlIHNhbWUgdmFsaWRhdGlvbgoJLy8gb24gYWxsIHNvdXJjZSBjaGFpbiBjYWxsYmFja3MgKFNlbmRQYWNrZXQsIEFja25vd2xlZGdlbWVudFBhY2tldCwgVGltZW91dFBhY2tldCkuIFRoaXMKCS8vIGRlZmVuc2l2ZWx5IGd1YXJkcyBhZ2FpbnN0IGV4cGxvaXRzIGR1ZSB0byBpbmNvcnJlY3RseSB3aXJlZCBTZW5kUGFja2V0IG9yZGVyaW5nIGluIElCQyBzdGFja3MuCglJQkNPbkFja25vd2xlZGdlbWVudFBhY2tldENhbGxiYWNrKAoJCWNhY2hlZEN0eCBzZGsuQ29udGV4dCwKCQlwYWNrZXQgY2hhbm5lbHR5cGVzLlBhY2tldCwKCQlhY2tub3dsZWRnZW1lbnQgW11ieXRlLAoJCXJlbGF5ZXIgc2RrLkFjY0FkZHJlc3MsCgkJY29udHJhY3RBZGRyZXNzLAoJCXBhY2tldFNlbmRlckFkZHJlc3Mgc3RyaW5nLAoJKSBlcnJvcgoJLy8gSUJDT25UaW1lb3V0UGFja2V0Q2FsbGJhY2sgaXMgY2FsbGVkIGluIHRoZSBzb3VyY2UgY2hhaW4gd2hlbiBhIHBhY2tldCBpcyBub3QgcmVjZWl2ZWQgYmVmb3JlCgkvLyB0aGUgdGltZW91dCBoZWlnaHQuIFRoZSBwYWNrZXRTZW5kZXJBZGRyZXNzIGlzIGRldGVybWluZWQgYnkgdGhlIHVuZGVybHlpbmcgbW9kdWxlLCBhbmQgbWF5IGJlCgkvLyBlbXB0eSBpZiB0aGUgc2VuZGVyIGlzIHVua25vd24gb3IgdW5kZWZpbmVkLiBUaGUgY29udHJhY3QgaXMgZXhwZWN0ZWQgdG8gaGFuZGxlIHRoZSBjYWxsYmFjawoJLy8gd2l0aGluIHRoZSB1c2VyIGRlZmluZWQgZ2FzIGxpbWl0LCBhbmQgaGFuZGxlIGFueSBlcnJvciwgb3V0IG9mIGdhcywgb3IgcGFuaWNzIGdyYWNlZnVsbHkuCgkvLyBUaGlzIGVudHJ5IHBvaW50IGlzIGNhbGxlZCB3aXRoIGEgY2FjaGVkIGNvbnRleHQuIElmIGFuIGVycm9yIGlzIHJldHVybmVkLCB0aGVuIHRoZSBjaGFuZ2VzIGluCgkvLyB0aGlzIGNvbnRleHQgd2lsbCBub3QgYmUgcGVyc2lzdGVkLCBidXQgdGhlIHBhY2tldCBsaWZlY3ljbGUgd2lsbCBub3QgYmUgYmxvY2tlZC4KCS8vCgkvLyBJbXBsZW1lbnRhdGlvbnMgYXJlIHByb3ZpZGVkIHdpdGggdGhlIHBhY2tldFNlbmRlckFkZHJlc3MgYW5kIE1BWSBjaG9vc2UgdG8gdXNlIHRoaXMgdG8gcGVyZm9ybQoJLy8gdmFsaWRhdGlvbiBvbiB0aGUgb3JpZ2luIG9mIGEgZ2l2ZW4gcGFja2V0LiBJdCBpcyByZWNvbW1lbmRlZCB0byBwZXJmb3JtIHRoZSBzYW1lIHZhbGlkYXRpb24KCS8vIG9uIGFsbCBzb3VyY2UgY2hhaW4gY2FsbGJhY2tzIChTZW5kUGFja2V0LCBBY2tub3dsZWRnZW1lbnRQYWNrZXQsIFRpbWVvdXRQYWNrZXQpLiBUaGlzCgkvLyBkZWZlbnNpdmVseSBndWFyZHMgYWdhaW5zdCBleHBsb2l0cyBkdWUgdG8gaW5jb3JyZWN0bHkgd2lyZWQgU2VuZFBhY2tldCBvcmRlcmluZyBpbiBJQkMgc3RhY2tzLgoJSUJDT25UaW1lb3V0UGFja2V0Q2FsbGJhY2soCgkJY2FjaGVkQ3R4IHNkay5Db250ZXh0LAoJCXBhY2tldCBjaGFubmVsdHlwZXMuUGFja2V0LAoJCXJlbGF5ZXIgc2RrLkFjY0FkZHJlc3MsCgkJY29udHJhY3RBZGRyZXNzLAoJCXBhY2tldFNlbmRlckFkZHJlc3Mgc3RyaW5nLAoJKSBlcnJvcgoJLy8gSUJDUmVjZWl2ZVBhY2tldENhbGxiYWNrIGlzIGNhbGxlZCBpbiB0aGUgZGVzdGluYXRpb24gY2hhaW4gd2hlbiBhIHBhY2tldCBhY2tub3dsZWRnZW1lbnQgaXMgd3JpdHRlbi4KCS8vIFRoZSBjb250cmFjdCBpcyBleHBlY3RlZCB0byBoYW5kbGUgdGhlIGNhbGxiYWNrIHdpdGhpbiB0aGUgdXNlciBkZWZpbmVkIGdhcyBsaW1pdCwgYW5kIGhhbmRsZSBhbnkgZXJyb3JzLAoJLy8gb3V0IG9mIGdhcywgb3IgcGFuaWNzIGdyYWNlZnVsbHkuCgkvLyBUaGlzIGVudHJ5IHBvaW50IGlzIGNhbGxlZCB3aXRoIGEgY2FjaGVkIGNvbnRleHQuIElmIGFuIGVycm9yIGlzIHJldHVybmVkLCB0aGVuIHRoZSBjaGFuZ2VzIGluCgkvLyB0aGlzIGNvbnRleHQgd2lsbCBub3QgYmUgcGVyc2lzdGVkLCBidXQgdGhlIHBhY2tldCBsaWZlY3ljbGUgd2lsbCBub3QgYmUgYmxvY2tlZC4KCUlCQ1JlY2VpdmVQYWNrZXRDYWxsYmFjaygKCQljYWNoZWRDdHggc2RrLkNvbnRleHQsCgkJcGFja2V0IGliY2V4cG9ydGVkLlBhY2tldEksCgkJYWNrIGliY2V4cG9ydGVkLkFja25vd2xlZGdlbWVudCwKCQljb250cmFjdEFkZHJlc3Mgc3RyaW5nLAoJKSBlcnJvcgp9Cg=="}}),e._v(" "),t("p",[e._v("These are the callback entry points exposed to the secondary application. The secondary application is expected to execute its custom logic within these entry points. The callbacks middleware will handle the execution of these callbacks and revert the state if needed.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[e._v("Note that the source callback entry points are provided with the "),t("code",[e._v("packetSenderAddress")]),e._v(" and MAY choose to use this to perform validation on the origin of a given packet. It is recommended to perform the same validation on all source chain callbacks (SendPacket, AcknowledgePacket, TimeoutPacket). This defensively guards against exploits due to incorrectly wired SendPacket ordering in IBC stacks.")])])],1)}),[],!1,null,null,null);a.default=c.exports}}]);