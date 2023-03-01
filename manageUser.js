$(()=>{

    //***************
    //****AddUser****
    //***************

    const controlUserAddition = () => {
        //control de la valeur a ajouter
        var players = getPlayerFromLocalStorage()
        nameOfTheNewPlayer = $(".newPlayer").val()
        playerOk = true
        //check si le champ est vide
        if (nameOfTheNewPlayer != "") {
            //check si l'user est déja présent dans la liste
            if(players != null){
                for (let i = 0; i < players.length; i++) {
                    if(nameOfTheNewPlayer == players[i]){
                        playerOk = false
                    }
                }
            }
            //si tout ok on ajoute
            if(playerOk){
                addPlayersInLocalStorage()
            }
        }
    }

    const addPlayersInLocalStorage = () => {
        nameOfTheNewPlayer = $(".newPlayer").val()
        var previousList = localStorage.getItem("players")
        if (previousList!==null) {
            previousList = previousList+nameOfTheNewPlayer+"/"
        }else{
            previousList = nameOfTheNewPlayer+"/"
        }
        localStorage.setItem("players",previousList)
        $(".newPlayer").val("")
        //pour éviter dafficher la liste en double on la reset
        displayPlayers()
    }
    
    $(".newPlayer").keypress(e=>{
        if(e.keyCode == '13'){
            controlUserAddition()
        }
        // pour éviter un "/" dans les users players
        if(e.keyCode == '47'){
            e.preventDefault()
        }
    })

    
    $(".addUser").click(()=>{
        controlUserAddition()
    })

    //******************* */
    //******display****** */
    //******************* */

    //example of return : (6) ['test', 'test', 'test', 'test', 'test', 'test']
    const getPlayerFromLocalStorage = () => {
        var players = localStorage.getItem("players")
        if (players!==null) {
            players = players.split("/")
            players.splice(-1)
        }
        return players
    }

    const displayPlayers = () => {
        $(".previousUsers").remove()
        var players = getPlayerFromLocalStorage()
        if (players!=null) {
            players.forEach((element, i) => {
                var div = $("<div></div>")
                div.addClass("input-group mb-3 previousUsers")
                var input = $("<input></input>")
                input.addClass("form-control").val(element).prop("disabled",true)
                var button = $("<button></button>")
                button.text("Ciao")
                button.attr("id",i)
                button.addClass("btn btn-warning removeUser")
                div.append(input)
                div.append(button)
                $(".listeDesJoueurs").prepend(div)
            })
        }
    }  
    
    //quand on affiche le bandeau déroulant a gauche avec les users tout ca
    $(".players").click(()=>{
        displayPlayers()
    })

    //**************** */
    //*****remove***** */
    //**************** */

    const removeAllUser = () => {
        localStorage.setItem("players",[])
        displayPlayers()
    }

    const removeOneUser = (itemToDelete) => {
        var newListOfPlayers = []
        var previousPlayer = getPlayerFromLocalStorage()
        previousPlayer.splice(itemToDelete,1)
        for (let i = 0; i < previousPlayer.length; i++) {
            newListOfPlayers += previousPlayer[i]+"/"
        }
        localStorage.setItem("players",newListOfPlayers)
        displayPlayers()
    }

    $(".removeAll").click(()=>{
        removeAllUser()
    })

    $(".listeDesJoueurs").on("click",".removeUser", e => { 
        var itemClicked = e.target.id
        removeOneUser(itemClicked)
    })

})