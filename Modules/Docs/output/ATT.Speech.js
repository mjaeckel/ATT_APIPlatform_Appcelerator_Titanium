Ext.data.JsonP.ATT_Speech({"inheritdoc":null,"extends":"ATT","uses":[],"subclasses":[],"superclasses":["ATT"],"meta":{},"component":false,"requires":[],"mixedInto":[],"files":[{"href":"attAPI.html#ATT-Speech","filename":"attAPI.js"}],"tagname":"class","enum":null,"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/ATT' rel='ATT' class='docClass'>ATT</a><div class='subclass '><strong>ATT.Speech</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/attAPI.html#ATT-Speech' target='_blank'>attAPI.js</a></div></pre><div class='doc-contents'><p><b>Introduction:</b></p>\n\n<p>The Speech API enables authorized applications to transcribe speech (audio) to text. The developer can influence the results by passing a speech context in the request.</p>\n\n<p><b>Description:</b></p>\n\n<p>The Speech API is a service which accepts audio data and returns the text representation of that audio. The text output can then be processed by different speech contexts to produce text results that represent that speech context. Each speech context is tuned to produce results more suitable for a given scenario.</p>\n\n<p><b>Methods:</b></p>\n\n<p>1) speechToText</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-speechToText' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ATT.Speech'>ATT.Speech</span><br/><a href='source/attAPI.html#ATT-Speech-method-speechToText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ATT.Speech-method-speechToText' class='name expandable'>speechToText</a>( <span class='pre'>options, success, error</span> ) : Object</div><div class='description'><div class='short'>Returns a text translation of the specified audio file using the specified speech context. ...</div><div class='long'><p>Returns a text translation of the specified audio file using the specified speech context. The audio file must have one of the following sets of constraints: 16 bit PCM WAV, single channel, 8 kHz sampling, or AMR (narrowband), 12.2 kbit/s, 8 kHz sampling.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>A JSON object containing the following properties:</p>\n<ul><li><span class='pre'>filePath</span> : String<div class='sub-desc'><p>Path of audio file that will to be translated to text (For Android,Path should be in this format : /mnt/sdcard/.../fileName.fileExtension).</p>\n</div></li><li><span class='pre'>transferEncoding</span> : String (optional)<div class='sub-desc'><p>This header parameter is only required for a streaming request, and should be set to chunked.</p>\n</div></li><li><span class='pre'>xSpeechContext</span> : String (optional)<div class='sub-desc'><p>Specifies the speech context to be applied to the transcribed text. Valid values are:</p>\n\n<p>• Generic</p>\n\n<p>• TV</p>\n\n<p>• BusinessSearch</p>\n\n<p>• Websearch</p>\n\n<p>• SMS</p>\n\n<p>• Voicemail</p>\n\n<p>• QuestionAndAnswer</p>\n\n<p>• Gaming</p>\n\n<p>• SocialMedia</p>\n\n<p>If <b>TV</b> context is chosen, then the X-Arg parameter <b>Search</b> must be defined.</p>\n<p>Defaults to: <code>&quot;Generic&quot;</code></p></div></li><li><span class='pre'>contentType</span> : String<div class='sub-desc'><p>The content type of the request. Valid values are:</p>\n\n<p>• audio/wav (or audio/x-wav)</p>\n\n<p>• audio/amr</p>\n\n<p>• audio/amr-wb</p>\n\n<p>• audio/x-speex</p>\n\n<p>• audio/x-speex-with-header-byte;rate=16000</p>\n\n<p>• audio/x-speex-with-header-byte;rate=8000</p>\n\n<p>• audio/raw;coding=linear;rate=16000;byteorder=LE</p>\n\n<p>• audio/raw;coding=linear;rate=16000;byteorder=BE</p>\n\n<p>• audio/raw;coding=linear;rate=8000;byteorder=LE</p>\n\n<p>• audio/raw;coding=linear;rate=8000;byteorder=BE</p>\n\n<p>• audio/raw;coding=ulaw;rate=16000</p>\n\n<p>• audio/raw;coding=ulaw;rate=8000</p>\n\n<p>Note: the API Gateway shall not modify this header when passed onto the Speech enabler, except to remove white space in order to ensure consistent use of parameters.</p>\n</div></li><li><span class='pre'>accept</span> : String (optional)<div class='sub-desc'><p>Specifies the format of the body of the response. Valid values are:</p>\n\n<p>• application/json</p>\n\n<p>• application/xml</p>\n<p>Defaults to: <code>&quot;application/json&quot;</code></p></div></li><li><span class='pre'>contentLength</span> : Number (optional)<div class='sub-desc'><p><b>(IOS only).</b>This header parameter is only required for the <b>non-streaming request.</b></p>\n</div></li><li><span class='pre'>contentLanguage</span> : String (optional)<div class='sub-desc'><p>Only Specifies the language of the submitted audio.  Only used when xSpeechContext parameter is set to “Generic”.  Choose one of the following two choices:</p>\n\n<p>• \"en-US\" (English - United States)</p>\n\n<p>• \"es-US\" (Spanish - United States)</p>\n<p>Defaults to: <code>&quot;en-US&quot;</code></p></div></li><li><span class='pre'>xSpeechSubContext</span> : String (optional)<div class='sub-desc'><p>Only used when xSpeechContext parameter is set to “Gaming”.</p>\n</div></li><li><span class='pre'>xArgs</span> : String/Object (optional)<div class='sub-desc'><p>If a string is passed in xArgs should be a comma separated URL encoded list to define multiple name/value pairs.\nOtherwise pass in a flat object of name/value pairs. If xArgs is an object then the values passed in will be URL encoded</p>\n</div></li></ul></div></li><li><span class='pre'>success</span> : Function<div class='sub-desc'><p>The callback function that is called when the method returns success.</p>\n</div></li><li><span class='pre'>error</span> : Function<div class='sub-desc'><p>The callback function that is called when the method returns an error.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object containing the response. The format of the response (JSON or XML) is specified by the value of the accept parameter in the request.</p>\n\n<p><b>Example:</b></p>\n\n<p>The following is an example of the speechToText method.</p>\n\n<pre><code> speechToText({\n     'filePath':'Path of audio file'//In android,Path should be like : /mnt/sdcard/.../example.wav.\n     'xSpeechContext' : 'Generic',\n     'contentType' : 'audio/wav',\n     'contentLength' : length,//For IOS only.\n     'accept':'application/json'\n     'contentLanguage': 'es-US'\n }, function(data) {\n\n     //success Callback\n\n }, function(error) {\n\n     //error Callback\n\n });\n</code></pre>\n</div></li></ul></div></div></div></div></div></div></div>","members":{"cfg":[],"property":[],"css_var":[],"method":[{"meta":{},"owner":"ATT.Speech","tagname":"method","name":"speechToText","id":"method-speechToText"}],"event":[],"css_mixin":[]},"inheritable":null,"parentMixins":[],"singleton":false,"override":null,"private":null,"name":"ATT.Speech","mixins":[],"statics":{"cfg":[],"property":[],"css_var":[],"method":[],"event":[],"css_mixin":[]},"linenr":689,"id":"class-ATT.Speech","alternateClassNames":[],"aliases":{},"html_meta":{}});