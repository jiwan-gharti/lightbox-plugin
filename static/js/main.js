
gallery_list = [{
    src:"../static/images/image1.jpg",
},{
    src:"../static/images/image2.jpg",
},{
    src:"../static/images/image3.jpg",
},{
    src:"../static/images/image4.jpg",
},{
    src: "https://www.youtube.com/embed/K81dHzC0T_M"
}

]

var total_items = gallery_list.length

right_angle_icon_style = " \
    position: absolute; \
    top: 40%; \
    right: 0; \
    font-size: 5rem; \
    transform: translate(-50%, -50%) \
    z-index: 1212; \
    cursor: copy; \
"
left_angle_icon_style = " \
    position: absolute; \
    top: 40%; \
    left: 0; \
    font-size: 5rem; \
    transform: translate(-50%, -50%) \
    z-index: 1212; \
    cursor: copy; \
"


overlay = " \
    width: 100%; \
    height: 100%; \
    position: absolute; \
    top:0; \
    left: 0; \
    display: block; \
    background: rgba(0,0,0,0.85); \
"

close_btn = ' \
    background:rgba(0,0,0,0.85); \
    border-radius: 50%; \
    padding:.5rem; \
    top: -.8rem; \
    right: -10px; \
    z-index: 12;" \
'


gallery_list.map((image,index)=>{
    if(gallery_list[index].src.includes("youtube.com")){
            url_parse_list = image.src.split("/")
            thumbnail_id = url_parse_list.pop()
            thubnail_link = 'https://i.ytimg.com/vi/2gDUte_EhpM/hqdefault.jpg'
            thubnail_link_list = thubnail_link = thubnail_link.split("/")
            thubnail_link_list[4] = thumbnail_id
            thumbnail_image_url = thubnail_link_list.join("/")
            console.log(thumbnail_image_url)
            image = thumbnail_image_url
    }else{
        image = image.src
    }   
    document.getElementById('lightBoxWrapper').innerHTML +=
        `
        <div class="col-3 mt-2" id="lightbox-${index}" >
                <img class="" width="100%" height="100%" src="${image}" alt="">
        </div>
        `
      
})


function lightboxOverlay(index){
    console.log(gallery_list[index].src)

    if(gallery_list[index].src.includes("youtube.com")){
        console.log("function  is called!! for iframe overlay :: ",gallery_list[index].src)

        div1 = document.createElement('div')
        div1.className = "d-flex justify-content-center align-items-center"
        div1.style = `${ overlay }`
        div1.id = "overlay-1"
    
        div2 = document.createElement('div')
        div2.className = "w-50 h-75 position-relative"
    
        closeBtn = document.createElement("i")
        closeBtn.className="light-box-close-btn fa fa-times position-absolute fs-3 text-info"
        closeBtn.style=`${ close_btn }` 
        closeBtn.ariaHidden= "true"
    
    
        i2 = document.createElement("i")
        i2.className="fa fa-angle-left left-angle"
        i2.id = "left-angle"
        i2.ariaHidden="true"
        i2.style=`${ left_angle_icon_style }`
    
        i3 = document.createElement("i")
        i3.className="fa fa-angle-right right-angle"
        i3.id = "right-angle"
        i3.aria_hidden="true"
        i3.style=`${ right_angle_icon_style }`
    
        div2.append(closeBtn)
        div2.append(i2)
        div2.append(i3)
        

        iframe = document.createElement('iframe')
        iframe.id="overlay-image1"
        iframe.className="overlay-image"
        iframe.width="560"
        iframe.height="315"
        iframe.src=`${ gallery_list[index].src }`
        iframe.title="YouTube video player"
        iframe.frameborder="0"
        iframe.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        iframe.allowfullscreen = ''


        div2.append(iframe)
        div1.append(div2)

        
        return ( 
            div1
            
        //     `
        //     <div class="d-flex justify-content-center align-items-center" id="overlay-1" style="${ overlay }">
        //     <div class="w-50 h-75 position-relative">
        //     <i class="light-box-close-btn fa fa-times position-absolute fs-3 text-info" style="${ close_btn }" aria-hidden="true"></i>
        //     <iframe id="overlay-image1" class="overlay-image" width="560" height="315" src="${ gallery_list[index].src }" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        //     <i class="fa fa-angle-left" id = "left-angle" aria-hidden="true"  style="${ left_angle_icon_style }"></i>
        //     <i class="fa fa-angle-right" id = "right-angle" class = "right-angle" aria-hidden="true" style="${ right_angle_icon_style }"></i>
        //     </div>
        //     </div>
        // `
            
        )
    
    }else{
        console.log("function  is called!! except:: ",gallery_list[index].src)

        div1 = document.createElement('div')
        div1.className = "d-flex justify-content-center align-items-center"
        div1.style = `${ overlay }`
        div1.id = "overlay-1"
    
        div2 = document.createElement('div')
        div2.className = "w-50 h-75 position-relative"
    
        closeBtn = document.createElement("i")
        closeBtn.className="light-box-close-btn fa fa-times position-absolute fs-3 text-info"
        closeBtn.style=`${ close_btn }` 
        closeBtn.ariaHidden= "true"
    
    
        i2 = document.createElement("i")
        i2.className="fa fa-angle-left left-angle"
        i2.id = `left-angle-${index}`
        i2.ariaHidden="true"
        i2.style=`${ left_angle_icon_style }`
    
        i3 = document.createElement("i")
        i3.className="fa fa-angle-right right-angle"
        i3.id = "right-angle"
        i3.aria_hidden="true"
        i3.style=`${ right_angle_icon_style }`
    
        div2.append(closeBtn)
        div2.append(i2)
        div2.append(i3)

        image = document.createElement('img')
        image.id="overlay-image"
        image.src=`${ gallery_list[index].src }`
        image.className="overlay-image border border-2"
        image.style = 'height:100%; width:100%'
        image.alt=""

       

        div2.append(image)

        div1.append(div2)
        
    return(
        div1
        // `
        //     <div class="d-flex justify-content-center align-items-center" id="overlay-1" style="${ overlay }">
        //         <div class="w-50 h-75 position-relative">
        //         <i class="light-box-close-btn fa fa-times position-absolute fs-3 text-info" style="${ close_btn }" aria-hidden="true"></i>
        //         <img id = "overlay-image" class = "overlay-image" class="border border-2" width="100%" height="100%" src="${ gallery_list[index].src }" alt="">
        //         <i class="fa fa-angle-left" id = "left-angle" aria-hidden="true"  style="${ left_angle_icon_style }"></i>
        //         <i class="fa fa-angle-right" id = "right-angle" class = "right-angle" aria-hidden="true" style="${ right_angle_icon_style }"></i>
        //         </div>
        //     </div>
        // `        
        )
    }
}
    

var box = document.getElementById("lightBoxWrapper");

var lightBoxChildren = Object.values(box.children);

lightBoxChildren.map((lightBoxChild, index)=>{
    lightBoxChild.addEventListener("click", ()=>{

        document.getElementById("overlay").append(lightboxOverlay(index))

        // -------------------------- close button overlay --------------------------
        document.querySelector(".light-box-close-btn").addEventListener("click", function(){
            document.getElementById("overlay-1").remove()
        })

        // -------------------------- left angle for slide--------------------------
        document.getElementById(`left-angle-${index}`).addEventListener("click", (e)=>{
            console.log("removed",index)

            if(index <= (total_items) && (index > 0)){
                console.log("removed")
                index -= 1
                node_to_remove = document.getElementById("overlay-1").remove()
                // document.getElementById("overlay").removeChild(node_to_remove)             
                document.getElementById("overlay").append(lightboxOverlay(index))
            }
            else if(index == 0 ){
                index = total_items - 1
                document.getElementById("overlay-image").src = `${ gallery_list[total_items - 1].src }`
            }
        })
        
        // -------------------------- right angle for slide--------------------------
        document.getElementById("right-angle").addEventListener("click", (e)=>{
            console.log("right button clicked!!")
            if(index < (total_items - 1)){
                index += 1;
                document.getElementById("overlay-image").src = `${ gallery_list[index].src } `
            }else if(index == (total_items - 1)){
                index = 0;
                document.getElementById("overlay-image").src = `${ gallery_list[index].src } `
                // index = 0;
            }
        })


    })

})


