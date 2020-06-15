
function getStrapiMovies(title) {
    console.log("get strapi movies");
    return fetch("http://strapi.localhost:1337/films")
    .then(response=>response.json())
    .then(data => {
        console.log("data retrieved",data);
        const state = {
            loaded: true,
            films: data,
            error: ""
        }
        return state;
    })
    .catch(e=>{
        console.log("error",e)
        const state = {
            loaded: true,
            films: [],
            error: e
        }
        return state;
    });
    //console.log ("test",test);
    //return "bidule";
  }
  export default getStrapiMovies;