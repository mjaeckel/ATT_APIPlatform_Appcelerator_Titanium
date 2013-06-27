Ext.data.JsonP.ATT_SMS({"inheritdoc":null,"extends":"ATT","uses":[],"subclasses":[],"superclasses":["ATT"],"meta":{},"component":false,"requires":[],"mixedInto":[],"files":[{"href":"attAPI.html#ATT-SMS","filename":"attAPI.js"}],"tagname":"class","enum":null,"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/ATT' rel='ATT' class='docClass'>ATT</a><div class='subclass '><strong>ATT.SMS</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/attAPI.html#ATT-SMS' target='_blank'>attAPI.js</a></div></pre><div class='doc-contents'><p><b>Introduction:</b></p>\n\n<p>The Short Message Service (SMS) API enables authorized applications to send SMS messages to devices on the AT&amp;T network. The API also allows applications to query the delivery status of SMS messages sent from an application.</p>\n\n<p><b>Description:</b></p>\n\n<p>The SMS API enables you to target specific customers with alerts and information. Additionally, the SMS API can give your customers the ability to respond to your messages in near real-time.</p>\n\n<p><b>Methods:</b></p>\n\n<p>1) getSMS</p>\n\n<p>2) getSMSDeliveryStatus</p>\n\n<p>3) sendSMS</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getSMS' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ATT.SMS'>ATT.SMS</span><br/><a href='source/attAPI.html#ATT-SMS-method-getSMS' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ATT.SMS-method-getSMS' class='name expandable'>getSMS</a>( <span class='pre'>options, success, error</span> ) : Object</div><div class='description'><div class='short'>Retrieves a list of SMS messages that were sent to the application's short code. ...</div><div class='long'><p>Retrieves a list of SMS messages that were sent to the application's short code.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>A JSON object containing the following properties:</p>\n<ul><li><span class='pre'>registrationId</span> : String<div class='sub-desc'><p>The ID of the application which is a short code that is obtained when you register your application with AT&amp;T.</p>\n</div></li><li><span class='pre'>accept</span> : String (optional)<div class='sub-desc'><p>Specifies the format of the body of the response. Valid values are:</p>\n\n<p>• application/json</p>\n\n<p>• application/xml.</p>\n\n<p>The default value is: application/json</p>\n</div></li></ul></div></li><li><span class='pre'>success</span> : Function<div class='sub-desc'><p>The callback function that is called when the method returns success.</p>\n</div></li><li><span class='pre'>error</span> : Function<div class='sub-desc'><p>The callback function that is called when the method returns an error.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object containing the response. The format of the response (JSON or XML) is specified by the value of the accept parameter in the request.</p>\n\n<p><strong>Example:</strong></p>\n\n<p>The following is an example of the getSMS method.</p>\n\n<pre><code> getSMS({\n      'accept' : 'application/json',\n      'registrationId' : &lt;put registrationId here&gt;\n  }, function(data) {\n\n       success Callback\n\n  }, function(error) {\n\n       error Callback\n\n  });\n</code></pre>\n</div></li></ul></div></div></div><div id='method-getSMSDeliveryStatus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ATT.SMS'>ATT.SMS</span><br/><a href='source/attAPI.html#ATT-SMS-method-getSMSDeliveryStatus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ATT.SMS-method-getSMSDeliveryStatus' class='name expandable'>getSMSDeliveryStatus</a>( <span class='pre'>options, success, error</span> ) : Object</div><div class='description'><div class='short'>Checks the status of a sent SMS message. ...</div><div class='long'><p>Checks the status of a sent SMS message.</p>\n\n<p>A final state is reached when the DeliveryStatus field of a DeliveryInfo object is set to one of the following values:</p>\n\n<p>• DeliveredToTerminal</p>\n\n<p>• DeliveryImpossible</p>\n\n<p>• DeliveredToNetwork</p>\n\n<p>A single successful delivery status query can be made for a period of thirty minutes following the time a message DeliveryInfo object has been set to a final state. Thirty minutes after a query of the DeliveryInfo object has returned a final state, the DeliveryInfo object may not be available for query.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>A JSON object containing the following properties:</p>\n<ul><li><span class='pre'>smsId</span> : String<div class='sub-desc'><p>The SMS request id that is returned by the sendSMS method as part of the response object.</p>\n</div></li><li><span class='pre'>accept</span> : String (optional)<div class='sub-desc'><p>Specifies the format of the body of the response. Valid values are:</p>\n\n<p>•  application/json</p>\n\n<p>•  application/xml.</p>\n\n<p>The default value is: application/json</p>\n</div></li></ul></div></li><li><span class='pre'>success</span> : Function<div class='sub-desc'><p>The callback function that is called when the method returns success.</p>\n</div></li><li><span class='pre'>error</span> : Function<div class='sub-desc'><p>The callback function that is called when the method returns error.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object containing the response. The format of the response (JSON or XML) is specified by the value of the accept parameter in the request.</p>\n\n<p><strong>Example:</strong></p>\n\n<p>The following is an example of the getSMSDeliveryStatus method.</p>\n\n<pre><code> getSMSDeliveryStatus({\n      'smsId' : &lt;put smsId here&gt;,\n      'accept' : 'application/json'\n\n  }, function(data) {\n\n       success Callback\n\n  }, function(error) {\n\n       error Callback\n\n  });\n</code></pre>\n</div></li></ul></div></div></div><div id='method-sendSMS' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ATT.SMS'>ATT.SMS</span><br/><a href='source/attAPI.html#ATT-SMS-method-sendSMS' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ATT.SMS-method-sendSMS' class='name expandable'>sendSMS</a>( <span class='pre'>options, success, error</span> ) : Object</div><div class='description'><div class='short'>Sends an SMS message to a recipient. ...</div><div class='long'><p>Sends an SMS message to a recipient.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>A JSON object containing the following properties:</p>\n<ul><li><span class='pre'>body</span> : Object<div class='sub-desc'><p>An Object containing the following properties:</p>\n<ul><li><span class='pre'>address</span> : String<div class='sub-desc'><p>The MSISDN of the recipient(s).</p>\n</div></li><li><span class='pre'>message</span> : String<div class='sub-desc'><p>The text of the message to send.</p>\n</div></li></ul></div></li><li><span class='pre'>contentType</span> : String<div class='sub-desc'><p>Valid values are:</p>\n\n<p>• application/json</p>\n\n<p>• application/xml</p>\n\n<p>• application/x-www-form-urlencoded</p>\n</div></li><li><span class='pre'>accept</span> : String (optional)<div class='sub-desc'><p>Specifies the format of the body of the response. Valid values are:</p>\n\n<p>• application/json</p>\n\n<p>• application/xml</p>\n\n<p>The default value is: application/json</p>\n</div></li></ul></div></li><li><span class='pre'>success</span> : Function<div class='sub-desc'><p>The callback function that is called when the method returns success.</p>\n</div></li><li><span class='pre'>error</span> : Function<div class='sub-desc'><p>The callback function that is called when the method returns an error.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object containing the response. The format of the response (JSON or XML) is specified by the value of the accept parameter in the request. This response object contains the SMS ID that is used in the smsId property of the options parameter in the getSMSDeliveryStatus method.</p>\n\n<p><strong>Examples:</strong></p>\n\n<p><b>1.</b> The following example of the sendSMS method uses a contentType of 'application/json'.</p>\n\n<pre><code>  sendSMS({\n      'body':{\"message\":\"Test AT&amp;T REST\",  \"address\":\"tel:xxxxxxxxxx\"},//For Multiple Phone Number :- \"address\":[\"tel:xxxxxxxxxx\",\"tel:xxxxxxxxxx\"]\n      'accept' : 'application/json',\n      'contentType' : 'application/json'\n  }, function(data) {\n\n      //success Callback\n\n  }, function(error) {\n\n      //error Callback\n\n  });\n</code></pre>\n\n<p><b>2.</b> The following example of the sendSMS method uses a contentType of 'application/xml'.</p>\n\n<pre><code>  sendSMS({\n      \"body\":\"&lt;outboundSMSRequest&gt;&lt;address&gt;tel:xxxxxxxxxx&lt;/address&gt;&lt;message&gt;Test XML &lt;/message&gt;&lt;/outboundSMSRequest&gt;\",\n      'accept' : 'application/json',\n      'contentType' : 'application/xml'\n  }, function(data) {\n\n      //success Callback\n\n  }, function(error) {\n\n      //error Callback\n\n  });\n</code></pre>\n\n<p><b>3.</b> The following example of the sendSMS method uses a contentType of 'application/x-www-form-urlencoded'.</p>\n\n<pre><code>  sendSMS({\n      \"body\":\"address=tel%3A%2B1xxxxxxxxxx&amp;address=tel%3A%2B1xxxxxxxxxx&amp;message=URL%20ENCODED\",\n      'accept' : 'application/json',\n      'contentType' : 'application/x-www-form-urlencoded'\n  }, function(data) {\n\n      //success Callback\n\n  }, function(error) {\n\n      //error Callback\n\n  });\n</code></pre>\n\n<p><i>Note: xxxxxxxxxx represents an AT&amp;T wireless number</i></p>\n</div></li></ul></div></div></div></div></div></div></div>","members":{"cfg":[],"property":[],"css_var":[],"method":[{"meta":{},"owner":"ATT.SMS","tagname":"method","name":"getSMS","id":"method-getSMS"},{"meta":{},"owner":"ATT.SMS","tagname":"method","name":"getSMSDeliveryStatus","id":"method-getSMSDeliveryStatus"},{"meta":{},"owner":"ATT.SMS","tagname":"method","name":"sendSMS","id":"method-sendSMS"}],"event":[],"css_mixin":[]},"inheritable":null,"parentMixins":[],"singleton":false,"override":null,"private":null,"name":"ATT.SMS","mixins":[],"statics":{"cfg":[],"property":[],"css_var":[],"method":[],"event":[],"css_mixin":[]},"linenr":23,"id":"class-ATT.SMS","alternateClassNames":[],"aliases":{},"html_meta":{}});