YUI.add("ape-af-templates-message",function(e,t){dust.cache=dust.cache||{},dust.cache[t]=function(){return function(){function e(e,r){return e.write('<div role="alertdialog" tabindex="0" class="').reference(r.get("stencilLevel"),r,"h").write(" ").reference(r.get("stencilType"),r,"h").write('Alert js-msg" aria-labelledby="desc-').reference(r.get("guid"),r,"h").write('">').write("\n	").exists(r.get("glyphHook"),r,{"else":t,block:n},null).write("\n    ").write('<p id="desc-').reference(r.get("guid"),r,"h").write('" class="Bfc Reset Mt-2">').reference(r.get("content"),r,"h",["s"]).write("</p>").write("\n").write("</div>").write("\n")}function t(e,t){return e.write("\n	    ").write('<span class="Alert').reference(t.get("stencilLevel"),t,"h").write('Icon Icon Fl-start Mend-10"> ').reference(t.get("stencilIcon"),t,"h",["s"]).write('<b class="Hidden">').reference(t.get("stencilLevel"),t,"h").write("</b></span>").write("\n	    ").write('<button class="AlertCloseBtn Icon Fl-end Mstart-10 ButtonNaked js-msg-close">&#xe009;<b class="Hidden">Close</b></button>').write("\n    ")}function n(e,t){return e.write("\n	    ").write('<span class="').reference(t.get("glyphHook"),t,"h").write(' AlertIcon Fl-start Mend-10"><b class="Hidden">').reference(t.get("stencilLevel"),t,"h").write("</b></span>").write("\n	    ").write('<button class="').reference(t.get("glyphHook"),t,"h").write(' AlertCloseBtn Fl-end Mstart-10 ButtonNaked js-msg-close"><b class="Hidden">Close</b></button>').write("\n    ")}return dust.register("ape-af-templates-message",e),e}()}(),dust.cache["ape-af:message.dust"]=dust.cache["ape-af:message"]=dust.cache[t],e.Template._cache=e.Template._cache||{},e.Template._cache["ape-af/templates/message"]=function(e,n){e=e||{},dust.render(t,e,n)}},"@VERSION@",{requires:["template-base","dust"]});