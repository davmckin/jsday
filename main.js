movie_arr = []
movie_arr.push(
  {
  title: "LOTR: Fellowship of the Ring",
  director_list: "Peter Jackson",
  genre: ["Fantasy", "Drama"],
  year: "2001",
  actor_list: ["Elijah Wood", "Sean Astin", "Sir Ian McKellen", "Viggo Mortenson", "John Rhys-Davies"],
  
})
movie_arr.push(
  {
  title: "Star Wars: EpV- Empire Strikes Back",
  director_list: "Irvin Kershner",
  genre: ["Western", "Fantasy", "Science Fiction"],
  year: "1980",
  actor_list: ["Carrie Fisher", "Harrison Ford", "Mark Hamill", "Alec Guiness", "Peter Mayhew", "Anthony Daniels", "Kenny Baker"]
})
movie_arr.push(
  {
  title: "A Knight's Tale",
  director_list: "Brian Helgeland",
  genre: ["Drama", "Action"],
  year: "2001",
  actor_list: ["Heath Ledger", "Shannyn Sossamon", "Paul Bettany", "Rufus Sewell", "Mark Addy"]
})
movie_arr.push(
  {
  title: "Shawshank Redemption",
  director_list: "Frank Darabont",
  genre: ["Drama", "Thriller"],
  year: "1994",
  actor_list: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "Clancy Brown", "Gil Bellows"]
})
movie_arr.push(
  {
  title: "Watchmen",
  director_list: "Zack Snyder",
  genre: ["Drama", "Thriller"],
  year: "2009",
  actor_list: ["Malin Akerman", "Jeffrey Dean Morgan", "Jackie Earl Haley", "Patrick Wilson", "Billy Crudup"]
})

movie_arr.sort(function(a, b)
{
  if(a.title < b.title) return -1;
  if(a.title > b.title) return 1;
  return 0;
})


console.log(JSON.stringify(movie_arr))

json_string = JSON.stringify(movie_arr)

element = document.getElementById('content')
element.innerHTML += "<tr></tr>"
list = document.querySelector("#content tr")
movie_arr.forEach(function(item){
  list.innerHTML += "<td>" + item.title + item.director_list + item.genre + item.year + item.actor_list + "</td>"
})

movie_arr.forEach(function(item){
  switch(item.title){
    case "LOTR: Fellowship of the Ring":
      item.rating = "8.9", item.metascore = "94"
      break
    // case "Star Wars: EpV- Empire Strikes Back"
  }



  // if(item.title === "LOTR: Fellowship of the Ring")
  //   item.rating = "8.9"

  // else if(item.title === "Star Wars: EpV- Empire Strikes Back")
  // item.push(rating: "8.8", metascore: "81")
  // else if(item.title === "A Knight's Tale")
  // item.push(rating: "6.9", metascore: "54")
  // else if(item.title === "Shawshank Redemption")
  // item.push(rating: "9.3", metascore: "80")
  // else if(item.title === "Watchmen")
  // item.push(rating: "7.6", metascore: "56")
  // else
  // alert("Ya goofed it")

})
