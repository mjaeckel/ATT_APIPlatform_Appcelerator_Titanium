Ext.data.JsonP.ATT_Speech({"parentMixins":[],"statics":{"css_var":[],"event":[],"css_mixin":[],"method":[],"cfg":[],"property":[]},"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/attTitaniumAPI.html#ATT-Speech' target='_blank'>attTitaniumAPI.js</a></div></pre><div class='doc-contents'><p><b>Introduction:</b></p>\n\n<p>The Speech API enables authorized applications to transcribe speech (audio) to text. The developer can influence the results by passing a speech context in the request.</p>\n\n<p><b>Description:</b></p>\n\n<p>The Speech API is a service that accepts audio data and returns the text representation of that audio. The text output can then be processed by different speech contexts to produce text results that represent that speech context. Each speech context is tuned to produce results more suitable for a given scenario.</p>\n\n<p><b>Methods:</b></p>\n\n<p>1) speechToText</p>\n\n<p>2) speechToTextCustom</p>\n\n<p>3) textToSpeech</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-speechToText' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ATT.Speech'>ATT.Speech</span><br/><a href='source/attTitaniumAPI.html#ATT-Speech-method-speechToText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ATT.Speech-method-speechToText' class='name expandable'>speechToText</a>( <span class='pre'>options, success, error</span> ) : Object</div><div class='description'><div class='short'>Returns a text translation of the specified audio file using the specified speech context. ...</div><div class='long'><p>Returns a text translation of the specified audio file using the specified speech context. The audio file must have one of the following sets of constraints: 16 bit PCM WAV, single channel, 8 kHz sampling, or AMR (narrowband), 12.2 kbit/s, 8 kHz sampling.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>A JSON object containing the following properties:</p>\n<ul><li><span class='pre'>filePath</span> : String<div class='sub-desc'><p>Path of audio file that will to be translated to text (For Android,Path should be in this format : /mnt/sdcard/.../fileName.fileExtension).</p>\n</div></li><li><span class='pre'>transferEncoding</span> : String (optional)<div class='sub-desc'><p>This header parameter is only required for a streaming request, and should be set to chunked.</p>\n</div></li><li><span class='pre'>xSpeechContext</span> : String (optional)<div class='sub-desc'><p>Specifies the speech context to be applied to the transcribed text. Valid values are:</p>\n\n<p>• Generic</p>\n\n<p>• TV</p>\n\n<p>• BusinessSearch</p>\n\n<p>• Websearch</p>\n\n<p>• SMS</p>\n\n<p>• Voicemail</p>\n\n<p>• QuestionAndAnswer</p>\n\n<p>• Gaming</p>\n\n<p>• SocialMedia</p>\n\n<p>If <b>TV</b> context is chosen, then the X-Arg parameter <b>Search</b> must be defined.</p>\n<p>Defaults to: <code>&quot;Generic&quot;</code></p></div></li><li><span class='pre'>contentType</span> : String<div class='sub-desc'><p>The content type of the request. Valid values are:</p>\n\n<p>• audio/wav (or audio/x-wav)</p>\n\n<p>• audio/amr</p>\n\n<p>• audio/amr-wb</p>\n\n<p>• audio/x-speex</p>\n\n<p>• audio/x-speex-with-header-byte;rate=16000</p>\n\n<p>• audio/x-speex-with-header-byte;rate=8000</p>\n\n<p>• audio/raw;coding=linear;rate=16000;byteorder=LE</p>\n\n<p>• audio/raw;coding=linear;rate=16000;byteorder=BE</p>\n\n<p>• audio/raw;coding=linear;rate=8000;byteorder=LE</p>\n\n<p>• audio/raw;coding=linear;rate=8000;byteorder=BE</p>\n\n<p>• audio/raw;coding=ulaw;rate=16000</p>\n\n<p>• audio/raw;coding=ulaw;rate=8000</p>\n\n<p>Note: the API Gateway shall not modify this header when passed onto the Speech enabler, except to remove white space in order to ensure consistent use of parameters.</p>\n</div></li><li><span class='pre'>accept</span> : String (optional)<div class='sub-desc'><p>Specifies the format of the body of the response. Valid values are:</p>\n\n<p>• application/json</p>\n\n<p>• application/xml</p>\n<p>Defaults to: <code>&quot;application/json&quot;</code></p></div></li><li><span class='pre'>contentLength</span> : Number (optional)<div class='sub-desc'><p><b>(IOS only).</b>This header parameter is only required for the <b>non-streaming request.</b></p>\n</div></li><li><span class='pre'>contentLanguage</span> : String (optional)<div class='sub-desc'><p>Only Specifies the language of the submitted audio.  Only used when xSpeechContext parameter is set to “Generic”.  Choose one of the following two choices:</p>\n\n<p>• \"en-US\" (English - United States)</p>\n\n<p>• \"es-US\" (Spanish - United States)</p>\n<p>Defaults to: <code>&quot;en-US&quot;</code></p></div></li><li><span class='pre'>xSpeechSubContext</span> : String (optional)<div class='sub-desc'><p>Only used when xSpeechContext parameter is set to “Gaming”.</p>\n</div></li><li><span class='pre'>xArgs</span> : String/Object (optional)<div class='sub-desc'><p>If a string is passed in xArgs should be a comma separated URL encoded list to define multiple name/value pairs.\nOtherwise pass in a flat object of name/value pairs. If xArgs is an object then the values passed in will be URL encoded</p>\n</div></li></ul></div></li><li><span class='pre'>success</span> : Function<div class='sub-desc'><p>The callback function that is called when the method returns success.</p>\n</div></li><li><span class='pre'>error</span> : Function<div class='sub-desc'><p>The callback function that is called when the method returns an error.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object containing the response. The format of the response (JSON or XML) is specified by the value of the accept parameter in the request.</p>\n\n<p><b>Example:</b></p>\n\n<p>The following is an example of the speechToText method.</p>\n\n<pre><code> speechToText({\n     'filePath':'Path of audio file'//In android,Path should be like : /mnt/sdcard/.../example.wav.\n     'xSpeechContext' : 'Generic',\n     'contentType' : 'audio/wav',\n     'contentLength' : length,//For IOS only.\n     'accept':'application/json'\n     'contentLanguage': 'es-US'\n }, function(data) {\n\n     //success Callback\n\n }, function(error) {\n\n     //error Callback\n\n });\n</code></pre>\n</div></li></ul></div></div></div><div id='method-speechToTextCustom' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ATT.Speech'>ATT.Speech</span><br/><a href='source/attTitaniumAPI.html#ATT-Speech-method-speechToTextCustom' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ATT.Speech-method-speechToTextCustom' class='name expandable'>speechToTextCustom</a>( <span class='pre'>params, success, fail</span> )</div><div class='description'><div class='short'>This method returns a text translation of a specified audio file using a custom set of hints for pronunciation and gr...</div><div class='long'><p>This method returns a text translation of a specified audio file using a custom set of hints for pronunciation and grammar. The audio file must be created in one of the following formats:</p>\n\n<p>• 16-bit PCM WAV, single channel, 8 kHz sampling</p>\n\n<p>• AMR (narrowband), 12.2 kbit/s, 8 kHz sampling.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>params</span> : Object<div class='sub-desc'><p>An Object containing the following properties:</p>\n<ul><li><span class='pre'>audioFile</span> : String/Object (optional)<div class='sub-desc'><p>A string with a filePath to the audio file or an object with the following properties:</p>\n<ul><li><span class='pre'>filePath</span> : String (optional)<div class='sub-desc'><p>The path to the audio file. If params.audioFile.body is also defined, this will be used as the file name in the request.</p>\n</div></li><li><span class='pre'>body</span> : String (optional)<div class='sub-desc'><p>The audio file content.</p>\n</div></li><li><span class='pre'>type</span> : String (optional)<div class='sub-desc'><p>The MIME type of the audio file.</p>\n</div></li><li><span class='pre'>encoding</span> : String (optional)<div class='sub-desc'><p>The encoding format of the audio file.</p>\n</div></li></ul></div></li><li><span class='pre'>grammar</span> : String (optional)<div class='sub-desc'><p>String of a file path or a string in Speech Recognition Grammar Specification (SRGS) format.</p>\n</div></li><li><span class='pre'>grammarPrefix</span> : String (optional)<div class='sub-desc'><p>Grammar rules for the prefix speech following the same format as params.grammar</p>\n</div></li><li><span class='pre'>grammarAltgram</span> : String (optional)<div class='sub-desc'><p>Grammar rules for alternative grammar, following the same format as params.grammar</p>\n</div></li><li><span class='pre'>dictionary</span> : String (optional)<div class='sub-desc'><p>String of a file path with pronunciation hints in the Pronunciation Lexicon Specification (PLS) format, or a string containing the pronunciation hints in the PLS format.</p>\n</div></li><li><span class='pre'>language</span> : String (optional)<div class='sub-desc'><p>The language of the audio recording, specified as an ISO code language string.</p>\n</div></li><li><span class='pre'>xArg</span> : String/Object (optional)<div class='sub-desc'><p>Either a comma-separated URL-encoded string or a flat object consisting of xArg parameter key/value pairs.  Please visit the <a href=\"https://developer.att.com/developer/basicTemplate.jsp?passedItemId=13100102&api=Speech&version=3\">AT&amp;T Restful API</a> for a list of all possible values</p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>A set of options for the request.</p>\n<ul><li><span class='pre'>emma</span> : Boolean (optional)<div class='sub-desc'><p>The option to callback with the response as a string following the EMMA protocol.</p>\n</div></li><li><span class='pre'>strict</span> : Boolean (optional)<div class='sub-desc'><p>If set to true, the response will strictly follow the passed in grammar rules</p>\n</div></li><li><span class='pre'>chunked</span> : Boolean (optional)<div class='sub-desc'><p>If set to true, this will send the audio file to server using a chunked protocol.</p>\n</div></li></ul></div></li></ul></div></li><li><span class='pre'>success</span> : Function<div class='sub-desc'><p>This method is called if data is successfully returned.  The first argument will be contain the response in JSON object defined by the <a href=\"https://developer.att.com/developer/basicTemplate.jsp?passedItemId=13100102&api=Speech&version=3\">AT&amp;T Restful API</a>.</p>\n</div></li><li><span class='pre'>fail</span> : Function<div class='sub-desc'><p>This method is called if an error occurs.</p>\n</div></li></ul></div></div></div><div id='method-textToSpeech' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ATT.Speech'>ATT.Speech</span><br/><a href='source/attTitaniumAPI.html#ATT-Speech-method-textToSpeech' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ATT.Speech-method-textToSpeech' class='name expandable'>textToSpeech</a>( <span class='pre'>options, success, error</span> ) : Object</div><div class='description'><div class='short'>Returns an audio file in a particular voice and language for the text sent. ...</div><div class='long'><p>Returns an audio file in a particular voice and language for the text sent.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>Specifies a JSON object that contains properties for the following parameters:</p>\n<ul><li><span class='pre'>accept</span> : String<div class='sub-desc'><p>Specifies the audio file type that has to be generated. These are following audio types that can be requested for audio generation: audio/amr, audio/amr-wb and audio/x-wav.</p>\n</div></li><li><span class='pre'>contentType</span> : String<div class='sub-desc'><p>Specifies the format in which the content is being transmitted in the body. Following are the Content Types that are supported text/plain and application/ssml+xml.</p>\n</div></li><li><span class='pre'>body</span> : String<div class='sub-desc'><p>Specifies the text content that needs to be converted to audio file.</p>\n</div></li><li><span class='pre'>filePath</span> : String<div class='sub-desc'><p>Specifies the path where the audio file has to be stored after the text translation. The proper file extension (based on the “accept”) is added if one is not provided as part of the file path. (For the Android platform, the path should remove the \"file://\" protocol).</p>\n</div></li><li><span class='pre'>xArg</span> : String/Object (optional)<div class='sub-desc'><p>This parameter exposes the properties through which the audio file generation can have few variations like changing the audio voice character, tempo of the audio file and volume of the audio file when generated. Acceptable values for this property are</p>\n\n<p>• VoiceName</p>\n\n<p>• Tempo</p>\n\n<p>• Volume</p>\n\n<p>• AppId</p>\n\n<p>• OrgId</p>\n\n<p>• ClientApp</p>\n\n<p>• Client Version</p>\n\n<p>• Client Screen</p>\n\n<p>If <b>VoiceName</b> to be specified in particular then this property has to be updated with the preset voice characters.</p>\n\n<p>• mike</p>\n\n<p>• crystal</p>\n\n<p>• rosa</p>\n\n<p>• alberto</p>\n</div></li><li><span class='pre'>accept</span> : String (optional)<div class='sub-desc'><p>Specifies the format of the audio file that is generated by this method including the following audio types: audio/amr, audio/amr-wb and audio/x-wav.</p>\n\n<p>The acceptable values for this parameter are:</p>\n\n<p>• audio/wav</p>\n\n<p>• audio/amr</p>\n\n<p>• audio/amr-wb</p>\n</div></li></ul></div></li><li><span class='pre'>success</span> : Function<div class='sub-desc'><p>The callback function that is called when the method returns success.</p>\n</div></li><li><span class='pre'>error</span> : Function<div class='sub-desc'><p>The callback function that is called when the method returns an error.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>A JSON formatted object that contains the path of the audio file. The filepath returned with file name and extension is specified by the value of the accept parameter in the call to the textToSpeech method.</p>\n\n<p><b>Example:</b></p>\n\n<p>The following is an example for textToSpeech request method.</p>\n\n<pre><code>textToSpeech({\n    \"accept\" :     \"audio/wav\",\n    \"contentType\": \"text/plain\",\n    \"body\":        text,\n    \"filePath\":    filePath,\n    \"xArg\":        \"VoiceName=crystal\"\n\n}, function(data) {\n    // success CallBack\n}, function(error) {\n    //failure Callback\n});\n</code></pre>\n</div></li></ul></div></div></div></div></div></div></div>","tagname":"class","inheritable":null,"singleton":false,"override":null,"html_meta":{},"mixins":[],"files":[{"href":"attTitaniumAPI.html#ATT-Speech","filename":"attTitaniumAPI.js"}],"linenr":688,"members":{"css_var":[],"event":[],"css_mixin":[],"method":[{"tagname":"method","owner":"ATT.Speech","name":"speechToText","id":"method-speechToText","meta":{}},{"tagname":"method","owner":"ATT.Speech","name":"speechToTextCustom","id":"method-speechToTextCustom","meta":{}},{"tagname":"method","owner":"ATT.Speech","name":"textToSpeech","id":"method-textToSpeech","meta":{}}],"cfg":[],"property":[]},"alternateClassNames":[],"aliases":{},"inheritdoc":null,"component":false,"private":null,"subclasses":[],"name":"ATT.Speech","extends":null,"uses":[],"mixedInto":[],"superclasses":[],"id":"class-ATT.Speech","enum":null,"meta":{},"requires":[]});