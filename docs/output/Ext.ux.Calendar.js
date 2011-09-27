/*!
 * 
 */
/*!
 * 
 */
/*!
 * 
 */
/*!
 * 
 */
/*!
 * 
 */
Ext.data.JsonP.Ext_ux_Calendar({"mixedInto":[],"static":false,"html_filename":"Ext.ux.Calendar.html","xtypes":[],"tagname":"class","inheritable":false,"allMixins":[],"extends":"Ext.Panel","statics":{"css_var":[],"cfg":[],"css_mixin":[],"event":[],"method":[],"property":[]},"uses":[],"members":{"css_var":[],"css_mixin":[],"cfg":[{"static":false,"required":null,"tagname":"cfg","owner":"Ext.ux.Calendar","protected":false,"deprecated":null,"name":"fullHeight"},{"static":false,"required":null,"tagname":"cfg","owner":"Ext.ux.Calendar","protected":false,"deprecated":null,"name":"maxDate"},{"static":false,"required":null,"tagname":"cfg","owner":"Ext.ux.Calendar","protected":false,"deprecated":null,"name":"minDate"},{"static":false,"required":null,"tagname":"cfg","owner":"Ext.ux.Calendar","protected":false,"deprecated":null,"name":"nextMonthCls"},{"static":false,"required":null,"tagname":"cfg","owner":"Ext.ux.Calendar","protected":false,"deprecated":null,"name":"nextPeriodCls"},{"static":false,"required":null,"tagname":"cfg","owner":"Ext.ux.Calendar","protected":false,"deprecated":null,"name":"prevMonthCls"},{"static":false,"required":null,"tagname":"cfg","owner":"Ext.ux.Calendar","protected":false,"deprecated":null,"name":"prevPeriodCls"},{"static":false,"required":null,"tagname":"cfg","owner":"Ext.ux.Calendar","protected":false,"deprecated":null,"name":"selectedCls"},{"static":false,"required":null,"tagname":"cfg","owner":"Ext.ux.Calendar","protected":false,"deprecated":null,"name":"todayCls"},{"static":false,"required":null,"tagname":"cfg","owner":"Ext.ux.Calendar","protected":false,"deprecated":null,"name":"unselectableCls"},{"static":false,"required":null,"tagname":"cfg","owner":"Ext.ux.Calendar","protected":false,"deprecated":null,"name":"value"},{"static":false,"required":null,"tagname":"cfg","owner":"Ext.ux.Calendar","protected":false,"deprecated":null,"name":"weekStart"},{"static":false,"required":null,"tagname":"cfg","owner":"Ext.ux.Calendar","protected":false,"deprecated":null,"name":"weekendCls"}],"event":[{"static":false,"required":null,"tagname":"event","owner":"Ext.ux.Calendar","protected":false,"deprecated":null,"name":"refresh"},{"static":false,"required":null,"tagname":"event","owner":"Ext.ux.Calendar","protected":false,"deprecated":null,"name":"selectionchange"}],"method":[{"static":false,"required":null,"tagname":"method","owner":"Ext.ux.Calendar","protected":false,"deprecated":null,"name":"constructor"},{"static":false,"required":null,"tagname":"method","owner":"Ext.ux.Calendar","protected":false,"deprecated":null,"name":"getCellDate"},{"static":false,"required":null,"tagname":"method","owner":"Ext.ux.Calendar","protected":false,"deprecated":null,"name":"getDateCell"},{"static":false,"required":null,"tagname":"method","owner":"Ext.ux.Calendar","protected":false,"deprecated":null,"name":"refresh"},{"static":false,"required":null,"tagname":"method","owner":"Ext.ux.Calendar","protected":false,"deprecated":null,"name":"refreshDelta"},{"static":false,"required":null,"tagname":"method","owner":"Ext.ux.Calendar","protected":false,"deprecated":null,"name":"removeSelectedCell"},{"static":false,"required":null,"tagname":"method","owner":"Ext.ux.Calendar","protected":false,"deprecated":null,"name":"selectDate"},{"static":false,"required":null,"tagname":"method","owner":"Ext.ux.Calendar","protected":false,"deprecated":null,"name":"setMode"},{"static":false,"required":null,"tagname":"method","owner":"Ext.ux.Calendar","protected":false,"deprecated":null,"name":"setValue"}],"property":[]},"author":"Stuart Ashworth","protected":false,"linenr":3,"subclasses":[],"singleton":false,"alias":null,"deprecated":null,"docauthor":null,"private":false,"superclasses":[],"mixins":[],"name":"Ext.ux.Calendar","filename":"Ext.ux.Calendar/Ext.ux.Calendar.js","component":false,"code_type":"assignment","html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Panel<div class='subclass '><strong>Ext.ux.Calendar</strong></div></div></pre><div class='doc-contents'>\n</div><div class='members'><div id='m-cfg'><div class='definedBy'>Defined By</div><h3 class='members-title'>Config options</h3><div class='subsection'><div id='cfg-fullHeight' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Calendar' rel='Ext.ux.Calendar' class='definedIn docClass'>Ext.ux.Calendar</a><br/><a href='source/Ext.ux.Calendar.html#Ext-ux-Calendar-cfg-fullHeight' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ux.Calendar-cfg-fullHeight' class='name expandable'>fullHeight</a><span> : Boolean</span></div><div class='description'><div class='short'>True to have the calendar fill the height of the Panel ...</div><div class='long'><p>True to have the calendar fill the height of the Panel</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-maxDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Calendar' rel='Ext.ux.Calendar' class='definedIn docClass'>Ext.ux.Calendar</a><br/><a href='source/Ext.ux.Calendar.html#Ext-ux-Calendar-cfg-maxDate' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ux.Calendar-cfg-maxDate' class='name expandable'>maxDate</a><span> : Date</span></div><div class='description'><div class='short'>Maximum date allowed to be shown/selected ...</div><div class='long'><p>Maximum date allowed to be shown/selected</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-minDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Calendar' rel='Ext.ux.Calendar' class='definedIn docClass'>Ext.ux.Calendar</a><br/><a href='source/Ext.ux.Calendar.html#Ext-ux-Calendar-cfg-minDate' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ux.Calendar-cfg-minDate' class='name expandable'>minDate</a><span> : Date</span></div><div class='description'><div class='short'>Minimum date allowed to be shown/selected ...</div><div class='long'><p>Minimum date allowed to be shown/selected</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-nextMonthCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Calendar' rel='Ext.ux.Calendar' class='definedIn docClass'>Ext.ux.Calendar</a><br/><a href='source/Ext.ux.Calendar.html#Ext-ux-Calendar-cfg-nextMonthCls' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ux.Calendar-cfg-nextMonthCls' class='name expandable'>nextMonthCls</a><span> : String</span></div><div class='description'><div class='short'>CSS class added to any date cells that are part of the next month ...</div><div class='long'><p>CSS class added to any date cells that are part of the next month</p>\n<p>Defaults to: <code>&quot;next-month&quot;</code></p></div></div></div><div id='cfg-nextPeriodCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Calendar' rel='Ext.ux.Calendar' class='definedIn docClass'>Ext.ux.Calendar</a><br/><a href='source/Ext.ux.Calendar.html#Ext-ux-Calendar-cfg-nextPeriodCls' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ux.Calendar-cfg-nextPeriodCls' class='name expandable'>nextPeriodCls</a><span> : String</span></div><div class='description'><div class='short'>CSS class added to the next period navigation cells in the calendar's header ...</div><div class='long'><p>CSS class added to the next period navigation cells in the calendar's header</p>\n<p>Defaults to: <code>&quot;goto-next&quot;</code></p></div></div></div><div id='cfg-prevMonthCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Calendar' rel='Ext.ux.Calendar' class='definedIn docClass'>Ext.ux.Calendar</a><br/><a href='source/Ext.ux.Calendar.html#Ext-ux-Calendar-cfg-prevMonthCls' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ux.Calendar-cfg-prevMonthCls' class='name expandable'>prevMonthCls</a><span> : String</span></div><div class='description'><div class='short'>CSS class added to any date cells that are part of the previous month ...</div><div class='long'><p>CSS class added to any date cells that are part of the previous month</p>\n<p>Defaults to: <code>&quot;prev-month&quot;</code></p></div></div></div><div id='cfg-prevPeriodCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Calendar' rel='Ext.ux.Calendar' class='definedIn docClass'>Ext.ux.Calendar</a><br/><a href='source/Ext.ux.Calendar.html#Ext-ux-Calendar-cfg-prevPeriodCls' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ux.Calendar-cfg-prevPeriodCls' class='name expandable'>prevPeriodCls</a><span> : String</span></div><div class='description'><div class='short'>CSS class added to the previous period navigation cell in the calendar's header ...</div><div class='long'><p>CSS class added to the previous period navigation cell in the calendar's header</p>\n<p>Defaults to: <code>&quot;goto-prev&quot;</code></p></div></div></div><div id='cfg-selectedCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Calendar' rel='Ext.ux.Calendar' class='definedIn docClass'>Ext.ux.Calendar</a><br/><a href='source/Ext.ux.Calendar.html#Ext-ux-Calendar-cfg-selectedCls' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ux.Calendar-cfg-selectedCls' class='name expandable'>selectedCls</a><span> : String</span></div><div class='description'><div class='short'>CSS class added to the date cell that is currently selected ...</div><div class='long'><p>CSS class added to the date cell that is currently selected</p>\n<p>Defaults to: <code>&quot;selected&quot;</code></p></div></div></div><div id='cfg-todayCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Calendar' rel='Ext.ux.Calendar' class='definedIn docClass'>Ext.ux.Calendar</a><br/><a href='source/Ext.ux.Calendar.html#Ext-ux-Calendar-cfg-todayCls' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ux.Calendar-cfg-todayCls' class='name expandable'>todayCls</a><span> : String</span></div><div class='description'><div class='short'>CSS class added to the today's date cell ...</div><div class='long'><p>CSS class added to the today's date cell</p>\n<p>Defaults to: <code>&quot;today&quot;</code></p></div></div></div><div id='cfg-unselectableCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Calendar' rel='Ext.ux.Calendar' class='definedIn docClass'>Ext.ux.Calendar</a><br/><a href='source/Ext.ux.Calendar.html#Ext-ux-Calendar-cfg-unselectableCls' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ux.Calendar-cfg-unselectableCls' class='name expandable'>unselectableCls</a><span> : String</span></div><div class='description'><div class='short'>CSS class added to any date cells that are unselectable ...</div><div class='long'><p>CSS class added to any date cells that are unselectable</p>\n<p>Defaults to: <code>&quot;unselectable&quot;</code></p></div></div></div><div id='cfg-value' class='member  not-inherited'><a href='#' class='side not-expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Calendar' rel='Ext.ux.Calendar' class='definedIn docClass'>Ext.ux.Calendar</a><br/><a href='source/Ext.ux.Calendar.html#Ext-ux-Calendar-cfg-value' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ux.Calendar-cfg-value' class='name not-expandable'>value</a><span> : Date</span></div><div class='description'><div class='short'><p>Initially selected date.</p>\n</div><div class='long'><p>Initially selected date.</p>\n</div></div></div><div id='cfg-weekStart' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Calendar' rel='Ext.ux.Calendar' class='definedIn docClass'>Ext.ux.Calendar</a><br/><a href='source/Ext.ux.Calendar.html#Ext-ux-Calendar-cfg-weekStart' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ux.Calendar-cfg-weekStart' class='name expandable'>weekStart</a><span> : Number</span></div><div class='description'><div class='short'>Starting day of the week. ...</div><div class='long'><p>Starting day of the week. (0 = Sunday, 1 = Monday ... etc)</p>\n<p>Defaults to: <code>1</code></p></div></div></div><div id='cfg-weekendCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Calendar' rel='Ext.ux.Calendar' class='definedIn docClass'>Ext.ux.Calendar</a><br/><a href='source/Ext.ux.Calendar.html#Ext-ux-Calendar-cfg-weekendCls' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ux.Calendar-cfg-weekendCls' class='name expandable'>weekendCls</a><span> : String</span></div><div class='description'><div class='short'>CSS class added to any date cells that are on the weekend ...</div><div class='long'><p>CSS class added to any date cells that are on the weekend</p>\n<p>Defaults to: <code>&quot;weekend&quot;</code></p></div></div></div></div></div><div id='m-method'><div class='definedBy'>Defined By</div><h3 class='members-title'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Calendar' rel='Ext.ux.Calendar' class='definedIn docClass'>Ext.ux.Calendar</a><br/><a href='source/Ext.ux.Calendar.html#Ext-ux-Calendar-method-constructor' target='_blank' class='viewSource'>view source</a></div><strong class='constructor-signature'>new</strong><a href='#!/api/Ext.ux.Calendar-method-constructor' class='name expandable'>Ext.ux.Calendar</a>( <span class='pre'>Object config</span> ) : Object</div><div class='description'><div class='short'>Instantiate a new calendar ...</div><div class='long'><p>Instantiate a new calendar</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getCellDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Calendar' rel='Ext.ux.Calendar' class='definedIn docClass'>Ext.ux.Calendar</a><br/><a href='source/Ext.ux.Calendar.html#Ext-ux-Calendar-method-getCellDate' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ux.Calendar-method-getCellDate' class='name expandable'>getCellDate</a>( <span class='pre'>Ext.Element dateCell</span> ) : Date</div><div class='description'><div class='short'>Returns the Date associated with the specified cell ...</div><div class='long'><p>Returns the Date associated with the specified cell</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dateCell</span> : Ext.Element<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Date</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getDateCell' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Calendar' rel='Ext.ux.Calendar' class='definedIn docClass'>Ext.ux.Calendar</a><br/><a href='source/Ext.ux.Calendar.html#Ext-ux-Calendar-method-getDateCell' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ux.Calendar-method-getDateCell' class='name expandable'>getDateCell</a>( <span class='pre'>Ext.Element date</span> ) : Ext.Element</div><div class='description'><div class='short'>Returns the cell representing the specified date ...</div><div class='long'><p>Returns the cell representing the specified date</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>date</span> : Ext.Element<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ext.Element</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-refresh' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Calendar' rel='Ext.ux.Calendar' class='definedIn docClass'>Ext.ux.Calendar</a><br/><a href='source/Ext.ux.Calendar.html#Ext-ux-Calendar-method-refresh' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ux.Calendar-method-refresh' class='name expandable'>refresh</a>( <span class='pre'></span> ) : void</div><div class='description'><div class='short'>Refreshes the Calendar focussed around the date in \"this.value\". ...</div><div class='long'><p>Refreshes the Calendar focussed around the date in \"this.value\".\nFires the 'refresh' event</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-refreshDelta' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Calendar' rel='Ext.ux.Calendar' class='definedIn docClass'>Ext.ux.Calendar</a><br/><a href='source/Ext.ux.Calendar.html#Ext-ux-Calendar-method-refreshDelta' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ux.Calendar-method-refreshDelta' class='name expandable'>refreshDelta</a>( <span class='pre'>Number delta</span> ) : void</div><div class='description'><div class='short'>Refreshes the calendar moving it forward (delta = 1) or backward (delta = -1) ...</div><div class='long'><p>Refreshes the calendar moving it forward (delta = 1) or backward (delta = -1)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>delta</span> : Number<div class='sub-desc'><ul>\n<li>integer representing direction (1 = forward, =1 = backward)</li>\n</ul>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeSelectedCell' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Calendar' rel='Ext.ux.Calendar' class='definedIn docClass'>Ext.ux.Calendar</a><br/><a href='source/Ext.ux.Calendar.html#Ext-ux-Calendar-method-removeSelectedCell' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ux.Calendar-method-removeSelectedCell' class='name expandable'>removeSelectedCell</a>( <span class='pre'></span> ) : void</div><div class='description'><div class='short'>Removes the selectedCls from any cells that have it ...</div><div class='long'><p>Removes the selectedCls from any cells that have it</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-selectDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Calendar' rel='Ext.ux.Calendar' class='definedIn docClass'>Ext.ux.Calendar</a><br/><a href='source/Ext.ux.Calendar.html#Ext-ux-Calendar-method-selectDate' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ux.Calendar-method-selectDate' class='name expandable'>selectDate</a>( <span class='pre'>Object date</span> ) : void</div><div class='description'><div class='short'>Adds the selected class to the specified date's cell. ...</div><div class='long'><p>Adds the selected class to the specified date's cell. If it isn't in the current view\nthen the calendar will be refreshed to move the date into view.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>date</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setMode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Calendar' rel='Ext.ux.Calendar' class='definedIn docClass'>Ext.ux.Calendar</a><br/><a href='source/Ext.ux.Calendar.html#Ext-ux-Calendar-method-setMode' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ux.Calendar-method-setMode' class='name expandable'>setMode</a>( <span class='pre'>String mode</span> ) : void</div><div class='description'><div class='short'>Changes the Calendar's mode ...</div><div class='long'><p>Changes the Calendar's mode</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>mode</span> : String<div class='sub-desc'><p>Valid values are 'month' and 'week'</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Calendar' rel='Ext.ux.Calendar' class='definedIn docClass'>Ext.ux.Calendar</a><br/><a href='source/Ext.ux.Calendar.html#Ext-ux-Calendar-method-setValue' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ux.Calendar-method-setValue' class='name expandable'>setValue</a>( <span class='pre'>Date v</span> ) : void</div><div class='description'><div class='short'>Set selected date. ...</div><div class='long'><p>Set selected date.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : Date<div class='sub-desc'><p>Date to select.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div><div id='m-event'><div class='definedBy'>Defined By</div><h3 class='members-title'>Events</h3><div class='subsection'><div id='event-refresh' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Calendar' rel='Ext.ux.Calendar' class='definedIn docClass'>Ext.ux.Calendar</a><br/><a href='source/Ext.ux.Calendar.html#Ext-ux-Calendar-event-refresh' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ux.Calendar-event-refresh' class='name expandable'>refresh</a>( <span class='pre'><a href=\"#!/api/Ext.ux.Calendar\" rel=\"Ext.ux.Calendar\" class=\"docClass\">Ext.ux.Calendar</a> this</span> )</div><div class='description'><div class='short'>Fires when the Calendar's view is regenerated ...</div><div class='long'><p>Fires when the Calendar's view is regenerated</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : <a href=\"#!/api/Ext.ux.Calendar\" rel=\"Ext.ux.Calendar\" class=\"docClass\">Ext.ux.Calendar</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='event-selectionchange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Calendar' rel='Ext.ux.Calendar' class='definedIn docClass'>Ext.ux.Calendar</a><br/><a href='source/Ext.ux.Calendar.html#Ext-ux-Calendar-event-selectionchange' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ux.Calendar-event-selectionchange' class='name expandable'>selectionchange</a>( <span class='pre'><a href=\"#!/api/Ext.ux.Calendar\" rel=\"Ext.ux.Calendar\" class=\"docClass\">Ext.ux.Calendar</a> this, Date previousValue, Date newvalue</span> )</div><div class='description'><div class='short'>Fires when the Calendar's selected date is changed ...</div><div class='long'><p>Fires when the Calendar's selected date is changed</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : <a href=\"#!/api/Ext.ux.Calendar\" rel=\"Ext.ux.Calendar\" class=\"docClass\">Ext.ux.Calendar</a><div class='sub-desc'>\n</div></li><li><span class='pre'>previousValue</span> : Date<div class='sub-desc'><p>Previously selected date</p>\n</div></li><li><span class='pre'>newvalue</span> : Date<div class='sub-desc'><p>Newly selected date</p>\n</div></li></ul></div></div></div></div></div></div></div>","requires":[],"alternateClassNames":[],"href":"Ext.ux.Calendar.html#Ext-ux-Calendar"});