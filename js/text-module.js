function get(name){
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
}

var text = "";
  $(document).ready(function(){

    Parse.$ = jQuery;
    Parse.initialize('Qud6XC8J8PtKl4QQZDoi1bg4s5wqzewRlgjdJjwR', 'iBdSj2kUv4I9O6ZrfQydAAb3c0zVldhCB8pxRhwr');

    var TextModule = Parse.Object.extend("TextModule");
    var query = new Parse.Query(TextModule);
    var moduleId = get('id');
    query.get(moduleId, {
      success: function(textModule) {
        var title  = textModule.get("title");
        var details = textModule.get("details");
        text = textModule.get("text");

        var paragraph = text,
            sentences = paragraph.split('\n');

        var colorlist = "aqua,aquamarine,black,blue,blueviolet,brown,burlywood,cadetblue,chartreuse,chocolate,coral,cornflowerblue,crimson,cyan,darkblue,darkgray,darkgreen,darkkhaki,darkmagenta,darkolivegreen,darkorange,darkorchid,darkred,darksalmon,darkseagreen,darkslateblue,darkslategray,darkturquoise,deeppink,deepskyblue,dimgray,dodgerblue,firebrick,forestgreen,fuchsia,gold,goldenrod,gray,green,greenyellow,hotpink,indianred,indigo,lawngreeen,lightblue,lightcoral,lime,limegreen,magenta,maroon,navy,olive,orange,orangered,orchid,pink,plum,purple,red,salmon,silver,skyblue,slateblue,slategray,springgreen,steelblue,tan,teal,tomato,turquoise,yellow",
            colors = colorlist.split(",");

        var commonwordslist = "the,be,to,of,and,a,in,that,have,I,it,for,not,on,with,he,as,you,do,at,this,but,his,by,from,they,we,say,her,she,or,an,will,my,one,all,would,there,their,what,so,up,out,if,about,who,get,which,go,me,when,make,can,like,time,no,just,him,know,take,person,into,year,your,good,some,could,them,see,other,than,then,now,look,only,come,its,over,think,also,back,after,use,two,how,our,work,first,well,way,even,new,want,because,any,these,give,day,most,us,are,is",
            commonwords = commonwordslist.split(",");


      var emojis = [];
      emojis.push({unicode:"1f339", singular:"rose", plural:"roses"});
      emojis.push({unicode:"ad-cookies", singular:"cookie", plural:"cookies"});
      emojis.push({unicode:"ad-lion", singular:"lion", plural:"lions"});
      emojis.push({unicode:"1f305", singular:"day", plural:"days"});
      emojis.push({unicode:"1f307", singular:"tomorrow", plural:"tomorrows"});
      emojis.push({unicode:"1f464", singular:"shadow", plural:"shadows"});
      emojis.push({unicode:"ad-valley", singular:"valley", plural:"valleys"});
      emojis.push({unicode:"1f4a3", singular:"war", plural:"wars"});
      emojis.push({unicode:"1f1fa-1f1f8", singular:"nation", plural:"nations"});
      emojis.push({unicode:"1f551", singular:"time", plural:"times"});
      emojis.push({unicode:"1f5fd", singular:"liberty", plural:"liberties"});
      emojis.push({unicode:"1f50a", singular:"sound", plural:"sounds"});
      emojis.push({unicode:"ad-fight", singular:"fight", plural:"fights"});
      emojis.push({unicode:"ad-sons", singular:"son", plural:"sons"});
      emojis.push({unicode:"ad-columbia", singular:"columbia", plural:"columbians"});
      emojis.push({unicode:"ad-forever", singular:"forever", plural:"forevers"});
      emojis.push({unicode:"ad-alma", singular:"alma", plural:"almas"});
      emojis.push({unicode:"ad-violet", singular:"violet", plural:"violets"});
      emojis.push({unicode:"ad-you", singular:"you", plural:"you"});

      var outputArray = [];
        // var output = "";

        for (i = 0; i < sentences.length; i++)
        {
        var outputElement = "";
          var words = sentences[i].split(" ");
          var fontcolor = colors[Math.floor((Math.random() * colors.length) + 0)];
          var hasEmoji = false;
          var unicode = "";

          for (j = 0; j < words.length; j++)
          {
            var trimmed = words[j].replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");

            for (k = 0; k < colors.length; k++)
            {
              if (trimmed.toLowerCase() === colors[k].toLowerCase())
              {
                fontcolor = colors[k];
              }
            }

            var common = false;
            for (g = 0; g < commonwords.length; g++)
            {
              if (trimmed.toLowerCase() === commonwords[g].toLowerCase())
              {
                common=true;
              }
            }

            if (common)
            {
              outputElement = outputElement + words[j].fontcolor(fontcolor) + " ";
            }
            else
            {
              outputElement = outputElement + "<b>" + words[j].fontcolor(fontcolor) + " " +"</b>";
            }

            for (h = 0; h < emojis.length; h++)
            {
              if (trimmed.toLowerCase() === emojis[h].singular || trimmed.toLowerCase() === emojis[h].plural)
              {
                hasEmoji = true;
                unicode = emojis[h].unicode;
              }
            }
          }
          if (unicode === "ad-fight")
          {
            outputElement = outputElement +'<img draggable="false" class="emoji" src="images/fight.jpg">';
          }
          else if (unicode === "ad-valley")
          {
            outputElement = outputElement +'<img draggable="false" class="emoji" src="images/valley.jpg">';
          }
          else if (unicode === "ad-sons")
          {
            outputElement = outputElement +'<img draggable="false" class="emoji" src="images/sons.jpg">';
          }
          else if (unicode === "ad-columbia")
          {
            outputElement = outputElement +'<img draggable="false" class="emoji" src="images/columbia.jpg">';
          }
          else if (unicode === "ad-forever")
          {
            outputElement = outputElement +'<img draggable="false" class="emoji" src="images/forever.jpg">';
          }
          else if (unicode === "ad-lion")
          {
            outputElement = outputElement +'<img draggable="false" class="emoji" src="images/lion.jpg">';
          }
          else if (unicode === "ad-alma")
          {
            outputElement = outputElement +'<img draggable="false" class="emoji" src="images/alma.jpg">';
          }
          else if (unicode === "ad-violet")
          {
            outputElement = outputElement +'<img draggable="false" class="emoji" src="images/violet.jpg">';
          }
          else if (unicode === "ad-you")
          {
            outputElement = outputElement +'<img draggable="false" class="emoji" src="images/you.jpg">';
          }
          else if (unicode === "ad-cookies")
          {
            outputElement = outputElement +'<img draggable="false" class="emoji" src="images/cookies.jpg">';
          }
          else if (hasEmoji == true)
          {
            outputElement = outputElement +'<img draggable="false" class="emoji" src="http://twemoji.maxcdn.com/72x72/' + unicode + '.png">';
          }
          else
          {
            outputElement = outputElement +'<img draggable="false" class="emoji" src="images/white-box.gif">';
          }
          outputArray.push(outputElement);

          var tickerBox = document.createElement("div");
          tickerBox.id = moduleId + "-line-" + i;
          tickerBox.setAttribute("class", "ticker-box");
          tickerBox.innerHTML = "<span><font size='6' color='"+ fontcolor + "'>" +
            outputArray[i] + "</span>";
          document.getElementById("ticker").setAttribute("style", "height:" + i * 120 + "px;margin-bottom:100px;");
          document.getElementById("ticker").appendChild(tickerBox);
        }
        $("#title").html(title);
        $("#details").html(details);
        $("#text").html(text);
      },
      error: function(object, error) {
        console.log("there was an error in retriving in pull-module.js");
      }
    });
  });
