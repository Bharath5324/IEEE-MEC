var events = JSON.parse(data);
console.log(events);
blog = document.getElementById("blog");
var len = events.length;
// function blog(j){
//     var division = document.getElementById("image");
//     var x = document.createElement("img")
//     x.setAttribute("class", "img-fluid");
//     x.src = events[j].eventImg;
//     x.setAttribute("alt", "");
//     division.appendChild(x);
//     division = document.getElementById("date");
//     x = document.createElement("li");
//     var head = '<i class="lnr lnr-user></i>' + events[j].eventDate;
//     x.innerHTML = head;
//     division.appendChild(x);
//     division = document.getElementById("event_details");
//     var h = document.createElement('h2')
//     h.setAttribute("class", "event_title");
//     h.innerHTML = events[j].eventName;
//     x = document.createElement('p');
//     x.innerHTML = events[j].eventDesc;
//     division.appendChild(h);
//     division.appendChild(x);
// }
for(let i=0;i<len;i+=1){
    var main = document.createElement('div');
    main.setAttribute("class", "col-lg-4 col-sm-6");
    var sub = document.createElement('div');
    sub.setAttribute("class", "event_post")
    var img = document.createElement('img')
    img.src = events[i].eventImg;
    var title = document.createElement('div');
    // title.href = "event-details.html";
    var head = '<h2 class="event_title">' + events[i].eventName + '</h2>';
    title.innerHTML = head;
    var list = document.createElement('ul');
    list.setAttribute("class", "list_style sermons_category event_category");
    var l1 = document.createElement('li');
    var head = '<i class="lnr lnr-user"></i>' + events[i].eventDate;
    l1.innerHTML = head;
    list.appendChild(l1);
    var det = document.createElement('button');
    det.setAttribute("class", "btn_hover");
    //det.setAttribute("data-toggle", "modal");
    //det.setAttribute("data-target", "#myModel");
    //det.href = "event-details.html";
    det.innerHTML = "Veiw Details";
    det.onclick = function(i){
        
    };
    sub.appendChild(img);
    sub.appendChild(title);
    sub.appendChild(list);
    sub.appendChild(det);
    main.appendChild(sub);
    blog.appendChild(main);
}
