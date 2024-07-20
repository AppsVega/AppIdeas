function P(){
    let valueP1 = document.getElementById("P1").value
    let valueP2 = document.getElementById("P2").value
    let valueP3 = document.getElementById("P3").value
    let valueP4 = document.getElementById("P4").value
    document.getElementById("br").style.borderRadius = `${valueP1}px ${valueP2}px ${valueP4}px ${valueP3}px`
}