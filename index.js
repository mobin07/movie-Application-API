
let apikey="7749b9a7";
function movies(event)
{
    event.preventDefault();
    let movieName=document.getElementById("movie").value;
    let url="http://www.omdbapi.com/?apikey="+apikey;
    url=url+"&t="+movieName;
    fetch(url).then(function (res)
    {
        return res.json();
    }).then(function(res)
    {
        console.log(res);
        appendData(res);
    }).catch(function(err)
    {
        return 
    })
}

function appendData(data)
{
    console.log(data);
    if(data.Response=="False")
    {
        document.getElementById("container").innerHTML=null;
        let box=document.createElement("div");
        box.setAttribute("id","box1");
        let img=document.createElement("img");
        img.src="https://media0.giphy.com/media/ujwRcmfHSZvjN2rld6/giphy.gif?cid=ecf05e47teid7ekrklmvl3n4ut3m8c3ap17ye58h3audysna&rid=giphy.gif&ct=g";
        box.append(img);
        document.getElementById("container").append(img);
    }
    else{
        document.getElementById("container").innerHTML=null;
    let box=document.createElement("div");
    box.setAttribute("id","box")
    let poster=document.createElement("img");
    poster.src=data.Poster;
    let div=document.createElement("div");
    let title=document.createElement("p");
    title.innerText=`Title:-${data.Title}`;
    let actor=document.createElement("p");
    actor.innerText=`Actors:-${data.Actors}`;
    let release=document.createElement("p");
    release.innerText=`Release Date:-${data.Released}`;
    if(Number(data.imdbRating)>8.0)
    {
        var rating=document.createElement("p");
        let i=document.createElement("i");
        i.setAttribute("class","fa-solid fa-stars");
        rating.append(i);
        rating.innerText=`Rating:-${data.imdbRating}`;
    }
    else{
        var rating=document.createElement("p");
    rating.innerText=`Rating:-${data.imdbRating}`;
    }


    div.append(title,actor,release,rating);
    box.append(poster,div);
    document.getElementById("container").append(box);
    }

}