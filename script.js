
       let stat = document.getElementById('stat');

       let btn = document.querySelector('button');


       var flag = 0;

       let div = document.querySelector('div');
       let startbutton = document.querySelector('input');
       let body = document.querySelector('body')


    //    function toggle(){

    //     startbutton.style.display = "none"
    //     body.style.backgroundColor = "rgb(30, 190, 153)"
    //     div.style.display = "block"

    //    }
      
       
       btn.addEventListener("click", function(){



        if (flag==0){

            stat.textContent = "You Followed IronMan";
            stat.style.color = "green"
            btn.style.backgroundColor = "red"
            btn.textContent = "Unfollow"
            flag = 1;
        }

        else{

            stat.textContent = "You are not following IronMan";
            stat.style.color = "red"

            btn.style.backgroundColor = "green"
            btn.textContent = "Follow"
            flag=0;



        }




       })
