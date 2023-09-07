(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{569:function(e,t,a){e.exports=a.p+"assets/img/msgpaypacket.773bfcd3.png"},570:function(e,t,a){e.exports=a.p+"assets/img/paypacketfeeasync.a59e9e64.png"},571:function(e,t,a){e.exports=a.p+"assets/img/feeflow.1fadc24f.png"},665:function(e,t,a){"use strict";a.r(t);var s=a(0),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"fee-messages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fee-messages"}},[e._v("#")]),e._v(" Fee messages")]),e._v(" "),s("p",{attrs:{synopsis:""}},[e._v("Learn about the different ways to pay for fees, how the fees are paid out and what happens when not enough escrowed fees are available for payout")]),e._v(" "),s("h2",{attrs:{id:"escrowing-fees"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#escrowing-fees"}},[e._v("#")]),e._v(" Escrowing fees")]),e._v(" "),s("p",[e._v("The fee middleware module exposes two different ways to pay fees for relaying IBC packets:")]),e._v(" "),s("ol",[s("li",[s("p",[s("code",[e._v("MsgPayPacketFee")]),e._v(", which enables the escrowing of fees for a packet at the next sequence send and should be combined into one "),s("code",[e._v("MultiMsgTx")]),e._v(" with the message that will be paid for.")]),e._v(" "),s("p",[e._v("Note that the "),s("code",[e._v("Relayers")]),e._v(" field has been set up to allow for an optional whitelist of relayers permitted to receive this fee, however, this feature has not yet been enabled at this time.")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNc2dQYXlQYWNrZXRGZWUgc3RydWN0ewogIC8vIGZlZSBlbmNhcHN1bGF0ZXMgdGhlIHJlY3YsIGFjayBhbmQgdGltZW91dCBmZWVzIGFzc29jaWF0ZWQgd2l0aCBhbiBJQkMgcGFja2V0CiAgRmVlICAgICAgICAgICAgICAgICBGZWUKICAvLyB0aGUgc291cmNlIHBvcnQgdW5pcXVlIGlkZW50aWZpZXIKICBTb3VyY2VQb3J0SWQgICAgICAgIHN0cmluZwogIC8vIHRoZSBzb3VyY2UgY2hhbm5lbCB1bmlxdWUgaWRlbnRpZmVyCiAgU291cmNlQ2hhbm5lbElkICAgICBzdHJpbmcKICAvLyBhY2NvdW50IGFkZHJlc3MgdG8gcmVmdW5kIGZlZSBpZiBuZWNlc3NhcnkKICBTaWduZXIgICAgICAgICAgICAgIHN0cmluZwogIC8vIG9wdGlvbmFsIGxpc3Qgb2YgcmVsYXllcnMgcGVybWl0dGVkIHRvIHRoZSByZWNlaXZlIHBhY2tldCBmZWUKICBSZWxheWVycyAgICAgICAgICAgIFtdc3RyaW5nCn0K"}}),e._v(" "),s("p",[e._v("The "),s("code",[e._v("Fee")]),e._v(" message contained in this synchronous fee payment method configures different fees which will be paid out for "),s("code",[e._v("MsgRecvPacket")]),e._v(", "),s("code",[e._v("MsgAcknowledgement")]),e._v(", and "),s("code",[e._v("MsgTimeout")]),e._v("/"),s("code",[e._v("MsgTimeoutOnClose")]),e._v(".")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBGZWUgc3RydWN0IHsKICAgIFJlY3ZGZWUgICAgICAgICAgICAgdHlwZXMuQ29pbnMKICAgIEFja0ZlZSAgICAgICAgICAgICAgdHlwZXMuQ29pbnMKICAgIFRpbWVvdXRGZWUgICAgICAgICAgdHlwZXMuQ29pbnMKfQo="}})],1)]),e._v(" "),s("p",[e._v("The diagram below shows the "),s("code",[e._v("MultiMsgTx")]),e._v(" with the "),s("code",[e._v("MsgTransfer")]),e._v(" coming from a token transfer message, along with "),s("code",[e._v("MsgPayPacketFee")]),e._v(".")]),e._v(" "),s("p",[s("img",{attrs:{src:a(569),alt:"MsgPayPacketFee"}})]),e._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[s("code",[e._v("MsgPayPacketFeeAsync")]),e._v(", which enables the asynchronous escrowing of fees for a specified packet:")]),e._v(" "),s("p",[e._v("Note that a packet can be 'topped up' multiple times with additional fees of any coin denomination by broadcasting multiple "),s("code",[e._v("MsgPayPacketFeeAsync")]),e._v(" messages.")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNc2dQYXlQYWNrZXRGZWVBc3luYyBzdHJ1Y3QgewogIC8vIHVuaXF1ZSBwYWNrZXQgaWRlbnRpZmllciBjb21wcmlzZWQgb2YgdGhlIGNoYW5uZWwgSUQsIHBvcnQgSUQgYW5kIHNlcXVlbmNlCiAgUGFja2V0SWQgICAgICAgICAgICBjaGFubmVsdHlwZXMuUGFja2V0SWQKICAvLyB0aGUgcGFja2V0IGZlZSBhc3NvY2lhdGVkIHdpdGggYSBwYXJ0aWN1bGFyIElCQyBwYWNrZXQKICBQYWNrZXRGZWUgICAgICAgICAgIFBhY2tldEZlZQp9Cg=="}}),e._v(" "),s("p",[e._v("where the "),s("code",[e._v("PacketFee")]),e._v(" also specifies the "),s("code",[e._v("Fee")]),e._v(" to be paid as well as the refund address for fees which are not paid out")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBQYWNrZXRGZWUgc3RydWN0IHsKICAgIEZlZSAgICAgICAgICAgICAgICAgICAgRmVlCiAgICBSZWZ1bmRBZGRyZXNzICAgICAgICAgIHN0cmluZwogICAgUmVsYXllcnMgICAgICAgICAgICAgICBbXXN0cmluZwp9Cg=="}})],1)]),e._v(" "),s("p",[e._v("The diagram below shows how multiple "),s("code",[e._v("MsgPayPacketFeeAsync")]),e._v(" can be broadcasted asynchronously. Escrowing of the fee associated with a packet can be carried out by any party because ICS-29 does not dictate a particular fee payer. In fact, chains can choose to simply not expose this fee payment to end users at all and rely on a different module account or even the community pool as the source of relayer incentives.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(570),alt:"MsgPayPacketFeeAsync"}})]),e._v(" "),s("p",[e._v("Please see our "),s("a",{attrs:{href:"https://github.com/cosmos/ibc-go/wiki/Fee-enabled-fungible-token-transfers",target:"_blank",rel:"noopener noreferrer"}},[e._v("wiki"),s("OutboundLink")],1),e._v(" for example flows on how to use these messages to incentivise a token transfer channel using a CLI.")]),e._v(" "),s("h2",{attrs:{id:"paying-out-the-escrowed-fees"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#paying-out-the-escrowed-fees"}},[e._v("#")]),e._v(" Paying out the escrowed fees")]),e._v(" "),s("p",[e._v("Following diagram takes a look at the packet flow for an incentivized token transfer and investigates the several scenario's for paying out the escrowed fees. We assume that the relayers have registered their counterparty address, detailed in the "),s("RouterLink",{attrs:{to:"/middleware/ics29-fee/fee-distribution.html"}},[e._v("Fee distribution section")]),e._v(".")],1),e._v(" "),s("p",[s("img",{attrs:{src:a(571),alt:"packet-flow-fee"}})]),e._v(" "),s("ul",[s("li",[e._v("In the case of a successful transaction, "),s("code",[e._v("RecvFee")]),e._v(" will be paid out to the designated counterparty payee address which has been registered on the receiver chain and sent back with the "),s("code",[e._v("MsgAcknowledgement")]),e._v(", "),s("code",[e._v("AckFee")]),e._v(" will be paid out to the relayer address which has submitted the "),s("code",[e._v("MsgAcknowledgement")]),e._v(" on the sending chain (or the registered payee in case one has been registered for the relayer address), and "),s("code",[e._v("TimeoutFee")]),e._v(" will be reimbursed to the account which escrowed the fee.")]),e._v(" "),s("li",[e._v("In case of a timeout transaction, "),s("code",[e._v("RecvFee")]),e._v(" and "),s("code",[e._v("AckFee")]),e._v(" will be reimbursed. The "),s("code",[e._v("TimeoutFee")]),e._v(" will be paid to the "),s("code",[e._v("Timeout Relayer")]),e._v(" (who submits the timeout message to the source chain).")])]),e._v(" "),s("blockquote",[s("p",[e._v("Please note that fee payments are built on the assumption that sender chains are the source of incentives — the chain that sends the packets is the same chain where fee payments will occur -- please see the "),s("RouterLink",{attrs:{to:"/middleware/ics29-fee/fee-distribution.html"}},[e._v("Fee distribution section")]),e._v(" to understand the flow for registering payee and counterparty payee (fee receiving) addresses.")],1)]),e._v(" "),s("h2",{attrs:{id:"a-locked-fee-middleware-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-locked-fee-middleware-module"}},[e._v("#")]),e._v(" A locked fee middleware module")]),e._v(" "),s("p",[e._v("The fee middleware module can become locked if the situation arises that the escrow account for the fees does not have sufficient funds to pay out the fees which have been escrowed for each packet. "),s("em",[e._v("This situation indicates a severe bug.")]),e._v(" In this case, the fee module will be locked until manual intervention fixes the issue.")]),e._v(" "),s("blockquote",[s("p",[e._v("A locked fee module will simply skip fee logic and continue on to the underlying packet flow. A channel with a locked fee module will temporarily function as a fee disabled channel, and the locking of a fee module will not affect the continued flow of packets over the channel.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);