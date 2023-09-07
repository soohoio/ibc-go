(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{656:function(g,I,a){"use strict";a.r(I);var C=a(1),l=Object(C.a)({},(function(){var g=this,I=g.$createElement,a=g._self._c||I;return a("ContentSlotsDistributor",{attrs:{"slot-key":g.$parent.slotKey}},[a("h1",{attrs:{id:"adr-008-callback-to-ibc-actors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-008-callback-to-ibc-actors"}},[g._v("#")]),g._v(" ADR 008: Callback to IBC Actors")]),g._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[g._v("#")]),g._v(" Changelog")]),g._v(" "),a("ul",[a("li",[g._v("2022-08-10: Initial Draft")]),g._v(" "),a("li",[g._v("2023-03-22: Merged")])]),g._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[g._v("#")]),g._v(" Status")]),g._v(" "),a("p",[g._v("Accepted, packet callback interface implemented")]),g._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[g._v("#")]),g._v(" Context")]),g._v(" "),a("p",[g._v("IBC was designed with callbacks between core IBC and IBC applications. IBC apps would send a packet to core IBC. When the result of the packet lifecycle eventually resolved into either an acknowledgement or a timeout, core IBC called a callback on the IBC application so that the IBC application could take action on the basis of the result (e.g. unescrow tokens for ICS-20).")]),g._v(" "),a("p",[g._v("This setup worked well for off-chain users interacting with IBC applications.")]),g._v(" "),a("p",[g._v("We are now seeing the desire for secondary applications (e.g. smart contracts, modules) to call into IBC apps as part of their state machine logic and then do some actions on the basis of the packet result. Or to receive a packet from IBC and do some logic upon receipt.")]),g._v(" "),a("p",[g._v("Example Usecases:")]),g._v(" "),a("ul",[a("li",[g._v("Send an ICS-20 packet, and if it is successful, then send an ICA-packet to swap tokens on LP and return funds to sender")]),g._v(" "),a("li",[g._v("Execute some logic upon receipt of token transfer to a smart contract address")])]),g._v(" "),a("p",[g._v("This requires a second layer of callbacks. The IBC application already gets the result of the packet from core IBC, but currently there is no standardized way to pass this information on to an actor module/smart contract.")]),g._v(" "),a("h2",{attrs:{id:"definitions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#definitions"}},[g._v("#")]),g._v(" Definitions")]),g._v(" "),a("ul",[a("li",[g._v("Actor: an actor is an on-chain module (this may be a hardcoded module in the chain binary or a smart contract) that wishes to execute custom logic whenever IBC receives a packet flow that it has either sent or received. It "),a("strong",[g._v("must")]),g._v(" be addressable by a string value.")])]),g._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[g._v("#")]),g._v(" Decision")]),g._v(" "),a("p",[g._v("Create a standardized callback interface that actors can implement. IBC applications (or middleware that wraps IBC applications) can now call this callback to route the result of the packet/channel handshake from core IBC to the IBC application to the original actor on the sending chain. IBC applications can route the packet receipt to the destination actor on the receiving chain.")]),g._v(" "),a("p",[g._v("IBC actors may implement the following interface:")]),g._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBJQkNBY3RvciBpbnRlcmZhY2UgewogICAgLy8gT25DaGFubmVsT3BlbiB3aWxsIGJlIGNhbGxlZCBvbiB0aGUgSUJDQWN0b3Igd2hlbiB0aGUgY2hhbm5lbCBvcGVucwogICAgLy8gdGhpcyB3aWxsIGhhcHBlbiBlaXRoZXIgb24gQ2hhbk9wZW5BY2sgb3IgQ2hhbk9wZW5Db25maXJtCiAgICBPbkNoYW5uZWxPcGVuKGN0eCBzZGsuQ29udGV4dCwgcG9ydElELCBjaGFubmVsSUQsIHZlcnNpb24gc3RyaW5nKQoKICAgIC8vIE9uQ2hhbm5lbENsb3NlIHdpbGwgYmUgY2FsbGVkIG9uIHRoZSBJQkNBY3RvciBpZiB0aGUgY2hhbm5lbCBjbG9zZXMKICAgIC8vIHRoaXMgd2lsbCBiZSBjYWxsZWQgb24gZWl0aGVyIENoYW5DbG9zZUluaXQgb3IgQ2hhbkNsb3NlQ29uZmlybSBhbmQgaWYgdGhlIGNoYW5uZWwgaGFuZHNoYWtlIGZhaWxzIG9uIG91ciBlbmQKICAgIC8vIE5PVEU6IGN1cnJlbnRseSB0aGUgY2hhbm5lbCBkb2VzIG5vdCBhdXRvbWF0aWNhbGx5IGNsb3NlIGlmIHRoZSBjb3VudGVycGFydHkgZmFpbHMgdGhlIGhhbmRoc2hha2Ugc28gYWN0b3JzIG11c3QgYmUgcHJlcGFyZWQgZm9yIGFuIE9wZW5Jbml0IHRvIG5ldmVyIHJldHVybiBhIGNhbGxiYWNrIGZvciB0aGUgdGltZSBiZWluZwogICAgT25DaGFubmVsQ2xvc2UoY3R4IHNkay5Db250ZXh0LCBwb3J0SUQsIGNoYW5uZWxJRCBzdHJpbmcpCgogICAgLy8gSUJDQWN0b3IgbXVzdCBhbHNvIGltcGxlbWVudCBQYWNrZXRBY3RvciBpbnRlcmZhY2UKICAgIFBhY2tldEFjdG9yCn0KCi8vIFBhY2tldEFjdG9yIGlzIHNwbGl0IG91dCBpbnRvIGl0cyBvd24gc2VwYXJhdGUgaW50ZXJmYWNlIHNpbmNlIGltcGxlbWVudG9ycyBtYXkgY2hvb3NlCi8vIHRvIG9ubHkgc3VwcG9ydCBjYWxsYmFja3MgZm9yIHBhY2tldCBtZXRob2RzIHJhdGhlciB0aGFuIHN1cHBvcnRpbmcgdGhlIGZ1bGwgSUJDQWN0b3IgaW50ZXJmYWNlCnR5cGUgUGFja2V0QWN0b3IgaW50ZXJmYWNlIHsKICAgIC8vIE9uUmVjdlBhY2tldCB3aWxsIGJlIGNhbGxlZCBvbiB0aGUgSUJDQWN0b3IgYWZ0ZXIgdGhlIElCQyBBcHBsaWNhdGlvbgogICAgLy8gaGFuZGxlcyB0aGUgUmVjdlBhY2tldCBjYWxsYmFjayBpZiB0aGUgcGFja2V0IGhhcyBhbiBJQkMgQWN0b3IgYXMgYSByZWNlaXZlci4KICAgIE9uUmVjdlBhY2tldChjdHggc2RrLkNvbnRleHQsIHBhY2tldCBjaGFubmVsdHlwZXMuUGFja2V0LCByZWxheWVyIHNkay5BY2NBZGRyZXNzKSBlcnJvcgoKICAgIC8vIE9uQWNrbm93bGVkZ2VtZW50UGFja2V0IHdpbGwgYmUgY2FsbGVkIG9uIHRoZSBJQkMgQWN0b3IKICAgIC8vIGFmdGVyIHRoZSBJQkMgQXBwbGljYXRpb24gaGFuZGxlcyBpdHMgb3duIE9uQWNrbm93bGVkZ2VtZW50UGFja2V0IGNhbGxiYWNrCiAgICBPbkFja25vd2xlZGdtZW50UGFja2V0KAogICAgICAgIGN0eCBzZGsuQ29udGV4dCwKICAgICAgICBwYWNrZXQgY2hhbm5lbHR5cGVzLlBhY2tldCwKICAgICAgICBhY2sgZXhwb3J0ZWQuQWNrbm93bGVkZ2VtZW50LAogICAgICAgIHJlbGF5ZXIgc2RrLkFjY0FkZHJlc3MsCiAgICApIGVycm9yCgogICAgLy8gT25UaW1lb3V0UGFja2V0IHdpbGwgYmUgY2FsbGVkIG9uIHRoZSBJQkMgQWN0b3IKICAgIC8vIGFmdGVyIHRoZSBJQkMgQXBwbGljYXRpb24gaGFuZGxlcyBpdHMgb3duIE9uVGltZW91dFBhY2tldCBjYWxsYmFjawogICAgT25UaW1lb3V0UGFja2V0KAogICAgICAgIGN0eCBzZGsuQ29udGV4dCwKICAgICAgICBwYWNrZXQgY2hhbm5lbHR5cGVzLlBhY2tldCwKICAgICAgICByZWxheWVyIHNkay5BY2NBZGRyZXNzLAogICAgKSBlcnJvcgp9Cg=="}}),g._v(" "),a("p",[g._v("The "),a("code",[g._v("CallbackPacketData")]),g._v(" interface will get created to add "),a("code",[g._v("GetSourceCallbackAddress")]),g._v(" and "),a("code",[g._v("GetDestCallbackAddress")]),g._v(" methods. These may return an address\nor they may return the empty string. The address may reference an PacketActor or it may be a regular user address. If the address is not a PacketActor, the actor callback must continue processing (no-op). Any IBC application or middleware that uses these methods must handle these cases. In most cases, the "),a("code",[g._v("GetSourceCallbackAddress")]),g._v(" will be the sender address and the "),a("code",[g._v("GetDestCallbackAddress")]),g._v(" will be the receiver address. However, these are named generically so that implementors may choose a different contract address for the callback if they choose.")]),g._v(" "),a("p",[g._v("The interface also defines a "),a("code",[g._v("UserDefinedGasLimit")]),g._v(" method. Any middleware targeting this interface for callback handling should cap the gas that a callback is allowed to take (especially on AcknowledgePacket and TimeoutPacket) so that a custom callback does not prevent the packet lifecycle from completing. However, since this is a global cap it is likely to be very large. Thus, users may specify a smaller limit to cap the amount of fees a relayer must pay in order to complete the packet lifecycle on the user's behalf.")]),g._v(" "),a("p",[g._v("IBC applications which provide the base packet data type must implement the "),a("code",[g._v("CallbackPacketData")]),g._v(" interface to allow "),a("code",[g._v("PacketActor")]),g._v(" callbacks.")]),g._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gSW1wbGVtZW50ZWQgYnkgYW55IHBhY2tldCBkYXRhIHR5cGUgdGhhdCB3YW50cyB0byBzdXBwb3J0IFBhY2tldEFjdG9yIGNhbGxiYWNrcwovLyBQYWNrZXRBY3RvcidzIHdpbGwgYmUgdW5hYmxlIHRvIGFjdCBvbiBhbnkgcGFja2V0IGRhdGEgdHlwZSB0aGF0IGRvZXMgbm90IGltcGxlbWVudAovLyB0aGlzIGludGVyZmFjZS4gCnR5cGUgQ2FsbGJhY2tQYWNrZXREYXRhIGludGVyZmFjZSB7CiAgICAvLyBHZXRTb3VyY2VDYWxsYmFja0FkZHJlc3Mgc2hvdWxkIHJldHVybiB0aGUgY2FsbGJhY2sgYWRkcmVzcyBvZiBhIHBhY2tldCBkYXRhIG9uIHRoZSBzb3VyY2UgY2hhaW4uCiAgICAvLyBUaGlzIG1heSBvciBtYXkgbm90IGJlIHRoZSBzZW5kZXIgb2YgdGhlIHBhY2tldC4gSWYgbm8gc291cmNlIGNhbGxiYWNrIGFkZHJlc3MgZXhpc3RzIGZvciB0aGUgcGFja2V0LCAKICAgIC8vIGFuIGVtcHR5IHN0cmluZyBtYXkgYmUgcmV0dXJuZWQuIAogICAgR2V0U291cmNlQ2FsbGJhY2tBZGRyZXNzKCkgc3RyaW5nCgogICAgLy8gR2V0RGVzdENhbGxiYWNrQWRkcmVzcyBzaG91bGQgcmV0dXJuIHRoZSBjYWxsYmFjayBhZGRyZXNzIG9mIGEgcGFja2V0IGRhdGEgb24gdGhlIGRlc3RpbmF0aW9uIGNoYWluLgogICAgLy8gVGhpcyBtYXkgb3IgbWF5IG5vdCBiZSB0aGUgcmVjZWl2ZXIgb2YgdGhlIHBhY2tldC4gSWYgbm8gZGVzdCBjYWxsYmFjayBhZGRyZXNzIGV4aXN0cyBmb3IgdGhlIHBhY2tldCwgCiAgICAvLyBhbiBlbXB0eSBzdHJpbmcgbWF5IGJlIHJldHVybmVkLiAKICAgIEdldERlc3RDYWxsYmFja0FkZHJlc3MoKSBzdHJpbmcKCiAgICAvLyBVc2VyRGVmaW5lZEdhc0xpbWl0IGFsbG93cyB0aGUgc2VuZGVyIG9mIHRoZSBwYWNrZXQgdG8gZGVmaW5lIGluc2lkZSB0aGUgcGFja2V0IGRhdGEKICAgIC8vIGEgZ2FzIGxpbWl0IGZvciBob3cgbXVjaCB0aGUgQURSLTggY2FsbGJhY2tzIGNhbiBjb25zdW1lLiBJZiBkZWZpbmVkLCB0aGlzIHdpbGwgYmUgcGFzc2VkCiAgICAvLyBpbiBhcyB0aGUgZ2FzIGxpbWl0IHNvIHRoYXQgdGhlIGNhbGxiYWNrIGlzIGd1YXJhbnRlZWQgdG8gY29tcGxldGUgd2l0aGluIGEgc3BlY2lmaWMgbGltaXQuCiAgICAvLyBPbiByZWN2UGFja2V0LCBhIGdhcy1vdmVyZmxvdyB3aWxsIGp1c3QgZmFpbCB0aGUgdHJhbnNhY3Rpb24gYWxsb3dpbmcgaXQgdG8gdGltZW91dCBvbiB0aGUgc2VuZGVyIHNpZGUuCiAgICAvLyBPbiBhY2tQYWNrZXQgYW5kIHRpbWVvdXRQYWNrZXQsIGEgZ2FzLW92ZXJmbG93IHdpbGwgcmVqZWN0IHN0YXRlIGNoYW5nZXMgbWFkZSBkdXJpbmcgY2FsbGJhY2sgYnV0IHN0aWxsCiAgICAvLyBjb21taXQgdGhlIHRyYW5zYWN0aW9uLiBUaGlzIGVuc3VyZXMgdGhlIHBhY2tldCBsaWZlY3ljbGUgY2FuIGFsd2F5cyBjb21wbGV0ZS4KICAgIC8vIElmIHRoZSBwYWNrZXQgZGF0YSByZXR1cm5zIDAsIHRoZSByZW1haW5pbmcgZ2FzIGxpbWl0IHdpbGwgYmUgcGFzc2VkIGluIChtb2R1bG8gYW55IGNoYWluLWRlZmluZWQgbGltaXQpCiAgICAvLyBPdGhlcndpc2UsIHdlIHdpbGwgc2V0IHRoZSBnYXMgbGltaXQgcGFzc2VkIGludG8gdGhlIGNhbGxiYWNrIHRvIHRoZSBgbWluKGN0eC5HYXNMaW1pdCwgVXNlckRlZmluZWRHYXNMaW1pdCgpKWAKICAgIFVzZXJEZWZpbmVkR2FzTGltaXQoKSB1aW50NjQKfQo="}}),g._v(" "),a("p",[g._v("IBC Apps or middleware can then call the IBCActor callbacks like so in their own callbacks:")]),g._v(" "),a("h3",{attrs:{id:"handshake-callbacks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handshake-callbacks"}},[g._v("#")]),g._v(" Handshake Callbacks")]),g._v(" "),a("p",[g._v("The "),a("code",[g._v("OnChanOpenInit")]),g._v(" handshake callback will need to include an additional field so that the initiating actor can be tracked and called upon during handshake completion.\nThe actor provided in the "),a("code",[g._v("OnChanOpenInit")]),g._v(" callback will be the signer of the "),a("code",[g._v("MsgChanOpenInit")]),g._v(" message.")]),g._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBPbkNoYW5PcGVuSW5pdCgKICAgIGN0eCBzZGsuQ29udGV4dCwKICAgIG9yZGVyIGNoYW5uZWx0eXBlcy5PcmRlciwKICAgIGNvbm5lY3Rpb25Ib3BzIFtdc3RyaW5nLAogICAgcG9ydElEIHN0cmluZywKICAgIGNoYW5uZWxJRCBzdHJpbmcsCiAgICBjaGFubmVsQ2FwICpjYXBhYmlsaXR5dHlwZXMuQ2FwYWJpbGl0eSwKICAgIGNvdW50ZXJwYXJ0eSBjaGFubmVsdHlwZXMuQ291bnRlcnBhcnR5LAogICAgdmVyc2lvbiBzdHJpbmcsCiAgICBhY3RvciBzdHJpbmcsCikgKHN0cmluZywgZXJyb3IpIHsKICAgIGFjYyA6PSBrLmdldEFjY291bnQoY3R4LCBhY3RvcikKICAgIGliY0FjdG9yLCBvayA6PSBhY2MuKElCQ0FjdG9yKQogICAgaWYgb2sgewogICAgICAgIGsuc2V0QWN0b3IoY3R4LCBwb3J0SUQsIGNoYW5uZWxJRCwgYWN0b3IpCiAgICB9CiAgICAKICAgIC8vIGNvbnRpbnVlZCBsb2dpYwp9CgpmdW5jIE9uQ2hhbk9wZW5BY2soCiAgICBjdHggc2RrLkNvbnRleHQsCiAgICBwb3J0SUQsCiAgICBjaGFubmVsSUQgc3RyaW5nLAogICAgY291bnRlcnBhcnR5Q2hhbm5lbElEIHN0cmluZywKICAgIGNvdW50ZXJwYXJ0eVZlcnNpb24gc3RyaW5nLAopIGVycm9yIHsKICAgIC8vIHJ1biBhbnkgbmVjZXNzYXJ5IGxvZ2ljIGZpcnN0CiAgICAvLyBuZWdvdGlhdGUgZmluYWwgdmVyc2lvbgoKICAgIGFjdG9yIDo9IGsuZ2V0QWN0b3IoY3R4LCBwb3J0SUQsIGNoYW5uZWxJRCkKICAgIGlmIGFjdG9yICE9ICZxdW90OyZxdW90OyB7CiAgICAgICAgaWJjQWN0b3IsIF8gOj0gYWNjLihJQkNBY3RvcikKICAgICAgICBpYmNBY3Rvci5PbkNoYW5PcGVuKGN0eCwgcG9ydElELCBjaGFubmVsSUQsIHZlcnNpb24pCiAgICB9CgogICAgLy8gdGhlIHNhbWUgYWN0b3Igd2lsbCBiZSB1c2VkIGZvciBjaGFubmVsIGNsb3N1cmUKfQoKZnVuYyBPbkNoYW5DbG9zZUluaXQoCiAgICBjdHggc2RrLkNvbnRleHQsCiAgICBwb3J0SUQsCiAgICBjaGFubmVsSUQsCikgZXJyb3IgewogICAgLy8gcnVuIGFueSBuZWNlc3NzYXJ5IGxvZ2ljIGZpcnN0CgogICAgYWN0b3IgOj0gay5nZXRBY3RvcihjdHgsIHBvcnRJRCwgY2hhbm5lbElEKQogICAgaWYgYWN0b3IgIT0gJnF1b3Q7JnF1b3Q7IHsKICAgICAgICBpYmNBY3RvciwgXyA6PSBhY2MuKElCQ0FjdG9yKQogICAgICAgIGliY0FjdG9yLk9uQ2hhbkNsb3NlKGN0eCwgcG9ydElELCBjaGFubmVsSUQpCiAgICB9CiAgICAvLyBjbGVhbnVwIHN0YXRlCiAgICBrLmRlbGV0ZUFjdG9yKGN0eCwgcG9ydElELCBjaGFubmVsSUQpCn0KCmZ1bmMgT25DaGFuQ2xvc2VDb25maXJtKAogICAgY3R4IHNkay5Db250ZXh0LAogICAgcG9ydElELAogICAgY2hhbm5lbElEIHN0cmluZywKKSBlcnJvciB7CiAgICAvLyBydW4gYW55IG5lY2Vzc3NhcnkgbG9naWMgZmlyc3QKCiAgICBhY3RvciA6PSBrLmdldEFjdG9yKGN0eCwgcG9ydElELCBjaGFubmVsSUQpCiAgICBpZiBhY3RvciAhPSAmcXVvdDsmcXVvdDsgewogICAgICAgIGliY0FjdG9yLCBfIDo9IGFjYy4oSUJDQWN0b3IpCiAgICAgICAgaWJjQWN0b3IuT25DaGFuQ2xvc2UoY3R4LCBwb3J0SUQsIGNoYW5uZWxJRCkKICAgIH0KICAgIC8vIGNsZWFudXAgc3RhdGUKICAgIGsuZGVsZXRlQWN0b3IoY3R4LCBwb3J0SUQsIGNoYW5uZWxJRCkKfQo="}}),g._v(" "),a("p",[g._v("NOTE: The handshake calls "),a("code",[g._v("OnChanOpenTry")]),g._v(" and "),a("code",[g._v("OnChanOpenConfirm")]),g._v(" are explicitly left out as it is still to be determined how the actor of the "),a("code",[g._v("OnChanOpenTry")]),g._v(" step should be provided. Initially only the initiating side of the channel handshake may support setting a channel actor, future improvements should allow both sides of the channel handshake to set channel actors.")]),g._v(" "),a("h3",{attrs:{id:"packetcallbacks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#packetcallbacks"}},[g._v("#")]),g._v(" PacketCallbacks")]),g._v(" "),a("p",[g._v("No packet callback API will need to change.")]),g._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ2FsbCB0aGUgSUJDQWN0b3IgcmVjdlBhY2tldCBjYWxsYmFjayBhZnRlciBwcm9jZXNzaW5nIHRoZSBwYWNrZXQKLy8gaWYgdGhlIHJlY3ZQYWNrZXQgY2FsbGJhY2sgZXhpc3RzLiBJZiB0aGUgY2FsbGJhY2sgcmV0dXJucyBhbiBlcnJvcgovLyB0aGVuIHJldHVybiBhbiBlcnJvciBhY2sgdG8gcmV2ZXJ0IGFsbCBwYWNrZXQgZGF0YSBwcm9jZXNzaW5nLiAKZnVuYyBPblJlY3ZQYWNrZXQoCiAgICBjdHggc2RrLkNvbnRleHQsCiAgICBwYWNrZXQgY2hhbm5lbHR5cGVzLlBhY2tldCwKICAgIHJlbGF5ZXIgc2RrLkFjY0FkZHJlc3MsCikgKGFjayBleHBvcnRlZC5BY2tub3dsZWRnZW1lbnQpIHsKICAgIC8vIHJ1biBhbnkgbmVjZXNzc2FyeSBsb2dpYyBmaXJzdAogICAgLy8gSUJDQWN0b3IgbG9naWMgd2lsbCBwb3N0cHJvY2VzcwoKICAgIC8vIHBvc3Rwcm9jZXNzaW5nIHNob3VsZCBvbmx5IGlmIHRoZSB1bmRlcmx5aW5nIGFwcGxpY2F0aW9uCiAgICAvLyByZXR1cm5zIGEgc3VjY2Vzc2Z1bCBhY2sKCiAgICAvLyB1bm1hcnNoYWwgcGFja2V0IGRhdGEgaW50byBleHBlY3RlZCBpbnRlcmZhY2UKICAgIHZhciBjYlBhY2tldERhdGEgY2FsbGJhY2tQYWNrZXREYXRhCiAgICB1bm1hcnNoYWxJbnRlcmZhY2UocGFja2V0LkdldERhdGEoKSwgY2JQYWNrZXREYXRhKQoKICAgIGlmIGNiUGFja2V0RGF0YSA9PSBuaWwgewogICAgICAgIC8vIHRoZSBwYWNrZXQgZGF0YSBkb2VzIG5vdCBpbXBsZW1lbnQgdGhlIENhbGxiYWNrUGFja2V0RGF0YSBpbnRlcmZhY2UKICAgICAgICAvLyBjb250aW51ZSBwcm9jZXNzaW5nIChuby1vcCkKICAgICAgICByZXR1cm4KICAgIH0KCiAgICBhY2MgOj0gay5nZXRBY2NvdW50KGN0eCwgY2JQYWNrZXREYXRhLkdldERzdENhbGxiYWNrQWRkcmVzcygpKQogICAgaWJjQWN0b3IsIG9rIDo9IGFjYy4oSUJDQWN0b3IpCiAgICBpZiBvayB7CiAgICAgICAgLy8gc2V0IGdhcyBsaW1pdCBmb3IgY2FsbGJhY2sKICAgICAgICBnYXNMaW1pdCA6PSBnZXRHYXNMaW1pdChjdHgsIGNiUGFja2V0RGF0YSkKICAgICAgICBjYkN0eCA9IGN0eC5XaXRoR2FzTGltaXQoZ2FzTGltaXQpCgogICAgICAgIGVyciA6PSBpYmNBY3Rvci5PblJlY3ZQYWNrZXQoY2JDdHgsIHBhY2tldCwgcmVsYXllcikKCiAgICAgICAgLy8gZGVkdWN0IGNvbnN1bWVkIGdhcyBmcm9tIG9yaWdpbmFsIGNvbnRleHQKICAgICAgICBjdHggPSBjdHguV2l0aEdhc0xpbWl0KGN0eC5HYXNNZXRlcigpLlJlbWFpbmluZ0dhcygpIC0gY2JDdHguR2FzTWV0ZXIoKS5HYXNDb25zdW1lZCgpKQogICAgICAgIGlmIGVyciAhPSBuaWwgewogICAgICAgICAgICAvLyBOT1RFOiBieSByZXR1cm5pbmcgYW4gZXJyb3IgYWNrbm93bGVkZ2VtZW50LCBpdCBpcyBhc3N1bWVkIHRoYXQgdGhlCiAgICAgICAgICAgIC8vIGJhc2UgSUJDIGFwcGxpY2F0aW9uIG9uIHRoZSBjb3VudGVycGFydHkgY2FsbGJhY2sgc3RhY2sgd2lsbCBiZSBhYmxlCiAgICAgICAgICAgIC8vIHRvIHByb3Blcmx5IHVubWFyc2hhbCB0aGUgZXJyb3IgYWNrbm93bGVkZ2VtZW50LiBJdCBzaG91bGQgbm90IGV4cGVjdAogICAgICAgICAgICAvLyBzb21lIGN1c3RvbSBlcnJvciBhY2tub3dsZWRnZW1lbnQuIElmIGl0IGRvZXMsIGZhaWxlZCBhY2tub3dsZWRnZW1lbnRzCiAgICAgICAgICAgIC8vIHdpbGwgYmUgdW5zdWNjZXNzZnVsbHkgcHJvY2Vzc2VkIHdoaWNoIGNhbiBiZSBjYXRhc3Ryb3BoaWMgaW4gcHJvY2Vzc2luZwogICAgICAgICAgICAvLyByZWZ1bmQgbG9naWMuIAogICAgICAgICAgICAvLyAKICAgICAgICAgICAgLy8gSWYgdGhpcyBpc3N1ZSBpcyBhIHNlcmlvdXMgY29uY2VybiwgYW4gQURSIDggaW1wbGVtZW50YXRpb24gY2FuIGNvbnN0cnVjdCBpdHMgb3duCiAgICAgICAgICAgIC8vIGFja25vd2xlZGdlbWVudCB0eXBlIHdoaWNoIHdyYXBzIHRoZSB1bmRlcmx5aW5nIGFwcGxpY2F0aW9uIGFja25vd2xlZGdlbWVudC4gVGhpcyAKICAgICAgICAgICAgLy8gd291bGQgcmVxdWlyZSBkZXBsb3ltZW50IG9uIGJvdGggc2lkZXMgb2YgdGhlIHBhY2tldCBmbG93LCBpbiBhZGRpdGlvbiB0byB2ZXJzaW9uIAogICAgICAgICAgICAvLyBuZWdvdGlhdGlvbiB0byBlbmFibGUgdGhlIGN1c3RvbSBhY2tub3dsZWRnZW1lbnQgdHlwZSB1c2FnZS4gCiAgICAgICAgICAgIC8vIAogICAgICAgICAgICAvLyBGdXR1cmUgaW1wcm92bWVuZXRzIHNob3VsZCBhbGxvdyBmb3IgZWFjaCBJQkMgYXBwbGljYXRpb24gaW4gYSBzdGFjayBvZgogICAgICAgICAgICAvLyBjYWxsYmFja3MgdG8gcHJvdmlkZSB0aGVpciBvd24gYWNrbm93bGVkZ2VtZW50IHdpdGhvdXQgZGlzcnVwdGluZyB0aGUgdW5tYXJzaGFsaW5nCiAgICAgICAgICAgIC8vIG9mIGFuIGFwcGxpY2F0aW9uIGFib3ZlIG9yIGJlbG93IGl0IGluIHRoZSBzdGFjay4gCiAgICAgICAgICAgIHJldHVybiBBY2tub3dsZWRnZW1lbnRFcnJvcihlcnIpCiAgICAgICAgfQogICAgfQogICAgcmV0dXJuCn0KCi8vIENhbGwgdGhlIElCQ0FjdG9yIGFja25vd2xlZGdlbWVudFBhY2tldCBjYWxsYmFjayBhZnRlciBwcm9jZXNzaW5nIHRoZSBwYWNrZXQKLy8gaWYgdGhlIGFja1BhY2tldCBjYWxsYmFjayBleGlzdHMgYW5kIHJldHVybnMgYW4gZXJyb3IKLy8gRE8gTk9UIHJldHVybiB0aGUgZXJyb3IgdXBzdHJlYW0uIFRoZSBhY2tub3dsZWRnZW1lbnQgbXVzdCBjb21wbGV0ZSBmb3IgdGhlIHBhY2tldAovLyBsaWZlY3ljbGUgdG8gZW5kLCBzbyB0aGUgY3VzdG9tIGNhbGxiYWNrIGNhbm5vdCBibG9jayBjb21wbGV0aW9uLgovLyBJbnN0ZWFkIHdlIGVtaXQgZXJyb3IgZXZlbnRzIGFuZCBzZXQgdGhlIGVycm9yIGluIHN0YXRlCi8vIHNvIHRoYXQgdXNlcnMgYW5kIG9uLWNoYWluIGxvZ2ljIGNhbiBoYW5kbGUgdGhpcyBhcHByb3ByaWF0ZWx5CmZ1bmMgKGltIElCQ01vZHVsZSkgT25BY2tub3dsZWRnZW1lbnRQYWNrZXQoCiAgICBjdHggc2RrLkNvbnRleHQsCiAgICBwYWNrZXQgY2hhbm5lbHR5cGVzLlBhY2tldCwKICAgIGFja25vd2xlZGdlbWVudCBbXWJ5dGUsCiAgICByZWxheWVyIHNkay5BY2NBZGRyZXNzLAopIGVycm9yIHsKICAgIC8vIGFwcGxpY2F0aW9uLXNwZWNpZmljIG9uQWNrbm93bGVkZ21lbnRQYWNrZXQgbG9naWMKCiAgICAvLyB1bm1hcnNoYWwgcGFja2V0IGRhdGEgaW50byBleHBlY3RlZCBpbnRlcmZhY2UKICAgIHZhciBjYlBhY2tldERhdGEgY2FsbGJhY2tQYWNrZXREYXRhCiAgICB1bm1hcnNoYWxJbnRlcmZhY2UocGFja2V0LkdldERhdGEoKSwgY2JQYWNrZXREYXRhKQoKICAgIGlmIGNiUGFja2V0RGF0YSA9PSBuaWwgewogICAgICAgIC8vIHRoZSBwYWNrZXQgZGF0YSBkb2VzIG5vdCBpbXBsZW1lbnQgdGhlIENhbGxiYWNrUGFja2V0RGF0YSBpbnRlcmZhY2UKICAgICAgICAvLyBjb250aW51ZSBwcm9jZXNzaW5nIChuby1vcCkKICAgICAgICByZXR1cm4KICAgIH0KCiAgICAvLyB1bm1hcnNoYWwgYWNrIGJ5dGVzIGludG8gdGhlIGFja25vd2xlZGdtZW50IGludGVyZmFjZQogICAgdmFyIGFjayBleHBvcnRlZC5BY2tub3dsZWRnZW1lbnQKICAgIHVubWFyc2hhbChhY2tub3dsZWRnZW1lbnQsIGFjaykKCiAgICAvLyBzZW5kIGFja25vd2xlZGdlbWVudCB0byBvcmlnaW5hbCBhY3RvcgogICAgYWNjIDo9IGsuZ2V0QWNjb3VudChjdHgsIGNiUGFja2V0RGF0YS5HZXRTb3VyY2VDYWxsYmFja0FkZHJlc3MoKSkKICAgIGliY0FjdG9yLCBvayA6PSBhY2MuKElCQ0FjdG9yKQogICAgaWYgb2sgewogICAgICAgIGdhc0xpbWl0IDo9IGdldEdhc0xpbWl0KGN0eCwgY2JQYWNrZXREYXRhKQoKCiAgICAgICAgaGFuZGxlQ2FsbGJhY2sgOj0gZnVuYygpIGVycm9yIHsKICAgICAgICAgICAgLy8gY3JlYXRlIGNhY2hlZCBjb250ZXh0IHdpdGggZ2FzIGxpbWl0CiAgICAgICAgICAgIGNhY2hlQ3R4LCB3cml0ZUZuIDo9IGN0eC5DYWNoZUNvbnRleHQoKQogICAgICAgICAgICBjYWNoZUN0eCA9IGNhY2hlQ3R4LldpdGhHYXNMaW1pdChnYXNMaW1pdCkKICAgICAgICAKICAgICAgICAgICAgZGVmZXIgZnVuYygpIHsKICAgICAgICAgICAgICAgIGlmIGUgOj0gcmVjb3ZlcigpOyBlICE9IG5pbCB7CiAgICAgICAgICAgICAgICAgICAgbG9nKCZxdW90O3JhbiBvdXQgb2YgZ2FzIGluIGNhbGxiYWNrLiByZXZlcnRpbmcgY2FsbGJhY2sgc3RhdGUmcXVvdDspCiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgZXJyID09IG5pbCB7CiAgICAgICAgICAgICAgICAgICAgLy8gb25seSB3cml0ZSBjYWxsYmFjayBzdGF0ZSBpZiB3ZSBkaWQgbm90IHBhbmljIGR1cmluZyBleGVjdXRpb24KICAgICAgICAgICAgICAgICAgICAvLyBhbmQgdGhlIGVycm9yIHJldHVybmVkIGlzIG5pbAogICAgICAgICAgICAgICAgICAgIHdyaXRlRm4oKQogICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CgogICAgICAgICAgICBlcnIgOj0gaWJjQWN0b3IuT25BY2tub3dsZWRnZW1lbnRQYWNrZXQoY2FjaGVDdHgsIHBhY2tldCwgYWNrLCByZWxheWVyKSAKCiAgICAgICAgICAgIC8vIGRlZHVjdCBjb25zdW1lZCBnYXMgZnJvbSBvcmlnaW5hbCBjb250ZXh0CiAgICAgICAgICAgIGN0eCA9IGN0eC5XaXRoR2FzTGltaXQoY3R4Lkdhc01ldGVyKCkuUmVtYWluaW5nR2FzKCkgLSBjYkN0eC5HYXNNZXRlcigpLkdhc0NvbnN1bWVkKCkpCgogICAgICAgICAgICByZXR1cm4gZXJyCiAgICAgICAgfQoKICAgICAgICBpZiBlcnIgOj0gaGFuZGxlQ2FsbGJhY2soKTsgZXJyICE9IG5pbCB7CiAgICAgICAgICAgIHNldEFja0NhbGxiYWNrRXJyb3IoY3R4LCBwYWNrZXQsIGVycikgLy8gb3B0aW9uYWwKICAgICAgICAgICAgZW1pdEFja0NhbGxiYWNrRXJyb3JFdmVudHMoZXJyKQogICAgICAgIH0gICAgIAogICAgfQoKICAgIHJldHVybiBuaWwKfQoKLy8gQ2FsbCB0aGUgSUJDQWN0b3IgdGltZW91dFBhY2tldCBjYWxsYmFjayBhZnRlciBwcm9jZXNzaW5nIHRoZSBwYWNrZXQKLy8gaWYgdGhlIHRpbWVvdXRQYWNrZXQgY2FsbGJhY2sgZXhpc3RzIGFuZCByZXR1cm5zIGFuIGVycm9yCi8vIERPIE5PVCByZXR1cm4gdGhlIGVycm9yIHVwc3RyZWFtLiBUaGUgdGltZW91dCBtdXN0IGNvbXBsZXRlIGZvciB0aGUgcGFja2V0Ci8vIGxpZmVjeWNsZSB0byBlbmQsIHNvIHRoZSBjdXN0b20gY2FsbGJhY2sgY2Fubm90IGJsb2NrIGNvbXBsZXRpb24uCi8vIEluc3RlYWQgd2UgZW1pdCBlcnJvciBldmVudHMgYW5kIHNldCB0aGUgZXJyb3IgaW4gc3RhdGUKLy8gc28gdGhhdCB1c2VycyBhbmQgb24tY2hhaW4gbG9naWMgY2FuIGhhbmRsZSB0aGlzIGFwcHJvcHJpYXRlbHkKZnVuYyAoaW0gSUJDTW9kdWxlKSBPblRpbWVvdXRQYWNrZXQoCiAgICBjdHggc2RrLkNvbnRleHQsCiAgICBwYWNrZXQgY2hhbm5lbHR5cGVzLlBhY2tldCwKICAgIHJlbGF5ZXIgc2RrLkFjY0FkZHJlc3MsCikgZXJyb3IgewogICAgLy8gYXBwbGljYXRpb24tc3BlY2lmaWMgb25UaW1lb3V0UGFja2V0IGxvZ2ljCgogICAgLy8gdW5tYXJzaGFsIHBhY2tldCBkYXRhIGludG8gZXhwZWN0ZWQgaW50ZXJmYWNlCiAgICB2YXIgY2JQYWNrZXREYXRhIGNhbGxiYWNrUGFja2V0RGF0YQogICAgdW5tYXJzaGFsSW50ZXJmYWNlKHBhY2tldC5HZXREYXRhKCksIGNiUGFja2V0RGF0YSkKCiAgICBpZiBjYlBhY2tldERhdGEgPT0gbmlsIHsKICAgICAgICAvLyB0aGUgcGFja2V0IGRhdGEgZG9lcyBub3QgaW1wbGVtZW50IHRoZSBDYWxsYmFja1BhY2tldERhdGEgaW50ZXJmYWNlCiAgICAgICAgLy8gY29udGludWUgcHJvY2Vzc2luZyAobm8tb3ApCiAgICAgICAgcmV0dXJuCiAgICB9CgogICAgLy8gY2FsbCB0aW1lb3V0IGNhbGxiYWNrIG9uIG9yaWdpbmFsIGFjdG9yCiAgICBhY2MgOj0gay5nZXRBY2NvdW50KGN0eCwgY2JQYWNrZXREYXRhLkdldFNvdXJjZUNhbGxiYWNrQWRkcmVzcygpKQogICAgaWJjQWN0b3IsIG9rIDo9IGFjYy4oSUJDQWN0b3IpCiAgICBpZiBvayB7CiAgICAgICAgZ2FzTGltaXQgOj0gZ2V0R2FzTGltaXQoY3R4LCBjYlBhY2tldERhdGEpCgogICAgICAgIGhhbmRsZUNhbGxiYWNrIDo9IGZ1bmMoKSBlcnJvciB7CiAgICAgICAgICAgIC8vIGNyZWF0ZSBjYWNoZWQgY29udGV4dCB3aXRoIGdhcyBsaW1pdAogICAgICAgICAgICBjYWNoZUN0eCwgd3JpdGVGbiA6PSBjdHguQ2FjaGVDb250ZXh0KCkKICAgICAgICAgICAgY2FjaGVDdHggPSBjYWNoZUN0eC5XaXRoR2FzTGltaXQoZ2FzTGltaXQpCiAgICAgICAgCiAgICAgICAgICAgIGRlZmVyIGZ1bmMoKSB7CiAgICAgICAgICAgICAgICBpZiBlIDo9IHJlY292ZXIoKTsgZSAhPSBuaWwgewogICAgICAgICAgICAgICAgICAgIGxvZygmcXVvdDtyYW4gb3V0IG9mIGdhcyBpbiBjYWxsYmFjay4gcmV2ZXJ0aW5nIGNhbGxiYWNrIHN0YXRlJnF1b3Q7KQogICAgICAgICAgICAgICAgfSBlbHNlIGlmIGVyciA9PSBuaWwgewogICAgICAgICAgICAgICAgICAgIC8vIG9ubHkgd3JpdGUgY2FsbGJhY2sgc3RhdGUgaWYgd2UgZGlkIG5vdCBwYW5pYyBkdXJpbmcgZXhlY3V0aW9uCiAgICAgICAgICAgICAgICAgICAgLy8gYW5kIHRoZSBlcnJvciByZXR1cm5lZCBpcyBuaWwKICAgICAgICAgICAgICAgICAgICB3cml0ZUZuKCkKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQoKICAgICAgICAgICAgZXJyIDo9IGliY0FjdG9yLk9uVGltZW91dFBhY2tldChjdHgsIHBhY2tldCwgcmVsYXllcikKCiAgICAgICAgICAgIC8vIGRlZHVjdCBjb25zdW1lZCBnYXMgZnJvbSBvcmlnaW5hbCBjb250ZXh0CiAgICAgICAgICAgIGN0eCA9IGN0eC5XaXRoR2FzTGltaXQoY3R4Lkdhc01ldGVyKCkuUmVtYWluaW5nR2FzKCkgLSBjYkN0eC5HYXNNZXRlcigpLkdhc0NvbnN1bWVkKCkpCgogICAgICAgICAgICByZXR1cm4gZXJyCiAgICAgICAgfQoKICAgICAgICBpZiBlcnIgOj0gaGFuZGxlQ2FsbGJhY2soKTsgZXJyICE9IG5pbCB7CiAgICAgICAgICAgIHNldFRpbWVvdXRDYWxsYmFja0Vycm9yKGN0eCwgcGFja2V0LCBlcnIpIC8vIG9wdGlvbmFsCiAgICAgICAgICAgIGVtaXRUaW1lb3V0Q2FsbGJhY2tFcnJvckV2ZW50cyhlcnIpCiAgICAgICAgfSAgICAgCiAgICB9CgogICAgcmV0dXJuIG5pbAp9CgpmdW5jIGdldEdhc0xpbWl0KGN0eCBzZGsuQ29udGV4dCwgY2JQYWNrZXREYXRhIENhbGxiYWNrUGFja2V0RGF0YSkgdWludDY0IHsKICAgIC8vIGdldEdhc0xpbWl0IHJldHVybnMgdGhlIGdhcyBsaW1pdCB0byBwYXNzIGludG8gdGhlIGFjdG9yIGNhbGxiYWNrCiAgICAvLyB0aGlzIHdpbGwgYmUgdGhlIG1pbmltdW0gb2YgdGhlIHJlbWFpbmluZyBnYXMgbGltaXQgaW4gdGhlIHR4CiAgICAvLyBhbmQgdGhlIGNvbmZpZyBkZWZpbmVkIGdhcyBsaW1pdC4gVGhlIGNvbmZpZyBsaW1pdCBpcyBpdHNlbGYKICAgIC8vIHRoZSBtaW5pbXVtIG9mIGEgdXNlciBkZWZpbmVkIGdhcyBsaW1pdCBhbmQgdGhlIGNoYWluLWRlZmluZWQgZ2FzIGxpbWl0CiAgICAvLyBmb3IgYWN0b3IgY2FsbGJhY2tzCiAgICB2YXIgY29uZmlnTGltaXQgdWludDY0CiAgICBpZiBjYlBhY2tldERhdGEgPT0gMCB7CiAgICAgICAgY29uZmlnTGltaXQgPSBjaGFpbkRlZmluZWRBY3RvckNhbGxiYWNrTGltaXQKICAgIH0gZWxzZSB7CiAgICAgICAgY29uZmlnTGltaXQgPSBtaW4oY2hhaW5EZWZpbmVkQWN0b3JDYWxsYmFja0xpbWl0LCBjYlBhY2tldERhdGEuVXNlckRlZmluZWRHYXNMaW1pdCgpKQogICAgfQogICAgcmV0dXJuIG1pbihjdHguR2FzTWV0ZXIoKS5HYXNSZW1haW5pbmcoKSwgY29uZmlnTGltaXQpCn0K"}}),g._v(" "),a("p",[g._v("Chains are expected to specify a "),a("code",[g._v("chainDefinedActorCallbackLimit")]),g._v(" to ensure that callbacks do not consume an arbitrary amount of gas. Thus, it should always be possible for a relayer to complete the packet lifecycle even if the actor callbacks cannot run successfully.")]),g._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[g._v("#")]),g._v(" Consequences")]),g._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[g._v("#")]),g._v(" Positive")]),g._v(" "),a("ul",[a("li",[g._v("IBC Actors can now programatically execute logic that involves sending a packet and then performing some additional logic once the packet lifecycle is complete")]),g._v(" "),a("li",[g._v("Middleware implementing ADR-8 can be generally used for any application")]),g._v(" "),a("li",[g._v("Leverages the same callback architecture used between core IBC and IBC applications")])]),g._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[g._v("#")]),g._v(" Negative")]),g._v(" "),a("ul",[a("li",[g._v("Callbacks may now have unbounded gas consumption since the actor may execute arbitrary logic. Chains implementing this feature should take care to place limitations on how much gas an actor callback can consume.")])]),g._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[g._v("#")]),g._v(" Neutral")]),g._v(" "),a("ul",[a("li",[g._v("Application packets that want to support ADR-8 must additionally have their packet data implement the "),a("code",[g._v("CallbackPacketData")]),g._v(" interface and register their implementation on the chain codec")])]),g._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[g._v("#")]),g._v(" References")]),g._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/issues/1660",target:"_blank",rel:"noopener noreferrer"}},[g._v("Original issue"),a("OutboundLink")],1)]),g._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/pull/3287",target:"_blank",rel:"noopener noreferrer"}},[g._v("CallbackPacketData interface implementation"),a("OutboundLink")],1)]),g._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/pull/3287",target:"_blank",rel:"noopener noreferrer"}},[g._v("ICS 20, ICS 27 implementations of the CallbackPacketData interface"),a("OutboundLink")],1)])])],1)}),[],!1,null,null,null);I.default=l.exports}}]);