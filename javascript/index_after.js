let astro = document.getElementById('astro');
            let zen = document.getElementById('zen');
            let dino = document.getElementById('dino');
            let art = document.getElementById('pic');
            window.addEventListener('scroll',function(){
                let value = window.scrollY;
                astro.style.left = value * 0.09 + '%';
                astro.style.top =  10+value * 0.09 + 'px';
                zen.style.left = value * 0.9 + 'px';
                zen.style.top = -50 +value * 0.09 + 'px';
                art.style.opacity = (value - 1500) / 1000;
                // dino.style.left = (value * 0.4 )+ 'px';
                // dino.style.top = 300 + value * 0.08 + 'px';
                
                if((value - 910.8 )>=0)
                {
                    dino.style.left = -50 + (value - 910.8 ) * 0.07 + '%';
                }
               if((value - 482.16)>=0)
               {
                dino.style.top = 50+ (value - 482.16) * 0.09 + 'px';
               }
                
            })