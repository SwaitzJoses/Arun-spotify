
// var user_id = "31xkra7sdng7jg27jsnb5hx65eoi";
// ID = 0sNOF9WDwhWunNAHPD3Baj

var token='BQDSvceNBt67DT8BeOckfpIOnnWDUH_0Si61pnKABz5aishqa5wHlfEhaC_CsEeD3wURRyl-Z7poG-9rlzXaNYfiFASgrErB9CWZxEUJAzZeuZBOP7WktZdYf25d8gB2FOqU_80n_Wo4OecBI-wcOKfKf_KTPjS8gEnj3rwinz2rCWtU24FS_w&refresh_token=AQChcy7XmX3vd7NlLPrvLU9Y9X_dkhyqdz235z2ztskjAIKJEMIz0dXoHsaR3DyWZryLTTDCUIWwyVc1s4wBFbJi9kMVChLAus0DmhzycLp-8zbDW8YnM8Q6NQGB4cvrC-I'

const user = async () => {

	await fetch(`https://api.spotify.com/v1/users/31xkra7sdng7jg27jsnb5hx65eoi`, {
		method: 'GET',
		headers: { 'Authorization' : 'Bearer ' +token  }
})
	.then(function (resp) {
       
        
		return resp.json();
	   
			 })
			 .then(function (jsonString) {
	   
			   document.getElementById("username").innerHTML=jsonString.display_name;
			// document.getElementById("user-image").setAttribute("src",jsonString.images[0].url)
		 console.log(jsonString)
		//  console.log(jsonString.playlists.items[0])
		 })
}

user();



const _getGenres = async () => {

	await fetch(`https://api.spotify.com/v1/browse/categories`, {
		method: 'GET',
		headers: { 'Authorization' : 'Bearer ' + token}
})
	.then(function (resp) {
       
        
		return resp.json();
	   
			 })
			 .then(function (jsonString) {
	   
			   
		 console.log(jsonString)
		 console.log(jsonString.categories.items[0].icons[0])



		var divbg= document.createElement("div");
			 divbg.setAttribute("class","container bg ");
			 document.getElementById("row1").appendChild(divbg);

			 var rowCard=document.createElement("div");
			 rowCard.setAttribute("class","row");
			 divbg.appendChild(rowCard);


		 
		for(let i=0; i<=20; i++){
               
		
			 var mainCard= document.createElement("div");
			 mainCard.setAttribute("class","col-3 haha ");
			  
		

			 var mainCard2= document.createElement("div");
			 mainCard2.setAttribute("class","col ss");
			//  mainCard2.addEventListener("click",goto)
			//  mainCard2.setAttribute("src",jsonString.categories.items[i].icons[0].url);
			 

			 var mainCard3= document.createElement("img");
			 mainCard3.setAttribute("class","col my-1 thumb");
			 mainCard3.setAttribute("id","thumbnail");
			 mainCard3.setAttribute("src",jsonString.categories.items[i].icons[0].url);
			 mainCard3.addEventListener("click",function(){
				location = `${jsonString.categories.items[i].id}.html`});


		console.log(`https://api.spotify.com/v1/browse/categories/playlists`);
			 
			 
			 var mainCard6= document.createElement("div");
			 mainCard6.setAttribute("class","col font");
			 mainCard6.innerHTML=jsonString.categories.items[i].id
			 
			 
			
			
			
			mainCard2.appendChild(mainCard3);
			mainCard.appendChild(mainCard2); 
			mainCard2.appendChild(mainCard6);

			

			rowCard.appendChild(mainCard);
			 


			}


		 })
}

_getGenres();


const createPlaylist = async () => {

	await fetch('https://api.spotify.com/v1/browse/categories/toplists/playlists', {
		method: 'GET',
		headers: { 'Authorization' : 'Bearer ' + token}
})
	.then(function (resp) {
       
        
		return resp.json();
	   
			 })
			 .then(function (jsonString) {
	   
			  
		 console.log(jsonString)
		
		 })
}

createPlaylist();

