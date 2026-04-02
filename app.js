const form = document.getElementById('form');
const answers = {
    q1 : "Mars",
    q2 : "Pacific Ocean",
    q3 : "Au",
    q4 : "China",
    q5 : "Albert Einstein"
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const data = new FormData(form);

    let score = 0;

    for(let [name,values] of data){
         if(answers[name]==values){
            score++;
         }
    }
    console.log(score);

    const result = document.getElementById('result');
    result.style.height = "100px";
    result.style.width = "1000px";
    result.style.display = "flex";
    result.style.marginLeft = "250px";
    result.style.alignItems = "center";
    result.style.justifyContent = "center";
    result.style.backgroundColor = "rgb(253, 251, 250)";
    result.style.border = "2px solid rgb(248, 168, 47)";
    result.style.borderRadius = "15px";
    if(score == 5){
        result.style.color = "green";
        result.textContent="Well Done You have scored 5 out of 5 ";
    }
     if(score == 4){
        result.style.color = "rgb(25, 255, 0)";
        result.textContent="Very Good You have scored 4 out of 5 ";
    }
     if(score == 3){
        result.style.color = "rgb(100, 255, 0)";
        result.textContent="Good You have scored 3 out of 5 ";
    }
     if(score == 2){
        result.style.color = "rgb(255, 247, 0)";
        result.textContent="Would be better You have scored 2 out of 5 ";
    }
     if(score == 1){
        result.style.color = "rgb(255, 116, 3)";
        result.textContent="Not Good You have scored 1 out of 5 ";
    }
     if(score == 0){
        result.style.color = "red";
        result.textContent="Failed you have scored 0 out of 5 ";
    }

    form.reset();
})