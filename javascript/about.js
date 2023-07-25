let pic=1;
        function moon() 
        {   
            if(pic==1)
            {
            document.getElementById("pic").style.display="none";
            document.getElementById("png").style.display="block";
            pic--;
            }
            else
            {
            document.getElementById("pic").style.display="block";
            document.getElementById("png").style.display="none";
            pic++;
            }
        }
        let moona = document.getElementById('pic');
        let moom = document.getElementById('png');

        window.addEventListener('scroll', function () {
            let value = window.scrollY;
            moona.style.opacity = (1700 - value) / 1000;
            moom.style.opacity = (value - 1300) / 1000;
        })