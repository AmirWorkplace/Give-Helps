<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
  </head>
  <body>
    <!-- <div id="pushData"></div> -->
    <!-- <div id="x"></div> -->
    <!-- <div id="allul"></div> -->
    <div id="pushData"></div>
    <!-- <h1>Amir Ali</h1> -->
    <script>
      let crEl = document.createElement("div")
      crEl.classList.add("pushData")
      document.body.appendChild(crEl)
      let curPageUrl = window.location.href
      let apiUrl = curPageUrl.split("?")
      let allDataArray = []
      let a = []
      // console.log(apiUrl)
      $(document).ready(function () {
        $.ajax({
          url: apiUrl[1],
          method: "GET",
          dataType: "json",
          success: function (res) {
            // console.log(res)
            // document.write(res.data[0].author.name)

            // let getData = res.data;
            // $(".pushData").innerHTML += "<ul>"
            // let deta = res.data
            // deta.map(function (item) {
            //   console.log(item)
            //   $("#pushData").html(item)
            //   console.log(item._id)
            // })
            for (var i = 0; i < res.data.length; i++) {
              // let AllData = `
              let allData = `<ul>
                  <li>${res.data[i].category_id}</li>
                  <li>${res.data[i].author.name}</li>
                  <li>${res.data[i].author.published_date}</li>
                  <li><img src="${res.data[i].author.img}" width="100px" height="100px"></li>
                  <li>${res.data[i].details}</li>
                  <li><img src="${res.data[i].image_url}" width="100px" height="100px"></li>
                  <li>${res.data[i].others_info.is_todays_pick}</li>
                  <li>${res.data[i].others_info.is_trending}</li>
                  <li>${res.data[i].rating.number}</li>
                  <li>${res.data[i].rating.badge}</li>
                  <li>${res.data[i].thumbnail_url}</li>
                  <li>${res.data[i].title}</li>
                  <li>${res.data[i].total_view}</li>
                  <li>${res.data[i]._id}</li>
              </ul>`
              console.log(allData)
              // document.write(allData)
              // $("#allul").html(allData[i].join(""))
              // $("#allul").html(`<li>${res.data[i].category_id}</li>`)
              // $("#allul").html(`<li>${res.data[i].author.name}</li>`.join(""))
              // document.querySelector(".pushData").innerHTML = data
              // $("#pushData").html(res.data[i]._id)
              // a.push(res.data[i]._id)
              // let x = res.data[i]._id
              // console.log(x)
              // document.body.innerText = allData
              // console.log(AllData)
              // allDataArray.push(`<li>${res.data[i].category_id}</li>`)
              // let x = document.querySelector("#x")
              // x.insertAdjacentHTML("beforend", allData)
            }
            // console.log(res.data)
            // console.log();
            // $("#pushData").html(res.data.category_id.join(""))
            // $(".pushData").innerHTML += "</ul>"
          },
        })
      })

      $("#pushData").html(a.join("sf"))
      console.log(a.length)
      // console.log(allDataArray)
      //   $("allul").html(allDataArray.join(""))
    </script>
  </body>
</html>
<!-- Next -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
  </head>
  <body>
    <!-- <div id="pushData"></div> -->
    <!-- <div id="x"></div> -->
    <!-- <div id="allul"></div> -->
    <div id="pushData"></div>
    <!-- <h1>Amir Ali</h1> -->
    <script>
      // let crEl = document.createElement("div")
      // crEl.classList.add("pushData")
      // document.body.appendChild(crEl)
      let curPageUrl = window.location.href
      let apiUrl = curPageUrl.split("?")
      // let allDataArray = []
      // let a = []
      // console.log(apiUrl)
      $(document).ready(function () {
        $.ajax({
          url: apiUrl[1],
          method: "GET",
          dataType: "json",
          success: function (res) {
            // console.log(res)
            // document.write(res.data[0].author.name)

            // let getData = res.data;
            // $(".pushData").innerHTML += "<ul>"
            // let deta = res.data
            // deta.map(function (item) {
            //   console.log(item)
            //   $("#pushData").html(item)
            //   console.log(item._id)
            // })

            $("#pushData").innerHTML = "<ul>"
            for (var i = 0; i < res.data.length; i++) {
              // let AllData = `
              $("#pushData").innerHTML += `
                  <li>${res.data[i].category_id}</li>
                  <li>${res.data[i].author.name}</li>
                  <li>${res.data[i].author.published_date}</li>
                  <li><img src="${res.data[i].author.img}" width="100px" height="100px"></li>
                  <li>${res.data[i].details}</li>
                  <li><img src="${res.data[i].image_url}" width="100px" height="100px"></li>
                  <li>${res.data[i].others_info.is_todays_pick}</li>
                  <li>${res.data[i].others_info.is_trending}</li>
                  <li>${res.data[i].rating.number}</li>
                  <li>${res.data[i].rating.badge}</li>
                  <li>${res.data[i].thumbnail_url}</li>
                  <li>${res.data[i].title}</li>
                  <li>${res.data[i].total_view}</li>
                  <li>${res.data[i]._id}</li>
              `
              // console.log(allData)
              // document.write(allData)
              // $("#allul").html(allData[i].join(""))
              // $("#allul").html(`<li>${res.data[i].category_id}</li>`)
              // $("#allul").html(`<li>${res.data[i].author.name}</li>`.join(""))
              // document.querySelector(".pushData").innerHTML = data
              // $("#pushData").html(res.data[i]._id)
              // a.push(res.data[i]._id)
              // let x = res.data[i]._id
              // console.log(x)
              // document.body.innerText = allData
              // console.log(AllData)
              // allDataArray.push(`<li>${res.data[i].category_id}</li>`)
              // let x = document.querySelector("#x")
              // x.insertAdjacentHTML("beforend", allData)
            }
            $("#pushData").innerHTML += "</ul>"
            // console.log(res.data)
            // console.log();
            // $("#pushData").html(res.data.category_id.join(""))
            // $(".pushData").innerHTML += "</ul>"
          },
        })
      })

      // $("#pushData").html(a.join("sf"))
      // console.log(a.length)
      // console.log(allDataArray)
      //   $("allul").html(allDataArray.join(""))
    </script>
  </body>
</html>
<!-- 
 insidethediv.innerHTML = "<ul>";
for (i = 0; i < 5; i++){
insidethediv.innerHTML += "<li>"+i+"</li>";
}
insidethediv.innerHTML += "</ul>";


  test.innerHTML += '<ul>'; 
for (var i = 0; i < data[i]; i++)
{
test.innerHTML += '<li>' + i + '=' + data[i] + '</li>';
} 
test.innerHTML += '</ul>';








#  author:  {name: 'Jimmy Dane', published_date: '2022-08-24 17:27:34', img: 'https://images.unsplash.com/photo-1633332755192-72…HxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'}

# category_id: "01"

# details: "Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, # News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President # Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked # its independence day six months after Russia invaded the country.'The United States of America # is committed to supporting the people of Ukraine as they continue the fight to defend their # sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security # assistance to date: approximately $2."

# image_url: "https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png"

# others_info: {is_todays_pick: false, is_trending: true}

# rating: {number: 4.5, badge: 'Excellent'}

# thumbnail_url: "https://i.ibb.co/QnwC4sG/unsplash-Eh-Tc-C9s-YXsw-11.png"

# title: "Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet"

# total_view: 488

# _id: "0282e0e58a5c404fbd15261f11c2ab6a"# 

 -->
<!-- 






  {
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
  </head>
  <body>
    < !-- <div id="pushData"></div> -- >
    <div id="allul"></div>
    < !-- <h1>Amir Ali</h1> -- >
    <script>
      let crEl = document.createElement("div")
      crEl.classList.add("pushData")
      document.body.appendChild(crEl)
      let curPageUrl = window.location.href
      let apiUrl = curPageUrl.split("?")
      console.log(apiUrl)
      $(document).ready(function () {
        $.ajax({
          url: apiUrl[1],
          method: "GET",
          dataType: "json",
          success: function (res) {
            // console.log(res)
            // document.write(res.data[0].author.name)

            // let getData = res.data;
            $(".pushData").innerHTML += "<ul>"
            for (var i = 0; i < res.data.length; i++) {
              // let AllData = `
              $(".pushData").innerHTML += `
                  <li>${res.data[i].category_id}</li>
                  <li>${res.data[i].author.name}</li>
                  <li>${res.data[i].author.published_date}</li>
                  <li><img src="${res.data[i].author.img}" width="100px" height="100px"></li>
                  <li>${res.data[i].details}</li>
                  <li><img src="${res.data[i].image_url}" width="100px" height="100px"></li>
                  <li>${res.data[i].others_info}</li>
                  <li>${res.data[i].rating}</li>
                  <li>${res.data[i].thumbnail_url}</li>
                  <li>${res.data[i].title}</li>
                  <li>${res.data[i].total_view}</li>
                  <li>${res.data[i]._id}</li>
              `

              // document.querySelector(".pushData").innerHTML = data
              // $(".pushData").html(AllData)
              // console.log(AllData)
            }
            $(".pushData").innerHTML += "</ul>"
          },
        })
      })
    </script>
  </body>
</html>
  }
 -->
    <!-- <div id="pushData"></div> -->
    <!-- <div id="x"></div> -->    <!-- <h1>Amir Ali</h1> -->

    <!-- <div id="allul"></div> -->
<!-- 
// console.log(allDataArray)
      //   $("allul").html(allDataArray.join(""))
 insidethediv.innerHTML = "<ul>";
for (i = 0; i < 5; i++){
insidethediv.innerHTML += "<li>"+i+"</li>";
}
insidethediv.innerHTML += "</ul>";
      let crEl = document.createElement("div")
      crEl.classList.add("pushData")
      document.body.appendChild(crEl)
      let allDataArray = []
      let a = []


  test.innerHTML += '<ul>'; 
for (var i = 0; i < data[i]; i++)
{
test.innerHTML += '<li>' + i + '=' + data[i] + '</li>';
} 
test.innerHTML += '</ul>';

              // document.write(allData)
              // $("#allul").html(allData[i].join(""))
              // $("#allul").html(`<li>${res.data[i].category_id}</li>`)
              // $("#allul").html(`<li>${res.data[i].author.name}</li>`.join(""))
              // document.querySelector(".pushData").innerHTML = data
              // $("#pushData").html(res.data[i]._id)
              // a.push(res.data[i]._id)
              // let x = res.data[i]._id
              // console.log(x)
              // document.body.innerText = allData
              // console.log(AllData)
              // allDataArray.push(`<li>${res.data[i].category_id}</li>`)
              // let x = document.querySelector("#x")
              // x.insertAdjacentHTML("beforend", allData)
                    // console.log(apiUrl)
      // console.log(res)
            // document.write(res.data[0].author.name)

            // let getData = res.data;
            // $(".pushData").innerHTML += "<ul>"
            // let deta = res.data
            // deta.map(function (item) {
            //   console.log(item)
            //   $("#pushData").html(item)
            //   console.log(item._id)
            // })
              // let AllData = `


            // console.log(res.data)
            // console.log();
            // $("#pushData").html(res.data.category_id.join(""))
            // $(".pushData").innerHTML += "</ul>"






#  author:  {name: 'Jimmy Dane', published_date: '2022-08-24 17:27:34', img: 'https://images.unsplash.com/photo-1633332755192-72…HxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'}

# category_id: "01"

# details: "Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, # News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President # Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked # its independence day six months after Russia invaded the country.'The United States of America # is committed to supporting the people of Ukraine as they continue the fight to defend their # sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security # assistance to date: approximately $2."

# image_url: "https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png"

# others_info: {is_todays_pick: false, is_trending: true}

# rating: {number: 4.5, badge: 'Excellent'}

# thumbnail_url: "https://i.ibb.co/QnwC4sG/unsplash-Eh-Tc-C9s-YXsw-11.png"

# title: "Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet"

# total_view: 488

# _id: "0282e0e58a5c404fbd15261f11c2ab6a"# 

 -->
<!-- 






{
    <!DOCTYPE html>
    <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
  </head>
  <body>
    < !-- <div id="pushData"></div> -- >
    <div id="allul"></div>
    < !-- <h1>Amir Ali</h1> -- >
    <script>
      let crEl = document.createElement("div")
      crEl.classList.add("pushData")
      document.body.appendChild(crEl)
      let curPageUrl = window.location.href
      let apiUrl = curPageUrl.split("?")
      console.log(apiUrl)
      $(document).ready(function () {
        $.ajax({
          url: apiUrl[1],
          method: "GET",
          dataType: "json",
          success: function (res) {
            // console.log(res)
            // document.write(res.data[0].author.name)

            // let getData = res.data;
            $(".pushData").innerHTML += "<ul>"
            for (var i = 0; i < res.data.length; i++) {
              // let AllData = `
              $(".pushData").innerHTML += `
                  <li>${res.data[i].category_id}</li>
                  <li>${res.data[i].author.name}</li>
                  <li>${res.data[i].author.published_date}</li>
                  <li><img src="${res.data[i].author.img}" width="100px" height="100px"></li>
                  <li>${res.data[i].details}</li>
                  <li><img src="${res.data[i].image_url}" width="100px" height="100px"></li>
                  <li>${res.data[i].others_info}</li>
                  <li>${res.data[i].rating}</li>
                  <li>${res.data[i].thumbnail_url}</li>
                  <li>${res.data[i].title}</li>
                  <li>${res.data[i].total_view}</li>
                  <li>${res.data[i]._id}</li>
              `

              // document.querySelector(".pushData").innerHTML = data
              // $(".pushData").html(AllData)
              // console.log(AllData)
            }
            $(".pushData").innerHTML += "</ul>"
          },
        })
      })
    </script>
  </body>
</html>
  }
 -->

 // function api(category_id) {
//   return `https://openapi.programming-hero.com/api/news/categories/${category_id}`
// }

// console.log(api(01));


// const home = document.querySelector('#home');
// const about = document.querySelector('#about');
// const contact = document.querySelector('#contact');

// // home.addEventListener('click', function )
// const link = `
//         <li>
//           <a href=""><option id="home" value="1">Home</option></a>
//         </li>
//         <li>
//           <a href=""><option id="about" value="2">About</option></a>
//         </li>
//         <li>
//           <a href=""><option id="contact" value="3">Contact</option></a>
//         </li>

// `;


              // function api(category_id) {
      //   return `https://openapi.programming-hero.com/api/news/categories/${category_id}`
      // }


              // console.log(res.data.news_category[i].category_id)
              // console.log(res.data.news_category[i].category_name)
              // console.log(
              // `https://openapi.programming-hero.com/api/news/category/${res.data.news_category[i].category_id}`)
