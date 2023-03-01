$(()=>{

//api key : 11b440fb9ff34af9a49e547f77c68595
//https://randommer.io/

    /*à supprimer dès que la page est prête*/
    //$("#SandBox").load("lesJeux/jeNAiJamais.html")

    $("#picolo").click(()=>{
        $("#SandBox").load("lesJeux/picolo.html")
    })
    $("#jeNAiJamais").click(()=>{
        $("#SandBox").load("lesJeux/jeNAiJamais.html")
    })
    $("#actionVerite").click(()=>{
        $("#SandBox").load("lesJeux/actionOuVerite.html")
    })
    $("#rougeNoir").click(()=>{
        $("#SandBox").load("lesJeux/rougeEtNoir.html")
    })
    $("#plusMoins").click(()=>{
        $("#SandBox").load("lesJeux/plusOuMoins.html")
    })
})
