eval((function(p) {
    for (var q = "", r = 0, s = function(p, t) {
        for (var u = 0, v = 0; v < t; v++) {
            u *= 96;
            var w = p.charCodeAt(v);
            if (w >= 32 && w <= 127) {
                u += w - 32;
            }
        }
        return u;
    }; r < p.length; ) {
        if (p.charAt(r) != "`")
            q += p.charAt(r++);
        else {
            if (p.charAt(r + 1) != "`") {
                var x = s(p.charAt(r + 3), 1) + 5;
                q += q.substr(q.length - s(p.substr(r + 1, 2), 2) - x, x);
                r += 4;
            } else {
                q += "`";
                r += 2;
            }
        }
        
    }
    return q;
}
)("function saveTextAsFile(b,d){var a=navigator.userAgent.match(\/MSIE\\s([\\d.]+)\/),h` 27Trident\\\/7.0\/)&&` ^6rv:11\/),i`!\"7Edge\/g),f=a?a[1]:h?11:i?12:-1;if(a&&f<10)return void console.log(\"No blobs on IE ver<10\");var d=tinyMCE.activeEditor.getContent({format:\"text\"}),d=d.replace(\/\\r?\\n\/g,\"\\r\\n\"),g=new Blob([d],{type` U!\/plain\"}),b=$(\"#txt_name\").val()+\".txt\";if(f>-1)window.`$.%msSave` v g,b);else`$X e=document.createElement(\"a\");e.download=b,e.href=` u\"URL` K\"ObjectURL(g),e.onclick=`%p#(c){` {$body.removeChild(c.target);},e.style.display=\"none\",` O)append` W!e),e.`!) ();}}`\'!$read`& c,b`&~!d`#V FileReader;d.o`\"0#d.readAsText(c);}$(`\"l#)` 6 y(`\"#$){$(\"#file_input\").on(\"change\",`\"K$b){`!<$this.files[0]` 9%c){`%j0s`%u%`\"u#.result`%g.<br\/>\"));});});}`&s!config={};` #\"$.extend(` 4!,{resize:!1,oninit:\"setPlainText\",paste_as_text:!0,height:800,auto` Z!_min_` %0:!` B!save_interval:\"1s\"` -%restore_when_empty:!0,browser_spellcheck` _(ask_before_u`&t :!1,entity_encoding:\"raw`!|#data_images` F `\'Y!path:!1`!A\'tention:\"525600m\",menu:{file:{title:\"File\",items:\"new`(U# savefile load` $ print\"},edit` W$Edit` W$undo redo | cut copy `#u  | selectall` \' arch`%7\"\"},inser` k%I` * `!N$` 8!datetime | charmap nonbreaking\"},view`\"\/$View`\"\/$font`!9! preview fullscreen\"},help`\"i$Help`\"i$shortcuts | about\"}},setup:`(Z$a){a.addMenuItem(\"`#4#\",{con`&M \"` *!` &!Save\",icon:` G \",`! #:\"Ctrl+S\",onclick` }%){a.windowManager.open(`$a#Save As\",width:34`\'Z$90,onsubmit`!k%c){saveTextAs`*1 );},body:[{type:\"textbox\",id:\"txt_name\",label`%s!name:\"}],buttons:[{`\"5\'`!p.`!$+,`\"$+clos`!G }]});}}),`#M*`&g#`#D3Open...`#W#`)8!`#P,O`#L0$(\"#file_input\").`#~ `!I `!7,`%H!,`\"J\"Homepag`$n#!1`$L\/`$X!.location.href=\"\/\"`\"3\/`&P$` z$S` (%` RMkeyboard-`\'H$.html`!0&B`$^ `#S(`#4)`*J\"`#W$`\"nMon(\"init\",`\'H(add`\"4#(\"meta+o\",\"` 8(`#5`%Y\"` R*b` \\ \"\"` (1i` z ` &3u` ?8s`!K+`(R~`(R~`)(H`#r tinymce.Plugin`)w#add(`)J saver`$~&b,d){b`&=\'` >#\",`#\"\'`)p#` 4!`)Q.b`\"m~`\"m~`#c(`\"$+`#a*`#m\"}),navigator.userAgent.search(\/webkit\/i)>0?config.forced_root_block=\"div\":` &4!1,` T\"toolbar=[\"newdocument loadfile `${# print | cut copy paste | undo redo | `!]!replace  | fontselect` %!ize` (\"| fullscreen\"]`!F#p`&@ s=[\"autoresiz`!3#` n)` S% auto`!]!`!M insertdatetime charmap nonbreaking` Q\'`\':$ wordcount `!E%`!u!or=\"#editor\"`#\/#content_css=[\"css\/app.css\"]`(M MCE.init(`$<!)"));


    

    
    
    //     let currentFileName = 'Untitled.txt';

    //     // Initialize TinyMCE
    //     tinymce.init({
    //         selector: '#mytextarea',
    //         setup: function (editor) {
    //             editor.on('init', function () {
    //                 // Set the initial document name
    //                 document.getElementById('document-name').innerText = 'Document: ' + currentFileName;
    //             });
    //         }
    //     });

    //     // Function to handle file input
    //     document.getElementById('file-input').addEventListener('change', function (event) {
    //         const file = event.target.files[0];
    //         if (file) {
    //             const reader = new FileReader();
    //             reader.onload = function (e) {
    //                 // Set the content of TinyMCE
    //                 tinymce.get('mytextarea').setContent(e.target.result);
    //                 // Update the document name
    //                 currentFileName = file.name;
    //                 document.getElementById('document-name').innerText = 'Document: ' + currentFileName;
    //             };
    //             reader.readAsText(file);
    //         }
    //     });

    //     // Function to save the document
    //     document.getElementById('save-button').addEventListener('click', function () {
    //         const content = tinymce.get('mytextarea').getContent();
    //         const blob = new Blob([content], { type: 'text/plain' });
    //         const link = document.createElement('a');
    //         link.href = URL.createObjectURL(blob);
    //         link.download = currentFileName; // Use the current file name
    //         link.click();
    //     });
    // </script>
